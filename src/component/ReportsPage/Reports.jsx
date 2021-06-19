import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
// Link
import { Link } from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',

        width: '250px'
    },
}));

export default function Report(props) {
    const classes = useStyles();

    return (
        <Grid item xs={6} sm={4} lg={4} xl={4} md={6} sm={12}>
            <Link to={props.link}>

            <Paper id="cardGroup" style={{ borderBottom: "3px solid " + props.color, padding: "30px 50px", marginTop: "10px", boxShadow: "5px 10px 10px #bbbfca" }} className={classes.paper}>
                
                <img style={{ width: "50px", }} className="card-img" src={props.img} alt="" />
                <p style={{ fontWeight: "bold", paddingBottom: "10px", paddingTop:"20px" }}>{props.name} </p>
                
            </Paper>
            </Link>
        </Grid>
    );
}