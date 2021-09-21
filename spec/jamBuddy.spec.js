const JamBuddy = require("../src/jamBuddy.js");

beforeEach(function() {
    buddy = new JamBuddy();
});

describe("this is the selectNotes method,", function() {

    it("should have an array called returnNote", function() {
        expect(Array.isArray(buddy.returnNote)).toBe(true);
    });
    it("should push two notes to the returnNote array", function() {
        buddy.selectNotes();
        expect(buddy.returnNote.length).toBe(2);
    });
});

describe("this is the checkAnswer method,", function() {

    it("should be able to detect if the amount of semitone difference is incorrect", function() {
        buddy.returnNote = ["C", "D#"];
        let incorrect = buddy.checkAnswer(2);
        expect(incorrect).toEqual(false);
    });
    it("should be able to retrun the correct amount of semitones", function() {
        buddy.returnNote = ["C", "D#"];
        let correct = buddy.checkAnswer(3);
        expect(correct).toEqual(true);
    });
    it("should circle around the note wheel and return correct semitones", function() {
        buddy.returnNote = ["D#", "C"];
        let correct = buddy.checkAnswer(9);
        expect(correct).toEqual(true);
    });
});
