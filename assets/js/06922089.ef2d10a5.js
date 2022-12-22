"use strict";(self.webpackChunkbbzbl_modul_404=self.webpackChunkbbzbl_modul_404||[]).push([[1556],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>m});var a=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=a.createContext({}),u=function(e){var n=a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},s=function(e){var n=u(e.components);return a.createElement(c.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=u(t),m=i,g=d["".concat(c,".").concat(m)]||d[m]||p[m]||r;return t?a.createElement(g,o(o({ref:n},s),{},{components:t})):a.createElement(g,o({ref:n},s))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,o=new Array(r);o[0]=d;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var u=2;u<r;u++)o[u]=t[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},6132:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>r,metadata:()=>l,toc:()=>u});var a=t(7462),i=(t(7294),t(3905));const r={sidebar_position:3},o="3. Refactoring Account Applikation",l={unversionedId:"aufgaben-grundlagen/refactoring-account-application",id:"aufgaben-grundlagen/refactoring-account-application",title:"3. Refactoring Account Applikation",description:"Machen Sie sich mit dem Konzept der Fachklassen bekannt bevor Sie weiterfahren!",source:"@site/docs/aufgaben-grundlagen/refactoring-account-application.md",sourceDirName:"aufgaben-grundlagen",slug:"/aufgaben-grundlagen/refactoring-account-application",permalink:"/bbzbl-modul-404/docs/aufgaben-grundlagen/refactoring-account-application",draft:!1,editUrl:"https://github.com/codingluke/bbzbl-modul-404/tree/main/docs/aufgaben-grundlagen/refactoring-account-application.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"2. Analyse Account Applikation",permalink:"/bbzbl-modul-404/docs/aufgaben-grundlagen/analyse-account-application"},next:{title:"4. Starterklasse",permalink:"/bbzbl-modul-404/docs/aufgaben-grundlagen/starterklasse"}},c={},u=[{value:"Ausgangslage",id:"ausgangslage",level:2},{value:"Einf\xfchrung der Klasse <code>Account</code>/<code>Konto</code>",id:"einf\xfchrung-der-klasse-accountkonto",level:2},{value:"Aufgabe",id:"aufgabe",level:2},{value:"Musterl\xf6sung",id:"musterl\xf6sung",level:2}],s={toc:u};function p(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,a.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"3-refactoring-account-applikation"},"3. Refactoring Account Applikation"),(0,i.kt)("admonition",{title:"WICHTIG",type:"danger"},(0,i.kt)("p",{parentName:"admonition"},"\u261d\ufe0f ",(0,i.kt)("strong",{parentName:"p"},"Machen Sie sich mit dem Konzept der ",(0,i.kt)("a",{parentName:"strong",href:"/bbzbl-modul-404/docs/konzepte/fachklassen"},"Fachklassen")," bekannt bevor Sie weiterfahren!"))),(0,i.kt)("admonition",{title:"Refactoring",type:"note"},(0,i.kt)("p",{parentName:"admonition"},"Bezeichnung im Programmieren, dass man den ",(0,i.kt)("strong",{parentName:"p"},"vorhandenen Code neu Strukturiert, ohne neue Funktionalit\xe4t hinzuzuf\xfcgen"),". Refactoring dient dazu, dass die Applikation/Software auf lange Zeit besser wartbar und erweiterbar ist.")),(0,i.kt)("h2",{id:"ausgangslage"},"Ausgangslage"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Das Konto-Programm bearbeitet zu viele Aufgaben (Verantwortlichkeiten) in einer Klasse"),(0,i.kt)("li",{parentName:"ol"},"Die Arbeit wollen wir ",(0,i.kt)("strong",{parentName:"li"},"in zwei Klassen aufteilen"))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"AccountApplication")," (Beinhaltet die Benutzerinteraktion und ",(0,i.kt)("inlineCode",{parentName:"li"},"main")," Methode)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Account")," rsp. ",(0,i.kt)("inlineCode",{parentName:"li"},"Konto")," (Beinhaltet die Fachlogik)")),(0,i.kt)("h2",{id:"einf\xfchrung-der-klasse-accountkonto"},"Einf\xfchrung der Klasse ",(0,i.kt)("inlineCode",{parentName:"h2"},"Account"),"/",(0,i.kt)("inlineCode",{parentName:"h2"},"Konto")),(0,i.kt)("p",null,"Die ",(0,i.kt)("strong",{parentName:"p"},"Fachlogik")," der ",(0,i.kt)("inlineCode",{parentName:"p"},"AccountApplication")," kann in eine eigene Klasse ",(0,i.kt)("inlineCode",{parentName:"p"},"Account")," ausgelagert werden. "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="Account.java"',title:'"Account.java"'},'public class Account {\n  private double balance;             // englisch f\xfcr "kontostand"\n\n  public void deposit(double value) { // englisch f\xfcr "einzahlen"\n    balance += value;\n  }\n\n  public void withdraw(double value) { // englisch f\xfcr "auszahlen"\n    balance -= value;\n  }\n\n  public double getBalance() { \n    return balance;\n  }\n}\n')),(0,i.kt)("admonition",{title:"Dazu muss man folgendes beachten:",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Die Variable ",(0,i.kt)("inlineCode",{parentName:"p"},"private double balance;")," ist nicht mehr in einer Methode deklariert, sondern gleich zu Beginn, ",(0,i.kt)("strong",{parentName:"p"},"vor")," den einzelnen Methoden (",(0,i.kt)("em",{parentName:"p"},"im Klassen-Body"),"). Dadurch ist die Variable ",(0,i.kt)("strong",{parentName:"p"},"\xfcberall in der Klasse sichtbar"),".")),(0,i.kt)("p",null,"Dies hat nun auch den Vorteil, dass wir daraus viele Konto-Objekte erstellen k\xf6nnen, die komplett eigenst\xe4ndig einen Kontostand verwalten k\xf6nnen. Somit wird erm\xf6glicht, theoretisch mehrere Konti anzulegen."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java",metastring:"title=\"Beispiel: Mehrere Objekte der Klasse 'Account'\"",title:'"Beispiel:',Mehrere:!0,Objekte:!0,der:!0,Klasse:!0,"'Account'\"":!0},"Account sparkonto = new Account(); // neues `Account` Objekt gespeichert in der Variable `sparkonto`\nAccount girokonto = new Account(); // neues `Account` Objekt gespeichert in der Variable `girokonto`\n\nsparkonto.deposit(10); // dem Sparkonto 10 Franken einzahlen\nsparkonto.deposit(20); // dem Sparkonto 20 Franken einzahlen\n\ngirokonto.withdraw(20); // dem Girokonto 20 Franken abheben\n\nSystem.out.println(sparkonto.getBalance()); // => 30;\nSystem.out.println(girokonto.getBalance()); // => -20;\n")),(0,i.kt)("admonition",{title:"Objekte haben eigenen Speicherbereich!",type:"tip"},(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},"Das Objekt ",(0,i.kt)("inlineCode",{parentName:"li"},"sparkonto")," und ",(0,i.kt)("inlineCode",{parentName:"li"},"girokonto")," ",(0,i.kt)("strong",{parentName:"li"},"teilen sich den Code")," der Klasse ",(0,i.kt)("inlineCode",{parentName:"li"},"Account"),". "),(0,i.kt)("li",{parentName:"ul"},"Die ",(0,i.kt)("strong",{parentName:"li"},"Werte der Instanz-Variable")," ",(0,i.kt)("inlineCode",{parentName:"li"},"private doubel balance;")," sind jedoch ",(0,i.kt)("strong",{parentName:"li"},"unabh\xe4ngig"),"!"))),(0,i.kt)("h2",{id:"aufgabe"},"Aufgabe"),(0,i.kt)("p",null,"Bauen Sie Ihr Programm nun so um, dass es aus zwei Klassen besteht (die urspr\xfcngliche Klasse und die Klasse ",(0,i.kt)("inlineCode",{parentName:"p"},"Account"),")."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Erstellen und implementieren Sie die Klasse ",(0,i.kt)("inlineCode",{parentName:"li"},"Account"),"."),(0,i.kt)("li",{parentName:"ul"},"L\xf6schen Sie in der urspr\xfcngliche Klasse (",(0,i.kt)("inlineCode",{parentName:"li"},"AccountApplication"),") die Variable ",(0,i.kt)("inlineCode",{parentName:"li"},"double balance"),";"),(0,i.kt)("li",{parentName:"ul"},"Legen Sie daf\xfcr ein ",(0,i.kt)("strong",{parentName:"li"},"Objekt")," der Klasse ",(0,i.kt)("inlineCode",{parentName:"li"},"Account")," an."),(0,i.kt)("li",{parentName:"ul"},"Jetzt erscheinen Fehler im Quellcode. ",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\xdcberall dort m\xfcssen Sie das Programm anpassen und mit dem ",(0,i.kt)("strong",{parentName:"li"},"Objekt")," der Klasse ",(0,i.kt)("inlineCode",{parentName:"li"},"Account")," arbeiten."))),(0,i.kt)("li",{parentName:"ul"},"Die Methoden ",(0,i.kt)("inlineCode",{parentName:"li"},"deposit")," und ",(0,i.kt)("inlineCode",{parentName:"li"},"withdraw")," der urspr\xfcnglichen Klasse ",(0,i.kt)("inlineCode",{parentName:"li"},"AccountApplication")," ",(0,i.kt)("strong",{parentName:"li"},"m\xfcssen nun gel\xf6scht werden k\xf6nnen"),".")),(0,i.kt)("h2",{id:"musterl\xf6sung"},"Musterl\xf6sung"),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Nur zum \xdcberpr\xfcfen der eigenen Implementation!"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="AccountApplicationV2.java"',title:'"AccountApplicationV2.java"'},'import java.util.Scanner;\n\npublic class AccountApplicationV2 {\n  public static void main(String[] args) {\n    Scanner scanner = new Scanner(System.in);\n    // highlight-next-line\n    Account account = new Account();  // hier wird ein Objekt der Klasse `Account` erstellt\n    double amount = 0;\n    String command = "";\n\n    System.out.println("Welcome to the account application");\n    do {\n      System.out.println("Please enter the amount, 0 (zero) to terminate");\n      amount = scanner.nextDouble();\n      if (amount != 0) {\n        System.out.println("To deposit, press +, to withdraw press -");\n        command = scanner.next();\n        if (command.equals("+")) {\n          // highlight-next-line\n          account.deposit(amount); // nun wird das Objekt "account" verwendet\n        } else if (command.equals("-")) {\n          // highlight-next-line\n          account.withdraw(amount); // nun wird das Object "account" verwendet\n        }\n      }\n    } while (amount != 0);\n    // Die balance/Kontostand wird direkt im Objekt "account" berechnet\n    // highlight-next-line\n    System.out.println("Final balance: " + account.getBalance()); \n\n    scanner.close();\n  }\n}\n'))))}p.isMDXComponent=!0}}]);