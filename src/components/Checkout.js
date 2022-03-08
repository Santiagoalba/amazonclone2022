import React from 'react'
import { useStateValue } from "../StateProvider";
import '../css/Checkout.css';
import CheckoutProduct from './CheckoutProduct';
import Subtotal from './Subtotal';

function Checkout() {

    const [{basket}] = useStateValue();

    return (
        <div className='checkout'>
            <div className='checkout__left'>
                <img
                    className='checkout__ad'
                    src="https://m.media-amazon.com/images/G/01/AdProductsWebsite/images/AUX/ILB_BrightColors_NotApproved._TTW_.jpg"
                    alt=''
                />
                {basket?.length === 0 ? (
                    <div>
                        <h2>Your shopping basket is empty</h2>
                    </div>
                ) : (
                    <div className='checkout__title'>
                        <h2>Your items</h2>
                        {basket.map(item => (
                            <CheckoutProduct 
                                id={item.id}
                                title={item.title}
                                price={item.price}
                                image={item.image}
                                rating={item.rating}
                            />
                        ))}
                    </div>
                )} 
            </div>

            <Subtotal />

        </div>
    )
}

export default Checkout

