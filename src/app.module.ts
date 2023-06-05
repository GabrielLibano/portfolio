import { NgModule } from '@angular/core';
import { AppComponent } from './app/app.component';
import { FullStackComponent } from './app/components/fullstack/fullstack';
import { MainComponent } from './app/components/main/main';
import { NavBarComponent } from './app/components/navbar/navbar';
import { HardSkillsComponent } from './app/components/Skills/HardSkills';
import { FooterComponent } from './app/components/footer/footer';
import { ExperienceComponent } from './app/components/experience/experience';

@NgModule({
    declarations: [
      AppComponent,
      FullStackComponent,
      MainComponent,
      NavBarComponent,
      HardSkillsComponent,
      FooterComponent,
      ExperienceComponent
    ]
  })
export class AppModule { }