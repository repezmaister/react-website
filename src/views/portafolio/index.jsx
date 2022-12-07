import React from 'react';
import { Container, Divider, Grid, Typography } from '@mui/material';

import { motion } from "framer-motion"
import ImageButtom from '../../components/imageButton';

import resenas from '../../assets/images/proyectos/resenas.png'
import ProjectCard from './projectCard';

export default function Portafolio()
{
    return(
        <Container sx={{mt:10,mb:10}}>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12} sx={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        whileInView={{ opacity: 1,scale:1 }}
                        transition={{ duration: 0.7 }}
                    >
                        <div>
                            <Typography variant="h3" component='h2' sx={{fontWeight:'bold',textAlign:'center'}}>Proyectos Destacados</Typography>
                            <Divider sx={{height:3,bgcolor:'secondary.main',width:'25%',mb:3}}/>
                        </div>
                    </motion.div>
                </Grid>
                
                <ProjectCard
                    src={resenas}
                    title='Sistema de Resenas'
                    partner='Anzoátegui Te Enamora'
                    description='El Sistema de Reseñas de Anzoátegui Te Enamora, es una plataforma que ayuda a compartir información valiosa sobre un establecimiento, con otros usuarios que buscan un producto o servicio similar.'
                    link='https://anzteenamora.com/'
                />
                <ProjectCard
                    src={resenas}
                    title='Cashless'
                    partner='Desarrollo propio'
                    description='Es un sistema de pago libre de efectivo, que sirve para optimizar y brindar mayor seguridad en las transacciones financieras en eventos, clubes, centros deportivos, entre otros.'
                />
                <ProjectCard
                    src={resenas}
                    title='Nomina'
                />
            </Grid>
        </Container>
    )
}