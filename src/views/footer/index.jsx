import { Box, Button, Container, Divider, Grid, IconButton, Typography } from "@mui/material";

import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';

import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';

import sharkboy from '../../assets/images/sharkboy.png'

export default function Footer()
{
    return(
        <Box
            sx={{
                backgroundColor:'primary.main',
                minHeight:{xs:'95vh',sm:'95vh',md:'85vh',lg:'81.5vh',xl:'81.5vh'},
                pt:10,pb:5
            }}
        >
            <Container maxWidth='xl'>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={12} md={12} lg={6} xl={6} sx={{mb:5}}>
                        <Grid container spacing={3}>
                            <Grid item xs={12} sm={12} md={12} lg={10} xl={10}>
                                <Typography variant='h6' component='p' color='primary.contrastAux'>
                                En Technological Sharks, nuestro trabajo está dirigido en lograr que las necesidades 
                                sociales y empresariales tengan soluciones tecnológicas que contribuyan con el desarrollo 
                                y evolución de la sociedad.<br/><br/>
                                Para eso contamos con equipo de jóvenes emprendedores, visionarios, amantes de la tecnología, 
                                comprometidos con el crecimiento del país, que trabajan con pasión y responsabilidad.
                                </Typography>
                                <br/><br/><br/>
                                <Button variant="contained" color='secondary' size="large">
                                    Solicita una propuesta
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>

                    <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
                        <Grid container spacing={3}>
                            <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
                                <Typography variant='h5' component='h2' color='primary.contrastText'>
                                    ¡Comunícate con nosotros!
                                </Typography>
                                <Divider sx={{height:3,bgcolor:'secondary.main',width:'45%',mt:0,mb:3}}/>
                                <Typography color='primary.contrastAux' variant='h6' component='p' style={{display:'flex',alignItems:'center',marginBottom:20}}>
                                    <WhatsAppIcon fontSize="large" /> +58 412-6898138
                                </Typography>
                                <Typography color='primary.contrastAux' variant='h6' component='p' style={{display:'flex',alignItems:'center',marginBottom:20}}>
                                    <LocationOnIcon fontSize="large" /> Lechería, Venezuela
                                </Typography>

                                <Typography color='primary.contrastAux' variant='h6' component='p' sx={{display:{xs:'none',sm:'none',md:'flex',lg:'flex',xl:'flex'},alignItems:'center'}}>
                                    <EmailIcon fontSize="large" />&nbsp;info@technologicalsharks.com
                                </Typography>
                                <Typography color='primary.contrastAux' variant='h6' component='p' sx={{display:{xs:'flex',sm:'none',md:'none',lg:'none',xl:'none'},alignItems:'center',fontSize:18}}>
                                    <EmailIcon fontSize="large" />&nbsp;info@technologicalsharks.com
                                </Typography>
                                <br/><br/>
                                <Typography variant='h5' component='h2' color='primary.contrastText'>
                                    ¡Síguenos!
                                </Typography>
                                <Divider sx={{height:3,bgcolor:'secondary.main',width:'35%',mt:0,mb:3}}/>
                                <div style={{display:'flex',flexDirection:'row'}}>
                                    <IconButton sx={{color:'primary.contrastAux'}} href='https://www.instagram.com/tls_ve/' target='_blank'>
                                        <InstagramIcon fontSize="large" />
                                    </IconButton>
                                    <IconButton sx={{color:'primary.contrastAux'}} href='https://www.facebook.com/technologicalsharks/' target='_blank'>
                                        <FacebookIcon fontSize="large" />
                                    </IconButton>
                                </div>
                            </Grid>

                            {/**img shark boy */}
                            <Grid item xs={12} sm={12} md={12} lg={6} xl={6} sx={{display:'flex',flexDirection:'row',justifyContent:'center'}}>
                                <img style={{width:'70%'}} src={sharkboy} alt='Technological Sharks'/>
                            </Grid>
                        </Grid>
                    </Grid>

                    <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                        <Typography variant="h6" component='p' color='primary.contrastAux'>
                            © 2022 Technological Sharks INC. Todos los derechos reservados.
                        </Typography>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}