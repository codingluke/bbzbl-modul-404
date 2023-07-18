"use strict";(self.webpackChunkbbzbl_modul_404=self.webpackChunkbbzbl_modul_404||[]).push([[2854],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>c});var i=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,i,a=function(e,n){if(null==e)return{};var t,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var o=i.createContext({}),d=function(e){var n=i.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},u=function(e){var n=d(e.components);return i.createElement(o.Provider,{value:n},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},g=i.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=d(t),g=a,c=m["".concat(o,".").concat(g)]||m[g]||p[g]||r;return t?i.createElement(c,s(s({ref:n},u),{},{components:t})):i.createElement(c,s({ref:n},u))}));function c(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,s=new Array(r);s[0]=g;var l={};for(var o in n)hasOwnProperty.call(n,o)&&(l[o]=n[o]);l.originalType=e,l[m]="string"==typeof e?e:a,s[1]=l;for(var d=2;d<r;d++)s[d]=t[d];return i.createElement.apply(null,s)}return i.createElement.apply(null,t)}g.displayName="MDXCreateElement"},2019:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>s,default:()=>p,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var i=t(7462),a=(t(7294),t(3905));const r={sidebar_position:2},s="2. Fenster (JFrame)",l={unversionedId:"aufgaben-swing/fenster",id:"aufgaben-swing/fenster",title:"2. Fenster (JFrame)",description:"Das folgende Beispiel zeigt die Vorkehrungen, die notwendig sind, um ein Fenster",source:"@site/docs/aufgaben-swing/fenster.md",sourceDirName:"aufgaben-swing",slug:"/aufgaben-swing/fenster",permalink:"/bbzbl-modul-404/docs/aufgaben-swing/fenster",draft:!1,editUrl:"https://github.com/codingluke/bbzbl-modul-404/tree/main/docs/aufgaben-swing/fenster.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"1. Einstieg in Swing",permalink:"/bbzbl-modul-404/docs/aufgaben-swing/einstieg-in-swing"},next:{title:"3. JFrame Komponenten",permalink:"/bbzbl-modul-404/docs/aufgaben-swing/komponenten"}},o={},d=[{value:"Starter.java",id:"starterjava",level:2},{value:"PureWindow.java",id:"purewindowjava",level:2},{value:"UML des ganzen Programms",id:"uml-des-ganzen-programms",level:2},{value:"Aufgabe - Programm starten",id:"aufgabe---programm-starten",level:2},{value:"Cheat Sheet",id:"cheat-sheet",level:2},{value:"UML",id:"uml",level:4}],u={toc:d},m="wrapper";function p(e){let{components:n,...r}=e;return(0,a.kt)(m,(0,i.Z)({},u,r,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"2-fenster-jframe"},"2. Fenster (JFrame)"),(0,a.kt)("p",null,"Das folgende Beispiel zeigt die Vorkehrungen, die notwendig sind, um ein Fenster\nanzuzeigen:"),(0,a.kt)("h2",{id:"starterjava"},"Starter.java"),(0,a.kt)("p",null,"In der ",(0,a.kt)("inlineCode",{parentName:"p"},"main"),"-Methode der Klasse ",(0,a.kt)("inlineCode",{parentName:"p"},"Starter")," wird ein Objekt der Klasse\n",(0,a.kt)("inlineCode",{parentName:"p"},"PureWindow")," erzeugt und in der Variable ",(0,a.kt)("inlineCode",{parentName:"p"},"pureWindow")," gespeichert. Die Variable\n",(0,a.kt)("inlineCode",{parentName:"p"},"pureWindow")," wird dann verwendet, um die Methode ",(0,a.kt)("inlineCode",{parentName:"p"},"showDialog()")," aufzurufen."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="Starter.java"',title:'"Starter.java"'},"public class Starter {\n\n  public static void main(String[] args) {\n    PureWindow pureWindow = new PureWindow(); // Ertellt ein `PureWindow` Objekt und speichert es in der Variable `pureWindow`\n    pureWindow.showDialog(); // F\xfchrt die Methode `showDialog()` aus\n  }\n\n}\n")),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"PureWindow")," ist die Klasse sowie der ",(0,a.kt)("inlineCode",{parentName:"li"},"Datentyp")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"pureWindow")," (klein) ist die Variable, die das Objekt beinhaltet."))),(0,a.kt)("h2",{id:"purewindowjava"},"PureWindow.java"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Die Klasse ",(0,a.kt)("inlineCode",{parentName:"li"},"PureWindow")," muss von der Klasse ",(0,a.kt)("inlineCode",{parentName:"li"},"JFrame")," alle F\xe4higkeiten\n\xfcbernehmen. Dies geschieht durch die Anweisung ",(0,a.kt)("inlineCode",{parentName:"li"},"extends JFrame"),". Damit wird\ndie Klasse ",(0,a.kt)("inlineCode",{parentName:"li"},"PureWindow")," zu einem ",(0,a.kt)("inlineCode",{parentName:"li"},"JFrame"),"."),(0,a.kt)("li",{parentName:"ul"},"Die Methode ",(0,a.kt)("inlineCode",{parentName:"li"},"showDialog()")," f\xfchrt die ",(0,a.kt)("strong",{parentName:"li"},"grundlegenden Konfigurationsschritte"),"\naus. Diese werden bei allen Fenstern ben\xf6tigt."),(0,a.kt)("li",{parentName:"ul"},"Die Methode ",(0,a.kt)("inlineCode",{parentName:"li"},"showDialog()")," muss \xfcber das Objekt ",(0,a.kt)("inlineCode",{parentName:"li"},"pureWindow")," aufgerufen\nwerden. ",(0,a.kt)("inlineCode",{parentName:"li"},"pureWindow.showDialog()"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="PureWindow.java"',title:'"PureWindow.java"'},'import javax.swing.JFrame;\n\npublic class PureWindow extends JFrame {\n\n  public void showDialog() { // Beliebiger Name, kann auch, "start" oder nur "show" heissen.\n    setLayout(null); // Deaktiviert Layout-Automatismen von Swing\n    setDefaultCloseOperation(EXIT_ON_CLOSE); // Beended beim Schliessen des Fensters ebenfalls den Prozess\n    setSize(300, 300); // Bestimmt die gr\xf6sse des Fensters\n    setTitle("Mein toller Titel"); // Setzt den Titel des Fensters\n    setVisible(true); // Muss am Ende stehen! Ohne das wird nichts angezeigt!\n  }\n\n}\n')),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Die Klasse haben wir ",(0,a.kt)("inlineCode",{parentName:"p"},"PureWindow"),' genannt. Deutsch heisst das soviel wie "reines\nFenster". Die Klasse kann beliebig benannt werden. ',(0,a.kt)("inlineCode",{parentName:"p"},"PureWindow")," eignet sich, da\nes sich um ein Beispiel f\xfcr das Grundger\xfcst handelt, ohne weiteren Inhalt.")),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"Lesen Sie auch die Kommentare im Code, l\xf6schen Sie die einzelnen Zeilen und\nschauen was passiert!")),(0,a.kt)("h2",{id:"uml-des-ganzen-programms"},"UML des ganzen Programms"),(0,a.kt)("mermaid",{value:"classDiagram\n  direction LR\n  class JFrame:::javaBuiltIn {\n   +add(comp : Component)\n   +setDefaultCloseOperation(operation : int)\n   +setLayout(manager : LayoutManager)\n   +setSize(width : int, height : int)\n   +setTitle(title : String)\n   +setVisible(isVisible : boolean)\n  }\n  class Starter {\n    +main(args: String[])$\n  }\n  class PureWindow {\n    +showDialog()\n  }\n\n  Starter ..> PureWindow : uses\n  PureWindow --|> JFrame : extends"}),(0,a.kt)("admonition",{title:"extends",type:"info"},(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("inlineCode",{parentName:"p"},"extends")," bedeutet, dass die Klasse von der der solide Pfeil mit\n",(0,a.kt)("strong",{parentName:"p"},"Dreieckspize")," (UML oben) ausgeht alle Methoden und Instanzvariablen der\nKlasse auf welche der Pfeil zeigt \xfcbernimmt/erbt/sich erweitert."),(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"Die Klasse ",(0,a.kt)("inlineCode",{parentName:"li"},"PureWindow")," erbt somit alle Methoden und Instanzvariablen der\nKlasse ",(0,a.kt)("inlineCode",{parentName:"li"},"JFrame"),"."),(0,a.kt)("li",{parentName:"ul"},"Die Signatur der Klasse PureWindow lautet ",(0,a.kt)("inlineCode",{parentName:"li"},"class PureWindow extends JFrame")))),(0,a.kt)("h2",{id:"aufgabe---programm-starten"},"Aufgabe - Programm starten"),(0,a.kt)("div",{class:"grid"},(0,a.kt)("div",null,(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Erstellt ein neues Java Project (z.B. SwingPureWindow)"),(0,a.kt)("li",{parentName:"ul"},"Kopiert den Code von Oben (",(0,a.kt)("inlineCode",{parentName:"li"},"Starter.java"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"PureWindow.java"),")"),(0,a.kt)("li",{parentName:"ul"},"Startet das Programm und geniesst den Blick auf ein Fenster \xe4hnlich dem Bild"),(0,a.kt)("li",{parentName:"ul"},"L\xf6scht einzelne Zeilen und analysiert den Effekt")),(0,a.kt)("admonition",{title:"Anstatt copy/paste den Text selber abtippen!",type:"tip"},(0,a.kt)("ol",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ol"},"Lernt Ihr so besser"),(0,a.kt)("li",{parentName:"ol"},"Merkt Ihr, dass der Editor vorschl\xe4ge macht!"),(0,a.kt)("li",{parentName:"ol"},'Erh\xe4lt Ihr ein besseres "Gef\xfchl" wie es ist zu programmieren \ud83e\uddb8')))),(0,a.kt)("div",null,(0,a.kt)("p",null,(0,a.kt)("img",{src:t(5277).Z,width:"906",height:"906"})))),(0,a.kt)("h2",{id:"cheat-sheet"},"Cheat Sheet"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'setLayout(null); // Standard Layout deaktivieren\nsetDefaultCloseOperation(EXIT_ON_CLOSE); // Beim schliessen des Fensters, das ganze Programm beenden\nsetSize(300, 300); // Gr\xf6sse vom Fenster festlegen\nsetTitle("Ich bin der Fenster Titel"); // Titel des Fensters festlegen\nsetVisible(true); // Fenster sichtbar machen\n\nJLabel label = new JLabel("Beschriftung"); // Ein Label\nlabel.setBounds(x, y, width, height); // Bestimmen wo sich das Label befindet\nadd(label); // Label hinzuf\xfcgen\n\nJTextField textfield = new JTextField(); // Ein Textfeld\ntextfield.setBounds(x, y, width, height); // Bestimmen wo sich das Textfeld befindet\nadd(textfield); // Textfeld hinzuf\xfcgen\n\nJButton button = new JButton("press me"); // Ein Button\nbutton.setBounds(x, y, width, height); // Bestimmen wo sich der Button befindet\nadd(button); // Textfeld hinzuf\xfcgen\n')),(0,a.kt)("h4",{id:"uml"},"UML"),(0,a.kt)("mermaid",{value:"classDiagram\n  direction LR\n  class JFrame {\n    +add(comp : Component)\n    +setDefaultCloseOperation(operation : int)\n    +setLayout(manager : LayoutManager)\n    +setSize(width : int, height : int)\n    +setTitle(title : String)\n    +setVisible(isVisible : boolean)\n  }"}))}p.isMDXComponent=!0},5277:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/purewindow-18d39b0c8b63a8de70782efcfe33e48f.png"}}]);