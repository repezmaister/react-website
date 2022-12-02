import React, { useState } from "react";
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Grid, IconButton, List, ListItem, Slide, Typography } from "@mui/material";
import { motion } from "framer-motion"
import CancelIcon from '@mui/icons-material/Cancel';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

export default function ProjectCard(props)
{
    const [open,setOpen] = useState(false);
    
    const toggleDialog = () => {
        setOpen(!open)
    }


    return(
        <Grid item xs={6} sm={4} md={4} lg={4} xl={4}>
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
            <Button 
                fullWidth
                variant="contained"
                color='primaryAux' 
                sx={{
                    display:'flex',
                    flexDirection:'column',
                    elevation:4,
                    boxShadow:10,
                    padding:3,
                    borderRadius:5,
                    textTransform: 'capitalize',
                    minHeight:'64px'
                }}
                onClick={()=>toggleDialog()}
            >
                <img style={{width:'100%'}} src={props.src} alt={props.alt || 'Technological Sharks'}/>
                <Typography variant='subtitle2' color='primary' sx={{fontWeight:'500',mt:1}}>
                    {props.title}
                </Typography>
            </Button>
            </motion.div>

            {/**Dialog */}
            <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={toggleDialog}
                aria-describedby="alert-dialog-slide-description"
                fullWidth={true}
                maxWidth='xs'
                scroll='paper'
            >
                <div style={{display:'flex',flexDirection:'row',justifyContent:'center'}}>
                    <IconButton color="primary" onClick={()=>toggleDialog()}>
                        <CancelIcon fontSize="medium"/>
                    </IconButton>
                </div>
                
                <img style={{width:'100%'}} src={props.src} alt={props.alt || 'Technological Sharks'}/>
                <DialogTitle>{props.title}</DialogTitle>
                <DialogContent dividers='paper'>
                    <Typography><span style={{fontWeight:'bold'}}>- Cliente: </span>{props.partner}</Typography>
                    <Typography> <span style={{fontWeight:'bold'}}>- Descripcion: </span>{props.description}</Typography>
                </DialogContent>
                <DialogActions>
                    <Button onClick={toggleDialog}>Visita el sitio web</Button>
                </DialogActions>
            </Dialog>

        </Grid>
    )
}