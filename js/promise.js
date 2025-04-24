export default function fetchPromise() {
    return new Promise((resolve, reject) => {
        setTimeout(() => { resolve("HELLO FROM PROMISE"); }, 1000);
    });
}