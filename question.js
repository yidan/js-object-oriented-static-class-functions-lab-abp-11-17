'use strict';

class Question {


  static All(){
    return this._All
  }

  save(){
   Question._All.push(this)
  }

  constructor(content){
    this.content = content;
    save()
  }

  static Find(id){
    return _All[id-1]
  }




}

Question._All = []
