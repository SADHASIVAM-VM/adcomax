import React from 'react';
import { COMPANY_INFO } from '../../data/content';
import { LocationIcon, CallIcon } from '@astraicons/react/linear';

export const AnnouncementBar: React.FC = () => {
  return (
    <div className="announcement">
      <div className="site-container announcement-inner">
        <span>{COMPANY_INFO.subTagline}</span>
        <span className="inline-flex items-center gap-3">
          <span className="inline-flex items-center gap-1">
            <LocationIcon className="w-3.5 h-3.5 opacity-80" />
            {COMPANY_INFO.locationSummary}
          </span>
          <span className="opacity-40">|</span>
          <a
            href={COMPANY_INFO.phoneHref}
            className="inline-flex items-center gap-1 hover:text-white transition-colors"
          >
            <CallIcon className="w-3.5 h-3.5 opacity-80" />
            {COMPANY_INFO.phone}
          </a>
        </span>
      </div>
    </div>
  );
};

export default AnnouncementBar;
