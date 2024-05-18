import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { HeaderComponent } from "../header/header.component";
import { IncomesRoutingModule } from './incomes-routing.module';
import { IncomesComponent } from './incomes.component';
import { ListIncomesComponent } from './list-incomes/list-incomes.component';


@NgModule({
    declarations: [
        IncomesComponent,
        ListIncomesComponent
    ],
    imports: [
        CommonModule,
        IncomesRoutingModule,
        HeaderComponent
    ]
})
export class IncomesModule { }
