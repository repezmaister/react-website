import React, { useState } from 'react';
import { AppBar, Box, Toolbar, IconButton, Menu, Typography, Container, Button, Drawer, ListItem, List, Divider, Link, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import { useHistory } from 'react-router-dom';

import ThemeMode from '../themes/themeMode';

import useScrollTrigger from '@mui/material/useScrollTrigger';
import logo from '../assets/images/logos/logo.png'
import logo_blanco from '../assets/images/logos/logo_blanco.png'
import ScrollToColor01 from './ScrollToColor';

const pages = [
    {name:'Inicio',route:'wallet'},
    {name:'Nosotros',route:'empresas'},
    {name:'Tienda',route:'https://www.anzteenamora.shop/'}
];


const ResponsiveAppBar = (props) => {
    const [anchorEl, setAnchorEl] = useState(null);
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [drawerIsOpen, setDrawerIsOpen] = React.useState(false);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const history = useHistory()
        const redirect = (route) => {
        history.push(route)
    }
  

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const toggleDrawer = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
        return;
        }

        setDrawerIsOpen(open);
    };

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

 

    return (
        <ScrollToColor01>
            <AppBar position="fixed" color="transparent" elevation={1}>
                <Container maxWidth="xl">
                    <Toolbar component='div' disableGutters sx={{display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
                        <Button onClick={()=>history.push('/')} sx={{display:{xs:'none',md:'flex'}}}>
                            <Typography
                                variant="h6"
                                noWrap
                                component="div"
                                sx={{ mr: 5,flexGrow:0}}
                            >
                                <img style={{width:214}} src={logo_blanco} alt='AnzTeEnamora-Logo' />
                            </Typography>
                        </Button>

                        <Button onClick={()=>history.push('/')} sx={{display:{xs:'flex',md:'none'}}}>
                            <Typography
                                variant="h6"
                                noWrap
                                component="div"
                                sx={{ mr: 5,flexGrow:1}}
                            >
                                <img style={{width:150}} src={logo_blanco} alt='AnzTeEnamora-Logo' />
                            </Typography>
                        </Button>

                        <Box sx={{ flexGrow: 0, display:{xs:'none',md:'flex'},alignItems:'center' }}>
                            
                            
                            <Button
                                onClick={()=> redirect('/') }
                                sx={{ my: 2, color:'primary.contrastText', display: 'block' }}
                            >
                                Inicio
                            </Button>
                            
                            <Button
                                onClick={()=> redirect('/nosotros') }
                                sx={{ my: 2, color:'primary.contrastText', display: 'block' }}
                            >
                                Nosotros
                            </Button>
                            
                            
                            {/*<MyApp mode={props.mode}/>*/}
                        </Box>

                        <Box sx={{ flexGrow: 0, display:{xs:'flex',md:'none'},alignItems:'center' }}>
                            
                            <IconButton 
                                onClick={ toggleDrawer(true) }
                                color="inherit"
                            >
                                <MenuIcon/>
                            </IconButton>
                        </Box>
                
                        <Drawer
                            anchor='right'
                            open={drawerIsOpen}
                            onClose={toggleDrawer(false)}
                        >
                            <div style={{width:250}}>
                                <List style={{paddingLeft:10,paddingRight:10}}>
                                    <ListItem>
                                        <Typography>
                                            <Link sx={{'&:hover':{cursor:'pointer',color:'primary.main'},color:'#000'}} underline="hover" onClick={()=>redirect('/')} >
                                                Inicio
                                            </Link>
                                        </Typography>
                                    </ListItem>
                                    <ListItem>
                                        <Typography>
                                            <Link href='https://anzteenamora.com/FITVEN.pdf' target='_blank' sx={{'&:hover':{cursor:'pointer',color:'primary.main'},color:'#000'}} underline="hover" >
                                                FITVEN
                                            </Link>
                                        </Typography>
                                    </ListItem>
                                    <ListItem>
                                        <Typography>
                                            <Link sx={{'&:hover':{cursor:'pointer',color:'primary.main'},color:'#000'}} underline="hover" onClick={()=>redirect('/resenas')} >
                                                Reseñas
                                            </Link>
                                        </Typography>
                                    </ListItem>
                                    <ListItem>
                                        <Typography>
                                            <Link sx={{'&:hover':{cursor:'pointer',color:'primary.main'},color:'#000'}} underline="hover" onClick={()=>redirect('/revista')} >
                                                Revista
                                            </Link>
                                        </Typography>
                                    </ListItem>
                                    <ListItem>
                                        <Typography>
                                            <Link sx={{'&:hover':{cursor:'pointer',color:'primary.main'},color:'#000'}} underline="hover" onClick={()=>redirect('/nosotros')} >
                                                Nosotros
                                            </Link>
                                        </Typography>
                                    </ListItem>
                                    <Divider/>
                                    <ListItem>
                                        <Typography>
                                            <Link href='https://app.anzteenamora.com' target='_blank' sx={{'&:hover':{cursor:'pointer',color:'primary.main'},color:'#000'}} underline="hover" color='primary'>
                                                Iniciar Sesión
                                            </Link>
                                        </Typography>
                                    </ListItem>
                                    <ListItem>
                                        <Button
                                            fullWidth
                                            variant='contained'
                                            style={{background:'#fdec3b',color:'#000',marginRight:5}}
                                            href='https://app.anzteenamora.com'
                                            target='_blank'
                                        >
                                            <Typography style={{fontWeight:'bold'}}>App</Typography>
                                        </Button>
                                    </ListItem>
                                    <ListItem>
                                            <Button fullWidth href='https://app.anzteenamora.com/signup' target='_blank' variant='contained'>
                                                Registrate
                                            </Button>
                                    </ListItem>
                                </List>
                            </div>
                        </Drawer>
                    </Toolbar>
                </Container>
            </AppBar>
        </ScrollToColor01>
    );
};
export default ResponsiveAppBar;
