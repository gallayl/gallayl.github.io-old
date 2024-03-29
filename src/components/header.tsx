import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useContext } from "react"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import Button from "@material-ui/core/Button"
import Home from "@material-ui/icons/Home"
import Typography from "@material-ui/core/Typography"
import { ThemeContext } from "../context/theme"
import { HeaderMenu } from "./header-menu"

const Header: React.FunctionComponent<{ siteTitle: string }> = ({
  siteTitle,
}) => {
  const theme = useContext(ThemeContext)
  return (
    <AppBar
      position="static"
      style={{ backgroundColor: theme.palette.background.paper }}
    >
      <Toolbar style={{ display: "flex", justifyContent: "space-between" }}>
        <Link
          to="/"
          style={{ textDecoration: "none", fontVariant: "small-caps" }}
        >
          <Button>
            <Home />
            <Typography variant="button">&nbsp;{siteTitle}</Typography>
          </Button>
        </Link>
        <div>
          <HeaderMenu to="/blog" title="Blog" />
          <HeaderMenu to="/cv" title="CV" />
        </div>
      </Toolbar>
    </AppBar>
  )
}

//   <header
//     style={{
//       background: `rebeccapurple`,
//       marginBottom: `1.45rem`,
//     }}
//   >
//     <div
//       style={{
//         margin: `0 auto`,
//         maxWidth: 960,
//         padding: `1.45rem 1.0875rem`,
//       }}
//     >
//       <h1 style={{ margin: 0 }}>
//         <Link
//           to="/"
//           style={{
//             color: `white`,
//             textDecoration: `none`,
//           }}
//         >
//           {siteTitle}
//         </Link>
//       </h1>
//     </div>
//   </header>
// )

// Header.propTypes = {
//   siteTitle: PropTypes.string,
// }

// Header.defaultProps = {
//   siteTitle: ``,
// }

export default Header
