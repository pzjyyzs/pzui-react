interface Option {
    extra: string | undefined;
}
export function scopeClassMaker(prefix: string) {
    return function x(name?:string, option?: Option) {
        const result = [prefix, name].filter(Boolean).join('-');
        if (option && option.extra) {
            return [ result, option && option.extra].filter(Boolean).join(' ');
        } else {
            return result;
        }
    }
}