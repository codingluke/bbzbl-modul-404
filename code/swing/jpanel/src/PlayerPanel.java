import java.awt.Color;

import javax.swing.BorderFactory;
import javax.swing.JPanel;

public class PlayerPanel extends JPanel {

	private JPanel parentPanel = new JPanel();
	private RoundPanel currentRoundPanel;
	private int y = 1; // Vertikale verschiebung der Panels

	public PlayerPanel() {
		this.setLayout(null); // fixe Positionierungen
		parentPanel.setLayout(null);
		parentPanel.setBorder(BorderFactory.createLineBorder(Color.black));
		parentPanel.setBounds(10, 10, 400, 367);
		this.add(parentPanel);

		this.setSize(450, 450);
		this.setVisible(true);
	}

	public void setDiceValue(int index, int value) {
		if (this.currentRoundPanel == null) {
			return; // Schützt vor nullpointer!
		}
		this.currentRoundPanel.setLabelText(index, "" + value);
	}

	public void startNewRound() {
		// `this.` darf auch weggelassen werden
		this.currentRoundPanel = new RoundPanel(); // neues Panel Objekt pro Runde
		this.currentRoundPanel.setBounds(1, y, 398, 60);
		this.y += 61; // y-Position des nächsten Runden Panels
		this.parentPanel.add(currentRoundPanel); // zum scrollbaren Panel hinzufügen
		this.repaint(); // Alles neu zeichnen
	}
}
