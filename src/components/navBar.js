import React from 'react'

function NavBar() {
  return (
    <div className='navcolor'>
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
                <a className="navbar-brand" href="#"><img src="./logo.jpg" alt="image" className='logodesign'/></a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                <div className="collapse navbar-collapse " id="navbarNavAltMarkup">
                <div className="navbar-nav ml-auto">
                    <ul class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#">Services</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#">Contact Us</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#">Testimonials</a>
                        </li>
                    </ul>          
                </div>
                </div>
            </div>
        </nav>

    </div>
  )
}

export default NavBar