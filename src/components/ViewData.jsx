import React from 'react';
import axios from 'axios';

import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';
import Typography from 'material-ui/Typography';

import DataTable from './DataTable';

const url = 'http://hr.harveyshi.com/api/heart_rate/'
const styles = {
    wrapper: {
        margin: '24px auto',
        maxWidth: 600,
        textAlign: 'center'
    },
    items: {
        margin: 16
    }
}

export default class ViewData extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: 'me@harveyshi.com',
            data: null,
        };
        this.update = this.update.bind(this);
    }

    update = name => event => {
        this.setState({
            [name]: event.target.value,
        });
    };

    getData = () => {
        axios.get(url + this.state.email).then((res) => {
            console.log(res);
            console.log(res.status);
            if (res.status === 200) {
                this.setState({ "data": res.data });
            }
        })
    }

    render = () => {
        return (
            <div style={styles.wrapper} >
                <Grid container spacing={16}>
                    <Grid item xs={12}>
                        <Paper elevation={2}>
                            <form noValidate autoComplete="off">
                                <Typography>
                                    Find heart rate data
                                </Typography>

                                <TextField
                                    label="Email"
                                    value={this.state.email}
                                    onChange={this.update('email')}
                                    margin="normal"
                                    style={styles.items}
                                />
                                <Button
                                    variant="raised"
                                    color="secondary"
                                    onClick={this.getData}
                                    style={styles.items}>
                                    Search
                                </Button>
                            </form>
                        </Paper>
                    </Grid>
                    {this.state.data && <Grid item xs={12}>
                        <Paper elevation={2}>
                            <DataTable data={this.state.data} />
                        </Paper>
                    </Grid>}
                </Grid>
            </div>
        )
    }
}