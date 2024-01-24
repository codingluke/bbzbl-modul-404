"use strict";(self.webpackChunkbbzbl_modul_404=self.webpackChunkbbzbl_modul_404||[]).push([[2777],{7691:function(n,e,t){t.r(e),t.d(e,{assets:function(){return l},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return o},metadata:function(){return r},toc:function(){return c}});var i=t(5893),a=t(1151);const o={sidebar_position:6},s="6. Account Applikation",r={id:"aufgaben-swing/account-application",title:"6. Account Applikation",description:"In der ersten Woche haben wir eine Konsolenapplikation implementiert, wobei man",source:"@site/docs/aufgaben-swing/account-application.md",sourceDirName:"aufgaben-swing",slug:"/aufgaben-swing/account-application",permalink:"/bbzbl-modul-404/docs/aufgaben-swing/account-application",draft:!1,unlisted:!1,editUrl:"https://github.com/codingluke/bbzbl-modul-404/tree/main/docs/aufgaben-swing/account-application.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"5. Strings in Zahlen umwandeln",permalink:"/bbzbl-modul-404/docs/aufgaben-swing/strings-nach-int-umwandeln"},next:{title:"7. Konstruktor",permalink:"/bbzbl-modul-404/docs/aufgaben-swing/konstruktor"}},l={},c=[{value:"Musterl\xf6sung",id:"musterl\xf6sung",level:2}];function u(n){const e={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.a)(),...n.components},{Details:o}=e;return o||function(n,e){throw new Error("Expected "+(e?"component":"object")+" `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h1,{id:"6-account-applikation",children:"6. Account Applikation"}),"\n",(0,i.jsx)(e.p,{children:"In der ersten Woche haben wir eine Konsolenapplikation implementiert, wobei man\neinen Betrag auf ein Konto einzahlen und abheben konnte, zus\xe4tzlich wurde zum\nSchluss der Kontostand angezeigt."}),"\n",(0,i.jsx)(e.p,{children:"Sie haben sich mittlerweile schon ein grosses Wissen angeeignet, wie wir mit\nSwing Programme mit einer grafischen Benutzeroberfl\xe4che schreiben k\xf6nnen. Sie\nwissen auch, wie Sie vom Benutzer Eingaben erhalten und Werte ausgeben k\xf6nnen."}),"\n",(0,i.jsx)(e.p,{children:"Jetzt geht es darum, unser Einstiegsbeispiel einer einfachen Kontoverwaltung zu\n\xfcberarbeiten. Versuchen Sie alles Wissen anzuwenden, das Sie sich angeeignet\nhaben. Arbeiten Sie mit dem Faktenblatt zusammen, wenn Sie unsicher sind. Es\nenth\xe4lt sehr viele Informationen, aber man muss wissen, wo sie stehen. Wenn Sie\nsich jetzt an dieses Blatt gew\xf6hnen, kann es Ihnen bei einer\nLeistungsbeurteilung eine Hilfe sein."}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.img,{src:t(8051).Z+"",width:"1532",height:"486"})}),"\n",(0,i.jsx)(e.p,{children:"Das Programm muss nicht genau so aussehen. Aber vielleicht m\xf6chten Sie etwas\nausprobieren."}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"Die Applikation startet mit Kontostand 0."}),"\n",(0,i.jsx)(e.li,{children:"Im Textfeld kann man einen Betrag eingeben."}),"\n",(0,i.jsx)(e.li,{children:"Durch Bet\xe4tigen des Buttons \xabDeposit!\xbb wird der eingegebene Betrag dem Konto\ngutgeschrieben und die Anzeige oberhalb (Balance) aktualisiert. Anschliessend\nwird das Textfeld mit der Eingabe geleert."}),"\n",(0,i.jsx)(e.li,{children:"Durch Bet\xe4tigen des Buttons \xabWithdraw!\xbb wird der eingegebene Betrag dem Konto\nabgezogen und die Anzeige oberhalb (Balance) aktualisiert. Anschliessend wird\ndas Textfeld mit der Eingabe geleert."}),"\n"]}),"\n",(0,i.jsx)(e.h2,{id:"musterl\xf6sung",children:"Musterl\xf6sung"}),"\n",(0,i.jsx)(e.admonition,{type:"info",children:(0,i.jsxs)(e.p,{children:["Die Musterl\xf6sung ist mit einem ",(0,i.jsx)(e.a,{href:"../konzepte/Konstruktor",children:"Konstruktor"})," erstellt,\nIhr m\xfcsst es jedoch nicht so machen!"]})}),"\n",(0,i.jsxs)(o,{children:[(0,i.jsx)("summary",{children:"Immer zuerst selber versuchen! L\xf6sung abtippen, nicht kopieren ;)"}),(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-java",metastring:'title="Starter.java"',children:"public class Starter {\n\tpublic static void main(String[] args) {\n\t\tAccountGui gui = new AccountGui();\n\t\tgui.showDialog();\n\t}\n}\n"})}),(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-java",metastring:'title="AccountGui.java"',children:'import java.awt.Color;\nimport java.awt.Font;\nimport java.awt.event.ActionEvent;\nimport java.awt.event.ActionListener;\n\nimport javax.swing.JButton;\nimport javax.swing.JFrame;\nimport javax.swing.JLabel;\nimport javax.swing.JTextField;\n\npublic class AccountGui extends JFrame implements ActionListener {\n\tAccount account;\n\tJButton deposit = new JButton("Deposit!");;\n\tJButton withdraw = new JButton("Withdraw!");\n\tJLabel balanceLabel = new JLabel("Balance:");\n\tJLabel balanceAmountLabel = new JLabel();\n\tJTextField amountTextField = new JTextField();\n\n\tpublic AccountGui() {\n\t\t// Initialisieren vom Account im Konstruktor\n\t\taccount = new Account();\n\t}\n\n\tpublic AccountGui(double startBalance) {\n\t\t// Initialisieren vom Account mit einem startguthaben\n\t\taccount = new Account();\n\t\taccount.deposit(startBalance);\n\t}\n\n\tpublic void showDialog() {\n\t\tthis.setLayout(null);\n\n\t\tamountTextField.setBounds(170, 50, 370, 90);\n\t\tamountTextField.setFont(new Font("Arial", Font.BOLD, 80));\n\t\tamountTextField.setForeground(Color.blue);\n\n\t\tbalanceLabel.setBounds(10, 10, 100, 30);\n\t\tbalanceLabel.setFont(new Font("Arial", Font.BOLD, 24));\n\n\t\tbalanceAmountLabel.setBounds(10, 40, 250, 20);\n\t\tbalanceAmountLabel.setBounds(170, 10, 390, 30);\n\t\tbalanceAmountLabel.setFont(new Font("Arial", Font.BOLD, 24));\n\n\t\tdeposit.setBounds(10, 50, 150, 40);\n\t\tdeposit.addActionListener(this);\n\n\t\twithdraw.setBounds(10, 100, 150, 40);\n\t\twithdraw.addActionListener(this);\n\n\t\tthis.add(amountTextField);\n\t\tthis.add(balanceLabel);\n\t\tthis.add(balanceAmountLabel);\n\t\tthis.add(deposit);\n\t\tthis.add(withdraw);\n\n\t\tthis.setTitle("Account GUI Application");\n\t\tthis.setDefaultCloseOperation(EXIT_ON_CLOSE);\n\t\tthis.setSize(580, 200);\n\t\tthis.setVisible(true);\n\t}\n\n\t@Override\n\tpublic void actionPerformed(ActionEvent e) {\n\t\tif (e.getSource() == deposit) {\n\t\t\taccount.deposit(getAmount());\n\t\t} else if (e.getSource() == withdraw) {\n\t\t\taccount.withdraw(getAmount());\n\t\t}\n\t\trefreshBalance();\n\t\tclearAmount();\n\t}\n\n\t// Es ist guter Stil, wenn private Methoden unterhalb der public Methoden stehen\n\t// Am Besten sortiert nach der Verwendung. Dies vereinfacht das Lesen des Codes!\n\n\tprivate double getAmount() {\n\t\treturn Double.parseDouble(amountTextField.getText());\n\t}\n\n\tprivate void refreshBalance() {\n\t\tdouble balance = account.getBalance();\n\t\tbalanceAmountLabel.setText(balance + "");\n\t\t// balanceLabel.setText(Double.toString(balance)); // alternative M\xf6glichkeit\n\t}\n\n\tprivate void clearAmount() {\n\t\tamountTextField.setText("");\n\t}\n}\n'})}),(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-java",metastring:'title="Account.java"',children:"public class Account {\n\tprivate double balance;\n\n\tpublic double getBalance() {\n\t\treturn balance;\n\t}\n\n\tpublic void deposit(double value) {\n\t\tthis.balance += value;\n\t}\n\n\tpublic void withdraw(double value) {\n\t\tthis.balance -= value;\n\t}\n}\n"})})]})]})}function d(n={}){const{wrapper:e}={...(0,a.a)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(u,{...n})}):u(n)}},8051:function(n,e,t){e.Z=t.p+"assets/images/account-application-swing-6df43eb578bfba667a2b892058f0b4bc.png"},1151:function(n,e,t){t.d(e,{Z:function(){return r},a:function(){return s}});var i=t(7294);const a={},o=i.createContext(a);function s(n){const e=i.useContext(o);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function r(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(a):n.components||a:s(n.components),i.createElement(o.Provider,{value:e},n.children)}}}]);