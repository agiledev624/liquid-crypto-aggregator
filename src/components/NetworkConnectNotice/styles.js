const styles = theme => ({
  notice: {
    backgroundColor: theme.palette.background.primary,
    boxShadow: 'rgb(0 0 0 / 35%) 0px 5px 15px !important',
    padding: 25,
    marginBottom: 25,
    textAlign: 'center',
    color: theme.palette.primary.main,
    '& > :last-child': {
      marginBottom: 0,
    },
  },
  message: {
    marginBottom: 15,
  },
  actions: {
    margin: '-10px -10px 15px 0',
  },
  button: {
    border: '1px solid ' + theme.palette.background.border,
    padding: '4px 8px',
    backgroundColor: theme.palette.background.default,
    textTransform: 'none',
    margin: '10px 10px 0 0',
  },
  note: {
    marginBottom: 15,
    // fontStyle: 'italic',
  },
  error: {
    color: 'red',
  },
});

export default styles;
