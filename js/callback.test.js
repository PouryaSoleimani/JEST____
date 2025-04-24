import fetchData from './callback';

test('fetchData calls the callback with the correct message', (done) => {
    function callback(data) {
        try {
            expect(data).toBe("HELLO FROM CALLBACK");
            done();
        } catch (error) {
            done(error);
        }
    }

    fetchData(callback);
});

