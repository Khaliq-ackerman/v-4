import React from 'react';
import './Slideshow.css';
import img1 from './img/img1.jpg';
import img2 from './img/img2.jpg';
import img3 from './img/img3.jpg';


function Slideshow() {


  return (

    <div>
      <div class="col-md-8 offset-md-2 suiteHeader" >
        <hr />
        {/* <hr /> */}
        <h1><span class="text-heading">Suites</span> Include</h1>
        <ul class="m-4">
          <li><h3>Standard Suite</h3></li>
          <li><h3>Double Room</h3></li>
          <li><h3>Family Suite</h3></li>
          <li><h3>Luxury Suite</h3></li>
        </ul>
        
      </div>

      <div class="slideshow">
        <figure>

          <img src={img1} alt="slide 1"></img>
          <img src={img2} alt="Slide 2"></img>
          <img src={img3} alt="Slide 3"></img>
          <figcaption>Enjoy in-suite Amenities including a Water filtration system, Cofee machine and more. !
          </figcaption>

        </figure>
      </div>

      <div class="row suiteDefine"> 
      <div class="col-lg-6  familySuit"></div>
        <div class="col-lg-6  familyDef"> <h2><span class="text-heading">FAMILY</span> SUITE</h2>
          <p>Bring the Family to Transalvania Romania Downtown for a Family Suite Escape. Book one room for you and get the second “kids” room for a good Discount. Sip on complimentary Coffee while the kids enjoy milk and cookies for Free.</p>
        </div>
        <div class="col-lg-6  doubleDef"> <h2><span class="text-heading">DOUBLE</span> SUITE</h2>
          <p>Our Double executive suites provide over 700sq-ft. of stylish amenities. Enjoy 2 seperate double beds or Four seperate Sleep-overs with 2 Extrta foldable sleep-overs. Whcih can make your Life with more Ease and comfortable</p>
        </div>
        <div class="col-lg-6  doubleSuit"></div>

        <div class="col-lg-6  standardSuit"></div>
        <div class="col-lg-6  standardDef"> <h2><span class="text-heading">STANDARD</span> SUITE</h2>
          <p>Suites with the Option of one King or two Double Beds, Our Standard suite also features modern decor', some Great Artworks and a range of up-scale facilities.</p>
        </div>
        <div class="col-lg-6  luxuryDef"> <h2><span class="text-heading">LUXURY</span> SUITE</h2>
          <p>Experience separate sleeping and living areas with stylish interiors and dividing, sliding doors. From views of the River to our in-room water filtration systems, our suites offer sustainable, residence-style comforts.</p>
        </div>
        <div class="col-lg-6  luxurySuit"></div>


      </div>


    </div>
  );
}

export default Slideshow;
