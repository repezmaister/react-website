import { Button, Grid, Typography } from "@mui/material";
import { motion } from "framer-motion"
export default function ImageButtom(props)
{
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
            >
                <img style={{width:'50%'}} src={props.src} alt={props.alt || 'Technological Sharks'}/>
                <Typography variant='subtitle2' color='primary' sx={{fontWeight:'500',mt:1}}>
                    {props.title}
                </Typography>
            </Button>
            </motion.div>
        </Grid>
    )
}