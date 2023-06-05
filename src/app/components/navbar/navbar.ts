import { Component } from '@angular/core';

@Component({
    selector: 'app-navbar-component',
    templateUrl: './navbar.html',
    styleUrls: ['./styles.css']
})
export class NavBarComponent{
    hamburguer(){
        let hamburguer = document.querySelector(".hamburguer")
        let navMenu = document.querySelector(".nav-menu")
        let nav = document.querySelector(".nav")
        let logoText = document.querySelector(".logo-text")
        let logo = document.querySelector(".logo")

        hamburguer.classList.toggle("active")
        navMenu.classList.toggle("active")
        nav.classList.toggle("active")
        logoText.classList.toggle("active")
        logo.classList.toggle("active")
    }
    navLinks(){
        let hamburguer = document.querySelector(".hamburguer")
        let navMenu = document.querySelector(".nav-menu")
        let nav = document.querySelector(".nav")
        let logoText = document.querySelector(".logo-text")
        let logo = document.querySelector(".logo")
        hamburguer.classList.remove("active")
        navMenu.classList.remove("active")

        hamburguer.classList.remove("active")
        navMenu.classList.remove("active")
        nav.classList.remove("active")
        logoText.classList.remove("active")
        logo.classList.remove("active")
    }

}