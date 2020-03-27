import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styles from "../styles/header.module.css"
import "../styles/global.css"

const Header = ({ siteTitle, menuLinks }) => (
   <header className = {styles.header}>
     <div className={styles.headerText}>
      <h1 className={styles.text}>
        <Link
          className={styles.link}
          to="/"
        >
          {siteTitle}
        </Link>
      </h1>
     </div>
     <div className={styles.navbar}>
      <nav>
          <ul style={{
            display: `flex`,
            flexDirection: `row`,
            justifyContent: `space-evenly`
          }}>
            {menuLinks.map(link => (
              <li
                key={link.name}
                style={{listStyleType: `none`}}
              >
                <Link className={styles.link} to={link.link}>
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>   
       </nav>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: `Stanley Armstrong`,
}

export default Header
