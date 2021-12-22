import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'calculadora';
  resultado=''

  digitoPresionado($event:any){
    console.log($event.target.value)
    this.resultado+=$event.target.value

  }
  calcular(){
   this.resultado=eval(this.resultado)
  }
  limpiar(){
    this.resultado=''
    console.log(this.resultado)
  }
}
