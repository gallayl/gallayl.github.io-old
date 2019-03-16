import { indigo, teal } from "@material-ui/core/colors"
import { ThemeOptions } from "@material-ui/core/styles/createMuiTheme"
import zIndex from "@material-ui/core/styles/zIndex"
import createMuiTheme from "@material-ui/core/styles/createMuiTheme"
import React from "react"
import { MuiThemeProvider } from "@material-ui/core/styles"

const themeOptions: ThemeOptions = {
  palette: {
    type: "dark",
    primary: indigo,
    secondary: teal,
  },
  typography: {
    useNextVariants: true,
  },
  overrides: {
    MuiAppBar: {
      root: {
        zIndex: zIndex.drawer + 1,
      },
    },
  },
}

const theme = createMuiTheme(themeOptions)
export const ThemeContext = React.createContext(createMuiTheme())
export const ThemeProvider: React.FunctionComponent = props => {
  return (
    <MuiThemeProvider theme={theme}>
      <ThemeContext.Provider value={theme}>
        {props.children}
      </ThemeContext.Provider>
    </MuiThemeProvider>
  )
}
