import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";



import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHotel } from '@fortawesome/free-solid-svg-icons';
import { faUtensils, faDumbbell } from '@fortawesome/free-solid-svg-icons';

// import Banner from './Banner';
import Slideshow from './Slideshow.js';
import Offers from './offers.js';
import Amenities from './amenities.js';
import Contact from './contact.js';
import AboutUs from './about.js';

import './Banner.css';
import Carousel from 'react-bootstrap/Carousel';
import banner from './img/banner.png';
import banner1 from './img/banner1.jpg'
import banner3 from './img/banner3.jpg'


function App() {

  return (

    <BrowserRouter>
      <Routes>
        <Route path='/' element={<div>
          <header>
            <div class="container-fluid banner" id="home">
              <div class="row">
                <div class="col-md-12">


                  <nav class="navbar navbar-md">
                    <div class="navbar-brand  Logo">Transylvania</div>

                    <ul class="nav">
                      <li class="nav-item">
                        <Link to="/" class="nav-link">Home</Link>
                      </li>
                      <li class="nav-item">
                        <Link to="/about" class="nav-link">About</Link>
                      </li>
                      <li class="nav-item">
                        <Link to="/offers" class="nav-link">Offers</Link>
                      </li>
                      <li class="nav-item">
                        <Link to="/about" class="nav-link">Dining & Drinks</Link>
                      </li>
                      <li class="nav-item">
                        <Link to="/amenities" class="nav-link">Amenities</Link>
                      </li>
                      <li class="nav-item">
                        <Link to="/contact" class="nav-link">Contact</Link>
                      </li>

                    </ul>
                  </nav>

                  <Carousel className='carousel'>
                    <Carousel.Item className='ban-img-1'>
                      <img
                        className="d-block w-100 ban-img "
                        src={banner}
                        alt="First slide"
                      />
                      <Carousel.Caption>
                        <div class="col-md-8 offset-md-2 info">
                          <h1 class="text-center">Hotel Transylvania</h1>
                          <p class="text-center">
                            Make The Moments you Never Foget. !
                          </p>
                          <a href="https:\\samsung.com" class="btn btn-md text-center"
                          >BOOK NOW</a>
                        </div>
                      </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                      <img
                        className="d-block w-100 ban-img"
                        src={banner1}
                        alt="Second slide"
                      />

                      <Carousel.Caption>
                        <div class="col-md-8 offset-md-2 info">
                          <h1 class="text-center">Hotel Transylvania</h1>
                          <p class="text-center">
                            Make The Moments you Never Foget. !
                          </p>
                          <a href="https:\\samsung.com" class="btn btn-md text-center"
                          >BOOK NOW</a>
                        </div>
                      </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                      <img
                        className="d-block w-100 ban-img"
                        src={banner3}
                        alt="Third slide"
                      />

                      <Carousel.Caption>
                        <div class="col-md-8 offset-md-2 info">
                          <h1 class="text-center">Hotel Transylvania</h1>
                          <p class="text-center">
                            Make The Moments you Never Foget. !
                          </p>
                          <Link to="/contact" class="btn btn-md text-center"
                          >BOOK NOW</Link>
                        </div>
                      </Carousel.Caption>
                    </Carousel.Item>
                  </Carousel>
                </div>

              </div>
            </div>
          </header>
          <Slideshow />
        </div>} />

        <Route path='/contact' element={<div>
          <div class="container-fluid banner op-nav" id="home">
            <div class="row">
              <div class="col-md-12">


                <nav class="navbar navbar-md">
                  <div class="navbar-brand  Logo">Transylvania</div>

                  <ul class="nav">
                    <li class="nav-item">
                      <Link to="/" class="nav-link">Home</Link>
                    </li>
                    <li class="nav-item">
                      <Link to="/about" class="nav-link">About</Link>
                    </li>
                    <li class="nav-item">
                      <Link to="/offers" class="nav-link">Offers</Link>
                    </li>
                    <li class="nav-item">
                      <Link to="/about" class="nav-link">Dining & Drinks</Link>
                    </li>
                    <li class="nav-item">
                      <Link to="/amenities" class="nav-link">Amenities</Link>
                    </li>
                    <li class="nav-item">
                      <Link to="/contact" class="nav-link">Contact</Link>
                    </li>

                  </ul>
                </nav>
              </div>
            </div>
          </div>
          <hr />
          <Contact />
        </div>} />


        <Route path='/about' element={<div>
          <div class="container-fluid banner op-nav" id="home">
            <div class="row">
              <div class="col-md-12">


                <nav class="navbar navbar-md">
                  <div class="navbar-brand  Logo">Transylvania</div>

                  <ul class="nav">
                    <li class="nav-item">
                      <Link to="/" class="nav-link">Home</Link>
                    </li>
                    <li class="nav-item">
                      <Link to="/about" class="nav-link">About</Link>
                    </li>
                    <li class="nav-item">
                      <Link to="/offers" class="nav-link">Offers</Link>
                    </li>
                    <li class="nav-item">
                      <Link to="/about" class="nav-link">Dining & Drinks</Link>
                    </li>
                    <li class="nav-item">
                      <Link to="/amenities" class="nav-link">Amenities</Link>
                    </li>
                    <li class="nav-item">
                      <Link to="/contact" class="nav-link">Contact</Link>
                    </li>

                  </ul>
                </nav>
              </div>
            </div>
          </div>
          <hr />
          <AboutUs />
        </div>} />

        <Route path='/offers' element={<div>
          <div class="container-fluid banner op-nav" id="home">
            <div class="row">
              <div class="col-md-12">


                <nav class="navbar navbar-md">
                  <div class="navbar-brand  Logo">Transylvania</div>

                  <ul class="nav">
                    <li class="nav-item">
                      <Link to="/" class="nav-link">Home</Link>
                    </li>
                    <li class="nav-item">
                      <Link to="/about" class="nav-link">About</Link>
                    </li>
                    <li class="nav-item">
                      <Link to="/offers" class="nav-link">Offers</Link>
                    </li>
                    <li class="nav-item">
                      <Link to="/about" class="nav-link">Dining & Drinks</Link>
                    </li>
                    <li class="nav-item">
                      <Link to="/amenities" class="nav-link">Amenities</Link>
                    </li>
                    <li class="nav-item">
                      <Link to="/contact" class="nav-link">Contact</Link>
                    </li>

                  </ul>
                </nav>
              </div>
            </div>
          </div>
          <hr />
          <Offers />
        </div>} />
        <Route path='/amenities' element={<div>
          <div class="container-fluid banner op-nav" id="home">
            <div class="row">
              <div class="col-md-12">


                <nav class="navbar navbar-md">
                  <div class="navbar-brand  Logo">Transylvania</div>

                  <ul class="nav">
                    <li class="nav-item">
                      <Link to="/" class="nav-link">Home</Link>
                    </li>
                    <li class="nav-item">
                      <Link to="/about" class="nav-link">About</Link>
                    </li>
                    <li class="nav-item">
                      <Link to="/offers" class="nav-link">Offers</Link>
                    </li>
                    <li class="nav-item">
                      <Link to="/about" class="nav-link">Dining & Drinks</Link>
                    </li>
                    <li class="nav-item">
                      <Link to="/amenities" class="nav-link">Amenities</Link>
                    </li>
                    <li class="nav-item">
                      <Link to="/contact" class="nav-link">Contact</Link>
                    </li>

                  </ul>
                </nav>
              </div>
            </div>
          </div>
          <hr />
          <Amenities />
        </div>} />



      </Routes>
      {/* <section id="features">
        <div class="box bg-light">
          <FontAwesomeIcon icon={faHotel} size="3x" />
          <h3>Great Location</h3>
          <p>The hotel occupied beautiful natural scenary along with sea view and hills.</p>
        </div>
        <div class="box bg-primary">
          <FontAwesomeIcon icon={faUtensils} size="3x" />
          <h3>Free Meals</h3>
          <p>The meal is free for every customer and vistors and  it is also very delicious and yummy with a lot variety includes chinees,continental,italian and desi as well.</p>
        </div>
        <div class="box bg-light">
          <FontAwesomeIcon icon={faDumbbell} size="3x" />
          <h3>Fitness Room</h3>
          <p>Th hotel also have a well maintained gym consist of modern gymnism machines along with swimming pool as well.</p>
        </div>
      </section> */}
      <section>

      <div class="container">
  <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
    <p class="col-md-4 mb-0 text-body-secondary">© 2023 Company, Inc</p>

    <a href="/" class="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
      {/* <svg class="bi me-2" width="40" height="32"></svg> */}
      <img src="" alt="" />
    </a>

    <ul class="nav col-md-4 justify-content-end">
      <li class="nav-item"><a href="#" class="nav-link px-2 text-body-secondary">Home</a></li>
      <li class="nav-item"><a href="#" class="nav-link px-2 text-body-secondary">Features</a></li>
      <li class="nav-item"><a href="#" class="nav-link px-2 text-body-secondary">Pricing</a></li>
      <li class="nav-item"><a href="#" class="nav-link px-2 text-body-secondary">FAQs</a></li>
      <li class="nav-item"><a href="#" class="nav-link px-2 text-body-secondary">About</a></li>
    </ul>
  </footer>
</div>
      </section>



    </BrowserRouter>



    // <div>

    //   {/* <hr /> */}

    //   <Slideshow />
    //   <Offers />
    //   <Amenities />
    //   <Contact />
    //   <AboutUs />

    //   {/* <div>
    //   <Routes>
    //     <Route exact path="/"/>
    //     <Route path="/suites"  component={Slideshow} />
    //     <Route path="/offers"  component={Offers} />
    //     <Route path="/amenities" component={Amenities} />
    //   </Routes>
    // </div> */}





    //   <div id="showcase-container mt-5">

    //     <div id="showcase">
    //       <div class="container">
    //         <div class="showcase-content">
    //           <h1><span class="text-primary">Enjoy</span> Your Stay</h1>
    //           <p class="lead">This hotel is a perfect destination to spend your vacations and enjoy with your family and relatives.</p>
    //           <div class="btn"><a href="">About Our Hotel</a></div>
    //         </div>
    //       </div>
    //     </div>



    //   </div>




    //   <div class="clr"></div>


    //   <footer id="main-footer" class="main-footer">
    //     <p>Transylvania &copy; 2023</p>
    //   </footer>




    // </div>

  );
}

export default App;