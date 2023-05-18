import { createTheme } from "@mui/material";

export const theme = createTheme({
    components : {
        MuiButton : {
            styleOverrides : {
                root : {
                    textTransform : "capitalize",
                    boxShadow : "none",
                    "&:hover" : {
                        boxShadow : "none"
                    }
                }
            },
            defaultProps : {
                disableRipple : true,
            }
        }
    },
    typography : {
        fontFamily : "inherit"
    }
})