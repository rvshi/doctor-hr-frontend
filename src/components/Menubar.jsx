import React from 'react';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';

const Menubar = () => {
    return (
        <AppBar position="static" color="primary">
            <Toolbar>
                <Typography
                    align="center"
                    variant="title"
                    color="inherit">
                    Heart Rate Dashboard
                </Typography>
            </Toolbar>
        </AppBar>
    );
}

export default Menubar;