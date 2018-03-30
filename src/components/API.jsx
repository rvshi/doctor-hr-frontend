import React from 'react';

import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';
import Divider from 'material-ui/Divider';
import Typography from 'material-ui/Typography';
import Icon from 'material-ui/Icon';
import { endpoints } from '../api.js';

const style = {
    code: {
        fontFamily: 'monospace',
        textAlign: 'left'
    },
    item: {
        margin: '16px auto'
    }
}

const CodeBlock = ({ title, example }) => {
    return (
        <div>
            <Typography align="left" style={style.item}>{title}</Typography>
            <Typography color="secondary" style={style.code}>
                {JSON.stringify(example, null, 2)}
            </Typography>
        </div>
    )
}

const API = ({ styles }) => {
    return (
        <div style={styles.wrapper} >
            <Grid container spacing={16}>
                <Grid item xs={12}>
                    <Paper elevation={styles.elevation}
                        style={styles.paper}>
                        <Icon>code</Icon> <Icon>favorite_border</Icon>
                        <Typography
                            variant="headline"
                            color="inherit"
                        >Heart Rate API Usage</Typography>
                        {endpoints.map((ep, i) => {
                            return (
                                <div key={i}>
                                    {i !== 0 && <Divider />}
                                    <Typography
                                        variant="subheading"
                                        color="primary"
                                        align="left"
                                        style={style.item}
                                    >{ep.request}
                                    </Typography>
                                    <Typography
                                        align="left"
                                        style={style.item}
                                    >=> {ep.usage}
                                    </Typography>
                                    {
                                        ep.in && <CodeBlock
                                            title="Example Input: "
                                            example={ep.in} />
                                    }
                                    {
                                        ep.out && <CodeBlock
                                            title="Example Output: "
                                            example={ep.out} />
                                    }
                                </div>

                            )
                        })}
                    </Paper>
                </Grid>
            </Grid>
        </div >
    )
};

export default API;