var Nightmare = require("nightmare");
var expect = require("chai").expect;

describe("ReserveAmerica", function() {

    this.timeout(3000);
    it("should send user to home page", function(done) {
        Nightmare({ show: true })
        .goto("https://www.reserveamerica.com/welcome.do")
        .click("a[href='/unifSearch.do']")
        .evaluate(function() {
            return document.title;
        })
        .then(function(title) {
            expect(title).to.equal("Campgrounds and Camping Reservations - ReserveAmerica");
            done();
        });
    });
    it("should throw an error for fun", function() {
        throw new Error("Failed on purpose, just to make the Mocha output more interesting.");
    });
});