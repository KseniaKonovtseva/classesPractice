'use strict';

class First {
  constructor (str) {
    this.str = str
  }
  hello() {
    console.log(`${this.str}`);
  }
}

class Second extends First {
  constructor (str, secondStr) {
    super (str)
    this.secondStr = secondStr
  }
  helloSecond() {
    super.hello();
    console.log(this.secondStr);
  }
}

const second = new Second('Я метод родителя', 'Я приемный');
second.helloSecond();