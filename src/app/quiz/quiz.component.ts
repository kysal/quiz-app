import { Component, OnInit } from '@angular/core';
import { Question } from "../question/question.component";

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
  questionIndex: number;
  questions: Question[]

  constructor() {
    this.questionIndex = 0;
    this.questions = [
      new Question('What is 1 + 2', ['1','2','3','4'], '3'),
      new Question('What is 5 + 6', ['10','11','12','13'], '11')
    ];
  }

  ngOnInit(): void {
  }

  nextQuestion() {
    this.questionIndex++;
  }



}
