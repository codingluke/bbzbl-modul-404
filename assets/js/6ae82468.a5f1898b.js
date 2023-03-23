"use strict";(self.webpackChunkbbzbl_modul_404=self.webpackChunkbbzbl_modul_404||[]).push([[2344],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>m});var a=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=a.createContext({}),u=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},d=function(e){var n=u(e.components);return a.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},c=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),c=u(t),m=i,b=c["".concat(s,".").concat(m)]||c[m]||p[m]||r;return t?a.createElement(b,l(l({ref:n},d),{},{components:t})):a.createElement(b,l({ref:n},d))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,l=new Array(r);l[0]=c;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var u=2;u<r;u++)l[u]=t[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},1471:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>r,metadata:()=>o,toc:()=>u});var a=t(7462),i=(t(7294),t(3905));const r={sidebar_position:10},l="10. PlayerPanel",o={unversionedId:"aufgaben-swing/player-panel",id:"aufgaben-swing/player-panel",title:"10. PlayerPanel",description:"Hier gibt es nun noch ein JPanel Beispiel welches es durch folgende Methoden erm\xf6glicht von aussen die neue Runden zu erstellen und auch die W\xfcrfelwerte der aktuellen Runde zu setzen.",source:"@site/docs/aufgaben-swing/player-panel.md",sourceDirName:"aufgaben-swing",slug:"/aufgaben-swing/player-panel",permalink:"/bbzbl-modul-404/docs/aufgaben-swing/player-panel",draft:!1,editUrl:"https://github.com/codingluke/bbzbl-modul-404/tree/main/docs/aufgaben-swing/player-panel.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10},sidebar:"tutorialSidebar",previous:{title:"9. JPanel",permalink:"/bbzbl-modul-404/docs/aufgaben-swing/jpanel"},next:{title:"\ud83e\uddb8 Zusatzaufgaben",permalink:"/bbzbl-modul-404/docs/aufgaben-swing/zusatz"}},s={},u=[{value:"Aufgabe",id:"aufgabe",level:2}],d={toc:u};function p(e){let{components:n,...r}=e;return(0,i.kt)("wrapper",(0,a.Z)({},d,r,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"10-playerpanel"},"10. PlayerPanel"),(0,i.kt)("p",null,"Hier gibt es nun noch ein JPanel Beispiel welches es durch folgende Methoden erm\xf6glicht von aussen die neue Runden zu erstellen und auch die W\xfcrfelwerte der aktuellen Runde zu setzen. "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"playerPanel.startNewRound()")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"playerPanel.setDiceValue(index, value)"))),(0,i.kt)("p",null,"So ist es m\xf6glich f\xfcr zwei Spieler ",(0,i.kt)("u",null,"je eine eigene Instanz")," der gleichen Klasse ",(0,i.kt)("inlineCode",{parentName:"p"},"PlayerPanel")," zu erstellen. Dies erm\xf6glicht die Darstellung der Runden und den Punkteverlauf."),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("mdxAdmonitionTitle",{parentName:"admonition"},(0,i.kt)("inlineCode",{parentName:"mdxAdmonitionTitle"},"JPanel")," wie ",(0,i.kt)("inlineCode",{parentName:"mdxAdmonitionTitle"},"<div></div>")," in HTML"),(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},"Ein ",(0,i.kt)("inlineCode",{parentName:"li"},"JPanel")," ist ein Container, der Swing Componenten Gruppieren kann. "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"JPanel"),"'s k\xf6nnen beliebig geschachtelt werden."),(0,i.kt)("li",{parentName:"ul"},"Sie entsprechen damit dem ",(0,i.kt)("inlineCode",{parentName:"li"},"<div></div>")," Tag in HTML."))),(0,i.kt)("p",null,(0,i.kt)("img",{src:t(4565).Z,width:"1158",height:"758"})),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="Starter.java"',title:'"Starter.java"'},"public class Starter {\n\n  public static void main(String[] args) {\n    new GameGui();\n  }\n\n}\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="GameGui.java"',title:'"GameGui.java"'},'import java.awt.event.ActionEvent;\nimport java.awt.event.ActionListener;\n\nimport javax.swing.JButton;\nimport javax.swing.JFrame;\n\npublic class GameGui extends JFrame implements ActionListener {\n    \n    private PlayerPanel player1Panel = new PlayerPanel();\n    private PlayerPanel player2Panel = new PlayerPanel();\n    \n    private JButton newRoundButton = new JButton("new round");\n    private JButton diceButton = new JButton("dice 5 times");\n\n    public GameGui() {\n        this.setLayout(null); // fixe Positionierungen\n        \n        player1Panel.setBounds(10, 10, 450, 400);\n        this.add(player1Panel);\n        \n        player2Panel.setBounds(500, 10, 450, 400);\n        this.add(player2Panel);\n        \n        newRoundButton.setBounds(10, 410, 100, 30);\n        this.add(newRoundButton);\n        this.newRoundButton.addActionListener(this);\n\n        diceButton.setBounds(120, 410, 140, 30);\n        this.add(diceButton);\n        this.diceButton.addActionListener(this);\n        \n        this.setSize(1000, 600);\n        this.setDefaultCloseOperation(EXIT_ON_CLOSE);\n        this.setVisible(true);\n    }\n\n    @Override\n    public void actionPerformed(ActionEvent e) {\n        if (e.getSource() == this.newRoundButton) {\n            // hier wird nur ein Spieler beachtet\n            // nat\xfcrlich sollte das Spiel mit 2 Spieler gehen\n            this.player1Panel.startNewRound();\n        } else if (e.getSource() == this.diceButton) {\n            // 5 mal w\xfcrfeln hintereinander,\n            // Nat\xfcrlich muss dass dan schritt f\xfcr schritt passieren \n            // und auch abgebrochen werden k\xf6nnen\n            for (int i = 0; i < 5; i++) {\n                int rand = (int) (Math.random() * 6 + 1);\n                this.player1Panel.setDiceValue(i, rand);\n            }\n        }\n    }\n    \n}\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="PlayerPanel.java"',title:'"PlayerPanel.java"'},'import java.awt.Color;\n\nimport javax.swing.BorderFactory;\nimport javax.swing.JPanel;\n\npublic class PlayerPanel extends JPanel {\n\n    private JPanel parentPanel = new JPanel();\n    private RoundPanel currentRoundPanel;\n    private int y = 1; // Vertikale verschiebung der Panels\n\n    public PlayerPanel() {\n        this.setLayout(null); // fixe Positionierungen\n        parentPanel.setLayout(null);\n        parentPanel.setBorder(BorderFactory.createLineBorder(Color.black));\n        parentPanel.setBounds(10, 10, 400, 367);\n        this.add(parentPanel);\n\n        this.setSize(450, 450);\n        this.setVisible(true);\n    }\n\n    public void setDiceValue(int index, int value) {\n        if (this.currentRoundPanel == null) {\n            return; // Sch\xfctzt vor nullpointer!\n        }\n        this.currentRoundPanel.setLabelText(index, "" + value);\n    }\n\n    public void startNewRound() {\n        // `this.` darf auch weggelassen werden\n        this.currentRoundPanel = new RoundPanel(); // neues Panel Objekt pro Runde\n        this.currentRoundPanel.setBounds(1, y, 398, 60);\n        this.y += 61; // y-Position des n\xe4chsten Runden Panels\n        this.parentPanel.add(currentRoundPanel); // zum scrollbaren Panel hinzuf\xfcgen\n        this.repaint(); // Alles neu zeichnen\n    }\n}\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="RoundPanel.java"',title:'"RoundPanel.java"'},"import java.awt.Color;\n\nimport javax.swing.JLabel;\nimport javax.swing.JPanel;\n\npublic class RoundPanel extends JPanel {\n\n    private JLabel[] labels = new JLabel[5];\n\n    public RoundPanel() {\n        this.setLayout(null);\n\n        for (int i = 0; i < labels.length; i++) {\n            labels[i] = new JLabel();\n            labels[i].setBounds(10 + (i * 30), 10, 30, 30);\n            add(labels[i]);\n        }\n\n        this.setBackground(Color.LIGHT_GRAY);\n    }\n\n    public void setLabelText(int index, String value) {\n        labels[index].setText(value);\n    }\n\n}\n")),(0,i.kt)("h2",{id:"aufgabe"},"Aufgabe"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Schreiben Sie den oben bestehenden Code ab, sodass das Bild oben reproduzierbar ist."),(0,i.kt)("li",{parentName:"ul"},"Dies darf als Grundlage f\xfcrs Projekt genommen werden!"),(0,i.kt)("li",{parentName:"ul"},"Lesen Sie den ",(0,i.kt)("a",{parentName:"li",href:"/bbzbl-modul-404/docs/beurteilungen/lb2"},"Projektbeschrieb")," gut durch und erg\xe4nzen Sie das Spiel."),(0,i.kt)("li",{parentName:"ul"},"Schauen Sie dass die Logik in einer eigenen Klasse geschrieben wird!")))}p.isMDXComponent=!0},4565:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/playerpanel-0d45f72d58729ca06bfe2aefed5adcfc.png"}}]);