function* idGenerator() {
  let id = 1;
  while (true) {
    yield `id_${id}`; // The function freezes right here!
    id++;
  }
}

const idStream = idGenerator();

console.log(idStream.next().value); // "id_1"
console.log(idStream.next().value); // "id_2"
console.log(idStream.next().value); // "id_3"
