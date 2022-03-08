import React from 'react';
import '../css/HomeStyles.css';
import Product from './Product';

function Home() {
    return (
        <div className='homepage'>
            <img className='homepage__bannerImg' src='https://lf16-adcdn-va.ibytedtos.com/obj/i18nblog//case/upload_en_cover_image_12.png' alt='' />

            <div className='product__row'>

                <Product title={'Reinventing the product'}
                        id={1}
                        price={2.00} 
                        rating={5} 
                        image={"https://www.accenture.com/t20210219T090132Z__w__/us-en/_acnmedia/Accenture/Redesign-Assets/DotCom/Images/Global/General/7/Accenture-Reinventing-Marquee-585x447.jpg"} 
                />
            </div>

            <div className='product__row'>

                <Product title={'Reinventing the product'} 
                id={2}
                        price={2.00} 
                        rating={5} 
                        image={"https://www.accenture.com/t20210219T090132Z__w__/us-en/_acnmedia/Accenture/Redesign-Assets/DotCom/Images/Global/General/7/Accenture-Reinventing-Marquee-585x447.jpg"} 
                />

                <Product title={'Reinventing the product'} 
                id={3}
                        price={2.00} 
                        rating={5} 
                        image={"https://www.accenture.com/t20210219T090132Z__w__/us-en/_acnmedia/Accenture/Redesign-Assets/DotCom/Images/Global/General/7/Accenture-Reinventing-Marquee-585x447.jpg"} 
                />
            </div>

            <div className='product__row'>

                <Product title={'Reinventing the product'} 
                id={4}
                        price={2.00} 
                        rating={5} 
                        image={"https://www.accenture.com/t20210219T090132Z__w__/us-en/_acnmedia/Accenture/Redesign-Assets/DotCom/Images/Global/General/7/Accenture-Reinventing-Marquee-585x447.jpg"} 
                />

                <Product title={'Reinventing the product'} 
                id={5}
                        price={2.00} 
                        rating={5} 
                        image={"https://www.accenture.com/t20210219T090132Z__w__/us-en/_acnmedia/Accenture/Redesign-Assets/DotCom/Images/Global/General/7/Accenture-Reinventing-Marquee-585x447.jpg"} 
                />

                <Product title={'Reinventing the product'} 
                id={6}
                        price={2.00} 
                        rating={5} 
                        image={"https://www.accenture.com/t20210219T090132Z__w__/us-en/_acnmedia/Accenture/Redesign-Assets/DotCom/Images/Global/General/7/Accenture-Reinventing-Marquee-585x447.jpg"} 
                />
            </div>

        </div>
    )
}

export default Home;
