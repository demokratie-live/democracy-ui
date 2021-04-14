import React, { useEffect, useState } from 'react';
import styled from 'styled-components/native';
import m from 'moment';

const DateText = styled.Text<{ type: 'future' | 'current' | 'past' }>`
  color: ${({ theme, type }) => {
    switch (type) {
      case 'future':
        return theme.colors.text.date.future;
      case 'current':
        return theme.colors.text.date.current;
      case 'past':
      default:
        return theme.colors.text.date.past;
    }
  }};
  font-size: 12px;
`;

const formatDate = (voteDate: Date) => {
  if (voteDate) {
    // Vergangene Abstimmung
    if (new Date(voteDate) <= new Date()) {
      return m(voteDate).format('DD.MM.YY');
    }

    const daysDate = m(voteDate).endOf('day');
    const days = Math.floor(m.duration(daysDate.diff(m())).asDays());

    if (days > 1) {
      return `${days} Tage`;
    } else if (days === 1) {
      return 'morgen';
    }

    const hours = Math.floor(
      m.duration(m(voteDate).diff(m())).asMinutes() / 60,
    );
    const minutes = `${Math.floor(
      ((m.duration(m(voteDate).diff(m())).asMinutes() / 60) % 1) * 60,
    )}`.padStart(2, '0');
    return `${hours}:${minutes}`;
  }
  return null;
};

export interface VoteDateProps {
  date: Date;
  dateEnd?: Date;
}

export const VoteDate: React.FC<VoteDateProps> = ({ date, dateEnd }) => {
  const [timeLeft, setTimeLeft] = useState(formatDate(date));

  useEffect(() => {
    // TODO check this interval function (should run only on feature procedures)
    if ((dateEnd && dateEnd > new Date()) || date < new Date()) {
      const intervalId = setInterval(() => {
        if (intervalId) {
          setTimeLeft(formatDate(date));
        }
      }, 10000);
      return () => {
        clearInterval(intervalId);
      };
    }
    return;
  }, [date, dateEnd]);

  if (dateEnd && date <= new Date() && dateEnd >= new Date()) {
    return <DateText type={'current'}>läuft</DateText>;
  }

  return (
    <DateText type={date <= new Date() ? 'past' : 'future'}>
      {timeLeft}
    </DateText>
  );
};
