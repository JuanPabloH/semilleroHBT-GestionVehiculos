package com.hbt.semillero.entidades;

import java.util.Calendar;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

/**
 * Clase que asocia los datos de una compra de vehiculo.
 * 
 *
 */
@Entity
@Table(name = "COMPRA")
public class Compra {

	@Id
	@GeneratedValue (generator = "SEQ")
	@Column(name = "ID_COMPRA")
	private Long idCompra;

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "VEHICULO")
	private Vehiculo vehiculo;

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "VENDEDOR")
	private Vendedor vendedor;

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "COMPRADOR")
	private Comprador comprador;

	@Column(name = "FECHA_COMPRA")
	private Calendar fechaCompra;

	public Vehiculo getVehiculo() {
		return vehiculo;
	}

	public void setVehiculo(Vehiculo vehiculo) {
		this.vehiculo = vehiculo;
	}

	public Vendedor getVendedor() {
		return vendedor;
	}

	public void setVendedor(Vendedor vendedor) {
		this.vendedor = vendedor;
	}

	public Comprador getComprador() {
		return comprador;
	}

	public void setComprador(Comprador comprador) {
		this.comprador = comprador;
	}

	public Calendar getFechaCompra() {
		return fechaCompra;
	}

	public void setFechaCompra(Calendar fechaCompra) {
		this.fechaCompra = fechaCompra;
	}

}
