function $(selector) {
  return new init(selector);
}

function init(selector) {
  if (!selector) {
    return this;
  }

  if (selector.tagName) {
    this[0] = selector;
    this.length = 1;
    return this;
  }

  const elements = document.querySelectorAll(selector);
  const len = elements.length;
  // const len = { length: elements.length };
  Object.assign(this, elements);
  this.length = len;
  return this;
}

init.prototype = Object.create($.prototype);

export default $;
