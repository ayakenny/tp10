import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HighlightDirectiveDirective } from './highlight-directive.directive';
import { BenchComponentComponent } from './bench-component/bench-component.component';

@NgModule({
  declarations: [
    AppComponent,
    HighlightDirectiveDirective,
    BenchComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
