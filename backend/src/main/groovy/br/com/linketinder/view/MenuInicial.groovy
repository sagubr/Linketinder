package br.com.linketinder.view

import br.com.linketinder.database.CompetenciaDAO
import br.com.linketinder.database.UsuarioDAO
import br.com.linketinder.services.FabricaCompetencias
import br.com.linketinder.services.FabricaUsuarios

class MenuInicial {

	static Scanner scanner = new Scanner(System.in)

	static void exibir() {

		def opcaoMenu = 0

		while (opcaoMenu != 3) {

			println "Menu de Opções:"
			println "1. Criar Usuário"
			println "2. Entrar na plataforma"
			println "3. Sair"
			print "Escolha uma opção: "

			try {
				opcaoMenu = scanner.nextInt()
				scanner.nextLine()

				switch (opcaoMenu) {
					case 1:
						criar();
						break
					case 2:
						acessar();
						break
					case 3:
						println "Saindo..."
						break
					default:
						println "Opção inválida. Escolha novamente."
						break
				}
			} catch (Exception e) {
				println "Entrada inválida. Por favor, insira um número válido."
				scanner.nextLine()
			}
		}
	}

	static void criar() {
		println("Cadastrar Novo Usuário:  (Escreva EXIT para voltar)");
		print("email: ");
		def email = scanner.nextLine();
		if (email.equals("EXIT")) {
			return
		}
		print("senha: ");
		def senha = scanner.nextLine();
		if (senha.equals("EXIT")) {
			return
		}
		println(FabricaUsuarios.criar(email, senha));
	}

	static void acessar(){
		println("Acessar:  (Escreva EXIT para voltar)");
		print("email: ");
		def email = scanner.nextLine();
		if (email.equals("EXIT")) {
			return
		}
		print("senha: ");
		def senha = scanner.nextLine();
		if (senha.equals("EXIT")) {
			return
		}
		println(FabricaUsuarios.validar(email, senha));
	}
}
