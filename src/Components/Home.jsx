import React from 'react'
import {Navbar} from '../Components/Navbar'
import hulu from '../images/logo.png'
import { CompanyCards } from './CompanyCards'
export const Home = () => {
    return (
        <div>
            
        <body className='background p-5'>
        <Navbar />
        
        <div className="container container-fluid text-center mt-5">
            <p className="mx-auto fw-bold fc">TRY UP TO ONE MONTH FREE</p>
            <img className="img mt-2" src={hulu} alt="" /> 
            <p className="mx-auto fw-bolder mt-3 text-white">Watch thousands of TV shows and movies.</p> 

            <p className='fc'>HBO Max<i class= "bi bi-badge-tm"></i>, CINEMAX and STARZ AVAILABLE as add-ons. </p>

            <button className="btn btn-light fw-bold p-4">START YOUR FREE TRIAL</button> 
            <p className="fw-lighter mt-2 fc">Free trial for new  eligible returning subscribes only</p> 
            
        </div>



        </body>

        
        
        </div>
        
    )
}
