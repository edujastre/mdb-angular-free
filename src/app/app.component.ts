import { Component } from '@angular/core';
import * as moment from 'moment'; // add this 1 of 4

@Component({
  selector: 'mdb-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']

})

export class AppComponent {
  title = "Eduardo";
  CopyrightYear =  moment().format('YYYY');
  myCards = [{titulo:"Projeto", descricao:"Some quick example text to build on the card title and make up the bulk of the card's content."},{titulo:"Projeto", descricao:"Some quick example text to build on the card title and make up the bulk of the card's content."},{titulo:"Projeto", descricao:"Some quick example text to build on the card title and make up the bulk of the card's content."}]; 
  
   constructor(){
    //this.myYear = moment().format('YYYY');
  }
    get CopyYear() {
      return this.CopyrightYear;
    }
}
