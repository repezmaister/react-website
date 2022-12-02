import { Grid, Box, Typography, Button, Link, List, ListItem, ListItemButton } from "@mui/material";
import { useHistory } from 'react-router-dom';


import QUDLogoLT from '../assets/images/logos/logo.png';

export default function WebsiteFooter(props)
{

    const history = useHistory()
    const redirect = (route) => {
        history.push(route)
    }

    return(
        <div>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection:'column',
                    //height:'85vh',
                    alignItems: 'center',
                    justifyContent: 'center',
                    bgcolor: 'background.default',
                    color: 'text.primary',
                    p: 3,pt:7
                }}
            >
                <Grid container spacing={3} justifyContent='center'>
                    <Grid item xs={12} sm={12} md={4} lg={2} xl={2}>
                        <img 
                            src={QUDLogoLT} alt='QUD logo'
                            style={{width:'55%'}}
                        />
                    </Grid>
                    
                    <Grid item xs={12} sm={12} md={4} lg={2} xl={2}>
                        <Typography style={{fontSize:14}}>Anzoátegui Te Enamora</Typography>
                        <Typography style={{fontSize:12}}>
                            <Link sx={{'&:hover':{cursor:'pointer',color:'primary.main'},color:'#000'}} underline="hover" onClick={()=>redirect('/')} >
                                Inicio
                            </Link>
                        </Typography>
                        <Typography style={{fontSize:12}}>
                            <Link sx={{'&:hover':{cursor:'pointer',color:'primary.main'},color:'#000'}} underline="hover" color='primary' onClick={()=>redirect('/')} >
                                Nosotros
                            </Link>
                        </Typography>
                        <Typography style={{fontSize:12}}>
                            <Link sx={{'&:hover':{cursor:'pointer',color:'primary.main'},color:'#000'}} underline="hover" color='primary' onClick={()=>redirect('/resenas')} >
                                Reseñas
                            </Link>
                        </Typography>
                        <Typography style={{fontSize:12}}>
                            <Link sx={{'&:hover':{cursor:'pointer',color:'primary.main'},color:'#000'}} underline="hover" color='primary' onClick={()=>redirect('/revista')} >
                                Revista
                            </Link>
                        </Typography>
                    </Grid>

                    <Grid item xs={12} sm={12} md={4} lg={2} xl={2}>
                        <Typography style={{fontSize:14}}>Aliados</Typography>
                        <Typography style={{fontSize:12}}>
                            <Link href='https://technologicalsharks.com/' target='_blank' sx={{'&:hover':{cursor:'pointer',color:'primary.main'},color:'#000'}} underline="hover" color='primary'>
                                Technological Sharks
                            </Link>
                        </Typography>
                        <Typography style={{fontSize:12}}>
                            <Link href="https://www.instagram.com/_ownthewar/" target='_blank' sx={{'&:hover':{cursor:'pointer',color:'primary.main'},color:'#000'}} underline="hover" color='primary'>
                                Own The War
                            </Link>
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={12} md={4} lg={2} xl={2}>
                        <Typography style={{fontSize:14}}>Legal</Typography>
                        <Typography style={{fontSize:12}}>Política de privacidad</Typography>
                        <Typography style={{fontSize:12}}>Términos y condiciones</Typography>
                    </Grid>
                    <Grid item xs={12} sm={12} md={4} lg={2} xl={2}>
                        <Typography style={{fontSize:14}}>¡Síguenos!</Typography>
                        <Typography style={{fontSize:12}}>
                            <Link href='https://www.instagram.com/Anzteenamora/' target='_blank' sx={{'&:hover':{cursor:'pointer',color:'primary.main'},color:'#000'}} underline="hover" color='primary'>
                                Instagram
                            </Link>
                        </Typography>
                        <Typography style={{fontSize:12}}>
                            <Link href='https://www.facebook.com/anzteenamora/' target='_blank' sx={{'&:hover':{cursor:'pointer',color:'primary.main'},color:'#000'}} underline="hover" color='primary'>
                                Facebook
                            </Link>
                        </Typography>
                        <Typography style={{fontSize:12}}>
                            <Link href='https://www.youtube.com/channel/UCNPUOohb4mj69gSCc4R6CXA' target='_blank' sx={{'&:hover':{cursor:'pointer',color:'primary.main'},color:'#000'}} underline="hover" color='primary'>
                                YouTube
                            </Link>
                        </Typography>
                    </Grid>
                </Grid>
                <Typography style={{textAlign:'center',marginTop:40,marginBottom:10}}>
                    © Anzoátegui Te Enamora . Todos los derechos Reservados.
                </Typography>
                <Link variant='caption' color="#212121" href="https://technologicalsharks.com/" target="_blank" style={{textDecoration:'none',marginBottom:10}}>
                    <Typography style={{textAlign:'center',marginBottom:20,fontSize:11}}>
                        Powered by<br/>Technological Sharks
                    </Typography>
                </Link>{' '}
                
                    
                
            </Box>
        </div>
    )
}