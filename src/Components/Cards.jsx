import React from 'react'

export const Cards = (props) => {
    return (
      

            <div class="card cardfit" style={{width: '40vh'}} >
                <img  src={props.img} class="card-img-top " alt="card images"/>
                <div class ="card-body">
                <h5 class ="card-text fw-bold fc">{props.text}</h5>
                <p class ="card-text fc">{props.meta}</p>

                </div>
            </div>
        
    )
}
