import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-livre',
  templateUrl: './add-livre.component.html',
  styleUrls: ['./add-livre.component.css']
})
export class AddLivreComponent implements OnInit {

  constructor(private http:HttpClient) { }
  new_livre:{titre:string,prix:number,image_url:string} = {
    titre:"",
    prix: 0,
    image_url:''
  }
  ngOnInit(): void {
  }
  /*
    envoyer(){
      this.http.post("http://localhost/mon_projet/add.php",this.new_livre)
      .subscribe((reponse:any)=>{
        console.log("response dun =",reponse)
      })
    }
  */
  ajouter(){
    this.http.post("http://localhost/mon_projet/addLivre.php",this.new_livre)
    .subscribe((reponse:any)=>{
      console.log("response dun =",reponse)
      this.new_livre = {    titre:"",   prix: 0,  image_url:''}
    })
  }

}
