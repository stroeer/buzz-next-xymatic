'use client';
import GreenVideoPlayer, { GreenVideo, GreenVideoProps } from '@xymatic/green-video-player-react';
import '@xymatic/green-video-player-react/index.css';
import { LegacyRef } from 'react';

/**
 * This utility component is needed to correctly handle refs,
 * as *dynamically* imported components in nextJs don't forward it.
 * @see https://tinyurl.com/yc55tzcs
 * @see https://github.com/cookpete/react-player/issues/1455
 */
export default function VideoPlayerLoader({
  forwardRef,
  ...props
}: { forwardRef: LegacyRef<GreenVideo> } & GreenVideoProps) {
  return <GreenVideoPlayer ref={forwardRef} {...props} />;
}
