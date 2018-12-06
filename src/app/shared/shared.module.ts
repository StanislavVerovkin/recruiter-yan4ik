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
        MatCardModule
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
        MatCardModule
    ],
})
export class SharedModule {
}
