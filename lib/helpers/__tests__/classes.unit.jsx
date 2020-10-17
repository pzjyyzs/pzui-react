import classes from '../classes'
import { scopeClassMaker } from '../classes';
describe('classes', () => {
    it('接受一个className', () => {
        const result  = classes('a')
        expect(result).toEqual('a')
    })
});

describe('scopeClassMaker', () => {
    it('接受字符串或对象', () => {
        const sc = scopeClassMaker('pzui-layout');
        expect(sc('')).toEqual('pzui-layout')
        expect(sc('x')).toEqual('pzui-layout-x')
        expect(sc({y: true, z:false})).toEqual('pzui-layout-y')
        expect(sc({y: true, z:true})).toEqual('pzui-layout-y pzui-layout-z')
        expect(sc({y: true, z:true}, { extra:'red'})).toEqual('pzui-layout-y pzui-layout-z red')
    })
})