import { Box, Grid, Paper, Typography } from "@mui/material";
import { Container } from "@mui/system";
import { motion } from "framer-motion"

import mision from '../../assets/images/idea-shark2.png';
import vision from '../../assets/images/vision-shark.png';
import valores from '../../assets/images/valor-shark.png';

export default function AboutUs()
{
    return(
        <Box>
            <Box
                sx={{
                    backgroundColor:'primary.main',
                    padding:10,
                    minHeight:'50vh',
                    display:'flex',flexDirection:'column',
                    justifyContent:'center',
                    alignItems:'center',
                }}
            >
                <Container maxWidth='xl'>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        whileInView={{ opacity: 1,scale:1 }}
                        transition={{ duration: 0.7 }}
                    >
                        
                        <Grid container spacing={3}>
                            <Grid item xs={12} sm={12} md={12} lg={12} xl={12} style={{display:'flex',flexDirection:'row',justifyContent:'center'}}>
                                <Typography 
                                    variant='h3'
                                    component='h2'
                                    color='primary.contrastText'
                                    sx={{fontWeight:'bold',textAlign:'center'}}
                                >
                                    ¿Quiénes somos?
                                </Typography>
                            </Grid>
                            <Grid item xs={12} sm={12} md={12} lg={12} xl={12} style={{display:'flex',flexDirection:'row',justifyContent:'center'}}>
                                <Typography variant='h6' component='p' color='primary.contrastAux' sx={{textAlign:'center',display:{xs:'none',sm:'none',md:'flex',lg:'flex',xl:'flex'}}}>
                                    Somos una empresa de asesoría informática, <br/> ayudamos a nuestros clientes a lograr soluciones tecnológicas que optimicen su flujo de trabajo.
                                </Typography>
                            </Grid>
                        </Grid>
                    </motion.div>
                </Container>
            </Box>
            <Container maxWidth='xl' sx={{marginTop:10}}>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={12} md={8} lg={6} xl={6}>
                        <Typography variant="h4" component='h4' color='primary.main' sx={{fontWeight:'bold'}} >Nuestra Historia</Typography>
                        <Typography variant="h6" component='h6' color='primary.main' sx={{fontWeight:'bold'}} >Año 2017, un inicio como equipo</Typography>
                        <Typography variant='h6' color='primary.contrastAux'>
                            Technological Shark, surge como idea de un grupo de jóvenes emprendedores, visionarios, amantes de la tecnología, comprometidos con el crecimiento del país, que realizan lo que más le gusta con pasión y responsabilidad.
                            Entonces a principio del año 2017, decidimos formalmente que como equipo podíamos lograr más.
                            No tardando mucho en llegar nuestro primer reto como desarrolladores de software, una aplicación de catálogos de productos para la industria petrolera, y desde entonces, este sistema se ha convertido en nuestra tarjeta de presentación.
                            Nuestras habilidades y experiencias colectivas nos han ayudado a crecer como equipo tecnologico, permitiéndonos construir más aplicaciones, y otros tipos de automatizaciones para nuestros clientes.
                        </Typography>
                        <br/><br/>
                        <Typography variant="h6" color='primary.main'>
                        «Si quieres llegar rápido camina solo, si quieres llegar lejos camina en equipo» Anonimo
                        </Typography>
                    </Grid>
                </Grid>
                <Grid container spacing={3} style={{marginTop:20}}>
                    <Grid item xs={12} sm={12} md={8} lg={6} xl={6}>
                        <Typography variant="h6" component='h6' color='primary.main' sx={{fontWeight:'bold'}} >Año 2019, un refrescamiento de imagen y de crecimiento laboral</Typography>
                        <Typography variant='h6' color='primary.contrastAux'>
                            En tan solo dos años, logramos ampliar nuestro equipo, alcanzando la salida a producción de tres aplicaciones como productos propios que están en constante mejoras y que se pueden adquirir para una implementación inmediata.
                            También incorporamos otros perfiles tecnológicos como: analista de venta, community manager, diseñador gráfico.
                        </Typography>
                        <br/><br/>
                        <Typography variant="h6" color='primary.main'>
                        «Si puedes soñarlo, puedes lograrlo» Walt Disney
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={12} md={4} lg={6} xl={6}></Grid>
                </Grid>

                {/**Mision - Vision - Valores */}
                <Grid container spacing={3} style={{marginTop:50}}>
                    
                    <Grid item xs={12} sm={12} md={6} lg={4} xl={4}>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.5 }}
                            whileInView={{ opacity: 1,scale:1 }}
                            transition={{
                                default: {
                                duration: 0.5,
                                ease: [0, 0.71, 0.2, 1.01]
                                },
                                scale: {
                                type: "tween",
                                damping: 5,
                                stiffness: 100,
                                restDelta: 0.001
                                }
                            }}
                        >
                            <div style={{display:'flex',flexDirection:'row',justifyContent:'center',marginBottom:10}}>
                                <img src={mision} alt='mision technological shakrs'/>
                            </div>
                            <Typography variant='h4' color='primary.main' sx={{textAlign:'center'}}>Misión</Typography>
                            <Typography variant='h6' color='primary.contrastAux' style={{textAlign:'center',marginTop:10}}>
                                Lograr que las necesidades sociales y empresariales tengan soluciones tecnológicas que contribuyan con el desarrollo y evolución de la sociedad.
                            </Typography>
                        </motion.div>
                    </Grid>
                    
                    <Grid item xs={12} sm={12} md={6} lg={4} xl={4}>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.5 }}
                            whileInView={{ opacity: 1,scale:1 }}
                            transition={{
                                default: {
                                duration: 0.5,
                                ease: [0, 0.71, 0.2, 1.01]
                                },
                                scale: {
                                type: "tween",
                                damping: 5,
                                stiffness: 100,
                                restDelta: 0.001
                                }
                            }}
                        >
                            <div style={{display:'flex',flexDirection:'row',justifyContent:'center',marginBottom:10}}>
                                <img src={vision} alt='vision technological shakrs'/>
                            </div>
                            <Typography variant='h4' color='primary.main' sx={{textAlign:'center'}}>Visión</Typography>
                            <Typography variant='h6' color='primary.contrastAux' style={{textAlign:'center',marginTop:10}}>
                                Ser empresa líder en el mundo de IT en Venezuela, ofreciendo productos premium.
                            </Typography>
                        </motion.div>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={4} xl={4}>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.5 }}
                            whileInView={{ opacity: 1,scale:1 }}
                            transition={{
                                default: {
                                duration: 0.5,
                                ease: [0, 0.71, 0.2, 1.01]
                                },
                                scale: {
                                type: "tween",
                                damping: 5,
                                stiffness: 100,
                                restDelta: 0.001
                                }
                            }}
                        >
                            <div style={{display:'flex',flexDirection:'row',justifyContent:'center',marginBottom:10}}>
                                <img src={valores} alt='valores technological shakrs'/>
                            </div>
                            <Typography variant='h4' color='primary.main' sx={{textAlign:'center'}}>Valores</Typography>
                            <Typography variant='h6' color='primary.contrastAux' style={{textAlign:'center',marginTop:10}}>
                            Compromiso – Innovación – Responsabilidad – Honestidad –  Calidad – Respeto –  Trabajo en equipo
                            </Typography>
                        </motion.div>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}