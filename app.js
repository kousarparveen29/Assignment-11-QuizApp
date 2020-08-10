// Start Test Button

function startTest() {
    var b = document.getElementById("startDiv");
    b.style.display = "none";
    nextQues();
}

// Next Button Functionality

var q = 0;
var score = 0;
var wrong = 0;
var unattemp = 0;

function nextQues() {
    var btn = document.getElementById("btnDiv");
    btn.style.visibility = "visible";
    var paraQues = document.getElementById("quesPara");
    paraQues.innerHTML = ques[q].question;
    var ansOpt = document.getElementById("ansList");
    ansOpt.style.display = "block";

    ansOpt.innerHTML = "<li onclick='checkAns(this)' class='list'>" + ques[q].answer[0] + "</li>" + "<li onclick='checkAns(this)' class='list'>" + ques[q].answer[1] + "</li>" + "<li onclick='checkAns(this)' class='list'>" + ques[q].answer[2] + "</li>" + "<li onclick='checkAns(this)' class='list'>" + ques[q].answer[3] + "</li>";
    q++;
    if (ques.length == q) {
        var result = document.getElementById("btnResult");
        var nxt = document.getElementById("btnNext");
        result.style.display = "inline-block";
        nxt.style.display = "none";
    }
}

// Choose Option Functionality

var w = 0;

function checkAns(l) {
    var listOPt = document.getElementsByClassName("list");
    var r;
    for (var i = 0; i < listOPt.length; i++) {
        listOPt[i].classList.remove("chekLi");
    }
    l.classList.add("chekLi");
    // For Right Answer
    var userAns = document.querySelector("li.list.chekLi").innerHTML;
    for (var i = 0; i < ques.length; i++) {
        if (userAns == ques[i].correctAnswer) {
            score++;
            var circle = document.getElementById("circle")
            var div = document.createElement("div")
            div.style.backgroundColor = "green"
            div.style.color = "white"
            div.innerHTML = q;
            circle.appendChild(div);
        }
    }
    // For Wrong Answer
    if (userAns != ques[w].correctAnswer) {
        wrong++
        var circle = document.getElementById("circle")
        var div = document.createElement("div")
        div.style.backgroundColor = "red"
        div.style.color = "white"
        div.innerHTML = q;
        circle.appendChild(div);
    }
    w++;
}

// Show Result Functionality

function showResult() {
    var tab = document.getElementById("tabe");
    tab.style.display = "inline-block";
    var btn = document.getElementById("btnDiv");
    btn.style.display = "none";
    var paraQues = document.getElementById("quesPara");
    paraQues.style.display = "none";
    var ansOpt = document.getElementById("ansList");
    ansOpt.style.display = "none";
    var totalQues = document.getElementById("totalQues");
    totalQues.innerHTML = ques.length;
    var correctAns = document.getElementById("correctAns");
    correctAns.innerHTML = score;
    var wrongAns = document.getElementById("wrongAns");
    wrongAns.innerHTML = wrong;
    var percent = document.getElementById("percent");
    percent.innerHTML = (score / ques.length * 100) + " %";
    var circle = document.getElementById("circle");
    circle.style.display = " block";
}

// Constructor Funtion For Questions

function Question(question, answer, correctAnswer) {
    this.question = question;
    this.answer = answer;
    this.correctAnswer = correctAnswer;
}

// Create Questions

var ques = [
    new Question("Q-1) What is the abbrevation of NATO?", ["North Atlantic Treaty Organization", "North Arctic Treaty Organization", "North Atlantic Traffic Organization", "North Atlantic Treaty Office"], "North Atlantic Treaty Organization"),

    new Question("Q-2) Which one of the following is the capital city of Azerbaijan?", ["Tashkent", "Nur-Sultan", "Baku", "Dushanbe"], "Baku"),

    new Question("Q-3) Which country is called as land of thousand lakes?", ["Poland", "Finland", "Sweden", "Denmark"], "Finland"),

    new Question("Q-4) Where is the headquater of FATF?", ["New York", "Washington DC", "Geneva", "Paris"], "Paris"),

    new Question("Q-5) What is currency of Turkey?", ["Lira", "Euro", "Dirham", "Dinnar"], "Lira")
]