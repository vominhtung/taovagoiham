function  processConfirm(answer){
    let result = "";
    if (answer){
        result = "Excellent. We'll play a nice game of chess.";
    }else {
        result = "Maybe later then.";
    }
    return result;
}
let confirmAnswer = confirm ("shall we play a game?");
let theAnswer = processConfirm(confirmAnswer);
alert(theAnswer);

