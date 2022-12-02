import React, { useEffect } from "react";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import WebsiteAppBar from "../components/WebsiteAppBar";


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

    return(
        <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
                <WebsiteAppBar mode={mode}/>
                {props.children}
            </ThemeProvider>
        </ColorModeContext.Provider>
    )
}