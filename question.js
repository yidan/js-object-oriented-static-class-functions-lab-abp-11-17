'use strict';

class Question {


  static All(){
    return Question._All
  }

  save(){
   Question._All.push(this)
  }

  




}

Question._All = []
