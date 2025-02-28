import { Component, OnInit } from '@angular/core';
import { ComparsaService } from 'src/app/services/comparsa.service';

@Component({
  selector: 'app-comparsa-list',
  templateUrl: './comparsa-list.component.html',
  styleUrls: ['./comparsa-list.component.css']
})
export class ComparsaListComponent implements OnInit{
  comparsas:any[]=[];
  nuevoNombre:string = '';
  nuevaPoblacion:string = '';
  nuevosComponentes:number = 0
  constructor(private servicioComparsa:ComparsaService){}

  ngOnInit() {
    this.comparsas = this.servicioComparsa.obtenerComparsas();
  }

  anadirComparsa(){
    if(this.nuevoNombre.trim() && this.nuevaPoblacion.trim())
    this.servicioComparsa.anadirComparsas(this.nuevoNombre,this.nuevaPoblacion,this.nuevosComponentes);
  }
  borrarComparsa(id:number){
    this.servicioComparsa.eliminarComparsa(id);
    this.comparsas = this.servicioComparsa.obtenerComparsas();
  }
  actualizarComparsa(id:number){
    const comparsa = this.comparsas.find(buscar => buscar.id ===id);
    if(comparsa){
       const nuevoNombre = prompt("Introduce nuevo nombre",comparsa.nombre);
       const nuevaPoblacion = prompt("Introduce nueva poblacion",comparsa.poblacion);
       const nuevosComponentes = (Number(prompt("Introduce nuevos componentes",comparsa.numeroComponentes)));
      
      if(nuevoNombre !=null && nuevaPoblacion != null && nuevosComponentes !=null){
        this.servicioComparsa.actualizarComparsa(id,nuevoNombre,nuevaPoblacion,nuevosComponentes);
      }
    }
  }
}




