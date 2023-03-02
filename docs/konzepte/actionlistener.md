# ActionListener asdf

:::danger Allerwesentlichster Part!

- Dies sollen alle **vor dem LB1 verstanden und verinnerlicht haben**!
- Ohne dieses Wissen ist das Projekt und auch die Prüfung nicht zu bestehen!

:::

## Das Interface `ActionListener`

- `ActionListener` ist ein Interface, welches von Java mitgeliefert wird.
- Es **definiert** die Methode `public void actionPerformed(ActionEvent e);`
- Alle Klassen die den ActionListener implementieren (`implements ActionListener`) **müssen** auch die Methode `public void actionPerformed(ActionEvent e);` implementieren
- Die JavaDoc findet man [hier](https://docs.oracle.com/en/java/javase/11/docs/api/java.desktop/java/awt/event/ActionListener.html)

```java title="java.awt.event.ActionListener"
package java.awt.event;

import java.util.EventListener;

public interface ActionListener extends EventListener {

    public void actionPerformed(ActionEvent e);

}
```

## ActionListener Beispiel: TimeButton Klasse

Das nachfolgende Programm zeigt ein Swing-Programm, das in einfacher Art interaktiv ist. Bei jedem Klick auf den Button wird in einem `JLabel` das aktuelle Datum mit Uhrzeit angezeigt. (Die Starterklasse ist weggelassen.)

```java
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.util.Date;
import javax.swing.JButton;
import javax.swing.JFrame;
import javax.swing.JLabel;
// highlight-start

// `implements ActionListener` wird neu hinzugefügt.
// Damit wird die Methode `actionPerformed(ActionEvent e)` der Klasse hinzugefügt.
public class TimeButton extends JFrame implements ActionListener {

// highlight-end
  private JButton commandButton = new JButton("show time");
  private JLabel outputLabel = new JLabel();

  public void showDialog() {
    setLayout(null);

    outputLabel.setBounds(10, 40, 250, 15);
    commandButton.setBounds(10, 60, 250, 20);
    add(outputLabel);
    add(commandButton);
    // highlight-start

    // Hier wird die Klasse beim Button `commandButton` registriert
    // Ohne diese Anweisung macht der `commandButton` nix!
    commandButton.addActionListener(this);

    // highlight-end
    setDefaultCloseOperation(EXIT_ON_CLOSE);
    setSize(300, 300);
    setTitle("JFrame TimeButton");
    setVisible(true);
  }
  // highlight-start

  // Diese Methode wird immer ausgeführt, wenn der `commandButton` gedrückt wird
  @Override // dies signalisiert, dass wir die Methode definieren müssen!
  public void actionPerformed(ActionEvent e) {
    // Wenn der `commandButton` gedrückt wird, wird ein neues Datum ins `outputLabel` geschrieben
    outputLabel.setText("" + new Date());
  }

  // highlight-end
}
```

### Erläuterung zum Code

- Die Komponenten sind im Klassen-Body initialisiert. Sie sind dadurch **Instanz-Variablen**, das heisst sie sind überall in der Klasse sichtbar und nicht nur in dem Codeblock, in welchem sie erzeugt wurden. Statt von Variablen spricht man bei Deklarationen an dieser Stelle von Attributen, Instanz-Variablen oder Felder.
- `implements ActionListener`: Dies bewirkt, dass die Klasse in der Lage ist, Meldungen zu verarbeiten. `JButtons` können zum Beispiel solche Meldungen verschicken. Unsere Klasse ist nun **gezwungen** die Methode `actionPerformed(ActionEvent e)` zu implementieren.
- In `showDialog()` wird die Methode `commandButton.addActionListener(this);` aufgerufen. Mit diesem Aufruf kann sich eine Klasse bei einem `JButton` **registrieren** und wird anschliessend immer benachrichtigt, wenn die Schaltfläche betätigt wurde. Mit dem Schlüsselwort `this` wird ausgesagt, dass sich die Klasse selbst als “Listener” (also Zuhörer) hinzufügt.
- Wird die Schaltfläche betätigt, so benachrichtigt der `JButton` die Klasse, indem er die Methode `actionPerformed(ActionEvent e)` aufruft. Der Parameter beim Aufruf ist vom Typ `ActionEvent`. Mit diesem Event kann über die Methode `getSource()` herausgefunden werden, welche Komponente den Aufruf ausgelöst hat. So kann mittels verschiedenen if-Abfragen entschieden werden, welcher `JButton` betätigt wurde. (Unten folgt ein Beispiel dazu.)
- Zudem zeigt das Beispiel wie Werte in Komponenten mit der Methode `setText(String message)` gesetzt werden.

## Feststellen, welcher Button gedrückt wurde

Falls ein Fenster mehrere Buttons hat, muss sich die Fensterklasse bei jedem Button registrieren, damit sie bei einem Klick benachrichtigt wird. Jedes Mal, wenn ein Button gedrückt wird, erfolgt ein Aufruf der Methode actionPerformed. In dieser Methode muss nun herausgefunden werden, wer
der Urheber des Aufrufs ist.

Dies lässt sich wie folgt feststellen:

```java title="Mehrere Buttons unterscheiden mit e.getSource()"
public class TimeButton extends JFrame implements ActionListener {
  private JButton commandButton = new JButton("show time");
  private JButton otherButton = new JButton("do something different");

  // ... nachvolgender Code ausgeblendet ...

  public void showDialog() {
    // ... vorausgehender Code ausgeblendet ...
    // highlight-start

    commandButton.addActionListener(this);
    otherButton.addActionListener(this);

    // highlight-end
    // ... nachvolgender Code ausgeblendet ...
  }

  @Override // dies signalisiert, dass wir die Methode definieren müssen!
  public void actionPerformed(ActionEvent e) {
    // highlight-start

    if (e.getSource() == commandButton) { //
      // wird ausgeführt, wenn der `commandButton` gedrückt wurde
    } else if (e.getSource() == otherButton) {
      // wird ausgeführt, wenn der `otherButton` gedrückt wurde
    }

    // highlight-end
  }

}
```
