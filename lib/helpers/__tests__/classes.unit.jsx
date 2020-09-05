import classes from '../classes'
describe('classes', () => {
    it('接受一个className', () => {
        const result  = classes('a')
        expect(result).toEqual('a')
    })
});
