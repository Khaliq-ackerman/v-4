import React from 'react';
import './amenities.css';



function AboutUs() {


  return (
<div>
    <div>
        <h1 class="text-center text-white" > <span class="text-heading">About</span>Us</h1>
        <h3 class="text-center text-white title-c">The hotel is iconic for Romania. It is part of the Romanian National Cultural Heritage.</h3>
    </div>



    {/* <section id='main'>
        <div id='contact'>
        +40-1-222-2222
        <h2><span class="text-primary">Contact</span> Us</h2>
              <p>Please fill out the form below to contact us</p>
              <form action="#">
                      <label for="name">Name</label>
                      <input type="text" name="name" id="name" />
                      <label for="email">Email</label>
                      <input type="email" name="email" id="email" />
                      <label for="message">Message</label>
                      <textarea name="message" id="message"></textarea>
                  <button type="submit" class="btn">Submit</button>
              </form>
        </div>
        </section> */}


<section id="home-info" class="bg-dark">
    <div class="info-img"></div>
    <div class="info-content">
      <h2><span class="text-heading">The History</span> Of Our Hotel</h2>
      <p>
          The Hotel Transylvania is built in 1951 by chief Architect Khaliq-ur-Rehman,Abdul Rehman Badar and Malik Abdul Rehman.This hotel have got historical importance as the design of hotel follows the Mughal Empire architecture and legacy.This hotel is also a symbol of cultural heritage to inspire the tourist and give them a sweet aroma of history.
      </p>
      {/* <a href="" class="btn btn-light">Read More</a> */}
    </div>
    </section>


</div>
  );
}

export default AboutUs;
