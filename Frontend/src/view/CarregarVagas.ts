import { Empresa } from "../models/Empresa";
import { Vaga } from "../models/Vaga";
import { Competencia } from "../models/Competencia";
import { recuperarCadastro } from "../services/ServicoArmazenamento";

export const carregarVagas = () => {
    const empresasJSON = recuperarCadastro('empresas') as any[];

    if (!empresasJSON) {
        console.error('Não há empresas cadastradas.');
        return;
    }

    const empresas: Empresa[] = empresasJSON.map(
        (empresaJSON: any) => {

            const vagasJSON = empresaJSON.vagas || [];

            const vagas: Vaga[] = vagasJSON.map(
                (vagaJSON: any) => {

                    const competenciasJSON = vagaJSON.competencias || [];

                    console.error(competenciasJSON)

                    const competencias: Competencia[] = competenciasJSON.map(
                        (competenciaJSON: any) => new Competencia(competenciaJSON)
                    );

                    return new Vaga({
                        nome: vagaJSON.nome,
                        descricao: vagaJSON.descricao,
                        criacao: new Date(vagaJSON.criacao),
                        competencias: competencias
                    });
                }
            );

            return new Empresa({
                nome: empresaJSON.nome,
                email: empresaJSON.email,
                inscricao: empresaJSON.inscricao,
                cep: empresaJSON.cep,
                estado: empresaJSON.estado,
                pais: empresaJSON.pais,
                descricao: empresaJSON.descricao,
                vagas: vagas
            });
        }
    );

    empresas.forEach(empresa => {
        empresa.vagas.forEach(vaga => {
            montarHTMLVagas(empresa, vaga);
        });
    });
}

const montarHTMLVagas = (empresa: Empresa, vaga: Vaga) => {
    const HTMLVagas = document.querySelector("#carregar_vagas");

    if (!HTMLVagas) {
        console.error('Não há vagas cadastradas.');
        return;
    }

    HTMLVagas.innerHTML += `
    <div class="col">
        <div class="card text-center text-bg-light mb-3 p-3">
            <h5 class="card-header fw-bold">${vaga.nome}</h5>
            <div class="card-body placeholder-glow">
                <h5 class="card-title placeholder">?</h5>
                <i class='fas fa-question-circle' style='font-size:24px' data-bs-toggle="tooltip"
                    data-bs-title="${empresa.descricao}"></i>
                <p class="card-text">${vaga.descricao}</p>
                ${carregarCompetencias(vaga)}
                <hr>
                <div class="hstack gap-3">
                    <div class="p-2">
                        <button class="btn btn-success btn-lg"><i class="far fa-thumbs-up"></i></button>
                    </div>
                    <div class="p-2 ms-auto">
                        <strong>
                            <span>${Math.floor(Math.random() * 100) + 1}% compatível.</span>
                        </strong>
                    </div>
                    <div class="p-2">
                        <button class="btn btn-danger btn-lg"><i class="far fa-thumbs-down"></i></button>
                    </div>
                </div>
                <div class="card-body alert alert-success" role="alert">
                    Você <strong>curtiu</strong> esta Vaga!
                </div>
                <div class="card-body alert alert-danger" role="alert">
                    Você <strong>não curtiu</strong> esta Vaga!
                </div>
            </div>
            <div class="card-footer text-body-secondary">
                Publicada há dois dias atrás
            </div>
        </div>
    </div>`;
}

const carregarCompetencias = (vaga: Vaga) => {
    let HTMLCompetencias = '';
    vaga.competencias.forEach(competencia => {
        HTMLCompetencias += `<span class="badge text-bg-warning">#${competencia.nome.toLocaleUpperCase()}</span>`;
    });
    return HTMLCompetencias;
}
