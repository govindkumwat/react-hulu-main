import React from 'react'
import { Cards } from './Cards'
import Sdata from './Sdata'
export const Carddata = () => {
    return (
        
        <body className="cardback">

                <div className="container container-fluid ">
            <div className="text-center">
                <div className="p-5">
                <p className='fw-bold fc'>INCLUDED IN ALL PLANS</p>
                <h1 className='fw-bold fc'>All The TV You Love</h1>
                <p className='fw-bold fs-5 fc'>Stream full seasons of exclusive series, current-season episodes, hit movies, Hulu <br /> Originals, kids shows, and more.</p>
            </div>
            </div>
            </div>
       <div className='container-fluid mb-5'>
            <div className="row">
                <div className="col-10 mx-auto">
                    <div className="row gy-4">
                        
                   {
                            Sdata.map((val, ind) =>{
                                return <Cards key={ind}
                                    
                                    text = {val.text}
                                    img = {val.img}
                                    meta = {val.meta}
                                />
                            })
                        }
           </div>
           </div>
           </div>
       
       </div>
       </body>
       
    )
}
