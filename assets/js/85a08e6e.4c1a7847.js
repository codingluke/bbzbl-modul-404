"use strict";(self.webpackChunkbbzbl_modul_404=self.webpackChunkbbzbl_modul_404||[]).push([[660],{3905:(e,n,a)=>{a.d(n,{Zo:()=>d,kt:()=>b});var t=a(7294);function r(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function l(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function i(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?l(Object(a),!0).forEach((function(n){r(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function s(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},l=Object.keys(e);for(t=0;t<l.length;t++)a=l[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)a=l[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=t.createContext({}),u=function(e){var n=t.useContext(o),a=n;return e&&(a="function"==typeof e?e(n):i(i({},n),e)),a},d=function(e){var n=u(e.components);return t.createElement(o.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},c=t.forwardRef((function(e,n){var a=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=u(a),b=r,m=c["".concat(o,".").concat(b)]||c[b]||p[b]||l;return a?t.createElement(m,i(i({ref:n},d),{},{components:a})):t.createElement(m,i({ref:n},d))}));function b(e,n){var a=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=c;var s={};for(var o in n)hasOwnProperty.call(n,o)&&(s[o]=n[o]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var u=2;u<l;u++)i[u]=a[u];return t.createElement.apply(null,i)}return t.createElement.apply(null,a)}c.displayName="MDXCreateElement"},3018:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>o,contentTitle:()=>i,default:()=>p,frontMatter:()=>l,metadata:()=>s,toc:()=>u});var t=a(7462),r=(a(7294),a(3905));const l={sidebar_position:9},i="9. JPanel",s={unversionedId:"aufgaben-swing/jpanel",id:"aufgaben-swing/jpanel",title:"9. JPanel",description:"F\xfcr diejenigen, die mit JPanels arbeiten wollen, dient folgendes Beispielprogramm als Inspiration.",source:"@site/docs/aufgaben-swing/jpanel.md",sourceDirName:"aufgaben-swing",slug:"/aufgaben-swing/jpanel",permalink:"/bbzbl-modul-404/docs/aufgaben-swing/jpanel",draft:!1,editUrl:"https://github.com/codingluke/bbzbl-modul-404/tree/main/docs/aufgaben-swing/jpanel.md",tags:[],version:"current",sidebarPosition:9,frontMatter:{sidebar_position:9},sidebar:"tutorialSidebar",previous:{title:"8. Easy Dice Game",permalink:"/bbzbl-modul-404/docs/aufgaben-swing/dice-game"},next:{title:"10. PlayerPanel",permalink:"/bbzbl-modul-404/docs/aufgaben-swing/player-panel"}},o={},u=[{value:"Aufgabe",id:"aufgabe",level:2}],d={toc:u};function p(e){let{components:n,...l}=e;return(0,r.kt)("wrapper",(0,t.Z)({},d,l,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"9-jpanel"},"9. JPanel"),(0,r.kt)("p",null,"F\xfcr diejenigen, die mit JPanels arbeiten wollen, dient folgendes Beispielprogramm als Inspiration."),(0,r.kt)("p",null,"Dadurch, dass wir alles mit ",(0,r.kt)("inlineCode",{parentName:"p"},"setBounds")," fix positionieren, ist es zusammen mit der Scrollbar nicht die sch\xf6nste Variante, aber zumindest eine Verbesserung. Die Arbeit mit sogenannten Layouts w\xe4re hier sch\xf6ner, dies behandeln wir aber in einem Folgemodul."),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(2957).Z,width:"1186",height:"1004"})),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="PanelFrame.java"',title:'"PanelFrame.java"'},'package panelExample;\n\nimport java.awt.Dimension;\nimport java.awt.event.ActionEvent;\nimport java.awt.event.ActionListener;\n\nimport javax.swing.JButton;\nimport javax.swing.JFrame;\nimport javax.swing.JPanel;\nimport javax.swing.JScrollPane;\n\npublic class PanelFrame extends JFrame implements ActionListener {\n\n  private JButton btnNewRound = new JButton("new round");\n  private JPanel pnl1 = new JPanel(); //Panel, welches andere Panels aufnimmt\n  private JScrollPane scrollpane = new JScrollPane(pnl1,\n      JScrollPane.VERTICAL_SCROLLBAR_AS_NEEDED, JScrollPane.HORIZONTAL_SCROLLBAR_NEVER);\n\n  // W\xfcrde hier ein Array Sinn machen?\n  // Wie kann man alle Panels aller Runden speichern?\n  private RoundPanel panel = new RoundPanel();\n  // Wie l\xf6se ich es f\xfcr den Player zwei?\n\n  private int y = 0; // Vertikale verschiebung der Panels\n\n  // Ersetzt Starter.java f\xfcr dieses Beispiel\n  public static void main(String[] args) {\n    new PanelFrame();\n  }\n\n  public PanelFrame() {\n    this.setLayout(null); // fixe Positionierungen\n    pnl1.setLayout(null);\n    pnl1.setPreferredSize(new Dimension(350, 1000)); //PreferredSize f\xfcr scrollbar\n\n    scrollpane.setBounds(10, 10, 400, 350);\n    this.add(scrollpane);\n\n    btnNewRound.setBounds(170, 370, 100, 30);\n    this.add(btnNewRound);\n    this.btnNewRound.addActionListener(this);\n\n    this.setSize(450, 450);\n    this.setDefaultCloseOperation(EXIT_ON_CLOSE);\n    this.setVisible(true);\n  }\n\n  @Override\n  public void actionPerformed(ActionEvent e) {\n    if (e.getSource() == this.btnNewRound) {\n      // `this.` darf auch weggelassen werden\n      this.panel = new RoundPanel()   // neues Panel Objekt pro Runde\n      this.panel.setBounds(0, y, 350, 60);\n      this.y += 61;                   // y-Position des n\xe4chsten Runden Panels\n      this.pnl1.add(panel);           // zum scrollbaren Panel hinzuf\xfcgen\n      this.repaint();                 // Alles neu zeichnen\n    }\n  }\n}\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="RoundPanel.java"',title:'"RoundPanel.java"'},'package panelExample;\n\nimport java.awt.Color;\n\nimport javax.swing.JLabel;\nimport javax.swing.JPanel;\n\npublic class RoundPanel extends JPanel {\n\n  // K\xf6nnte man hier auch einen Array machen?\n  // Was w\xfcrde ein Array f\xfcr Vorteile bringen?\n  private JLabel lbl1 = new JLabel("6");\n  private JLabel lbl2 = new JLabel("2");\n  private JLabel lbl3 = new JLabel("4");\n  private JLabel lbl4 = new JLabel("4");\n  private JLabel lbl5 = new JLabel("2");\n\n  public RoundPanel() {\n    this.setLayout(null);\n\n    lbl1.setBounds(10, 10, 30, 30);\n    lbl2.setBounds(40, 10, 30, 30);\n    lbl3.setBounds(70, 10, 30, 30);\n    lbl4.setBounds(100, 10, 30, 30);\n    lbl5.setBounds(130, 10, 30, 30);\n\n    add(lbl1);\n    add(lbl2);\n    add(lbl3);\n    add(lbl4);\n    add(lbl5);\n    this.setBackground(Color.LIGHT_GRAY);\n  }\n\n  // Was fehlt, damit die einzelnen Labels von aussen ge\xe4ndert werden k\xf6nnen?\n}\n')),(0,r.kt)("h2",{id:"aufgabe"},"Aufgabe"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Schreiben Sie den oben bestehenden Code ab, sodass das Bild oben reproduzierbar ist."),(0,r.kt)("li",{parentName:"ul"},"Versuchen Sie die einzuelnen Label ",(0,r.kt)("strong",{parentName:"li"},"im nachhinein")," zu \xe4ndern"),(0,r.kt)("li",{parentName:"ul"},"Versuchen Sie einen Button ",(0,r.kt)("inlineCode",{parentName:"li"},"diceButton")," hinzuzuf\xfcgen, welcher w\xfcrfelt und das Resultat in das entsprechende ",(0,r.kt)("inlineCode",{parentName:"li"},"RoundPanel")," ",(0,r.kt)("inlineCode",{parentName:"li"},"label")," schreibt"),(0,r.kt)("li",{parentName:"ul"},"Nach 5 ",(0,r.kt)("inlineCode",{parentName:"li"},"w\xfcrfen")," soll ein neues ",(0,r.kt)("inlineCode",{parentName:"li"},"RoundPanel")," erstellt werden.")))}p.isMDXComponent=!0},2957:(e,n,a)=>{a.d(n,{Z:()=>t});const t=a.p+"assets/images/JPanel-2cbc34227336a1ad19e397bf0241299b.png"}}]);