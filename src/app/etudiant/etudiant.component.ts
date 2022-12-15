import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-etudiant',
  templateUrl: './etudiant.component.html',
  styleUrls: ['./etudiant.component.css']
})
export class EtudiantComponent implements OnInit {

  constructor() { }
  etudiants!: { nom: string, prenom: string, age: number, notes: number[], tel: { indicatif: string, tel: string } }

  liste_etudiants!:{ nom: string, prenom: string, age: number, notes: number[], tel: { indicatif: string, tel: string } }[]

  newEtudiant(){
    this.liste_etudiants.push(this.etudiants)
  }

  ngOnInit(): void {
  }

}
