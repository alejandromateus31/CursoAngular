import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {



 listEstudiantes : any[] = [
  { nombre : 'Diego Mateus' , estado : 'Promocion'},
  { nombre : 'Lucas  Peres' , estado : 'Regulaer'},
  { nombre : 'Juan Garcia' , estado : 'Regulaer'},
];
 nombre = "Diego";
 textoPlaceHolder = 'Escriba algo aqui';
 deshabilitado = true;
 Seturl ='https://uploads.toptal.io/blog/image/125413/toptal-blog-image-1518523133236-d2bc894552c77f954f1e5ce48da6604d.png';
 texto = 'Esto es un video sobre event binding';

constructor() {
  setInterval( () => this.deshabilitado = false , 5000  )

}

getSuma(numero1 : number , numero2 : number){
  return numero1 + numero2;
}

cambiarTexto() : void{
  this.texto = 'En el proximo video vamos a ver two way data-binding';

}


}
