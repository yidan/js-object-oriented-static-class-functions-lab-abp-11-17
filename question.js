'use strict';

class Question {


  static All(){
    return Question._All
  }

  save(){
   Question._All.push(this)
  }

  constructor(content){
    this.content = content;
    this.save()
  }

  static Find(id){
    return Question._All[id-1]
  }




}

Question._All = []
