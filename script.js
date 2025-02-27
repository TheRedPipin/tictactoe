window.onload = function() {
    const board = document.getElementById('boardContainer');
    for (let i = 0; i < 9; i++) {
        const square = document.createElement('button');
        square.classList.add('section');
        square.id = `section${i}`;
        board.appendChild(square);
    }

    const themeSwitch = document.getElementById('themeSwitchInput');

    const savedTheme = localStorage.getItem('darkMode');
    if (savedTheme === 'true') {
        themeSwitch.checked = true;
        document.body.classList.add('darkMode');
    }

    themeSwitch.addEventListener('change', function() {
        document.body.classList.toggle('darkMode', themeSwitch.checked);
        localStorage.setItem('darkMode', themeSwitch.checked);
    });
}