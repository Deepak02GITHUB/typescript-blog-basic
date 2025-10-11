// components/SocialIcons.tsx
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faLinkedinIn, faInstagram } from '@fortawesome/free-brands-svg-icons';
import type { IconProp } from "@fortawesome/fontawesome-svg-core";
const SocialIcons: React.FC = () => {
    return (
        <div className="flex space-x-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white-600 hover:text-white-800">
                <FontAwesomeIcon icon={faFacebookF as IconProp} className='h-5 w-5' />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-600">
                <FontAwesomeIcon icon={faTwitter as IconProp} className='h-5 w-5' />
            </a>
            <a href="https://www.linkedin.com/company/intelectia-legal-firm---india/" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-blue-900">
                <FontAwesomeIcon icon={faLinkedinIn as IconProp} className='h-5 w-5' />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-pink-600 hover:text-pink-800">
                <FontAwesomeIcon icon={faInstagram as IconProp} className='h-5 w-5' />
            </a>
        </div>
    );
};

export default SocialIcons;
