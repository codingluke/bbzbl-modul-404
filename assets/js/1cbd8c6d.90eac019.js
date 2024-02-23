"use strict";(self.webpackChunkbbzbl_modul_404=self.webpackChunkbbzbl_modul_404||[]).push([[3746],{2325:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>s,default:()=>u,frontMatter:()=>l,metadata:()=>r,toc:()=>c});var a=t(5893),i=t(1151);const l={sidebar_position:1},s="1. Account Applikation",r={id:"aufgaben-grundlagen/account-application",title:"1. Account Applikation",description:"Sicherzustellen, dass alle die Entwicklungsumgebung zum Laufen haben und auch",source:"@site/docs/aufgaben-grundlagen/account-application.md",sourceDirName:"aufgaben-grundlagen",slug:"/aufgaben-grundlagen/account-application",permalink:"/bbzbl-modul-404/docs/aufgaben-grundlagen/account-application",draft:!1,unlisted:!1,editUrl:"https://github.com/codingluke/bbzbl-modul-404/tree/main/docs/aufgaben-grundlagen/account-application.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Aufgaben Grundlagen",permalink:"/bbzbl-modul-404/docs/category/aufgaben-grundlagen"},next:{title:"2. Analyse Account Applikation",permalink:"/bbzbl-modul-404/docs/aufgaben-grundlagen/analyse-account-application"}},o={},c=[{value:"Auftrag",id:"auftrag",level:2},{value:"UML der Musterl\xf6sung",id:"uml-der-musterl\xf6sung",level:3},{value:"Erste Hilfe",id:"erste-hilfe",level:3},{value:"Zusatzaufgaben f\xfcr Schnelle",id:"zusatzaufgaben-f\xfcr-schnelle",level:3},{value:"Musterl\xf6sung",id:"musterl\xf6sung",level:2}];function d(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",mermaid:"mermaid",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components},{Details:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"1-account-applikation",children:"1. Account Applikation"}),"\n",(0,a.jsx)(n.admonition,{title:"Live Coding!",type:"note",children:(0,a.jsx)(n.p,{children:"Sicherzustellen, dass alle die Entwicklungsumgebung zum Laufen haben und auch\nwieder in Schwung gekommen ist, werden wir diese Aufgabe zusammen l\xf6sen!"})}),"\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{style:{textAlign:"left"},children:(0,a.jsx)(n.strong,{children:"Material"})}),(0,a.jsx)(n.th,{style:{textAlign:"left"},children:"Wissen und Faktenblatt Modul 403"})]})}),(0,a.jsxs)(n.tbody,{children:[(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{style:{textAlign:"left"},children:(0,a.jsx)(n.strong,{children:"Richtzeit"})}),(0,a.jsx)(n.td,{style:{textAlign:"left"},children:"ca. 45 Minuten"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{style:{textAlign:"left"},children:(0,a.jsx)(n.strong,{children:"Sozialform"})}),(0,a.jsxs)(n.td,{style:{textAlign:"left"},children:["\ud83c\udfad"," ",(0,a.jsx)(n.strong,{children:"Live Coding"})," mit Lehrer!"]})]})]})]}),"\n",(0,a.jsx)(n.h2,{id:"auftrag",children:"Auftrag"}),"\n",(0,a.jsx)(n.p,{children:"Erstellen Sie anhand des Wissens und K\xf6nnens aus dem Modul 403 ein Programm,\nwelches einen einfachen Dialog f\xfcr ein Bankkonto realisiert. Es soll m\xf6glich\nsein Geld:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.strong,{children:"einzuzahlen"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.strong,{children:"abzuheben"})}),"\n",(0,a.jsxs)(n.li,{children:["den Kontostand ",(0,a.jsx)(n.strong,{children:"anzuzeigen"})]}),"\n"]}),"\n",(0,a.jsx)(n.admonition,{title:"wichtig!",type:"info",children:(0,a.jsxs)(n.p,{children:["Die Operationen zum ",(0,a.jsx)(n.code,{children:"einzuzahlen"})," und ",(0,a.jsx)(n.code,{children:"abzuheben"})," sollen jeweils ",(0,a.jsx)(n.strong,{children:"durch eine\nMethode realisiert"})," sein."]})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Die Interaktion mit dem Benutzer soll so aussehen, wie nachfolgend gezeigt."})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",metastring:'title="AccountApplication Beispiel Terminal Ausgabe"',children:"Welcome to the account application\nPlease enter the amount, 0 (zero) to terminate\n10\nTo deposit, press +, to withdraw, press -\n+\nPlease enter the amount, 0 (zero) to terminate\n30\nTo deposit, press +, to withdraw, press -\n+\nPlease enter the amount, 0 (zero) to terminate\n5\nTo deposit, press +, to withdraw, press -\n-\nPlease enter the amount, 0 (zero) to terminate\n0\nFinal balance: 35.0\n"})}),"\n",(0,a.jsx)(n.h3,{id:"uml-der-musterl\xf6sung",children:"UML der Musterl\xf6sung"}),"\n",(0,a.jsx)(n.p,{children:"Verwenden Sie das UML um die Struktur der Aufgabe zu verstehen."}),"\n",(0,a.jsx)(n.mermaid,{value:"classDiagram\n  direction LR\n  class AccountApplication {\n    +main(args: String[])$\n    -withdraw(balance : double, amount : double)$  double\n    -deposit(balance : double, amount : double)$  double\n  }\n  class Scanner:::javaBuiltIn {\n    +Scanner(System.in) Scanner\n    +next() String\n    +nextDouble() double\n  }\n  AccountApplication ..> Scanner : uses"}),"\n",(0,a.jsx)(n.admonition,{type:"info",children:(0,a.jsxs)(n.p,{children:["Das UML von verwendeten Java Standard Klassen, welche Sie also nicht selber\nimplementieren m\xfcssen, sind ausgebleicht dargestellt. Hier also der ",(0,a.jsx)(n.code,{children:"Scanner"}),".\nEs werden immer nur die Methoden angegeben, welche verwendet werden, auch wenn\ndie eigentliche Klasse mehr Methoden besitzt."]})}),"\n",(0,a.jsx)(n.h3,{id:"erste-hilfe",children:"Erste Hilfe"}),"\n",(0,a.jsxs)(t,{children:[(0,a.jsx)("summary",{children:"Bitte diese Tipps versuchen bevor Ihr zur Musterl\xf6sung greift!"}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:'import java.util.Scanner;\n\npublic class AccountApplication {\n  public static void main(String[] args) {\n    Scanner sc = new Scanner(System.in);\n    double balance = 0;\n    double amount = 0;\n    String command = "";\n\n    System.out.println("Welcome to the account application");\n    do {\n      System.out.println("Please enter the amount, 0 (zero) to terminate");\n      amount = sc.nextDouble();\n      if (amount != 0) {\n        System.out.println("To deposit, press +, to withdraw press -");\n        command = sc.next();\n        if ("+".equals(command)) {\n          // was kommt wohl hier?\n        } else if ("-".equals(command)) {\n          // was kommt wohl hier?\n        }\n      }\n    } while (amount != 0);\n    System.out.println("Final balance: " + "attribute balance"); // was soll hier ausgegeben werden?\n\n    sc.close();\n  }\n\n  // deposit => einzahlen\n  public static double deposit(double balance, double amount) {\n    return 0.0; // implementiere mich\n  }\n\n  // withdraw => abheben\n  public static double withdraw(double balance, double amount) {\n    return 0.0; // implementiere mich\n  }\n}\n'})})]}),"\n",(0,a.jsx)(n.h3,{id:"zusatzaufgaben-f\xfcr-schnelle",children:"Zusatzaufgaben f\xfcr Schnelle"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["Erm\xf6glichen Sie zus\xe4tzlich zu ",(0,a.jsx)(n.code,{children:"+"})," und ",(0,a.jsx)(n.code,{children:"-"})," die Men\xfcauswahl ",(0,a.jsx)(n.code,{children:"="})," um jederzeit den\nKontostand abzufragen."]}),"\n",(0,a.jsx)(n.li,{children:"Geben Sie am Schluss vor dem Schlusssaldo eine Auflistung aller Transaktionen\n(Ein- und Auszahlungen) aus."}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"musterl\xf6sung",children:"Musterl\xf6sung"}),"\n",(0,a.jsxs)(t,{children:[(0,a.jsx)("summary",{children:"Nur zum \xdcberpr\xfcfen der eigenen Implementation!"}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:'import java.util.Scanner;\n\npublic class AccountApplication {\n  public static void main(String[] args) {\n    System.out.println("Welcome to the account application");\n    double balance = 0;\n    double amount = 0;\n    String command = "";\n\n    try(Scanner sc = new Scanner(System.in)) {\n      do {\n        System.out.println("Please enter the amount, 0 (zero) to terminate");\n        amount = sc.nextDouble();\n        if (amount != 0) {\n          System.out.println("To deposit, press +, to withdraw press -");\n          command = sc.next();\n          if ("+".equals(command)) {\n            balance = deposit(balance, amount);\n          } else if ("-".equals(command)) {\n            balance = withdraw(balance, amount);\n          };\n        }\n      } while (amount != 0);\n      System.out.println("Final balance: " + balance);\n    }\n  }\n\n  // deposit => einzahlen\n  public static double deposit(double balance, double amount) {\n    return balance + amount;\n  }\n\n  // withdraw => abheben\n  public static double withdraw(double balance, double amount) {\n    return balance - amount;\n  }\n}\n'})})]})]})}function u(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>r,a:()=>s});var a=t(7294);const i={},l=a.createContext(i);function s(e){const n=a.useContext(l);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),a.createElement(l.Provider,{value:n},e.children)}}}]);