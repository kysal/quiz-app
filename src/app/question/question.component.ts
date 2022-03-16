import {Component, Input, OnInit} from '@angular/core';

export class Question {
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

  @Input() currentQuestion: Question = new Question("null", [], "null");
  disabled: boolean = false;

  ngOnInit() {
  }

  answer(box: string) {
    this.disabled = true;
    if (this.currentQuestion.answer == box) {
      console.log("Correct!")
    } else {
      console.log("Incorrect!")
    }
    console.log("Box " + box + " pressed");
  }


}
