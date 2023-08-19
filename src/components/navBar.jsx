import { Link } from 'react-router-dom'
import ModeToggle from './modeToggle'

const Navbar = () => {
  return (
    <div>
      <Link to={'/'}>Home</Link>
      <Link to={'/ownerProfile'}>Profile</Link>
      <Link to={'/guardianProfile'}>Guardian Profile</Link>
      <ModeToggle/>
    </div>
  )
}

export default Navbar