'use strict';

class Question {


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

  static find(id){
    return _ALL[id-1]
  }


}
