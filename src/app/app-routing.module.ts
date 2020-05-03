import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
	{
		path: 'allergies',
    	loadChildren: () => import('./pages/allergies/allergies.module').then(m => m.AllergiesModule)
	},
	{
		path: 'vaccines',
    	loadChildren: () => import('./pages/vaccines/vaccines.module').then(m => m.VaccinesModule)
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
