function Question(question, answer, correct, price) {
    this.question = question;
    this.answer = answer;
    this.correct = correct;
    this.price = price;
}

let question1 = new Question('Какое растение существует на самом деле?',
    ['Лох чилийский', 'Лох индийский', 'Лох греческий', 'Лох русский'], 2, 25000);
let question2 = new Question('Какой город объявлен официальной родиной русского Деда Мороза?',
    ['Малая Вишера', 'Великий Устюг', 'Вышний Волочек', 'Нижний Новгород'], 2, 100000);
let question3 = new Question('Кого нет среди смешариков?',
    ['Барана', 'Свиньи', 'Коня', 'Лося'], 3, 125000);
let question4 = new Question('Как называется ближайшая к Земле звезда?',
    ['Проксиома Центавра', 'Полярная', 'Сириус', 'Солнце'], 4, 250000);
let question5 = new Question('Что помогает запомнить мнемоническое правило «Это я знаю и помню прекрасно»?',
    ['Число Пи', 'Ряд активности металлов', 'Цвета радуги', 'Порядок падежей'], 1, 500000);

let questions = [question1, question2, question3, question4, question5];
let money = 0;
let i = 0; // счетчик вопросов

function start(){
    let win = document.getElementById('field');
    win.innerHTML = `<h2 id="gameH2">0 ₽</h2>
    <h1 id="gameH1">Вопрос</h1>
    <button class="gameButton" id="1" onclick="check(1)">1</button>
    <button class="gameButton" id="2" onclick="check(2)">2</button>
    <button class="gameButton" id="3" onclick="check(3)">3</button>
    <button class="gameButton" id="4" onclick="check(4)">4</button>`;
    text();
}

function text() {
    document.querySelector('h1').innerText = `${i + 1}. ${questions[i].question}`;
    for (let j = 0; j < questions[i].answer.length; j++) {
        document.getElementById(`${j + 1}`).innerText = `${j + 1}. ${questions[i].answer[j]}`;
    }
}

function check(a) {
    if (a === questions[i].correct) {
        money += questions[i].price;
        document.querySelector('h2').innerText = `${money} ₽`;
        if (money === 1000000){
            win();
        }
        i++;
        text();
    } else {
        gameOwer()
    }
}

function win(){
    let win = document.getElementById('field');
    win.innerHTML = `<h2>Вы выиграли!<br>1 000 000 ₽</h2>`;
    document.querySelector('h2').style.color = '#ffdd00';
}

function gameOwer(){
    let win = document.getElementById('field');
    win.innerHTML = `<h2>GAME OWER</h2>`;
    document.querySelector('h2').style.color = '#b40000';
}