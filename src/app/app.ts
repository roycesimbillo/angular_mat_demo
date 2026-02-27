import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators, FormGroup } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSliderModule } from '@angular/material/slider';
import { MatButtonModule } from '@angular/material/button';

import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatCardModule } from '@angular/material/card';
import { MatSnackBarModule, MatSnackBar } from '@angular/material/snack-bar';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
  CommonModule,
  ReactiveFormsModule,
  MatFormFieldModule,
  MatInputModule,
  MatRadioModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatSliderModule,
  MatButtonModule,
  MatSelectModule,
  MatCheckboxModule,
  MatProgressSpinnerModule,
  MatCardModule,
  MatSnackBarModule,
  MatIconModule
],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  form!: FormGroup;   // 👈 declare first
  loading = false;

  constructor(
    private fb: FormBuilder,
    private snackBar: MatSnackBar
  ) {
    // 👇 initialize INSIDE constructor
    this.form = this.fb.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      gender: [''],
      address: [''],
      birthdate: ['', Validators.required],
      skill: [5],
      country: ['', Validators.required],
      terms: [false, Validators.requiredTrue]
    });
  }

  submit() {
    if (this.form.invalid) return;

    this.loading = true;

    setTimeout(() => {
      this.loading = false;
      this.snackBar.open('Form Submitted Successfully!', 'Close', {
        duration: 3000
      });
      this.form.reset();
    }, 2000);
  }
}