'use strict';

class Question {


  static All(){
    return _ALL
  }

  save(){
   Question._ALL.push(this)
  }

  constructor(content){
    this.content = content;
    save()
  }

  static Find(id){
    return _ALL[id-1]
  }


}

Question._All = []
