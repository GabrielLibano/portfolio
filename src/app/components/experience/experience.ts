import { Component, OnInit } from '@angular/core';
import { concat } from 'rxjs';

@Component({
    selector: 'app-experience-component',
    templateUrl: './experience.html',
    styleUrls: ['./styles.css']
})
export class ExperienceComponent implements OnInit {
    ngOnInit() {

    }
    clicou(value) {
        let checkbox = document.getElementById('checkbox') as HTMLInputElement;
        let checkbox2 = document.getElementById('checkbox2') as HTMLInputElement;
        let checkbox3 = document.getElementById('checkbox3') as HTMLInputElement;
        let first = document.getElementById('collapse1')
        let second = document.getElementById('collapse2')
        let third = document.getElementById('collapse3')

        if (value == "first") {
            first.classList.toggle("hide")
            first.classList.toggle("show")

            second.classList.add("hide")
            second.classList.remove("show")
            third.classList.add("hide")
            third.classList.remove("show")
            checkbox2.checked = false;
            checkbox3.checked = false;

        } else if (value == "second") {
            second.classList.toggle("hide")
            second.classList.toggle("show")

            first.classList.add("hide")
            first.classList.remove("show")
            third.classList.add("hide")
            third.classList.remove("show")
            checkbox.checked = false;
            checkbox3.checked = false;
        } else if(value == "third") {
            third.classList.toggle("hide")
            third.classList.toggle("show")

            first.classList.add("hide")
            first.classList.remove("show")
            second.classList.add("hide")
            second.classList.remove("show")
            checkbox2.checked = false;
            checkbox.checked = false;
        }
    }

}

