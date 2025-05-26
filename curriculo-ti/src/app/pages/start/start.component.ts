import { Component } from '@angular/core';
import { DataIt } from '../../models/data-it';
import { dataIt } from '../../../data/data-it';

@Component({
  selector: 'app-start',
  standalone: false,
  templateUrl: './start.component.html',
  styleUrl: './start.component.css'
})
export class StartComponent {
  perfil:DataIt=dataIt;
  // idiomas:{idioma: string;nivel: string;}[] = dataIt.languages;
  linkWpp:string="https://wa.me/5541995368320?text=Olá%2C%20me%20interessei%20no%20seu%20currículo!";

    // 👇 Adaptação dos dados feita apenas uma vez
  convertedExpProf = this.perfil.expProf.map(exp => ({
    workName: exp.expEmpresa,
    workArea: exp.expVaga,
    workDescription: exp.expDescricao,
    wordDateInit: exp.expDataInicial,
    wordDateEnd: exp.expDataFinal
  }));

  convertedFreelance = this.perfil.freelances.map(freela => ({
    freelanceTitle: freela.cargo,
    freelanceCompany:freela.empresa,
    freelanceDescription: freela.descricao
  }));

  convertedAcademy=this.perfil.formacao.map(acad=>({
    academyCourse:acad.titulo,
    academyUniversity:acad.universidade,
    academyDescription:acad.descricao,
    academyDateInit:acad.dataInicial,
    academyDateEnd:acad.dataFinal
  }));
  convertedCourse=this.perfil.cursos.map(curso=>({
    courseType: curso.cursoTipo,
    courseName: curso.cursoNome,
    courseHour: curso.cursoHoras
  }));
}
