import { Component, OnInit } from '@angular/core';
//import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireDatabase, FirebaseListObservable } from "angularfire2/database-deprecated";


@Component({
  selector: 'app-dicas-juridicas',
  templateUrl: './dicas-juridicas.component.html',
  styleUrls: ['./dicas-juridicas.component.css'],
  providers: [AngularFireDatabase]

})
export class DicasJuridicasComponent implements OnInit {

  title = 'Dicas Juridicas';
  description = 'Armazenamento dicas juridicas';

  itemValue = '';
  items: FirebaseListObservable<any[]>;

  constructor(db: AngularFireDatabase) {
    this.items = db.list('/items');
  }

  onSubmit() {
    this.items.push({ content: this.itemValue });
    this.itemValue = '';
  }
  ngOnInit() {
  }

}
