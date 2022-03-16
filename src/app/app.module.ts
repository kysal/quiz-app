import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuestionComponent } from './question/question.component';
import { QuizComponent } from './quiz/quiz.component';
import {MatButtonModule} from "@angular/material/button";
import { CreateQuizFormComponent } from './create-quiz-form/create-quiz-form.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {ReactiveFormsModule} from "@angular/forms";
import {MatListModule} from "@angular/material/list";
import {MatCardModule} from "@angular/material/card";
import {MatCheckboxModule} from "@angular/material/checkbox";
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';
import { DashboardContentComponent } from './dashboard-content/dashboard-content.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import {HttpClientModule} from "@angular/common/http";


@NgModule({
  declarations: [
    AppComponent,
    QuestionComponent,
    QuizComponent,
    CreateQuizFormComponent,
    LoginPageComponent,
    LoginFormComponent,
    SignupFormComponent,
    DashboardPageComponent,
    DashboardContentComponent,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        MatButtonModule,
        MatFormFieldModule,
        MatInputModule,
        ReactiveFormsModule,
        MatListModule,
        MatCardModule,
        MatCheckboxModule,
        MatToolbarModule,
        HttpClientModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
