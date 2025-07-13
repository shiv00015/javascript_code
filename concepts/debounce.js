export function debounce(fn, time) {
    let interval
    return function (...args) {
        return new Promise((resolve) => {
            clearInterval(interval);
            interval = setTimeout(() => {
                const result = fn.apply(this, args);
                resolve(result);
            }, time);
        });
    };
}