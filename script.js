
const score = {
    wins : 0,
    tie  : 0,
    loss : 0

};
function reset(){
    score.wins = 0,
    score.loss = 0,
    score.tie = 0
}


function Game (personMove){
    
    const ComputerMove = PickComputerMove()
    let result = '';
    if (personMove ==='rock') {
        if (ComputerMove ==='rock') {
            result = 'its a Tie';
        }else if (ComputerMove === 'paper'){
            result = 'You Loose';
        }else if (ComputerMove === 'scissors'){
            result = 'You Win';
        }
    }else if (personMove==='scissors'){
        if (ComputerMove ==='rock') {
            result = 'You Loose';
        }else if (ComputerMove === 'paper'){
            result = 'You Win';
        }else if (ComputerMove === 'scissors'){
            result = 'its a Tie';
        }
    }else if (personMove==='paper'){
        if (ComputerMove ==='rock') {
            result = 'You Win ';
        }else if (ComputerMove === 'paper'){
            result = 'its a Tie';
        }else if (ComputerMove === 'scissors'){
            result = 'You Loose';
        }
    }

    if (result === 'You Win'){
        score.wins += 1;

    }else if (result === 'You Loose'){
        score.loss +=1;

    }else if (result === 'its a Tie'){
        score.tie +=1;

    }
    
    alert(`you chose ${personMove} and the Computer chose ${ComputerMove} ${result}
wins: ${score.wins},losses : ${score.loss},ties :${score.tie}`)
    return;
}
// the below code is for the computers move via a random number 

function PickComputerMove(){
    let ComputerMove = '';
    const var1= Math.random()
    if (var1 >= 0 && var1 <1/3){
        ComputerMove='rock';
    }else if (var1 >= 1/3 && var1 <2/3){
        ComputerMove='paper';
    }else if (var1 >= 2/3 && var1 <1){
        ComputerMove='scissors';
    }
    return ComputerMove;

}
