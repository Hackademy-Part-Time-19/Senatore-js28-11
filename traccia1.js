var persona = {
    nome: "Mario",
    cognome: "Rossi",
    eta: 30,
    saluta: function() {
      console.log("Ciao, sono " + this.nome + " " + this.cognome + " e ho " + this.eta + " anni.");
    }
  }

  persona.saluta()