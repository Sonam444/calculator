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
    let displayValue = '';

function appendNumber(number) {
    displayValue += number;
    document.getElementById('display').value = displayValue;
}

function appendOperator(operator) {
    displayValue += operator;
    document.getElementById('display').value = displayValue;
}

function clearDisplay() {
    displayValue = '';
    document.getElementById('display').value = '';
}

function calculate() {
    try {
        displayValue = eval(displayValue);
        document.getElementById('display').value = displayValue;
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }
}

function sin() {
    displayValue = Math.sin(eval(displayValue));
    document.getElementById('display').value = displayValue;
}

function cos() {
    displayValue = Math.cos(eval(displayValue));
    document.getElementById('display').value = displayValue;
}

function tan() {
    displayValue = Math.tan(eval(displayValue));
    document.getElementById('display').value = displayValue;
}

function squareRoot() {
    displayValue = Math.sqrt(eval(displayValue));
    document.getElementById('display').value = displayValue;
}

function square() {
    displayValue = Math.pow(eval(displayValue), 2);
    document.getElementById('display').value = displayValue;
}

function cube() {
    displayValue = Math.pow(eval(displayValue), 3);
    document.getElementById('display').value = displayValue;
}

function backspace() {
    displayValue = displayValue.slice(0, -1);
    document.getElementById('display').value = displayValue;
}

}

function onPlayerReady(event) {
    event.target.playVideo();
}
