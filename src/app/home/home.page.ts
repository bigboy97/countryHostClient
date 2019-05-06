import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormControl } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import { PopoverController, ToastController } from '@ionic/angular';
import { Observable, BehaviorSubject, combineLatest } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { Reservation } from '../reservation';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  
  
  date = new Date();
  utc: string = new Date(this.date.getTime() - (this.date.getTimezoneOffset() * 60000)).toJSON().slice(0,10).replace(/-/g,'-');
  display: boolean = false;
  id: string = '';

  modifyForm = this.fb.group({
    name: new FormControl({value: '', disabled: true}, Validators.required),
    size: ['', Validators.required],
    dateTime: ['', Validators.required],
    tableNumber: ['', Validators.required]
  });


  tabelOneReservations$: Observable<Reservation[]>;
  tabelTwoReservations$: Observable<Reservation[]>;
  tabelThreeReservations$: Observable<Reservation[]>;
  tabelFourReservations$: Observable<Reservation[]>;
  tabelFiveReservations$: Observable<Reservation[]>;
  tabelSixReservations$: Observable<Reservation[]>;
  tabelSevenReservations$: Observable<Reservation[]>;
  
  tabelTwentyReservations$: Observable<Reservation[]>;
  tabelTwentyOneReservations$: Observable<Reservation[]>;
  tabelTwentyTwoReservations$: Observable<Reservation[]>;
  tabelTwentyThreeReservations$: Observable<Reservation[]>;
  tabelTwentyFourReservations$: Observable<Reservation[]>;
  tabelTwentyFiveReservations$: Observable<Reservation[]>;
  tabelTwentySixReservations$: Observable<Reservation[]>;
  tabelTwentySevenReservations$: Observable<Reservation[]>;

  tabelThirtyOneReservations$: Observable<Reservation[]>;
  tabelThirtyTwoReservations$: Observable<Reservation[]>;
  tabelThirtyThreeReservations$: Observable<Reservation[]>;
  tabelThirtyFourReservations$: Observable<Reservation[]>;
  tabelThirtyFiveReservations$: Observable<Reservation[]>;
  tabelThirtySixReservations$: Observable<Reservation[]>;
  tabelThirtySevenReservations$: Observable<Reservation[]>;

  tableOneFilter$: BehaviorSubject<number|null>;
  tabelTwoFilter$: BehaviorSubject<number|null>;
  tabelThreeFilter$: BehaviorSubject<number|null>;
  tabelFourFilter$: BehaviorSubject<number|null>;
  tabelFiveFilter$: BehaviorSubject<number|null>;
  tabelSixFilter$: BehaviorSubject<number|null>;
  tabelSevenFilter$: BehaviorSubject<number|null>;
  
  tabelTwentyFilter$: BehaviorSubject<number|null>;
  tabelTwentyOneFilter$: BehaviorSubject<number|null>;
  tabelTwentyTwoFilter$: BehaviorSubject<number|null>;
  tabelTwentyThreeFilter$: BehaviorSubject<number|null>;
  tabelTwentyFourFilter$: BehaviorSubject<number|null>;
  tabelTwentyFiveFilter$: BehaviorSubject<number|null>;
  tabelTwentySixFilter$: BehaviorSubject<number|null>;
  tabelTwentySevenFilter$: BehaviorSubject<number|null>;

  tabelThirtyOneFilter$: BehaviorSubject<number|null>;
  tabelThirtyTwoFilter$: BehaviorSubject<number|null>;
  tabelThirtyThreeFilter$: BehaviorSubject<number|null>;
  tabelThirtyFourFilter$: BehaviorSubject<number|null>;
  tabelThirtyFiveFilter$: BehaviorSubject<number|null>;
  tabelThirtySixFilter$: BehaviorSubject<number|null>;
  tabelThirtySevenFilter$: BehaviorSubject<number|null>;

  constructor(public popoverControler: PopoverController, private readonly afs: AngularFirestore, private fb: FormBuilder, public toastController: ToastController) {
    this.tableOneFilter$ = new BehaviorSubject(null);
    this.tabelOneReservations$ = combineLatest(
      this.tableOneFilter$
    ).pipe(
      switchMap(([tableNumber]) =>
        afs.collection<Reservation>('reservations', ref => {
          let query : firebase.firestore.CollectionReference | firebase.firestore.Query = ref;
          if (tableNumber) { query = query.where('tableNumber', '==', tableNumber).where('date', '==', this.utc.toString()) };
          return query;
        }).snapshotChanges().pipe(
        map(actions => {
          return actions.map(a => {
            const data = a.payload.doc.data() as Reservation;
            const id = a.payload.doc.id;
            return {id, ...data};
          })
        })
      )
    ));
    this.tabelTwoFilter$ = new BehaviorSubject(null);
    this.tabelTwoReservations$ = combineLatest(
      this.tabelTwoFilter$
    ).pipe(
      switchMap(([tableNumber]) =>
        afs.collection<Reservation>('reservations', ref => {
          let query : firebase.firestore.CollectionReference | firebase.firestore.Query = ref;
          if (tableNumber) { query = query.where('tableNumber', '==', tableNumber).where('date', '==', this.utc.toString()) };
          return query;
        }).snapshotChanges().pipe(
        map(actions => {
          return actions.map(a => {
            const data = a.payload.doc.data() as Reservation;
            const id = a.payload.doc.id;
            return {id, ...data};
          })
        })
      )
    ));
    this.tabelThreeFilter$ = new BehaviorSubject(null);
    this.tabelThreeReservations$ = combineLatest(
      this.tabelThreeFilter$
    ).pipe(
      switchMap(([tableNumber]) =>
        afs.collection<Reservation>('reservations', ref => {
          let query : firebase.firestore.CollectionReference | firebase.firestore.Query = ref;
          if (tableNumber) { query = query.where('tableNumber', '==', tableNumber).where('date', '==', this.utc.toString()) };
          return query;
        }).snapshotChanges().pipe(
        map(actions => {
          return actions.map(a => {
            const data = a.payload.doc.data() as Reservation;
            const id = a.payload.doc.id;
            return {id, ...data};
          })
        })
      )
    ));
    this.tabelFourFilter$ = new BehaviorSubject(null);
    this.tabelFourReservations$ = combineLatest(
      this.tabelFourFilter$
    ).pipe(
      switchMap(([tableNumber]) =>
        afs.collection<Reservation>('reservations', ref => {
          let query : firebase.firestore.CollectionReference | firebase.firestore.Query = ref;
          if (tableNumber) { query = query.where('tableNumber', '==', tableNumber).where('date', '==', this.utc.toString()) };
          return query;
        }).snapshotChanges().pipe(
        map(actions => {
          return actions.map(a => {
            const data = a.payload.doc.data() as Reservation;
            const id = a.payload.doc.id;
            return {id, ...data};
          })
        })
      )
    ));
    this.tabelFiveFilter$ = new BehaviorSubject(null);
    this.tabelFiveReservations$ = combineLatest(
      this.tabelFiveFilter$
    ).pipe(
      switchMap(([tableNumber]) =>
        afs.collection<Reservation>('reservations', ref => {
          let query : firebase.firestore.CollectionReference | firebase.firestore.Query = ref;
          if (tableNumber) { query = query.where('tableNumber', '==', tableNumber).where('date', '==', this.utc.toString()) };
          return query;
        }).snapshotChanges().pipe(
        map(actions => {
          return actions.map(a => {
            const data = a.payload.doc.data() as Reservation;
            const id = a.payload.doc.id;
            return {id, ...data};
          })
        })
      )
    ));
    this.tabelSixFilter$ = new BehaviorSubject(null);
    this.tabelSixReservations$ = combineLatest(
      this.tabelSixFilter$
    ).pipe(
      switchMap(([tableNumber]) =>
        afs.collection<Reservation>('reservations', ref => {
          let query : firebase.firestore.CollectionReference | firebase.firestore.Query = ref;
          if (tableNumber) { query = query.where('tableNumber', '==', tableNumber).where('date', '==', this.utc.toString()) };
          return query;
        }).snapshotChanges().pipe(
        map(actions => {
          return actions.map(a => {
            const data = a.payload.doc.data() as Reservation;
            const id = a.payload.doc.id;
            return {id, ...data};
          })
        })
      )
    ));
    this.tabelSevenFilter$ = new BehaviorSubject(null);
    this.tabelSevenReservations$ = combineLatest(
      this.tabelSevenFilter$
    ).pipe(
      switchMap(([tableNumber]) =>
        afs.collection<Reservation>('reservations', ref => {
          let query : firebase.firestore.CollectionReference | firebase.firestore.Query = ref;
          if (tableNumber) { query = query.where('tableNumber', '==', tableNumber).where('date', '==', this.utc.toString()) };
          return query;
        }).snapshotChanges().pipe(
        map(actions => {
          return actions.map(a => {
            const data = a.payload.doc.data() as Reservation;
            const id = a.payload.doc.id;
            return {id, ...data};
          })
        })
      )
    ));




    this.tabelTwentyFilter$ = new BehaviorSubject(null);
    this.tabelTwentyReservations$ = combineLatest(
      this.tabelTwentyFilter$
    ).pipe(
      switchMap(([tableNumber]) =>
        afs.collection<Reservation>('reservations', ref => {
          let query : firebase.firestore.CollectionReference | firebase.firestore.Query = ref;
          if (tableNumber) { query = query.where('tableNumber', '==', tableNumber).where('date', '==', this.utc.toString()) };
          return query;
        }).snapshotChanges().pipe(
        map(actions => {
          return actions.map(a => {
            const data = a.payload.doc.data() as Reservation;
            const id = a.payload.doc.id;
            return {id, ...data};
          })
        })
      )
    ));this.tabelTwentyOneFilter$ = new BehaviorSubject(null);
    this.tabelTwentyOneReservations$ = combineLatest(
      this.tabelTwentyOneFilter$
    ).pipe(
      switchMap(([tableNumber]) =>
        afs.collection<Reservation>('reservations', ref => {
          let query : firebase.firestore.CollectionReference | firebase.firestore.Query = ref;
          if (tableNumber) { query = query.where('tableNumber', '==', tableNumber).where('date', '==', this.utc.toString()) };
          return query;
        }).snapshotChanges().pipe(
        map(actions => {
          return actions.map(a => {
            const data = a.payload.doc.data() as Reservation;
            const id = a.payload.doc.id;
            return {id, ...data};
          })
        })
      )
    ));
    this.tabelTwentyTwoFilter$ = new BehaviorSubject(null);
    this.tabelTwentyTwoReservations$ = combineLatest(
      this.tabelTwentyTwoFilter$
    ).pipe(
      switchMap(([tableNumber]) =>
        afs.collection<Reservation>('reservations', ref => {
          let query : firebase.firestore.CollectionReference | firebase.firestore.Query = ref;
          if (tableNumber) { query = query.where('tableNumber', '==', tableNumber).where('date', '==', this.utc.toString()) };
          return query;
        }).snapshotChanges().pipe(
        map(actions => {
          return actions.map(a => {
            const data = a.payload.doc.data() as Reservation;
            const id = a.payload.doc.id;
            return {id, ...data};
          })
        })
      )
    ));
    this.tabelTwentyThreeFilter$ = new BehaviorSubject(null);
    this.tabelTwentyThreeReservations$ = combineLatest(
      this.tabelTwentyThreeFilter$
    ).pipe(
      switchMap(([tableNumber]) =>
        afs.collection<Reservation>('reservations', ref => {
          let query : firebase.firestore.CollectionReference | firebase.firestore.Query = ref;
          if (tableNumber) { query = query.where('tableNumber', '==', tableNumber).where('date', '==', this.utc.toString()) };
          return query;
        }).snapshotChanges().pipe(
        map(actions => {
          return actions.map(a => {
            const data = a.payload.doc.data() as Reservation;
            const id = a.payload.doc.id;
            return {id, ...data};
          })
        })
      )
    ));
    this.tabelTwentyFourFilter$ = new BehaviorSubject(null);
    this.tabelTwentyFourReservations$ = combineLatest(
      this.tabelTwentyFourFilter$
    ).pipe(
      switchMap(([tableNumber]) =>
        afs.collection<Reservation>('reservations', ref => {
          let query : firebase.firestore.CollectionReference | firebase.firestore.Query = ref;
          if (tableNumber) { query = query.where('tableNumber', '==', tableNumber).where('date', '==', this.utc.toString()) };
          return query;
        }).snapshotChanges().pipe(
        map(actions => {
          return actions.map(a => {
            const data = a.payload.doc.data() as Reservation;
            const id = a.payload.doc.id;
            return {id, ...data};
          })
        })
      )
    ));
    this.tabelTwentyFiveFilter$ = new BehaviorSubject(null);
    this.tabelTwentyFiveReservations$ = combineLatest(
      this.tabelTwentyFiveFilter$
    ).pipe(
      switchMap(([tableNumber]) =>
        afs.collection<Reservation>('reservations', ref => {
          let query : firebase.firestore.CollectionReference | firebase.firestore.Query = ref;
          if (tableNumber) { query = query.where('tableNumber', '==', tableNumber).where('date', '==', this.utc.toString()) };
          return query;
        }).snapshotChanges().pipe(
        map(actions => {
          return actions.map(a => {
            const data = a.payload.doc.data() as Reservation;
            const id = a.payload.doc.id;
            return {id, ...data};
          })
        })
      )
    ));
    this.tabelTwentySixFilter$ = new BehaviorSubject(null);
    this.tabelTwentySixReservations$ = combineLatest(
      this.tabelTwentySixFilter$
    ).pipe(
      switchMap(([tableNumber]) =>
        afs.collection<Reservation>('reservations', ref => {
          let query : firebase.firestore.CollectionReference | firebase.firestore.Query = ref;
          if (tableNumber) { query = query.where('tableNumber', '==', tableNumber).where('date', '==', this.utc.toString()) };
          return query;
        }).snapshotChanges().pipe(
        map(actions => {
          return actions.map(a => {
            const data = a.payload.doc.data() as Reservation;
            const id = a.payload.doc.id;
            return {id, ...data};
          })
        })
      )
    ));
    this.tabelTwentySevenFilter$ = new BehaviorSubject(null);
    this.tabelTwentySevenReservations$ = combineLatest(
      this.tabelTwentySevenFilter$
    ).pipe(
      switchMap(([tableNumber]) =>
        afs.collection<Reservation>('reservations', ref => {
          let query : firebase.firestore.CollectionReference | firebase.firestore.Query = ref;
          if (tableNumber) { query = query.where('tableNumber', '==', tableNumber).where('date', '==', this.utc.toString()) };
          return query;
        }).snapshotChanges().pipe(
        map(actions => {
          return actions.map(a => {
            const data = a.payload.doc.data() as Reservation;
            const id = a.payload.doc.id;
            return {id, ...data};
          })
        })
      )
    ));


    
    this.tabelThirtyOneFilter$ = new BehaviorSubject(null);
    this.tabelThirtyOneReservations$ = combineLatest(
      this.tabelThirtyOneFilter$
    ).pipe(
      switchMap(([tableNumber]) =>
        afs.collection<Reservation>('reservations', ref => {
          let query : firebase.firestore.CollectionReference | firebase.firestore.Query = ref;
          if (tableNumber) { query = query.where('tableNumber', '==', tableNumber).where('date', '==', this.utc.toString()) };
          return query;
        }).snapshotChanges().pipe(
        map(actions => {
          return actions.map(a => {
            const data = a.payload.doc.data() as Reservation;
            const id = a.payload.doc.id;
            return {id, ...data};
          })
        })
      )
    ));
    this.tabelThirtyTwoFilter$ = new BehaviorSubject(null);
    this.tabelThirtyTwoReservations$ = combineLatest(
      this.tabelThirtyTwoFilter$
    ).pipe(
      switchMap(([tableNumber]) =>
        afs.collection<Reservation>('reservations', ref => {
          let query : firebase.firestore.CollectionReference | firebase.firestore.Query = ref;
          if (tableNumber) { query = query.where('tableNumber', '==', tableNumber).where('date', '==', this.utc.toString()) };
          return query;
        }).snapshotChanges().pipe(
        map(actions => {
          return actions.map(a => {
            const data = a.payload.doc.data() as Reservation;
            const id = a.payload.doc.id;
            return {id, ...data};
          })
        })
      )
    ));
    this.tabelThirtyThreeFilter$ = new BehaviorSubject(null);
    this.tabelThirtyThreeReservations$ = combineLatest(
      this.tabelThirtyThreeFilter$
    ).pipe(
      switchMap(([tableNumber]) =>
        afs.collection<Reservation>('reservations', ref => {
          let query : firebase.firestore.CollectionReference | firebase.firestore.Query = ref;
          if (tableNumber) { query = query.where('tableNumber', '==', tableNumber).where('date', '==', this.utc.toString()) };
          return query;
        }).snapshotChanges().pipe(
        map(actions => {
          return actions.map(a => {
            const data = a.payload.doc.data() as Reservation;
            const id = a.payload.doc.id;
            return {id, ...data};
          })
        })
      )
    ));
    this.tabelThirtyFourFilter$ = new BehaviorSubject(null);
    this.tabelThirtyFourReservations$ = combineLatest(
      this.tabelThirtyFourFilter$
    ).pipe(
      switchMap(([tableNumber]) =>
        afs.collection<Reservation>('reservations', ref => {
          let query : firebase.firestore.CollectionReference | firebase.firestore.Query = ref;
          if (tableNumber) { query = query.where('tableNumber', '==', tableNumber).where('date', '==', this.utc.toString()) };
          return query;
        }).snapshotChanges().pipe(
        map(actions => {
          return actions.map(a => {
            const data = a.payload.doc.data() as Reservation;
            const id = a.payload.doc.id;
            return {id, ...data};
          })
        })
      )
    ));
    this.tabelThirtyFiveFilter$ = new BehaviorSubject(null);
    this.tabelThirtyFiveReservations$ = combineLatest(
      this.tabelThirtyFiveFilter$
    ).pipe(
      switchMap(([tableNumber]) =>
        afs.collection<Reservation>('reservations', ref => {
          let query : firebase.firestore.CollectionReference | firebase.firestore.Query = ref;
          if (tableNumber) { query = query.where('tableNumber', '==', tableNumber).where('date', '==', this.utc.toString()) };
          return query;
        }).snapshotChanges().pipe(
        map(actions => {
          return actions.map(a => {
            const data = a.payload.doc.data() as Reservation;
            const id = a.payload.doc.id;
            return {id, ...data};
          })
        })
      )
    ));
    this.tabelThirtySixFilter$ = new BehaviorSubject(null);
    this.tabelThirtySixReservations$ = combineLatest(
      this.tabelThirtySixFilter$
    ).pipe(
      switchMap(([tableNumber]) =>
        afs.collection<Reservation>('reservations', ref => {
          let query : firebase.firestore.CollectionReference | firebase.firestore.Query = ref;
          if (tableNumber) { query = query.where('tableNumber', '==', tableNumber).where('date', '==', this.utc.toString()) };
          return query;
        }).snapshotChanges().pipe(
        map(actions => {
          return actions.map(a => {
            const data = a.payload.doc.data() as Reservation;
            const id = a.payload.doc.id;
            return {id, ...data};
          })
        })
      )
    ));
    this.tabelThirtySevenFilter$ = new BehaviorSubject(null);
    this.tabelThirtySevenReservations$ = combineLatest(
      this.tabelThirtySevenFilter$
    ).pipe(
      switchMap(([tableNumber]) =>
        afs.collection<Reservation>('reservations', ref => {
          let query : firebase.firestore.CollectionReference | firebase.firestore.Query = ref;
          if (tableNumber) { query = query.where('tableNumber', '==', tableNumber).where('date', '==', this.utc.toString()) };
          return query;
        }).snapshotChanges().pipe(
        map(actions => {
          return actions.map(a => {
            const data = a.payload.doc.data() as Reservation;
            const id = a.payload.doc.id;
            return {id, ...data};
          })
        })
      )
    ));
  }

  
  ngOnInit() {

    console.log(this.utc);

    this.tableOneFilter$.next(1);
    this.tabelTwoFilter$.next(2);
    this.tabelThreeFilter$.next(3);
    this.tabelFourFilter$.next(4);
    this.tabelFiveFilter$.next(5);
    this.tabelSixFilter$.next(6);
    this.tabelSevenFilter$.next(7);

    this.tabelTwentyFilter$.next(20);
    this.tabelTwentyOneFilter$.next(21)
    this.tabelTwentyTwoFilter$.next(22);
    this.tabelTwentyThreeFilter$.next(23);
    this.tabelTwentyFourFilter$.next(24);
    this.tabelTwentyFiveFilter$.next(25);
    this.tabelTwentySixFilter$.next(26);
    this.tabelTwentySevenFilter$.next(27);

    this.tabelThirtyOneFilter$.next(31);
    this.tabelThirtyTwoFilter$.next(32);
    this.tabelThirtyThreeFilter$.next(33);
    this.tabelThirtyFourFilter$.next(34);
    this.tabelThirtyFiveFilter$.next(35);
    this.tabelThirtySixFilter$.next(36);
    this.tabelThirtySevenFilter$.next(37);
  }

  remove(documentID: string) : void{
    this.afs.collection('reservations').doc(documentID).delete()
    .then(function() {
      console.log("Doucment successfully deleted!");
    }).catch(function(error) {
      console.error("Error removing doucment: ", error)
    });
  }

  seat(documentID: string) : void{
    this.afs.collection('reservations').doc(documentID).update({
      status: 's'
    })
    .then(function(){
      console.log("The document was successfully updated!");
    })
    .catch(function(error){
      console.error("Error updating document: ", error);
    });
  }

  async presentGoodUpdateToast() {
    const toast = await this.toastController.create({
      color: 'success',
      message: 'The changes to the reservation was made sucessfully!',
      duration: 2000
    });
    toast.present();
  }

  async presentBadUpdateToast() {
    const toast = await this.toastController.create({
      color: 'danger',
      message: 'There was a problem in updating the reservation!',
      duration: 2000
    });
    toast.present();
  }

  showForm(disp : boolean): void{
    this.display = disp;
    console.log(this.modifyForm);
  }

  formDisplayStatus(): boolean{
    return this.display;
  }

  setID(id: string): void{
    this.id = id;
  }

  getStoredID(): string{
    return this.id;
  }
  clearValues(): void{
    this.modifyForm.setValue({
      name: '',
      size: '',
      dateTime: '',
      tableNumber: '',
    });
    this.modifyForm.markAsUntouched();
  }

  onSubmit(): void{
    let formattedDateTime: Array<string> = this.modifyForm.value.dateTime.split("T", 2);
    formattedDateTime[1] = formattedDateTime[1].slice(0,-13);

    const reservationToAdd: Reservation = {
      name: this.id,
      size: <number>this.modifyForm.value.size,
      date: formattedDateTime[0],
      time: formattedDateTime[1],
      tableNumber: <number>this.modifyForm.value.tableNumber,
      status: 'r'
    };

    this.afs.collection('reservations').doc(this.id).update({
      size: reservationToAdd.size,
      date: reservationToAdd.date,
      time: reservationToAdd.time,
      tableNumber: reservationToAdd.tableNumber,
      status: reservationToAdd.status
    })
    .then( () => {
      this.presentGoodUpdateToast();
    })
    .catch( () => {
      this.presentBadUpdateToast();
    });

    this.showForm(false);
  }
}
