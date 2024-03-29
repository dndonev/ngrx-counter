import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromCounter from './counter.reducer';
import { MainComponent } from './main/main.component';
import { OtherComponent } from './other/other.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    OtherComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(fromCounter.counterReducer),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument()

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
