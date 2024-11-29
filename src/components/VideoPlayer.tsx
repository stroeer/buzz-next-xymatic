import { GreenVideo } from '@xymatic/green-video-player-react';
import dynamic from 'next/dynamic';
import { useRef, type FC } from 'react';

const GreenVideoPlayer = dynamic(() => import('./VideoPlayerLoader'), { ssr: false });

export const VideoPlayer: FC = () => {
  const ref = useRef<GreenVideo | null>(null);

  const playerConfig = {
    autostartDelay: 0,
    embedBorderRadius: 20,
  };
  const onPlayerReady = () => {
    console.log('ready!');
    const player = ref.current;
    // work with Player API here
    setTimeout(() => player?.video.pause(), 3000);
    setTimeout(() => player?.video.play(), 7000);
  };
  return (
    <div style={{ width: '640px', height: '360px' }}>
      <GreenVideoPlayer
        forwardRef={(node: GreenVideo) => {
          ref.current = node;
        }}
        embedId="Is4nVmpe"
        licenseKey="be132c877a4e0d3cf874074f4d9bdf7885c611a1"
        contentId="de1d6c7997a06607772bb21cf8bf4b7ab5415fde"
        config={playerConfig}
        onReady={onPlayerReady}
      />
    </div>
  );
};
