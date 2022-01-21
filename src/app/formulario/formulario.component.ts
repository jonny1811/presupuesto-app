import { Component, OnInit } from '@angular/core';
import { Egreso } from '../egreso/egreso.model';
import { EgresoService } from '../egreso/egreso.service';
import { Ingreso } from '../ingreso/ingreso.model';
import { IngresoService } from '../ingreso/ingreso.service';

@Component({
	selector: 'app-formulario',
	templateUrl: './formulario.component.html',
	styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

	type: string = 'ingresoOperation';
	descriptionInput: string;
	valueInput: number;

	constructor(
		private ingresoService: IngresoService,
		private egresoService: EgresoService
	) { }

	ngOnInit(): void {
	}

	operationType(event): void {
		this.type = event.target.value;
	}

	addValue(): void {
		if (this.type === 'ingresoOperation') {
			this.ingresoService.ingresos.push(new Ingreso(this.descriptionInput, this.valueInput));
		} else {
			this.egresoService.egresos.push(new Egreso(this.descriptionInput, this.valueInput));
		}
	}

}
