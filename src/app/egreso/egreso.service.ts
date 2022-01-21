import { Egreso } from "./egreso.model";

export class EgresoService {
	egresos: Egreso[] = [
		new Egreso('Alquiler de Dpto', 1800),
		new Egreso('Ropas', 450)
	];

	delete(egreso: Egreso): void {
		const index: number = this.egresos.indexOf(egreso);
		this.egresos.splice(index, 1);
	}
}
