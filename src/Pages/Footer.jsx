import React from "react";
import '../components/Css/footer.css';

function Footer() {
  return (
    <footer>
      <div class="footer">
        <div class="row">
          <a href="#">
          <i class="fab fa-facebook" aria-hidden="true"></i>
          </a>
          <a href="#">
          <i class="fab fa-linkedin" aria-hidden="true"></i>
          </a>
          <a href="#">
          <i class="fab fa-twitter" aria-hidden="true"></i>
          </a>
          <a href="#">
          <i class="fab fa-instagram" aria-hidden="true"></i>
          </a>
        </div>

        <div class="row">
          <ul>
            <li>
              <a href="#">Contact us</a>
            </li>
            <li>
              <a href="#">Our Services</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Terms & Conditions</a>
            </li>
            <li>
              <a href="#">Career</a>
            </li>
          </ul>
        </div>

        <div class="row">
          INFERNO Copyright © 2021 Inferno - All rights reserved || Designed By:
          Mahesh
        </div>
      </div>
    </footer>
  );
}

export default Footer;
