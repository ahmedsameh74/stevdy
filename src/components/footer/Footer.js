import React, { useState } from "react";
import "./Footer.css";

export default function Footer() {
  const [tab, setTab] = useState("");

  return (
    <div className="footer">
      <div className="main-footer">
        <div className="about">
          <h2>Study</h2>
          <div className="footer-info">
            <p>Delivery Information</p>
            <p>Returns & Refunds</p>
            <p>Terms & Conditions Of Sale</p>
            <p>Website Terms & Conditions</p>
            <p>Privacy Policy</p>
          </div>
        </div>
        <div className="contact">
          <h2>Help</h2>
          <div
            // className={tab === "help" ? "footer-active" : "footer-notactive"}
            className="footer-info"
          >
            <p>contact</p>
            <p>FAQs</p>
            <p>Sitemap</p>
            <p>Stores</p>
          </div>
        </div>

        <div className="content">
          <h2>Signup for special offers</h2>
          <div className="footer-info">
            <div className="input">
                <input type="text" placeholder="mail" />
                <button>Subscribe</button>
            </div>
          </div>
        </div>
      </div>
      <div className="copyRights">
        <p>© 2022 Ahmed Sameh. All Rights Reserved</p>
      </div>
    </div>
  );
}
