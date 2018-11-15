# Talk: Web Components, Theorie und (ein wenig) Praxis

Diese Repository enthält Folien und Beispielcode für einen Talk zum Thema Web Components.

## Demo

Um den Beispielcode laufen zu lassen, benötigt man irgend eine Art von lokalem Web Server, der das Unterverzeichnis _src_ ausliefert.

Im Projekt ethalten ist zu diesem Zweck das NPM Paket local-web-server, es kann aber wie gesagt jeder beliebige Web Server verwendet werden.

### Installation

Um den Demo Code im Browser via local-web-server laufen zu lassen, muss eine halbwegs aktuelle Version von NodeJS installiert sein.
Danach einfach das Repository auschecken und darin die Kommandos

```bash
npm install
npm run serve
```

ausführen. Dann im Browser die URL http://localhost:8080/ öffnen.

Die Folien kann man sich via

```bash
npm run talk
```

unter der URL http://localhost:8081/ ansehen.
