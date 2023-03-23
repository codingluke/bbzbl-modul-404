"use strict";(self.webpackChunkbbzbl_modul_404=self.webpackChunkbbzbl_modul_404||[]).push([[2344],{3905:(e,n,t)=>{t.d(n,{Zo:()=>o,kt:()=>m});var a=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=a.createContext({}),d=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},o=function(e){var n=d(e.components);return a.createElement(s.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},p=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,o=u(e,["components","mdxType","originalType","parentName"]),p=d(t),m=i,b=p["".concat(s,".").concat(m)]||p[m]||c[m]||r;return t?a.createElement(b,l(l({ref:n},o),{},{components:t})):a.createElement(b,l({ref:n},o))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,l=new Array(r);l[0]=p;var u={};for(var s in n)hasOwnProperty.call(n,s)&&(u[s]=n[s]);u.originalType=e,u.mdxType="string"==typeof e?e:i,l[1]=u;for(var d=2;d<r;d++)l[d]=t[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},1471:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>r,metadata:()=>u,toc:()=>d});var a=t(7462),i=(t(7294),t(3905));const r={sidebar_position:10},l="10. PlayerPanel",u={unversionedId:"aufgaben-swing/player-panel",id:"aufgaben-swing/player-panel",title:"10. PlayerPanel",description:"Hier gibt es nun noch ein JPanel Beispiel welches es durch folgende Methoden erm\xf6glicht von aussen die neue Runden zu erstellen und auch die W\xfcrfelwerte der aktuellen Runde zu setzen.",source:"@site/docs/aufgaben-swing/player-panel.md",sourceDirName:"aufgaben-swing",slug:"/aufgaben-swing/player-panel",permalink:"/bbzbl-modul-404/docs/aufgaben-swing/player-panel",draft:!1,editUrl:"https://github.com/codingluke/bbzbl-modul-404/tree/main/docs/aufgaben-swing/player-panel.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10},sidebar:"tutorialSidebar",previous:{title:"9. JPanel",permalink:"/bbzbl-modul-404/docs/aufgaben-swing/jpanel"},next:{title:"\ud83e\uddb8 Zusatzaufgaben",permalink:"/bbzbl-modul-404/docs/aufgaben-swing/zusatz"}},s={},d=[{value:"Darstellung",id:"darstellung",level:2},{value:"UML",id:"uml",level:2},{value:"Java Code",id:"java-code",level:2},{value:"Aufgabe",id:"aufgabe",level:2}],o={toc:d};function c(e){let{components:n,...r}=e;return(0,i.kt)("wrapper",(0,a.Z)({},o,r,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"10-playerpanel"},"10. PlayerPanel"),(0,i.kt)("p",null,"Hier gibt es nun noch ein JPanel Beispiel welches es durch folgende Methoden erm\xf6glicht von aussen die neue Runden zu erstellen und auch die W\xfcrfelwerte der aktuellen Runde zu setzen. "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"playerPanel.startNewRound()")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"playerPanel.setDiceValue(index, value)"))),(0,i.kt)("p",null,"So ist es m\xf6glich f\xfcr zwei Spieler ",(0,i.kt)("u",null,"je eine eigene Instanz")," der gleichen Klasse ",(0,i.kt)("inlineCode",{parentName:"p"},"PlayerPanel")," zu erstellen. Dies erm\xf6glicht die Darstellung der Runden und den Punkteverlauf."),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("mdxAdmonitionTitle",{parentName:"admonition"},(0,i.kt)("inlineCode",{parentName:"mdxAdmonitionTitle"},"JPanel")," wie ",(0,i.kt)("inlineCode",{parentName:"mdxAdmonitionTitle"},"<div></div>")," in HTML"),(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},"Ein ",(0,i.kt)("inlineCode",{parentName:"li"},"JPanel")," ist ein Container, der Swing Componenten Gruppieren kann. "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"JPanel"),"'s k\xf6nnen beliebig geschachtelt werden."),(0,i.kt)("li",{parentName:"ul"},"Sie entsprechen damit dem ",(0,i.kt)("inlineCode",{parentName:"li"},"<div></div>")," Tag in HTML."))),(0,i.kt)("h2",{id:"darstellung"},"Darstellung"),(0,i.kt)("p",null,(0,i.kt)("img",{src:t(4565).Z,width:"1158",height:"758"})),(0,i.kt)("h2",{id:"uml"},"UML"),(0,i.kt)("mermaid",{value:"classDiagram\n    direction LR\n    class Starter {\n      +main(args: String[])$\n    }\n\n    class GameGui {\n        -PlayerPanel player1Panel\n        -PlayerPanel player2Panel\n        -JButton newRoundButton\n        -JButton diceButton\n        +GameGui()\n        +actionPerformed(action: ActionEvent)\n    }\n\n    class PlayerPanel {\n       -RoundPanel currentRoundPanel\n       -int y\n       +PlayerPanel()\n       +setDiceValue(int index, int value)\n       +startNewRound()\n    }\n\n    class RoundPanel {\n        -JLabel[] diceLabels\n        +RoundPanel()\n        +setDiceLabelValue(int index, int value)\n    }\n\n    Starter ..> GameGui : new GameGui()\n    GameGui ..> PlayerPanel: new PlayerPanel()\n    PlayerPanel ..> RoundPanel: new RoundPanel()\n    GameGui --|> JFrame : extends\n    GameGui ..|> ActionListener : implements\n    PlayerPanel --|> JPanel: extends\n    RoundPanel --|> JPanel: extends"}),(0,i.kt)("h2",{id:"java-code"},"Java Code"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="Starter.java"',title:'"Starter.java"'},"public class Starter {\n\n  public static void main(String[] args) {\n    new GameGui();\n  }\n\n}\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="GameGui.java"',title:'"GameGui.java"'},'import java.awt.event.ActionEvent;\nimport java.awt.event.ActionListener;\n\nimport javax.swing.JButton;\nimport javax.swing.JFrame;\n\n/**\n * Das GameGui ist die Hauptklasse. Sie zeichnet das Spiel-Fenseter.\n * \n * Es werden zwei `PlayerPanel`\'s erstellt. Momentan wird nur das PlayerPanel\n * vom Spieler 1 aktiv verwendet! Auch werden immer automatisch 5 W\xfcrfe gemacht.\n * Versuchen Sie nun darauf aufbauend das GUI zu erweitern und auch die\n * Spiellogik zu erstellen.\n */\npublic class GameGui extends JFrame implements ActionListener {\n\n    private PlayerPanel player1Panel = new PlayerPanel();\n    private PlayerPanel player2Panel = new PlayerPanel();\n\n    private JButton newRoundButton = new JButton("new round");\n    private JButton diceButton = new JButton("dice 5 times");\n\n    public GameGui() {\n        this.setLayout(null);\n\n        player1Panel.setBounds(10, 10, 350, 367);\n        this.add(player1Panel);\n\n        player2Panel.setBounds(400, 10, 350, 367);\n        this.add(player2Panel);\n\n        newRoundButton.setBounds(10, 410, 100, 30);\n        this.add(newRoundButton);\n        this.newRoundButton.addActionListener(this);\n\n        diceButton.setBounds(120, 410, 140, 30);\n        this.add(diceButton);\n        this.diceButton.addActionListener(this);\n\n        this.setSize(800, 550);\n        this.setDefaultCloseOperation(EXIT_ON_CLOSE);\n        this.setVisible(true);\n    }\n\n    @Override\n    public void actionPerformed(ActionEvent e) {\n        if (e.getSource() == this.newRoundButton) {\n            // hier wird nur ein Spieler beachtet\n            // nat\xfcrlich sollte das Spiel mit 2 Spieler gehen\n            this.player1Panel.startNewRound();\n        } else if (e.getSource() == this.diceButton) {\n            // 5 mal w\xfcrfeln hintereinander,\n            // Nat\xfcrlich muss dass dan schritt f\xfcr schritt passieren\n            // und auch abgebrochen werden k\xf6nnen\n            for (int i = 0; i < 5; i++) {\n                int rand = (int) (Math.random() * 6 + 1);\n                this.player1Panel.setDiceValue(i, rand);\n            }\n        }\n    }\n\n}\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="PlayerPanel.java"',title:'"PlayerPanel.java"'},'import java.awt.Color;\n\nimport javax.swing.BorderFactory;\nimport javax.swing.JPanel;\n\n/**\n * PlayerPanel koordiniert und zeichnet RoundPanel\'s f\xfcr einen Spieler. Die\n * Klasse dient nur zur Darstellung und beinhaltet keine Spiellogik.\n */\npublic class PlayerPanel extends JPanel {\n\n    // private JPanel parentPanel = new JPanel();\n    private RoundPanel currentRoundPanel;\n    private int y = 1; // Vertikale verschiebung der Panels\n\n    public PlayerPanel() {\n        this.setLayout(null);\n        this.setBorder(BorderFactory.createLineBorder(Color.black));\n        this.setVisible(true);\n    }\n\n    /**\n     * Erm\xf6glicht das Setzen eines W\xfcrfelwertes. Delegiert an das RoundPanel der\n     * aktiven Runde.\n     *\n     * @param index - Der index vom Wurf, startet bei 0\n     * @param value - Der Wert vom Wurf als int (1-6)\n     */\n    public void setDiceValue(int index, int value) {\n        if (this.currentRoundPanel == null) {\n            return; // Sch\xfctzt vor NullPointer!\n        }\n        // Hier werden die Werte delegiert, also weitergereicht\n        this.currentRoundPanel.setDiceLabelValue(index, value);\n    }\n\n    /**\n     * Startet eine neue Runde. Erstellt ein neues RoundPanel und speichert es als\n     * aktives RoundPanel in der Instanz-Variable "currentRoundPanel". Sobald eine\n     * neue Runde gestartet wurde, kann auf die vorherigen Runden nicht mehr\n     * zugegriffen werden!\n     */\n    public void startNewRound() {\n        this.currentRoundPanel = new RoundPanel(); // neues Panel Objekt pro Runde\n        // mit `this.getBounds().width` wird garantiert, dass das RoundPanel\n        // gleich breit ist wie das PlayerPanel.\n        this.currentRoundPanel.setBounds(1, y, this.getBounds().width - 2, 60);\n        this.y += 61; // y-Position des n\xe4chsten Runden Panels\n        this.add(currentRoundPanel); // zum parentPanel hinzuf\xfcgen\n        this.repaint(); // Alles neu zeichnen\n    }\n}\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="RoundPanel.java"',title:'"RoundPanel.java"'},'import java.awt.Color;\n\nimport javax.swing.JLabel;\nimport javax.swing.JPanel;\n\n/**\n * Das RoundPanel dient dazu die f\xfcnf W\xfcrfe einer Runde nebeneinander\n * darzustellen. Die Werte der W\xfcrfe k\xf6nnen durch die Methode\n * `setDiceLabelValue` gesetzt werden.\n */\npublic class RoundPanel extends JPanel {\n\n    // Ein Array f\xfcr 5 W\xfcrfe!\n    private JLabel[] diceLabels = new JLabel[5];\n\n    // K\xf6nnte man hier noch Erg\xe4nzungen machen um auch das Total und die Rundensumme\n    // darzustellen? Es fehlt auch noch die Rundennummer.\n\n    public RoundPanel() {\n        this.setLayout(null);\n\n        for (int i = 0; i < diceLabels.length; i++) {\n            diceLabels[i] = new JLabel();\n            diceLabels[i].setBounds(10 + (i * 30), 10, 30, 30);\n            add(diceLabels[i]);\n        }\n\n        this.setBackground(Color.LIGHT_GRAY);\n    }\n\n    /**\n     * Erm\xf6glicht das Setzen eines W\xfcrfelwertes\n     * \n     * @param index - Der index vom Wurf startet bei 0\n     * @param value - Der Wert vom Wurf als int\n     **/\n    public void setDiceLabelValue(int index, int value) {\n        diceLabels[index].setText("" + value);\n    }\n\n}\n')),(0,i.kt)("h2",{id:"aufgabe"},"Aufgabe"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Schreiben Sie den oben bestehenden Code ab, sodass das Bild oben reproduzierbar ist."),(0,i.kt)("li",{parentName:"ul"},"Dies darf als Grundlage f\xfcrs Projekt genommen werden!"),(0,i.kt)("li",{parentName:"ul"},"Lesen Sie den ",(0,i.kt)("a",{parentName:"li",href:"/bbzbl-modul-404/docs/beurteilungen/lb2"},"Projektbeschrieb")," gut durch und erg\xe4nzen Sie das Spiel."),(0,i.kt)("li",{parentName:"ul"},"Schauen Sie dass die Logik in einer eigenen Klasse geschrieben wird!")))}c.isMDXComponent=!0},4565:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/playerpanel-0d45f72d58729ca06bfe2aefed5adcfc.png"}}]);