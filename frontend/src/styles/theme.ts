import { extendTheme } from '@chakra-ui/react';

const colors = {
  default: {
    900: '#495057',
    1000: '#353A40', // todo refactor, 50 ~ 900
  },
  header: {
    900: '#353A40',
  },
  subtitle: {
    900: '#666F86',
  },
  caption: {
    900: '#ADB5BD',
  },
  active: {
    900: '#00B900',
  },
  buttonPrimary: {
    50: '#f3fcf3',
    100: '#daf5da',
    200: '#bdedbd',
    300: '#9de49d',
    400: '#77d977',
    500: '#47cc47',
    600: '#04ba04',
    700: '#02a002',
    800: '#017e01',
    900: '#014b01',
  },
  buttonDefault: {
    50: '#f9f9fa',
    100: '#f9f9fa',
    200: '#eceef0',
    300: '#eceef0',
    400: '#dee1e5',
    500: '#dee1e5',
    600: '#ced3d9',
    700: '#ced3d9',
    800: '#c0c4ca',
    900: '#afb3b8',
  },
  buttonRed: {
    50: '#ffe5e5',
    100: '#fbbaba',
    200: '#f28e8e',
    300: '#eb6161',
    400: '#e43635',
    500: '#ca1c1b',
    600: '#9e1414',
    700: '#710d0e',
    800: '#460506',
    900: '#1e0000',
  },
  sideBar: {
    900: '#F8F9FA',
  },
  tableBg: {
    900: '#EDEFF0',
  },
  lineChatBg: {
    900: '#8CABD9',
  },
  lineButtonText: {
    600: '#42659a',
  },
};

const theme = extendTheme({
  fonts: {
    heading: `'Default Font', Roboto`,
    body: `'Default Font', Roboto`,
  },
  colors,
  components: {
    Text: {
      baseStyle: {
        color: colors.default[900],
      },
      variants: {
        // used as <Text variant="secondary">
        header: {
          color: colors.header,
        },
        subtitle: {
          color: colors.subtitle,
        },
        caption: {
          color: colors.caption,
        },
        active: {
          color: colors.active,
        },
      },
    },
    Button: {
      baseStyle: {
        fontFamily: 'Roboto',
      },
    },
  },
});

export default theme;
