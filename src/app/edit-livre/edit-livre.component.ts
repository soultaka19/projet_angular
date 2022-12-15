import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-livre',
  templateUrl: './edit-livre.component.html',
  styleUrls: ['./edit-livre.component.css']
})
export class EditLivreComponent implements OnInit {

  les_livres:{id_livre:number,titre:string,prix:number,image_url:string}[] = []


  id: number = 0
  constructor(private a_route: ActivatedRoute,private http:HttpClient) {
    a_route.params.subscribe((params: any) => {
      this.id = params["id_livre"]
    })
  }

  ngOnInit(): void {
    this.lister()
  }
  

  lister(){
    this.http.get("http://localhost/mon_projet/editLivre.php?id="+this.id )
    .subscribe((reponse:any)=>{
    console.log("Réponse du backend= ",reponse)
    this.les_livres = reponse
    
    })
  }
  modifier(){
    this.http.post("http://localhost/mon_projet/updateLivre.php",this.les_livres[0])
    .subscribe((reponse:any)=>{
      console.log("response dun =",reponse)
    })

  }

}
