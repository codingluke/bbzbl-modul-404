"use strict";(self.webpackChunkbbzbl_modul_404=self.webpackChunkbbzbl_modul_404||[]).push([[2777],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>b});var a=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=a.createContext({}),u=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=u(e.components);return a.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},p=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(t),b=i,g=p["".concat(s,".").concat(b)]||p[b]||d[b]||r;return t?a.createElement(g,o(o({ref:n},c),{},{components:t})):a.createElement(g,o({ref:n},c))}));function b(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,o=new Array(r);o[0]=p;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var u=2;u<r;u++)o[u]=t[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},3780:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>u});var a=t(7462),i=(t(7294),t(3905));const r={sidebar_position:8},o="8. Account Applikation",l={unversionedId:"aufgaben-swing/account-application",id:"aufgaben-swing/account-application",title:"8. Account Applikation",description:"In der ersten Woche haben wir eine Konsolenapplikation implementiert, wobei man einen Betrag auf ein Konto einzahlen und abheben konnte, zus\xe4tzlich wurde zum Schluss der Kontostand angezeigt.",source:"@site/docs/aufgaben-swing/account-application.md",sourceDirName:"aufgaben-swing",slug:"/aufgaben-swing/account-application",permalink:"/bbzbl-modul-404/docs/aufgaben-swing/account-application",draft:!1,editUrl:"https://github.com/codingluke/bbzbl-modul-404/tree/main/docs/aufgaben-swing/account-application.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"7. Strings in Zahlen umwandeln",permalink:"/bbzbl-modul-404/docs/aufgaben-swing/strings-nach-int-umwandeln"},next:{title:"9. JPanel",permalink:"/bbzbl-modul-404/docs/aufgaben-swing/jpanel"}},s={},u=[{value:"Musterl\xf6sung",id:"musterl\xf6sung",level:2}],c={toc:u};function d(e){let{components:n,...r}=e;return(0,i.kt)("wrapper",(0,a.Z)({},c,r,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"8-account-applikation"},"8. Account Applikation"),(0,i.kt)("p",null,"In der ersten Woche haben wir eine Konsolenapplikation implementiert, wobei man einen Betrag auf ein Konto einzahlen und abheben konnte, zus\xe4tzlich wurde zum Schluss der Kontostand angezeigt."),(0,i.kt)("p",null,"Sie haben sich mittlerweile schon ein grosses Wissen angeeignet, wie wir mit Swing Programme mit einer graphischen Benutzeroberfl\xe4che schreiben k\xf6nnen. Sie wissen auch, wie Sie vom Benutzer Eingaben erhalten und Werte ausgeben k\xf6nnen."),(0,i.kt)("p",null,"Jetzt geht es darum, unser Einstiegsbeispiel einer einfachen Kontoverwaltung zu \xfcberarbeiten. Versuchen Sie alles Wissen anzuwenden, das Sie sich angeeignet haben. Arbeiten Sie mit dem Faktenblatt zusammen, wenn Sie unsicher sind. Es enth\xe4lt sehr viele Informationen, aber man muss wissen, wo sie stehen. Wenn Sie sich jetzt an dieses Blatt gew\xf6hnen, kann es Ihnen bei einer Leistungsbeurteilung eine Hilfe sein."),(0,i.kt)("p",null,(0,i.kt)("img",{src:t(8051).Z,width:"1532",height:"486"})),(0,i.kt)("p",null,"Das Programm muss nicht genau so aussehen. Aber vielleicht m\xf6chten Sie etwas ausprobieren."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Die Applikation startet mit Kontostand 0"),(0,i.kt)("li",{parentName:"ul"},"Im Textfeld kann man einen Betrag eingeben"),(0,i.kt)("li",{parentName:"ul"},"Durch Bet\xe4tigen des Buttons \xabDeposit!\xbb wird der eingegebene Betrag dem Konto gutgeschrieben und die Anzeige oberhalb (Balance:) aktualisiert. Anschliessend wird das Textfeld mit der Eingabe geleert."),(0,i.kt)("li",{parentName:"ul"},"Durch Bet\xe4tigen des Buttons \xabWithdraw!\xbb wird der eingegebene Betrag dem Konto abgezogen und die Anzeige oberhalb (Balance:) aktualisiert. Anschliessend wird das Textfeld mit der Eingabe geleert.")),(0,i.kt)("h2",{id:"musterl\xf6sung"},"Musterl\xf6sung"),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Immer zuerste selber versuchen! L\xf6sung abtippen, nicht kopieren ;)"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="Starter.java"',title:'"Starter.java"'},"public class Starter {\n  public static void main(String[] args) {\n    AccountGui gui = new AccountGui();\n    gui.showDialog();\n  }\n}\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="AccountGui.java"',title:'"AccountGui.java"'},'import java.awt.event.ActionEvent;\nimport java.awt.event.ActionListener;\n\nimport javax.swing.JButton;\nimport javax.swing.JFrame;\nimport javax.swing.JLabel;\nimport javax.swing.JTextField;\n\npublic class AccountGui extends JFrame implements ActionListener {\n  Account account;\n  JButton deposit;\n  JButton withdraw;\n  JLabel balanceLabel;\n  JTextField amountTextField;\n  \n  public AccountGui() {\n    // Initialisieren der Werte im Konstruktor\n    account = new Account();\n    deposit = new JButton("einzahlen");\n    withdraw = new JButton("auszahlen");\n    balanceLabel = new JLabel();\n    amountTextField = new JTextField();\n  }\n  \n  public AccountGui(double startBalance) {\n    // Initialisieren der Werte mit einem startguthaben\n    account = new Account();\n    account.deposit(startBalance);\n    deposit = new JButton("einzahlen");\n    withdraw = new JButton("auszahlen");\n    balanceLabel = new JLabel();\n    amountTextField = new JTextField();\n  }\n\n  public void showDialog() {\n    this.setLayout(null);\n\n    amountTextField.setBounds(10, 10, 250, 20);\n    balanceLabel.setBounds(10, 40, 250, 20);\n    deposit.setBounds(10, 70, 250, 20);\n    withdraw.setBounds(10, 100, 250, 20);\n\n    this.add(amountTextField);\n    this.add(balanceLabel);\n    this.add(deposit);\n    this.add(withdraw);\n\n    deposit.addActionListener(this);\n    withdraw.addActionListener(this);\n\n    this.setTitle("Account GUI Application");\n    this.setDefaultCloseOperation(EXIT_ON_CLOSE);\n    this.setSize(300, 300);\n    this.setVisible(true);\n  }\n\n  @Override\n  public void actionPerformed(ActionEvent e) {\n    if (e.getSource() == deposit) {\n        account.deposit(getAmount());\n    } else if (e.getSource() == withdraw) {\n        account.withdraw(getAmount());\n    }\n    refreshBalance();\n    clearAmount();\n  }\n\n  // Es ist guter Stil, wenn private Methoden unterhalb der public Methoden stehen\n  // Am besten sortiert nach der Verwendung. Dies vereinfacht das Lesen des Codes!\n\n  private double getAmount() {\n    return Double.parseDouble(amountTextField.getText());\n  }\n\n  private void refreshBalance() {\n    double balance = account.getBalance();\n    balanceLabel.setText(balance + "");\n    //balanceLabel.setText(Double.toString(balance)); // alternative M\xf6glichkeit\n  }\n\n  private void clearAmount() {\n    amountTextField.getText("");\n  }\n}\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="Account.java"',title:'"Account.java"'},"public class Account {\n  private double balance;\n\n  public double getBalance() {\n    return balance;\n  }\n\n  public void deposit(double value) {\n    this.balance += value;\n  }\n  \n  public void withdraw(double value) {\n    this.balance -= value;\n  }\n}\n"))))}d.isMDXComponent=!0},8051:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/account-application-swing-6df43eb578bfba667a2b892058f0b4bc.png"}}]);