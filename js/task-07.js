const inputRef = document.getElementById('font-size-control');
const textRef = document.getElementById('text');

function fontSizeControl (e) {
    textRef.style.fontSize = e.currentTarget.value +'px';
}

textRef.addEventListener('input', fontSizeControl);
