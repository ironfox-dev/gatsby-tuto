import React from "react"
import * as containerStyles from "./container.module.css"
import { Link } from "gatsby";

// const ListLink = (props) => {
//   <li style={{ display: `inline-block`, marginRight: `1rem` }}>
//     <Link to={props.to}>{props.children}</Link>
//   </li>
// }

export default function Container({ children }) {

  return( 
    <div className={containerStyles.container}>
      <header style={{ marginBottom: `1.5rem` }}>
        <Link to="/" style={{ textShadow: `none`, backgroundImage: `none` }}>
          <h3 style={{ display: `inline` }}>MySweetSite</h3>
        </Link>
        <ul style={{ listStyle: `none`, float: `right` }}>
          {/* <ListLink to="/">Home</ListLink>
          <ListLink to="/about/">About</ListLink>
          <ListLink to="/contact/">Contact</ListLink> */}
          <Link to="/">Home</Link>
          <Link to="/about/">About</Link>
          <Link to="/contact/">Contact</Link>
        </ul>
      </header>
      {children}
    </div>
  )

}