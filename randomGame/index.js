const numberForm = document.querySelector("#input-number");
const inputNumber = document.querySelector("#input-number input");
const selectedResult =  document.querySelector("#result");
const maxNumber = document.querySelector("#generate-number");//이거 랜덤숫자 생성할때 불러와야 대는지 모르겠네
const finalOutcome =  document.querySelector("#final-outcome");


function paintResult(event) {
    const submitNumber = inputNumber.value;
    const randomNumber = [Math.floor(Math.random() *maxNumber.value )]; //랜덤숫자 생성하는 코드 수정해야됨...강의보고
    
    event.preventDefault(); 
    selectedResult.innerText = `You chose:  ${submitNumber}, the machine chose: ${randomNumber}`;
    
    if(submitNumber == randomNumber) {
        finalOutcome.innerText = `You won!`;
    }else{
        finalOutcome.innerText = `You lost!`;
    }
}
// 입력한숫자값 ===랜덤으로생성된값 You won!
// 입력한숫자값 ==!랜덤으로생성된값 You lost!

numberForm.addEventListener("submit", paintResult);