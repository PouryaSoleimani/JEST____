export default function fetchPromise() {
    return new Promise((resolve, reject) => {
        setTimeout(() => { resolve("HELLO FROM RESOLVE"); }, 1000);
    });
}