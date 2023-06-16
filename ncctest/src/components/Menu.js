import { Link } from 'react-router-dom';


function Menu() {
    return(
        <div class="slidebar">
        <ul class="menu">
          <li class="menu-item menu-active"><Link to="/">Home</Link></li>
          <li class="menu-item"><Link to="/service">Service</Link></li>
          <li class="menu-item"><Link to="/news">News</Link></li>
          <li class="menu-item"><Link to="/blog">Blog</Link></li>
          <li class="menu-item"><Link to="/contact">Contact</Link></li>
        </ul>
      </div>
    )
}
export default Menu