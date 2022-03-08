import { useStateValue } from '../StateProvider';
import '../css/Subtotal.css'
import CurrencyFormat from 'react-currency-format';
import { getBasketTotal } from '../reducer';

function Subtotal() {

  const [{basket},] = useStateValue();
    
  return (
    <div className='subtotal'>

        <div className='subtotal__info'>
                <small> Subtotal ({basket?.length} Items)</small>
                <strong>
                    <CurrencyFormat 
                        decimalScale={2}
                        value={getBasketTotal(basket)}
                        displayType={"text"}
                        thousandSeparator={true}
                        prefix={"$"}

                    />
                </strong>
        </div>
        <div className='subtotal__gift'>
            This order contains a gift<input type="checkbox"></input>
        </div>
        <button>Proceed to Checkout</button>

    </div>
  )
}

export default Subtotal
