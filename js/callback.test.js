import fetchData from './callback';

test('fetchData calls the callback with the correct message', (done) => {
    function callback(data) {
        try {
            expect(data).toBe('HELLO FROM CALLBACK');
            done(); // Signal that the test is complete
        } catch (error) {
            done(error); // Fail the test if an error is thrown
        }
    }

    fetchData(callback);
});

