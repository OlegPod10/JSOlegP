// Задание 1

let simpleText = prompt('Введите любой текст');
alert(`Вы ввели этот текст - ${simpleText}`);



// Задание 2

let firstNum = prompt('Введите первое число')
let twoNum = prompt('Введите второе число')
alert(+firstNum + +twoNum)



// Задание 3

let userName = prompt('Введите имя')
let userAge = prompt('Введите возраст')
if(userAge >= 18) {
    alert(`Добро пожаловать ${userName}`)
} else {
    alert(`Простите ${userName} доступ закрыт!`)
}


// Задание 4

let blockConfirm = confirm('Хотите ввести название блока?')
if (blockConfirm) {
    let blockYes = prompt('Введите название блока') 
    if (blockYes) {
        let elementConfirm = confirm('Хотите ввести название элемента?')
        if (elementConfirm) {
            let elementYes = prompt('Введите название элемента')
            let modConfirm = confirm('Хотите ввести название модификатора?')
            if (modConfirm) {
                let modYes = prompt('Введите название модификатора')
                alert(blockYes+"_"+elementYes+"-"+modYes)
            }
            else {
                alert(blockYes+"_"+elementYes)
            }
        } else  {
            alert(blockYes);
        }        
    }
    else {
        alert ('Обязательно введите название блока')
    }
} 
else {
    confirm ('Элементу не присвоен класс')
}



//Задание 5 

let numberOne = prompt('Введите первое число')
let numberTwo = prompt('Введите второе число')
let numbersOperation = prompt('Выбирите нужню операцию: div, plus, mult, minus')
let div = (numberOne / numberTwo)
let plus = (+numberOne + +numberTwo)
let mult = (numberOne * numberTwo)
let minus = (numberOne - numberTwo)
if (numbersOperation === "div") {
    alert("Ваш результат: " + div)
}
else if (numbersOperation === "plus") {
    alert("Ваш результат: " + plus)
}
else if (numbersOperation === "mult") {
    alert("Ваш результат: " + mult)
}
else if (numbersOperation === "minus") {
    alert("Ваш результат: " + minus)
}
