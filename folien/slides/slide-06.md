### Shadow DOM

Ein wichtiger Aspekt der Komponenten-basierten Entwicklung ist Kapselung. Shadow DOM ist ein vom normalen Browser DOM-Baum komplett isolierter Zweig.
Wenn ein Custom Element seine Inhalte in den Shadow DOM rendert, beeinflussen diese nicht den normalen (Light) DOM und umgekehrt.

So wirken sich z.B. CSS Styles, die in einem CE definiert sind, nicht auf die restliche Seite aus und das globale CSS nicht auf das CE.
