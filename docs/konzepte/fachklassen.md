# Fachklassen

Eine **Fachklasse** ist eine Klasse, die nur "im Hintergrund" arbeitet und **nicht für die Interaktion mit dem Benutzer zuständig ist**.

## Klassenstruktur

Gemäss aktuellem Wissensstand folgen Klassen folgendem **Schema**:

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs >
<TabItem className="shadow--tl" value="apple" label="Klassen-Deklaration" default>

```java
// highlight-next-line
public class ClassName { // Klassendeklaration Start

  private int myInstanceVariable;                // Instanzvariablen

  public void setMyInstanceVariable(int value) { // Methode (setter)
    myInstanceVariable = value;
  }

  public int getMyInstanceVariable() {           // Methode (getter)
    return myInstanceVariable;
  }

// highlight-next-line
} // Klassendeklaration Ende
```

- Die `Klassen-Deklaration` definiert den **Namen** der Klasse.
- Der **Namen** der Klasse definiert automatisch auch einen **Datentyp**!

</TabItem>
<TabItem className="shadow--tl" value="body" label="Klassen-Body" default>

```java
public class ClassName { // Klassendeklaration Start
  // highlight-start

  private int myInstanceVariable;                // Instanzvariablen

  public void setMyInstanceVariable(int value) { // Methode (setter)
    myInstanceVariable = value;
  }

  public int getMyInstanceVariable() {           // Methode (getter)
    return myInstanceVariable;
  }

  // highlight-end
} // Klassendeklaration Ende
```

- Der Klassenbody beinhaltet die **Deklaration der `Instanz-Variablen` und `Instanz-Methoden`**
- Innerhalb des Body darf **kein ausführenden Code** stehen!
  - Dieser befindet sich **immer** innerhalb vom `Methoden-Body`

</TabItem>
<TabItem className="shadow--tl" value="orange" label="Instanz-Variablen">

```java
public class ClassName { // Klassendeklaration Start
  // highlight-start

  private int myInstanceVariable;                // Instanzvariablen

  // highlight-end
  public void setMyInstanceVariable(int value) { // Methode (setter)
    myInstanceVariable = value;
  }

  public int getMyInstanceVariable() {           // Methode (getter)
    return myInstanceVariable;
  }

} // Klassendeklaration Ende
```

- `Instanz-Variablen` sind Variablen welche im `Klassen-Body` definiert werden.
- Daher befinden sie sich **nicht innerhalb** einer `Methode`.
- Instanzvariablen können innerhalb **aller `Instanz-Methoden`** zugegriffen werden.
- Das Wort `private` bedeutet, dass die Variable aber nur innerhalb der Klasse sichtbar ist, **nicht von ausserhalb**.

</TabItem>
<TabItem className="shadow--tl" value="banana" label="Instanz-Methoden">

```java
public class ClassName { // Klassendeklaration Start

  private int myInstanceVariable;                // Instanzvariablen

  // highlight-start
  public void setMyInstanceVariable(int value) { // Methode (setter)
    myInstanceVariable = value;
  }

  public int getMyInstanceVariable() {           // Methode (getter)
    return myInstanceVariable;
  }
  // highlight-end

} // Klassendeklaration Ende
```

- sind Methoden innerhalb einer Klasse, welche **nicht `static`** deklariert sind
- können auf alle `Instanz-Variablen` zugreifen
- In ihnen wird die **Fachlogik** ausprogrammiert
  - Häufig werden `Instanz-Variablen` mutiert, verarbeitet und oder zurückgegeben

</TabItem>
<TabItem className="shadow--tl" value="instanzmethodenbody" label="Methoden-Body">

```java
public class ClassName { // Klassendeklaration Start

  private int myInstanceVariable;                // Instanzvariablen

  public void setMyInstanceVariable(int value) { // Methode (setter)
    // highlight-next-line
    myInstanceVariable = value;
  }

  public int getMyInstanceVariable() {           // Methode (getter)
    // highlight-next-line
    return myInstanceVariable;
  }

} // Klassendeklaration Ende
```

- Im `Methoden-Body` befindet sich der **eigentliche Code für die Fachlogik**
- Werden `Variablen` innerhalb vom Methoden-Body deklariert, sind diese **ausschliesslich innerhalb diesem**, ab deren deklaration verwendbar/sichtbar.

</TabItem>
</Tabs>

:::tip Keine `main` Methode in einer Fachklasse

- Es gibt **keine** Methode `public static void main(String[] args)`.
- Diese sollte **nur** in der `Starter` Klasse existieren
- Es ist theoretisch möglich mehrere `main` Methoden zu haben, dies ist jedoch **schlechter Stil**

:::

:::danger Klickt durch die Tabs!

Bitte clicked alle Tabs oberhalb einmal an und **versucht zu verstehen**, wie eine Klasse genau aufgebaut ist!

:::

## Instanziierung und Verwendung eines Objekts/Instanz

Objekte lassen sich im Code wie folgt erstellen:

```java
// Datentyp    Variable       Objektzuweisung  Objekterstellung
   ClassName   variablenName         =         new ClassName();

// Es können mehrere Variablen mit Objekte der selben Klasse definiert werden
   ClassName   otherClassName        =         new ClassName();

//               Mit einem Punkt "." wird auf die Instanz-Methoden zugegriffen!
   variablenName.setMyInstanceVariable(12);

// Der Rückgrabewert einer Methode kann in einer Variablen gespeichert werden
   int value = variablenName.getMyInstanceVariable();

// Der Rückgrabewert einer Methode kann auch direkt wiederverwendet werden
   otherObject.setMyInstanceVariable(variablenName.getMyInstanceVariable());
```

:::tip Je besser die Namen desto leserlicher wird der Code!

`ClassName` ist in dem oberen Beispiel generisch gewählt da es sich um ein generelles Beispiel handelt. Anstatt `ClassName` sollte später ein **spezifischer Namen** gewählt werden, wie z.B. `Account`. Der Name der Variable kann beliebig sein. Das gleiche gilt für `Variablen` und `Methoden`

```java
Account savingAccount = new Account(); // Toll
Xyz b = new Xzy();                     // Evt. nicht ganz so toll ;)
```

:::

:::note Instanz oder Objekt, WTF :confused: ?!?

Die Wörter Objekt und Instanz sind **Synonyme**, können also beliebig vertauscht werden.

:::

## 🦸 Unterschied von einem Objekt und einer Variable

- Ein Objekt ist **immer in einer Variable** gespeichert
- Eine Variable muss aber nicht immer ein Objekt beinhalten

```java
Account accountObjektVariable = new Account();
int intVariable = 1;

// `accountObjektVariable` beinhaltet ein Objekt der Klasse Account
// `intVariable` beinhaltet den den Wert 1 vom `primitiven` Datentyp int

accountObjektVariable.getClass(); // Ein Objekt besitzt Methoden welche ausgeführt werden können
intVariable.getClass(); // führt zu einem ERROR. (versuche es in `eclipse`!)
```

:::tip Faustregel

- Wenn der **Datentyp** mit einem **Grossbuchstaben** anfängt (`String`, `Account`, ...) handelt es sich um ein **Objekt**
- Wenn der **Datentyp** mit einem **Kleinbuchstaben** anfängt (`int`, `double`, `char`, ...) ist es **kein Objekt**
- Ein **Objekt besitzt Methoden**, welche man ausführen kann, ein **primitiver Datentyp nicht**
  - **Jedes Objekt** besitzt die Methode `getClass()`;

:::
