function flipCoin() {
    const numberOfFlips = parseInt(document.getElementById('numberOfFlips').value);
    if (isNaN(numberOfFlips) || numberOfFlips < 1) {
        alert('Please enter a valid number.');
        return;
    }
    let headsCount = 0;
    let tailsCount = 0;

    for (let i = 0; i < numberOfFlips; i++) {
        const result = Math.random() < 0.5 ? 'Heads' : 'Tails';
        if (result === 'Heads') {
            headsCount++;
        } else {
            tailsCount++;
        }
    }
    document.getElementById('headsCount').innerText = `Heads: ${headsCount}`;
    document.getElementById('tailsCount').innerText = `Tails: ${tailsCount}`;
    document.getElementById('results').style.display = 'block';
}
