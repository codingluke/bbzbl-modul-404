---
sidebar_position: 5
---

# 5. Fahrenheit-Celsius Konverter

> :point_up: **Machen Sie sich mit dem Konzept der [Static](../konzepte/static) bekannt bevor Sie weiterfahren!**

## Ausgangslage

Gegeben sind folgende Klassen:

```java title="Starter.java"
package converter;
  public class Starter {
    public static void main(String[] args) {
      // highlight-next-line
      Converter ui = new Converter(); // Die Klasse `Converter` fehlt und sollt ihr umsetzen
      ui.dialog();
  }
}
```

```java title="DegreesConverter.java"
package converter;
public class DegreesConverter {

  public double toFahrenheit(double celsius) {
    return (celsius * 9.0/5.0) + 32.0;
  }

  public double toCelsius(double fahrenheit) {
    return (fahrenheit - 32.0) * 5.0/9.0;
  }

}
```

## Aufgabe

Erstellen Sie eine Klasse `Converter`, welche die Methode `dialog` enthält. 
Darin wird die Benutzerschnittstelle implementiert. 

```bash title="Der Dialog-Ablauf soll so aussehen"
Möchten Sie (1) Fahrenheit nach Celsius oder (2) Celsius nach Fahrenheit umrechnen?
Bitte Geben Sie Ihre Wahl, 1 oder 2, ein: 1
Bitte geben Sie die Temperatur ein: 32
Die urgerechnete Temperatur beträgt: 0.0
Möchten Sie noch eine Temperatur umrechnen? Dann 1 eingeben
```

## Musterlösung

<details>
<summary>Nur zum Überprüfen der eigenen Implementation!</summary>

```java title="Converter.java"
package converter;
import java.util.Scanner;

public class Converter {
  public void dialog() {
    Scanner sc = new Scanner(System.in);
    DegreesConverter converter = new DegreesConverter();
    int wahl = 0;
    do {
      System.out.println("Möchten Sie (1) Fahrenheit nach Celsius oder (2) Celsius nach Fahrenheit umrechnen?");
      System.out.print("Bitte geben Sie Ihre Wahl 1 oder 2 ein: ");
      wahl = sc.nextInt();
      System.out.print("Bitte geben Sie die Temperatur ein: ");
      double temp = sc.nextDouble();
      double convtemp;
      if (wahl == 1) {
        convtemp = converter.toCelsius(temp);
      } else {
        convtemp = converter.toFahrenheit(temp);
      }
      System.out.println("Die umgerechnete Temperatur beträgt: " + convtemp);
      System.out.print("Möchten Sie noch eine Temperatur umrechnen? Dann 1 eingeben. ");
      wahl = sc.nextInt();
    } while (wahl == 1);
  }
}
```

</details>

## Zusatz Aufgabe

Der `DegreeConverter` ist eine Klasse **ohne statische Methoden**, wie beim Konto. Ist das hier sinnvoll? Könnte man evt. die Methoden `toFahrenheit` und `toCelsius` als `static` definieren? Wenn ja, wie würde man nun die Klasse `Converter` aussehen?

## Musterlösung

<details>
<summary>Nur zum Überprüfen der eigenen Implementation!</summary>

```java title="Converter.java"
package converter;
import java.util.Scanner;

public class Converter {
  public void dialog() {
    Scanner sc = new Scanner(System.in);
    // highlight-next-line
    // Die nächste Linie kann man auskommentieren, we braucht nun kein Objekt mehr
    // highlight-next-line
    // DegreesConverter converter = new DegreesConverter(); 
    int wahl = 0;
    do {
      System.out.println("Möchten Sie (1) Fahrenheit nach Celsius oder (2) Celsius nach Fahrenheit umrechnen?");
      System.out.print("Bitte geben Sie Ihre Wahl 1 oder 2 ein: ");
      wahl = sc.nextInt();
      System.out.print("Bitte geben Sie die Temperatur ein: ");
      double temp = sc.nextDouble();
      double convtemp;
      if (wahl == 1) {
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
      wahl = sc.nextInt();
    } while (wahl == 1);
  }
}
```

```java title="DegreesConverter.java"
package converter;
public class DegreesConverter {

  // highlight-next-line
  public static double toFahrenheit(double celsius) {
    return (celsius * 9.0/5.0) + 32.0;
  }

  // highlight-next-line
  public static double toCelsius(double fahrenheit) {
    return (fahrenheit - 32.0) * 5.0/9.0;
  }

}
```

</details>



