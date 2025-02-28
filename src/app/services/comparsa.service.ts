import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ComparsaService {
  private listaComparsas = [
    { id: 1, nombre: 'Los Mismos', poblacion: 'Guadiana', numeroComponentes: 150},
    { id: 2, nombre: 'La Kochera', poblacion: 'Puebla de la Calzada', numeroComponentes: 200},
    { id: 3, nombre: 'El Vaiven', poblacion: 'Badajoz', numeroComponentes: 250},
    { id: 4, nombre: 'Moracantana', poblacion: 'Badajoz', numeroComponentes: 190},
    { id: 5, nombre: 'Donde Vamos la Liamos', poblacion: 'Olivenza', numeroComponentes: 220},
  ];
  constructor() { }


  obtenerComparsas(){
    return this.listaComparsas;
  }
  
  anadirComparsas(nombre:string,poblacion:string,numeroComponentes:number){
    const nuevaComparsa = {id:this.listaComparsas.length + 1,nombre,poblacion,numeroComponentes }
    this.listaComparsas.push(nuevaComparsa);
  }

  eliminarComparsa(id:number){
    this.listaComparsas = this.listaComparsas.filter(eliminar => eliminar.id !== id);
  }

  actualizarComparsa(id:number, nombre:string,poblacion:string,numeroComponentes:number){
    const comparsa = this.listaComparsas.find(buscar => buscar.id ===id);
    if(comparsa){
      comparsa.nombre = nombre;
      comparsa.poblacion=poblacion;
      comparsa.numeroComponentes=numeroComponentes;
    }
  }


}
