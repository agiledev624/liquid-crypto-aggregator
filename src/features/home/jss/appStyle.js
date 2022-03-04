import { NoEncryption } from '@material-ui/icons';
import { container } from 'assets/jss/material-kit-pro-react.js';

const appStyle = theme => ({
  '@global': {
    body: {
      // background: 'none',
      background: 'radial-gradient(ellipse at bottom, #1b2735 0%, #090a0f 100%)',
      // backgroundColor: theme.palette.background.default,
      // backgroundImage: 'linear-gradient(#1e1e2f,#1e1e24)',
    },
  },
  page: {
    // backgroundColor: theme.palette.background.default,
    // backgroundImage: 'linear-gradient(#1e1e2f,#1e1e24)',

    // background: 'linear-gradient(7.61deg, #aeb5e1 6.14%, #071C82 93%)',

    // background: '#6373d5',
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
