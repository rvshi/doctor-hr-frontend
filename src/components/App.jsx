import React from 'react';
import Menubar from './Menubar';
import ViewData from './ViewData';
import NavFooter from './NavFooter';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#E91E63',
    },
    secondary: {
      main: '#2196F3'
    }
  },
});

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentView: 0
    };
    this.update = this.update.bind(this);
  }

  update = (key, val) => {
    this.setState({
      [key]: val,
    });
  };

  render = () => {
    return (
      <MuiThemeProvider theme={theme}>
        <div className='App' style={{ flexGrow: 1 }}>
          <Menubar />
          {this.state.currentView === 0 && <ViewData />}

          <NavFooter
            currentView={this.state.currentView}
            update={this.update}
          />
        </div >
      </MuiThemeProvider>
    );
  }
}
