import { elements as el } from "./elements"
import Login from "../login"

class Disc {

    visitarPagina() {
        cy.visit("/Sistema-EscolaNotas.html")
    }

    loginAdm() {
        Login.fazerLogin({
            usuario: "admin",
            senha: "admin123"
        })
        cy.get(el.navDisc).should("be.visible")

    }

    criarNewDisc(){
        cy.get(el.navDisc).click()
        cy.get(el.nameDisc).type('Geografia')
        cy.get(el.cargaDisc).type('60')
        cy.get(el.btnSalvarDisc).click()
    }

    
    

}
export default new Disc()