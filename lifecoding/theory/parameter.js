function plus(firstNumber, secondNumber) { 
    console.log(firstNumber + secondNumber);
}
plus(60, 8);
//firstNumber,secondNumber는 매개변수로 인수값(60,8)을 받는다. 반드시 순서대로 받는다. 매개변수의 이름은 마음데로 정할수 있다.

const player = {
    name: "nico",
    sayHello: function ( otherPersonsName) {
        console.log("hello" + otherPersonsName + "nice to meet you");
    },
};

player.sayHello("lynn");
player.sayHello("nico");