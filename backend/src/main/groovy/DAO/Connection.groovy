package DAO

import groovy.sql.Sql

class Connection {

    static Sql newInstance() {
        final String url = 'jdbc:postgresql://localhost:5432/linketinder'
        final String user = 'postgres'
        final String password = 'postgres'
        final String driver = 'org.postgresql.Driver'

        return Sql.newInstance(url, user, password, driver)
    }

}