import React from "react";
import { Box, Button, Card, CardActionArea, CardContent, Container, Divider, Grid, Paper, Typography } from "@mui/material";

import ImageButtom from "../../components/imageButton";
import desarrolloPersonalizado from '../../assets/images/services/desarrollo-soft-tls.png';
import soporte_tls from '../../assets/images/services/soporte-tls.png';
import redes_tls from '../../assets/images/services/redes-tls.png';
import blockchain_tls from '../../assets/images/services/blockchain-tls.png';
import consulting_tls from '../../assets/images/services/consulting-it-tls.png';
import bi_tls from '../../assets/images/services/bi-tls.png';
import software_tls from '../../assets/images/services/software-tls.png';
import web_tls from '../../assets/images/services/web-tls.png';
import mobile_tls from '../../assets/images/services/mobile-tls.png';


import { motion } from "framer-motion"

export default function Services()
{
    return(
        <Container maxWidth='xl' sx={{pt:5,pb:5}}>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                    
                    <Typography variant="h3" component='h2' sx={{fontWeight:'bold'}}>Servicios</Typography>
                    
                    <Divider sx={{height:3,bgcolor:'secondary.main',width:'14%',mb:3}}/>
                    
                    
                    <Typography variant='h6' component='p' color='primary.contrastAux'>
                        En Technological Sharks nos centramos en crear soluciones tecnológicas que se adaptan 
                        a tus necesidades. Somos especialistas en el desarrollo de software personalizado, 
                        desarrollo web, desarrollo de aplicaciones móviles (Android y iOS), 
                        aplicaciones basadas en Blockchain, inteligencia de negocios (BI), 
                        instalación de redes, soporte técnico y consultoría informática.
                        <br/><br/>
                        Nuestro trabajo esta enfocado en crear alianzas a largo plazo que permitan un crecimiento 
                        mutuo en lo económico y en lo profesional trabajando de la mano desde el momento en que 
                        tienes una idea, hasta el momento de la implementación de la misma.
                    </Typography>
                    
                </Grid>

                <Grid item xs={12} sm={12}md={6} lg={6} xl={6}>
                    <Grid container spacing={3}>
                        <ImageButtom
                            src={software_tls}
                            alt='desarrollo de software personalizado'
                            title='Software Personalizado'
                        />
                        <ImageButtom
                            src={web_tls}
                            alt='desarrollo de software personalizado'
                            title='Desarrollo Web'
                        />
                        <ImageButtom
                            src={mobile_tls}
                            alt='desarrollo de software personalizado'
                            title='Aplicaciones Móviles'
                        />
                        <ImageButtom
                            src={blockchain_tls}
                            alt='desarrollo de software personalizado'
                            title='Blockchain'
                        />
                        <ImageButtom
                            src={bi_tls}
                            alt='desarrollo de software personalizado'
                            title='Inteligencia de Negocios'
                        />
                        <ImageButtom
                            src={redes_tls}
                            alt='desarrollo de software personalizado'
                            title='Instalación de Redes'
                        />
                        <ImageButtom
                            src={soporte_tls}
                            alt='desarrollo de software personalizado'
                            title='Soporte Técnico'
                        />
                        <ImageButtom
                            src={consulting_tls}
                            alt='desarrollo de software personalizado'
                            title='Consultoría Informática'
                        />
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    )
}