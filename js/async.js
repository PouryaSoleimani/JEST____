

export default async function myAsyncFunction() {
    return await new Promise((resolve, reject) => {
        setTimeout(() => resolve('Promise resolved'), 1000);
    });
}