import { Ingreso } from "./ingreso.model";

export class IngresoService {
	ingresos: Ingreso[] = [
		new Ingreso('Salario', 4000),
		new Ingreso('Venta de Auto', 1000)
	];

	delete(ingreso: Ingreso): void {
		const index: number = this.ingresos.indexOf(ingreso);
		this.ingresos.splice(index, 1);
	}
}
