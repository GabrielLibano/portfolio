import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main';
import { FullStackComponent } from './components/fullstack/fullstack';
import { NavBarComponent } from './components/navbar/navbar';
import { HardSkillsComponent } from './components/Skills/HardSkills';
import { FooterComponent } from './components/footer/footer';
import { ExperienceComponent } from './components/experience/experience';

@NgModule({
  declarations: [
    AppComponent,
    FullStackComponent,
    MainComponent,
    NavBarComponent,
    HardSkillsComponent,
    FooterComponent,
    ExperienceComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
