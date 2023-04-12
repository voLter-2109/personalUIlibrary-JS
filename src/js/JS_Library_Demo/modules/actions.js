import $ from "../core";

// получение или замена соржимого
$.prototype.html = function (content) {
  for (let i = 0; i < this.length; i++) {
    if (content) {
      this[i].innerHTML = content;
    } else {
      return this[i].innerHTML;
    }
  }

  return this;
};

// выбор определенного эемента из коллекции
$.prototype.eq = function (i) {
  const swap = this[i];
  const objLength = Object.keys(this).length;

  for (let i = 0; i < objLength; i++) {
    delete this[i];
  }

  this[0] = swap;
  this.length = 1;
  return this;
};

// поиск номер элемента в родителе по одинакову тегу, например по клику
$.prototype.index = function () {
  const parent = this[0].parentNode;
  const childs = [...parent.children];

  const findMyIndex = (item) => {
    return item === this[0];
  };

  return childs.findIndex(findMyIndex);
};
// поиск всех детей или поиск по tagName
$.prototype.childNodes = function (tag = null) {
  let child = [...this[0].children];
  let counter = 0;
  let newArr = [];

  for (let i = 0; i < child.length; i++) {
    if (tag) {
      if (child[i].nodeName === tag) {
        newArr.push(child[i]);
        counter++;
      }
    } else {
      newArr.push(child[i]);
      counter++;
    }
  }

  for (let j = 0; j < counter; j++) {
    this[j] = newArr[j];
  }
  this.length = counter;

  return this;
};

//найти все элементы по селектору
$.prototype.find = function (selector) {
  let numberOfItems = 0;
  let counter = 0;

  const copyObj = Object.assign({}, this);

  for (let i = 0; i < copyObj.length; i++) {
    const arr = copyObj[i].querySelectorAll(selector);
    if (arr.length == 0) {
      continue;
    }

    for (let j = 0; j < arr.length; j++) {
      this[counter] = arr[j];
      counter++;
    }

    numberOfItems += arr.length;
  }
  this.length = numberOfItems;

  for (; numberOfItems < Object.keys(this).length; numberOfItems++) {
    delete this[numberOfItems];
  }
  return this;
};

//вывод массива из ротелей где есть данный селетор
$.prototype.closest = function (selector) {
  let counter = 0;
  let newArr = [];
  let length = 0;
  for (let i = 0; i < this.length; i++) {
    if (this[i].closest(selector)) {
      this[i] = this[i].closest(selector);
    } else {
      console.log(
        `This parent Class ${selector} is not found for used child Class`
      );
      continue;
    }
  }
  let newObj = Object.assign([], this);

  newObj.forEach((element) => {
    if (!newArr.includes(element)) {
      newArr.push(element);
      counter++;
      length++;
    }
  });

  const objLength = Object.keys(this).length;
  for (; counter < objLength; counter++) {
    delete this[counter];
  }

  for (let j = 0; j < newArr.length; j++) {
    this[j] = newArr[j];
  }

  this.length = length;

  return this;
};

// получает все элементы в родители, кроме самого себя
$.prototype.siblings = function () {
  let numberOfItems = 0;
  let counter = 0;

  const copyObj = Object.assign({}, this);

  for (let i = 0; i < copyObj.length; i++) {
    const arr = copyObj[i].parentNode.children;

    for (let j = 0; j < arr.length; j++) {
      if (copyObj[i] === arr[j]) {
        continue;
      }

      this[counter] = arr[j];
      counter++;
    }

    numberOfItems += arr.length - 1;
  }

  this.length = numberOfItems;

  const objLength = Object.keys(this).length;
  for (; numberOfItems < objLength; numberOfItems++) {
    delete this[numberOfItems];
  }

  return this;
};
