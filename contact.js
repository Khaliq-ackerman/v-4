import React from 'react';
import './amenities.css';



function Contact() {


  return (
    <div>
      <div>
        <h1 class="text-center text-white" > <span class="text-heading">Contact</span> Info</h1>
        <h3 class="text-center text-white title-c">Location / Europe / Romania / Romanian Hotels / Transylvania, Romania, Downtown / Contact</h3>
      </div>



      <div class="row">
        <div class="col-lg-6 contact">
          <h5><span class="text-heading">Phone(Hotline):</span>  +40 (20) 222-5555, +40 (20) 222-5566</h5>
          <hr />
          <h5><span class="text-heading">Mobile:</span>  +40 (636) 333-6666</h5>
          <hr />
          <h5><span class="text-heading">Hotel Transylvania:</span> <br /><u>11, Down Street</u> <br />
            (across The National Bank of Romania),<br /> Downtown, Romania  </h5>
          <hr />
          <h5><span class="text-heading">Email:</span> transylvania_hotel@gmail.com</h5>
          <hr />


        </div>
        <div class="col-lg-6 p-5 cover map">

          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11050.800766484586!2d21.30388488038103!3d46.17662348751062!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x474598fff699d6a5%3A0x218dfabe199634e2!2sDowntown%2C%20Arad%2C%20Romania!5e0!3m2!1sen!2s!4v1683461184293!5m2!1sen!2s" width="100%" height="450px" style={{ border: '0' }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
        <hr />
      </div>


      <div className="contact-d">
      <form>
        <label class="text-heading" for="name">Name:</label>
        <input type="text" id="name" name="name" required />

          <label class="text-heading" for="email">Email:</label>
          <input type="email" id="email" name="email" required />

            <label class="text-heading" for="message">Message:</label>
            <textarea id="message" name="message" rows="5" required></textarea>

            <button type="submit">Submit</button>
          </form>

          </div>



          {/* <div class="row text-center text-white mb-5">
<hr/>
    <div class="col-md-3"><li>Connecting Rooms</li></div>
    <div class="col-md-3"><li>Free WiFi</li></div>
    <div class="col-md-3"><li>Smoke-free</li></div>
    <div class="col-md-3"><li>Digital Key</li></div>
    <div class="col-md-3"><li>Concierge</li></div>
    <div class="col-md-3"><li>Luxury</li></div>
    <div class="col-md-3"><li>On-site restaurant</li></div>
    <div class="col-md-3"><li>Fitness center</li></div>
    <div class="col-md-3"><li>Pet-Friendly</li></div>
    <div class="col-md-3"><li>Room service</li></div>
    <div class="col-md-3"><li>Business center</li></div>
    <div class="col-md-3"><li>Meeting rooms</li></div>
    <hr/>
</div> */}




        </div>
        );
}

        export default Contact;
