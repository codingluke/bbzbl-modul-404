"use strict";(self.webpackChunkbbzbl_modul_404=self.webpackChunkbbzbl_modul_404||[]).push([[2777],{7691:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>s,metadata:()=>r,toc:()=>c});var i=t(5893),a=t(1151);const s={sidebar_position:6},o="6. Account Applikation",r={id:"aufgaben-swing/account-application",title:"6. Account Applikation",description:"In der ersten Woche haben wir eine Konsolenapplikation implementiert, wobei man",source:"@site/docs/aufgaben-swing/account-application.md",sourceDirName:"aufgaben-swing",slug:"/aufgaben-swing/account-application",permalink:"/bbzbl-modul-404/docs/aufgaben-swing/account-application",draft:!1,unlisted:!1,editUrl:"https://github.com/codingluke/bbzbl-modul-404/tree/main/docs/aufgaben-swing/account-application.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"5. Strings in Zahlen umwandeln",permalink:"/bbzbl-modul-404/docs/aufgaben-swing/strings-nach-int-umwandeln"},next:{title:"7. Konstruktor",permalink:"/bbzbl-modul-404/docs/aufgaben-swing/konstruktor"}},l={},c=[{value:"Musterl\xf6sung",id:"musterl\xf6sung",level:2}];function u(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.a)(),...e.components},{Details:s}=n;return s||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"6-account-applikation",children:"6. Account Applikation"}),"\n",(0,i.jsx)(n.p,{children:"In der ersten Woche haben wir eine Konsolenapplikation implementiert, wobei man\neinen Betrag auf ein Konto einzahlen und abheben konnte, zus\xe4tzlich wurde zum\nSchluss der Kontostand angezeigt."}),"\n",(0,i.jsx)(n.p,{children:"Sie haben sich mittlerweile schon ein grosses Wissen angeeignet, wie wir mit\nSwing Programme mit einer grafischen Benutzeroberfl\xe4che schreiben k\xf6nnen. Sie\nwissen auch, wie Sie vom Benutzer Eingaben erhalten und Werte ausgeben k\xf6nnen."}),"\n",(0,i.jsx)(n.p,{children:"Jetzt geht es darum, unser Einstiegsbeispiel einer einfachen Kontoverwaltung zu\n\xfcberarbeiten. Versuchen Sie alles Wissen anzuwenden, das Sie sich angeeignet\nhaben. Arbeiten Sie mit dem Faktenblatt zusammen, wenn Sie unsicher sind. Es\nenth\xe4lt sehr viele Informationen, aber man muss wissen, wo sie stehen. Wenn Sie\nsich jetzt an dieses Blatt gew\xf6hnen, kann es Ihnen bei einer\nLeistungsbeurteilung eine Hilfe sein."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"account application",src:t(8051).Z+"",width:"1532",height:"486"})}),"\n",(0,i.jsx)(n.p,{children:"Das Programm muss nicht genau so aussehen. Aber vielleicht m\xf6chten Sie etwas\nausprobieren."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Die Applikation startet mit Kontostand 0."}),"\n",(0,i.jsx)(n.li,{children:"Im Textfeld kann man einen Betrag eingeben."}),"\n",(0,i.jsx)(n.li,{children:"Durch Bet\xe4tigen des Buttons \xabDeposit!\xbb wird der eingegebene Betrag dem Konto\ngutgeschrieben und die Anzeige oberhalb (Balance) aktualisiert. Anschliessend\nwird das Textfeld mit der Eingabe geleert."}),"\n",(0,i.jsx)(n.li,{children:"Durch Bet\xe4tigen des Buttons \xabWithdraw!\xbb wird der eingegebene Betrag dem Konto\nabgezogen und die Anzeige oberhalb (Balance) aktualisiert. Anschliessend wird\ndas Textfeld mit der Eingabe geleert."}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"musterl\xf6sung",children:"Musterl\xf6sung"}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsxs)(n.p,{children:["Die Musterl\xf6sung ist mit einem ",(0,i.jsx)(n.a,{href:"../konzepte/Konstruktor",children:"Konstruktor"})," erstellt,\nIhr m\xfcsst es jedoch nicht so machen!"]})}),"\n",(0,i.jsxs)(s,{children:[(0,i.jsx)("summary",{children:(0,i.jsx)(n.p,{children:"Immer zuerst selber versuchen! L\xf6sung abtippen, nicht kopieren ;)"})}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",metastring:'title="Starter.java"',children:"public class Starter {\n  public static void main(String[] args) {\n    AccountGui gui = new AccountGui();\n    gui.showDialog();\n  }\n}\n"})}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",metastring:'title="AccountGui.java"',children:'import java.awt.Color;\nimport java.awt.Font;\nimport java.awt.event.ActionEvent;\nimport java.awt.event.ActionListener;\nimport javax.swing.JButton;\nimport javax.swing.JFrame;\nimport javax.swing.JLabel;\nimport javax.swing.JTextField;\n\npublic class AccountGui extends JFrame implements ActionListener {\n  Account account;\n  JButton deposit = new JButton("Deposit!");\n  ;\n  JButton withdraw = new JButton("Withdraw!");\n  JLabel balanceLabel = new JLabel("Balance:");\n  JLabel balanceAmountLabel = new JLabel();\n  JTextField amountTextField = new JTextField();\n\n  public AccountGui() {\n    // Initialisieren vom Account im Konstruktor\n    account = new Account();\n  }\n\n  public AccountGui(double startBalance) {\n    // Initialisieren vom Account mit einem startguthaben\n    account = new Account();\n    account.deposit(startBalance);\n  }\n\n  public void showDialog() {\n    this.setLayout(null);\n\n    amountTextField.setBounds(170, 50, 370, 90);\n    amountTextField.setFont(new Font("Arial", Font.BOLD, 80));\n    amountTextField.setForeground(Color.blue);\n\n    balanceLabel.setBounds(10, 10, 100, 30);\n    balanceLabel.setFont(new Font("Arial", Font.BOLD, 24));\n\n    balanceAmountLabel.setBounds(10, 40, 250, 20);\n    balanceAmountLabel.setBounds(170, 10, 390, 30);\n    balanceAmountLabel.setFont(new Font("Arial", Font.BOLD, 24));\n\n    deposit.setBounds(10, 50, 150, 40);\n    deposit.addActionListener(this);\n\n    withdraw.setBounds(10, 100, 150, 40);\n    withdraw.addActionListener(this);\n\n    this.add(amountTextField);\n    this.add(balanceLabel);\n    this.add(balanceAmountLabel);\n    this.add(deposit);\n    this.add(withdraw);\n\n    this.setTitle("Account GUI Application");\n    this.setDefaultCloseOperation(EXIT_ON_CLOSE);\n    this.setSize(580, 200);\n    this.setVisible(true);\n  }\n\n  @Override\n  public void actionPerformed(ActionEvent e) {\n    if (e.getSource() == deposit) {\n      account.deposit(getAmount());\n    } else if (e.getSource() == withdraw) {\n      account.withdraw(getAmount());\n    }\n    refreshBalance();\n    clearAmount();\n  }\n\n  // Es ist guter Stil, wenn private Methoden unterhalb der public Methoden stehen\n  // Am Besten sortiert nach der Verwendung. Dies vereinfacht das Lesen des Codes!\n\n  private double getAmount() {\n    return Double.parseDouble(amountTextField.getText());\n  }\n\n  private void refreshBalance() {\n    double balance = account.getBalance();\n    balanceAmountLabel.setText(balance + "");\n    // balanceLabel.setText(Double.toString(balance)); // alternative M\xf6glichkeit\n  }\n\n  private void clearAmount() {\n    amountTextField.setText("");\n  }\n}\n'})}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",metastring:'title="Account.java"',children:"public class Account {\n  private double balance;\n\n  public double getBalance() {\n    return balance;\n  }\n\n  public void deposit(double value) {\n    this.balance += value;\n  }\n\n  public void withdraw(double value) {\n    this.balance -= value;\n  }\n}\n"})})]})]})}function d(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},8051:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/account-application-swing-6df43eb578bfba667a2b892058f0b4bc.png"},1151:(e,n,t)=>{t.d(n,{Z:()=>r,a:()=>o});var i=t(7294);const a={},s=i.createContext(a);function o(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);