# Static

Wenn wir ein Java-Programm starten, gibt es noch kein Objekt, das wir ausführen könnten. Das Java-Schlüsselwort `static` ist die Lösung für dieses Problem. Elemente einer Klasse, die mit `static` markiert werden, sind nicht abhängig davon, ob es ein Objekt der Klasse gibt oder nicht. Diese Elemente existieren immer.

Wenn wir also eine Methode `public static void main(String[] args)` geschrieben haben, dann existiert diese Methode beim Programmstart im Speicher und ist ausführbar. Auf diese Weise können wir unsere Programme starten.

In der Regel erstellt man eine **Starterklasse**, welche die Methode `public static void main(String[] args)` enthält. In dieser Methode erstellt man dann ein Objekt des eigentlichen Programms und ruft die Methode auf, die den Programmfluss steuert.

## Was kann `static`? :rock: <- in Stein gemeisselt

- Kann ohne `new` aufgerufen werden.
- Kann wiederum andere `static` Methoden aufrufen
- Kann `static` Variablen verwenden (diese können nicht geändert werden!)
- Kann mit `new` ein `Objekt`/`Instanz` einer beliebigen Klasse erstellen.

## Für was sind `static` Methoden gut?

- Die Java `public static void main(String[] args)` Methode ist immer `static` (Entrypoint)
- Generelle/Universelle Helfermethoden :toolbox: **ohne Datenstand**
  - Z.B. die Java Klasse `Math` ist komplett statisch `Math.sqrt(64);`

## Static vs Instanz-Methoden

Eine `static` Methode einer `Klasse` kann direkt aufgerufen werden, ohne dass ein `Object`/`Instanz` der Klasse erstellt werden muss. 

```java
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

### Verwenden von `MixedExample`

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

