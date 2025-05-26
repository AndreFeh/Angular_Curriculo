import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-left-tag',
  standalone: false,
  templateUrl: './left-tag.component.html',
  styleUrl: './left-tag.component.css'
})
export class LeftTagComponent {
  @Input()name!:string;
  @Input()cnh!:string;
  @Input()cpf?:string;
  @Input()address!:string;
  @Input()date!:string;
  @Input()email!:string;
  @Input()linkedin!:string;
  @Input()github!:string;
  @Input()whatsapp!:string;
  @Input()languages!: { idioma: string; nivel: string }[];
  @Input()softSkills!:string[];
  @Input()linkWpp?: string;

  formatLink(link: string): string {
  if (!link.startsWith('http')) {
    return 'https://www.' + link;
  }
  return link;
}


}
