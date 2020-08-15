import React from "react"
import { Link } from "gatsby"

import { rhythm, scale } from "../utils/typography"
import "./styles/layout.css"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  let header

  if (location.pathname === rootPath) {
    header = (
      <h1
        style={{
          ...scale(1.5),
          marginBottom: rhythm(1.5),
          marginTop: 0,
        }}
      >
        <Link
          style={{
            boxShadow: `none`,
            color: `inherit`,
          }}
          to={`/`}
        >
          {title}
        </Link>
      </h1>
    )
  } else {
    header = (
      <h3
        style={{
          fontFamily: `Roboto, sans-serif`,
          marginTop: 0,
        }}
      >
        <Link
          style={{
            boxShadow: `none`,
            color: `inherit`,
          }}
          to={`/`}
        >
          {title}
        </Link>
      </h3>
    )
  }
  return (
    <div
      className="movil"
      style={{
        marginLeft: `auto`,
        marginRight: `auto`,
        maxWidth: rhythm(24),
        padding: ` 0em 2em`,
      }}
    >
      <div className="colorss"></div>
      <header>{header}</header>
      <nav className="nav">
        <a href="/">Inicio</a>
        <a href="/primer%20post/">Sobre mi</a>
        <a href="https://erickrv19.github.io/">Contacto</a>
        color
      </nav>
      <main>{children}</main>
      <footer>
        ©{` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </footer>
    </div>
  )
}

export default Layout
