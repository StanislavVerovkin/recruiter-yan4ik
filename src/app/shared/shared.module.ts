import {NgModule} from '@angular/core';
import {
    MatButtonModule,
    MatCheckboxModule,
    MatIconModule,
    MatMenuModule,
    MatSidenavModule,
    MatExpansionModule,
    MatListModule,
    MatRadioModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatTableModule,
    MatProgressSpinnerModule, MatPaginatorModule, MatDatepickerModule, MatNativeDateModule, MatCardModule
} from '@angular/material';
import {MatToolbarModule} from '@angular/material/toolbar';
import {FlexLayoutModule} from '@angular/flex-layout';
import {NgxDatatableModule} from '@swimlane/ngx-datatable';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


@NgModule({
    imports: [
        MatButtonModule,
        MatCheckboxModule,
        MatToolbarModule,
        MatIconModule,
        MatMenuModule,
        MatSidenavModule,
        FlexLayoutModule,
        MatExpansionModule,
        MatListModule,
        MatRadioModule,
        MatFormFieldModule,
        MatSelectModule,
        MatInputModule,
        MatTableModule,
        MatProgressSpinnerModule,
        MatPaginatorModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatCardModule,
        NgxDatatableModule,
        FormsModule,
        ReactiveFormsModule,
    ],
    exports: [
        MatRadioModule,
        MatButtonModule,
        MatCheckboxModule,
        MatToolbarModule,
        MatIconModule,
        MatMenuModule,
        MatSidenavModule,
        FlexLayoutModule,
        MatExpansionModule,
        MatListModule,
        MatFormFieldModule,
        MatSelectModule,
        MatInputModule,
        MatTableModule,
        MatProgressSpinnerModule,
        MatPaginatorModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatCardModule,
        NgxDatatableModule,
        FormsModule,
        ReactiveFormsModule,
    ],
})
export class SharedModule {
}
