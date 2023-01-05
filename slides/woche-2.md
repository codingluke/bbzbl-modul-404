---
marp: true
theme: bbzbl
paginate: true
header: Modul 404 - Woche 2
footer: BBZBL / Lukas Hodel / Objektbasiert programmieren nach Vorgabe
---

<!-- _class: big center -->

# Woche 2
## Modul 404

---

# Agenda

<!-- _class: emoji-list -->

::: columns

- [:brain: Repetition Fachklassen](https://codingluke.github.io/bbzbl-modul-404/docs/konzepte/fachklassen)

- [:brain: Konzept Static](https://codingluke.github.io/bbzbl-modul-404/docs/konzepte/static)
  - [:keyboard: Aufgabe Starterklasse](https://codingluke.github.io/bbzbl-modul-404/docs/aufgaben-grundlagen/starterklasse)
  - [:keyboard: Aufgabe Temperaturkonvertierer](https://codingluke.github.io/bbzbl-modul-404/docs/aufgaben-grundlagen/einheiten-umrechnen)

::: split

- [:brain: Einstieg in Swing](https://codingluke.github.io/bbzbl-modul-404/docs/aufgaben-swing/einstieg-in-swing)

  - [:keyboard: Aufgaben JFrame](https://codingluke.github.io/bbzbl-modul-404/docs/aufgaben-swing/fenster)
  - [:keyboard: Aufgabe JFrame Komponenten](https://codingluke.github.io/bbzbl-modul-404/docs/aufgaben-swing/komponenten)

:::

### :superhero: Optional

- [:keyboard: Repetition Arrays](https://codingluke.github.io/bbzbl-modul-404/docs/repetition/arrays) ([PDF](https://drive.google.com/file/d/1Bt4NgySXrhMeorOTuSBs_6thNwXPRbNN/view))


---

# :brain: Repetition Fachklassen [:link:](https://codingluke.github.io/bbzbl-modul-404/docs/konzepte/fachklassen)

- **Fachklassen** beinhalten die **generalisierte Logik** für ein Fachproblem
  - _In unserem Fall wäre das Fachproblem die Kontoverwaltung_

- Mit **Fachklassen** lassen sich **Programme entkoppeln**
  - **einfacherer Wartbarkiet**
  - **besserer Testbarkeit**
  - **besserer Qualität**

- Nennen wir es :sushi: **Sushi-Code**, das Gegenteil von :spaghetti: _Spaghetti-Code_


---


# :brain: Konzept `static`: :rock: <- in Stein gemeisselt

- Kann ohne `new` aufgerufen werden
- Kann wiederum andere `static` Methoden aufrufen
- Kann `static` Variablen verwenden
- Kann mit `new` eine `Instanz` einer beliebigen Klasse erstellen.

::: columns

### Für was sind `static` Methoden gut?

- Die Java `main` Methode (entrypoint)
- Helfermethoden **(ohne Datenstand)**
  _Z.B. `Math.sqrt(64);`_

::: split

### :scream: Limitationen

**Können nicht** auf **eigene** `Instanz-Methoden/Varaiblen` zugreifen!

:::

---

# :brain: Konzept `Instanz`<sup>\*</sup>: :hatching_chick: <- Es lebt!

- Beinhalten `Instanz-Methoden`:
  - `Instanz-Methoden` können auf `Instanz-Variablen` zugreifen
  - `Instanz-Methoden` können andere `Instanz-Methoden` ausführen
- Es können von einer **Klasse mehrere Instanzen** erstellt werden
- Ein `Instanz` wird durch `Klasse variableName = new Klasse()` erstellt

### :information_source: Instanzen sind gekapselt und **besitzen einen individuellen Datenstand**

```java
Account accountObject1 = new Account();
Account accountObject2 = new Account();
```

:::footnotes

\* **Instanzen** und **Objekte** sind **Synonym** verwendbar!

:::

---

# :brain: Static vs Instanz-Methoden

Eine `static` Methode einer `Klasse` kann direkt aufgerufen werden, ohne dass ein `Object`/`Instanz` der Klasse erstellt werden muss:

```Java
public class MixedExample {
    private static final double PI = 3.14; // Konstante, kann nicht geändert werden!
    private String greeting = "Hello";     // Instanz-Variablen, kann geändert werden

    public static double staticCircle(double radiant) { 
        return radiant * radiant * PI; // Kann auf `PI` zugreifen nicht aber auf `greeting`
    }

    public String instanceGreeting(String name) {
        return greeting + " " + name;  // Kann auf `greeting` zugreifen
                                       // Könnte theoretisch auch auf `PI` zugreifen
    }

    public void setGreeting(String greeting) { this.greeting = greeting; }
}
```

---

# :brain: Verwenden von `MixedExample`

```java
public class Starter {
    // Startpunkt des Programms, ist immer static!
    public static void main(String[] args) { 

        // Statische Methoden können ohne new ausgeführt werden!
        double circle = MixedExample.staticCircle(1.5d); 

        // Um instanceMethoden aufzurufen, muss zuerst eine Instanz erstellt werden
        MixedExample mixedExampleInstance = new MixedExample(); 
        String greeting = mixedExampleInstance.instanceGreeting("Lukas");
        // Wert ist "Hallo Lukas";

        mixedExampleInstance.setGreeting("Ciao") // Objekt ändern
        greeting = mixedExampleInstance.instanceGreeting("Lukas");
        // Wert ist "Ciao Lukas";
    }
}
```

---

# :keyboard: Starterklasse (20min)  [:link:](https://codingluke.github.io/bbzbl-modul-404/docs/aufgaben-grundlagen/starterklasse)

:link: [Aufgabe Starterklasse](https://codingluke.github.io/bbzbl-modul-404/docs/aufgaben-grundlagen/starterklasse) öffnen

- Es ist eine _gute Praxis_ in der `main` Methode nicht viel Logik zu implementieren.
- Bestenfalls besteht die **Methode `main`** nur mit der **Instanzisierung einer Applikations Klasse** welche die eigentliche App verwaltet.

```java
public class Starter {
    public static void main(String[] args) { // Startpunkt des Programms, ist immer static!

    MyNewShinyApp app = new MyNewShinyApp(); // `new` ist innerhalb von `static` erlaubt
    app.start(); // starten der eigentlichen App
}
```


---

# :keyboard: Refactoring Temperaturkonvertierer 

:link: [Aufgabe Temperaturkonvertierer](https://codingluke.github.io/bbzbl-modul-404/docs/aufgaben-grundlagen/einheiten-umrechnen)

- Es existiert ein Temperaturkonvertierer der **als Objekt** implementiert wurde.
- Ist dies hier sinnvoll oder gibt es eine bessere Art diesen zu implementieren?
- Dies sollt Ihr euch in der Aufgabe überlegen. **Könnte hier `static` was vereinfachen**?


---

# Einstieg `Swing` :framed_picture:

`Swing` ist eine **Bibliothek für grafische Oberflächen**. Dadurch ist es möglich die bis jetzt textuelle Benutzerinteraktion mit grafischen Elemente, auch `GUI - Graphical User Interface` genannt, umzusetzen. 

##  :rotating_light: Achtung!

- Das Verständis davon ist essenziell um im **LB1** eine gute Note zu erhalten!
- Auf dieser Grundlage wird auch das Projekt (**LB2**) umgesetzt!

## :point_up:  Nehmt euch also die **Zeit** dies zu verstehen!

---

# Hilfe im Web! :rocket:

Es ist immer gut sich im Internet weiterzubilden (:thinking: zumindest für IT-Themen)


www.java-tutorial.org ist eine Webseite die Java, sowie `Swing` im Detail erklärt:

- [Deutsches `Swing`-Tutorial als Zusatzinfo für Interessierte](https://www.java-tutorial.org/swing.html)

  - **Relevante Themen**: [JFrame](https://www.java-tutorial.org/jframe.html), [JLabel](https://www.java-tutorial.org/bedienelemente.html), [JButton](https://www.java-tutorial.org/jbutton.html), [JTextField](https://www.java-tutorial.org/jtextfield.html), [JPanel](https://www.java-tutorial.org/jpanel.html)
  - Auch wichtig, wird nächste Woche behandelt [Event-Handling](https://www.java-tutorial.org/event-handling.html)
  
## <!--fit--> :superhero: Ich würde alle in den Aufgaben verwendeten Klassen hier nachschlagen

---

# Swing: `JFrame` 

Möchte man eine Klasse als `Fenster` erstellen, muss man der Klasse die Java Klasse `JFrame` **vererben**. Dies geht mit dem Ausdruck `extends JFrame`

```java
public class PureWindow extends JFrame {
    public void start() {                        // oder auch showDialog, oder was gefällt
        setLayout(null);                         // Standard Layout deaktivieren
        setDefaultCloseOperation(EXIT_ON_CLOSE); // Beim schliessen des Fensters, das ganze Programm beenden
        setSize(300, 300);                       // Grösse vom Fenster festlegen
        setTitle("Ich bin der Fenster Titel");   // Titel des Fensters festlegen
        setVisible(true);                        // Fenster sichtbar machen
    }
}
```

_:information_source: Was genau Vererbung ist, und wie man es selbst verwendet ist Teil eines späteren Moduls. **Hier wenden wir es einfach Mal blindlings an.**_

::: footnotes

[:link: JFrame auf Java Tutorial](https://www.java-tutorial.org/jframe.html)

:::

--- 

# `JFrame` Cheat Cheet :bulb:

```java
setLayout(null); // Standard Layout deaktivieren
setDefaultCloseOperation(EXIT_ON_CLOSE); // Beim schliessen des Fensters, das ganze Programm beenden
setSize(300, 300); // Grösse vom Fenster festlegen
setTitle("Ich bin der Fenster Titel"); // Titel des Fensters festlegen
setVisible(true); // Fenster sichtbar machen

JLabel label = new JLabel("Beschriftung"); // Ein Label
label.setBounds(x, y, wigh, height) // Bestimmen wo sich das Label befindet
add(label) // Label hinzufügen

JTextField textfield = new JTextField(); // Ein Textfeld
textfield.setBounds(x, y, wigh, height) // Bestimmen wo sich das Textfeld befindet
add(textfield) // Textfeld hinzufügen

JButton button = new JButton("press me"); // Ein Button
button.setBounds(x, y, wigh, height) // Bestimmen wo sich der Button befindet
add(button) // Textfeld hinzufügen
```

---

# :keyboard: `Swing` Aufgaben

[:link:](http://localhost:3000/bbzbl-modul-404/docs/category/aufgaben-swing)

Lest die beiden PDFs auf der [Modulwebseite](https://sites.google.com/bbzbl-it.ch/modul404-lh/themen/ui/swing) genau durch und bearbeiten Sie die **Aufgaben 1 - 4**.

- [Einstiegs Aufgaben PDF :book:](https://drive.google.com/file/d/1272v3tDlreVjaaSSdyaAF4uIt0PRgCsK/view)
- [Einstiegs Musterlösungen :book:](https://drive.google.com/file/d/162-Nz5D3EC0jpsIXkb6Dz4a1K64gt8m5/view)

## <!--fit--> :superhero: Versucht es immer zuerst ohne Musterlösung!

---

<!-- _class: big center -->

# Abschluss / Lernjournal

---

# :keyboard: Repetition Arrays (20min) [:link:](https://codingluke.github.io/bbzbl-modul-404/docs/repetition/arrays)

Im folgenden PDF ist beschrieben wie man in Java mit Arrays, also Listen von Datentypen, arbeitet.

- [Repetition Arrays](https://codingluke.github.io/bbzbl-modul-404/docs/repetition/arrays) ([:book: PDF](https://drive.google.com/file/d/1Bt4NgySXrhMeorOTuSBs_6thNwXPRbNN/view)) bitte genau studieren
- Diese **Aufgaben sind Optional** und müssen im **Selbststudium** gemacht werden.
- Am Ende der Sildes wird auf eine weitere Art von Arrays (Listen) eingeganen. 
    - Diese ist **nicht Pflicht** jedoch häufig einfacher.

### :superhero: Dies ist eine Grundlage, welche Ihr im allgemeinen begreifen müsst um die beiden LBs mit einer `6` zu bestehen

---

## :superhero: Die Klasse `List` oder auch `ArrayList`

Primitive Java Arrays sind umständlich und können häufig durch die Klasse `List<Datetyp>` oder `ArrayList<Datentype>` abgelöst werden.

Hier ein Beispiel für eine `List<String>`, also eine Liste von Wörtern:

```java
List<String> list = Arrays.asList("Element 1", "Element 2");
list.add("element 3"); // es können Elemente dynamisch hinzugefügt werden

// über die gesamte Liste iterieren ist viel einfacher als bei "primitiven" Arrays
for (String element : list) {
  System.out.println(element);
}

// Auf ein Element zugreifen mit `.get` (es startet bei 0, nicht bei 1)
System.out.println(list.get(0));
```
