document.addEventListener("DOMContentLoaded", event => {
    let dropDown = document.createElement('select');
    dropDown.id = 'player-option';
    dropDown.classList.add('mt-2');

    Game.options.forEach((value, index) => {
        var option = document.createElement('option');
        option.value = index;
        option.text = value;
        dropDown.appendChild(option);
    })

    document.querySelector('#player-area').appendChild(dropDown)
});

document.querySelector('#play').addEventListener('click', event => {
    const select = document.querySelector('#player-option');
    let option = select.options[select.selectedIndex].value;

    // validate
    if (!Game.options.includes(Game.options[option])) {
        alert('Invalid choice');
    } else {
        let game = new Game(option);
        document.querySelector('#match-result').textContent = game.play();
        document.querySelector('.player').textContent = game.getPlayerOption();
        document.querySelector('.computer').textContent = game.getComputerOption();
    }
})