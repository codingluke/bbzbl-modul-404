"use strict";(self.webpackChunkdocosaurus_rex=self.webpackChunkdocosaurus_rex||[]).push([[854],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>c});var i=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=i.createContext({}),d=function(e){var n=i.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},u=function(e){var n=d(e.components);return i.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},m=i.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=d(t),c=r,g=m["".concat(l,".").concat(c)]||m[c]||p[c]||a;return t?i.createElement(g,s(s({ref:n},u),{},{components:t})):i.createElement(g,s({ref:n},u))}));function c(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,s=new Array(a);s[0]=m;var o={};for(var l in n)hasOwnProperty.call(n,l)&&(o[l]=n[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var d=2;d<a;d++)s[d]=t[d];return i.createElement.apply(null,s)}return i.createElement.apply(null,t)}m.displayName="MDXCreateElement"},2019:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>a,metadata:()=>o,toc:()=>d});var i=t(7462),r=(t(7294),t(3905));const a={sidebar_position:2},s="2. Fenster (JFrame)",o={unversionedId:"aufgaben-swing/fenster",id:"aufgaben-swing/fenster",title:"2. Fenster (JFrame)",description:"Das folgende Beispiel zeigt die Vorkehrungen, die notwendig sind, um ein Fenster anzuzeigen:",source:"@site/docs/aufgaben-swing/fenster.md",sourceDirName:"aufgaben-swing",slug:"/aufgaben-swing/fenster",permalink:"/bbzbl-modul-404/docs/aufgaben-swing/fenster",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/aufgaben-swing/fenster.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"1. Einstieg in Swing",permalink:"/bbzbl-modul-404/docs/aufgaben-swing/einstieg-in-swing"},next:{title:"3. JFrame Komponenten",permalink:"/bbzbl-modul-404/docs/aufgaben-swing/komponenten"}},l={},d=[{value:"Programm starten",id:"programm-starten",level:2},{value:"Aufgabe",id:"aufgabe",level:2}],u={toc:d};function p(e){let{components:n,...a}=e;return(0,r.kt)("wrapper",(0,i.Z)({},u,a,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"2-fenster-jframe"},"2. Fenster (JFrame)"),(0,r.kt)("p",null,"Das folgende Beispiel zeigt die Vorkehrungen, die notwendig sind, um ein Fenster anzuzeigen:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="Starter.java"',title:'"Starter.java"'},"public class Starter {\n  public static void main(String[] args) {\n    PureWindow pureWindow = new PureWindow(); // Ertellt ein `PureWindow` Objekt und speichert es in der Variable `pureWindow`\n    pureWindow.showDialog(); // F\xfchrt die Methode `showDialog()` aus\n  }\n}\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"In der ",(0,r.kt)("inlineCode",{parentName:"li"},"main"),"-Methode der Klasse ",(0,r.kt)("inlineCode",{parentName:"li"},"Starter")," wird ein Objekt der Klasse ",(0,r.kt)("inlineCode",{parentName:"li"},"PureWindow")," erzeugt und in der Variable ",(0,r.kt)("inlineCode",{parentName:"li"},"pureWindow")," gespeichert. Die Variable ",(0,r.kt)("inlineCode",{parentName:"li"},"pureWindow")," wird dann verwendet, um die Methode ",(0,r.kt)("inlineCode",{parentName:"li"},"showDialog()")," aufzurufen.")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"PureWindow")," ist die Klasse sowie der ",(0,r.kt)("inlineCode",{parentName:"li"},"Datentyp")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"pureWindow")," (klein) ist die Variable, die das Objekt beinhaltet."))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="PureWindow.java"',title:'"PureWindow.java"'},'import javax.swing.JFrame;\n\npublic class PureWindow extends JFrame {\n\n  public void showDialog() { // Beliebiger Name, kann auch, "start" oder nur "show" heissen.\n    setLayout(null); // Deaktiviert Layout-Automatismen von Swing\n    setDefaultCloseOperation(EXIT_ON_CLOSE); // Beended beim Schliessen des Fensters ebenfalls den Prozess\n    setSize(300, 300); // Bestimmt die gr\xf6sse des Fensters\n    setTitle("Mein toller Titel"); // Setzt den Titel des Fensters\n    setVisible(true); // Muss am Ende stehen! Ohne das wird nichts angezeigt!\n  }\n\n}\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Die Klasse ",(0,r.kt)("inlineCode",{parentName:"li"},"PureWindow")," muss von der Klasse ",(0,r.kt)("inlineCode",{parentName:"li"},"JFrame")," alle F\xe4higkeiten \xfcbernehmen. Dies geschieht durch die Anweisung ",(0,r.kt)("inlineCode",{parentName:"li"},"extends JFrame"),". Damit wird die Klasse ",(0,r.kt)("inlineCode",{parentName:"li"},"PureWindow")," zu einem ",(0,r.kt)("inlineCode",{parentName:"li"},"JFrame"),"."),(0,r.kt)("li",{parentName:"ul"},"Die Methode ",(0,r.kt)("inlineCode",{parentName:"li"},"showDialog()")," f\xfchrt die ",(0,r.kt)("strong",{parentName:"li"},"grundlegenden Konfigurationsschritte")," aus. Diese werden bei allen Fenstern ben\xf6tigt."),(0,r.kt)("li",{parentName:"ul"},"Die Methode ",(0,r.kt)("inlineCode",{parentName:"li"},"showDialog()")," ist ",(0,r.kt)("strong",{parentName:"li"},"nicht als static")," markiert. Sie muss also \xfcber das Objekt ",(0,r.kt)("inlineCode",{parentName:"li"},"pureWindow.showDialog()")," aufgerufen werden. ",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"PureWindow.showDialog()")," ist nicht zul\xe4ssig!")))),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Die Klasse haben wir ",(0,r.kt)("inlineCode",{parentName:"p"},"PureWindow"),' genannt. Deutsch heisst das soviel wie "reines Fenster". Die Klasse kann beliebig benannt werden. ',(0,r.kt)("inlineCode",{parentName:"p"},"PureWindow")," eignet sich, da es sich um ein Beispiel f\xfcr das Grundger\xfcst handelt, ohne weiteren Inhalt.")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Lesen Sie auch die Kommentare im Code, l\xf6schen Sie die einzelnen Zeilen und schauen was passiert!")),(0,r.kt)("h2",{id:"programm-starten"},"Programm starten"),(0,r.kt)("p",null,"Wenn das Programm gestartet wird, erscheint ein Fenster das ca. wie folgt aussieht:"),(0,r.kt)("p",null,(0,r.kt)("img",{src:t(5277).Z,width:"906",height:"906"})),(0,r.kt)("h2",{id:"aufgabe"},"Aufgabe"),(0,r.kt)("p",null,"Erstellt nun ein neues Programm, kopiert den Code von Oben und schaut, ob es bei euch auch funktioniert."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"L\xf6scht einzelne Zeilen und analysiert den Effekt")),(0,r.kt)("admonition",{title:"Anstatt copy/paste tippt ihr den Text am besten selber ab!",type:"tip"},(0,r.kt)("ol",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ol"},"Lernt Ihr so besser"),(0,r.kt)("li",{parentName:"ol"},"Merkt Ihr, dass der Editor vorschl\xe4ge macht!"),(0,r.kt)("li",{parentName:"ol"},'Erh\xe4lt Ihr ein besseres "Gef\xfchl" wie es ist zu programmieren \ud83e\uddb8'))))}p.isMDXComponent=!0},5277:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/purewindow-18d39b0c8b63a8de70782efcfe33e48f.png"}}]);