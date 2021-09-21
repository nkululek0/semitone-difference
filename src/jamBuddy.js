class JamBuddy {
    constructor() {
        this.noteSelection = [
            "A", ["A#", "Bb"],
            "B",
            "C", ["C#", "Db"],
            "D", ["D#", "Eb"],
            "E",
            "F", ["F#", "Gb"],
            "G", ["G#", "Ab"],
        ];
        this.returnNote = [];
    }
    selectNotes() {
        let firstNote = this.noteSelection[Math.round(Math.random() * 11)];
        let secondNote = this.noteSelection[Math.round(Math.random() * 11)];
        if (Array.isArray(firstNote) == true) {
            this.returnNote.push(firstNote[Math.round(Math.random() * 1)]);
        } else {
            this.returnNote.push(firstNote);
        }
        if (Array.isArray(secondNote) == true) {
            this.returnNote.push(secondNote[Math.round(Math.random() * 1)]);
        } else {
            this.returnNote.push(secondNote);
        }
        return this.returnNote;
    }
    checkAnswer(num) {
        let indexNum0 = this.noteSelection.indexOf(this.returnNote[0]) + 1;
        let indexNum1 = this.noteSelection.indexOf(this.returnNote[1]) + 1;
        let answer;
        let doubleSemiTone = [
            [2, this.noteSelection[1]],
            [5, this.noteSelection[4]],
            [7, this.noteSelection[6]],
            [10, this.noteSelection[9]],
            [12, this.noteSelection[11]],
        ];

        for(let i of doubleSemiTone) {
            if(i[1][0] == this.returnNote[0] || i[1][1] == this.returnNote[0]) {
                indexNum0 = i[0];
            }
            if(i[1][0] == this.returnNote[1] || i[1][0] == this.returnNote[1]) {
                indexNum1 = i[0];   
            }
        }

        if(indexNum0 > indexNum1) {
            answer = (this.noteSelection.length - indexNum0) + indexNum1;
        } else {
            answer = indexNum1 - indexNum0;
        }

        return answer == num ? true : false;
    }
}

module.exports = JamBuddy;