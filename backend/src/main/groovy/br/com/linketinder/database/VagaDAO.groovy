package br.com.linketinder.database

import br.com.linketinder.model.Competencia
import br.com.linketinder.model.Empresa
import br.com.linketinder.model.Vaga

class VagaDAO {

    static sql = new ConnectionFactory().newInstance()
    static ArrayList<Vaga> vagas = new ArrayList<>()

    static void create(Vaga v) throws Exception {
        String query = "INSERT INTO vagas (empresas_id, titulo, descricao, modalidades_id, cidades_id) VALUES (?,?,?,?,?)"
        sql.executeInsert(query, [
                v.getEmpresa().getId(),
                v.getTitulo(),
                v.getDescricao(),
                v.getModalidade(),
                v.getCidade()
        ])
    }

    static ArrayList<Vaga> read() throws Exception {
        vagas.clear()

        String query = "SELECT * FROM vagas"
        sql.eachRow(query) { rs ->
            def vaga = new Vaga(
                    empresa: new Empresa(id: rs[1]),
                    id: rs[0],
                    titulo: rs[2],
                    descricao: rs[3],
                    modalidade: rs[4],
                    cidade: rs[5]
            )

            vagas.add(vaga)
        }
        return vagas
    }

    static void delete(Competencia c) throws Exception {
        String query = "DELETE FROM competencias WHERE id = ?"
        sql.execute(query, [c.getId()])
    }

    static void update(Competencia c) throws Exception {
        String query = "UPDATE competencias SET nome =? WHERE id = ?"
        sql.execute(query, [c.getNome(), c.getId()])
    }

    static void close() {
        sql.close();
    }
}
