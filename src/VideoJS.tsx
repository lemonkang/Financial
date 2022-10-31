import React ,{useMemo, useRef}from 'react';
import videojs from 'video.js';
import 'video.js/dist/video-js.css';

export const VideoJS = ({options}:any) => {
  const videoRef =useRef(null);
  const playerRef = useRef<any>(null);
 
  const onReadyPlay = (palyer:any) => {
    videoRef.current = palyer
    palyer.play();
  }
  useMemo(() => {
    let defaultOption= {  
      controls: true,
      responsive:true,
     
      height:300,
      with:300
    };
  }, [])
  React.useEffect(() => {

    // Make sure Video.js player is only initialized once
    if (!playerRef.current) {
      const videoElement = videoRef.current;

      if (!videoElement) return;

      const player = playerRef.current = videojs(videoElement, options, () => {
      });
      onReadyPlay(player)
    // You could update an existing player in the `else` block here
    // on prop change, for example:
    } else {
      // const player = playerRef.current;

      // player.autoplay(options.autoplay);
      // player.src(options.sources);
    }
  }, [options, videoRef]);

  // Dispose the Video.js player when the functional component unmounts
  React.useEffect(() => {
    const player = playerRef.current;
    return () => {
      if (player) {
        player.dispose();
        playerRef.current = null;
      }
    };
  }, [playerRef]);

  return (
    <div data-vjs-player>
      <video 
        ref={videoRef} 
        className='video-js vjs-big-play-centered' 
        controls
        ></video>
    </div>
  );
}

export default VideoJS;