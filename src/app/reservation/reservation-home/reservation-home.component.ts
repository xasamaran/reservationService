import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ReservationService} from "../services/reservation.service";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-reservation-home',
  templateUrl: './reservation-home.component.html',
  styleUrls: ['./reservation-home.component.css']
})
export class ReservationHomeComponent implements OnInit {

 form: FormGroup |null = null;

  constructor(private fb: FormBuilder,
              private reservationService: ReservationService,
              private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.buildForm();
  }

  private buildForm() {
    this.form = this.fb.group({
      date: ['', Validators.required],
      time: ['', Validators.required]
      }
    )
  }

  onSubmit() {
    this.form?.value
    this.reservationService.get(this.form?.value).subscribe(value => this.snackBar.open(value as string));
  }
}
