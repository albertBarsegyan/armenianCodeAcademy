/* merge method recursive version */
function merge(obj, ...objects) {
  // throw errors
  if (typeof obj !== 'object') {
    throw new TypeError(`${obj} type is not object`);
  }
  if (objects) {
    objects.forEach((object) => {
      if (typeof object !== 'object') {
        throw new TypeError(`${object} type is not object`);
      }
    });
  }
  if (objects.length === 1) {
    return Object.assign(obj, ...objects[0]);
  }
  const [firstObject, ...rest] = objects;
  const restObject = Object.assign(obj, firstObject);
  return merge(restObject, rest);
}
console.log(
  merge({ jake: 'po' }, { name: 20, val: { kok: 100 } }, { kyle: 15 })
);
