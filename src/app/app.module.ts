import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CountdownComponent } from './countdown/countdown.component';
import { CountdownGetsetComponent } from './countdown-getset/countdown-getset.component';
import { CountdownOnchangesComponent } from './countdown-onchanges/countdown-onchanges.component';
import { CountdownAliasComponent } from './countdown-alias/countdown-alias.component';
import { CountdownTimerEventAliasComponent} from './countdown-event-alias/countdown-event-alias.component';
import { CountdownEventComponent } from './countdown-event/countdown-event.component';


@NgModule({
  declarations: [
    AppComponent,
    CountdownComponent,
    CountdownGetsetComponent,
    CountdownOnchangesComponent,
    CountdownAliasComponent,
    CountdownTimerEventAliasComponent,
    CountdownEventComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
