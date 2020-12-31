import React from 'react';
import FacebookLogo from '../../logos/facebook.svg';
import InstagramLogo from '../../logos/instagram-logo.svg';
import TelegramLogo from '../../logos/telegram-logo.svg';
import './footer.css';

export default function Footer() {
  let logoHeight = 30;
  let logoWidth = 30;

  return (
    <div className="footer">
      <div className="footer-info-container">
        <div className="info-credits">
          Information credits: animalplanet.com
        </div>
        <div className="image-credits">Images credits: unsplash</div>
      </div>

      <div className="footer-icons">
        <img
          className="logo"
          src={FacebookLogo}
          height={logoHeight}
          width={logoWidth}
          alt="facebook logo"
        />
        <img
          src={InstagramLogo}
          height={logoHeight}
          width={logoWidth}
          alt="instagram logo"
        />
        <img
          src={TelegramLogo}
          height={logoHeight}
          width={logoWidth}
          alt="telegram logo"
        />
      </div>
    </div>
  );
}
