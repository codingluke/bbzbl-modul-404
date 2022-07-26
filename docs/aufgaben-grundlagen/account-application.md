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

Es soll möglich sein Geld `einzuzahlen`, `abzuheben` und den Kontostand `anzuzeigen`. Diese Operationen sollen jeweils **durch eine Methode realisiert** sein.

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
		System.out.println("Welcome to the account application");
		double kontostand = 0;
		double amount = 0;
		String command = "";
		do {
			Scanner sc = new Scanner(System.in);
			System.out.println("Please enter the amount, 0 (zero) to terminate");
			amount = sc.nextDouble();
			if (amount != 0) {
				System.out.println("To deposit, press +, to withdraw press -");
				command = sc.next();
				if (command.equals("+")) {
					kontostand = einzahlen(kontostand, amount);
				} else if (command.equals("-")) {
					kontostand = abheben(kontostand, amount);
				}
			}
		} while (amount != 0);
		System.out.println("Final balance: " + aktuellerKontostand(kontostand));
	}

	public static double einzahlen(double ks, double betrag) {
		return ks + betrag;
	}

	public static double abheben(double ks, double betrag) {
		return ks - betrag;
	}

	// diese Methode macht keinen Sinn
	// es ging bei der Aufgabe aber darum, wieder ein paar Methoden zu schreiben
	public static double aktuellerKontostand(double ks) {
		return ks;
	}	
}
```

</details>
