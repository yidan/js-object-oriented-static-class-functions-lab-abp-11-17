'use strict';

class Question{
  let _ALL = []

  static all(){
    return _ALL
  }

  save(){
   _ALL.push(this)
  }

  constructor(content){
    this.content = content;
    save()
  }
}
