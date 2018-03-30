import React from 'react';
import Paper from 'material-ui/Paper';
import Tabs, { Tab } from 'material-ui/Tabs';
import ViewIcon from 'material-ui-icons/RemoveRedEye';
import AddCircleIcon from 'material-ui-icons/AddCircle';
import APIIcon from 'material-ui-icons/Code';

const style = {
    position: 'fixed',
    bottom: 0,
    left: 0,
    right: 0
}

const NavFooter = ({ currentView, update }) => {
    const handleChange = (e, value) => {
        update('currentView', value);
    };

    return (
        <Paper style={style}>
            <Tabs
                value={currentView}
                onChange={handleChange}
                indicatorColor="primary"
                textColor="primary"
                centered
            >
                <Tab label="View Data" icon={<ViewIcon />} />
                <Tab label="Add Data" icon={<AddCircleIcon />} />
                <Tab label="API Usage" icon={<APIIcon />} />
            </Tabs>
        </Paper>
    );
}

export default NavFooter;