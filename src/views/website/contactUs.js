import React, { useReducer } from "react";
import { Box, Button, Container, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, FormControl, Grid, InputBase, InputLabel, MenuItem, Select, Slide, styled, TextField, Typography } from "@mui/material";

import { WhatsApp, AccessTime, EmailOutlined } from '@mui/icons-material';

import { SendContactUsEmail } from "../../controllers/ContacUsController";
import { LoadingButton } from "@mui/lab";


const CssTextField = styled(TextField)({
    '& label.Mui-focused': {
      color: '#039BE5',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: '#039BE5',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'white',
      },
      '&:hover fieldset': {
        borderColor: '#039BE5',
      },
      '&.Mui-focused fieldset': {
        borderColor: '#039BE5',
      },
      '& InputLaber':{
        color:'#FFF'
      }
    },
  });



  const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const initialState = {
    nombres : '',   errorNombres : false,
    apellidos : '', errorApellidos : false,
    telefono:'',    errorTelefono: false,
    correo:'',      errorCorreo: false,
    asunto:'',      errorAsunto: false,
    mensaje:'',      errorMensaje: false,
      
    isLoading : false,
    showDialog : false,
    result : false, message : '', title : '',
    
}
  
function reducer( state, { field, value })
{
    return{
        ...state,
        [field] : value
    }
}


