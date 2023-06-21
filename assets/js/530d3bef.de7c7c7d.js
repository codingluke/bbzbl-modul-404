"use strict";(self.webpackChunkbbzbl_modul_404=self.webpackChunkbbzbl_modul_404||[]).push([[7025],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>b});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var o=r.createContext({}),u=function(e){var n=r.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},d=function(e){var n=u(e.components);return r.createElement(o.Provider,{value:n},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,o=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=u(t),m=i,b=c["".concat(o,".").concat(m)]||c[m]||p[m]||a;return t?r.createElement(b,l(l({ref:n},d),{},{components:t})):r.createElement(b,l({ref:n},d))}));function b(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,l=new Array(a);l[0]=m;var s={};for(var o in n)hasOwnProperty.call(n,o)&&(s[o]=n[o]);s.originalType=e,s[c]="string"==typeof e?e:i,l[1]=s;for(var u=2;u<a;u++)l[u]=t[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},6413:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>u});var r=t(7462),i=(t(7294),t(3905));const a={sidebar_position:2},l="Arrays",s={unversionedId:"repetition/arrays",id:"repetition/arrays",title:"Arrays",description:"Arrays sind ein besonderer Datentyp, da sie es erlauben, mehrere Werte in einer Variablen zu speichern. Diese Variable kann dazu mit einem int Wert angesprochen werden, der als Index benutzt wird, und den Zugriff auf die unterschiedlichen Werte erm\xf6glicht.",source:"@site/docs/repetition/arrays.md",sourceDirName:"repetition",slug:"/repetition/arrays",permalink:"/bbzbl-modul-404/docs/repetition/arrays",draft:!1,editUrl:"https://github.com/codingluke/bbzbl-modul-404/tree/main/docs/repetition/arrays.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Lernkarten",permalink:"/bbzbl-modul-404/docs/repetition/"},next:{title:"Basics",permalink:"/bbzbl-modul-404/docs/repetition/basics"}},o={},u=[{value:"Array Chars",id:"array-chars",level:2},{value:"String sortieren",id:"string-sortieren",level:2},{value:"Array negativ",id:"array-negativ",level:2},{value:"Add Arrays",id:"add-arrays",level:2},{value:"Combine Arrays",id:"combine-arrays",level:2},{value:"Combine Arrays with Methods",id:"combine-arrays-with-methods",level:2},{value:"Noten",id:"noten",level:2},{value:"Dice",id:"dice",level:2}],d={toc:u},c="wrapper";function p(e){let{components:n,...t}=e;return(0,i.kt)(c,(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"arrays"},"Arrays"),(0,i.kt)("p",null,"Arrays sind ein besonderer Datentyp, da sie es erlauben, mehrere Werte in einer Variablen zu speichern. Diese Variable kann dazu mit einem int Wert angesprochen werden, der als Index benutzt wird, und den Zugriff auf die unterschiedlichen Werte erm\xf6glicht."),(0,i.kt)("p",null,"Anschliessend findet Ihr Aufgaben f\xfcr die wichtigsten use-cases von Arrays."),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"Diese Aufgaben werden euch im Projekt sicher was bringen!")),(0,i.kt)("h2",{id:"array-chars"},"Array Chars"),(0,i.kt)("p",null,"Verwenden Sie eine for-Schleife, um den folgenden Array auszugeben:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"char[] text = {'h','a','l','l','o',' ','w','e','l','t'};\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Geben Sie danach den Array in ",(0,i.kt)("strong",{parentName:"li"},"umgekehrter Reihenfolge")," aus, also von hinten nach vorne."),(0,i.kt)("li",{parentName:"ul"},"Verwenden Sie daf\xfcr auch wieder eine for-Schleife.")),(0,i.kt)("details",null,(0,i.kt)("summary",null,"L\xf6sung Array Chars"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"public class ArrayChars {\n\n  public static void main(string[] args) {\n    char[] text = {'h','e','l','l','o',' ','f','e','l','l','o','w'};\n\n    for (int i = 0; i < text.length; i++) {\n      System.out.print(text[i]);\n    }\n\n    System.out.println();\n\n    for (int i = text.length - 1; i >= 0; i--) {\n      System.out.print(text[i]);\n    }\n\n    System.out.println();\n  }\n\n}\n"))),(0,i.kt)("h2",{id:"string-sortieren"},"String sortieren"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Kopieren Sie den untenstehenden Code in ein Eclipse-Projekt und lassen Sie ihn laufen."),(0,i.kt)("li",{parentName:"ol"},"Erweitern Sie das Programm so, dass der Array sortiert und danach wieder ausgegeben wird.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'public class SortString {\n\n  public static void main (String[] args) {\n    String beruf[] = {\n      "Wurstmacher",\n      "Holzbearbeiter",\n      "Laufbursche",\n      "Taxifahrer",\n      "Velokurier",\n      "Wasserfahrer",\n      "Zitronenfalter",\n      "Fensterputzer",\n      "Halsabschneider",\n    }\n    //Ausgabe aller Werte des Arrays\n    for (int i = 0; i < beruf.length; i++){\n        System.out.println(i + ". " + beruf[i]);\n    }\n    // highlight-next-line\n    // Erweitern Sie hier das Programm.\n  }\n\n}\n')),(0,i.kt)("details",null,(0,i.kt)("summary",null,"L\xf6sung: String sortieren"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'import java.util.Arrays;\n\npublic class SortString {\n\n  public static void main(String[] args) {\n    String beruf[] = {\n      "Wurstmacher",\n      "Holzbearbeiter",\n      "Laufbursche",\n      "Taxifahrer",\n      "Velokurier",\n      "Wasserfahrer",\n      "Zitronenfalter",\n      "Fensterputzer",\n      "Halsabschneider",\n    }\n\n    System.out.println("Ausgabe VOR der Sotierung");\n    for(int i = 0; i < beruf.length; i++) {\n      System.out.println(beruf[i]);\n    }\n\n    Arrays.sort(beruf);\n\n    System.out.println();\n    System.out.println("Ausgabe NACH der Sotierung");\n    for(int i = 0; i < beruf.length; i++) {\n      System.out.println(beruf[i]);\n    }\n  }\n\n}\n'))),(0,i.kt)("h2",{id:"array-negativ"},"Array negativ"),(0,i.kt)("p",null,"Gegeben ist Array a. Geben Sie alle Elemente mit einem negativen Wert untereinander auf der\nKonsole aus. Verwenden Sie auch wieder eine for-Schleife."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"int[] a = { 1, -2, -25, 6, -3, 5 };\n")),(0,i.kt)("details",null,(0,i.kt)("summary",null,"L\xf6sung: Array negativ"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"public class ArrayNegativ {\n\n  public static void main(String[] args) {\n    int[] a = { 1, -2, -25, 6, -3, 5 };\n\n    for(int i = 0; i < a.length; i++) {\n      if(a[i] < 0) {\n        System.out.println(a[i]);\n      }\n    }\n  }\n\n}\n"))),(0,i.kt)("h2",{id:"add-arrays"},"Add Arrays"),(0,i.kt)("p",null,"Gegeben sind drei Arrays ",(0,i.kt)("inlineCode",{parentName:"p"},"a"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"b")," und ",(0,i.kt)("inlineCode",{parentName:"p"},"c"),". Ver\xe4ndern Sie durch Java-Code den Array ",(0,i.kt)("inlineCode",{parentName:"p"},"c")," so, dass im Element ",(0,i.kt)("inlineCode",{parentName:"p"},"c[0]")," die Summe ",(0,i.kt)("inlineCode",{parentName:"p"},"a[0]")," plus ",(0,i.kt)("inlineCode",{parentName:"p"},"b[0]")," steht und entsprechend f\xfcr die Elemente 1, 2, 3."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"int[] a = { 1, 2, 25, 6 };  //   {  1,  2, 25,  6 }\nint[] b = { 9, 18, 5, 34 }; // + {  9, 18,  5, 34 }\nint[] c = new int[4];       // = { 10, 20, 30, 40 }\n")),(0,i.kt)("details",null,(0,i.kt)("summary",null,"L\xf6sung: Add Arrays"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"public class AddArrays {\n\n  public static void main(String[] args) {\n    int[] a = { 1, 2, 25, 6 };\n    int[] b = { 9, 18, 5, 34 };\n    int[] c = new int[4];\n\n    // Zahlen addieren und in c speichern\n    for(int i = 0; i < a.length; i++) {\n      c[i] = a[i] + b[i];\n    }\n\n    // Array c ausgeben\n    for(int i = 0; i < a.length; i++) {\n      System.out.println(c[i]);\n    }\n  }\n\n}\n"))),(0,i.kt)("h2",{id:"combine-arrays"},"Combine Arrays"),(0,i.kt)("p",null,"Gegeben sind zwei Arrays ",(0,i.kt)("inlineCode",{parentName:"p"},"a")," und ",(0,i.kt)("inlineCode",{parentName:"p"},"b"),". Erzeugen Sie einen neuen Array ",(0,i.kt)("inlineCode",{parentName:"p"},"c"),", der so lang ist wie ",(0,i.kt)("inlineCode",{parentName:"p"},"a")," und ",(0,i.kt)("inlineCode",{parentName:"p"},"b")," zusammengenommen und auch die Werte von ",(0,i.kt)("inlineCode",{parentName:"p"},"a")," und ",(0,i.kt)("inlineCode",{parentName:"p"},"b")," (in dieser Reihenfolge) enth\xe4lt."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"int[] a = { 1, 2, 25 };\nint[] b = { 9, 18 };\n")),(0,i.kt)("details",null,(0,i.kt)("summary",null,"L\xf6sung: Combine Arrays"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'public class CombineArrays {\n\n  public static void main(String[] args) {\n    int[] a = { 1, 2, 25 };\n    int[] b = { 9, 18 };\n\n    // neuer Array so lange die beiden anderen zusammen\n    int[] c = new int[a.length + b.length];\n\n    // Index f\xfcr Array c\n    int index_c = 0;\n\n    // Array a kopieren\n    for(int i = 0; i < a.length; i++) {\n      c[index_c] = a[i];\n      index_c++;\n    }\n\n    // Array b kopieren\n    for(int i = 0; i < b.length; i++) {\n      c[index_c] = b[i];\n      index_c++;\n    }\n\n    // Kontrolle: die 3 Arrays ausgeben\n    System.out.println("Array a:");\n    for(int i = 0; i < a.length; i++) {\n      System.out.println(a[i]);\n    }\n    System.out.println();\n\n    System.out.println("Array b:");\n    for(int i = 0; i < b.length; i++) {\n      System.out.println(b[i]);\n    }\n    System.out.println();\n\n    System.out.println("Array c:");\n    for(int i = 0; i < c.length; i++) {\n      System.out.println(c[i]);\n    }\n  }\n\n}\n'))),(0,i.kt)("h2",{id:"combine-arrays-with-methods"},"Combine Arrays with Methods"),(0,i.kt)("p",null,"Verwende den Code von ",(0,i.kt)("a",{parentName:"p",href:"#combine-arrays"},"Combine Arrays"),"."),(0,i.kt)("p",null,"Nun versuche die Aufgabe so zu l\xf6sen, dass das Kopieren und Ausgeben in zwei Methoden gemacht wird. Die Signatur der Methoden sind folgende:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"public static void copyArray(int[] source, int[] destination, int destination_index)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"public static void showArray(String name, int[] array)"))),(0,i.kt)("details",null,(0,i.kt)("summary",null,"L\xf6sung: Combine Arrays with Methods"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'public class CombineArraysWithMethods {\n\n  public static void main(String[] args) {\n    int[] a = { 1, 2, 25 };\n    int[] b = { 9, 18 };\n\n    // neuer Array so lange die beiden anderen zusammen\n    int[] c = new int[a.length + b.length];\n\n    // Array a kopieren\n    copyArray(a, c, 0);\n\n    // Array b kopieren\n    copyArray(b, c, a.length);\n\n    // Kontrolle: die 3 Arrays ausgeben\n    showArray("a", a);\n    showArray("b", b);\n    showArray("c", c);\n  }\n\n  // einen Array zu einem anderen Array hinzuf\xfcgen\n  // der 3. Parameter (destination_index) ist die Anzahl Elemente, die im Ziel-Array bereits abgef\xfcllt sind\n  public static void copyArray(int[] source, int[] destination, int destination_index) {\n    for(int i = 0; i < source.length; i++) {\n      destination[destination_index] = source[i];\n      destination_index++;\n    }\n  }\n\n  // Array ausgeben\n  public static void showArray(String name, int[] array) {\n    System.out.println("Array " + name + ":");\n    for(int i = 0; i < array.length; i++) {\n      System.out.println(array[i]);\n    }\n    System.out.println();\n  }\n}\n'))),(0,i.kt)("h2",{id:"noten"},"Noten"),(0,i.kt)("p",null,"Erstellen Sie ein Programm, welches Noten einlesen kann und in einem Array speichert."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Zuerst soll es nach der Anzahl Noten fragen...",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"... und dann mit diesem Wert einen neuen Array anlegen."))),(0,i.kt)("li",{parentName:"ul"},"Dann sollen alle Werte vom Benutzer eingegeben werden, wobei...",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"... nach jedem Wert der Durchschnitt der bisher eingegebenen Noten berechnet und angezeigt wird.")))),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"Die Arbeit mit Methoden kann Ihr Programm \xfcbersichtlicher machen.")),(0,i.kt)("details",null,(0,i.kt)("summary",null,"L\xf6sung: Noten"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'import java.util.Scanner;\n\npublic class Noten {\n\n  public static void main(String[] args) {\n    try(Scanner sc = new Scanner(System.in)) {\n      System.out.print("Anzahl Noten: ");\n      int number = sc.nextInt();\n\n      double[] note = new double[number];\n      for(int i = 0; i < note.length; i++) {\n        System.out.println("Geben Sie eine Note ein: ");\n        note[i] = sc.nextDouble();\n\n        double durchschnitt = durchschnitt(note, i + 1);\n        System.out.println("Durchschnitt: " + durchschnitt);\n        System.out.println();\n      }\n    }\n  }\n\n  // grade ist der Array mit den Noten\n  // count ist die bereits eingegebener Noten\n  public static double durchschnitt(double[] grade, int count) {\n    double durchschnitt = 0;\n\n    double sum = 0;\n    for(int i = 0; i < count; i++) {\n      sum = sum + grade[i];\n    }\n\n    durchschnitt = sum / count;\n    return durchschnitt;\n  }\n}\n'))),(0,i.kt)("h2",{id:"dice"},"Dice"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Erstellen Sie einen Array mit sechs 0en."),(0,i.kt)("li",{parentName:"ol"},"W\xfcrfeln Sie 100 mal mit der Methode ",(0,i.kt)("inlineCode",{parentName:"li"},"rollDice()"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Bei jedem Wurf z\xe4hlen Sie f\xfcr die gew\xfcrfelte Zahl der entsprechende index im Array hoch."))),(0,i.kt)("li",{parentName:"ol"},"Geben Sie aus wie h\xe4ufig die jeweiligen Zahlen gew\xfcrfelt wurden.")),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"Diese Aufgabe ist besonders interessant f\xfcr das Projekt")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"public class Dice {\n\n  public static void main(String[] args) {\n    // highlight-next-line\n    // die Aufgabe hier implementieren\n  }\n\n  public static int rollDice() {\n    return (int)(Math.random() * (6 - 1 + 1)) + 1;\n  }\n\n}\n")),(0,i.kt)("details",null,(0,i.kt)("summary",null,"L\xf6sung - Dice"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'public class Dice {\n\n  public static void main(String[] args) {\n    int countAll   = 0;\n    int[] count = { 0, 0, 0, 0, 0, 0 };\n\n    while(countAll < 100) {\n      int number = rollDice();\n      count[number - 1]++;\n      countAll++;\n    }\n\n    System.out.println("Gew\xfcrfelte Zahlen:");\n    for(int i = 0; i < count.length; i++) {\n      System.out.println((i+1) + ": " + count[i]);\n    }\n  }\n\n  public static int rollDice() {\n    return (int)(Math.random() * (6 - 1 + 1)) + 1;\n  }\n\n}\n'))))}p.isMDXComponent=!0}}]);