import { type ThemeOptions } from "@mui/material";

export const baseTheme : ThemeOptions = {
    shape : {
        borderRadius : 6
    },
    components : {
        MuiIconButton : {
            defaultProps : {
                disableRipple : true,
                
            },
            styleOverrides : {
                root : {

                }
            }
        }
    },
    typography : {
        fontFamily : "inherit"
    }
} 