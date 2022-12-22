---
sidebar_position: 1
---

# 1. Account Applikation 

| **Material** | Wissen und Faktenblatt Modul 403 |
|:----|:----|
| **Richtzeit** | ca. 45 Minuten |
| **Sozialform** | Einzelaufgabe |

## Auftrag

Erstellen Sie anhand des Wissens und Könnens aus dem Modul 403 ein Programm, welches einen einfachen Dialog für ein Bankkonto realisiert.
Es soll möglich sein Geld:
- **einzuzahlen**
- **abzuheben**
- den Kontostand **anzuzeigen**

:::info Wichtig!

Die Operationen zum `einzuzahlen` und `abzuheben` sollen jeweils **durch eine Methode realisiert** sein.

:::

**Die Interaktion mit dem Benutzer soll so aussehen, wie nachfolgend gezeigt.**

```bash title="AccountApplication Beispiel Terminal Ausgabe"
Welcome to the account application
Please enter the amount, 0 (zero) to terminate
10
To deposit, press +, to withdraw, press -
+
Please enter the amount, 0 (zero) to terminate
30
To deposit, press +, to withdraw, press -
+
Please enter the amount, 0 (zero) to terminate
5
To deposit, press +, to withdraw, press -
-
Please enter the amount, 0 (zero) to terminate
0
Final balance: 35.0
```


:::info Erste Hilfe

<details>
<summary> Bitte diese Tipps versuchen bevor Ihr zur Musterlösung greift!</summary>

```java
import java.util.Scanner;

public class AccountApplication {
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);
    double balance = 0;
    double amount = 0;
    String command = "";

    System.out.println("Welcome to the account application");
    do {
      System.out.println("Please enter the amount, 0 (zero) to terminate");
      amount = sc.nextDouble();
      if (amount != 0) {
        System.out.println("To deposit, press +, to withdraw press -");
        command = sc.next();
        if (command.equals("+")) {
          // was kommt wohl hier?
        } else if (command.equals("-")) {
          // was kommt wohl hier?
        }
      }
    } while (amount != 0);
    System.out.println("Final balance: " + "attribute balance"); // was soll hier ausgegeben werden?

    sc.close();
  }

  // deposit => einzahlen
  public static double deposit(double balance, double amount) {
    return 0.0; // implementiere mich
  }

  // withdraw => abheben
  public static double withdraw(double balance, double amount) {
    return 0.0; // implementiere mich
  }
}
```

</details>

:::

### Zusatzaufgaben für Schnelle

- Ermöglichen Sie zusätzlich zu + und - die Menüauswahl = um jederzeit den Kontostand abzufragen.
- Geben Sie am Schluss vor dem Schlusssaldo eine Auflistung aller Transaktionen (Ein- und Auszahlungen) aus.

## Musterlösung


<details>
<summary>Nur zum Überprüfen der eigenen Implementation!</summary>

```java
import java.util.Scanner;

public class AccountApplication {
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);
    double balance = 0;
    double amount = 0;
    String command = "";

    System.out.println("Welcome to the account application");
    do {
      System.out.println("Please enter the amount, 0 (zero) to terminate");
      amount = sc.nextDouble();
      if (amount != 0) {
        System.out.println("To deposit, press +, to withdraw press -");
        command = sc.next();
        if (command.equals("+")) {
          balance = deposit(balance, amount);
        } else if (command.equals("-")) {
          balance = withdraw(balance, amount);
        };
      }
    } while (amount != 0);
    System.out.println("Final balance: " + balance);

    sc.close();
  }

  // deposit => einzahlen
  public static double deposit(double balance, double amount) {
    return balance + amount;
  }

  // withdraw => abheben
  public static double withdraw(double balance, double amount) {
    return balance - amount;
  }
}
```

</details>
