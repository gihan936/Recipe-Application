$(document).ready(function() {
    // Quiz data array with questions
    const quizData = [
        // Question and options with correct answer
        { question: "What is the main ingredient in guacamole?", options: ["Tomatoes", "Avocados", "Potatoes", "Bananas"], answer: "Avocados" },
        { question: "Which country is famous for sushi?", options: ["China", "Thailand", "Japan", "Vietnam"], answer: "Japan" },
        { question: "What is the process of slowly cooking meat in liquid called?", options: ["Frying", "Braising", "Baking", "Grilling"], answer: "Braising" },
        { question: "Which of these is a type of Italian pasta?", options: ["Baguette", "Focaccia", "Rigatoni", "Croissant"], answer: "Rigatoni" },
        { question: "What spice gives curry its yellow color?", options: ["Cumin", "Paprika", "Turmeric", "Saffron"], answer: "Turmeric" },
        { question: "What is a common ingredient in pesto sauce?", options: ["Basil", "Thyme", "Rosemary", "Cilantro"], answer: "Basil" },
        { question: "Which fruit is used to make guacamole?", options: ["Tomato", "Avocado", "Apple", "Pear"], answer: "Avocado" },
        { question: "What type of bread is used in a BLT sandwich?", options: ["Sourdough", "Ciabatta", "Whole Wheat", "White"], answer: "White" },
        { question: "Which vegetable is often used in a traditional ratatouille?", options: ["Carrot", "Zucchini", "Beet", "Cabbage"], answer: "Zucchini" },
        { question: "What is the main protein in a traditional fish and chips meal?", options: ["Cod", "Salmon", "Tuna", "Trout"], answer: "Cod" }
    ];

    let currentQuestion = 0; // Tracks the current question index
    let score = 0; // Tracks the user's score
    let shuffledData = []; // Array to hold shuffled questions

    // Function to shuffle an array
    function shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    // Function to load and display the current question
    function loadQuestion() {
        const questionData = shuffledData[currentQuestion];
        $('#question-container').html(`
            <div class="question">${questionData.question}</div>
            <ul class="options">
                ${questionData.options.map((option, index) => `
                    <li>
                        <input type="radio" name="option" id="option${index}" value="${option}">
                        <label for="option${index}">${option}</label>
                    </li>
                `).join('')}
            </ul>
        `).hide().slideDown(500); // Slide effect for displaying question
    }

    // Function to check the selected answer and update score
    function checkAnswer() {
        const selectedOption = $('input[name="option"]:checked').val();
        if (!selectedOption) {
            alert("Please select an answer!"); // Alert if no option is selected
            return;
        }
        if (selectedOption === shuffledData[currentQuestion].answer) {
            score++; 
        }
        currentQuestion++; 
        if (currentQuestion < shuffledData.length) {
            loadQuestion(); 
        } else {
            displayResult(); // Display result if quiz is finished
        }
    }

    // Function to display the final result and score
    function displayResult() {
        $('#question-container').hide(); 
        $('#next-button').hide(); 
        $('#result-container').show(); 
        $('#score').text(score); 
    }

    // Function to reset quiz for retry
    function resetQuiz() {
        currentQuestion = 0; 
        score = 0; 
        $('#result-container').hide(); 
        $('#question-container').show(); 
        $('#next-button').show(); 
        shuffledData = [...quizData]; 
        shuffle(shuffledData);
        loadQuestion(); 
        
        // Reset rating stars
        $('#stars .star').removeClass('filled');
        $('#rating-message').text(''); 
    }

    // Event listener for the 'Next' button
    $('#next-button').on('click', checkAnswer);
    // Event listener for the 'Retry' button
    $('#retry-button').on('click', resetQuiz);

    // Initial setup: shuffle questions and load the first question
    shuffledData = [...quizData];
    shuffle(shuffledData);
    loadQuestion();

    // Rating functionality: handle star rating
    $('#stars .star').on('click', function() {
        const rating = $(this).data('value');
        $('#stars .star').each(function() {
            $(this).toggleClass('filled', $(this).data('value') <= rating); 
        });
        $('#rating-message').text(`You rated this quiz ${rating} star(s)!`);
    });
});
