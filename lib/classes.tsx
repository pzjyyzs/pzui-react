interface Option {
    extra: string | undefined;
}
interface ClassToggles {
    [K: string]: boolean;

}
export function scopeClassMaker(prefix: string) {
    return function (name?:string | ClassToggles, option?: Option) {
        let nameAll;
        let result;
        if (typeof name === 'string' || name === undefined) {
            nameAll = name;
            result = [prefix, nameAll].filter(Boolean).join('-');
        } else {
            nameAll = Object.entries(name).filter(kv => kv[1]).map(kv => kv[0]);
            result = nameAll.map(n => {
                return [prefix, n].filter(Boolean).join('-');
            }).join(' ')
        }
        
        if (option && option.extra) {
            return [ result, option && option.extra].filter(Boolean).join(' ');
        } else {
            return result;
        }
    }
}