import {useState} from "react";
import {createTheme, ThemeProvider} from "@mui/material/styles";
import {amber, grey} from "@mui/material/colors";
import {CssBaseline} from "@mui/material";
import ThemeContext from "./ThemeContext";

export default function MyThemeProvider({children}) {
    const [mode, setMode] = useState('light')
    const themeConfig = {
        mode,
        toggleMode: () => {
            setMode(prev => prev === 'light' ? 'dark' : 'light')
        }
    }
    const theme = createTheme({
        palette: {
            mode,
            primary: {
                main: amber[500],
            }
        }
    }
    )
    return (
        <ThemeContext.Provider value={themeConfig}>
            <ThemeProvider theme={theme}>
                <CssBaseline/>
                {children}
            </ThemeProvider>
        </ThemeContext.Provider>
    )
}