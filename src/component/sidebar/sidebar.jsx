import React, { useContext, } from 'react';
// Icons
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
// Packages
import clsx from 'clsx';

import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText'
import Search from './search'
import { Link } from 'react-router-dom';
import Brightness7Icon from '@material-ui/icons/Brightness7';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import Button from '@material-ui/core/Button';
import { themeContext } from "./../Student-datail-context";

// Custom css
import "./sidebar.css";
import { useDispatch, useSelector } from 'react-redux';
import { logOuts } from '../../actions';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: 36,
    },
    hide: {
        display: 'none',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
    },
    drawerOpen: {
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerClose: {
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        overflowX: 'hidden',
        width: theme.spacing(7) + 1,
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing(9) + 1,
        },
    },
    toolbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
}));

export default function MiniDrawer(props) {
    const [isDark, setIsDark] = useContext(themeContext);
    const classes = useStyles();
    const theme = useTheme();
    const user = useSelector(state => state.currentUser.name);
    const [open, setOpen] = React.useState(false);
    const dispatch = useDispatch();

    function logOut() {
        dispatch(logOuts());
    }
    React.useEffect(() => {
        document.querySelector("body").style.backgroundColor = isDark ? "#333" : "#FAFAFA";
    }, [isDark]);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };
    // const [search, setSearch] = useState('');
    // const filteredComponents = card.filter(discription => (
    //     props.component.toLowerCase().includes(setSearch.toLowerCase())
    // ))
    return (

        <div className={classes.root}>
            <CssBaseline />

            <AppBar
                position="fixed"
                className={clsx(classes.appBar, {
                    [classes.appBarShift]: open,
                })}
            >

                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        className={clsx(classes.menuButton, {
                            [classes.hide]: open,
                        })}
                    >
                        <MenuIcon />
                    </IconButton>
                    <div className="header-content-grid">
                        <Link to='/teachersreg'>
                            <div className="header-myaccounst" variant="h6" noWrap>
                                My Account
                                    </div>
                        </Link>
                        <Link to="/">
                            <div className="header-logo">
                                Logo
                        </div>
                        </Link>
                        <div>
                            <div className='search'>

                                <Search

                                />

                            </div>
                        </div>
                    </div>
                    <Button onClick={() => { setIsDark(!isDark) }} style={{ borderRadius: "100%", padding: "6px 14px", minWidth: "unset", height: "50px" }} >
                        {isDark ? <Brightness7Icon style={{ color: "#707070" }} /> : <Brightness4Icon style={{ color: "#707070" }} />}
                    </Button>
                    <div className="devider"></div>
                    <div>Welcome {user}

                    </div>
                    <div id='sdev2' className="devider"></div>

                    <h3 onClick={logOut} className="log-out">
                        <h3 className="log-out">
                            <PowerSettingsNewIcon />
                            Logout
                        </h3>
                    </h3>
                </Toolbar>
            </AppBar>

            <Drawer id='sidebar'
                variant="permanent"
                className={clsx(classes.drawer, {
                    [classes.drawerOpen]: open,
                    [classes.drawerClose]: !open,
                })}
                classes={{
                    paper: clsx({
                        [classes.drawerOpen]: open,
                        [classes.drawerClose]: !open,
                    }),
                }}
            >
                <div className={classes.toolbar}>
                    <IconButton className="text-white-icon" onClick={handleDrawerClose}>
                        {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                    </IconButton>
                </div>
                <Divider />
                <List>
                    {['Registration', 'Attendance / Fees'].map((text, index) => (
                        <Link to={index % 2 === 0 ? "/register" : "/detail"}>
                            <ListItem button key={text}>
                                <ListItemIcon>{index % 2 === 0 ?
                                    <img className="img-icon" src="https://corecampus.s3.ap-south-1.amazonaws.com/images/module_images/assignments.svg" alt="" /> : <img className="img-icon" src="https://www.flaticon.com/premium-icon/icons/svg/2117/2117281.svg" alt="" />}</ListItemIcon>
                                <ListItemText primary={text} />
                            </ListItem>
                        </Link>

                    ))}
                </List>
                <List>
                    {['Groups', 'Reports'].map((text, index) => (
                        <Link to={index % 2 === 0 ? "/grouplist" : "/reports"}>
                            <ListItem button key={text}>
                                <ListItemIcon>{index % 2 === 0 ? <img src='https://www.flaticon.com/svg/static/icons/svg/3588/3588693.svg' alt="" /> : <img src='https://www.flaticon.com/svg/static/icons/svg/1055/1055644.svg' alt="" />}</ListItemIcon>
                                <ListItemText primary={text} />
                            </ListItem>
                        </Link>
                    ))}
                </List>

                <List>
                    {['Add to Group', 'Teachers'].map((text, index) => (
                        <Link to={index % 2 === 0 ? "/add" : "/teachers"}>

                            <ListItem button key={text}>
                                <ListItemIcon>{index % 2 === 0 ? <img src="https://www.flaticon.com/svg/static/icons/svg/3658/3658947.svg" alt="" /> : <img src="https://www.flaticon.com/svg/static/icons/svg/906/906175.svg" alt="" />}</ListItemIcon>
                                <ListItemText primary={text} />
                            </ListItem>
                        </Link>
                    ))}
                </List>

                <List>
                    {['Admin Panel', ''].map((text, index) => (
                        <Link to={index % 2 === 0 ? "/adminpanel" : "/"}>

                            <ListItem button key={text}>
                                <ListItemIcon>{index % 2 === 0 ? <img src="https://www.flaticon.com/svg/static/icons/svg/2913/2913968.svg" alt="" /> : <img src={''} alt="" />}</ListItemIcon>
                                <ListItemText primary={text} />
                            </ListItem>
                        </Link>
                    ))}
                </List>
            </Drawer >
            {props.component}
        </div >
    );
}