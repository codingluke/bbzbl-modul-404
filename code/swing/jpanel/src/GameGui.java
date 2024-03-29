import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

import javax.swing.JButton;
import javax.swing.JFrame;

/**
 * Das GameGui ist die Hauptklasse. Sie zeichnet das Spiel-Fenseter.
 * 
 * Es werden zwei `PlayerPanel`'s erstellt. Momentan wird nur das PlayerPanel
 * vom Spieler 1 aktiv verwendet! Auch werden immer automatisch 5 Würfe gemacht.
 * Versuchen Sie nun darauf aufbauend das GUI zu erweitern und auch die
 * Spiellogik zu erstellen.
 */
public class GameGui extends JFrame implements ActionListener {

	private PlayerPanel player1Panel = new PlayerPanel();
	private PlayerPanel player2Panel = new PlayerPanel();

	private JButton newRoundButton = new JButton("new round");
	private JButton diceButton = new JButton("dice 5 times");

	public GameGui() {
		this.setLayout(null);

		player1Panel.setBounds(10, 10, 350, 367);
		this.add(player1Panel);

		player2Panel.setBounds(400, 10, 350, 367);
		this.add(player2Panel);

		newRoundButton.setBounds(10, 410, 100, 30);
		this.add(newRoundButton);
		this.newRoundButton.addActionListener(this);

		diceButton.setBounds(120, 410, 140, 30);
		this.add(diceButton);
		this.diceButton.addActionListener(this);

		this.setSize(800, 550);
		this.setDefaultCloseOperation(EXIT_ON_CLOSE);
		this.setVisible(true);
	}

	@Override
	public void actionPerformed(ActionEvent e) {
		if (e.getSource() == this.newRoundButton) {
			// hier wird nur ein Spieler beachtet
			// natürlich sollte das Spiel mit 2 Spieler gehen
			this.player1Panel.startNewRound();
		} else if (e.getSource() == this.diceButton) {
			// 5 mal würfeln hintereinander,
			// Natürlich muss dass dan schritt für schritt passieren
			// und auch abgebrochen werden können
			int total = 0;
			for (int i = 0; i < 5; i++) {
				int rand = (int) (Math.random() * 6 + 1);
				this.player1Panel.setDiceValue(i, rand);
				total += rand;
			}
			this.player1Panel.setTotal(total);
			
		}
	}

}
