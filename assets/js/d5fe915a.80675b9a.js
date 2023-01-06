"use strict";(self.webpackChunkbbzbl_modul_404=self.webpackChunkbbzbl_modul_404||[]).push([[2854],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>c});var i=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,i,a=function(e,n){if(null==e)return{};var t,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var o=i.createContext({}),d=function(e){var n=i.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},u=function(e){var n=d(e.components);return i.createElement(o.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},p=i.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=d(t),c=a,g=p["".concat(o,".").concat(c)]||p[c]||m[c]||r;return t?i.createElement(g,s(s({ref:n},u),{},{components:t})):i.createElement(g,s({ref:n},u))}));function c(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,s=new Array(r);s[0]=p;var l={};for(var o in n)hasOwnProperty.call(n,o)&&(l[o]=n[o]);l.originalType=e,l.mdxType="string"==typeof e?e:a,s[1]=l;for(var d=2;d<r;d++)s[d]=t[d];return i.createElement.apply(null,s)}return i.createElement.apply(null,t)}p.displayName="MDXCreateElement"},2019:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>s,default:()=>m,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var i=t(7462),a=(t(7294),t(3905));const r={sidebar_position:2},s="2. Fenster (JFrame)",l={unversionedId:"aufgaben-swing/fenster",id:"aufgaben-swing/fenster",title:"2. Fenster (JFrame)",description:"Das folgende Beispiel zeigt die Vorkehrungen, die notwendig sind, um ein Fenster anzuzeigen:",source:"@site/docs/aufgaben-swing/fenster.md",sourceDirName:"aufgaben-swing",slug:"/aufgaben-swing/fenster",permalink:"/bbzbl-modul-404/docs/aufgaben-swing/fenster",draft:!1,editUrl:"https://github.com/codingluke/bbzbl-modul-404/tree/main/docs/aufgaben-swing/fenster.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"1. Einstieg in Swing",permalink:"/bbzbl-modul-404/docs/aufgaben-swing/einstieg-in-swing"},next:{title:"3. JFrame Komponenten",permalink:"/bbzbl-modul-404/docs/aufgaben-swing/komponenten"}},o={},d=[{value:"Programm starten",id:"programm-starten",level:2},{value:"Aufgabe",id:"aufgabe",level:2},{value:"Cheat Sheet",id:"cheat-sheet",level:2}],u={toc:d};function m(e){let{components:n,...r}=e;return(0,a.kt)("wrapper",(0,i.Z)({},u,r,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"2-fenster-jframe"},"2. Fenster (JFrame)"),(0,a.kt)("p",null,"Das folgende Beispiel zeigt die Vorkehrungen, die notwendig sind, um ein Fenster anzuzeigen:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="Starter.java"',title:'"Starter.java"'},"public class Starter {\n  public static void main(String[] args) {\n    PureWindow pureWindow = new PureWindow(); // Ertellt ein `PureWindow` Objekt und speichert es in der Variable `pureWindow`\n    pureWindow.showDialog(); // F\xfchrt die Methode `showDialog()` aus\n  }\n}\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"In der ",(0,a.kt)("inlineCode",{parentName:"li"},"main"),"-Methode der Klasse ",(0,a.kt)("inlineCode",{parentName:"li"},"Starter")," wird ein Objekt der Klasse ",(0,a.kt)("inlineCode",{parentName:"li"},"PureWindow")," erzeugt und in der Variable ",(0,a.kt)("inlineCode",{parentName:"li"},"pureWindow")," gespeichert. Die Variable ",(0,a.kt)("inlineCode",{parentName:"li"},"pureWindow")," wird dann verwendet, um die Methode ",(0,a.kt)("inlineCode",{parentName:"li"},"showDialog()")," aufzurufen.")),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"PureWindow")," ist die Klasse sowie der ",(0,a.kt)("inlineCode",{parentName:"li"},"Datentyp")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"pureWindow")," (klein) ist die Variable, die das Objekt beinhaltet."))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="PureWindow.java"',title:'"PureWindow.java"'},'import javax.swing.JFrame;\n\npublic class PureWindow extends JFrame {\n\n  public void showDialog() { // Beliebiger Name, kann auch, "start" oder nur "show" heissen.\n    setLayout(null); // Deaktiviert Layout-Automatismen von Swing\n    setDefaultCloseOperation(EXIT_ON_CLOSE); // Beended beim Schliessen des Fensters ebenfalls den Prozess\n    setSize(300, 300); // Bestimmt die gr\xf6sse des Fensters\n    setTitle("Mein toller Titel"); // Setzt den Titel des Fensters\n    setVisible(true); // Muss am Ende stehen! Ohne das wird nichts angezeigt!\n  }\n\n}\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Die Klasse ",(0,a.kt)("inlineCode",{parentName:"li"},"PureWindow")," muss von der Klasse ",(0,a.kt)("inlineCode",{parentName:"li"},"JFrame")," alle F\xe4higkeiten \xfcbernehmen. Dies geschieht durch die Anweisung ",(0,a.kt)("inlineCode",{parentName:"li"},"extends JFrame"),". Damit wird die Klasse ",(0,a.kt)("inlineCode",{parentName:"li"},"PureWindow")," zu einem ",(0,a.kt)("inlineCode",{parentName:"li"},"JFrame"),"."),(0,a.kt)("li",{parentName:"ul"},"Die Methode ",(0,a.kt)("inlineCode",{parentName:"li"},"showDialog()")," f\xfchrt die ",(0,a.kt)("strong",{parentName:"li"},"grundlegenden Konfigurationsschritte")," aus. Diese werden bei allen Fenstern ben\xf6tigt."),(0,a.kt)("li",{parentName:"ul"},"Die Methode ",(0,a.kt)("inlineCode",{parentName:"li"},"showDialog()")," ist ",(0,a.kt)("strong",{parentName:"li"},"nicht als static")," markiert. Sie muss also \xfcber das Objekt ",(0,a.kt)("inlineCode",{parentName:"li"},"pureWindow.showDialog()")," aufgerufen werden. ",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"PureWindow.showDialog()")," ist nicht zul\xe4ssig!")))),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Die Klasse haben wir ",(0,a.kt)("inlineCode",{parentName:"p"},"PureWindow"),' genannt. Deutsch heisst das soviel wie "reines Fenster". Die Klasse kann beliebig benannt werden. ',(0,a.kt)("inlineCode",{parentName:"p"},"PureWindow")," eignet sich, da es sich um ein Beispiel f\xfcr das Grundger\xfcst handelt, ohne weiteren Inhalt.")),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"Lesen Sie auch die Kommentare im Code, l\xf6schen Sie die einzelnen Zeilen und schauen was passiert!")),(0,a.kt)("h2",{id:"programm-starten"},"Programm starten"),(0,a.kt)("p",null,"Wenn das Programm gestartet wird, erscheint ein Fenster das ca. wie folgt aussieht:"),(0,a.kt)("p",null,(0,a.kt)("img",{src:t(5277).Z,width:"906",height:"906"})),(0,a.kt)("h2",{id:"aufgabe"},"Aufgabe"),(0,a.kt)("p",null,"Erstellt nun ein neues Programm, kopiert den Code von Oben und schaut, ob es bei euch auch funktioniert."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"L\xf6scht einzelne Zeilen und analysiert den Effekt")),(0,a.kt)("admonition",{title:"Anstatt copy/paste tippt ihr den Text am besten selber ab!",type:"tip"},(0,a.kt)("ol",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ol"},"Lernt Ihr so besser"),(0,a.kt)("li",{parentName:"ol"},"Merkt Ihr, dass der Editor vorschl\xe4ge macht!"),(0,a.kt)("li",{parentName:"ol"},'Erh\xe4lt Ihr ein besseres "Gef\xfchl" wie es ist zu programmieren \ud83e\uddb8'))),(0,a.kt)("h2",{id:"cheat-sheet"},"Cheat Sheet"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'setLayout(null); // Standard Layout deaktivieren\nsetDefaultCloseOperation(EXIT_ON_CLOSE); // Beim schliessen des Fensters, das ganze Programm beenden\nsetSize(300, 300); // Gr\xf6sse vom Fenster festlegen\nsetTitle("Ich bin der Fenster Titel"); // Titel des Fensters festlegen\nsetVisible(true); // Fenster sichtbar machen\n\nJLabel label = new JLabel("Beschriftung"); // Ein Label\nlabel.setBounds(x, y, wigh, height) // Bestimmen wo sich das Label befindet\nadd(label) // Label hinzuf\xfcgen\n\nJTextField textfield = new JTextField(); // Ein Textfeld\ntextfield.setBounds(x, y, wigh, height) // Bestimmen wo sich das Textfeld befindet\nadd(textfield) // Textfeld hinzuf\xfcgen\n\nJButton button = new JButton("press me"); // Ein Button\nbutton.setBounds(x, y, wigh, height) // Bestimmen wo sich der Button befindet\nadd(button) // Textfeld hinzuf\xfcgen\n')))}m.isMDXComponent=!0},5277:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/purewindow-18d39b0c8b63a8de70782efcfe33e48f.png"}}]);