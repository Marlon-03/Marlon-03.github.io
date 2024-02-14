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

// Activate the first tab by default
changeTab(0);