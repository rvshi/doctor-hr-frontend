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
  elevation: 1,
  wrapper: {margin: '24px auto', maxWidth: 600, textAlign: 'left'},
  paper: {padding: '24px 48px'},
  items: {margin: '16px auto', display: 'block'},
  placeholder: {width: '100%', height: 100}
}