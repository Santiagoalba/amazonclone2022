import React from 'react'
import '../css/Header.css';
import { Link } from 'react-router-dom';
import { useStateValue } from '../StateProvider';
import { auth } from '../firebase';

function Header() {

   //const [ state, dispatch] = useStateValue();

   const [{basket, user}] = useStateValue();

   const logout = () => {
     if (user) {
       auth.signOut()
     }
   }

   console.log('ITEMS IN BASKET >>>', basket);

    return (
        <nav className='header'>
          <Link to="/">
            <img className='header__logo' src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt='' />  
          </Link>  
        <div className='header__search'>
          <input type="text" className='header__searchInput' />
          <i className="medium material-icons search_icon">search</i>
        </div>
        <div className='header__nav'>

          <Link className='header__link' to={!user && '/login'}>
            <div className='header__option' onClick={logout}>
              <p className='header__optionLineOne'>Hello {user?.email}</p>
              <p className='header__optionLineTwo'>{user ? 'Sign Out' : 'Sign In'}</p>
            </div>
          </Link>

          <Link className='header__link' to='/'>
            <div className='header__option'>
              <p className='header__optionLineOne'>Return</p>
              <p className='header__optionLineTwo'>& Orders</p>
            </div>
          </Link>

          <Link className='header__link' to='/prime'>
            <div className='header__option'>
              <p className='header__optionLineOne'>Your</p>
              <p className='header__optionLineTwo'>Prime</p>
            </div>
          </Link>

          <Link to="/checkout" className='header__link'> 

            <div className='header__optionBasket'>

              <i className="medium material-icons header__optionBasketIcon">shopping_basket</i>
              <span className='header__optionBasketNumber'>{basket?.length}</span>

            </div>
          
          </Link>

        </div>
        </nav>
    )
}

export default Header
