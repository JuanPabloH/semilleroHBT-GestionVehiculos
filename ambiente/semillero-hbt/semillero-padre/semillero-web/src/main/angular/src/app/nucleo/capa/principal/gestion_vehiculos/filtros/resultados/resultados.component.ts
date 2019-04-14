import { Component, OnInit, Input } from '@angular/core';
import { VehiculoServicioDTO } from '../../modelo/vehiculoServicioDTO';
import { ConsultaVehiculosService } from '../../../../../../nucleo/servicios/consulta-vehiculos-servicio/consulta.vehiculo.service'
@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html'
})
export class ResultadosComponent implements OnInit {
  @Input() public idLinea:string;
  public listaVehiculoDTO: VehiculoServicioDTO[]; 
  constructor(private vehiculosService: ConsultaVehiculosService) { }

  ngOnInit() {
  }


  public listarVehiculos() {
    this.listaVehiculoDTO = [];
    
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
