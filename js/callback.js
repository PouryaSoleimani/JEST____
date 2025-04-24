export default function fetchData(callback) {
  setTimeout(() => {
    callback("HELLO FROM CALLBACK");
  }, 1000);
}