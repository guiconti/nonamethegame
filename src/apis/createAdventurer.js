export default function(payload) {
  console.log(payload);
  return new Promise(resolve => {
    setTimeout(() => resolve(), 2000);
  });
}
