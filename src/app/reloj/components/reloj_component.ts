import { Component } from "@angular/core";

@Component ({
    selector: 'app-reloj',
    templateUrl: 'reloj_component.html',
    styleUrls: ['reloj_component.css'],    
    standalone: false,
})

export class relojComponent{
    public horaLocal: string = "";
    private interval: any;

    ngOnInit():void {
        this.interval = setInterval(() => {
            const ahora = new Date();
            const horas = ahora.getHours().toString().padStart(2, "0");
            const minutos = ahora.getMinutes().toString().padStart(2, "0");
            const segundos = ahora.getSeconds().toString().padStart(2, "0");
            this.horaLocal = `${horas}:${minutos}:${segundos}`;
        }, 1000)
    }

    ngOnDestroy():void {
        clearInterval(this.interval);
    }
}