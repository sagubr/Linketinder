package model

import groovy.transform.ToString

import java.time.LocalDate

@ToString
class Candidato extends Pessoa{

    private String nome;
    private String sobrenome;
    private String linkedin;
    private LocalDate dataNascimento;
    private String formacao;
    private ArrayList<Competencia> competencias;

    Candidato(){}

    Candidato(Integer id){
        super(id)
    }

    Candidato(
            Integer id,
            String nome,
            String sobrenome,
            String inscricao,
            String descricao,
            Integer cidade,
            String CEP,
            String formacao,
            LocalDate dataNascimento,
            String linkedin,
            String pais,
            ArrayList<Competencia> competencias
    ) {
        super(id, inscricao, CEP, cidade, pais, descricao)
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.linkedin = linkedin;
        this.dataNascimento = dataNascimento;
        this.formacao = formacao;
        this.competencias = competencias;
    }

    def atualizarDataNascimento(){

        def dataAtual = LocalDate.now()

        int anos = dataAtual.year - dataNascimento.year
        int meses = dataAtual.month.value - dataNascimento.month.value
        int dias = dataAtual.dayOfMonth - dataNascimento.dayOfMonth

        if (meses < 0 || (meses == 0 && dias < 0)) {
            anos --
        }

        return anos
    }

    String getNome() {
        return nome
    }

    void setNome(String nome) {
        this.nome = nome
    }

    String getSobrenome() {
        return sobrenome
    }

    void setSobrenome(String sobrenome) {
        this.sobrenome = sobrenome
    }

    String getLinkedin() {
        return linkedin
    }

    void setLinkedin(String linkedin) {
        this.linkedin = linkedin
    }

    LocalDate getDataNascimento() {
        return dataNascimento
    }

    void setDataNascimento(LocalDate dataNascimento) {
        this.dataNascimento = dataNascimento
    }

    String getFormacao() {
        return formacao
    }

    void setFormacao(String formacao) {
        this.formacao = formacao
    }

    ArrayList<Competencia> getCompetencias() {
        return competencias
    }

    void setCompetencias(ArrayList<Competencia> competencias) {
        this.competencias = competencias
    }

    def getIdade(){
        return this.dataNascimento == null ? 0 : atualizarDataNascimento()
    }

}
