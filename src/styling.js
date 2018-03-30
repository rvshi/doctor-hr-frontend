import {createMuiTheme} from 'material-ui/styles';

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#E91E63',
    },
    secondary: {main: '#2196F3'}
  },
});

export const styles = {
  wrapper: {margin: '24px auto', maxWidth: 450, textAlign: 'center'},
  paper: {padding: '24px 50px'},
  items: {margin: '16px auto', display: 'block'},
  placeholder: {width: '100%', height: 100}
}