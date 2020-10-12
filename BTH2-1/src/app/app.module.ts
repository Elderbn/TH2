import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './common/header/header.component';

import { MainComponent } from './common/main/main.component';
import { FooterComponent } from './common/footer/footer.component';
import { MenuLeftComponent } from './common/menu-left/menu-left.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,

    MainComponent,
    FooterComponent,
    MenuLeftComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
