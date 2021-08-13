const delay = (ms) => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(ms), ms);
  });
};

const logger = (resolve) => console.log(`Resolved after ${resolve}ms`);
// console.log(logger());
// console.log(delay());
// Вызовы функции для проверки
delay(2000).then(logger); // Resolved after 2000ms
delay(1000).then(logger); // Resolved after 1000ms
delay(1500).then(logger); // Resolved after 1500ms
