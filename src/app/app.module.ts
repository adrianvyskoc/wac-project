import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './store/AmbulanceState';
import { EffectsModule } from '@ngrx/effects';
import {StoreRouterConnectingModule} from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { AllergiesEffects } from './effects/allergies.effects';
import { VaccinesEffects } from './effects/vaccines.effects';
import { PatientsEffects } from './effects/patients.effects';

@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		BrowserAnimationsModule,

		StoreModule.forRoot(reducers, {
			metaReducers,
			runtimeChecks: {
				strictStateImmutability: true,
				strictActionImmutability: true,
			}
		}),
		StoreRouterConnectingModule.forRoot(),
		!environment.production ? StoreDevtoolsModule.instrument() : [],
		EffectsModule.forRoot([
			AllergiesEffects,
			VaccinesEffects,
			PatientsEffects
		]),
		
		MatExpansionModule,
		MatToolbarModule,
		MatButtonModule,
		MatIconModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
