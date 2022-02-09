import { container } from 'assets/jss/material-kit-pro-react.js';

const appStyle = theme => ({
  '@global': {
    'html,body': {
      // backgroundColor: theme.palette.background.default,
      backgroundImage: 'linear-gradient(#1e1e2f,#1e1e24)',
    },
  },
  page: {
    // backgroundColor: theme.palette.background.default,
    backgroundImage: 'linear-gradient(#1e1e2f,#1e1e24)',
    minHeight: '100vh',
    position: 'relative',
    overflow: 'hidden',
  },
  container: {
    ...container,
    zIndex: 1,
  },
  children: {
    minHeight: '77vh',
  },
});

export default appStyle;
