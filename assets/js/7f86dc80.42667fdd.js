"use strict";(self.webpackChunkbbzbl_modul_404=self.webpackChunkbbzbl_modul_404||[]).push([[9897],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=c(n),p=a,g=m["".concat(s,".").concat(p)]||m[p]||d[p]||i;return n?r.createElement(g,l(l({ref:t},u),{},{components:n})):r.createElement(g,l({ref:t},u))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=p;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[m]="string"==typeof e?e:a,l[1]=o;for(var c=2;c<i;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},8654:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const i={sidebar_position:8},l="8. Easy Dice Game",o={unversionedId:"aufgaben-swing/dice-game",id:"aufgaben-swing/dice-game",title:"8. Easy Dice Game",description:"- Machen Sie sich mit den UML Klassendiagrammen bekannt bevor Sie weiterfahren!",source:"@site/docs/aufgaben-swing/dice-game.md",sourceDirName:"aufgaben-swing",slug:"/aufgaben-swing/dice-game",permalink:"/bbzbl-modul-404/docs/aufgaben-swing/dice-game",draft:!1,editUrl:"https://github.com/codingluke/bbzbl-modul-404/tree/main/docs/aufgaben-swing/dice-game.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"7. Konstruktor",permalink:"/bbzbl-modul-404/docs/aufgaben-swing/konstruktor"},next:{title:"9. JPanel",permalink:"/bbzbl-modul-404/docs/aufgaben-swing/jpanel"}},s={},c=[{value:"Aufgabe",id:"aufgabe",level:2},{value:"Arbeitsschritte",id:"arbeitsschritte",level:2}],u={toc:c},m="wrapper";function d(e){let{components:t,...i}=e;return(0,a.kt)(m,(0,r.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"8-easy-dice-game"},"8. Easy Dice Game"),(0,a.kt)("blockquote",null,(0,a.kt)("ul",{parentName:"blockquote"},(0,a.kt)("li",{parentName:"ul"},"\u261d\ufe0f ",(0,a.kt)("strong",{parentName:"li"},"Machen Sie sich mit den ",(0,a.kt)("a",{parentName:"strong",href:"/bbzbl-modul-404/docs/konzepte/uml"},"UML Klassendiagrammen")," bekannt bevor Sie weiterfahren!")),(0,a.kt)("li",{parentName:"ul"},"\u261d\ufe0f ",(0,a.kt)("strong",{parentName:"li"},"F\xfcr diese Aufgabe m\xfcsst Ihr den ",(0,a.kt)("a",{parentName:"strong",href:"../konzepte/actionlistener"},"ActionListener")," verstanden haben!")))),(0,a.kt)("h2",{id:"aufgabe"},"Aufgabe"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Es soll ein ",(0,a.kt)("strong",{parentName:"li"},"W\xfcrfelspiel")," realisiert werden, wobei der ",(0,a.kt)("strong",{parentName:"li"},"Spieler in eine Fachklasse ausgelagert")," wird"),(0,a.kt)("li",{parentName:"ul"},"Es soll das untenstehende UML-Klassendiagramm als Struktur verwendet werden"),(0,a.kt)("li",{parentName:"ul"},"Die Fachklasse ",(0,a.kt)("inlineCode",{parentName:"li"},"GamePlayer")," (W\xfcrfelspieler), kann w\xfcrfeln und verwaltet das Punktetotal"),(0,a.kt)("li",{parentName:"ul"},"Es soll ein GUI in der Klasse ",(0,a.kt)("inlineCode",{parentName:"li"},"GameGui")," mit zwei Spielern programmiert werden")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"UML-Klassendiagramm")),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(3504).Z,width:"741",height:"222"})),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"In der Methode ",(0,a.kt)("inlineCode",{parentName:"p"},"rollTheDice()")," ist folgende Berechnung n\xf6tig, um eine zuf\xe4llige Zahl zwischen 1 und 6 zu erzeugen:"),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre",1:!0,className:"language-java",metastring:'title="Zufallszahl zwischen 1 und 6"',title:'"Zufallszahl',zwischen:!0,und:!0,'6"':!0},"(int) (Math.random() * 6 + 1);\n"))),(0,a.kt)("h2",{id:"arbeitsschritte"},"Arbeitsschritte"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Programmieren Sie die Fachklasse ",(0,a.kt)("inlineCode",{parentName:"li"},"GamePlayer"),". Untersuchen Sie, was ",(0,a.kt)("inlineCode",{parentName:"li"},"Math.random()")," macht, und warum die weiteren Anweisungen notwendig sind."),(0,a.kt)("li",{parentName:"ol"},"Um sich mit der Klasse vertraut zu machen, erstellen Sie eine Instanz der Fachklasse und rufen die Methode ",(0,a.kt)("inlineCode",{parentName:"li"},"rollTheDice()")," wiederholt auf, z.B. mittels einer for-Schleife."),(0,a.kt)("li",{parentName:"ol"},"Entwerfen Sie ein m\xf6gliches GUI. \xdcberlegen Sie: welche Interaktionselemente (Schaltfl\xe4chen, Textanzeige, etc.) sind n\xf6tig f\xfcr das Spiel?"),(0,a.kt)("li",{parentName:"ol"},"Implementieren Sie nun das GUI gem\xe4ss Ihrer Skizze.")))}d.isMDXComponent=!0},3504:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/dice-game-uml.drawio-46d22445aafdd9c551ac40645e50dea4.svg"}}]);