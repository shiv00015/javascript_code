export function memoization(fn) {
    const _cache = {};
    return function (...args) {
        const n = args[0];
        if (n in _cache) {
            return _cache[n];
        }
        _cache[n] = fn.apply(this, args);
        return _cache[n];
    }
}