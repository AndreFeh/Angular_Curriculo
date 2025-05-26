import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-fixed-tag',
  standalone: false,
  templateUrl: './fixed-tag.component.html',
  styleUrl: './fixed-tag.component.css'
})
export class FixedTagComponent {
@Input()titles!: string[];
@Input()name!: string;

}
