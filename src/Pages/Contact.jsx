import React from "react";
import "../components/Css/contact.css";

function Discount() {
  return (
    <div class="discount" id="contact">
      <div class="image-">
        <div class="content-">
          <div class="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d57769.144336695565!2d55.30184412333984!3d25.18394189643073!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43496ad9c645%3A0xbde66e5084295162!2z2K_YqNmKIC0g2KfZhNil2YXYp9ix2KfYqiDYp9mE2LnYsdio2YrYqSDYp9mE2YXYqtit2K_YqQ!5e0!3m2!1sar!2s!4v1693406809929!5m2!1sar!2s"
              width="350rem"
              height="550rem"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
      <div class="form">
        <div class="content-">
          <h2>Keep In Touch...</h2>
          <br />
          <form action="">
            <input
              class="input"
              type="text"
              placeholder="Your Name"
              name="name"
            />
            <input
              class="input"
              type="email"
              placeholder="Your Email"
              name="email"
            />
            <input
              class="input"
              type="text"
              placeholder="Your Phone"
              name="mobile"
            />
            <textarea
              class="input"
              placeholder="Tell Us About Your Needs"
              name="message"
            ></textarea>
            <input type="submit" value="Send" />
          </form>
        </div>
      </div>
    </div>
  );
}

export default Discount;
