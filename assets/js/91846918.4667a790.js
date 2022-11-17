"use strict";(self.webpackChunkdocosaurus_rex=self.webpackChunkdocosaurus_rex||[]).push([[9871],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>p});var i=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,i,a=function(e,n){if(null==e)return{};var t,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var o=i.createContext({}),d=function(e){var n=i.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},c=function(e){var n=d(e.components);return i.createElement(o.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},u=i.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=d(t),p=a,g=u["".concat(o,".").concat(p)]||u[p]||m[p]||r;return t?i.createElement(g,s(s({ref:n},c),{},{components:t})):i.createElement(g,s({ref:n},c))}));function p(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,s=new Array(r);s[0]=u;var l={};for(var o in n)hasOwnProperty.call(n,o)&&(l[o]=n[o]);l.originalType=e,l.mdxType="string"==typeof e?e:a,s[1]=l;for(var d=2;d<r;d++)s[d]=t[d];return i.createElement.apply(null,s)}return i.createElement.apply(null,t)}u.displayName="MDXCreateElement"},3766:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>s,default:()=>m,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var i=t(7462),a=(t(7294),t(3905));const r={},s="Static",l={unversionedId:"konzepte/static",id:"konzepte/static",title:"Static",description:"Wenn wir ein Java-Programm starten, gibt es noch kein Objekt, das wir ausf\xfchren k\xf6nnten. Das Java-Schl\xfcsselwort static ist die L\xf6sung f\xfcr dieses Problem. Elemente einer Klasse, die mit static markiert werden, sind nicht abh\xe4ngig davon, ob es ein Objekt der Klasse gibt oder nicht. Diese Elemente existieren immer.",source:"@site/docs/konzepte/static.md",sourceDirName:"konzepte",slug:"/konzepte/static",permalink:"/bbzbl-modul-404/docs/konzepte/static",draft:!1,editUrl:"https://github.com/codingluke/bbzbl-modul-404/tree/main/docs/konzepte/static.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Konstruktor",permalink:"/bbzbl-modul-404/docs/konzepte/konstruktor"},next:{title:"UML",permalink:"/bbzbl-modul-404/docs/uml"}},o={},d=[{value:"Was kann <code>static</code>? \ud83e\udea8 &lt;- in Stein gemeisselt",id:"was-kann-static----in-stein-gemeisselt",level:2},{value:"F\xfcr was sind <code>static</code> Methoden gut?",id:"f\xfcr-was-sind-static-methoden-gut",level:2},{value:"Static vs Instanz-Methoden",id:"static-vs-instanz-methoden",level:2},{value:"Verwenden von <code>MixedExample</code>",id:"verwenden-von-mixedexample",level:3}],c={toc:d};function m(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,i.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"static"},"Static"),(0,a.kt)("p",null,"Wenn wir ein Java-Programm starten, gibt es noch kein Objekt, das wir ausf\xfchren k\xf6nnten. Das Java-Schl\xfcsselwort ",(0,a.kt)("inlineCode",{parentName:"p"},"static")," ist die L\xf6sung f\xfcr dieses Problem. Elemente einer Klasse, die mit ",(0,a.kt)("inlineCode",{parentName:"p"},"static")," markiert werden, sind nicht abh\xe4ngig davon, ob es ein Objekt der Klasse gibt oder nicht. Diese Elemente existieren immer."),(0,a.kt)("p",null,"Wenn wir also eine Methode ",(0,a.kt)("inlineCode",{parentName:"p"},"public static void main(String[] args)")," geschrieben haben, dann existiert diese Methode beim Programmstart im Speicher und ist ausf\xfchrbar. Auf diese Weise k\xf6nnen wir unsere Programme starten."),(0,a.kt)("p",null,"In der Regel erstellt man eine ",(0,a.kt)("strong",{parentName:"p"},"Starterklasse"),", welche die Methode ",(0,a.kt)("inlineCode",{parentName:"p"},"public static void main(String[] args)")," enth\xe4lt. In dieser Methode erstellt man dann ein Objekt des eigentlichen Programms und ruft die Methode auf, die den Programmfluss steuert."),(0,a.kt)("h2",{id:"was-kann-static----in-stein-gemeisselt"},"Was kann ",(0,a.kt)("inlineCode",{parentName:"h2"},"static"),"? \ud83e\udea8 <- in Stein gemeisselt"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Kann ohne ",(0,a.kt)("inlineCode",{parentName:"li"},"new")," aufgerufen werden."),(0,a.kt)("li",{parentName:"ul"},"Kann wiederum andere ",(0,a.kt)("inlineCode",{parentName:"li"},"static")," Methoden aufrufen"),(0,a.kt)("li",{parentName:"ul"},"Kann ",(0,a.kt)("inlineCode",{parentName:"li"},"static")," Variablen verwenden (diese k\xf6nnen nicht ge\xe4ndert werden!)"),(0,a.kt)("li",{parentName:"ul"},"Kann mit ",(0,a.kt)("inlineCode",{parentName:"li"},"new")," ein ",(0,a.kt)("inlineCode",{parentName:"li"},"Objekt"),"/",(0,a.kt)("inlineCode",{parentName:"li"},"Instanz")," einer beliebigen Klasse erstellen.")),(0,a.kt)("h2",{id:"f\xfcr-was-sind-static-methoden-gut"},"F\xfcr was sind ",(0,a.kt)("inlineCode",{parentName:"h2"},"static")," Methoden gut?"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Die Java ",(0,a.kt)("inlineCode",{parentName:"li"},"public static void main(String[] args)")," Methode ist immer ",(0,a.kt)("inlineCode",{parentName:"li"},"static")," (Entrypoint)"),(0,a.kt)("li",{parentName:"ul"},"Generelle/Universelle Helfermethoden \ud83e\uddf0 ",(0,a.kt)("strong",{parentName:"li"},"ohne Datenstand"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Z.B. die Java Klasse ",(0,a.kt)("inlineCode",{parentName:"li"},"Math")," ist komplett statisch ",(0,a.kt)("inlineCode",{parentName:"li"},"Math.sqrt(64);"))))),(0,a.kt)("h2",{id:"static-vs-instanz-methoden"},"Static vs Instanz-Methoden"),(0,a.kt)("p",null,"Eine ",(0,a.kt)("inlineCode",{parentName:"p"},"static")," Methode einer ",(0,a.kt)("inlineCode",{parentName:"p"},"Klasse")," kann direkt aufgerufen werden, ohne dass ein ",(0,a.kt)("inlineCode",{parentName:"p"},"Object"),"/",(0,a.kt)("inlineCode",{parentName:"p"},"Instanz")," der Klasse erstellt werden muss. "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'public class MixedExample {\n    private static final double PI = 3.14; // Konstante, kann nicht ge\xe4ndert werden!\n    private String greeting = "Hello";     // Instanz-Variablen, kann ge\xe4ndert werden\n\n    public static double staticCircle(double radiant) { \n        return radiant * radiant * PI; // Kann auf `PI` zugreifen nicht aber auf `greeting`\n    }\n\n    public String instanceGreeting(String name) {\n        return greeting + " " + name;  // Kann auf `greeting` zugreifen\n                                       // K\xf6nnte theoretisch auch auf `PI` zugreifen\n    }\n\n    public void setGreeting(String greeting) { this.greeting = greeting; }\n}\n')),(0,a.kt)("h3",{id:"verwenden-von-mixedexample"},"Verwenden von ",(0,a.kt)("inlineCode",{parentName:"h3"},"MixedExample")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'public class Starter {\n    // Startpunkt des Programms, ist immer static!\n    public static void main(String[] args) { \n\n        // Statische Methoden k\xf6nnen ohne new ausgef\xfchrt werden!\n        double circle = MixedExample.staticCircle(1.5d); \n\n        // Um instanceMethoden aufzurufen, muss zuerst eine Instanz erstellt werden\n        MixedExample mixedExampleInstance = new MixedExample(); \n        String greeting = mixedExampleInstance.instanceGreeting("Lukas");\n        // Wert ist "Hallo Lukas";\n\n        mixedExampleInstance.setGreeting("Ciao") // Objekt \xe4ndern\n        greeting = mixedExampleInstance.instanceGreeting("Lukas");\n        // Wert ist "Ciao Lukas";\n    }\n}\n')))}m.isMDXComponent=!0}}]);