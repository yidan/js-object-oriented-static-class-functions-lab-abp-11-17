'use strict';

class Question {


  static All(){
    return this._All
  }

  save(){
   this._All.push(this)
  }

  constructor(content){
    this.content = content;
    save()
  }

  static Find(id){
    return this._All[id-1]
  }




}

Question._All = []
