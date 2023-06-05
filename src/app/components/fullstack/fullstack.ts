import { Component, NgModule } from '@angular/core';

@Component({
    selector: 'app-fullstack',
    templateUrl: './mainFullStack.html',
    styleUrls: ['./styles.css']
})
@NgModule({
    declarations: [FullStackComponent],
    exports: [FullStackComponent]
})
export class FullStackComponent{

    ngOnInit() {}
}


