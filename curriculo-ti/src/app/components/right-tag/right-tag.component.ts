import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-right-tag',
  standalone: false,
  templateUrl: './right-tag.component.html',
  styleUrl: './right-tag.component.css'
})
export class RightTagComponent {
  @Input()presentings!: string[];
  @Input()expProf!: {
    workName: string;
    workArea: string;
    wordDateInit:string;
    wordDateEnd:string;
    workDescription:string;
  }[];

  // @Input()wordDateInit!: string;
  // @Input()wordDateEnd!: string;
  // @Input()workDescription!: string;
  @Input()freelances!:{
    freelanceTitle:string;
    freelanceCompany:string;
    freelanceDescription:string;
  }[];

  // @Input()freelanceTitle!: string;
  // @Input()freelanceCompany!: string;
  // @Input()freelanceDescription!: string;
  @Input()academies!:{
    academyCourse:string;
    academyUniversity: string;
    academyDescription:string;
    academyDateInit:string;
    academyDateEnd:string;
  }[];
  // @Input()academyCourse!: string;
  // @Input()academyDescription!: string;
  // @Input()academyDateInit!: string;
  // @Input()academyDateEnd!: string;
  @Input()skills!: string[];
  @Input()courses!: {
    courseType: string;
    courseName: string;
    courseHour: number;
  }[];
}
