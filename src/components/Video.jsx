import { useEffect, useRef } from "react";

export default function VideoComponent(props) {
    const videoTagRef = useRef();

    useEffect(() => {
        videoTagRef.current.load();
    });

    return (
        <video controls style={{width: '700px'}} ref={videoTagRef}>
            <source type="video/mp4" src={props.video.source}/>
        </video>
    );
}