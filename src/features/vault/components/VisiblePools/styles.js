const styles = theme => ({
  scroller: {
    width: '100%',
  },
  subtitle: {
    fontSize: '20px',
    letterSpacing: '0',
    lineHeight: '8px',
    [theme.breakpoints.down('xs')]: {
      lineHeight: '16px',
    },
    fontWeight: '550',
    color: theme.palette.text.primary,
  },
  container: {
    marginBottom: '24px',
    // border: '1px solid ' + theme.palette.background.border,
    boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px !important',
  },
  accordion: {
    width: '100%',
    backgroundColor: theme.palette.background.primary,
  },
  divider: {
    margin: '0 30px',
  },
  networkSummary: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  text: {
    fontSize: '24px',
    letterSpacing: '0',
    lineHeight: '32px',
    fontWeight: '550',
    color: theme.palette.text.primary,
    display: 'flex',
    alignItems: 'center',
  },
  arrowButton: {
    position: 'absolute',
    left: '50%',
    bottom: '-10px',
    borderRadius: '50px',
    outline: 'rgb(0, 28, 70) solid 5px',
  },
});

export default styles;
