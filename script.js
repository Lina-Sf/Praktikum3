document.getElementById('apply-btn').addEventListener('click', function () {
    // Change background color
    const bgColor = document.getElementById('background-color').value;
    document.body.style.backgroundColor = bgColor;

    // Change font size
    const fontSize = document.getElementById('font-size').value;
    document.body.style.fontSize = fontSize + 'px';

    // Change font family
    const fontFamily = document.getElementById('font-family').value;
    document.body.style.fontFamily = fontFamily;

    // Toggle dark mode
    const darkMode = document.getElementById('dark-mode').checked;
    if (darkMode) {
        document.body.style.backgroundColor = '#333';
        document.body.style.color = '#fff';
    } else {
        document.body.style.backgroundColor = bgColor;
        document.body.style.color = '#000';
    }
});
