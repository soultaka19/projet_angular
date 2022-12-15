import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  id: number = 0
  constructor(private a_route: ActivatedRoute,private http:HttpClient) {
    a_route.params.subscribe((params: any) => {
      this.id = params["id_livre"]
    })
  }
  ngOnInit(): void {
    this.supprimer()
  }

  supprimer(){
    this.http.get("http://localhost/mon_projet/deleteLivre.php?id="+this.id )
    .subscribe((reponse:any)=>{
    console.log("Réponse du backend= ",reponse)
    
    })
  }

}
