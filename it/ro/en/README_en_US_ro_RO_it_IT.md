# Glossario di Informatica

Ecco una raccolta di traduzioni di parole comunemente usate in informatica.

**⚠** La traduzione fornita nel glossario dev'esser modificata di conseguenza.

# Perché ho bisogno di un glossario❓

* Translators' efforts need unified reference

* Gli allievi principianti devono conoscere la terminologia cinese

* Si può usare come un dizionario per la lettura dei libri di Informatica

# Come contribuire

[`dict.textile`](dict.textile) contiene tutte le parole dalla A alla Z.

Puoi usare la tabella dell'indice informatico per navigare o la funzione di ricerca del browser (CMD+F, CTRL+F).

Per facilitare il contributo, solo il vocabolario è ordinato dalla A alla Z e le categorie non sono più ordinate alfabeticamente. Sei pregato di usare la ricerca per trovarle.

Frequent inquirers can bookmark [this page](https://github.com/mavaddat-javid-education/Computer-Science-Glossary/blob/master/dict.textile).

# Come contribuire

I contributi sono benvenuti! Sapere Aude!

Send a Pull Request to submit vocabulary (in the same format) that does not appear in the glossary.

When submitting orthography, please search the vocabulary first, confirm the vocab has not been added, and add the vocabulary near similar phrases.

Se trovi un errore del vocabolario o una traduzione migliore, sei pregato di aprire \[Issue\]\[issue\] da discutere.

Rely on everyone's strength to grow this vocabulary together.

## Perché ho bisogno di un glossario❓

Use Textile syntax, refer to [Textile Reference](http://redcloth.org/hobix.com/textile/) or [Try Textile](http://textile.thresholdstate.com/).

## Come usare

Lo strumento della riga di comando è scritto usando [Node](http://nodejs.org/), sei pregato di installare [Node](http://nodejs.org/download/) prima di usarlo, o di usare \[NVM\](https://github.com/creationix/nvm) per installarlo.

Se vuoi solo usarlo localmente nel magazzino:

```bash
$ git clone git@github.com:mavaddat-javid-education/Computer-Science-Glossary.git
$ cd Computer-Science-Glossary
$ npm install
$ bin/tran
```

Per usarlo globalmente, esegui:

```bash
$ npm install -g tran
```

Lo strumento supporta correntemente solo le query di traduzione. Visualizza la guida e inserisci direttamente `tran`:

```
$ bin/tran

  Uso: tran <command> [options]

  Comandi:

    search <name> Cerca le traduzioni

  Opzioni:

    -h, --informazioni d'aiuto all'uso
    -V, --produce il numero della versione
```

Query translation `tran search <name>` (fuzzy search), such as searching for `sicp`:

```
$ bin/tran search sicp
Fuzzy match including:
SICP
  "The Structure and Interpretation of Computer Programs"
simple vector
  Simple vector
physical
  physical
```

Questo strumento è stato scritto da \[CatTail\](https://github.com/CatTail).

# Libri consigliati

[[![Ricerca di Traduzione]](http://book.douban.com/subject/1234604/)

# Feedback Aggiuntivo

Sei il benvenuto a inviare un'email a huangz1990 o mavaddatjavid o katehuang0320 a gmail.com

# Licenza

[![]([<img src=)](http://creativecommons.org/licenses/by-nc/3.0/en/)" alt="CC BY-NC 3.0 EN" />](http://creativecommons.org/licenses/by-nc/3.0/en/)

