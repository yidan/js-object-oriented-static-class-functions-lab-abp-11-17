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
    save()
  }

  




}

Question._All = []
