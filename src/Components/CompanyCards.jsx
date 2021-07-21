import React from 'react'
import threeapp from '../images/three.png'
export const CompanyCards = () => {
    return (
        <div className="Ribben">
            <div className="container container-fluid">
                <div className="row">
                <div className="fw-bolder fc text-center  ">
                    <p>BUNDLE WITH ANY HULU PLAN AND SAVE</p>
                </div>
                <div className="hideribben d-flex">
                <section style={{width:'20%'}}>


                <div>
                    <img className="imgcom" src={threeapp} alt="" />
                </div>

                </section>
                <section style={{width:'60%'}}>
                <div className='ms-5'>
                    <h3 className="fc ">Get Hulu, Disney+, and ESPN+.</h3>
                    <span ><a className='fc linksytle' href="">Details</a></span>
                </div>
                </section>

                <section style={{width:'20%'}}>
                <div>
                    <button className='btn btn-danger fc p-2'>GET BUNDLE</button><br />
                    <span ><a className='linksytle' href="">Terms apply</a></span>
                </div>
                </section>
                </div>
                </div>

        </div>
        </div>


    )
}
