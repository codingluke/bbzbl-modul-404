"use strict";(self.webpackChunkdocosaurus_rex=self.webpackChunkdocosaurus_rex||[]).push([[577],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>g});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),u=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=u(e.components);return r.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},h=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),h=u(t),g=a,m=h["".concat(s,".").concat(g)]||h[g]||p[g]||i;return t?r.createElement(m,l(l({ref:n},c),{},{components:t})):r.createElement(m,l({ref:n},c))}));function g(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,l=new Array(i);l[0]=h;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var u=2;u<i;u++)l[u]=t[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}h.displayName="MDXCreateElement"},3507:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>u});var r=t(7462),a=(t(7294),t(3905));const i={sidebar_position:5},l="5. Fahrenheit-Celsius Konverter",o={unversionedId:"aufgaben-grundlagen/einheiten-umrechnen",id:"aufgaben-grundlagen/einheiten-umrechnen",title:"5. Fahrenheit-Celsius Konverter",description:"Machen Sie sich mit dem Konzept der Static bekannt bevor Sie weiterfahren!",source:"@site/docs/aufgaben-grundlagen/einheiten-umrechnen.md",sourceDirName:"aufgaben-grundlagen",slug:"/aufgaben-grundlagen/einheiten-umrechnen",permalink:"/docs/aufgaben-grundlagen/einheiten-umrechnen",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/aufgaben-grundlagen/einheiten-umrechnen.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"4. Starterklasse",permalink:"/docs/aufgaben-grundlagen/starterklasse"},next:{title:"6. Formatierung",permalink:"/docs/aufgaben-grundlagen/formatierung"}},s={},u=[{value:"Ausgangslage",id:"ausgangslage",level:2},{value:"Aufgabe",id:"aufgabe",level:2},{value:"Musterl\xf6sung",id:"musterl\xf6sung",level:2},{value:"Zusatz Aufgabe",id:"zusatz-aufgabe",level:2},{value:"Musterl\xf6sung",id:"musterl\xf6sung-1",level:2}],c={toc:u};function p(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"5-fahrenheit-celsius-konverter"},"5. Fahrenheit-Celsius Konverter"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u261d\ufe0f ",(0,a.kt)("strong",{parentName:"p"},"Machen Sie sich mit dem Konzept der ",(0,a.kt)("a",{parentName:"strong",href:"/docs/konzepte/static"},"Static")," bekannt bevor Sie weiterfahren!"))),(0,a.kt)("h2",{id:"ausgangslage"},"Ausgangslage"),(0,a.kt)("p",null,"Gegeben sind folgende Klassen:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="Starter.java"',title:'"Starter.java"'},"package converter;\n  public class Starter {\n    public static void main(String[] args) {\n      // highlight-next-line\n      Converter ui = new Converter(); // Die Klasse `Converter` fehlt und sollt ihr umsetzen\n      ui.dialog();\n  }\n}\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="DegreesConverter.java"',title:'"DegreesConverter.java"'},"package converter;\npublic class DegreesConverter {\n\n  public double toFahrenheit(double celsius) {\n    return (celsius * 9.0/5.0) + 32.0;\n  }\n\n  public double toCelsius(double fahrenheit) {\n    return (fahrenheit - 32.0) * 5.0/9.0;\n  }\n\n}\n")),(0,a.kt)("h2",{id:"aufgabe"},"Aufgabe"),(0,a.kt)("p",null,"Erstellen Sie eine Klasse ",(0,a.kt)("inlineCode",{parentName:"p"},"Converter"),", welche die Methode ",(0,a.kt)("inlineCode",{parentName:"p"},"dialog")," enth\xe4lt.\nDarin wird die Benutzerschnittstelle implementiert. "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Der Dialog-Ablauf soll so aussehen"',title:'"Der',"Dialog-Ablauf":!0,soll:!0,so:!0,'aussehen"':!0},"M\xf6chten Sie (1) Fahrenheit nach Celsius oder (2) Celsius nach Fahrenheit umrechnen?\nBitte Geben Sie Ihre Wahl, 1 oder 2, ein: 1\nBitte geben Sie die Temperatur ein: 32\nDie urgerechnete Temperatur betr\xe4gt: 0.0\nM\xf6chten Sie noch eine Temperatur umrechnen? Dann 1 eingeben\n")),(0,a.kt)("h2",{id:"musterl\xf6sung"},"Musterl\xf6sung"),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Nur zum \xdcberpr\xfcfen der eigenen Implementation!"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="Converter.java"',title:'"Converter.java"'},'package converter;\nimport java.util.Scanner;\n\npublic class Converter {\n  public void dialog() {\n    Scanner sc = new Scanner(System.in);\n    DegreesConverter converter = new DegreesConverter();\n    int wahl = 0;\n    do {\n      System.out.println("M\xf6chten Sie (1) Fahrenheit nach Celsius oder (2) Celsius nach Fahrenheit umrechnen?");\n      System.out.print("Bitte geben Sie Ihre Wahl 1 oder 2 ein: ");\n      wahl = sc.nextInt();\n      System.out.print("Bitte geben Sie die Temperatur ein: ");\n      double temp = sc.nextDouble();\n      double convtemp;\n      if (wahl == 1) {\n        convtemp = converter.toCelsius(temp);\n      } else {\n        convtemp = converter.toFahrenheit(temp);\n      }\n      System.out.println("Die umgerechnete Temperatur betr\xe4gt: " + convtemp);\n      System.out.print("M\xf6chten Sie noch eine Temperatur umrechnen? Dann 1 eingeben. ");\n      wahl = sc.nextInt();\n    } while (wahl == 1);\n  }\n}\n'))),(0,a.kt)("h2",{id:"zusatz-aufgabe"},"Zusatz Aufgabe"),(0,a.kt)("p",null,"Der ",(0,a.kt)("inlineCode",{parentName:"p"},"DegreeConverter")," ist eine Klasse ",(0,a.kt)("strong",{parentName:"p"},"ohne statische Methoden"),", wie beim Konto. Ist das hier sinnvoll? K\xf6nnte man evt. die Methoden ",(0,a.kt)("inlineCode",{parentName:"p"},"toFahrenheit")," und ",(0,a.kt)("inlineCode",{parentName:"p"},"toCelsius")," als ",(0,a.kt)("inlineCode",{parentName:"p"},"static")," definieren? Wenn ja, wie w\xfcrde man nun die Klasse ",(0,a.kt)("inlineCode",{parentName:"p"},"Converter")," aussehen?"),(0,a.kt)("h2",{id:"musterl\xf6sung-1"},"Musterl\xf6sung"),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Nur zum \xdcberpr\xfcfen der eigenen Implementation!"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="Converter.java"',title:'"Converter.java"'},'package converter;\nimport java.util.Scanner;\n\npublic class Converter {\n  public void dialog() {\n    Scanner sc = new Scanner(System.in);\n    // highlight-next-line\n    // Die n\xe4chste Linie kann man auskommentieren, we braucht nun kein Objekt mehr\n    // highlight-next-line\n    // DegreesConverter converter = new DegreesConverter(); \n    int wahl = 0;\n    do {\n      System.out.println("M\xf6chten Sie (1) Fahrenheit nach Celsius oder (2) Celsius nach Fahrenheit umrechnen?");\n      System.out.print("Bitte geben Sie Ihre Wahl 1 oder 2 ein: ");\n      wahl = sc.nextInt();\n      System.out.print("Bitte geben Sie die Temperatur ein: ");\n      double temp = sc.nextDouble();\n      double convtemp;\n      if (wahl == 1) {\n        // highlight-next-line\n        // convtemp = converter.toCelsius(temp); \n        // highlight-next-line\n        convtemp = DegreesConverter.toCelsius(temp); // es braucht kein Objekt!\n      } else {\n        // highlight-next-line\n        //convtemp = converter.toFahrenheit(temp); \n        // highlight-next-line\n        convtemp = DegreesConverter.toFahrenheit(temp); // es braucht kein Objekt!\n      }\n      System.out.println("Die umgerechnete Temperatur betr\xe4gt: " + convtemp);\n      System.out.print("M\xf6chten Sie noch eine Temperatur umrechnen? Dann 1 eingeben. ");\n      wahl = sc.nextInt();\n    } while (wahl == 1);\n  }\n}\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="DegreesConverter.java"',title:'"DegreesConverter.java"'},"package converter;\npublic class DegreesConverter {\n\n  // highlight-next-line\n  public static double toFahrenheit(double celsius) {\n    return (celsius * 9.0/5.0) + 32.0;\n  }\n\n  // highlight-next-line\n  public static double toCelsius(double fahrenheit) {\n    return (fahrenheit - 32.0) * 5.0/9.0;\n  }\n\n}\n"))))}p.isMDXComponent=!0}}]);