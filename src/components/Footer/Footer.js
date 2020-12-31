import React, { useState } from 'react';
import { ReactComponent as FacebookLogo } from '../../logos/facebook.svg';
import { ReactComponent as InstagramLogo } from '../../logos/instagram-logo.svg';
import { ReactComponent as TelegramLogo } from '../../logos/telegram-logo.svg';
import { ReactComponent as TwitterLogo } from '../../logos/Twitter.svg';
import './footer.css';

export default function Footer() {
  let logoHeight = 30;
  let logoWidth = 30;

  const [isFacebookHovered, setIsFacebookHovered] = useState(false);
  const [isInstagramHovered, setIsInstagramHovered] = useState(false);
  const [isTwitterHovered, setIsTwitterHovered] = useState(false);
  const [isTelegramHovered, setIsTelegramHovered] = useState(false);

  return (
    <div className="footer">
      <div className="footer-info-container">
        <div className="info-credits">
          Information credits: animalplanet.com
        </div>
        <div className="image-credits">Images credits: unsplash</div>
      </div>

      <div className="footer-icons">
        {/* <img
          className="logo"
          src={FacebookLogo}
          height={logoHeight}
          width={logoWidth}
          alt="facebook logo"
        /> */}

        <FacebookLogo
          fill={isFacebookHovered ? '#1873EB' : '#FFFFFF'}
          onMouseEnter={() => setIsFacebookHovered(true)}
          onMouseLeave={() => setIsFacebookHovered(false)}
          className="logo"
          width={logoWidth}
          height={logoHeight}
        />
        <InstagramLogo
          fill={isInstagramHovered ? '#C53594' : '#ffffff'}
          onMouseEnter={() => setIsInstagramHovered(true)}
          onMouseLeave={() => setIsInstagramHovered(false)}
          className="logo"
          width={logoWidth}
          height={logoHeight}
        />
        <TwitterLogo
          fill={isTwitterHovered ? '#55ACEE' : '#ffffff'}
          onMouseEnter={() => setIsTwitterHovered(true)}
          onMouseLeave={() => setIsTwitterHovered(false)}
          className="logo"
          width={logoWidth}
          height={logoHeight}
        />
        <TelegramLogo
          fill={isTelegramHovered ? '#0088CC' : '#ffffff'}
          onMouseEnter={() => setIsTelegramHovered(true)}
          onMouseLeave={() => setIsTelegramHovered(false)}
          className="logo"
          width={logoWidth}
          height={logoHeight}
        />
      </div>
    </div>
  );
}
