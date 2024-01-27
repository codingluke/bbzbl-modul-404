"use strict";(self.webpackChunkbbzbl_modul_404=self.webpackChunkbbzbl_modul_404||[]).push([[8577],{2624:function(e,n,t){t.r(n),t.d(n,{assets:function(){return o},contentTitle:function(){return a},default:function(){return h},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return c}});var r=t(5893),i=t(1151);const s={sidebar_position:6},a="6. Fahrenheit-Celsius Konverter",l={id:"aufgaben-grundlagen/einheiten-umrechnen",title:"6. Fahrenheit-Celsius Konverter",description:"Machen Sie sich mit dem Konzept der Static",source:"@site/docs/aufgaben-grundlagen/einheiten-umrechnen.md",sourceDirName:"aufgaben-grundlagen",slug:"/aufgaben-grundlagen/einheiten-umrechnen",permalink:"/bbzbl-modul-404/docs/aufgaben-grundlagen/einheiten-umrechnen",draft:!1,unlisted:!1,editUrl:"https://github.com/codingluke/bbzbl-modul-404/tree/main/docs/aufgaben-grundlagen/einheiten-umrechnen.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"5. Starterklasse",permalink:"/bbzbl-modul-404/docs/aufgaben-grundlagen/starterklasse"},next:{title:"7. Formatierung",permalink:"/bbzbl-modul-404/docs/aufgaben-grundlagen/formatierung"}},o={},c=[{value:"Ausgangslage",id:"ausgangslage",level:2},{value:"Aufgabe",id:"aufgabe",level:2},{value:"Musterl\xf6sung",id:"musterl\xf6sung",level:2}];function u(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,i.a)(),...e.components},{Details:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"6-fahrenheit-celsius-konverter",children:"6. Fahrenheit-Celsius Konverter"}),"\n",(0,r.jsx)(n.admonition,{title:"WICHTIG",type:"danger",children:(0,r.jsxs)(n.p,{children:["\u261d"," ",(0,r.jsxs)(n.strong,{children:["Machen Sie sich mit dem Konzept der ",(0,r.jsx)(n.a,{href:"/bbzbl-modul-404/docs/konzepte/static",children:"Static"}),"\nbekannt bevor Sie weiterfahren!"]})]})}),"\n",(0,r.jsx)(n.h2,{id:"ausgangslage",children:"Ausgangslage"}),"\n",(0,r.jsx)(n.p,{children:"Gegeben sind folgende Klassen welche diesen Dialog ausgeben:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",metastring:'title="Der Dialog-Ablauf"',children:"M\xf6chten Sie (1) Fahrenheit nach Celsius oder (2) Celsius nach Fahrenheit umrechnen?\nBitte Geben Sie Ihre Wahl, 1 oder 2, ein: 1\nBitte geben Sie die Temperatur ein: 32\nDie urgerechnete Temperatur betr\xe4gt: 0.0\nM\xf6chten Sie noch eine Temperatur umrechnen? Dann 1 eingeben\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",metastring:'title="Starter.java"',children:"package converter;\n  public class Starter {\n    public static void main(String[] args) {\n      Converter ui = new Converter();\n      ui.dialog();\n  }\n}\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",metastring:'title="Converter.java"',children:'package converter;\nimport java.util.Scanner;\n\npublic class Converter {\n  public void dialog() {\n    double convtemp;\n    // highlight-next-line\n    // Geht es ohne `new`, rsp. ohne Objekt `converter`?\n    // highlight-next-line\n    DegreesConverter converter = new DegreesConverter();\n    int userEntry = 0;\n    try(Scanner scanner = new Scanner(System.in)) {\n      do {\n        System.out.println("M\xf6chten Sie (1) Fahrenheit nach Celsius oder (2) Celsius nach Fahrenheit umrechnen?");\n        System.out.print("Bitte geben Sie Ihre Wahl 1 oder 2 ein: ");\n        userEntry = scanner.nextInt();\n        System.out.print("Bitte geben Sie die Temperatur ein: ");\n        double temp = scanner.nextDouble();\n        if (userEntry == 1) {\n          // highlight-next-line\n          // Was muss hier ge\xe4ndert werden wenn es kein Objekt `converter` mehr gibt?\n          // highlight-next-line\n          convtemp = converter.toCelsius(temp);\n        } else {\n          // highlight-next-line\n          // Was muss hier ge\xe4ndert werden wenn es kein Objekt `converter` mehr gibt?\n          // highlight-next-line\n          convtemp = converter.toFahrenheit(temp);\n        }\n        System.out.println("Die umgerechnete Temperatur betr\xe4gt: " + convtemp);\n        System.out.print("M\xf6chten Sie noch eine Temperatur umrechnen? Dann 1 eingeben. ");\n        userEntry = scanner.nextInt();\n      } while (userEntry == 1);\n    }\n  }\n}\n'})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",metastring:'title="DegreesConverter.java"',children:"package converter;\npublic class DegreesConverter {\n\n  // highlight-next-line\n  public double toFahrenheit(double celsius) { // was muss hier hinzugef\xfcgt werden?\n    return (celsius * 9.0/5.0) + 32.0;\n  }\n\n  // highlight-next-line\n  public double toCelsius(double fahrenheit) { // was muss hier hinzugef\xfcgt werden?\n    return (fahrenheit - 32.0) * 5.0/9.0;\n  }\n\n}\n"})}),"\n",(0,r.jsx)(n.h2,{id:"aufgabe",children:"Aufgabe"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["Kopieren Sie den Code der Klassen ",(0,r.jsx)(n.code,{children:"Starter"}),", ",(0,r.jsx)(n.code,{children:"Converter"})," und\n",(0,r.jsx)(n.code,{children:"DegreesConverter"})," von oben"]}),"\n",(0,r.jsx)(n.li,{children:"Bringen Sie die Applikation in Eclipse zum Laufen."}),"\n",(0,r.jsxs)(n.li,{children:["\xc4ndern Sie die Methoden ",(0,r.jsx)(n.code,{children:"toFahrenheit"})," und ",(0,r.jsx)(n.code,{children:"toCelsius"})," sodass, die Klasse\n",(0,r.jsx)(n.code,{children:"DegreesConverter"})," ",(0,r.jsxs)(n.strong,{children:["statisch, also ohne ",(0,r.jsx)(n.code,{children:"new"})]})," verwendet werden kann."]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"musterl\xf6sung",children:"Musterl\xf6sung"}),"\n",(0,r.jsxs)(t,{children:[(0,r.jsx)("summary",{children:"Nur zum \xdcberpr\xfcfen der eigenen Implementation!"}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",metastring:'title="Converter.java"',children:'package converter;\nimport java.util.Scanner;\n\npublic class Converter {\n  public void dialog() {\n    double convtemp;\n    // highlight-next-line\n    // Die n\xe4chste Linie kann man auskommentieren, we braucht nun kein Objekt mehr\n    // highlight-next-line\n    // DegreesConverter converter = new DegreesConverter();\n    int userEntry = 0;\n    try(Scanner scanner = new Scanner(System.in)) {\n      do {\n        System.out.println("M\xf6chten Sie (1) Fahrenheit nach Celsius oder (2) Celsius nach Fahrenheit umrechnen?");\n        System.out.print("Bitte geben Sie Ihre Wahl 1 oder 2 ein: ");\n        userEntry = scanner.nextInt();\n        System.out.print("Bitte geben Sie die Temperatur ein: ");\n        double temp = scanner.nextDouble();\n        if (userEntry == 1) {\n          // highlight-next-line\n          // convtemp = converter.toCelsius(temp);\n          // highlight-next-line\n          convtemp = DegreesConverter.toCelsius(temp); // es braucht kein Objekt!\n        } else {\n          // highlight-next-line\n          //convtemp = converter.toFahrenheit(temp);\n          // highlight-next-line\n          convtemp = DegreesConverter.toFahrenheit(temp); // es braucht kein Objekt!\n        }\n        System.out.println("Die umgerechnete Temperatur betr\xe4gt: " + convtemp);\n        System.out.print("M\xf6chten Sie noch eine Temperatur umrechnen? Dann 1 eingeben. ");\n        userEntry = scanner.nextInt();\n      } while (userEntry == 1);\n    }\n  }\n}\n'})}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",metastring:'title="DegreesConverter.java"',children:"package converter;\npublic class DegreesConverter {\n\n  // Hinzuf\xfcgen des keywords `static`\n  // highlight-next-line\n  public static double toFahrenheit(double celsius) {\n    return (celsius * 9.0/5.0) + 32.0;\n  }\n\n  // Hinzuf\xfcgen des keywords `static`\n  // highlight-next-line\n  public static double toCelsius(double fahrenheit) {\n    return (fahrenheit - 32.0) * 5.0/9.0;\n  }\n\n}\n"})})]})]})}function h(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},1151:function(e,n,t){t.d(n,{Z:function(){return l},a:function(){return a}});var r=t(7294);const i={},s=r.createContext(i);function a(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);