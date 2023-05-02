import { Link } from 'react-router-dom'
import classes from './Navbar.module.css'

const Navbar = () => {
  return (
    <div className={classes.container}>
      <Link to="/main" className={classes.logo}>Main</Link>
      <Link to="/home" className={classes.logo}>Home</Link>
      <Link to="/about" className={classes.logo}>About</Link>
    </div>
  )
}

export default Navbar