import react from "react"
import styles from "./Navbar.module.css"
import { Link } from "react-router-dom"
import Holiday from "../Holiday/Holiday.jsx"

export default function Navbar(){


  return(
      <nav className={styles.navbar}>
        {/*<NavLink to="/"><h2>Home</h2></NavLink>
        <NavLink to="/employee"><h2>Employee List</h2></NavLink>
        <NavLink to="/holiday"><h2>Holiday List</h2></NavLink>
  <NavLink to="/about"><h2> About Us</h2></NavLink>*/}
        <Link to="/"><h2>Home</h2></Link> 
        <Link to="/employee"><h2>Employee List</h2></Link>
        <Link to="holiday"><h2>Holiday List</h2></Link>
        <Link to="/about"><h2> About Us</h2></Link>
      </nav>
  )
}