(function(){
  
    function buildQuiz(){
     
      const output = [];
  
      
      myQuestions.forEach(
        (currentQuestion, questionNumber) => {
  
          const answers = [];
  
          for(letter in currentQuestion.answers){
  
       
            answers.push(
              `<label>
                <input type="radio" name="question${questionNumber}" value="${letter}">
                ${letter} :
                ${currentQuestion.answers[letter]}
              </label>`
            );
          }
  
         
          output.push(
            `<div class="slide">
              <div class="question"> ${currentQuestion.question} </div>
              <div class="answers"> ${answers.join("")} </div>
            </div>`
          );
        }
      );
  
     
      quizContainer.innerHTML = output.join('');
    }
  
    function showResults(){
  
     
      const answerContainers = quizContainer.querySelectorAll('.answers');
  
 
      let numCorrect = 0;
  
  
      myQuestions.forEach( (currentQuestion, questionNumber) => {
  
     
        const answerContainer = answerContainers[questionNumber];
        const selector = `input[name=question${questionNumber}]:checked`;
        const userAnswer = (answerContainer.querySelector(selector) || {}).value;
  
    
        if(userAnswer === currentQuestion.correctAnswer){
          numCorrect++;
  
        
          answerContainers[questionNumber].style.color = 'lightgreen';
        }
        else{
          answerContainers[questionNumber].style.color = 'red';
        }
      });
  
     


         var crownValue = 0;
         if (numCorrect == 5) {
           crownValue = 'Gold';
         } else if (numCorrect >=3 && numCorrect < 5){
          crownValue = 'Silver';
         } else if (numCorrect >= 1 && numCorrect <3){
           crownValue= 'Bronze'
         }

      resultsContainer.innerHTML  =  '<h2> Congratualtions  ' +myName+  ' you got '  +  numCorrect  + ' answers correct and therefore got a   ' +  crownValue  +   ' crown.</h2>';
    }

    function showSlide(n) {
      slides[currentSlide].classList.remove('active-slide');
      slides[n].classList.add('active-slide');
      currentSlide = n;
      if(currentSlide === 0){
        previousButton.style.display = 'none';
      }
      else{
        previousButton.style.display = 'inline-block';
      }
      if(currentSlide === slides.length-1){
        nextButton.style.display = 'none';
        submitButton.style.display = 'inline-block';
      }
      else{
        nextButton.style.display = 'inline-block';
        submitButton.style.display = 'none';
      }
    }
  
    function showNextSlide() {
      showSlide(currentSlide + 1);
    }
  
    function showPreviousSlide() {
      showSlide(currentSlide - 1);
    }
  
   
    const quizContainer = document.getElementById('quiz');
    const resultsContainer = document.getElementById('results');
    const submitButton = document.getElementById('submit');
    const myQuestions = [
      {
        question: "What is 2+2x2?",
        answers: {
          a: "6",
          b: "8",
          c: "10"
        },
        correctAnswer: "a"
      },
      {
        question: "How many minutes are in a day?",
        answers: {
          a: "1660",
          b: "1550",
          c: "1440"
        },
        correctAnswer: "c"
      },
      {
        question: "How many oceans do we have around the world?",
        answers: {
          a: "6",
          b: "4",
          c: "3",
          d: "5"
        },
        correctAnswer: "d"
      },
      {
        question: "What is the Capital of France",
        answers: {
          a: "Pairs",
          b: "Lyon",
          c: "Berlin"
        },
        correctAnswer: "a"
      },
      {
     question: "How many minutes are in a football match?",
     answers: {
          a: "100",
          b: "90",
          c: "70"
        },
        correctAnswer: "b"
      },
    ];
    
    buildQuiz();
    const previousButton = document.getElementById("previous");
    const nextButton = document.getElementById("next");
    const slides = document.querySelectorAll(".slide");
    let currentSlide = 0;
  
  
    showSlide(currentSlide);
    submitButton.addEventListener('click', showResults);
    previousButton.addEventListener("click", showPreviousSlide);
    nextButton.addEventListener("click", showNextSlide);




    var myName = window.prompt("What is you're Username?")
    myName.toLowerCase();
    
    while(myName.length < 6){
      alert("Username must be 6 or more letters long.")
      myName = prompt("Please enter your username. It must be 6 characters or more");
     }
    
     document.write("Welcome ", myName.toLowerCase(), ".");




  })();
  