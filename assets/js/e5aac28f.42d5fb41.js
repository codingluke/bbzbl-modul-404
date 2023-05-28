"use strict";(self.webpackChunkbbzbl_modul_404=self.webpackChunkbbzbl_modul_404||[]).push([[9287],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>m});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var u=a.createContext({}),o=function(e){var n=a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=o(e.components);return a.createElement(u.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,u=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=o(t),m=r,b=d["".concat(u,".").concat(m)]||d[m]||p[m]||i;return t?a.createElement(b,l(l({ref:n},c),{},{components:t})):a.createElement(b,l({ref:n},c))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,l=new Array(i);l[0]=d;var s={};for(var u in n)hasOwnProperty.call(n,u)&&(s[u]=n[u]);s.originalType=e,s.mdxType="string"==typeof e?e:r,l[1]=s;for(var o=2;o<i;o++)l[o]=t[o];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},4354:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>o});var a=t(7462),r=(t(7294),t(3905));const i={sidebar_position:4},l="4. Starterklasse",s={unversionedId:"aufgaben-grundlagen/starterklasse",id:"aufgaben-grundlagen/starterklasse",title:"4. Starterklasse",description:"- Es ist eine gute Praxis in der main Methode nicht viel Logik zu implementieren.",source:"@site/docs/aufgaben-grundlagen/starterklasse.md",sourceDirName:"aufgaben-grundlagen",slug:"/aufgaben-grundlagen/starterklasse",permalink:"/bbzbl-modul-404/docs/aufgaben-grundlagen/starterklasse",draft:!1,editUrl:"https://github.com/codingluke/bbzbl-modul-404/tree/main/docs/aufgaben-grundlagen/starterklasse.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"3. Refactoring Account Applikation",permalink:"/bbzbl-modul-404/docs/aufgaben-grundlagen/refactoring-account-application"},next:{title:"5. Fahrenheit-Celsius Konverter",permalink:"/bbzbl-modul-404/docs/aufgaben-grundlagen/einheiten-umrechnen"}},u={},o=[{value:"Aufgabe",id:"aufgabe",level:2},{value:"1. Umbau der <code>AccountApplicationV2</code> Klasse",id:"1-umbau-der-accountapplicationv2-klasse",level:3},{value:"2. Erstellen der Starterklasse",id:"2-erstellen-der-starterklasse",level:3},{value:"UML der Musterl\xf6sung",id:"uml-der-musterl\xf6sung",level:3},{value:"Musterl\xf6sung",id:"musterl\xf6sung",level:2}],c={toc:o};function p(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"4-starterklasse"},"4. Starterklasse"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Es ist eine gute Praxis in der ",(0,r.kt)("inlineCode",{parentName:"li"},"main")," Methode nicht viel Logik zu implementieren."),(0,r.kt)("li",{parentName:"ul"},"Bestenfalls besteht die ",(0,r.kt)("inlineCode",{parentName:"li"},"main")," Methode nur aus der ",(0,r.kt)("strong",{parentName:"li"},"Instanzisierung einer Applikations Klasse")," welche die eigentliche App verwaltet.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="Starter.java als Beispiel"',title:'"Starter.java',als:!0,'Beispiel"':!0},"public class Starter {\n\n    public static void main(String[] args) { // Startpunkt des Programms, ist immer static!\n        MyNewShinyApp app = new MyNewShinyApp(); // `new` ist innerhalb von `static` erlaubt\n        app.start(); // starten der eigentlichen App\n    }\n\n}\n")),(0,r.kt)("h2",{id:"aufgabe"},"Aufgabe"),(0,r.kt)("h3",{id:"1-umbau-der-accountapplicationv2-klasse"},"1. Umbau der ",(0,r.kt)("inlineCode",{parentName:"h3"},"AccountApplicationV2")," Klasse"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Kopieren Sie die Klasse und benennen Sie dies neue ",(0,r.kt)("inlineCode",{parentName:"li"},"AccountApplicationV3")),(0,r.kt)("li",{parentName:"ul"},"\xc4ndern Sie die Definition der Methode ",(0,r.kt)("inlineCode",{parentName:"li"},"public static void main(String[] args)")," um in ",(0,r.kt)("inlineCode",{parentName:"li"},"public void start()"))),(0,r.kt)("h3",{id:"2-erstellen-der-starterklasse"},"2. Erstellen der Starterklasse"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Erstellen Sie eine neue Klasse ",(0,r.kt)("inlineCode",{parentName:"li"},"Starter")),(0,r.kt)("li",{parentName:"ul"},"Diese Klasse muss die Methode ",(0,r.kt)("inlineCode",{parentName:"li"},"public static void main(String[] args)")," besitzen"),(0,r.kt)("li",{parentName:"ul"},"Erstellen Sie in der ",(0,r.kt)("inlineCode",{parentName:"li"},"main")," Methode ein ",(0,r.kt)("strong",{parentName:"li"},"Objekt")," Ihrer Applikationsklasse (",(0,r.kt)("inlineCode",{parentName:"li"},"AccountApplicationV3"),")"),(0,r.kt)("li",{parentName:"ul"},"Rufen Sie dann die Methode ",(0,r.kt)("inlineCode",{parentName:"li"},"start()")," des Objekts auf")),(0,r.kt)("h3",{id:"uml-der-musterl\xf6sung"},"UML der Musterl\xf6sung"),(0,r.kt)("p",null,"Verwenden Sie das UML um die Struktur der Aufgabe zu verstehen."),(0,r.kt)("mermaid",{value:"classDiagram\n  direction LR\n  class Starter {\n    +main(args: String[])$\n  }\n  class AccountApplicationV3 {\n    +start()\n  }\n  class Account {\n    -balance : double\n    +getBalance() double\n    +deposit(amount : double)\n    +withdraw(amount : double)\n  }\n  class Scanner:::javaBuiltIn {\n    +Scanner(System.in)  Scanner\n    +next() String\n    +nextDouble() double\n  }\n  Starter ..> AccountApplicationV3 : uses\n  AccountApplicationV3 ..> Account : uses\n  AccountApplicationV3 ..> Scanner : uses"}),(0,r.kt)("h2",{id:"musterl\xf6sung"},"Musterl\xf6sung"),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Nur zum \xdcberpr\xfcfen der eigenen Implementation!"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="Starter.java"',title:'"Starter.java"'},"public class Starter {\n\n  public static void main(String[] args) {\n    AccountApplicationV3 app = new AccountApplicationV3();\n    app.start();\n  }\n\n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="AccountApplicationV3.java"',title:'"AccountApplicationV3.java"'},'import java.util.Scanner;\n\npublic class AccountApplicationV3 {\n\n  public void start() {\n    System.out.println("Welcome to the account application");\n    Account account = new Account();  // hier wird ein Objekt der Klasse `Account` erstellt\n    double amount = 0;\n    String command = "";\n\n    try(Scanner scanner = new Scanner(System.in)) {\n      do {\n        System.out.println("Please enter the amount, 0 (zero) to terminate");\n        amount = scanner.nextDouble();\n        if (amount != 0) {\n          System.out.println("To deposit, press +, to withdraw press -");\n          command = scanner.next();\n          if ("+".equals(command)) {\n            account.deposit(amount);\n          } else if ("-".equals(command)) {\n            account.withdraw(amount);\n          }\n        }\n      } while (amount != 0);\n      System.out.println("Final balance: " + account.getBalance());\n    }\n  }\n\n}\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="Account.java"',title:'"Account.java"'},'public class Account {\n  private double balance;             // englisch f\xfcr "kontostand"\n\n  public void deposit(double value) { // englisch f\xfcr "einzahlen"\n    balance += value;\n  }\n\n  public void withdraw(double value) { // englisch f\xfcr "auszahlen"\n    balance -= value;\n  }\n\n  public double getBalance() {\n    return balance;\n  }\n}\n'))))}p.isMDXComponent=!0}}]);