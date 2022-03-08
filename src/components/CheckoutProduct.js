import '../css/CheckoutProduct.css';
import { useStateValue } from '../StateProvider';

function CheckoutProduct({id, title, price, image, rating}) {

  const [,dispatch] = useStateValue();

  const removeFromBasket = () => {
    dispatch({
     type: 'REMOVE_FROM_BASKET',
     id:id

    })
  }

  return (
    <div className="checkoutProduct">
        <img src={image} alt="" />
        <div className="checkoutProduct__info">
          <h2>{title}</h2>
          <span>${price}.00</span>
          <div className='checkoutProduct__infoRating'>
          {
            Array(rating)
              .fill()
              .map((_) => (
              <p>⭐</p>
              ))
          }
          </div>
          <button onClick={removeFromBasket}>Remove from basket</button>
        </div>
    </div>
  )
}

export default CheckoutProduct