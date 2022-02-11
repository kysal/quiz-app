import { Component, OnInit } from '@angular/core';

class Question {
  public questionText: string;
  public guesses: string[];
  public answer: string;


  constructor(questionText: string, guesses: string[], answer: string) {
    this.questionText = questionText;
    this.guesses = guesses;
    this.answer = answer;
  }
}


@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  questions: Question[] = [
    new Question('What is 1 + 2', ['1','2','3','4'], '3'),
    new Question('What is 5 + 6', ['10','11','12','13'], '11')
  ];
  question: number = 0;

  ngOnInit() {
    this.question = 0;
  }

  answer(box: string) {
    if (this.questions[this.question].answer == box) {
      console.log("Correct!")
      this.question++;
    } else {
      console.log("Incorrect!")
    }
    console.log("Box " + box + " pressed");
  }


}
