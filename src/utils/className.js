export const className = (options) => {
  const classList = [];
  if (Object(options) === options) {
    Object.keys(options).forEach(key => {
      if (!!options[key]) {
        classList.push(key);
      }
    });
  }

  return classList.join(' ');
}