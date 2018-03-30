import React from 'react';
import { MuiThemeProvider } from 'material-ui/styles';
import Menubar from './Menubar';
import ViewData from './ViewData';
import AddData from './AddData';
import API from './API';
import NavFooter from './NavFooter';
import Notify from './Notify';
import { theme, styles } from '../styling'

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentView: 0,
      open: false,
      message: '',
    };
    this.update = this.update.bind(this);
  }

  update = (key, val) => this.setState({ [key]: val });

  render = () => {
    const handleClose = () => this.update('open', false);
    const notify = (message) => {
      this.update('message', message);
      this.update('open', true);
    };

    return (
      <MuiThemeProvider theme={theme}>
        <div className='App' style={{ flexGrow: 1 }}>
          <Menubar />
          {this.state.currentView === 0 && <ViewData
            styles={styles}
            notify={notify}
          />}
          <Notify
            open={this.state.open}
            message={this.state.message}
            handleClose={handleClose}
          />
          {/* Views */}
          {this.state.currentView === 1 && <AddData
            styles={styles}
            notify={notify} />}
          {this.state.currentView === 2 && <API
            styles={styles} />}

          <div style={styles.placeholder}></div>

          <NavFooter
            currentView={this.state.currentView}
            update={this.update}
          />
        </div>
      </MuiThemeProvider>
    );
  }
}
