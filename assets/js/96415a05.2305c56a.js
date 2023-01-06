"use strict";(self.webpackChunkbbzbl_modul_404=self.webpackChunkbbzbl_modul_404||[]).push([[9828],{3905:(e,t,n)=>{n.d(t,{Zo:()=>b,kt:()=>p});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},b=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,b=s(e,["components","mdxType","originalType","parentName"]),c=u(n),p=i,m=c["".concat(l,".").concat(p)]||c[p]||d[p]||a;return n?r.createElement(m,o(o({ref:t},b),{},{components:n})):r.createElement(m,o({ref:t},b))}));function p(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var u=2;u<a;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},4173:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>u});var r=n(7462),i=(n(7294),n(3905));const a={sidebar_position:4},o="4. JButton Aktivieren",s={unversionedId:"aufgaben-swing/buttons-aktivieren",id:"aufgaben-swing/buttons-aktivieren",title:"4. JButton Aktivieren",description:"Machen Sie sich mit dem Konzept des ActionListener bekannt bevor Sie weiterfahren!",source:"@site/docs/aufgaben-swing/buttons-aktivieren.md",sourceDirName:"aufgaben-swing",slug:"/aufgaben-swing/buttons-aktivieren",permalink:"/bbzbl-modul-404/docs/aufgaben-swing/buttons-aktivieren",draft:!1,editUrl:"https://github.com/codingluke/bbzbl-modul-404/tree/main/docs/aufgaben-swing/buttons-aktivieren.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"3. JFrame Komponenten",permalink:"/bbzbl-modul-404/docs/aufgaben-swing/komponenten"},next:{title:"5. Strings in Zahlen umwandeln",permalink:"/bbzbl-modul-404/docs/aufgaben-swing/strings-nach-int-umwandeln"}},l={},u=[{value:"Aufgabe 1: Einen Wert kopieren",id:"aufgabe-1-einen-wert-kopieren",level:2},{value:"Aufgabe 2: Mehrere Buttons auswerten",id:"aufgabe-2-mehrere-buttons-auswerten",level:2}],b={toc:u};function d(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,r.Z)({},b,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"4-jbutton-aktivieren"},"4. JButton Aktivieren"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"\u261d\ufe0f ",(0,i.kt)("strong",{parentName:"p"},"Machen Sie sich mit dem Konzept des ",(0,i.kt)("a",{parentName:"strong",href:"../konzepte/actionlistener"},"ActionListener")," bekannt bevor Sie weiterfahren!"))),(0,i.kt)("h2",{id:"aufgabe-1-einen-wert-kopieren"},"Aufgabe 1: Einen Wert kopieren"),(0,i.kt)("p",null,"Erstellen Sie das Programm unten. Das Ziel ist, dass bei Anklicken der Schaltfl\xe4che der Wert aus dem Textfeld in das Label unterhalb kopiert wird, w\xe4hrend das obere Textfeld geleert wird."),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(5838).Z,width:"906",height:"906"})),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Immer zuerste selber versuchen! L\xf6sung abtippen, nicht kopieren ;)"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'import java.awt.event.ActionEvent;\nimport java.awt.event.ActionListener;\nimport javax.swing.JButton;\nimport javax.swing.JFrame;\nimport javax.swing.JLabel;\nimport javax.swing.JTextField;\n\npublic class Aufgabe1 extends JFrame implements ActionListener {\n  private JTextField textfield = new JTextField();\n  private JLabel label = new JLabel("");\n  private JButton button = new JButton("copy JTextField > JLabel");\n\n  public void showDialog() {\n    setLayout(null);\n\n    textfield.setBounds(10, 10, 280, 30);\n    add(textfield);\n    label.setBounds(10, 60, 280, 30);\n    add(label);\n    button.setBounds(10, 110, 280, 30);\n    add(button);\n    button.addActionListener(this);\n\n    setDefaultCloseOperation(EXIT_ON_CLOSE);\n    setSize(300, 300);\n    setTitle("Buttons Aktivieren: Aufgabe1");\n    setVisible(true);\n  }\n\n  @Override\n  public void actionPerformed(ActionEvent e) {\n    String text = textfield.getText(); // Auslesen vom Textfeld\n    label.setText(text); // Kopieren vom Textfeld\n    textfield.setText(""); // leeren des Textfeldes\n  }\n}\n'))),(0,i.kt)("h2",{id:"aufgabe-2-mehrere-buttons-auswerten"},"Aufgabe 2: Mehrere Buttons auswerten"),(0,i.kt)("p",null,"Erstellen Sie das Programm unten. Das Ziel ist, dass bei Anklicken der Schaltfl\xe4che der Wert aus dem Textfeld in das Label unterhalb kopiert wird, w\xe4hrend das obere Textfeld geleert wird."),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(6567).Z,width:"906",height:"906"})),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Immer zuerste selber versuchen! L\xf6sung abtippen, nicht kopieren ;)"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'import java.awt.event.ActionEvent;\nimport java.awt.event.ActionListener;\nimport javax.swing.JButton;\nimport javax.swing.JFrame;\nimport javax.swing.JLabel;\nimport javax.swing.JTextField;\n\npublic class Aufgabe2 extends JFrame implements ActionListener {\n  private JLabel label = new JLabel("");\n  private JButton buttonA = new JButton("a");\n  private JButton buttonB = new JButton("b");\n  private JButton buttonC = new JButton("c");\n\n  public void showDialog() {\n    setLayout(null);\n\n    buttonA.setBounds(10, 10, 100, 30);\n    add(buttonA);\n    buttonA.addActionListener(this);\n    buttonB.setBounds(10, 50, 100, 30);\n    add(buttonB);\n    buttonB.addActionListener(this);\n    buttonC.setBounds(10, 90, 100, 30);\n    add(buttonC);\n    buttonC.addActionListener(this);\n    label.setBounds(10, 140, 100, 30);\n    add(label);\n\n    setDefaultCloseOperation(EXIT_ON_CLOSE);\n    setSize(300, 300);\n    setTitle("Buttons Aktivieren: Aufgabe2");\n    setVisible(true);\n  }\n\n  @Override\n  public void actionPerformed(ActionEvent e) {\n    // highlight-start\n\n    // Hier werden nun die einzelnen Buttons identifiziert!\n    if (e.getSource() == buttonA) {\n      label.setText(buttonA.getText());\n    } else if(e.getSource() == buttonB) {\n      label.setText(buttonB.getText());\n    } else if(e.getSource() == buttonC) {\n      label.setText(buttonC.getText());\n    }\n\n    // highlight-end\n  }\n}\n'))))}d.isMDXComponent=!0},5838:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/Buttons-Aktivieren-Aufgabe1-d4c85c7ddfe53caca6bc57245275808f.png"},6567:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/Buttons-Aktivieren-Aufgabe2-88b3896886dd9640b0e8731ff7ff4a19.png"}}]);