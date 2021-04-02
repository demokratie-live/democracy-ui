export interface Colors {
  primary: string;
  background: string;
  text: {
    primary: string;
    secondary: string;
    colored: string;
  };
  votesUser: {
    yes: string;
    abstination: string;
    no: string;
  };
  votesGovernment: {
    yes: string;
    abstination: string;
    no: string;
    notVoted: string;
  };
  wom: {
    match: string;
    missmatch: string;
  };
  parties: {
    Union: string;
    SPD: string;
    AfD: string;
    FDP: string;
    Grüne: string;
    Linke: string;
    ohne: string;
  };
  dates: {
    soon: string;
    current: string;
    past: string;
  };
}

export const lightColors: Colors = {
  primary: '#4494d3',
  background: '#FFFFFF',
  text: {
    primary: '#333333',
    secondary: '#8F8E94',
    colored: '#4494d3',
  },
  votesUser: {
    yes: '#16C063',
    abstination: '#2882E4',
    no: '#EC3E31',
  },
  votesGovernment: {
    yes: '#99C93E',
    abstination: '#4CB0D8',
    no: '#D43194',
    notVoted: '#B1B3B4',
  },
  wom: {
    match: '#F5A623',
    missmatch: '#B1B3B4',
  },
  parties: {
    Union: '#32302E',
    SPD: '#E3000F',
    AfD: '#009EE0',
    FDP: '#FFED00',
    Grüne: '#46962B',
    Linke: '#CE2C55',
    ohne: '#AAAAAA',
  },
  dates: {
    current: '#44DB5E',
    soon: '#F5A623',
    past: '#FE3824',
  },
};

export const darkColors: Colors = {
  primary: '#29608B',
  background: '#424242',
  text: {
    primary: '#B5B5B5',
    secondary: '#8F8E94',
    colored: '#29608B',
  },
  votesUser: {
    yes: '#11994f',
    abstination: '#1767be',
    no: '#d02013',
  },
  votesGovernment: {
    yes: '#99C93E',
    abstination: '#4CB0D8',
    no: '#D43194',
    notVoted: '#B1B3B4',
  },
  wom: {
    match: '#F5A623',
    missmatch: '#B1B3B4',
  },
  parties: {
    Union: '#32302E',
    SPD: '#E3000F',
    AfD: '#009EE0',
    FDP: '#FFED00',
    Grüne: '#46962B',
    Linke: '#CE2C55',
    ohne: '#AAAAAA',
  },
  dates: {
    current: '#44DB5E',
    soon: '#F5A623',
    past: '#FE3824',
  },
};
