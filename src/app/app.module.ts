import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA} from "@angular/core";
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgSemanticModule } from 'ng-semantic';
import { RouterModule } from '@angular/router';

import { AppRoutes } from './app.routes';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { WorkComponent } from './work/work.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WorkComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgSemanticModule,
    RouterModule.forRoot(AppRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
