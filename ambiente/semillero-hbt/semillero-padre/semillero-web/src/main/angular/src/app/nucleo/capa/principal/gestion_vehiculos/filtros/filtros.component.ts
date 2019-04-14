import { Component, OnInit, Output } from '@angular/core';
import { ConsultaVehiculosService } from '../../../../../nucleo/servicios/consulta-vehiculos-servicio/consulta.vehiculo.service'
import { marcaDTO } from '../modelo/MarcaDTO';
import { lineaDTO } from '../modelo/LineaDTO';
@Component({
  selector: 'app-vehiculos-filtros',
  templateUrl: './filtros.component.html'
})
export class FiltrosComponent implements OnInit {
  public listaMarcasDTO: marcaDTO[]; 
	

  public listaLineasDTO: lineaDTO[]; 
  
  
  public idMarca:number;
  constructor(private vehiculosService: ConsultaVehiculosService) { }

  ngOnInit() {
    this.consultarMarcas();
    
  }
  
/**
 * 
 * Consulta el servicio que retorna las marcas
 */
  public consultarMarcas() {
    
    this.vehiculosService.consultarMarcas().subscribe(
      marcas => {
          this.listaMarcasDTO = marcas;
        },
        error => {
          console.log(error);
        } 
    );    
    console.log('resultado servicio.... ' + this.listaMarcasDTO)
 }
/**
 * 
 * Consulta el servicio que retorna las lineas por su respectiva marca
 */
 public consultarLineas() {
  
  this.vehiculosService.consultarLineas(this.idMarca).subscribe(
    lineas => {
        this.listaLineasDTO = lineas;
      },
      error => {
        console.log(error);
      } 
  );    
  console.log('resultado servicio.... ' + this.listaLineasDTO)
}

}
