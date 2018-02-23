function randomNumber() {
    var num = [];
    for(i = 0; i < 3; i++) {
        var n = Math.floor(Math.random() * 9) + 1;
        if(num.includes(n)) {
            i--;
        } 
        else {
            num[i] = n;
        }
    }
    return num;
}

function inputNumber(check, text) {
    if(check) {
        text += "숫자를 입력해주세요. ex)123";
    }
    else {
        text = "잘못 입력하셨습니다.\n1부터 9까지의 숫자로 이루어진 3자리의 숫자를 입력해주세요.";
    }
    var inputNum = prompt(text);
    return inputNum;
}

function checkNumber(inputNum) {
    if(inputNum.length !== 3) {
        return false;
    }
    else if(inputNum.includes(' ') || (inputNum.includes('0'))) {
        return false;
    }
    else if(isNaN(inputNum)) {
        return false;
    }
    else {
        return true;
    }
}

function stringToArray(inputNum) {
    var num = inputNum.split('');
    for(i = 0; i < 3; i++) {
        num[i] = Number(num[i]);
    }
    return num;
}

function matchNumber(answerNum, inputNum) {
    console.log(answerNum, inputNum);
    var score = [0, 0];
    for(i = 0; i < 3; i++) {
        if(answerNum[i] === inputNum[i]) {
            score[0]++;
        }
        else if(answerNum.includes(inputNum[i])) {
            score[1]++;
        }
    }
    return score;
}

function printResult(strike, ball) {
    var resultText = '';
    if(strike) {
        resultText += strike + " 스트라이크\n";
    }
    if(ball) {
        resultText += ball + " 볼\n";
    }
    if(strike === 0 && ball === 0) {
        resultText = "낫싱\n";
    }
    return resultText;
}

function startGame() {
    var check = true, text = '', inputNum, score;
    var answerNum = randomNumber();
    while(true) {
        inputNum = inputNumber(check, text);
        if(inputNum === null) {
            break;
        }
        check = checkNumber(inputNum);
        if(check === false) {
            continue;
        }
        inputNum = stringToArray(inputNum);
        score = matchNumber(answerNum, inputNum);
        text = printResult(score[0], score[1]);
        if(score[0] === 3) {
            alert(text + "3개의 숫자를 모두 맞히셨습니다. 게임 종료!");
            break;
        }
    }
}