import React from 'react';
import { getData } from '../requests';

import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';
import Typography from 'material-ui/Typography';
import Icon from 'material-ui/Icon';

import DataTable from './DataTable';
import DataPlot from './DataPlot';

export default class ViewData extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: 'me@harveyshi.com',
            data: null,
        };
        this.update = this.update.bind(this);
    }

    componentDidMount = () => this.getData();

    update = name => event => {
        this.setState({
            [name]: event.target.value,
        });
    };

    getData = () => getData(this.state.email, (res) => {
        if (res.status === 200) {
            this.setState({ "data": res.data.data.reverse() });
        } else {
            this.props.notify('User not found.')
        }
    });

    render = () => {
        const styles = this.props.styles;
        return (
            <div style={styles.wrapper} >
                <Grid container spacing={16}>
                    <Grid item xs={12}>
                        <Paper elevation={styles.elevation}
                            style={styles.paper}>
                            <form noValidate autoComplete="off">
                                <Icon>remove_red_eye</Icon> <Icon>favorite_border</Icon>
                                <Typography
                                    variant="headline"
                                    color="inherit"
                                >
                                    View Heart Rate Data
                                </Typography>

                                <TextField
                                    label="Email"
                                    value={this.state.email}
                                    onChange={this.update('email')}
                                    margin="normal"
                                    fullWidth={true}
                                    style={styles.items}
                                />
                                <Button
                                    variant="raised"
                                    color="secondary"
                                    size="large"
                                    onClick={this.getData}
                                    style={styles.items}>
                                    Search
                                </Button>
                            </form>
                        </Paper>
                    </Grid>
                    {this.state.data &&
                        <Grid item xs={12}>
                            <Paper elevation={styles.elevation}
                                style={{
                                    padding: '24px 0'
                                }}>
                                <Grid container spacing={16}>
                                    <Grid item xs={12}>
                                        <Typography
                                            variant="subheading"
                                        >Heart Rate vs. Time</Typography>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <DataPlot data={this.state.data} />
                                    </Grid>
                                </Grid>
                            </Paper>
                        </Grid>}
                    {this.state.data &&
                        <Grid item xs={12}>
                            <Paper elevation={styles.elevation}>
                                <DataTable data={this.state.data} />
                            </Paper>
                        </Grid>}
                </Grid>
            </div >
        )
    }
}