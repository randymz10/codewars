const rps = (p1, p2) => {
    if (p1.toLowerCase() === p2.toLowerCase()) return 'Draw!';
    else if (p1.toLowerCase() === 'scissor' && p2.toLowerCase() === 'paper') return 'Player 1 won!';
    else if (p1.toLowerCase() === 'paper' && p2.toLowerCase() === 'rock') return 'Player 1 won!';
    else if (p1.toLowerCase() === 'rock' && p2.toLowerCase() === 'scissor') return 'Player 1 won!';
    else if (p2.toLowerCase() === 'scissor' && p1.toLowerCase() === 'paper') return 'Player 2 won!';
    else if (p2.toLowerCase() === 'paper' && p1.toLowerCase() === 'rock') return 'Player 2 won!';
    else if (p2.toLowerCase() === 'rock' && p1.toLowerCase() === 'scissor') return 'Player 2 won!';
};

console.log(rps('scissor', 'rock'));