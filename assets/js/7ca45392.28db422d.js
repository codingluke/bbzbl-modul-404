"use strict";(self.webpackChunkbbzbl_modul_404=self.webpackChunkbbzbl_modul_404||[]).push([[1099],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>p});var i=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,i,a=function(e,n){if(null==e)return{};var t,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var o=i.createContext({}),d=function(e){var n=i.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},s=function(e){var n=d(e.components);return i.createElement(o.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},g=i.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),g=d(t),p=a,c=g["".concat(o,".").concat(p)]||g[p]||m[p]||r;return t?i.createElement(c,l(l({ref:n},s),{},{components:t})):i.createElement(c,l({ref:n},s))}));function p(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,l=new Array(r);l[0]=g;var u={};for(var o in n)hasOwnProperty.call(n,o)&&(u[o]=n[o]);u.originalType=e,u.mdxType="string"==typeof e?e:a,l[1]=u;for(var d=2;d<r;d++)l[d]=t[d];return i.createElement.apply(null,l)}return i.createElement.apply(null,t)}g.displayName="MDXCreateElement"},1044:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>m,frontMatter:()=>r,metadata:()=>u,toc:()=>d});var i=t(7462),a=(t(7294),t(3905));const r={sidebar_position:5},l="5. Strings in Zahlen umwandeln",u={unversionedId:"aufgaben-swing/strings-nach-int-umwandeln",id:"aufgaben-swing/strings-nach-int-umwandeln",title:"5. Strings in Zahlen umwandeln",description:"Das nachfolgende Programm zeigt ein Swing-Programm, bei dem eine Zahl eingelesen wird, damit eine einfache Rechnung angestellt und das Ergebnis wieder ausgegeben wird.",source:"@site/docs/aufgaben-swing/strings-nach-int-umwandeln.md",sourceDirName:"aufgaben-swing",slug:"/aufgaben-swing/strings-nach-int-umwandeln",permalink:"/bbzbl-modul-404/docs/aufgaben-swing/strings-nach-int-umwandeln",draft:!1,editUrl:"https://github.com/codingluke/bbzbl-modul-404/tree/main/docs/aufgaben-swing/strings-nach-int-umwandeln.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"4. JButton Aktivieren",permalink:"/bbzbl-modul-404/docs/aufgaben-swing/buttons-aktivieren"},next:{title:"6. Account Applikation",permalink:"/bbzbl-modul-404/docs/aufgaben-swing/account-application"}},o={},d=[{value:"Beispiel: Umwandeln und 5 hinzuf\xfcgen",id:"beispiel-umwandeln-und-5-hinzuf\xfcgen",level:2},{value:"Erl\xe4uterung zum Code:",id:"erl\xe4uterung-zum-code",level:3},{value:"Aufgabe",id:"aufgabe",level:2}],s={toc:d};function m(e){let{components:n,...r}=e;return(0,a.kt)("wrapper",(0,i.Z)({},s,r,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"5-strings-in-zahlen-umwandeln"},"5. Strings in Zahlen umwandeln"),(0,a.kt)("p",null,"Das nachfolgende Programm zeigt ein Swing-Programm, bei dem eine Zahl eingelesen wird, damit eine einfache Rechnung angestellt und das Ergebnis wieder ausgegeben wird."),(0,a.kt)("h2",{id:"beispiel-umwandeln-und-5-hinzuf\xfcgen"},"Beispiel: Umwandeln und 5 hinzuf\xfcgen"),(0,a.kt)("p",null,(0,a.kt)("img",{src:t(5959).Z,width:"1668",height:"906"})),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="CastingExample.java"',title:'"CastingExample.java"'},'public class CastingExample extends JFrame implements ActionListener {\n  JButton commandButton = new JButton("add 5 and display");\n  JLabel outputLabel = new JLabel();\n  JTextField entryField = new JTextField();\n\n  public void showDialog() {\n    setLayout(null);\n    entryField.setBounds(10,10,150,15);\n    outputLabel.setBounds(10,40,150,15);\n    commandButton.setBounds(10, 60, 250, 20);\n    add(entryField);\n    add(outputLabel);\n    add(commandButton);\n    // highlight-next-line\n    commandButton.addActionListener(this);\n    setDefaultCloseOperation(EXIT_ON_CLOSE);\n    setSize(300,300);\n    setTitle("String umwandeln");\n    setVisible(true);\n  }\n\n  @Override\n  public void actionPerformed(ActionEvent e) {\n    // Damit mit der Eingabe gerechnet werden kann, muss der String\n    // in einen double umgerechnet werden. Dies geht mit `Double.parseDouble(String string)`\n    // highlight-next-line\n    double number = Double.parseDouble(entryField.getText()); // String -> doubel\n    number = number + 5; // double wird mathematisch mutiert\n    // Nach der Rechnung muss der double wieder in einen String umgewandelt werden\n    // highlight-next-line\n    outputLabel.setText("" + number); // double -> String\n    entryField.setText("");\n  }\n}\n')),(0,a.kt)("h3",{id:"erl\xe4uterung-zum-code"},"Erl\xe4uterung zum Code:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Neu ist hier ",(0,a.kt)("inlineCode",{parentName:"li"},"Double.parseDouble(String string)"),", welches demnach einen String als Parameter entgegen nimmt. Diese Methode verwandelt den String, welcher durch ",(0,a.kt)("inlineCode",{parentName:"li"},"entryField.getText()")," zur\xfcck gegeben wird in eine Zahl vom Typ ",(0,a.kt)("inlineCode",{parentName:"li"},"double"),", mit der dann gerechnet wird. Anschliessend wird das Resultat im outputLabel ausgegeben."),(0,a.kt)("li",{parentName:"ul"},"Da das ",(0,a.kt)("inlineCode",{parentName:"li"},"outputLabel")," aber einen String-Wert erwartet, wird der Datentyp durch die Methode ",(0,a.kt)("inlineCode",{parentName:"li"},"Double.toString(double value)")," in einen String umgewandelt. ")),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"Solche Methoden gibt es nicht nur f\xfcr den Datentyp ",(0,a.kt)("inlineCode",{parentName:"p"},"double"),", sondern auch f\xfcr ",(0,a.kt)("inlineCode",{parentName:"p"},"foat")," und ",(0,a.kt)("inlineCode",{parentName:"p"},"int"),". Da heissen die Methoden dann entsprechend ",(0,a.kt)("inlineCode",{parentName:"p"},"Float.parseFloat(String value)")," und ",(0,a.kt)("inlineCode",{parentName:"p"},"Integer.parseInt(String value)"),"."),(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"\ud83d\udca1 Nach ",(0,a.kt)("inlineCode",{parentName:"li"},"String")," kann ",(0,a.kt)("strong",{parentName:"li"},"jeder Datentyp")," mit ",(0,a.kt)("inlineCode",{parentName:"li"},'"" + variable')," umgewandelt werden! \ud83d\udca1"))),(0,a.kt)("h2",{id:"aufgabe"},"Aufgabe"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Erweitern Sie das Programm mit einem weiteren Textfeld ",(0,a.kt)("inlineCode",{parentName:"li"},"entryField2")),(0,a.kt)("li",{parentName:"ul"},'Benennen Sie den Button nach "Sum" um'),(0,a.kt)("li",{parentName:"ul"},'Bei einem Klick auf den Button "Sum" sollen die Eingaben vom ',(0,a.kt)("inlineCode",{parentName:"li"},"entryField")," und ",(0,a.kt)("inlineCode",{parentName:"li"},"entryField2")," aufsummiert werden und im ",(0,a.kt)("inlineCode",{parentName:"li"},"outputLabel")," ausgegeben werden.")),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"zu dieser Aufgabe gibt es keine Musterl\xf6sung")))}m.isMDXComponent=!0},5959:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/String-Umwandeln-Rechnen-2edbfe8da3649e9bca26e967cafd0562.png"}}]);