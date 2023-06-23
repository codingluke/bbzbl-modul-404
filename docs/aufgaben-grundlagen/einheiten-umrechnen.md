---
sidebar_position: 6
---

# 6. Fahrenheit-Celsius Konverter

:::danger WICHTIG

:point_up: **Machen Sie sich mit dem Konzept der [Static](../konzepte/static.md)
bekannt bevor Sie weiterfahren!**

:::

## Ausgangslage

Gegeben sind folgende Klassen welche diesen Dialog ausgeben:

```bash title="Der Dialog-Ablauf"
Möchten Sie (1) Fahrenheit nach Celsius oder (2) Celsius nach Fahrenheit umrechnen?
Bitte Geben Sie Ihre Wahl, 1 oder 2, ein: 1
Bitte geben Sie die Temperatur ein: 32
Die urgerechnete Temperatur beträgt: 0.0
Möchten Sie noch eine Temperatur umrechnen? Dann 1 eingeben
```

```java title="Starter.java"
package converter;
  public class Starter {
    public static void main(String[] args) {
      Converter ui = new Converter();
      ui.dialog();
  }
}
```

```java title="Converter.java"
package converter;
import java.util.Scanner;

public class Converter {
  public void dialog() {
    double convtemp;
    // highlight-next-line
    // Geht es ohne `new`, rsp. ohne Objekt `converter`?
    // highlight-next-line
    DegreesConverter converter = new DegreesConverter();
    int userEntry = 0;
    try(Scanner scanner = new Scanner(System.in)) {
      do {
        System.out.println("Möchten Sie (1) Fahrenheit nach Celsius oder (2) Celsius nach Fahrenheit umrechnen?");
        System.out.print("Bitte geben Sie Ihre Wahl 1 oder 2 ein: ");
        userEntry = scanner.nextInt();
        System.out.print("Bitte geben Sie die Temperatur ein: ");
        double temp = scanner.nextDouble();
        if (userEntry == 1) {
          // highlight-next-line
          // Was muss hier geändert werden wenn es kein Objekt `converter` mehr gibt?
          // highlight-next-line
          convtemp = converter.toCelsius(temp);
        } else {
          // highlight-next-line
          // Was muss hier geändert werden wenn es kein Objekt `converter` mehr gibt?
          // highlight-next-line
          convtemp = converter.toFahrenheit(temp);
        }
        System.out.println("Die umgerechnete Temperatur beträgt: " + convtemp);
        System.out.print("Möchten Sie noch eine Temperatur umrechnen? Dann 1 eingeben. ");
        userEntry = scanner.nextInt();
      } while (userEntry == 1);
    }
  }
}
```

```java title="DegreesConverter.java"
package converter;
public class DegreesConverter {

  // highlight-next-line
  public double toFahrenheit(double celsius) { // was muss hier hinzugefügt werden?
    return (celsius * 9.0/5.0) + 32.0;
  }

  // highlight-next-line
  public double toCelsius(double fahrenheit) { // was muss hier hinzugefügt werden?
    return (fahrenheit - 32.0) * 5.0/9.0;
  }

}
```

## Aufgabe

1. Kopieren Sie den Code der Klassen `Starter`, `Converter` und
   `DegreesConverter` von oben
2. Bringen Sie die Applikation in Eclipse zum laufen.
3. Ändern Sie die Methoden `toFahrenheit` und `toCelsius` so dass die Klasse
   `DegreesConverter` **statisch, also ohne `new`** verwendet werden kann.

## Musterlösung

<details>
<summary>Nur zum Überprüfen der eigenen Implementation!</summary>

```java title="Converter.java"
package converter;
import java.util.Scanner;

public class Converter {
  public void dialog() {
    double convtemp;
    // highlight-next-line
    // Die nächste Linie kann man auskommentieren, we braucht nun kein Objekt mehr
    // highlight-next-line
    // DegreesConverter converter = new DegreesConverter();
    int userEntry = 0;
    try(Scanner scanner = new Scanner(System.in)) {
      do {
        System.out.println("Möchten Sie (1) Fahrenheit nach Celsius oder (2) Celsius nach Fahrenheit umrechnen?");
        System.out.print("Bitte geben Sie Ihre Wahl 1 oder 2 ein: ");
        userEntry = scanner.nextInt();
        System.out.print("Bitte geben Sie die Temperatur ein: ");
        double temp = scanner.nextDouble();
        if (userEntry == 1) {
          // highlight-next-line
          // convtemp = converter.toCelsius(temp);
          // highlight-next-line
          convtemp = DegreesConverter.toCelsius(temp); // es braucht kein Objekt!
        } else {
          // highlight-next-line
          //convtemp = converter.toFahrenheit(temp);
          // highlight-next-line
          convtemp = DegreesConverter.toFahrenheit(temp); // es braucht kein Objekt!
        }
        System.out.println("Die umgerechnete Temperatur beträgt: " + convtemp);
        System.out.print("Möchten Sie noch eine Temperatur umrechnen? Dann 1 eingeben. ");
        userEntry = scanner.nextInt();
      } while (userEntry == 1);
    }
  }
}
```

```java title="DegreesConverter.java"
package converter;
public class DegreesConverter {

  // Hinzufügen des keywords `static`
  // highlight-next-line
  public static double toFahrenheit(double celsius) {
    return (celsius * 9.0/5.0) + 32.0;
  }

  // Hinzufügen des keywords `static`
  // highlight-next-line
  public static double toCelsius(double fahrenheit) {
    return (fahrenheit - 32.0) * 5.0/9.0;
  }

}
```

</details>
