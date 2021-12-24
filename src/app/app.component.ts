import { Component } from '@angular/core';
import { PersonajesService } from './services/personajes.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  personajes:any[];
  total:number;

  paginaActual:number;
  numPaginas:number;

  constructor(private servicio:PersonajesService){
    this.personajes=[]
    this.paginaActual=1;
    this.numPaginas=0;
    this.total=0;

  }
  ngOnInit() {
    this.servicio.getAll()
    .then(obj =>{
      this.personajes=obj['results'];
      this.numPaginas=obj['info']['pages'];
      this.total=obj['info']['count']
    })     
    
  }

  async onClick(valor:boolean){

    if(valor){
      this.paginaActual++;
    }else{
      this.paginaActual--;
    }

    const respuesta= await this.servicio.getAll(this.paginaActual);
    this.personajes=respuesta['results']

  }
 
}
