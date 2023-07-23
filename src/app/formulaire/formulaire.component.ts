import { Component } from '@angular/core';

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.css']
})
export class FormulaireComponent {

  // test = "hey queen";
  nom!: string;
  email!: string;

  onSubmit(): void {
    console.log(this.nom);
    console.log(this.email);
  }
}
