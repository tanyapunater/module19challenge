import Quiz from '../../client/src/components/Quiz';

describe("Quiz Component", () => {
    beforeEach(() => {
        cy.intercept({
            method: "GET",
            url: 'api/random'
        },
        {
            fixture: 'questions.json',
            statusCode: 200
        }
        ).as('getRandomQuestion');
       }); 

    it('should start the quiz and display the first question', () => {
        cy.mount(<Quiz />);
        cy.get('button').contains('Start Quiz').click();
        cy.get('.card').should('be.visible');
        cy.get('h2').should('not.be.empty');
    });

    it('should answer questions then complete the quiz', () => {
        cy.mount(<Quiz />);
        cy.get('button').contains('Start Quiz').click();
        cy.get('button').contains('1').click();
        cy.get('button').contains('1').click();
        cy.get('button').contains('1').click();
        cy.get('button').contains('1').click();
        cy.get('button').contains('1').click();
        cy.get('button').contains('1').click();
        cy.get('button').contains('1').click();
        cy.get('button').contains('1').click();
        cy.get('button').contains('1').click();
        cy.get('button').contains('1').click();
        cy.get('.alert-success').should('be.visible').and('contain', 'Your score');

    });
    it('should restart the quiz when the quiz is completed', () => {
        cy.mount(<Quiz />);
        cy.get('button').contains('Start Quiz').click();
        cy.get('button').contains('1').click();
        cy.get('button').contains('1').click();
        cy.get('button').contains('1').click();
        cy.get('button').contains('1').click();
        cy.get('button').contains('1').click();
        cy.get('button').contains('1').click();
        cy.get('button').contains('1').click();
        cy.get('button').contains('1').click();
        cy.get('button').contains('1').click();
        cy.get('button').contains('1').click();
        cy.get('button').contains('Take New Quiz').click();

        cy.get('.card').should('be.visible');
        cy.get('h2').should('not.be.empty');
    });
});