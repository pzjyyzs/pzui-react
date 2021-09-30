
export default function classes(...names: (string | undefined)[]) {
    return names.filter(Boolean).join(' ');
}

interface Option {
    extra: string | undefined;
}
interface ClassToggles {
    [K: string]: boolean;

}
export function scopeClassMaker(prefix: string) {
    return function (name:string | ClassToggles, option?: Option) {

        const namesObject = name instanceof Object ? name : { [name]: name };
        return  Object
            .entries(namesObject)
            .filter(kv => kv[1] !== false)
            .map(kv => kv[0])
            .map(name => [prefix, name]
                .filter(Boolean)
                .join('-')
            )
            .concat(option && option.extra || [])
            .join(' ');
    }
}