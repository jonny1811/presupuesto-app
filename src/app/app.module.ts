import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CabeceroComponent } from './cabecero/cabecero.component';
import { IngresoComponent } from './ingreso/ingreso.component';
import { FormularioComponent } from './formulario/formulario.component';
import { EgresoComponent } from './egreso/egreso.component';
import { IngresoService } from './ingreso/ingreso.service';
import { EgresoService } from './egreso/egreso.service';
import { FormsModule } from '@angular/forms';

@NgModule({
	declarations: [
		AppComponent,
		CabeceroComponent,
		IngresoComponent,
		FormularioComponent,
		EgresoComponent
	],
	imports: [
		BrowserModule,
		FormsModule
	],
	providers: [IngresoService, EgresoService],
	bootstrap: [AppComponent]
})
export class AppModule { }
