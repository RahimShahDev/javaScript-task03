let currentQuestionIndex = 0;
let correctAnswersCount = 0;

const questions = [
    {
        id: 1,
        question: "What does HTML stand for?",
        options: [
            "a) Hyper Text Markup Language",
            "b) High Tech Markup Language",
            "c) Hyperlink Text Markup Language",
            "d) Home Tool Markup Language"
        ],
        correct: 0
    },
    {
        id: 2,
        question: "Which technology is primarily responsible for the styling of web pages?",
        options: [
            "a) JavaScript",
            "b) CSS",
            "c) HTML",
            "d) All of these"
        ],
        correct: 1
    },
    {
        id: 3,
        question: "What does CSS stand for?",
        options: [
            "a) Creative Style Sheets",
            "b) Computer Style Sheets",
            "c) Cascading Style Sheets",
            "d) Custom Style Sheets"
        ],
        correct: 2
    },
    {
        id: 4,
        question: "Which programming language is mainly used for adding interactivity to websites?",
        options: [
            "a) HTML",
            "b) JavaScript",
            "c) CSS",
            "d) All of These"
        ],
        correct: 1
    },
    {
        id: 5,
        question: "What is the purpose of a front-end web development framework like React or Angular?",
        options: [
            "a) To manage databases and server-side logic",
            "b) To create a visually appealing user interface",
            "c) To handle server-side routing",
            "d) To interact with web servers"
        ],
        correct: 1
    },
    {
        id: 6,
        question: "Which part of web development is responsible for handling data storage and retrieval?",
        options: [
            "a) Back-end development",
            "b) Front-end development",
            "c) Full-stack development",
            "d) Middleware development"
        ],
        correct: 0
    },
    {
        id: 7,
        question: "What is the primary function of a web server in the context of web development?",
        options: [
            "a) Rendering web pages on the client’s browser",
            "b) Executing JavaScript code",
            "c) Storing user data",
            "d) Handling HTTP requests and serving web pages"
        ],
        correct: 3
    },
    {
        id: 8,
        question: "Which of the following is not a back-end programming language commonly used in web development?",
        options: [
            "a) JavaScript",
            "b) PHP",
            "c) Ruby",
            "d) HTML"
        ],
        correct: 3
    },
    {
        id: 9,
        question: "Which type of web development allows for both front-end and back-end development using a single language?",
        options: [
            "a) Full-stack development",
            "b) Cross-platform development",
            "c) Multi-language development",
            "d) Hybrid development"
        ],
        correct: 0
    },
    {
        id: 10,
        question: "What is the purpose of the script tag in HTML?",
        options: [
            "a) To define the page’s structure",
            "b) To include external CSS styles",
            "c) To include external JavaScript code",
            "d) To create hyperlinks"
        ],
        correct: 2
    },
];

const questionElement = document.getElementById("question");
const choiceElements = document.querySelectorAll("input[type='radio']");
const labels = document.querySelectorAll("label");
const nextButton = document.getElementById("nextButton");
const resultElement = document.getElementById("result");

function loadQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.innerText = currentQuestion.question;
    choiceElements.forEach((element, index) => {
        element.checked = false;
        labels[index].innerText = currentQuestion.options[index];
        labels[index].style.backgroundColor = ""; 
    });
    nextButton.disabled = true; 
}

choiceElements.forEach((element, index) => {
    element.addEventListener("change", () => {
        const currentQuestion = questions[currentQuestionIndex];
        if (index === currentQuestion.correct) {
            labels[index].style.backgroundColor = "lightgreen"; 
            correctAnswersCount++;
        } else {
            labels[index].style.backgroundColor = "red";
        }
        nextButton.disabled = false; 
        // Reset other labels (if needed)
        labels.forEach((label, idx) => {
            if (idx !== index) label.style.backgroundColor = ""; // Reset non-selected
        });
    });
});

nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        loadQuestion();
    } else {
        displayResult(); 
    }
});

document.getElementById("prevButton").addEventListener("click", () => {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        loadQuestion();
    }
});
 
function displayResult() {
    questionElement.style.display = 'none';
    choiceElements.forEach(choice => choice.parentElement.style.display = 'none'); 
    nextButton.style.display = 'none'; 
    document.getElementById("prevButton").style.display = 'none'; 
    resultElement.style.display = 'block';
    resultElement.innerText = `Quiz Completed! You answered ${correctAnswersCount} out of ${questions.length} questions correctly.`;
}

// Load the first question
loadQuestion();