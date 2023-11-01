package repository


import model.Company
import groovy.sql.GroovyRowResult
import groovy.sql.Sql

import java.sql.SQLException

class CompanyDAO {

    Sql sql

    List<Company> findAll() {
        List<GroovyRowResult> results = sql.rows("SELECT * FROM empresas AS e INNER JOIN usuarios AS u ON e.usuarios_id = u.id;")
        List<Company> companies = []
        results.each { row ->
            Company company = new Company(id: row.usuarios_id, name: row.razao_social, description: row.descricao)
            companies.add(company)
        }
        return companies
    }

    Company findById(int id) {
        GroovyRowResult result = sql.firstRow("SELECT * FROM empresas AS e INNER JOIN usuarios AS u ON e.usuarios_id = u.id WHERE id = ?", id)
        Company company = new Company(id: result.id, name: result.razao_social, description: result.descricao)
        return result ? company : null
    }

    boolean save(Company company) {
        List<List<Object>> result = sql.executeInsert("INSERT INTO empresas (usuarios_id, razao_social, descricao, data_fundacao) VALUES (?, ?, ?, ?)",
                [company.getId(), company.getName(), company.getDescription(), company.getCreationDate()])
        return result ? true : false
    }

    boolean deleteById(int id) {
        return sql.execute("DELETE FROM empresas WHERE usuarios_id = ?", [id])
    }

    boolean updateById(Company company) throws SQLException {
        return sql.execute("UPDATE empresas SET razao_social = ?, cnpj = ?, descricao = ?, cidades_id = ?, cep = ?, data_fundacao = ? WHERE usuarios_id = ?",
                [company.getName(), company.getCnpj(), company.getDescription(), company.getCity().toInteger(), company.getZipCode(), company.getCreationDate(), company.getId()])
    }

}

