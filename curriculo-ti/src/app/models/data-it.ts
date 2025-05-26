export interface DataIt {
  nome:string;
  titulo:string[];
  cpf?:string;
  cnh:string;
  endereco:string;
  dataNasc:string/*='??/??/??'*/;
  email:string;
  linkedin:string;
  github:string;
  whatsapp:string;
  // -------------------------- //
  apresentacao:string[];
  // -------------------------- //
  expProf:{
    expEmpresa:string;
    expVaga:string;
    expDescricao:string;
    expDataInicial:string;
    expDataFinal:string;
  }[];
  // -------------------------- //
  freelances:{
    cargo:string;
    empresa:string;
    descricao:string;
  }[];
  // -------------------------- //
  formacao:{
    titulo:string;
    universidade:string;
    dataInicial:string;
    dataFinal:string;
    descricao:string;
  }[];
  // -------------------------- //
  cursos:{
    cursoTipo:string;
    cursoNome:string;
    cursoHoras:number;
  }[];

  hardSkills:string[];
  softSkills:string[];
  languages:{
    idioma:string;
    nivel:string;
  }[];
}
