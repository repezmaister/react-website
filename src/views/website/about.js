import { Container, Grid, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";

import backgroundImg from '../../assets/images/about.jpg';
import logo from '../../assets/images/logo.png';

export default function About()
{
    return(
        <div>
            <Box
                sx={{
                    display: 'flex',
                    height:'45vh',
                    alignItems: 'center',
                    justifyContent: 'center',
                    bgcolor: 'background.default',
                    color: 'text.primary',
                    p: 3,
                    backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url(" + backgroundImg + ")",
                    backgroundPosition:'center',
                    backgroundRepeat:'no-repeat',
                    backgroundSize:'100%'
                }}
            >
                <Typography variant='h3' style={{color:'#FFF'}}>¿Quiénes somos?</Typography>
            </Box>
            <Container style={{marginTop:70,marginBottom:70}} maxWidth='lg'>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
                        <Paper
                            elevation={4}
                            style={{padding:30,display:'flex',flexDirection:'row',justifyContent:'center',background:'#FFF'}}
                        >
                            <img
                                style={{width:'70%'}}
                                src={logo}
                                alt='Anzoategui te enamora'
                            />
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
                        <Typography variant='body2' align="justify" color='text.secondary'>
                            Anzoátegui Te Enamora es una marca que nace para promover el turismo en el estado Anzoátegui, 
                            sus paisajes, gastronomía, arte, rutas históricas, íconos religiosos, su oferta de diversión,
                            entretenimiento y aventura.
                        </Typography>
                        <Typography variant='body2' align="justify" mt={2} color='text.secondary'>
                            Anzoátegui Te Enamora Está dirigida a reactivar las potencialidades del sector 
                            turístico para fortalecer a los emprendedores, comerciantes y empresarios que desean 
                            crecer en Anzoátegui.
                        </Typography>
                        <Typography variant='body2' align="justify" mt={2} color='text.secondary'>
                            Desde Anzoategui te enamora nos proponemos incentivar el posicionamiento de nuestros 
                            destinos para mejorar el flujo de turistas venezolanos y extranjeros, afianzando el 
                            sentido de pertenencia por Anzoátegui.
                        </Typography>
                    </Grid>
                    <Grid item lg={12} style={{marginTop:20}}>
                        <Grid container spacing={3}>
                            <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                                <Paper style={{padding:20,height:'100%'}}>
                                    <Typography variant="h6" color='primary'>
                                        Nuestra misión
                                    </Typography>
                                    <Typography variant='caption' align="justify" mt={4} color='text.secondary'>
                                        Promover el turismo en el estado Anzoátegui, sus paisajes, gastronomía, arte, rutas históricas, 
                                        íconos religiosos, su oferta de diversión, entretenimiento y aventura, a través de un plataforma
                                        digital donde las personas pueden reseñar su experiencia los lugares visitados.
                                    </Typography>
                                    <Typography variant='caption' align="justify" mt={4} color='text.secondary'>
                                        
                                    </Typography>
                                </Paper>
                            </Grid>
                            <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                                <Paper style={{padding:20,height:'100%'}}>
                                    <Typography variant="h6" color='primary'>
                                        Nuestra visión
                                    </Typography>
                                    <Typography variant='caption' align="justify" mt={2} color='text.secondary'>
                                        Ser la Marca de referencia en Anzoátegui y Venezuela para la promoción del turismo, 
                                        las potencialidades económicas e iniciativas que tengan la capacidad de realzar el 
                                        valor paisajístico, histórico, cultural, religioso, gastronómico, deportivo y 
                                        recreativo.
                                    </Typography>
                                </Paper>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}