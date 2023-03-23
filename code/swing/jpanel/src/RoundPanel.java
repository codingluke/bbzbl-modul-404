import java.awt.Color;

import javax.swing.JLabel;
import javax.swing.JPanel;

public class RoundPanel extends JPanel {

	private JLabel[] labels = new JLabel[5];

	public RoundPanel() {
		this.setLayout(null);

		for (int i = 0; i < labels.length; i++) {
			labels[i] = new JLabel();
			labels[i].setBounds(10 + (i * 30), 10, 30, 30);
			add(labels[i]);
		}

		this.setBackground(Color.LIGHT_GRAY);
	}

	public void setLabelText(int index, String value) {
		labels[index].setText(value);
	}

}
