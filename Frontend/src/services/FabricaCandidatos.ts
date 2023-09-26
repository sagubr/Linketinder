import { Candidato } from "../models/Candidato";
import { Competencia } from "../models/Competencia";
import { guardarCadastro, recuperarCadastro } from "./ServicoArmazenamento"
import { instanciarCompetencias } from "./FabricaCompetencias";
import { invalido, valido, validarEmail, validarNome } from "../view/ValidacaoFormulario";

export const capturarCandidato = (forms: HTMLFormElement): any => {

     const formData = new FormData(forms);
     const dados = {
          nome: formData.get('nome_candidato') as string,
          email: formData.get('email_candidato') as string,
          inscricao: formData.get('inscricao_candidato') as string,
          cep: formData.get('CEP_candidato') as string,
          estado: formData.get('estado_candidato') as string,
          pais: formData.get('pais_candidato') as string,
          descricao: formData.get('descricao_candidato') as string,
          dataNascimento: new Date(formData.get('descricao_candidato') as string) as Date,
          formacao: formData.get('formacao_candidato') as string
     };

     return dados;
}

export const validacaoCandidato = (): Boolean => {

     let forms = document.getElementById('forms_candidato') as HTMLFormElement;
     let nome: any = forms.querySelector('[name="nome_candidato"]') as HTMLInputElement
     let email: any = forms.querySelector('[name="email_candidato"]') as HTMLInputElement
     let dataNascimento: any = forms.querySelector('[name="dataNascimento_candidato"]') as HTMLInputElement
     let formacao: any = forms.querySelector('[name="formacao_candidato"]') as HTMLInputElement
     let descricao: any = forms.querySelector('[name="descricao_candidato"]') as HTMLInputElement


     nome = validarNome(nome.value) ? valido(nome) : invalido(nome);
     email = validarEmail(email.value) ? valido(email) : invalido(email);
     //dataNascimento = dataNascimento.value ? valido(dataNascimento) : invalido(dataNascimento);
     formacao = formacao.value ? valido(formacao) : invalido(formacao);
     descricao = descricao.value ? valido(descricao) : invalido(descricao);

     if (nome && email) {
          return true;
     }

     return false;

}

export const instanciarCandidato = (event: Event) => {

     const forms = document.getElementById('forms_candidato') as HTMLFormElement;

     if (validacaoCandidato()) {
          const candidato = new Candidato(capturarCandidato(forms));
          selecionarCompetencias(forms, candidato);
          window.location.href = './visualizacao.html';
     }
}

const selecionarCompetencias = (forms: HTMLFormElement, candidato: Candidato) => {

     let selecionados: Competencia[] = [];

     const competenciasCadastradas = instanciarCompetencias();
     const competenciasSelecionadas = forms.querySelectorAll('.btn-check');

     competenciasSelecionadas.forEach(checkbox => {

          if (checkbox instanceof HTMLInputElement && checkbox.checked) {

               const checkboxId = parseInt(checkbox.id.split('-')[2]) as number;

               selecionados.push(competenciasCadastradas[checkboxId]);
          }
          candidato.competencias = [...selecionados];
     });

     if (candidato) {
          const candidatosJSON = recuperarCadastro('candidatos');
          const candidatoJSON = estruturarJSON(candidato);
          candidatosJSON.push(candidatoJSON);
          guardarCadastro('candidatos', candidatoJSON);
     };
};

export const desestruturarJSON = (candidatoJSON: any) => {

     const competenciasJSON = candidatoJSON.competencias || [];
     const competencias: Competencia[] = competenciasJSON.map((competenciaJSON: any) => {
          return new Competencia({ nome: competenciaJSON });
     });

     const candidato = new Candidato({
          nome: candidatoJSON.nome,
          email: candidatoJSON.email,
          inscricao: candidatoJSON.inscricao,
          cep: candidatoJSON.cep,
          estado: candidatoJSON.estado,
          pais: candidatoJSON.pais,
          descricao: candidatoJSON.descricao,
          dataNascimento: new Date(candidatoJSON.dataNascimento),
          formacao: candidatoJSON.formacao,
          competencias: competencias
     });


     return candidato;
}

const estruturarJSON = (candidato: Candidato) => {

     const candidatoJSON = {
          nome: candidato.nome,
          email: candidato.email,
          inscricao: candidato.inscricao,
          cep: candidato.cep,
          estado: candidato.estado,
          pais: candidato.pais,
          descricao: candidato.descricao,
          dataNascimento: candidato.dataNascimento,
          formacao: candidato.formacao,
          competencias: candidato.competencias.map(competencia => { return competencia.nome })
     };

     return candidatoJSON;
}
