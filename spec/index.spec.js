const matchers = require("jasmine-dom-custom-matchers");
const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const path = require("path");
const fs = require("fs");
const index_html = fs.readFileSync(path.join(__dirname, "../index.html"));

beforeEach(function() {
    jasmine.addMatchers(matchers);
    dom = new JSDOM(index_html, { runScripts: "dangerously", resources: "usable" }).window;
});

describe("HTML structure,", function() {

    it("should have required input elements", function() {
        let inputElements = dom.document.getElementsByTagName("INPUT");
        expect(inputElements.length).toBe(5);
    });
    it("should have an input with Get Random Notes button value", function() {
        let notesGenerator = dom.document.getElementsByTagName("INPUT")[1];
        expect(notesGenerator).toHaveAttribute("value", "Get Random Notes");
    });
    it("should have an input with Submit Answer button value", function() {
        let answerSub = dom.document.getElementsByTagName("INPUT")[3];
        expect(answerSub).toHaveAttribute("value", "Submit Answer");
    });
    it("should have an input with Reveal Answer button value", function() {
        let revealAns = dom.document.getElementsByTagName("INPUT")[4];
        expect(revealAns).toHaveAttribute("value", "Reveal Answer");
    });
    it("should have a div with the id explanation", function() {
        let allDivs = dom.document.getElementsByTagName("DIV");
        let explanation = allDivs[allDivs.length-1];
        expect(explanation).toHaveAttribute("id", "explanation");
    });
    it("should have one H3 element", function() {
        let h3 = dom.document.getElementsByTagName("H3");
        expect(h3.length).toBe(1);
    });
    it("should have no text within the H3 element", function() {
        let h3 = dom.document.getElementsByTagName("H3")[0];
        expect(h3.innerHTML).toBe("");
    });
    it("should have one H1 element", function() {
        let h1 = dom.document.getElementsByTagName("H1");
        expect(h1.length).toBe(1);
    });
    it("should have the heading Semitone Difference JamBuddy", function() {
        let h1 = dom.document.getElementsByTagName("H1")[0];
        expect(h1.innerHTML).toBe("Semitone Difference JamBuddy");
    });
});