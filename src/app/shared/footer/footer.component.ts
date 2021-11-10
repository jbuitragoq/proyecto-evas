import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  partList = [
    { id: "navegacion-categorias", name: 'Categorías', options: ['Cocina', 'Oficina', 'Jardín', 'Cochera', 'Dormitorio'] },
    { id: "navegacion-nosotros", name: 'Sobre Nosotros', options: ['Nuestra Historia', 'Misión, Visión y Valores', 'Carreras', 'Política de Privacidad', 'Términos del Servicio' ] },
    { id: "navegacion-soporte", name: 'Soporte', options: ['Preguntas Frecuentes', 'Ayuda en Línea', 'Confianza y Seguridad', 'Contacto'] }
  ]

  constructor() { }

  ngOnInit(): void { }

}