export default function ContactUs()
{

    const [state,setState] = useReducer(reducer,initialState);

    const {
        nombres,errorNombres,
        apellidos, errorApellidos,
        telefono, errorTelefono,
        correo, errorCorreo,
        asunto, errorAsunto,
        mensaje, errorMensaje,
        isLoading, result,
        showDialog, message, title
    } = state


    const handleInputChange = (event) =>
    {
        const target = event.target;
        //const value = target.name === 'isGoing' ? target.checked : target.value;
        const value = target.name === 'isCheck' ? target.checked : target.value;
        const name = target.name;

        setState({field:name,value:value})
    }

    const formVerification = () => {
        var ban = 0;

        if(nombres === '')
        {
            setState({field:'errorNombres',value:true});
            ban = 1;
        }
        
        if(apellidos === '')
        {
            setState({field:'errorApellidos',value:true});
            ban = 1;
        }

        if(telefono === '')
        {
            setState({field:'errorTelefono',value:true});
            ban = 1;
        }

        if(correo === '')
        {
            setState({field:'errorCorreo',value:true});
            ban = 1;
        }

        if(asunto === '')
        {
            setState({field:'errorAsunto',value:true});
            ban = 1;
        }

        if(mensaje === '')
        {
            setState({field:'errorMensaje',value:true});
            ban = 1;
        }

        return ban;
    }

    const handleSubmit = async () => {
        
        if(formVerification() === 0)
        {
            setState({field:'isLoading',value:true});
            let response = await SendContactUsEmail(nombres,apellidos,telefono,correo,asunto,mensaje);
            if(response.success === true)
            {
                //DialogMessage : false, message : '', title : '',
                setState({field:'title',value:'Operacion Exitosa!'});
                setState({field:'message',value:response.message});
                setState({field:'showDialog',value:true});
                setState({field:'isLoading',value:false});
                setState({field:'result',value:true});
            }
            else
            {
                setState({field:'title',value:'Error!'});
                setState({field:'message',value:response.message});
                setState({field:'showDialog',value:true});
                setState({field:'isLoading',value:false});
                setState({field:'result',value:false});
            }
        }
    }

    const handleResetForm = () => {
        setState({field:'nombres',value:''});
        setState({field:'apellidos',value:''});
        setState({field:'telefono',value:''});
        setState({field:'correo',value:''});
        setState({field:'asunto',value:''});
        setState({field:'mensaje',value:''});
        setState({field:'showDialog',value:false});
    }

    return(
        <div>
        <Box
            sx={{
                minHeight:'100vh',
                alignItems: 'center',
                justifyContent: 'center',
                bgcolor: 'primary.main',
                color: 'text.primary',
                pt: 3,
                pb: 3,
                //backgroundImage: "url(" + slider3+ ")",
                backgroundSize:'cover',
                //backgroundImage: 'url('+contactanos+')' 
                
            }}
        >
            <Container maxWidth='xl' sx={{color:'primary.contrastText'}}>
                <Typography component='h3' variant='h3' style={{textAlign:'center',marginBottom:70}}>Contáctanos</Typography>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                        <Grid container spacing={3}>
                            <Grid item lg={1}>
                                <WhatsApp fontSize="large"/>
                            </Grid>
                            <Grid item lg={11}>
                                <Typography component='h6' variant='h6'>+58 414-2510427</Typography>
                            </Grid>
                        </Grid>
                        <Grid container spacing={3} style={{marginTop:10}}>
                            <Grid item xs={1} sm={1} md={1} lg={1} xl={1}>
                                <AccessTime fontSize="large"/>
                            </Grid>
                            <Grid item xs={12} sm={12} md={11} lg={11} xl={11}>
                                <Typography component='h6' variant='h6'>Lunes - Viernes | 8:00 am - 4:00 pm</Typography>
                            </Grid>
                        </Grid>
                    </Grid>

                    {/**Formulario */}
                    <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                        <Box
                            component='form'
                            sx={{color:'primary.contrastText'}}
                        >
                            <Grid container spacing={3}>
                                {/**Nombres */}
                                <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                                    <CssTextField 
                                        fullWidth
                                        InputLabelProps={{
                                            style:{
                                                color:'#FFF'
                                            }
                                        }}
                                        InputProps={{
                                            style:{
                                                color:'#FFF'
                                            }
                                        }}
                                        label="Nombres" 
                                        id="nombres"
                                        name='nombres'
                                        value={nombres}
                                        onChange={handleInputChange}
                                    />
                                </Grid>

                                {/**Apellidos */}
                                <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                                    <CssTextField 
                                        fullWidth
                                        InputLabelProps={{
                                            style:{
                                                color:'#FFF'
                                            }
                                        }}
                                        InputProps={{
                                            style:{
                                                color:'#FFF'
                                            }
                                        }}
                                        label="Apellidos" 
                                        id="apellidos"
                                        name='apellidos'
                                        value={apellidos}
                                        onChange={handleInputChange}
                                    />
                                </Grid>

                                {/**Telefono */}
                                <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                                    <CssTextField 
                                        fullWidth
                                        InputLabelProps={{
                                            style:{
                                                color:'#FFF'
                                            }
                                        }}
                                        InputProps={{
                                            style:{
                                                color:'#FFF'
                                            }
                                        }}
                                        label="Telefono"
                                        id="telefono"
                                        name='telefono'
                                        value={telefono}
                                        onChange={handleInputChange}
                                    />
                                </Grid>

                                {/**Correo */}
                                <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                                    <CssTextField 
                                        fullWidth
                                        InputLabelProps={{
                                            style:{
                                                color:'#FFF'
                                            }
                                        }}
                                        InputProps={{
                                            style:{
                                                color:'#FFF'
                                            }
                                        }}
                                        label="Correo"
                                        id="correo"
                                        name='correo'
                                        value={correo}
                                        onChange={handleInputChange}
                                    />
                                </Grid>

                                {/**Asunto */}
                                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                                    <CssTextField 
                                        fullWidth
                                        select
                                        InputLabelProps={{
                                            style:{
                                                color:'#FFF'
                                            }
                                        }}
                                        InputProps={{
                                            style:{
                                                color:'#FFF'
                                            }
                                        }}
                                        label="Asunto" 
                                        id="asunto"
                                        name="asunto"
                                        value={asunto}
                                        onChange={handleInputChange}         
                                    >
                                        <MenuItem value=''>Seleccionar un Asunto</MenuItem>
                                        <MenuItem value='Reseñas'>Reseñas</MenuItem>
                                        <MenuItem value='Revista'>Revista</MenuItem>
                                        <MenuItem value='Eventos'>Eventos</MenuItem>
                                    </CssTextField>
                                </Grid>

                                {/**Mensaje */}
                                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                                    <CssTextField
                                        fullWidth
                                        multiline
                                        rows={4}
                                        InputLabelProps={{
                                            style:{
                                                color:'#FFF'
                                            }
                                        }}
                                        InputProps={{
                                            style:{
                                                color:'#FFF'
                                            }
                                        }}
                                        label="Mensaje"
                                        id="mensaje"
                                        name='mensaje'
                                        value={mensaje}
                                        onChange={handleInputChange}
                                    />
                                </Grid>

                                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                                    <LoadingButton
                                        fullWidth
                                        variant='contained'
                                        color='secondary'
                                        loading={isLoading}
                                        onClick={()=>handleSubmit()}
                                    >
                                        Enviar Mensaje
                                    </LoadingButton>
                                </Grid>
                            </Grid>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
            <Dialog
                open={showDialog}
                TransitionComponent={Transition}
                keepMounted
                fullWidth={true}
                maxWidth={"sm"}
                
                //onClose={()=>history.replace('/')}
                aria-labelledby="alert-dialog-slide-title"
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle id="alert-dialog-slide-title">{title}</DialogTitle>
                <DialogContent>
                <DialogContentText id="alert-dialog-slide-description" style={{color:'#000'}}>
                    {message} <br/>
                </DialogContentText>
                </DialogContent>
                <DialogActions>
                    {
                        result === true
                        ?
                        <Button onClick={()=>handleResetForm()} color="primary" style={{color:'#000'}}>
                            Aceptar
                        </Button>
                        :
                        <Button onClick={()=>setState({field:'showDialog',value:false})} color="primary" style={{color:'#000'}}>
                            OK
                        </Button>
                    }
                    
                </DialogActions>
            </Dialog>
        </Box>
        </div>
    )
}