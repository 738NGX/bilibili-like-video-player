// script.js
document.addEventListener('DOMContentLoaded', function () {
    loadVideos(video_data); // 加载所有视频
});

function loadVideos(videos) {
    const container = document.getElementById('videosContainer');

    videos.forEach(data => {
        const videoElement = document.createElement('div');
        videoElement.className = 'video-background';
        videoElement.innerHTML = `
            <video autoplay muted loop class="videoPlayer">
                <source src="${data.video_src}" type="video/mp4">
            </video>
            <img src="./images/icons/back.png" class='back'>
            <div class='watching'>${data.watching}人正在看</div>
            <img src="./images/icons/search.png" class='search'>
            <div class='up-info'>
                <img src="${data.UP_avator}" alt="${data.UP_name}" class="up-avatar">
                <div class='col'>
                    <div class='up-name'>${data.UP_name}</div>
                    <div class='up-follower'>${data.UP_follower}粉丝</div>
                </div>
                <img src="./images/icons/follow.png" class="up-follow">
            </div>
            <div class='title'>${data.title}</div>
            <div class='play'>${data.play}播放</div>
            <img src="./images/icons/bullet.png" class="bullet">
            <img src="./images/icons/detail.png" class='detail'>
            <div class='icons'>
                <div class='icons-icon'>
                    <img src="./images/icons/like.png">
                </div>
                <div class='icons-info'>${data.likes}</div>
                <div class='icons-icon'>
                    <img src="./images/icons/comment.png">
                </div>
                <div class='icons-info'>${data.comments}</div>
                <div class='icons-icon'>
                    <img src="./images/icons/coin.png">
                </div>
                <div class='icons-info'>${data.coins}</div>
                <div class='icons-icon'>
                    <img src="./images/icons/favorite.png">
                </div>
                <div class='icons-info'>${data.favorites}</div>
                <div class='icons-icon'>
                    <img src="./images/icons/share.png">
                </div>
                <div class='icons-info'>${data.shares}</div>
            </div>
        `;

        container.appendChild(videoElement);
    });
}
