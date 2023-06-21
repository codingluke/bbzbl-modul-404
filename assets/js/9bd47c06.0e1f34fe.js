"use strict";(self.webpackChunkbbzbl_modul_404=self.webpackChunkbbzbl_modul_404||[]).push([[5438],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>c});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),u=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=u(e.components);return r.createElement(o.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),d=u(n),k=a,c=d["".concat(o,".").concat(k)]||d[k]||p[k]||i;return n?r.createElement(c,l(l({ref:t},m),{},{components:n})):r.createElement(c,l({ref:t},m))}));function c(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=k;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[d]="string"==typeof e?e:a,l[1]=s;for(var u=2;u<i;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}k.displayName="MDXCreateElement"},6362:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var r=n(7462),a=(n(7294),n(3905));const i={},l="Konstruktor",s={unversionedId:"konzepte/konstruktor",id:"konzepte/konstruktor",title:"Konstruktor",description:"Konstruktoren sind spezielle Methoden einer Klasse, die von aussen nicht als Methode aufgerufen werden k\xf6nnen, aber bei der Instanziierung eines Objektes aufgerufen werden k\xf6nnen.",source:"@site/docs/konzepte/konstruktor.md",sourceDirName:"konzepte",slug:"/konzepte/konstruktor",permalink:"/bbzbl-modul-404/docs/konzepte/konstruktor",draft:!1,editUrl:"https://github.com/codingluke/bbzbl-modul-404/tree/main/docs/konzepte/konstruktor.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Formatierung",permalink:"/bbzbl-modul-404/docs/konzepte/formatierung"},next:{title:"Static",permalink:"/bbzbl-modul-404/docs/konzepte/static"}},o={},u=[{value:"Deklaration",id:"deklaration",level:2},{value:"Verwendung",id:"verwendung",level:2},{value:"Erl\xe4uterung",id:"erl\xe4uterung",level:2}],m={toc:u},d="wrapper";function p(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"konstruktor"},"Konstruktor"),(0,a.kt)("p",null,"Konstruktoren sind spezielle Methoden einer Klasse, die von aussen nicht als Methode aufgerufen werden k\xf6nnen, aber bei der Instanziierung eines Objektes aufgerufen werden k\xf6nnen."),(0,a.kt)("p",null,"Ein Konstruktor:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Methodename ist ",(0,a.kt)("strong",{parentName:"li"},"immer gleich")," wie die Klasse"),(0,a.kt)("li",{parentName:"ul"},"ist ",(0,a.kt)("strong",{parentName:"li"},"nicht explizit aufrufbar")),(0,a.kt)("li",{parentName:"ul"},"wird ",(0,a.kt)("strong",{parentName:"li"},"ausgef\xfchrt wenn ein Objekt erstellt wird")," (\ud83d\udca1 in Verbindung mit ",(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"strong"},"new")),")"),(0,a.kt)("li",{parentName:"ul"},"hat ",(0,a.kt)("strong",{parentName:"li"},"keinen R\xfcckgabewert")),(0,a.kt)("li",{parentName:"ul"},"es k\xf6nnen mehrere Konstruktoren bestehen (\ud83d\udca1 andere Anzahl Parameter)"),(0,a.kt)("li",{parentName:"ul"},"werden ",(0,a.kt)("strong",{parentName:"li"},"keine Parameter")," angegeben, nennt man ihn ",(0,a.kt)("strong",{parentName:"li"},"Standardkonstruktor")),(0,a.kt)("li",{parentName:"ul"},"dient dazu das ",(0,a.kt)("strong",{parentName:"li"},"Objekt")," mit g\xfcltigen Werten zu ",(0,a.kt)("strong",{parentName:"li"},"initialisieren"))),(0,a.kt)("h2",{id:"deklaration"},"Deklaration"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="MyClass.java Konstruktor Beispiele"',title:'"MyClass.java',Konstruktor:!0,'Beispiele"':!0},'public class MyClass {\n  private String name; // Instanzvariable die Inizialisiert werden muss!\n  private int year = 2000; // Instanzvariable mit Standardwert\n\n  public MyClass() { // Standardkonstruktor (ohne Parameter)\n    this.name = "Startwert"; // `name = "Startwert"` ohne `this` ist auch g\xfcltig\n  }\n\n  public MyClass(String name) { // Konstruktor mit gleichnamigem Parameter\n    this.name = name; // `this` ist notwendig da gleichnamig\n  }\n\n  public MyClass(String aName, int year) { // Konstruktor mit zwei Variablen\n    name = aName;     // `this` darf weggelassen werden (muss aber nicht!)\n    this.year = year; // `this` ist notwendig da gleichnamig\n  }\n}\n')),(0,a.kt)("h2",{id:"verwendung"},"Verwendung"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="Starter.java verwendet MyClass"',title:'"Starter.java',verwendet:!0,'MyClass"':!0},'public class Starter {\n  public static void main(String[] args) {\n    // Standardkonstruktor wird ausgef\xfchrt!\n    MyClass myClass = new MyClass();\n\n    // Konstruktor mit einem Parameter wird ausgef\xfchrt\n    MyClass myClass2 = new MyClass("Neuer Startwert");\n\n    // Konstruktor mit zwei Parameter wird ausgef\xfchrt\n    MyClass myClass3 = new MyClass("Neuer Startwert", 2022);\n  }\n}\n')),(0,a.kt)("h2",{id:"erl\xe4uterung"},"Erl\xe4uterung"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Jede")," Klasse besitzt einen Defaultkonstruktor",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Wenn wir ihn nicht explizit hinschreiben, dann erzeugt der Java-Compiler einfach selbst einen, der nichts macht"),(0,a.kt)("li",{parentName:"ul"},"Der Defaultkonstruktor hat ",(0,a.kt)("strong",{parentName:"li"},"keine Parameter")))),(0,a.kt)("li",{parentName:"ul"},"Wenn wir einem ",(0,a.kt)("strong",{parentName:"li"},"Konstruktor mit Parametern")," Werte \xfcbergeben, kann er diese als Startwerte f\xfcr das Objekt verwenden",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},'Das Objekt im zweiten Aufruf in main ist also gleich mit dem Startwert "Neuer Startwert" inizialisiert'))),(0,a.kt)("li",{parentName:"ul"},"Wenn der ",(0,a.kt)("strong",{parentName:"li"},"Name von Parametern gleich ist wie der Name einer Variablen"),", dann muss mit dem Schl\xfcsselwort ",(0,a.kt)("inlineCode",{parentName:"li"},"this")," gearbeitet werden",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Der Einsatz dieses Wortes bedeutet, dass damit die Instanzvariable gemeint ist und nicht der Parameter")))))}p.isMDXComponent=!0}}]);