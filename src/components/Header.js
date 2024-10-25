import classes from './Header.module.css';
import {authAction} from '../store/index'

import { useSelector, useDispatch } from 'react-redux';

const Header = () => {
  const isAuth = useSelector(state => state.auth.isAuthenticated)

  const dispatch = useDispatch();
 const  logOutHandeler =  (event) =>{
    event.preventDefault();
    dispatch(authAction.logOut());
    
  };

  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
     {isAuth && (<nav>
        <ul>
          <li>
            <a href='/'>My Products</a>
          </li>
          <li>
            <a href='/'>My Sales</a>
          </li>
          <li>
            <button onClick={logOutHandeler}>Logout</button>
          </li>
        </ul>
      </nav>)
      }


    </header>
  );
};

export default Header;
