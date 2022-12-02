const darkTheme = {
    palette : 
    {
        primary : 
        {
            light: '#455A64',
            main : '#37474F',//'#0b0e11',
            dark: '#263238',
            contrastText : '#eee',
        },
        secondary : 
        {
            light: '#0097A7',
            main : '#00838F',//'#0b0e11',
            dark: '#006064',
            contrastText : '#000',
        },
        text:
        {
            primary:'#EEEEEE',
            secondary:'#B7BDC6',
            primaryTitle:'#EAECEF',
            primaryText:'#B7BDC6',
            link:'#C99400'
        },
        background : 
        {
            default:'#0b0e11',
            main:'#181A20',
            paper : '#0b0e11',//0B0E11
            paperDark : '#0B0E11',
            contrastBg:'#FCD535',
            appBar:'#181A20'
        }

    },
    components:
    {
        MuiPaper:
        {
            styleOverrides:{
                root:{}
            }
        },
        MuiInputBase: {
            styleOverrides:{
                root: {
              
                    "& fieldset.MuiOutlinedInput-notchedOutline": {
                      borderColor: "#424242",
                      //background: "#fff"
                    },
                    "&:hover":{
                        
                    },
                }  
            },
          }
        
    },
}

export default darkTheme;