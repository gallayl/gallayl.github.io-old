import React from "react"
import Button from "@material-ui/core/Button"
import { Link } from "gatsby"

export const HeaderMenu: React.FunctionComponent<{
  title: string
  to: string
}> = ({ title, to }) => {
  return (
    <Link to={to} style={{ textDecoration: "none" }}>
      <Button>{title}</Button>
    </Link>
  )
}
