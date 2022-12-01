import { Component, OnInit } from '@angular/core';
import {GamesService} from '../../services/games.service';
import {ActivatedRoute} from '@angular/router'
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalhe.component.html',
  styleUrls: ['./detalhe.component.css']
})
export class DetalleComponent implements OnInit {


juegos:any;




  constructor(private _sg:GamesService,private _route:ActivatedRoute) {
    this._route.params.subscribe((resp:any)=>{
      this._sg.detalleJuego(resp.id).subscribe((resp:any)=>{
        console.log(resp);
        this.juegos=resp;
      });
    });
   }

  ngOnInit() {
    this._sg.obtenerJuegos().subscribe((resp:any)=>{
      this.juegos=resp.results;
    });


}

drop(e:CdkDragDrop<any>){
  moveItemInArray(this.juegos,e.previousIndex,e.currentIndex);
 }


  }









