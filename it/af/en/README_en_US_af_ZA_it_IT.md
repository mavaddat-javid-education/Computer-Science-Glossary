# Glossario di Informatica

Ecco una raccolta di traduzioni delle parole più comunemente usate in informatica.

**⚠** La traduzione fornita nel glossario dev'esser modificata di conseguenza.

# Perché ho bisogno di un glossario❓

* Gli sforzi dei traduttori necessitano di riferimenti unificati

* Gli allievi principianti devono conoscere la terminologia cinese

* Si può usare come un dizionario per leggere i libri di Informatica

# Come contribuire

[`dict.textile`](dict.textile) contiene tutte le parole dalla A alla Z.

Puoi usare la tabella dell'indice alfabetico per navigare o la funzione di ricerca del browser (CMD+F, CTRL+F).

Per facilitare il contributo, solo il vocabolario è ordinato dalla A alla Z e le categorie non sono più ordinate alfabeticamente. Sei pregato di usare la ricerca per trovarle.

Frequent inquirers can bookmark [this page](https://github.com/mavaddat-javid-education/Computer-Science-Glossary/blob/master/dict.textile).

# Come contribuire

I contributi sono benvenuti! Sapere Aude!

Send a Pull Request to submit vocabulary (in the same format) that does not appear in the glossary.

When submitting orthography, please search the vocabulary first, confirm the vocab has not been added, and add the vocabulary near similar phrases.

If you find a vocabulary error or a better translation, please open \[Issue\]\[issue\] to discuss.

Rely on everyone's strength to grow this vocabulary together.

## Perché ho bisogno di un glossario❓

Use Textile syntax, refer to [Textile Reference](http://redcloth.org/hobix.com/textile/) or [Try Textile](http://textile.thresholdstate.com/).

## How to use

The command line tool is written using [Node](http://nodejs.org/), please install [Node](http://nodejs.org/download/) before using, or use \[NVM\](https:/ /github.com/creationix/nvm) to install Node.

If you only want to use it locally in the warehouse:

```bash
$ git clone git@github.com:mavaddat-javid-education/Computer-Science-Glossary.git
$ cd Computer-Science-Glossary
$ npm install
$ bin/tran
```

To use globally, run:

```bash
$ npm install -g tran
```

The tool currently only supports translation queries. View the help and enter `tran` directly:

```
$ bin/tran

  Usage: tran <command> [options]

  Commands:

    search <name> Search for translations

  Options:

    -h, --help output usage information
    -V, --version output the version number
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

This tool was written by \[CatTail\](https://github.com/CatTail).

# Recommended books

[[![Translation Research]](http://book.douban.com/subject/1234604/)

# Additional Feedback

You're welcome to send an email to huangz1990 or mavaddatjavid or katehuang0320 at gmail dot com

# Licence

[![]([<img src=)](http://creativecommons.org/licenses/by-nc/3.0/en/)" alt="CC BY-NC 3.0 EN" />](http://creativecommons.org/licenses/by-nc/3.0/en/)

