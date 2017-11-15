'use strict';

class Question {


  static All(){
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

Question._All = []
