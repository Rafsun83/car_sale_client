import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Button, Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    useParams,
    useRouteMatch
} from "react-router-dom";
import DashboardHome from '../../DashboardHome/DashboardHome';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import Allorders from '../../Allorders/Allorders';
import Addproduct from '../Addproduct/Addproduct';
import UseAuth from '../../../Hooks/UseAuth';
import Home from '../../Home/Home/Home';
import Review from '../Review/Review';
import Manageproduct from './Manageproducts/Manageproduct';
import Payment from '../Payments/Payment';


const drawerWidth = 200;

function Dashboard(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    let { path, url } = useRouteMatch();

    const { Logout, Admin } = UseAuth()

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div >
            <Toolbar />
            <Divider />
            <Box style={{ display: 'block', textAlign: 'left', color: 'red' }}>
                <Link to="/home" style={{ textDecoration: 'none', padding: '10px' }}>
                    <Button variant="inherit">Home</Button>
                </Link>

                <Link to={`${url}`} style={{ textDecoration: 'none', padding: '10px' }}>
                    <Button variant="inherit">Dashboard</Button>
                </Link>
                <Link to={`${url}/myorders`} style={{ textDecoration: 'none', padding: '10px' }}>
                    <Button variant="inherit">My Orders</Button>
                </Link>

                <Link to={`${url}/review`} style={{ textDecoration: 'none', padding: '10px' }}>
                    <Button variant="inherit">Review about</Button>
                </Link>
                {
                    Admin && <Box>
                        <Link to={`${url}/makeadmin`} style={{ textDecoration: 'none', padding: '10px' }}>
                            <Button variant="inherit">Make Admin</Button>
                        </Link>

                        <Link to={`${url}/addproduct`} style={{ textDecoration: 'none', padding: '10px' }}>
                            <Button variant="inherit">Add product</Button>
                        </Link>
                        <Link to={`${url}/manageproduct`} style={{ textDecoration: 'none', padding: '10px' }}>
                            <Button variant="inherit">Manage product</Button>
                        </Link>
                    </Box>
                }
                <Link to={`${url}/logout`} style={{ textDecoration: 'none', padding: '10px' }}>
                    <Button onClick={Logout} variant="inherit">Logout</Button>
                </Link>

            </Box>



        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                }}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        Dashboard
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Toolbar />
                <Switch>
                    <Route exact path={path}>
                        <DashboardHome></DashboardHome>
                    </Route>
                    <Route path={`${path}/payment/:bookedorderID`}>
                        <Payment></Payment>
                    </Route>
                    <Route path={`${path}/makeadmin`}>
                        <MakeAdmin></MakeAdmin>

                    </Route>
                    <Route path={`${path}/myorders`}>
                        <Allorders></Allorders>

                    </Route>
                    <Route path={`${path}/addproduct`}>
                        <Addproduct></Addproduct>

                    </Route>
                    <Route path={`${path}/review`}>
                        <Review></Review>

                    </Route>
                    <Route path={`${path}/manageproduct`}>
                        <Manageproduct></Manageproduct>

                    </Route>


                </Switch>

            </Box>
        </Box>
    );
}

Dashboard.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default Dashboard;