import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-liste-livre',
  templateUrl: './liste-livre.component.html',
  styleUrls: ['./liste-livre.component.css']
})
export class ListeLivreComponent implements OnInit {

  constructor(private http:HttpClient) { }

  liste:{id_livre:number,titre:string,prix:number,image_url:string}[] = []

  backend_path = "http://localhost/mon_projet/uploads/"

  ngOnInit(): void {
    this.lister()
  }
  /*
    tester(){
      this.http.get("http://localhost/mon_projet/index.php" )
      .subscribe((reponse:any)=>{
      console.log("Réponse du backend= ",reponse)
      this.liste = reponse
      
      })
    }
  */

    lister(){
      this.http.get("http://localhost/mon_projet/listeLivre.php" )
      .subscribe((reponse:any)=>{
      console.log("Réponse du backend= ",reponse)
      this.liste = reponse
      
      })
    }
 

}
