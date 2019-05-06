import { Component } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Reservation } from '../reservation';

@Component({
  selector: 'app-reservation-list',
  templateUrl: './reservation-list.page.html',
  styleUrls: ['./reservation-list.page.scss'],
})
export class ReservationListPage {

  
  private reservationCollection: AngularFirestoreCollection<Reservation>;
  reservations: Observable<Reservation[]>;
  reservationCount: number = 0;
  headCount: number = 0;
  status: boolean = false;
  constructor(private readonly afs: AngularFirestore) {
    this.reservationCollection = afs.collection<Reservation>('reservations');
    this.reservations = this.reservationCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Reservation;
        const id = a.payload.doc.id;
        return {id, ...data};
      }))
    );
    this.reservationCollection.valueChanges().forEach(doc => {
      this.reservationCount = doc.length;
    });
    this.reservationCollection.valueChanges().forEach(doc => {
      this.headCount = 0;
      doc.map(a => a.size).forEach(num => {
        this.headCount += num;
      });
    })
  }
  

  remove(documentID: string){
   this.afs.collection('reservations').doc(documentID).delete().then(function() {
     console.log("Doucment successfully deleted!");
   }).catch(function(error) {
     console.error("Error removing doucment: ", error)
   });
  }


}
