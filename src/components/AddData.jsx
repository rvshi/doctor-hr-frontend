import React from 'react';
import { addData } from '../requests';

import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';
import Typography from 'material-ui/Typography';
import Icon from 'material-ui/Icon';

export default class AddData extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: 'me@harveyshi.com',
            age: 22,
            hr: 60
        };
        this.update = this.update.bind(this);
    }

    update = name => event => {
        this.setState({
            [name]: event.target.value,
        });
    };

    addData = () => addData(this.state.email, this.state.age, this.state.hr, (res) => {
        if (res.status === 200) {
            this.props.notify('Successfully added entry!');
        } else {
            this.props.notify('Some or all of your inputs are invalid.')
        }
    });

    render = () => {
        const { styles } = this.props;
        return (
            <div style={styles.wrapper} >
                <Grid container spacing={16}>
                    <Grid item xs={12}>
                        <Paper elevation={styles.elevation}
                            style={styles.paper}>
                            <form noValidate autoComplete="off">
                                <Icon>add_circle</Icon> <Icon>favorite_border</Icon>
                                <Typography
                                    variant="headline"
                                    color="inherit"
                                >
                                    Add Heart Rate Data
                                </Typography>
                                <TextField
                                    label="Email"
                                    value={this.state.email}
                                    onChange={this.update('email')}
                                    margin="normal"
                                    fullWidth={true}
                                    style={styles.items}
                                />
                                <TextField
                                    label="Age"
                                    value={this.state.age}
                                    onChange={this.update('age')}
                                    type="number"
                                    margin="normal"
                                    fullWidth={true}
                                    style={styles.items}
                                />
                                <TextField
                                    label="Heart Rate (bpm)"
                                    value={this.state.hr}
                                    onChange={this.update('hr')}
                                    type="number"
                                    margin="normal"
                                    fullWidth={true}
                                    style={styles.items}
                                />

                                <Button
                                    color="secondary"
                                    size="large"
                                    onClick={this.addData}
                                    style={styles.items}>
                                    Add
                                </Button>
                            </form>
                        </Paper>
                    </Grid>
                </Grid>
            </div >
        )
    }
}