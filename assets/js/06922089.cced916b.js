"use strict";(self.webpackChunkbbzbl_modul_404=self.webpackChunkbbzbl_modul_404||[]).push([[1556],{4007:function(n,e,i){i.r(e),i.d(e,{assets:function(){return o},contentTitle:function(){return a},default:function(){return u},frontMatter:function(){return c},metadata:function(){return s},toc:function(){return l}});var t=i(5893),r=i(1151);const c={sidebar_position:3},a="3. Refactoring Account Applikation",s={id:"aufgaben-grundlagen/refactoring-account-application",title:"3. Refactoring Account Applikation",description:"Machen Sie sich mit dem Konzept der",source:"@site/docs/aufgaben-grundlagen/refactoring-account-application.md",sourceDirName:"aufgaben-grundlagen",slug:"/aufgaben-grundlagen/refactoring-account-application",permalink:"/bbzbl-modul-404/docs/aufgaben-grundlagen/refactoring-account-application",draft:!1,unlisted:!1,editUrl:"https://github.com/codingluke/bbzbl-modul-404/tree/main/docs/aufgaben-grundlagen/refactoring-account-application.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"2. Analyse Account Applikation",permalink:"/bbzbl-modul-404/docs/aufgaben-grundlagen/analyse-account-application"},next:{title:"4. Account - Klassendiagramm",permalink:"/bbzbl-modul-404/docs/aufgaben-grundlagen/account-uml"}},o={},l=[{value:"Ausgangslage",id:"ausgangslage",level:2},{value:"Einf\xfchrung der Klasse <code>Account</code>/<code>Konto</code>",id:"einf\xfchrung-der-klasse-accountkonto",level:2},{value:"Aufgabe",id:"aufgabe",level:2},{value:"UML der Musterl\xf6sung",id:"uml-der-musterl\xf6sung",level:3},{value:"Musterl\xf6sung",id:"musterl\xf6sung",level:2}];function d(n){const e={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",mermaid:"mermaid",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...n.components},{Details:i}=e;return i||function(n,e){throw new Error("Expected "+(e?"component":"object")+" `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.h1,{id:"3-refactoring-account-applikation",children:"3. Refactoring Account Applikation"}),"\n",(0,t.jsx)(e.admonition,{title:"WICHTIG",type:"danger",children:(0,t.jsxs)(e.p,{children:["\u261d"," ",(0,t.jsxs)(e.strong,{children:["Machen Sie sich mit dem Konzept der\n",(0,t.jsx)(e.a,{href:"/bbzbl-modul-404/docs/konzepte/fachklassen",children:"Fachklassen"})," bekannt bevor Sie weiterfahren!"]})]})}),"\n",(0,t.jsx)(e.admonition,{title:"Refactoring",type:"note",children:(0,t.jsxs)(e.p,{children:["Bezeichnung im Programmieren, dass man den ",(0,t.jsx)(e.strong,{children:"vorhandenen Code neu strukturiert,\nohne neue Funktionalit\xe4t hinzuzuf\xfcgen"}),". Refactoring dient dazu, dass die\nApplikation/Software auf lange Zeit besser wartbar und erweiterbar ist."]})}),"\n",(0,t.jsx)(e.h2,{id:"ausgangslage",children:"Ausgangslage"}),"\n",(0,t.jsxs)(e.ol,{children:["\n",(0,t.jsx)(e.li,{children:"Das Konto-Programm bearbeitet zu viele Aufgaben (Verantwortlichkeiten) in\neiner Klasse."}),"\n",(0,t.jsxs)(e.li,{children:["Die Arbeit wollen wir ",(0,t.jsx)(e.strong,{children:"in zwei Klassen aufteilen"})]}),"\n"]}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.code,{children:"AccountApplication"})," (Beinhaltet die Benutzerinteraktion und ",(0,t.jsx)(e.code,{children:"main"})," Methode)"]}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.code,{children:"Account"})," resp. ",(0,t.jsx)(e.code,{children:"Konto"})," (Beinhaltet die Fachlogik)"]}),"\n"]}),"\n",(0,t.jsxs)(e.h2,{id:"einf\xfchrung-der-klasse-accountkonto",children:["Einf\xfchrung der Klasse ",(0,t.jsx)(e.code,{children:"Account"}),"/",(0,t.jsx)(e.code,{children:"Konto"})]}),"\n",(0,t.jsxs)(e.p,{children:["Die ",(0,t.jsx)(e.strong,{children:"Fachlogik"})," der ",(0,t.jsx)(e.code,{children:"AccountApplication"})," kann in eine eigene Klasse ",(0,t.jsx)(e.code,{children:"Account"}),"\nausgelagert werden."]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-java",metastring:'title="Account.java"',children:'public class Account {\n  private double balance;             // englisch f\xfcr "kontostand"\n\n  public void deposit(double value) { // englisch f\xfcr "einzahlen"\n    balance += value;\n  }\n\n  public void withdraw(double value) { // englisch f\xfcr "auszahlen"\n    balance -= value;\n  }\n\n  public double getBalance() {\n    return balance;\n  }\n}\n'})}),"\n",(0,t.jsx)(e.admonition,{type:"info",children:(0,t.jsxs)(e.p,{children:["Dazu muss man folgendes beachten: Die Variable ",(0,t.jsx)(e.code,{children:"private double balance;"}),"\nist nicht mehr in einer Methode deklariert, sondern gleich zu Beginn, ",(0,t.jsx)(e.strong,{children:"vor"}),"\nden einzelnen Methoden (",(0,t.jsx)(e.em,{children:"im Klassen-Body"}),"). Dadurch ist die Variable ",(0,t.jsx)(e.strong,{children:"\xfcberall\nin der Klasse sichtbar"}),"."]})}),"\n",(0,t.jsx)(e.p,{children:"Dies hat nun auch den Vorteil, dass wir daraus viele Konto-Objekte erstellen\nk\xf6nnen, die komplett eigenst\xe4ndig einen Kontostand verwalten k\xf6nnen. Somit wird\nerm\xf6glicht, theoretisch mehrere Konten anzulegen."}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-java",metastring:"title=\"Beispiel: Mehrere Objekte der Klasse 'Account'\"",children:"Account sparkonto = new Account(); // neues `Account` Objekt gespeichert in der Variable `sparkonto`\nAccount girokonto = new Account(); // neues `Account` Objekt gespeichert in der Variable `girokonto`\n\nsparkonto.deposit(10); // dem Sparkonto 10 Franken einzahlen\nsparkonto.deposit(20); // dem Sparkonto 20 Franken einzahlen\n\ngirokonto.withdraw(20); // dem Girokonto 20 Franken abheben\n\nSystem.out.println(sparkonto.getBalance()); // => 30;\nSystem.out.println(girokonto.getBalance()); // => -20;\n"})}),"\n",(0,t.jsx)(e.admonition,{title:"Objekte haben eigenen Speicherbereich!",type:"tip",children:(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:["Das Objekt ",(0,t.jsx)(e.code,{children:"sparkonto"})," und ",(0,t.jsx)(e.code,{children:"girokonto"})," ",(0,t.jsx)(e.strong,{children:"teilen sich den Code"})," der Klasse\n",(0,t.jsx)(e.code,{children:"Account"}),"."]}),"\n",(0,t.jsxs)(e.li,{children:["Die ",(0,t.jsx)(e.strong,{children:"Werte der Instanz-Variable"})," ",(0,t.jsx)(e.code,{children:"private double balance;"})," sind jedoch\n",(0,t.jsx)(e.strong,{children:"unabh\xe4ngig"}),"!"]}),"\n"]})}),"\n",(0,t.jsx)(e.h2,{id:"aufgabe",children:"Aufgabe"}),"\n",(0,t.jsxs)(e.p,{children:["Bauen Sie Ihr Programm jetzt so um, dass es aus zwei Klassen besteht (die\nurspr\xfcngliche Klasse und die Klasse ",(0,t.jsx)(e.code,{children:"Account"}),")."]}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:["Kopieren Sie die Klasse ",(0,t.jsx)(e.code,{children:"AccountApplication"})," und benennen Sie die neue\n",(0,t.jsx)(e.code,{children:"AccountApplicationV2"}),"."]}),"\n",(0,t.jsxs)(e.li,{children:["Erstellen und implementieren Sie die Klasse ",(0,t.jsx)(e.code,{children:"Account"}),"."]}),"\n",(0,t.jsxs)(e.li,{children:["L\xf6schen Sie in der neuen Klasse (",(0,t.jsx)(e.code,{children:"AccountApplicationV2"}),") die Variable\n",(0,t.jsx)(e.code,{children:"double balance"}),";"]}),"\n",(0,t.jsxs)(e.li,{children:["Legen Sie daf\xfcr ein ",(0,t.jsx)(e.strong,{children:"Objekt"})," der Klasse ",(0,t.jsx)(e.code,{children:"Account"})," an."]}),"\n",(0,t.jsxs)(e.li,{children:["Jetzt erscheinen Fehler im Quellcode.","\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:["\xdcberall dort m\xfcssen Sie das Programm anpassen und mit dem ",(0,t.jsx)(e.strong,{children:"Objekt"})," der\nKlasse ",(0,t.jsx)(e.code,{children:"Account"})," arbeiten."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["Die Methoden ",(0,t.jsx)(e.code,{children:"deposit"})," und ",(0,t.jsx)(e.code,{children:"withdraw"})," m\xfcssen nun in der Klasse\n",(0,t.jsx)(e.code,{children:"AccountApplicationV2"})," gel\xf6scht werden."]}),"\n"]}),"\n",(0,t.jsx)(e.h3,{id:"uml-der-musterl\xf6sung",children:"UML der Musterl\xf6sung"}),"\n",(0,t.jsx)(e.p,{children:"Verwenden Sie das UML um die Struktur der Aufgabe zu verstehen."}),"\n",(0,t.jsx)(e.mermaid,{value:"classDiagram\n  direction LR\n  class AccountApplicationV2 {\n    +main(args: String[])$\n  }\n  class Account {\n    -balance : double\n    +getBalance() double\n    +deposit(amount : double)\n    +withdraw(amount : double)\n  }\n  class Scanner:::javaBuiltIn {\n    +Scanner(System.in)  Scanner\n    +next() String\n    +nextDouble() double\n  }\n  AccountApplicationV2 ..> Account : uses\n  AccountApplicationV2 ..> Scanner : uses"}),"\n",(0,t.jsxs)(e.admonition,{type:"tip",children:[(0,t.jsxs)(e.p,{children:["F\xfcr jeden ",(0,t.jsxs)(e.strong,{children:["gepunkteten Pfeil der mit ",(0,t.jsx)(e.code,{children:"uses"})," beschriftet"]})," ist, muss in der\nKlasse, von der der Pfeil abgeht (hier ",(0,t.jsx)(e.code,{children:"AccountApplicationV2"}),") ",(0,t.jsx)(e.strong,{children:"ein Objekt der\nKlasse auf die gezeigt wird"})," vorhanden sein (hier ",(0,t.jsx)(e.code,{children:"Account"})," und ",(0,t.jsx)(e.code,{children:"Scanner"}),")."]}),(0,t.jsxs)(e.p,{children:["In der Klasse ",(0,t.jsx)(e.code,{children:"AccountApplicationV2"})," muss somit irgendwo ",(0,t.jsx)(e.code,{children:"new Account()"})," und\n",(0,t.jsx)(e.code,{children:"new Scanner(System.in)"})," stehen! Da die Klasse ",(0,t.jsx)(e.code,{children:"AccountApplicationV2"})," nur die\n",(0,t.jsx)(e.code,{children:"main"}),"-Methode beinhaltet, wird es wohl darin sein."]}),(0,t.jsxs)(e.p,{children:["\ud83e\uddb8\u200d\u2640\ufe0f"," Theoretisch k\xf6nnte das Objekt auch \xfcber einen Parameter der Klasse\n\xfcbergeben werden. Das nennt sich ",(0,t.jsx)(e.em,{children:"Dependency-Injection"}),"."]})]}),"\n",(0,t.jsx)(e.h2,{id:"musterl\xf6sung",children:"Musterl\xf6sung"}),"\n",(0,t.jsxs)(i,{children:[(0,t.jsx)("summary",{children:"Nur zum \xdcberpr\xfcfen der eigenen Implementation!"}),(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-java",metastring:'title="AccountApplicationV2.java"',children:'import java.util.Scanner;\n\npublic class AccountApplicationV2 {\n  public static void main(String[] args) {\n    System.out.println("Welcome to the account application");\n    // highlight-next-line\n    Account account = new Account();  // hier wird ein Objekt der Klasse `Account` erstellt\n    double amount = 0;\n    String command = "";\n\n    try(Scanner scanner = new Scanner(System.in)) {\n        do {\n          System.out.println("Please enter the amount, 0 (zero) to terminate");\n          amount = scanner.nextDouble();\n          if (amount != 0) {\n            System.out.println("To deposit, press +, to withdraw press -");\n            command = scanner.next();\n            if ("+".equals(command)) {\n              // highlight-next-line\n              account.deposit(amount); // nun wird das Objekt "account" verwendet\n            } else if ("-".equals(command)) {\n              // highlight-next-line\n              account.withdraw(amount); // nun wird das Object "account" verwendet\n            }\n          }\n        } while (amount != 0);\n        // Die balance/Kontostand wird direkt im Objekt "account" berechnet\n        // highlight-next-line\n        System.out.println("Final balance: " + account.getBalance());\n    }\n  }\n}\n'})})]})]})}function u(n={}){const{wrapper:e}={...(0,r.a)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(d,{...n})}):d(n)}},1151:function(n,e,i){i.d(e,{Z:function(){return s},a:function(){return a}});var t=i(7294);const r={},c=t.createContext(r);function a(n){const e=t.useContext(c);return t.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function s(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:a(n.components),t.createElement(c.Provider,{value:e},n.children)}}}]);