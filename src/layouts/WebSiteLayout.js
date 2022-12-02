import React, { useEffect } from "react";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import WebsiteAppBar from "../components/WebsiteAppBar";

import WebsiteFooter from "../components/WebsiteFooter";
import ContactUs from "../views/website/contactUs";
import ColorModeContext from '../themes/colorModeContext';
import lightTheme from "../themes/lightTheme";
import darkTheme from "../themes/darkTheme";


export function WebSiteLayout(props)
{
    const [mode, setMode] = React.useState('light');
    const colorMode = React.useMemo(
        () => ({
        toggleColorMode: () => {
            setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
        },
        }),
        [],
    );

    useEffect(()=>{
        window.scrollTo(0,0);
    })


    const theme = React.useMemo(
        () => 
        //createTheme(mode === 'light' ? lightTheme : darkTheme)
        createTheme(
            {
                typography:
                {
                    fontFamily:['poppins','sans-serif',].join(','),
                }
            },
            mode === 'light' ? lightTheme : darkTheme,
        )
    )

    /*const theme = createTheme({
        mode
        typography:
        {
            fontFamily:['Chilanka','cursive',].join(','),
        }
    })*/

    return(
        <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
                <WebsiteAppBar mode={mode}/>
                {props.children}
                {/*<ContactUs/>
                <WebsiteFooter mode={mode}/>*/}
            </ThemeProvider>
        </ColorModeContext.Provider>
    )
}