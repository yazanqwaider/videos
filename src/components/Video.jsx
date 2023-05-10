import { useEffect, useRef } from "react";
import videojs from "video.js";

export default function VideoComponent({video}) {
    const videoTagRef = useRef();

    useEffect(() => {
        videojs(videoTagRef.current);
        videoTagRef.current.load();
    }, [video, videoTagRef]);

    return (
        <video autoPlay controls style={{width: '800px', height: '400px'}} className={'video-js'} id={'video-' + video.id} ref={videoTagRef}>
            <source type="video/mp4" src={video.source}/>
        </video>
    );
}