import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatToolbarModule } from '@angular/material/toolbar';
import {MatGridListModule} from '@angular/material/grid-list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core'
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import {MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import {MatIconModule} from '@angular/material/icon';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatMenuModule} from '@angular/material/menu';
import {MatListModule} from '@angular/material/list';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatCardModule} from "@angular/material/card";
const empMaterial = [
MatToolbarModule,
MatGridListModule,
MatFormFieldModule,
MatInputModule,
MatRadioModule,
MatSelectModule,
MatDatepickerModule,
MatNativeDateModule,
MatCheckboxModule,
MatButtonModule,
MatSnackBarModule,
MatTableModule,
MatProgressSpinnerModule,
MatPaginatorModule,
MatSortModule,
MatIconModule,
MatTooltipModule,
MatDialogModule,
MatSidenavModule,
MatMenuModule,
MatListModule,
MatExpansionModule,
MatGridListModule,
MatCardModule
] as any

@NgModule({
  declarations: [],
  imports: [...empMaterial],
  exports:[...empMaterial]
})
export class MaterialModule { }
