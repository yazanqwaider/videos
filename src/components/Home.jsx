import VideoComponent from "./Video";
import videos from "../test_videos";
import { useState } from "react";

export default function Home() {
    const [currentVideo, setCurrentVideo] = useState(videos[0]);

    let videos_thumbnails = [];
    for (let index = 0; index < videos.length; index++) {
        const video = videos[index];
        
        videos_thumbnails.push(
            <div key={'thumbnail-' + index}>
                <img src={video.thumb} alt="Video thumbnail" onClick={() => changeTheCurrentVideo(videos[index])} style={{ width: '200px' }} />
            </div>
        );
    }

    function changeTheCurrentVideo(video) {
        setCurrentVideo(v => video);
    }

    return <div>
        <h1>Reels</h1>

        <p>Welcome back, Yazan Qwaider ...</p>

        <div style={{ display: "flex", justifyContent: "space-around"}}>
            <aside>
                { videos_thumbnails }
            </aside>

            <div>
                <VideoComponent video={currentVideo}></VideoComponent>
            </div>
        </div>
    </div>;
}