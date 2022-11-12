const size = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  tabletS: '675px',
  tablet: '768px',
  tabletL: '1013px',
  laptop: '1024px',
  laptopM: '1300px',
  laptopL: '1440px',
  desktopS: '1490px',
  desktop: '2560px',
};

export const Device = {
  mobileS: `(min-width: ${size.mobileS})`,
  mobileM: `(min-width: ${size.mobileM})`,
  mobileL: `(min-width: ${size.mobileL})`,
  tabletS: `(min-width: ${size.tabletS})`,
  tablet: `(min-width: ${size.tablet})`,
  tabletL: `(min-width: ${size.tabletL})`,
  laptop: `(min-width: ${size.laptop})`,
  laptopM: `(min-width: ${size.laptopM})`,
  laptopL: `(min-width: ${size.laptopL})`,
  desktopS: `(min-width: ${size.desktopS})`,
  desktop: `(min-width: ${size.desktop})`,
  desktopL: `(min-width: ${size.desktop})`,
};

export const Colors = {
  black: '#000000',
  blue1: '#13212e',
  blue2: '#3d858b',
  blue3: '#c1dfdb',
  white1: '#fafaf5',
  orange1: '#f8bc6e',
  orange2: '#f06024',
  brown: '301008',
  blue: { 0: '#97BFD5', 1: '#5899BC', 2: '#2F80AC', 3: '#205978', 4: '#e9f2f7' },
  blueVariants: ['#97C1D5'],
  carbon: '#424B54',
  fadedRed: '#FBD7D3',
  gray: { 0: '#F2F2F6', 1: '#E1E4EA', 2: '#A4A9AF', 3: '#6A7078' },
  green: '#06D6A0',
  greenVariants: ['#659B45'],
  kimcheColors: ['#2580ac', '#d65050', '#63c3d3', '#f5ae13'],
  orange: '#E28815',
  pink: '#C89FA3',
  pinkVariants: ['#988CD1', '#D25DB9'],
  red: '#EF6461',
  redVariants: ['#DF3333'],
  yellow: '#FFD166',
  yellowVariants: ['#FFF5C2', '#F0AB00', '#FFCC00', '#FDE830'],
  softPink: '#FFDFD4',
  white: '#FFFFFF',

  primary: {
    main: '#5899BC', // kimche main blue, for texts and fill
    light: '#97BFD5', // for icons (for example)
    variant: '#2F80AC', // other variant of kimche main blue, little bit darker
    surface: '#E9F2F7', // light blue for surfaces
    contrastText: '#FFFFFF', // contrast color when background is main color
  },
  disabled: {
    surface: '#F2F2F6',
    contrastText: '#A4A9AF', // contrast color for disabled surface
  },
  error: {
    main: '#EF6461',
    light: '#FBD7D3',
    contrastText: '#FFFFFF',
  },
  alert: {
    main: '#FFD166',
    light: '#FFF5C2',
  },
  bold: {
    main: '#343346',
  },
  success: {
    main: '#06D6A0',
  },
};

export const Spacings = {
  0: '4px',
  1: '8px',
  2: '16px',
  3: '24px',
  4: '32px',
  5: '40px',
  6: '64px',
};

export const TextSizes = {
  small: {
    fontSize: '0.875rem',
    lineHeight: '1.125rem',
  },
  medium: {
    fontSize: '1rem',
    lineHeight: '1.125rem',
  },
  large: {
    fontSize: '1.1975rem',
    lineHeight: '1.22rem',
  },
  extraLarge: {
    fontSize: '1.5rem',
    lineHeight: '1.6rem',
  },
};

export const TextWeights = {
  regular: 'Nunito Sans Regular',
  light: 'Nunito Sans Light',
  semiBold: 'Nunito Sans SemiBold',
  extraBold: 'Nunito Sans ExtraBold',
};

export const BoxShadows = {
  0: '0px 1px 2px rgba(0, 0, 0, 0.25), 0px 2px 4px rgba(0, 0, 0, 0.1), 0px 4px 16px rgba(0, 0, 0, 0.1)',
  1: '0px 1px 2px rgba(0, 0, 0, 0.25), 0px 2px 4px rgba(0, 0, 0, 0.1);',
  2: '0px 2px 10px rgba(0, 0, 0, 0.2)',
};

export const BorderRadius = { 0: '4px', 1: '8px' };

export default {
  BorderRadius,
  BoxShadows,
  Colors,
  Device,
  Spacings,
  TextSizes,
  TextWeights,
};
