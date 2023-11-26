const firebaseConfig = {
    apiKey: "AIzaSyAV-7566WJMoq5zjo88uDqYqjsPRIRmL0I",
    authDomain: "quiz-app-8ff7a.firebaseapp.com",
    databaseURL: "https://quiz-app-8ff7a-default-rtdb.firebaseio.com",
    projectId: "quiz-app-8ff7a",
    storageBucket: "quiz-app-8ff7a.appspot.com",
    messagingSenderId: "36213510643",
    appId: "1:36213510643:web:523a569daa0c3756bf8286"
  };
  
  // Initialize Firebase
  const app = firebase.initializeApp(firebaseConfig);
//   console.log(app.database);

var questions = [
    {
        question : "01: Who is the father of HTML?",
        option1 : "Rasmus Lerdorf" ,
        option2 : "Tim Berners-Lee" ,
        option3 : "Brendan Eich" ,
        correctAns : "Tim Berners-Lee"
    },
    {
        question : "2: Which is used to create Web Pages ?",
        option1 : "Java" ,
        option2 : "HTML" ,
        option3 : "JVM" ,
        correctAns : "HTML"
    },
    {
        question : "03: What do you understand by HTML?",
        option1 : " HTML describes the structure of a webpage" ,
        option2 : " HTML is the standard markup language mainly used to create web pages" ,
        option3 : "All of the above" ,
        correctAns : "HTML is the standard markup language mainly used to create web pages"
    },
    {
        question : "04: HTML is a set of markup ___.",
        option1 : "tags" ,
        option2 : "sets" ,
        option3 : "attributes" ,
        correctAns : "tags"
    },
  
    {
        question : "05: What does HTML stand for?",
        option1 : "Hyper Text Markup Language" ,
        option2 : "Hyperlinks and Text Markup Language" ,
        option3 : "Home Tool Markup Langauge" ,
        correctAns : "Hyper Text Markup Language"
     
     },
     
     {
        question : "06: What is the correct HTML element for inserting a line break?",
        option1 : "< br >" ,
        option2 : "< lb >" ,
        option3 : "< break >" ,
        correctAns : "< br >"
    },
    {
        question : "07: HTML program is saved using ___ extension.",
        option1 : ".htmn" ,
        option2 : ".html" ,
        option3 : ".htnl" ,
        correctAns : ".html"
    },
    {
        question : "08: Choose the correct HTML element for the largest heading:",
        option1 : "< heading >" ,
        option2 : "< h1 >" ,
        option3 : "< h6 >" ,
        correctAns : "< h1 >"
    },
    {
        question : "09: What is the correct HTML for adding a background color? ",
        option1 : "< body style = 'background-color:yellow'; >" ,
        option2 : "< body bg = 'yellow >" ,
        option3 : "< background >yellow" ,
        correctAns : "< body style = 'background-color:yellow'; >"
    },
    {
        question : "10: Which is used to read an HTML page and render it?",
        option1 : " Web network" ,
        option2 : "Web matrix" ,
        option3 :  "Web browser" ,
        correctAns : "Web browser"
    }]
    
    var question = document.getElementById("questions");
    var option1 = document.getElementById("opt1");
    var option2 = document.getElementById("opt2");
    var option3 = document.getElementById("opt3");
    var button = document.getElementById("button");
    var homebutton = document.getElementById("homebtn");
    var timercount = document.getElementById("time");
    let index = 0;
    let score = 0;
    var sec = 50;
    
    
    
    function nextQuestion()
    {  
      var getOption = document.getElementsByName("options");
    
      for(var i = 0 ; i<getOption.length; i++){
        if(getOption[i].checked){
            var selectedValue = getOption[i].value;
    
    
            var selectedQuestion = questions[index-1]["question"];
    
    
            var selectedAns = questions[index-1][`option${selectedValue}`]
    

            var correctAnswer = questions[index-1]["correctAns"];
    
            
            if(selectedAns === correctAnswer){
                score++
            }
        }
        getOption[i].checked = false
    
    }
    
    
       button.disabled = true
       homebutton.disabled = true
    
      if(index > questions.length-1){
        let percentage = (score / questions.length) * 100;
        if (percentage >= 80) {
            Swal.fire(
                'Great job!',
                `Your percentage is ${percentage.toFixed(2)}`,
                'success'
            );
        } else if (percentage >= 70) {
            Swal.fire(
                'Well done!',
                `Your percentage is ${percentage.toFixed(2)}`,
                'success'
            );
        } else if(percentage >= 60) {
            Swal.fire(
                'Better!',
                `Your percentage is ${percentage.toFixed(2)}`,
                'success'
            );
        } else if(percentage >=50){
            Swal.fire(
                'You can do better than this!',
                `Your percentage is ${percentage.toFixed(2)}`,
                'success'
            );
        } else{
            Swal.fire({
                icon: 'error',
                title: 'Sorry! You are Failed',
                text:  `Your percentage is ${percentage.toFixed(2)}`,
              });
              
        }
        homebutton.disabled = false;
        
    }  else{
        question.innerHTML = questions[index].question;
        option1.innerHTML = questions[index].option1;
        option2.innerHTML = questions[index].option2;
        option3.innerHTML = questions[index].option3;
        index++
    }

    var quizObj = {
        selectedQuestion: selectedQuestion,
        selectedAns: selectedAns,
        CorrectAns: correctAnswer
    }
    // console.log(quizObj);
    
    firebase.database().ref('HTML-Quiz').push(quizObj)
       }
    

    
    function clicked()
    {
        button.disabled = false
    }



    