const score= JSON.parse(localStorage.getItem('score')) || {
        wins: 0,
        losses: 0,
        ties: 0
    };

function playGame(playerMove){
    const computerMove = pickComputerMove();

    let result = '';

    if(playerMove === computerMove){
        result = 'Tie!';
    }

    else{
        if((playerMove === 'Rock' && computerMove === 'Paper') || (playerMove === 'Paper' && computerMove === 'Scissors') || (playerMove === 'Scissors' && computerMove === 'Rock')){
            result = 'You Lose! :(';
        }

        else
        result = 'You Win! :)';
    }

    if (result === 'You Win! :)') {
        score.wins += 1;
      } else if (result === 'You Lose! :(') {
        score.losses += 1;
      } else if (result === 'Tie!') {
        score.ties += 1;
      }

    localStorage.setItem('score', JSON.stringify(score));

    scoreUpdate();

    document.querySelector('.js-result')
      .innerHTML = result;
    document.querySelector('.js-playerMoves')
      .innerHTML = `You played: <img src="./assets/${playerMove}-emoji.png" class="move-icon">`;
    document.querySelector(".js-computerMoves")
      .innerHTML = `Computer played: <img src="./assets/${computerMove}-emoji.png" class="move-icon">`;

}    

function pickComputerMove(){
    let computerMove = '';
    const num = Math.random();

    if(num<=1/3){
        computerMove= 'Rock';
    }
    else if(num > 1 / 3 && num <= 2 / 3){
        computerMove= 'Paper';
    }
    else{
        computerMove= 'Scissors';
    }

    return computerMove;
}

scoreUpdate();

function scoreUpdate(){
    document.querySelector('.js-score')
        .innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
    }