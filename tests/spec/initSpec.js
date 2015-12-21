// Sample Test
describe('Testing add', function() {
    var sample;

    beforeEach(function() {
        sample = new Sample();
    });

    it('Should add two numbers', function() {
        expect(sample.add(2, 3)).toBe(5);
        expect(sample.add(0.1, 0.2)).toBe(0.3);
    });
});