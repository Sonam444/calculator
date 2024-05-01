var player;

function onYouTubeIframeAPIReady() {
    player = new YT.Player('video-background', {
        height: '100%',
        width: '100%',
        videoId: 'cPYaQ-_MKt0', // Replace with your YouTube video ID
        playerVars: {
            autoplay: 1,
            controls: 0,
            loop: 1,
            modestbranding: 1,
            showinfo: 0,
            disablekb: 1,
            playlist: 'cPYaQ-_MKt0', // Repeat the video
            enablejsapi: 1
        },
        events: {
            'onReady': onPlayerReady
        }
    });
}

function onPlayerReady(event) {
    event.target.playVideo();
}
