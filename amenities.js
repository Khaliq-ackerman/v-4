import React from 'react';
import './amenities.css';



function Amenities() {


  return (
<div>

<h1 class="text-center text-white" >OUR <span class="text-heading">AMENITIES</span></h1>
<h3 class="text-center text-white">Discover our range of services, amenities, and things to do In and Around the Hotel.</h3>


<div class="row text-center text-white mb-5">
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
</div>

<div class="row ameneDef">
  <div class="col-lg-6  destDef"> <h2>Your <span class="text-heading">Downtown</span> Destination</h2>
    <p>From world-class cuisine to contemporary architecture, Transalvania Romania Downtown offers a luxurious stay. Perfectly positioned in downtown Area, our hotel provides spacious, upscale amenities for an exciting city getaway or business trip..</p>
  </div>
  <div class="col-lg-6  destPic"></div>
  <div className="my-hr">
  <hr />
  </div>
    
  <div class="col-lg-6 explDef"> <h2>Explore<span class="text-heading">Romania</span></h2>
    <p>Located adjacent to Dambovita River in Battery Park, and only a few minutes from Carpathian mountains, Sinaia Monastery, and the Transfagarasan Highway, Hotel Transalvania Romania Downtown has many of the city’s attractions right on its doorstep. Uncover all there is to see in the city from our perfect Lower Bucharest Downtown Base..</p>
  </div>
  <div class="col-lg-6 explPic"></div>

  <h1 class="text-center text-white" > <hr/> <hr/><span class="text-heading">SUSTAINABILITY</span></h1>
  <h6 class="text-white mb-5">At Transalvania Romania Downtown, sustainability is extremely important to us. Discover how we reduce our carbon footprint and Other within the hotel.</h6>

  <div class="col-lg-6  insuitPic"></div>
  <div class="col-lg-6 text-white insuitDef"> <h2><span class="text-heading">IN-SUITE</span></h2>
    <ul>
    <li><b><u> In-Suite Water Filters:</u></b>Rocean water filtration systems are present in all suites, which eliminates single-use plastic water bottles.</li>
    <li><b><u>Smart Lights:</u></b> Lights turn off after 15 minutes of inactivity in the room, reducing wasted electricity.</li>
    <li><b><u>Full-Sized Amenities:</u></b> The hotel uses full-sized Byredo amenities to reduce waste from travel-sized soap bottles.</li>
    <li><b><u>Energy Saving:</u></b> In-suite temperatures fluctuate +/- 4 degrees when motion is not detected to save energy.</li>
    <li><b><u>Reducing Waste:</u></b> Bulk amenities are used in all suites to reduce plastic waste.</li>
    <li><b><u>Recycling:</u></b> Nespresso Pods are recycled.</li>
    <li><b><u>Reducing Water Usage:</u></b> Toilets have dual flush capabilities, which allow for the appropriate amount of water when flushing. Showerheads in each guest suite also monitor water usage, ensuring reduced water waste.</li>
</ul>
  </div>

  <div class="col-lg-6  foodPic"></div>
  <div class="col-lg-6 text-white foodDef"> <h2><span class="text-heading">FOOD & BEVERAGE</span></h2>
    <ul>
    <li><b><u>Donated Food:</u></b>6,000+ meals have been donated as part of the New York City Rethink Food Program.</li>
    <li><b><u>Composting:</u></b> Restaurant takeout containers are compostable.</li>
    <li><b><u>Full-Sized Amenities:</u></b> The hotel uses full-sized Byredo amenities to reduce waste from travel-sized soap bottles.</li>
    <li><b><u>Reusable Water Bottles:</u></b> Two water fountains with reusable bottle dispensers can be found within the hotel.</li>
</ul>
  </div>

  <div class="col-lg-6  lightPic"></div>
  <div class="col-lg-6 text-white lightDef"> <h2><span class="text-heading">SMART LIGHT</span></h2>
    <ul>
    <li>Motion-sensor lights are available in public spaces to save electricity. LED lights are also featured throughout the hotel, which use 75% less power than regular bulbs.<br/></li>
    <li> Motion-sensor Doors helps you Go with the Flow. Minimizes the effort and makes you feel easy and comfortable. you can go anywhere wihtout Touching anything</li>
    <li> Air Conditioners are available in both public places and all types of Rooms which are top-class rated. No matter what you pay You can get most Outcome of it.</li>
</ul>
  </div>
</div>



</div>
  );
}

export default Amenities;
