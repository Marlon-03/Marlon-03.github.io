

var element = document.getElementById('any');
var text = ['Developer', 'Designer'];
var index = 0;
var isDeleting = false;
var isPaused = false;
var txt = '';
var pauseDuration = 1000; // Pause for 2 seconds

function typeWriter() {
    var speed = isDeleting ? 200 : 200; // Speed for deleting and typing

    if (!isDeleting && txt.length === text[index].length && !isPaused) {
        // Set pause
        isPaused = true;
        speed = pauseDuration; // Set speed to pause duration
    } else if (isPaused) {
        isPaused = false;
        isDeleting = true;
    } else if (isDeleting && txt.length === 0) {
        // Switch to typing mode
        isDeleting = false;
        // Switch to next word
        index = (index + 1) % text.length;
    }

    if (!isPaused) {
        txt = isDeleting ?
            text[index].substring(0, txt.length - 1) :
            text[index].substring(0, txt.length + 1);
    }

    element.innerHTML = txt || '&nbsp;'; // Add non-breaking space when text is empty

    // Add vertical bar to simulate cursor
    element.innerHTML += '<span class="cursor">|</span>';

    setTimeout(typeWriter, speed);
}

typeWriter();

// about function
function changeTab(index) {
    var panes = document.querySelectorAll('.tab-pane');
    var links = document.querySelectorAll('.tab-link');
    for (var i = 0; i < panes.length; i++) {
        panes[i].classList.remove('active');
        links[i].classList.remove('active');
    }
    panes[index].classList.add('active');
    links[index].classList.add('active');
}

changeTab(0);


