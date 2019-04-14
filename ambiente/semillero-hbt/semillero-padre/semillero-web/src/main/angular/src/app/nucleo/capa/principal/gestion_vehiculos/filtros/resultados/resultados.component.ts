import { Component, OnInit } from '@angular/core';
import { VehiculoServicioDTO } from '../modelo/vehiculoServicioDTO';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html'
})
export class ResultadosComponent implements OnInit {
  public idLinea:number;
  public listaVehiculoDTO: VehiculoServicioDTO[]; 
  constructor() { }

  ngOnInit() {
  }


  public listarVehiculos() {
    this.listaVehiculoDTO = [];
    this.idLinea=1;
    this.vehiculosService.consultarVehiculos(this.idLinea).subscribe(
      vehiculos => {
          this.listaVehiculoDTO = vehiculos;
        },
        error => {
          console.log(error);
        } 
    ); 
    console.log('resultado servicio.... ' + this.listaVehiculoDTO)   
 }
}
