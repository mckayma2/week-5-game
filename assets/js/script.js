// A $( document ).ready() block.
$( document ).ready(function() {
    console.log( "ready!" );


// main variables
//==================================================
var sortedAnswers = [];
var str;
var ans = false;
var correctAnswer;
var i;
var cleartimeouts = false;
var scr=10;
var timer;
var nextTimer;
var interval;
var resume;
var correctAnswers=0;
var incorrectAnswers=0;
var correctgif = "<img src='assets/img/right3.gif' alt='thumbsup' height='85' width='85'>";
// Objects
//===================================================
var trivia = {
 questions: ["The llama is a domesticated camelid that is native to which continent?",
	     "What is the common term for bovine spongiform encephalopathy, a disease that causes degeneration of the brain and spinal cord in cattle?",
	     "A panda's daily diet consists almost entirely of what plant?",
	     "What was the name of the gorilla that was shot and killed at the Cincinnati zoo in 2016 after a three-year old boy fell into the enclosure?",
             "What is the largest species of terrestrial crab in the world?",
	      "What is the name for a male bee that comes from an unfertilized egg?",
	      "Cynophobia is the fear of what kind of animal?",
	 	"The term wake, kettle, or committee refers to a group of what bird?",
	       "Which of the traditional five senses are dolphins believed not to possess?", 
	       "A flamboyance is a group of what animal?",
	       "The Chihuahua is a breed of dog believed to originate from what country?",
		"What is a group of whales called?",
		"What is the proper term for a group of parrots?",
		"What animal has the largest ears?",
		"What is the national animal of Scotland?",
		"In the United States, where can alligators and crocodiles be found together in the wild?",
		"What is the most popular breed of dog in the United States?",
		"What is a group of lions called?",
		"The longest snake ever held in captivity belongs to what species?"
		
		
            ],
answers: ["South America",
	  "Mad cow disease",
	  "Bamboo",
	  "Harambe",
          "The coconut crab (Birgus latro)",
	  "Drone",
	  "Dogs",
	   "Vulture",
	   "Smell",	
	   "Flamingos",
	   "Mexico",
	   "A pod",
	   "Pandemonium",
	   "African elephant",
	   "Unicorn",
	   "South Florida",
	    "Labrador Retriever",
	    "A pride",
	    "Reticulated python"
	],
	wronganswers: ["Egypt",
	  "Cornfed",
	  "Wild plums",
	  "King Kong",
      "The great blue crab",
	  "Worker",
	  "Spiders",
	   "Parrot",
	   "Touch",	
	   "Peacock",
	   "Australia",
	   "A herd",
	   "Flock",
	   "Tasmanian elephant",
	   "Leprechaun",
	   "South Africa",
	    "Poodle",
	    "Herd",
	    "King cobra"
	],
	wronganswers1: ["New Zealand",
	  "Hoof and mouth disease",
	  "Straw",
	  "Bubbles",
          "King crab",
	  "Bumble bee",
	  "Bats",
	   "Dove",
	   "hearing",	
	   "Ducks",
	   "India",
	   "A Gathering",
	   "Parrot Casting",
	   "Asian elephant",
	   "Wee Deer",
	   "Australia",
	    "Pit Bull",
	    "A brude",
	    "Leptotyphlops carlae"
	]


};

//Button Click
//==================================================

	
	
//loops
//==================================================


//functions
//==================================================



function triviaGame(i){
	
	sortedAnswers=[];
	$(question).html(trivia.questions[i]);
	sortedAnswers.push(trivia.answers[i], trivia.wronganswers[i], trivia.wronganswers1[i]);
	sortedAnswers.sort();
	$("#answers1").html(sortedAnswers[0]);
	$("#answers2").html(sortedAnswers[1]);
	$("#answers3").html(sortedAnswers[2]);
	correctAnswer = trivia.answers[i];
	
}

function clicked(){
 	i=0;
	console.log(cleartimeouts);
	triviaGame(i);
	str = "";
	$( "#a" ).click(function() {
	pause();
	
	ans = true;
        str = $( "#answers1" ).text();
	//cleartimeouts = true;
	if (str === correctAnswer){correctAnswers+=1; i++;triviaGame(i);finalscore();thumbsUp(correctgif); }
	else{incorrectAnswers+=1; i++;triviaGame(i);finalscore();}
	console.log(cleartimeouts);
	console.log(str);
	interval = setInterval(timer, 1000);
	scr=10;
	});

	
	str = "";
	ans = true;
	$( "#b" ).click(function() {
	pause();
	str = $( "#answers2" ).text();
	//  cleartimeouts = true;
	if (str === correctAnswer){correctAnswers+=1; i++;triviaGame(i);finalscore();thumbsUp(correctgif);}
	else{incorrectAnswers+=1; i++; triviaGame(i); finalscore();}
	console.log(str);
	interval = setInterval(timer, 1000);
	scr=10;

	});
	
	str = "";
	ans = true;
	$( "#c" ).click(function() {
	pause();
	str = $( "#answers3" ).text();
	// cleartimeouts = true;
	if (str === correctAnswer){correctAnswers+=1; i++;triviaGame(i); finalscore();thumbsUp(correctgif);}
	else{incorrectAnswers+=1; i++ ;triviaGame(i) ;finalscore();}
	console.log(str);
	interval = setInterval(timer, 1000);
	scr=10;
	
	});
	
	function thumbsUp(pic){
		$("#thumbsup").css("display", "block");
		$("#thumbsup").html(pic);
		function thumbsuphide(){
			$("#thumbsup").css("display", "none");
		} setTimeout(thumbsuphide, 1500);

	}
	function pause(){
			clearInterval(interval);
			console.log("paused");
			}
	
	function Resume(){
			if(i<=18){
			interval = setInterval(timer, 1000);
			console.log("resume");
			$("#scoreCard").css("display","none");
			i++; triviaGame(i);finalscore();
			$(".table").css("display","inline-table");
			}else{pause();}
			} resume = setTimeout(Resume, 6000);
			
	
	function timer(){
		if(scr>=0){
		clearInterval(resume);
		console.log(scr);
		$("#timer").html("Time Remaining: 0:" + scr)
		scr--;
		}
		if(i<=18){
			if(scr ===0){
			console.log(correctAnswer);
			$("#scoreCard").css("display","block");
			$(".table").css("display","none");
			$("#scoreCard").html("<h6>the correct answer is :</h6><h4>" + correctAnswer +"</h4>");
		
			pause();
			scr=10;	
			resume = setTimeout(Resume, 6000);
			//$("#scoreCard").css("display", "none");	
		
			
			}
		}else{
			$("#scoreCard").css("display","block");
			$(".table").css("display","none");
			$("#scoreCard").html("<h4>GAME OVER<br> High Score: " + correctAnswers + "<br>Incorrectly Guessed:  " + incorrectAnswers + " </h4><br> <button type='button' class='btn btn-primary' id='restart'>Try Again</button>");
		    $( "#restart" ).click(function() {
		    	
		    	location.reload();

			  
			});
		     }
	}interval = setInterval(timer, 1000);
function finalscore(){
		
		if (i === 19){
		pause();
		
		cleartimeouts = true;
		$("#scoreCard").css("display","block");
		$("#scoreCard").html("<h2>Total correct answers:" + correctAnswers + "<br> Total incorrect answers: " + incorrectAnswers + " </h2>");
			if (correctAnswers >10){
		$("body").css("background", "url('http://www.animatedimages.org/data/media/563/animated-balloon-image-0002.gif')");
					}	
			}
		
			
		
	} 
	} 
	

//DOM
//================================================

clicked();

});

//