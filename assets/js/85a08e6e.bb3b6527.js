"use strict";(self.webpackChunkbbzbl_modul_404=self.webpackChunkbbzbl_modul_404||[]).push([[660],{9923:function(n,e,a){a.r(e),a.d(e,{assets:function(){return o},contentTitle:function(){return s},default:function(){return c},frontMatter:function(){return l},metadata:function(){return r},toc:function(){return d}});var i=a(5893),t=a(1151);const l={sidebar_position:9},s="9. JPanel",r={id:"aufgaben-swing/jpanel",title:"9. JPanel",description:"F\xfcr diejenigen, die mit JPanels arbeiten wollen, dient folgendes",source:"@site/docs/aufgaben-swing/jpanel.md",sourceDirName:"aufgaben-swing",slug:"/aufgaben-swing/jpanel",permalink:"/bbzbl-modul-404/docs/aufgaben-swing/jpanel",draft:!1,unlisted:!1,editUrl:"https://github.com/codingluke/bbzbl-modul-404/tree/main/docs/aufgaben-swing/jpanel.md",tags:[],version:"current",sidebarPosition:9,frontMatter:{sidebar_position:9},sidebar:"tutorialSidebar",previous:{title:"8. Easy Dice Game",permalink:"/bbzbl-modul-404/docs/aufgaben-swing/dice-game"},next:{title:"10. PlayerPanel",permalink:"/bbzbl-modul-404/docs/aufgaben-swing/player-panel"}},o={},d=[{value:"Aufgabe",id:"aufgabe",level:2}];function u(n){const e={code:"code",h1:"h1",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.a)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h1,{id:"9-jpanel",children:"9. JPanel"}),"\n",(0,i.jsx)(e.p,{children:"F\xfcr diejenigen, die mit JPanels arbeiten wollen, dient folgendes\nBeispielprogramm als Inspiration."}),"\n",(0,i.jsxs)(e.p,{children:["Dadurch, dass wir alles mit ",(0,i.jsx)(e.code,{children:"setBounds"})," fix positionieren, ist es zusammen mit\nder Scrollbar nicht die sch\xf6nste Variante, aber zumindest eine Verbesserung. Die\nArbeit mit sogenannten Layouts w\xe4re hier sch\xf6ner, dies behandeln wir aber in\neinem Folgemodul."]}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.img,{src:a(4400).Z+"",width:"1186",height:"1004"})}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-java",metastring:'title="PanelFrame.java"',children:'package panelExample;\n\nimport java.awt.Dimension;\nimport java.awt.event.ActionEvent;\nimport java.awt.event.ActionListener;\n\nimport javax.swing.JButton;\nimport javax.swing.JFrame;\nimport javax.swing.JPanel;\nimport javax.swing.JScrollPane;\n\npublic class PanelFrame extends JFrame implements ActionListener {\n\n  private JButton btnNewRound = new JButton("new round");\n  private JPanel pnl1 = new JPanel(); //Panel, welches andere Panels aufnimmt\n  private JScrollPane scrollpane = new JScrollPane(pnl1,\n      JScrollPane.VERTICAL_SCROLLBAR_AS_NEEDED, JScrollPane.HORIZONTAL_SCROLLBAR_NEVER);\n\n  // W\xfcrde hier ein Array Sinn machen?\n  // Wie kann man alle Panels aller Runden speichern?\n  private RoundPanel panel = new RoundPanel();\n  // Wie l\xf6se ich es f\xfcr den Player zwei?\n\n  private int y = 0; // Vertikale verschiebung der Panels\n\n  // Ersetzt Starter.java f\xfcr dieses Beispiel\n  public static void main(String[] args) {\n    new PanelFrame();\n  }\n\n  public PanelFrame() {\n    this.setLayout(null); // fixe Positionierungen\n    pnl1.setLayout(null);\n    pnl1.setPreferredSize(new Dimension(350, 1000)); //PreferredSize f\xfcr scrollbar\n\n    scrollpane.setBounds(10, 10, 400, 350);\n    this.add(scrollpane);\n\n    btnNewRound.setBounds(170, 370, 100, 30);\n    this.add(btnNewRound);\n    this.btnNewRound.addActionListener(this);\n\n    this.setSize(450, 450);\n    this.setDefaultCloseOperation(EXIT_ON_CLOSE);\n    this.setVisible(true);\n  }\n\n  @Override\n  public void actionPerformed(ActionEvent e) {\n    if (e.getSource() == this.btnNewRound) {\n      // `this.` darf auch weggelassen werden\n      this.panel = new RoundPanel()   // neues Panel Objekt pro Runde\n      this.panel.setBounds(0, y, 350, 60);\n      this.y += 61;                   // y-Position des n\xe4chsten Runden Panels\n      this.pnl1.add(panel);           // zum scrollbaren Panel hinzuf\xfcgen\n      this.repaint();                 // Alles neu zeichnen\n    }\n  }\n}\n'})}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-java",metastring:'title="RoundPanel.java"',children:'package panelExample;\n\nimport java.awt.Color;\n\nimport javax.swing.JLabel;\nimport javax.swing.JPanel;\n\npublic class RoundPanel extends JPanel {\n\n  // K\xf6nnte man hier auch einen Array machen?\n  // Was w\xfcrde ein Array f\xfcr Vorteile bringen?\n  private JLabel lbl1 = new JLabel("6");\n  private JLabel lbl2 = new JLabel("2");\n  private JLabel lbl3 = new JLabel("4");\n  private JLabel lbl4 = new JLabel("4");\n  private JLabel lbl5 = new JLabel("2");\n\n  public RoundPanel() {\n    this.setLayout(null);\n\n    lbl1.setBounds(10, 10, 30, 30);\n    lbl2.setBounds(40, 10, 30, 30);\n    lbl3.setBounds(70, 10, 30, 30);\n    lbl4.setBounds(100, 10, 30, 30);\n    lbl5.setBounds(130, 10, 30, 30);\n\n    add(lbl1);\n    add(lbl2);\n    add(lbl3);\n    add(lbl4);\n    add(lbl5);\n    this.setBackground(Color.LIGHT_GRAY);\n  }\n\n  // Was fehlt, damit die einzelnen Labels von aussen ge\xe4ndert werden k\xf6nnen?\n}\n'})}),"\n",(0,i.jsx)(e.h2,{id:"aufgabe",children:"Aufgabe"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"Schreiben Sie den oben bestehenden Code ab, sodass das Bild oben\nreproduzierbar ist."}),"\n",(0,i.jsxs)(e.li,{children:["Versuchen Sie die einzuelnen Label ",(0,i.jsx)(e.strong,{children:"im nachhinein"})," zu \xe4ndern"]}),"\n",(0,i.jsxs)(e.li,{children:["Versuchen Sie einen Button ",(0,i.jsx)(e.code,{children:"diceButton"})," hinzuzuf\xfcgen, welcher w\xfcrfelt und das\nResultat in das entsprechende ",(0,i.jsx)(e.code,{children:"RoundPanel"})," ",(0,i.jsx)(e.code,{children:"label"})," schreibt"]}),"\n",(0,i.jsxs)(e.li,{children:["Nach 5 ",(0,i.jsx)(e.code,{children:"w\xfcrfen"})," soll ein neues ",(0,i.jsx)(e.code,{children:"RoundPanel"})," erstellt werden."]}),"\n"]})]})}function c(n={}){const{wrapper:e}={...(0,t.a)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(u,{...n})}):u(n)}},4400:function(n,e,a){e.Z=a.p+"assets/images/JPanel-2cbc34227336a1ad19e397bf0241299b.png"},1151:function(n,e,a){a.d(e,{Z:function(){return r},a:function(){return s}});var i=a(7294);const t={},l=i.createContext(t);function s(n){const e=i.useContext(l);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function r(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:s(n.components),i.createElement(l.Provider,{value:e},n.children)}}}]);