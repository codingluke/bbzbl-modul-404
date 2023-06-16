import java.awt.Color;

import javax.swing.JLabel;
import javax.swing.JPanel;

/**
 * Das RoundPanel dient dazu die fünf Würfe einer Runde nebeneinander
 * darzustellen. Die Werte der Würfe können durch die Methode
 * `setDiceLabelValue` gesetzt werden.
 */
public class RoundPanel extends JPanel {

	// Ein Array für 5 Würfe!
	private JLabel[] diceLabels = new JLabel[5];
	private JLabel total = new JLabel("total");

	// Könnte man hier noch Ergänzungen machen um auch das Total und die Rundensumme
	// darzustellen? Es fehlt auch noch die Rundennummer.

	public RoundPanel() {
		this.setLayout(null);

		for (int i = 0; i < diceLabels.length; i++) {
			diceLabels[i] = new JLabel();
			diceLabels[i].setBounds(10 + (i * 30), 10, 30, 30);
			add(diceLabels[i]);
		}
		
		total.setBounds(190, 10, 30, 30);
		add(total);

		this.setBackground(Color.LIGHT_GRAY);
	}

	/**
	 * Ermöglicht das Setzen eines Würfelwertes
	 * 
	 * @param index - Der index vom Wurf startet bei 0
	 * @param value - Der Wert vom Wurf als int
	 **/
	public void setDiceLabelValue(int index, int value) {
		diceLabels[index].setText("" + value);
	}
	
	public void setTotal(int value) {
		total.setText("" + value);
	}
	
	

}
