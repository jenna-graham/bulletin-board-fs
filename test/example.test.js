// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { renderPosts } from '../render-utils.js';
const test = QUnit.test;

test('testing render posts function', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = `<div class="post"><h1>Found Monitor!!</h1><h2>Found LG 32 inch monitor on side of road! Free to first come first serve.</h2><p>Jenna 555-365-2267</p></div>`;
    //Act 
    // Call the function you're testing and set the result to a const
    const test = {
        id: '1',
        title: 'Found Monitor!!',
        description: 'Found LG 32 inch monitor on side of road! Free to first come first serve.',
        contact: 'Jenna 555-365-2267',
    };
    const actual = renderPosts(test);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected);
});
