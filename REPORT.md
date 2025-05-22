# 📌 Rättningsrapport – fed24s-the-last-todo-gittan90

## 🎯 Uppgiftens Krav:
[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/VLovMVBC)
# Inlämningsuppgift Todo

I denna inlämningsuppgift kommer ni att skapa er egen todo-lista i en react-applikation.
Sidan skall visa ett antal punkter som skall göras. Dessa skall då komma upp på skärmen i form av en lista. När uppgiften är slutförd skall användaren kunna markera uppgiften som slutförd och uppgiften skall då tas bort från listan.

## Betyg G

- Skapa en hårdkodad lista med punkter att göra (hitta på egna punkter, dessa skall inte bara vara en text)
- Presentera listan på skärmen, helst med lite kontroll. Detta betyder i en html-struktur t.ex. i en ul/li-lista
- Implementera klickhändelse för att hantera borttagandet av en todo.
- Todo markeras som klar/tas bort från skärmen och markeras som klar i javascript-listan.

## Betyg VG

- Alla punkter under G
- Kunna visa även klara händelser och klicka tillbaka den så att de blir oklara igen.
- Skapa ett formulär som tillåter att en användare skapar nya todos efterhand.
- Kunna sortera ordningen på dina todos.
- Implementera ett valfritt grafiskt ramverk till din todolista, t.ex. material ui eller tailwind.
- Egen css får gärna skrivas och då skall ni ha en bra struktur och använda flex eller grid på ett bra sätt.

## Allmänt

Projektet ni har är ett vite-projekt. D.v.s. ni måste köra:

```shell
npm i
```

och

```shell
npm run dev 
```

för att köra projektet.

- Det finns många sätt att lösa denna uppgift på. Om ni känner er osäkra på någonting, fråga hellre någon gång för mycket så att ni känner er säkra på vad ni utvecklar.
- Ni får gärna ändra strukturen i projektet, detta är bara en grund.
- Börja med att planera ert arbete, börja inte med Visual Studio Code, även om det är lockande.
- Gör ert bästa att inte stressa. Lättare sagt än gjort, jag vet. Men ingen mår bättre av att stressa.
- Ha roligt, skratta när det blir fel och fortsätt att vara nyfiken :)


## 🔍 ESLint-varningar:


## 🏆 **Betyg: G**
📌 **Motivering:** Koden uppfyller alla krav för betyget G; det finns en lista av todos som kan bli markerade som klara och tas bort från listan, och en ny 'todo' kan läggas till via ett formulär. Designen är ordnad inom en ul/li-struktur vilket är enligt specifikationen. Det finns dock några aspekter av kodkvaliteten som kan förbättras.

💡 **Förbättringsförslag:**  
För att nå VG-betyget skulle du behöva implementera några ytterligare funktionaliteter, t.ex. visa klara uppgifter och möjligheten att markera dem som oklara igen, samt implementera sorteringsfunktionalitet för todos. På kodkvalitetssidan, var noggrann med att undvika dubbletter i CSS-filerna och försäkra dig om att använda mappar/system som är lättbegripliga för att separera CSS för olika komponenter, speciellt om du använder Tailwind eller Material UI. Du kan också tänka på att bryta ner större komponenter i mindre delar för att förbättra läsbarheten. Slutligen, istället för `Date.now()` för ID:n kan du använda ett id-generatorprogramvara som UUID för att försäkra dig att du har unika värden.