import React from 'react'

export const Navbar = () => {
    return (
        <>
       
            <nav class="navbar navbar-expand-lg navbar-dark fc">
                <div class="container-fluid col-lg-11 col-sm-12 col-md-12">
                    <a class="navbar-brand" href="#"></a>
                    <button class="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon fc"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        </ul>
                        <form class="d-flex">
                            <p className='color-white fc fw-bolder' type="submit">LOG IN</p>
                        </form>
                    </div>
                </div>
            </nav>
        </>
    )
}
