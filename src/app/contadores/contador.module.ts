import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";


import { ContadorComponent } from "./contador/contador.component";


@NgModule ({
    //se declaran los compónentes.
    declarations:[
        ContadorComponent
    ],
    //se declaran los componentes a ocupar
    exports: [
        ContadorComponent
    ],
    //se agregan los componentes que estan ocupando los componentes anteriores para
    //que puedan funcioonar, algo asi como los usings.
    imports: [
        CommonModule
    ]    
})

// se le coloca export para que la clase sea de tipo publica y pueda ocuparse en 
//otras clases.
export class ContadorModule {}