# Computer Science Glossary

Here is a collection of translations of commonly used words in computer science.

**⚠** The translation provided in the glossary needs to be modified accordingly.

# Why do I need a glossary❓

* Translators' efforts need unified reference

* Novice learners need to know Chinese terminology

* Can be used as a dictionary for reading CS books

# How to contribute

[`dict.textile`](dict.textile) contains all words A-Z.

You can use the alphabetic index table to browse or the search function of the browser (CMD+F, CTRL+F).

In order to make contribution easier, only vocabulary is sorted by A-Z, and the categories are no longer sorted alphabetically. Please use search to find them.

Frequent inquirers can bookmark [this page](https://github.com/mavaddat-javid-education/Computer-Science-Glossary/blob/master/dict.textile).

# How to contribute

Contributions are welcome! Sapere Aude!

Send a Pull Request to submit vocabulary (in the same format) that does not appear in the glossary.

When submitting orthography, please search the vocabulary first, confirm the vocab has not been added, and add the vocabulary near similar phrases.

If you find a vocabulary error or a better translation, please open \[Issue\]\[issue\] to discuss.

Rely on everyone's strength to grow this vocabulary together.

## Why do I need a glossary❓

Use Textile syntax, refer to [Textile Reference](http://redcloth.org/hobix.com/textile/) or [Try Textile](http://textile.thresholdstate.com/).

## how to use

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

[![CC BY-NC 3.0 EN]([![CC BY-NC 3.0 EN](http://i.creativecommons.org/l/by-nc/3.0/cn/88x31.png)](http://creativecommons.org/licenses/by-nc/3.0/en/)
)](http://creativecommons.org/licenses/by-nc/3.0/en/)

