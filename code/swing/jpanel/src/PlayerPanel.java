import java.awt.Color;

import javax.swing.BorderFactory;
import javax.swing.JPanel;

/**
 * PlayerPanel koordiniert und zeichnet RoundPanel's für einen Spieler. Die
 * Klasse dient nur zur Darstellung und beinhaltet keine Spiellogik.
 */
public class PlayerPanel extends JPanel {

	// private JPanel parentPanel = new JPanel();
	private RoundPanel currentRoundPanel;
	private int y = 1; // Vertikale verschiebung der Panels

	public PlayerPanel() {
		this.setLayout(null);
		this.setBorder(BorderFactory.createLineBorder(Color.black));
		this.setVisible(true);
	}

	/**
	 * Ermöglicht das Setzen eines Würfelwertes. Delegiert an das RoundPanel der
	 * aktiven Runde.
	 *
	 * @param index - Der index vom Wurf, startet bei 0
	 * @param value - Der Wert vom Wurf als int (1-6)
	 */
	public void setDiceValue(int index, int value) {
		if (this.currentRoundPanel == null) {
			return; // Schützt vor NullPointer!
		}
		// Hier werden die Werte delegiert, also weitergereicht
		this.currentRoundPanel.setDiceLabelValue(index, value);
	}

	/**
	 * Startet eine neue Runde. Erstellt ein neues RoundPanel und speichert es als
	 * aktives RoundPanel in der Instanz-Variable "currentRoundPanel". Sobald eine
	 * neue Runde gestartet wurde, kann auf die vorherigen Runden nicht mehr
	 * zugegriffen werden!
	 */
	public void startNewRound() {
		this.currentRoundPanel = new RoundPanel(); // neues Panel Objekt pro Runde
		// mit `this.getBounds().width` wird garantiert, dass das RoundPanel
		// gleich breit ist wie das PlayerPanel.
		this.currentRoundPanel.setBounds(1, y, this.getBounds().width - 2, 60);
		this.y += 61; // y-Position des nächsten Runden Panels
		this.add(currentRoundPanel); // zum parentPanel hinzufügen
		this.repaint(); // Alles neu zeichnen
	}
}
