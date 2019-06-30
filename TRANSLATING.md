# ¡Hola! Bonjour! Guten Tag!
## Want to translate Dot into your language?

### First, find your language code.
Head over to https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes and find your language and copy the 639-1 language code.

### Now fork the Dot repo
You can fork our repo here: https://github.com/dot-browser/desktop/fork
This will create a copy of Dot Browser in your GitHub account.

### Open the `locale` folder
Open `en.json` and copy the contents of it. Keep this for the next step.

### Creating the file
Now create a file in the locale folder called `<your language code from earlier>.json`.
You must keep the `.json` on the end. So an example of this would be `fr.json`, if you were translating into French.
And `es.json` for Spanish.
Inside this new file paste the contents of `en.json` from earlier.

### Translation
Now you have your file which you can edit for your language.

## **NOTE!** DO NOT EDIT THE KEY NAMES ONLY THE VALUES.
### e.g. ```"dot_full_with_version": "Dot Browser {appVersion}"``` <-- only the `Dot Browser {appVersion}` should be translated.
### any values enclosed in { } should not be translated.

### Example language codes

Language | Language Code
------------ | -------------
English | `en`
Spanish | `es`
French | `fr`

## ¡Have fun translating, amigos!
