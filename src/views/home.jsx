import React from 'react';
import { Box, Container, Divider, Grid, Typography } from '@mui/material';

import { motion } from "framer-motion"
import Services from './services';

import ATE_LOGO from '../assets/images/allies/ATE_LOGO.png'
import CIVO_LOGO from '../assets/images/allies/CIVO_LOGO.jpg'
import Portafolio from './portafolio';

export default function Home()
{
    return(
        <Box>
            {/**Eslogan  Inicio */}
            <Box
                sx={{
                    bgcolor:'primary.main',
                    color:'primary.contrastText',
                    height:'100vh',
                    display:'flex',
                    //justifyContent:'center',
                    alignItems:'center'
                }}
            >
                <Container  maxWidth='xl'>
                    <Grid container>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.7 }}
                        >
                            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                                <Typography variant='h2' component='h2' sx={{display:{xs:'none',sm:'none',md:'block',lg:'block',xl:'block'}}}>
                                    Transformamos <span style={{color:'#00d0c6',fontWeight:'bold'}}>tus ideas</span>
                                    <br/>
                                    en soluciones tecnológicas
                                </Typography>
                                <Typography variant='h4' component='h2' sx={{display:{xs:'block',sm:'block',md:'none',lg:'none',xl:'none'}}}>
                                    Transformamos <span style={{color:'#00d0c6',fontWeight:'bold'}}>tus ideas</span>
                                    <br/>
                                    en soluciones tecnológicas
                                </Typography>
                            </Grid>
                        </motion.div>
                    </Grid>
                    <Divider sx={{height:3,bgcolor:'secondary.main',width:'16%',mt:3,mb:3}}/>
                    <Typography variant='h5' color='#939393' component='h5' sx={{display:{xs:'none',sm:'none',md:'block',lg:'block',xl:'block'}}}>
                        Desarrollamos aplicaciones innovadoras y a la medida <br/>
                        para startups y empresas
                    </Typography>
                    <Typography variant='h6' color='#939393' component='h6' sx={{display:{xs:'block',sm:'block',md:'none',lg:'none',xl:'none'}}}>
                        Desarrollamos aplicaciones innovadoras y a la medida <br/>
                        para startups y empresas
                    </Typography>
                </Container>
            </Box>

            {/**Servicios */}
            <Services/>

            {/**Portafolio */}
            <Portafolio/>
        </Box>
    )
}