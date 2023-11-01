package repository

import model.Candidate
import model.Skills
import groovy.sql.Sql
import utils.OperationStatus

class CandidateSkillsDAO {

    private static final String INSERT_CANDIDATES_SKILLS = "INSERT INTO candidatos_competencias (candidatos_id,competencias_id) VALUES (?, ?)"

    Sql sql

    CandidateSkillsDAO(Sql sql) {
        this.sql = sql
    }

    OperationStatus save(Candidate candidate, Skills skill) {
        List<Object> arguments = [candidate.getId(), skill.getId()]
        return DatabaseExecute.executeTransaction(sql, INSERT_CANDIDATES_SKILLS, arguments)
    }

}
