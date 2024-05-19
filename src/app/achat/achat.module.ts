import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { HeaderComponent } from "../header/header.component";
import { AchatRoutingModule } from './achat-routing.module';
import { AchatComponent } from './achat.component';
import { AddAchatComponent } from './add-achat/add-achat.component';
import { ListAchatComponent } from './list-achat/list-achat.component';


@NgModule({
    declarations: [
        AchatComponent,
        AddAchatComponent,
        ListAchatComponent
    ],
    imports: [
        CommonModule,
        AchatRoutingModule,
        HeaderComponent,
        FormsModule
    ]
})
export class AchatModule { }
