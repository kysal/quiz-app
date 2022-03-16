import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, FormArray, FormBuilder} from "@angular/forms";

@Component({
  selector: 'app-create-quiz-form',
  templateUrl: './create-quiz-form.component.html',
  styleUrls: ['./create-quiz-form.component.css']
})
export class CreateQuizFormComponent implements OnInit {

  quizForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.quizForm = this.fb.group({
      title: new FormControl(),
      questions: this.fb.array([])
    });
  }

  createNewQuestion(): void {
    const question = this.fb.group({
      name: new FormControl(),
      description: new FormControl(),
      answer: new FormControl(),
      marks: new FormControl(),
      addToQB: new FormControl()
    });
    this.questions.push(question);
  }

  get questions(): FormArray {
    return this.quizForm.get('questions') as FormArray;
  }





  ngOnInit(): void {

  }

  // form = new FormGroup({
  //   title: new FormControl(),
  //   questions: new FormArray([])
  // });
  //
  //
  // addQuestionField() {
  //   this.questionArr.push(new FormGroup({
  //     name: new FormControl(),
  //     description: new FormControl(),
  //     answer: new FormControl()
  //   }))
  //   console.log(this.form)
  // }
  //
  // get questionArr() {
  //   return this.form.get('questions') as FormArray;
  // }

}
