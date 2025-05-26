import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileComponent } from './components/profile/profile.component';
import { FixedTagComponent } from './components/fixed-tag/fixed-tag.component';
import { StartComponent } from './pages/start/start.component';
import { LeftTagComponent } from './components/left-tag/left-tag.component';
import { RightTagComponent } from './components/right-tag/right-tag.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    FixedTagComponent,
    StartComponent,
    LeftTagComponent,
    RightTagComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
