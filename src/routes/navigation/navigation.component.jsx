import { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";
import './navigation.styles.scss'
import Logo from '../../images/logo.png'
const Navigation = () =>{
    return (
      <Fragment>
        <div className="navigation">
          <Link className="logo-container"  to='/'>
              {/* <div  style={ { 
              backgroundImage: `url(${Logo})` 
              }}/> */}
              <div>Logo</div>
        </Link>
        
          <div className="nav-links-container">
            <Link className="nav-link" to='/shop'>
               SHOP
            </Link>

          </div>
        </div>
        <Outlet/>
      </Fragment>
    );
  }

  export default Navigation;