# Formatierung

Wir sind keine Maschinen sondern **Menschen**. Um einen Text gut lesen zu können, brauchen wir gute Struktur! Um eine Konvention zu haben, haben wir in diesem Unterricht folgende Regeln definiert!

## Unsere Regeln

- Wir verwenden **keine Umlaute** im Code (Ausnahmen sind Kommentare)
- Jede **Klasse** 
  - beginnt mit einem **Grossbuchstaben** 
  - hat einen `AusdrucksstarkenNamen` in :camel: [`UpperCamelCase` :link:](http://wiki.c2.com/?UpperCamelCase)
- Jede **Methode**
  - beginnt mit einem **Kleinbuchstaben** 
  - hat einen `ausdrucksstarkenNamen` in :camel: [`lowerCamelCase` :link:](http://wiki.c2.com/?LowerCamelCase)
- Blöcke `{}` werden eingerückt (:keyboard: **Ctrl-Shift-F** :apple: **Command-Shift-F**)
- **Standard-Encoding `UTF-8`**: `Preferences > General > Workspace` -> `UTF-8`

## Unformatiert

- Dieser Quellcode unten ist für uns nicht gut lesbar
- Eclipse hat damit keine Probleme und meldet auch zu Recht keinen Fehler

```java
import java.util.Scanner; public class XYZ { public static void main(String[] args) { System.out.println("Welcome to the account application"); double k = 0; double a = 0; String c = ""; do { Scanner sc = new Scanner(System.in); System.out.println("Please enter the a, 0 (zero) to terminate"); a = sc.nextDouble(); if (a != 0) { System.out.println("To deposit, press +, to withdraw press -"); c = sc.next(); if (c.equals("+")) { k = e(k, a); } else if (c.equals("-")) { k = ab(k, a); } } } while (a != 0); System.out.println("Final balance: " + ak(k)); } public static double e(double ks, double b) { return ks + b; } public static double ab(double ks, double bt) { return ks - bt; } public static double ak(double ks) { return ks; }	}
```

:::tip
- Damit andere Entwickler unseren Code gut lesen können (und wir selbst auch), werden wir uns an [**einige Regeln**](#unsere-regeln) halten.
- Viele Firmen haben übrigens eine ganze Reihe definierter Regeln, wie Quellcode aussehen soll. [Hier](https://google.github.io/styleguide/javaguide.html) finden Sie zum Beispiel die Regeln, wie bei [Google Java Code zu formatieren ist](https://google.github.io/styleguide/javaguide.html).
:::

## Formatiert mit schlechte Namen

- Dieser Quellcode unten ist für uns gut lesbar
- Die Namen sind jedoch schlecht!
- Es ist nicht erkennbar, was der code wirklich macht ohne ihn zu analysieren! :scream:

```java
import java.util.Scanner;

public class Xyz {
	public static void main(String[] args) {
		System.out.println("Welcome to the account application");
		double k = 0;
		double a = 0;
		String c = "";
		do {
			Scanner sc = new Scanner(System.in);
			System.out.println("Please enter the a, 0 (zero) to terminate");
			a = sc.nextDouble();
			if (a != 0) {
				System.out.println("To deposit, press +, to withdraw press -");
				c = sc.next();
				if (c.equals("+")) {
					k = e(k, a);
				} else if (c.equals("-")) {
					k = ab(k, a);
				}
			}
		} while (a != 0);
		System.out.println("Final balance: " + ak(k));
	}

	public static double e(double ks, double bt) {
		return ks + bt;
	}

	public static double ab(double ks, double bt) {
		return ks - bt;
	}

	public static double ak(double ks) {
		return ks;
	}	
}
```


## Formatiert und gut Benannt

```java
import java.util.Scanner;

public class AccountApplication {
	public static void main(String[] args) {
		System.out.println("Welcome to the account application");
		double balance = 0;
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
					balance = deposit(balance, amount);
				} else if (command.equals("-")) {
					balance = withdraw(balance, amount);
				}
			}
		} while (amount != 0);
		System.out.println("Final balance: " + getBalance(balance));
	}

	public static double deposit(double balance, double amount) {
		return balance + amount;
	}

	public static double withdraw(double balance, double amount) {
		return balance - amount;
	}

	public static double getBalance(double balance) {
		return balance;
	}	
}
```

