import { Component, Input, OnInit } from '@angular/core';
import { Egreso } from './egreso.model';
import { EgresoService } from './egreso.service';

@Component({
	selector: 'app-egreso',
	templateUrl: './egreso.component.html',
	styleUrls: ['./egreso.component.css']
})
export class EgresoComponent implements OnInit {

	egresos: Egreso[] = [];
	@Input() ingresoTotal: number;

	constructor(private egresoService: EgresoService) { }

	ngOnInit(): void {
		this.egresos = this.egresoService.egresos;
	}

	deleteRegister(egreso: Egreso): void {
		this.egresoService.delete(egreso);
	}

	calculatePercentage(egreso: Egreso): number {
		return egreso.value / this.ingresoTotal;
	}

}
