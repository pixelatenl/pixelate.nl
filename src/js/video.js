/**
 * video()
 * Initiate the video if possible and adds a class when the video is loaded
 */
function video() {
    const video = document.getElementById('videoSource');
    const noVideo = document.getElementById('noVideo');
    const page = document.getElementById('page');
    // Check video support
    if(supportsVideoType('webm', video) === 'probably' || supportsVideoType('h264', video) === 'probably' || supportsVideoType('ogg', video) === 'probably') {
        video.load();
        video.addEventListener('loadeddata', function() {
            page.classList.add('video-is-loaded'); //Initiates page content
        }, false);
    }
    else {
        noVideo.classList.remove('hidden');
        page.classList.add('video-is-loaded'); //Initiates page content
    }
}
video();

/**
 * supportsVideoType
 * Closes the sheet component
 * @param {string} type - video type
 *  @param {object} element - video element
 */
function supportsVideoType(type, element) {
    const formats = {
        ogg: 'video/ogg; codecs="theora"',
        h264: 'video/mp4; codecs="avc1.42E01E"',
        webm: 'video/webm; codecs="vp8, vorbis"',
        vp9: 'video/webm; codecs="vp9"',
        hls: 'application/x-mpegURL; codecs="avc1.42E01E"'
    };
    return element.canPlayType(formats[type] || type);
}

