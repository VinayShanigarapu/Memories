import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    appBar: {
        borderRadius: 15,
        margin: '30px 0',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
      },
      heading: {
        color: 'white(0,183,255, 1)',
      },
      image: {
        marginLeft: '15px',
      },
      [theme.breakpoints.down('sm')]: { // setting display for smartphone
        mainContainer: {
          flexDirection: 'column-reverse'
        }
      }
}));