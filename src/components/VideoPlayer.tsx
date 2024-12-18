import { type FC } from 'react';
import dynamic from 'next/dynamic';

import templateData from '../data/sampleTemplateData.json';
import content from '../data/sampleContent.json';

const GreenVideoPlayer = dynamic(() => import('./VideoPlayerLoader'), { ssr: false });

export const VideoPlayer: FC = () => {
  const onEvent = (e: CustomEvent) => {
    switch (e.detail.type) {
      case 'impression': {
        console.log('impression!');
        break;
      }
      case 'ms_25': {
        alert('25% milestone reached!');
        break;
      }
      default: {
        console.log(e.detail.type);
      }
    }
  };

  // example: providing content and config statically, subscribing to player events
  return (
    <div style={{ width: '640px' }}>
      <GreenVideoPlayer
        licenseKey="be132c877a4e0d3cf874074f4d9bdf7885c611a1"
        content={content}
        config={{
          templateData,
        }}
        onEvent={onEvent}
      />
    </div>
  );
};
