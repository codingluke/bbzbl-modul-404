# Konstruktor

Konstruktoren sind spezielle Methoden einer Klasse, die von aussen nicht als
Methode aufgerufen werden können, aber bei der Instanziierung eines Objektes
aufgerufen werden können.

Ein Konstruktor:

- Methodename ist **immer gleich** wie die Klasse
- ist **nicht explizit aufrufbar**
- wird **ausgeführt, wenn ein Objekt erstellt wird** (:bulb: in Verbindung mit
  **`new`**)
- hat **keinen Rückgabewert**
- es können mehrere Konstruktoren bestehen (:bulb: andere Anzahl Parameter)
- werden **keine Parameter** angegeben, nennt man ihn **Standardkonstruktor**
- dient dazu das **Objekt** mit gültigen Werten zu **initialisieren**

## Deklaration

```java title="MyClass.java Konstruktor Beispiele"
public class MyClass {
  private String name; // Instanzvariable die Inizialisiert werden muss!
  private int year = 2000; // Instanzvariable mit Standardwert

  public MyClass() { // Standardkonstruktor (ohne Parameter)
    this.name = "Startwert"; // `name = "Startwert"` ohne `this` ist auch gültig
  }

  public MyClass(String name) { // Konstruktor mit gleichnamigem Parameter
    this.name = name; // `this` ist notwendig da gleichnamig
  }

  public MyClass(String aName, int year) { // Konstruktor mit zwei Variablen
    name = aName;     // `this` darf weggelassen werden (muss aber nicht!)
    this.year = year; // `this` ist notwendig da gleichnamig
  }
}
```

## Verwendung

```java title="Starter.java verwendet MyClass"
public class Starter {
  public static void main(String[] args) {
    // Standardkonstruktor wird ausgeführt!
    MyClass myClass = new MyClass();

    // Konstruktor mit einem Parameter wird ausgeführt
    MyClass myClass2 = new MyClass("Neuer Startwert");

    // Konstruktor mit zwei Parameter wird ausgeführt
    MyClass myClass3 = new MyClass("Neuer Startwert", 2022);
  }
}
```

## Erläuterung

- **Jede** Klasse besitzt einen Defaultkonstruktor,
  - wenn wir ihn nicht explizit hinschreiben, dann erzeugt der Java-Compiler
    einfach selbst einen, der Nichts macht
  - der Defaultkonstruktor hat **keine Parameter**.
- Wenn wir einem **Konstruktor mit Parametern** Werte übergeben, kann er diese
  als Startwerte für das Objekt verwenden.
  - Das Objekt im zweiten Aufruf in `main` ist also gleich mit dem Startwert
    "Neuer Startwert" initialisiert.
- Wenn der **Name von Parametern gleich ist wie der Name einer Variablen**, dann
  muss mit dem Schlüsselwort `this` gearbeitet werden.
  - Der Einsatz dieses Wortes bedeutet, dass damit die Instanzvariable gemeint
    ist und nicht der Parameter
