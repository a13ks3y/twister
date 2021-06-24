import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ControlsComponent } from './controls/controls.component';
import { FieldComponent } from './field/field.component';
import { PlayersComponent } from './players/players.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ControlsComponent,
    FieldComponent,
    PlayersComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FontAwesomeModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent] 
})
export class AppModule { }
