import React from 'react';

import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import Icon from 'material-ui/Icon';
import { endpoints } from '../api.js';

const style = {
    code: {
        fontFamily: 'monospace'
    },
    item: {
        margin: '16px auto'
    }
}

const CodeBlock = ({ title, ep }) => {
    return (
        <Typography align="left" style={style.item}>{title}
            <Typography color="secondary">
                <span style={style.code}>{JSON.stringify(ep.in, null, 2)}</span>
            </Typography>
        </Typography>
    )
}

const API = ({ styles }) => {
    return (
        <div style={styles.wrapper} >
            <Grid container spacing={16}>
                <Grid item xs={12}>
                    <Paper elevation={2}
                        style={styles.paper}>
                        <Icon>code</Icon> <Icon>favorite_border</Icon>
                        <Typography
                            variant="headline"
                            color="inherit"
                        >Heart Rate API Usage</Typography>
                    </Paper>
                </Grid>
                {endpoints.map((ep, i) => {
                    return (
                        <Grid item xs={12} key={i}>
                            <Paper elevation={2} style={styles.paper}>
                                <Typography
                                    variant="subheading"
                                    color="primary"
                                    align="left"
                                    style={style.item}
                                >{ep.request}</Typography>
                                <Typography
                                    align="left"
                                    style={style.item}
                                >=> {ep.usage}</Typography>
                                {ep.in && <CodeBlock
                                    title="Example Input: "
                                    ep={ep} />
                                }
                                {ep.out && <CodeBlock
                                    title="Example Output: "
                                    ep={ep} />
                                }
                            </Paper>
                        </Grid>
                    )
                })}
            </Grid>
        </div >
    )
};

export default API;