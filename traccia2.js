let agenda = {
    nome: "AgendaContatti",
    proprietario: "Mattia",
    contatti: [{ "nome": "Alfonso", "numero": 3312243543, }, { "nome": "Gianluca", "numero": 2342543224 }, { "nome": "Alessandro", "numero": 343245432, }],
    
    
    visualizzaTutti: function () {
        console.log("Lista dei contatti:");
        this.contatti.forEach(function (contatto) {
            console.log(contatto.nome + ": " + contatto.numero);
        });
    },
    visualizzaContatto: function (nomeContatto) {
        var contatto = this.contatti.find(function (c) {
            return c.nome === nomeContatto;
        });

        if (contatto) {
            console.log("Contatto: " + contatto.nome + ", Numero: " + contatto.numero);
        } else {
            console.log("Contatto non trovato.");
        }
    },

    aggiungiContatto: function (nome, numero) {
        var nuovoContatto = {
            nome: nome,
            numero: numero
        };
        this.contatti.push(nuovoContatto);
        console.log("Contatto aggiunto con successo.");
    },

    EliminaContatto: function (ContattoEliminato) {
        let Contatto = this.contatti.filter(function (contatti) { return contatti.nome != ContattoEliminato })
        this.contatti = Contatto
    },
    modificaContatto: function (nomeContatto, nuovoNumero) {
        var contatto = this.contatti.find(function (c) {
            return c.nome === nomeContatto;
        });

        if (contatto) {
            contatto.numero = nuovoNumero;
            console.log("Contatto modificato con successo.");
        } else {
            console.log("Contatto non trovato.");
        }
    }
}


//agenda.visualizzaContatto("Alfonso")
//agenda.EliminaContatto("Alfonso")
//agenda.aggiungiContatto("Nicola", "23214323")
//agenda.modificaContatto("Alessandro", "434343434")
agenda.visualizzaTutti()