import { Component, NgModule } from '@angular/core';
import { FullStackComponent } from '../fullstack/fullstack';

@Component({
    selector: 'app-main-component',
    templateUrl: './main.html',
    styleUrls: ['./styles.css']
})
export class MainComponent{
    
}

@NgModule({
    imports: [FullStackComponent],
    declarations: [
      MainComponent
    ],
    exports: [MainComponent]
  })

export class MainModule { }
