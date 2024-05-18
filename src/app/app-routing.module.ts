import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  { path: 'login', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) },
  { path: 'achat', loadChildren: () => import('./achat/achat.module').then(m => m.AchatModule) },
  { path: 'income', loadChildren: () => import('./incomes/incomes.module').then(m => m.IncomesModule) }];
// ng g m incomes (création d'un module nommé incomes) --route income (génération d'un routage qui charge le module ['income'])  --module app.module

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
