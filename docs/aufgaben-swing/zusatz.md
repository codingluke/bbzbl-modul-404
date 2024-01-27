---
sidebar_position: 10
---

# 🦸 Zusatzaufgaben

:::important

Versucht alle Aufgaben mit einer **Starter**, **Gui** und **Fachklasse** zu
lösen!

:::

## Zusatzufgabe 1 - einfach

Dieser Auftrag besteht darin, einfache Eingaben für ein Benutzer-Profil zu
erstellen und dann diese Eingaben als eine zusammengefasste Profil-Beschreibung
anzuzeigen.

<div class="grid"><div>

- Erstellen Sie ein GUI, in welchem man ein einfaches Profil, mit Namen,
  bevorzugter Farbe und Sportart eintragen kann.
- Erstellen Sie eine **Fachklasse** `Profil` für die Logik
  - Darin sollen die im GUI eingegebenen Daten gespeichert und verarbeitet
    werden.
- Nach Click auf einen Button wird das **kombinierte Profil** in einem `JLabel`
  angezeigt.

</div><div>

![](../img/zusatz-auftrag1.png)

</div></div>

<details>
<summary>Musterlösung:</summary>

```java title="Profile.java"
public class Profile {
    private String name = "";
    private String favoriteColor = "";
    private String favoriteSports = "";

    public void setName(String name) {
        this.name = name;
    }

    public void setFavoriteColor(String favoriteColor) {
        this.favoriteColor = favoriteColor;
    }

    public void setFavoriteSports(String favoriteSports) {
        this.favoriteSports = favoriteSports;
    }

    public String getProfileDescription() {
        return name + " " + favoriteColor + " " + favoriteSports;
    }
}
```

```java title="ProfileGUI.java"
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

import javax.swing.JButton;
import javax.swing.JFrame;
import javax.swing.JLabel;
import javax.swing.JTextField;

public class ProfileGUI extends JFrame implements ActionListener {
	JLabel titleLabel = new JLabel("Profile");
	JLabel nameLabel = new JLabel("Name:");
	JTextField nameField = new JTextField();
	JLabel favColorLabel = new JLabel("Color:");
	JTextField favColorField = new JTextField();
	JLabel favSportsLabel = new JLabel("Sports:");
	JTextField favSportsField = new JTextField();
	JLabel descriptionLabel = new JLabel();
	JButton profileButton = new JButton("Update text profile");
	Profile profile = new Profile();

	public void showDialog() {
		setLayout(null);
		titleLabel.setBounds(10, 20, 200, 20);
		int labelWith = 120;
		int fieldIndentation = 140;
		int line1 = 40;
		nameLabel.setBounds(10, line1, labelWith, 20);
		nameField.setBounds(fieldIndentation, line1, labelWith, 20);
		int line2 = 70;
		favColorLabel.setBounds(10, line2, labelWith, 20);
		favColorField.setBounds(fieldIndentation, line2, labelWith, 20);
		int line3 = 110;
		favSportsLabel.setBounds(10, line3, labelWith, 20);
		favSportsField.setBounds(fieldIndentation, line3, labelWith, 20);
		descriptionLabel.setBounds(10, 150, 250, 20);
		profileButton.setBounds(10, 200, 200, 30);
		add(titleLabel);
		add(nameLabel);
		add(nameField);
		add(favColorLabel);
		add(favColorField);
		add(favSportsLabel);
		add(favSportsField);
		add(descriptionLabel);
		add(profileButton);
		profileButton.addActionListener(this);
		setDefaultCloseOperation(EXIT_ON_CLOSE);
		setSize(300, 300);
		setTitle("Profile");
		setVisible(true);
	}

	public void actionPerformed(ActionEvent arg0) {
		profile.setName(nameField.getText());
		profile.setFavoriteColor(favColorField.getText());
		profile.setFavoriteSports(favSportsField.getText());
		descriptionLabel.setText(profile.getProfileDescription());
	}
}
```

```java title="ProfileGUIStarter.java"
public class ProfileGUIStarter {

	public static void main(String[] args) {
		ProfileGUI gui = new ProfileGUI();
		gui.showDialog();
	}

}
```

</details>

<!-- Durch SOL
### Punkte

- 1 Punkt, wenn Name, Color, Sports direkt in der actionPerformed-Methode kombiniert werden.
- 2 Punkte, wenn Name, Color, Sports erst in der zur Verfügung gestellten Fachklasse Profile gespeichert werden, und dann von dort als eine `profileDescription` abgerufen werden.
- 3 Punkte, wenn Sie die Fachklasse Profile selbst programmiert haben.
-->

## Zusatzaufgabe 2 - mittel

Dieser Auftrag besteht in zwei Varianten:

