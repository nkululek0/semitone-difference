const uiFramework = (function() {
    const buddy = new JamBuddy();
    const outputAnswer = document.getElementsByClassName("outputAnswer")[0];
    const notesDisplay = document.getElementsByClassName("notesDisplay")[0];
    const explain = document.getElementsByClassName("explain")[0];
    const explanation = document.getElementById("explanation");
    let inputNotes = "";
    let streak = 0;

    const feedBack = {
    	correct: "You got it right. Well done",
    	incorrect: "Wrong answer! Try again",
    	streak: "Streak:",
    	wrongInput: "Invalid Input, Please enter a number"
    }

    const regexp = {
    	number: /\b\d+\b/,
    }

    window.addEventListener("load", getNotes);
    document.getElementsByClassName("generateNotes")[0].addEventListener("click", getNotes);
    document.getElementsByClassName("subAnswer")[0].addEventListener("click", checkNotes);
    document.getElementsByClassName("revealAns")[0].addEventListener("click", showAnswer);

    function getNotes() {
    	explanation.innerHTML != " " ? explanation.innerHTML = " " : explanation.innerHTML;
        buddy.returnNote.length > 0 ? buddy.returnNote = [] : buddy.returnNote;
        outputAnswer.innerHtml != " " ? outputAnswer.innerHTML = " " : outputAnswer.innerHTML;
        inputNotes = buddy.selectNotes();
        notesDisplay.value = `${inputNotes[0]} : ${inputNotes[1]}`;
    }

    function checkNotes() {
        let value = document.getElementsByClassName("inputAnswer")[0].value;

        if(!regexp.number.test(value)) {
        	alert(feedBack.wrongInput);
        }
        else if(buddy.checkAnswer(value)) {
        	streak++;
        	outputAnswer.innerHTML = `${feedBack.correct}</br> ${feedBack.streak} ${streak}`;
        	showAnswer();
        } else {
        	streak = 0;
        	outputAnswer.innerHTML = `${feedBack.incorrect}</br> ${feedBack.streak} ${streak}`;
        }
    }

    function showAnswer() {
    	explanation.innerHTML = "";
    	let allNotes = buddy.noteSelection;
    	let note1 = inputNotes[0]
    	let note2 = inputNotes[1];
    	for(let i of allNotes) {
    		let newNote = document.createElement("INPUT");
    		newNote.setAttribute("type", "text");
    		newNote.value = i;
    		if(i.includes(note1) || i.includes(note2)) {
    			newNote.classList.add("highlightNote");
    		} else {
    			newNote.classList.add("normalNote");
    		}
    		explanation.appendChild(newNote);
    	}
    	for(let i = 0; i < allNotes.length; i++) {
    		let answer = buddy.checkAnswer(i);
    		if(answer == true) {
    			let note = document.createElement("INPUT");
				note.setAttribute("type", "text");
				note.value = `Answer: ${i}`;
				note.classList.add("finalAnswer");
				explanation.appendChild(note);
    		}
    	}
    	
    }
})();