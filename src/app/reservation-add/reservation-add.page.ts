import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Reservation } from '../reservation';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-reservation-add',
  templateUrl: './reservation-add.page.html',
  styleUrls: ['./reservation-add.page.scss'],
})
export class ReservationAddPage {

  private reservationsCollection: AngularFirestoreCollection<Reservation>;
  reservations: Observable<Reservation[]>;
  date = new Date();
  utc: string = new Date(this.date.getTime() - (this.date.getTimezoneOffset() * 60000)).toJSON().slice(0,10).replace(/-/g,'-');
  reservationForm = this.fb.group({
    name: ['', Validators.required],
    size: ['', Validators.required],
    dateTime: ['', Validators.required],
    tableNumber: ['', Validators.required]
  });

  constructor(private fb: FormBuilder, private afs: AngularFirestore, private toastController: ToastController) {
    this.reservationsCollection = afs.collection<Reservation>('reservations');
   }

   async presentGoodToast() {
    const toast = await this.toastController.create({
      color: 'success',
      message: 'The reservation was sucessfully created!',
      duration: 2000
    });
    toast.present();
  }

  async presentBadToast() {
    const toast = await this.toastController.create({
      color: 'danger',
      message: 'There was an error while trying to create the reservation!',
      duration: 2000
    });
    toast.present();
  }

  onSubmit(){

    let formattedDateTime: Array<string> = this.reservationForm.value.dateTime.split("T", 2);
    formattedDateTime[1] = formattedDateTime[1].slice(0,-13);
    
    
    const reservationToAdd: Reservation = {
      name: this.reservationForm.value.name,
      size: <number>this.reservationForm.value.size,
      date: formattedDateTime[0],
      time: formattedDateTime[1],
      tableNumber: <number>this.reservationForm.value.tableNumber,
      status: 'r'
    };

    this.reservationsCollection.doc(reservationToAdd.name).set({
      size: reservationToAdd.size,
      date: reservationToAdd.date,
      time: reservationToAdd.time,
      tableNumber: reservationToAdd.tableNumber,
      status: reservationToAdd.status
    })
    .then( () => {
      this.presentGoodToast();
    })
    .catch( () => {
      this.presentBadToast();
    });
    console.log(this.date, this.utc);
  }
}