- a) das Programm simuliert ein einmaliges würfeln, indem eine der Augenzahlen 1
  bis 6 entsprechende Zahl zufällig erzeugt wird.
- b) es werden 100 Würfeldurchgänge simuliert und die zufällige Verteilung
  angezeigt.

:::note Wie erzeugt man am Computer eine zufällig gewürfelte Augenzahl?

```java
return (int) (Math.random() * 6) + 1;
```

:::

### Variante 1

<div class="grid"><div>

1. einmal würfeln
2. Das GUI zeigt bei Click auf den Button jeweils eine neue zufällige Zahl an.

</div><div>

![](../img/zusatz-auftrag2-variante1.png)

</div></div>

<!--
Punkte:
- 2 Punkte, wenn Fachklasse fertig übernommen,
- 3 Punkte, wenn auch Fachklasse selbst programmiert,
-->

<details>
<summary>Musterlösung:</summary>

```java title="Dice.java"
public class Dice {
    // kann static sein, da keine Instanz-Variablen verwendet werden
    public static int roll() {
        return (int) (Math.random() * 6) + 1;
    }

    // nur zum testen von sich selbst
    public static void main(String[] args) {
        System.out.println(Dice.roll());
    }
}
```

```java title="DiceGUI.java"
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

import javax.swing.JButton;
import javax.swing.JFrame;
import javax.swing.JLabel;

public class DiceGUI extends JFrame implements ActionListener {
	JLabel titleLabel = new JLabel("1 dice roll simulation");
	JLabel oneLabel = new JLabel();
	JButton rollButton = new JButton("simulate roll");
	Dice dice = new Dice();

	public void showDialog() {
		setLayout(null);
		titleLabel.setBounds(10, 20, 200, 20);
		oneLabel.setBounds(10, 80, 30, 20);
		rollButton.setBounds(10, 200, 200, 30);
		add(titleLabel);
		add(oneLabel);
		add(rollButton);
		rollButton.addActionListener(this);
		setDefaultCloseOperation(EXIT_ON_CLOSE);
		setSize(300, 300);
		setTitle("");
		setVisible(true);
	}

	public void actionPerformed(ActionEvent arg0) {
		oneLabel.setText(Integer.toString(dice.roll()));
	}
}
```

```java title="DiceGUIStarter.java"
public class DiceGUIStarter {

	public static void main(String[] args) {
		DiceGUI gui = new DiceGUI();
		gui.showDialog();
	}

}
```

</details>

### Variante 2

<div class="grid"><div>

1. hundert Mal würfeln
2. Das GUI zeigt bei Click auf den Button jeweils die Zufallsverteilung der in
   diesem Durchgang gewürfelten Zahlen an.

</div><div>

![](../img/zusatz-auftrag2-variante2.png)

</div></div>

<details>
<summary>Musterlösung:</summary>

```java title="MultiDice.java"
public class MultiDice {

	public static int[] rollTimes(int times) {
		int[] counts = { 0, 0, 0, 0, 0, 0 }; // pro Zahl eine Stelle
		for (int i = 0; i < times; i++) {
			int randomNumber = rollOnce(); // würfeln
			counts[randomNumber - 1]++; // index startet bei 0 daher -1
			// counts[rollOnce() - 1]++; // das würde auch gehen
		}
		return counts; // gibt Array zurück mit allen Zahlen
	}

	public static int rollOnce() {
		return (int) (Math.random() * (6 - 1 + 1)) + 1;
	}

	// nur zum testen von sich selbst
	public static void main(String[] args) {
        // hier könnte man auch 217 mal würfeln
        // dann müsste man die % Angaben aber auch normalisieren!
		int[] counts = MultiDice.rollTimes(100);
		for (int i = 0; i < counts.length; i++) {
			System.out.println((i + 1) + ": " + counts[i] + "%");
		}
	}

}
```

```java title="MultiDiceGUI.java"
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

import javax.swing.JButton;
import javax.swing.JFrame;
import javax.swing.JLabel;

public class MultiDiceGUI extends JFrame implements ActionListener {
	JLabel titleLabel = new JLabel("100 dice rolls simulation average");
	JLabel oneLabel = new JLabel();
	JLabel twoLabel = new JLabel();
	JLabel threeLabel = new JLabel();
	JLabel fourLabel = new JLabel();

	JLabel fiveLabel = new JLabel();
	JLabel sixLabel = new JLabel();
	JLabel oneTitleLabel = new JLabel("1");
	JLabel twoTitleLabel = new JLabel("2");
	JLabel threeTitleLabel = new JLabel("3");
	JLabel fourTitleLabel = new JLabel("4");
	JLabel fiveTitleLabel = new JLabel("5");
	JLabel sixTitleLabel = new JLabel("6");
	JButton rollButton = new JButton("simulate rol
```

</details>
