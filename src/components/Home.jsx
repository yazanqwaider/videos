import VideoComponent from "./Video";
import videos from "../test_videos";
import { useState, useEffect} from "react";
import '../styles/home.css';

export default function Home() {
    const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
    const [currentVideo, setCurrentVideo] = useState(videos[0]);

    let videos_thumbnails = [];
    for (let index = 0; index < videos.length; index++) {
        const video = videos[index];
        
        videos_thumbnails.push(
            <div className={`thumbnail-video ${(currentVideoIndex === index)? 'active':''}`} key={'thumbnail-' + index}>
                <img src={video.thumb} alt="Video thumbnail" onClick={() => changeTheCurrentVideo(index)} style={{ width: '150px' }} />
            </div>
        );
    }

    function changeTheCurrentVideo(video_index) {
        setCurrentVideoIndex(video_index);
        setCurrentVideo(videos[video_index]);
    }

    useEffect(() => {
        document.getElementsByTagName('body')[0].onkeydown = function(e) {
            if(e.code === 'ArrowDown' && currentVideoIndex < videos.length - 1) {
                changeTheCurrentVideo(currentVideoIndex + 1);
            }
            else if(e.code === 'ArrowUp' && currentVideoIndex > 0) {
                changeTheCurrentVideo(currentVideoIndex - 1);
            }
        }
    });

    return <div>
        <div style={{height: '20vh'}}>
            <h1>Reels</h1>
            <p>Welcome back, Yazan Qwaider ...</p>
        </div>
      
        <div style={{ height: '80vh', display: "flex", justifyContent: "space-around"}}>
            <aside style={{overflow: 'auto', height: '95%'}}>
                { videos_thumbnails }
            </aside>

            <div>
                <VideoComponent video={currentVideo}></VideoComponent>
            </div>
        </div>
    </div>;
}