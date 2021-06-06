import styled, { css } from 'styled-components/native';
import { PartyLogo as PartyLogoCmp } from '../../Atoms/PartyLogo';
import { ProfileImageProps } from '../../Atoms/ProfileImage';

interface AvatarProps {
  width: number;
}

export const Avatar = styled.View<AvatarProps>`
  max-width: ${({ width }) => width}px;
`;

interface PartyLogoProps {
  variant: ProfileImageProps['variant'];
}

export const PartyLogo = styled(PartyLogoCmp)<PartyLogoProps>`
  position: absolute;
  ${({ variant }) =>
    variant === 'oval'
      ? css`
          right: 0px;
          height: 20%;
          bottom: 10%;
        `
      : css`
          width: 100%;
          height: 20%;
          bottom: 0px;
        `}
`;
