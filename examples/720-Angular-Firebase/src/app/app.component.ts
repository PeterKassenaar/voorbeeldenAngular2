import {Component, OnInit} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  cities$: Observable<any>;

  constructor(private db: AngularFirestore) {
  }

  ngOnInit() {
    this.cities$ = this.db.collection('cities').valueChanges();
  }
}

