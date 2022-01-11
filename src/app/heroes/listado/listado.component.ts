import { Component } from '@angular/core';
// import { stringify } from 'querystring';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
  
})
export class ListadoComponent  {   
  
  heroes: string[] = ['Spiderman','Ironman','Hulk','Thor','Capitan America'];
  heroeBorrado: string = '';
  borrarHeroe(){
    //cuando el resultado de un metodo, de 2 tipos de variables distintos
    //se debe especificar dentro de la linea de codigo con la doble barrita 
    // || y el tipo especificar el tipo de dato que queremos q retorne.
    this.heroeBorrado = this.heroes.shift() || '';    
    
  }
}
