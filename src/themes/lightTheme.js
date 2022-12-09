const lightTheme = {
    palette : 
    {
        common:
        {
            black:'#000',
            white:'#FFF'
        },
        /*primary : 
        {
            light: '#08A9EC',
            main : '#029BDD',
            dark: '#0088CA',
            contrastText:'#FFF'
        },*/
        primary :
        {
            light: '#0599DE',
            main : '#0a0a0a',//#0a0a0a  232F3E  1a1a1a
            dark: '#0076B6',
            contrastText:'#FFF',
            contrastAux:'#727375'
        },
        secondary:
        {
            light: '#039BE5',
            main : '#00d0c6',//'#00d0c6', 0288D1
            dark: '#01579B',
            contrastText : '#0a0a0a',
        },
        primaryAux :
        {
            light: '#FFF',
            main : '#FFF',//'#00d0c6', 0288D1
            dark: '#FFF',
            contrastText : '#0A0A0A',
        },
        cancel:
        {
            light: '#039BE5',
            main:'#CBCEC9',
            dark: '#A1A3A0',
            contrastText : '#000',
        },
        text:
        {
            primary:'#212121',
            secondary:'#474D57',
            primaryTitle:'#EAECEF',
            primaryText:'#B7BDC6',
            link:'#C99400'
        },
        background : 
        {
            default:'#F6F6F6',
            main:'#FFF',
            paper : '#FFF',
            paperDark : '#0B0E11',
            contrastBg:'#FCD535',
            appBar:'#FFF'
        }

    },
    components:
    {
        MuiPaper:
        {
            styleOverrides:{
                root:{
                    borderRadius:10,
                    padding:20,
                    "&:hover":{
                        cursor:'hand'
                    }
                },
            }
        },
        MuiInputBase: {
            styleOverrides:{
                root: {
              
                    "&:hover":{
                        
                    }
                  
                }  
            },
        },
        MuiInputLabel: {
            styleOverrides:{
                root: {
              
                    "&:focused": {
                        color: "#212121"
                    }
                  
                }  
            },
        },
    }
}

export default lightTheme;