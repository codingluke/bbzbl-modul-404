---
sidebar_position: 2
---

# Arrays

Arrays sind ein besonderer Datentyp, da sie es erlauben, mehrere Werte in einer Variablen zu speichern. Diese Variable kann dazu mit einem int Wert angesprochen werden, der als Index benutzt wird, und den Zugriff auf die unterschiedlichen Werte ermöglicht.

## Aufgaben

<!-- TODO:  Das PFD in die Webeite einverleiben -->

- [:pencil: Arrays Repetition PFD](https://drive.google.com/file/d/1Bt4NgySXrhMeorOTuSBs_6thNwXPRbNN/view)

## Musterlösungen

:::tip Übung macht den Meister! :muscle:
Ihr lernt für euch! Ihr stellt euch selbst ein Bein, wenn Ihr einfach die Musterlösungen kopiert!
:::

<details>
<summary>Aufgabe 1 - Array Chars</summary>

```java
public class ArrayChars {
	public static void main(String[] args) {
		char[] text = {'h','e','l','l','o',' ','f','e','l','l','o','w'};
		
		for(int i = 0; i < text.length; i++) {
			System.out.print(text[i]);
		}
		
		System.out.println();
		
		for(int i = text.length - 1; i >= 0; i--) {
			System.out.print(text[i]);
		}
		
		System.out.println();
	}

}
```

</details>

<details>
<summary>Aufgabe 2 - Felder</summary>

```java
import java.util.Arrays;

public class Felder {

	public static void main(String[] args) {
		String[] beruf = new String[9];

		beruf[0] = "Wurstmacher";
		beruf[1] = "Holzbearbeiter";
		beruf[2] = "Laufbursche";
		beruf[3] = "Taxifahrer";
		beruf[4] = "Velokurier";
		beruf[5] = "Wasserfahrer";
		beruf[6] = "Zitronenbearbeiter";
		beruf[7] = "Fensterputzer";
		beruf[8] = "Halsabschneider";
		
		System.out.println("Ausgabe VOR der Sotierung");
		for(int i = 0; i < beruf.length; i++) {
			System.out.println(beruf[i]);
		}
		
		Arrays.sort(beruf);
		
		System.out.println();
		System.out.println("Ausgabe NACH der Sotierung");
		for(int i = 0; i < beruf.length; i++) {
			System.out.println(beruf[i]);
		}
	}

}
```
</details>

<details>
<summary>Aufgabe 3 - Array Negative</summary>

```java
public class ArrayNegativ {

	public static void main(String[] args) {
		int[] a = { 1, -2, -25, 6, -3, 5 };
		
		for(int i = 0; i < a.length; i++) {
			if(a[i] < 0) {
				System.out.println(a[i]);
			}
		}
	}

}
```

</details>

<details>
<summary>Aufgabe 4 - Add Arrays</summary>

```java
public class AddArrays {

	public static void main(String[] args) {
		int[] a = { 1, 2, 25, 6 };
		int[] b = { 9, 18, 5, 34 };
		int[] c = new int[4];

		// Zahlen addieren und in c speichern
		for(int i = 0; i < a.length; i++) {
			c[i] = a[i] + b[i];
		}
		
		// Array c ausgeben
		for(int i = 0; i < a.length; i++) {
			System.out.println(c[i]);
		}
	}

}
```

</details>

<details>
<summary>Aufgabe 5 - Combine Arrays</summary>

```java
public class CombineArrays {

	public static void main(String[] args) {
		int[] a = { 1, 2, 25 };
		int[] b = { 9, 18 };
		
		// neuer Array so lange die beiden anderen zusammen
		int[] c = new int[a.length + b.length];
		
		// Index für Array c
		int index_c = 0;
		
		// Array a kopieren
		for(int i = 0; i < a.length; i++) {
			c[index_c] = a[i];
			index_c++;
		}
		
		// Array b kopieren
		for(int i = 0; i < b.length; i++) {
			c[index_c] = b[i];
			index_c++;
		}
		
		// Kontrolle: die 3 Arrays ausgeben
		System.out.println("Array a:");
		for(int i = 0; i < a.length; i++) {
			System.out.println(a[i]);
		}
		System.out.println();
		
		System.out.println("Array b:");
		for(int i = 0; i < b.length; i++) {
			System.out.println(b[i]);
		}
		System.out.println();
		
		System.out.println("Array c:");
		for(int i = 0; i < c.length; i++) {
			System.out.println(c[i]);
		}
	}

}
```

</details>

<details>
<summary>Aufgabe 5a - Combine Arrays with Methods</summary>

```java
public class CombineArraysWithMethods {

	public static void main(String[] args) {
		int[] a = { 1, 2, 25 };
		int[] b = { 9, 18 };
		
		// neuer Array so lange die beiden anderen zusammen
		int[] c = new int[a.length + b.length];
		
		// Array a kopieren
		copyArray(a, c, 0);
		
		// Array b kopieren
		copyArray(b, c, a.length);
		
		// Kontrolle: die 3 Arrays ausgeben
		showArray("a", a);
		showArray("b", b);
		showArray("c", c);
	}

	// einen Array zu einem anderen Array hinzufügen
	// der 3. Parameter (destination_index) ist die Anzahl Elemente, die im Ziel-Array bereits abgefüllt sind
	public static void copyArray(int[] source, int[] destination, int destination_index) {
		for(int i = 0; i < source.length; i++) {
			destination[destination_index] = source[i];
			destination_index++;
		}
	}
	
	// Array ausgeben
	public static void showArray(String name, int[] array) {
		System.out.println("Array " + name + ":");
		for(int i = 0; i < array.length; i++) {
			System.out.println(array[i]);
		}
		
		System.out.println();
	}
}
```

</details>

<details>
<summary>Aufgabe 6 - Noten</summary>

```java
import java.util.Scanner;

public class Noten {

	public static void main(String[] args) {

		Scanner sc = new Scanner(System.in);
		
		System.out.print("Anzahl Noten: ");
		int number = sc.nextInt();
		
		double[] note = new double[number];
		for(int i = 0; i < note.length; i++) {
			System.out.println("Geben Sie eine Note ein: ");
			note[i] = sc.nextDouble();
			
			double durchschnitt = durchschnitt(note, i + 1);
			System.out.println("Durchschnitt: " + durchschnitt);
			System.out.println();
		}
	}

	// grade ist der Array mit den Noten
	// count ist die bereits eingegebener Noten
	public static double durchschnitt(double[] grade, int count) {
		double durchschnitt = 0;
		
		double sum = 0;
		for(int i = 0; i < count; i++) {
			sum = sum + grade[i];
		}
		
		durchschnitt = sum / count;
		return durchschnitt;
	}
}
```

</details>

<details>
<summary>Aufgabe 7 - Dice</summary>

```java
public class Dice3 {

	public static void main(String[] args) {
		int countAll   = 0;
		int[] count = { 0, 0, 0, 0, 0, 0 };
		
		while(countAll < 100) {
			int number = rollDice();
			count[number - 1]++;
			countAll++;
		}

		System.out.println("Gewürfelte Zahlen:");
		for(int i = 0; i < count.length; i++) {
			System.out.println((i+1) + ": " + count[i]);
		}
	}

	public static int getRandomNumber(int min, int max) {
		int number = (int)(Math.random() * (max - min + 1)) + min;
		return number;
	}
	
	public static int rollDice() {
		return getRandomNumber(1, 6);
	}
}
```

</details>


