import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faLinkedin,
    faFacebook,
    faTwitter
  } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <div className="bg-gray-700 content-center text-center social-container">
        <h3 className="">To Get More Acquainted, Follow These Links...</h3>
            <a href="https://www.linkedin.com/in/el90dorado100/"
                className="linkedin social">
                <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </a>
            <a href="https://www.facebook.com/https://web.facebook.com/sherif.adeleke.90/"
                className="facebook social">
                <FontAwesomeIcon icon={faFacebook} size="2x" />
            </a>
            <a href="https://www.twitter.com/Adelekesh90" className="twitter social">
                <FontAwesomeIcon icon={faTwitter} size="2x" />
            </a>
    </div>
  );
}