"use strict";(self.webpackChunkdocosaurus_rex=self.webpackChunkdocosaurus_rex||[]).push([[7025],{3905:(n,e,t)=>{t.d(e,{Zo:()=>c,kt:()=>m});var r=t(7294);function i(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function a(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function l(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?a(Object(t),!0).forEach((function(e){i(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function u(n,e){if(null==n)return{};var t,r,i=function(n,e){if(null==n)return{};var t,r,i={},a=Object.keys(n);for(r=0;r<a.length;r++)t=a[r],e.indexOf(t)>=0||(i[t]=n[t]);return i}(n,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(r=0;r<a.length;r++)t=a[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(i[t]=n[t])}return i}var s=r.createContext({}),o=function(n){var e=r.useContext(s),t=e;return n&&(t="function"==typeof n?n(e):l(l({},e),n)),t},c=function(n){var e=o(n.components);return r.createElement(s.Provider,{value:e},n.children)},d={inlineCode:"code",wrapper:function(n){var e=n.children;return r.createElement(r.Fragment,{},e)}},p=r.forwardRef((function(n,e){var t=n.components,i=n.mdxType,a=n.originalType,s=n.parentName,c=u(n,["components","mdxType","originalType","parentName"]),p=o(t),m=i,b=p["".concat(s,".").concat(m)]||p[m]||d[m]||a;return t?r.createElement(b,l(l({ref:e},c),{},{components:t})):r.createElement(b,l({ref:e},c))}));function m(n,e){var t=arguments,i=e&&e.mdxType;if("string"==typeof n||i){var a=t.length,l=new Array(a);l[0]=p;var u={};for(var s in e)hasOwnProperty.call(e,s)&&(u[s]=e[s]);u.originalType=n,u.mdxType="string"==typeof n?n:i,l[1]=u;for(var o=2;o<a;o++)l[o]=t[o];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},6413:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>a,metadata:()=>u,toc:()=>o});var r=t(7462),i=(t(7294),t(3905));const a={sidebar_position:2},l="Arrays",u={unversionedId:"repetition/arrays",id:"repetition/arrays",title:"Arrays",description:"Arrays sind ein besonderer Datentyp, da sie es erlauben, mehrere Werte in einer Variablen zu speichern. Diese Variable kann dazu mit einem int Wert angesprochen werden, der als Index benutzt wird, und den Zugriff auf die unterschiedlichen Werte erm\xf6glicht.",source:"@site/docs/repetition/arrays.md",sourceDirName:"repetition",slug:"/repetition/arrays",permalink:"/bbzbl-modul-404/docs/repetition/arrays",draft:!1,editUrl:"https://github.com/codingluke/bbzbl-modul-404/tree/main/docs/repetition/arrays.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Lernkarten",permalink:"/bbzbl-modul-404/docs/repetition/"},next:{title:"Aufgaben Grundlagen",permalink:"/bbzbl-modul-404/docs/category/aufgaben-grundlagen"}},s={},o=[{value:"Aufgaben",id:"aufgaben",level:2},{value:"Musterl\xf6sungen",id:"musterl\xf6sungen",level:2}],c={toc:o};function d(n){let{components:e,...t}=n;return(0,i.kt)("wrapper",(0,r.Z)({},c,t,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"arrays"},"Arrays"),(0,i.kt)("p",null,"Arrays sind ein besonderer Datentyp, da sie es erlauben, mehrere Werte in einer Variablen zu speichern. Diese Variable kann dazu mit einem int Wert angesprochen werden, der als Index benutzt wird, und den Zugriff auf die unterschiedlichen Werte erm\xf6glicht."),(0,i.kt)("h2",{id:"aufgaben"},"Aufgaben"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://drive.google.com/file/d/1Bt4NgySXrhMeorOTuSBs_6thNwXPRbNN/view"},"\ud83d\udcdd Arrays Repetition PFD"))),(0,i.kt)("h2",{id:"musterl\xf6sungen"},"Musterl\xf6sungen"),(0,i.kt)("admonition",{title:"\xdcbung macht den Meister! :muscle:",type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"Ihr lernt f\xfcr euch! Ihr stellt euch selbst ein Bein, wenn Ihr einfach die Musterl\xf6sungen kopiert!")),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Aufgabe 1 - Array Chars"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"public class ArrayChars {\n    public static void main(String[] args) {\n        char[] text = {'h','e','l','l','o',' ','f','e','l','l','o','w'};\n        \n        for(int i = 0; i < text.length; i++) {\n            System.out.print(text[i]);\n        }\n        \n        System.out.println();\n        \n        for(int i = text.length - 1; i >= 0; i--) {\n            System.out.print(text[i]);\n        }\n        \n        System.out.println();\n    }\n\n}\n"))),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Aufgabe 2 - Felder"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'import java.util.Arrays;\n\npublic class Felder {\n\n    public static void main(String[] args) {\n        String[] beruf = new String[9];\n\n        beruf[0] = "Wurstmacher";\n        beruf[1] = "Holzbearbeiter";\n        beruf[2] = "Laufbursche";\n        beruf[3] = "Taxifahrer";\n        beruf[4] = "Velokurier";\n        beruf[5] = "Wasserfahrer";\n        beruf[6] = "Zitronenbearbeiter";\n        beruf[7] = "Fensterputzer";\n        beruf[8] = "Halsabschneider";\n        \n        System.out.println("Ausgabe VOR der Sotierung");\n        for(int i = 0; i < beruf.length; i++) {\n            System.out.println(beruf[i]);\n        }\n        \n        Arrays.sort(beruf);\n        \n        System.out.println();\n        System.out.println("Ausgabe NACH der Sotierung");\n        for(int i = 0; i < beruf.length; i++) {\n            System.out.println(beruf[i]);\n        }\n    }\n\n}\n'))),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Aufgabe 3 - Array Negative"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"public class ArrayNegativ {\n\n    public static void main(String[] args) {\n        int[] a = { 1, -2, -25, 6, -3, 5 };\n        \n        for(int i = 0; i < a.length; i++) {\n            if(a[i] < 0) {\n                System.out.println(a[i]);\n            }\n        }\n    }\n\n}\n"))),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Aufgabe 4 - Add Arrays"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"public class AddArrays {\n\n    public static void main(String[] args) {\n        int[] a = { 1, 2, 25, 6 };\n        int[] b = { 9, 18, 5, 34 };\n        int[] c = new int[4];\n\n        // Zahlen addieren und in c speichern\n        for(int i = 0; i < a.length; i++) {\n            c[i] = a[i] + b[i];\n        }\n        \n        // Array c ausgeben\n        for(int i = 0; i < a.length; i++) {\n            System.out.println(c[i]);\n        }\n    }\n\n}\n"))),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Aufgabe 5 - Combine Arrays"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'public class CombineArrays {\n\n    public static void main(String[] args) {\n        int[] a = { 1, 2, 25 };\n        int[] b = { 9, 18 };\n        \n        // neuer Array so lange die beiden anderen zusammen\n        int[] c = new int[a.length + b.length];\n        \n        // Index f\xfcr Array c\n        int index_c = 0;\n        \n        // Array a kopieren\n        for(int i = 0; i < a.length; i++) {\n            c[index_c] = a[i];\n            index_c++;\n        }\n        \n        // Array b kopieren\n        for(int i = 0; i < b.length; i++) {\n            c[index_c] = b[i];\n            index_c++;\n        }\n        \n        // Kontrolle: die 3 Arrays ausgeben\n        System.out.println("Array a:");\n        for(int i = 0; i < a.length; i++) {\n            System.out.println(a[i]);\n        }\n        System.out.println();\n        \n        System.out.println("Array b:");\n        for(int i = 0; i < b.length; i++) {\n            System.out.println(b[i]);\n        }\n        System.out.println();\n        \n        System.out.println("Array c:");\n        for(int i = 0; i < c.length; i++) {\n            System.out.println(c[i]);\n        }\n    }\n\n}\n'))),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Aufgabe 5a - Combine Arrays with Methods"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'public class CombineArraysWithMethods {\n\n    public static void main(String[] args) {\n        int[] a = { 1, 2, 25 };\n        int[] b = { 9, 18 };\n        \n        // neuer Array so lange die beiden anderen zusammen\n        int[] c = new int[a.length + b.length];\n        \n        // Array a kopieren\n        copyArray(a, c, 0);\n        \n        // Array b kopieren\n        copyArray(b, c, a.length);\n        \n        // Kontrolle: die 3 Arrays ausgeben\n        showArray("a", a);\n        showArray("b", b);\n        showArray("c", c);\n    }\n\n    // einen Array zu einem anderen Array hinzuf\xfcgen\n    // der 3. Parameter (destination_index) ist die Anzahl Elemente, die im Ziel-Array bereits abgef\xfcllt sind\n    public static void copyArray(int[] source, int[] destination, int destination_index) {\n        for(int i = 0; i < source.length; i++) {\n            destination[destination_index] = source[i];\n            destination_index++;\n        }\n    }\n    \n    // Array ausgeben\n    public static void showArray(String name, int[] array) {\n        System.out.println("Array " + name + ":");\n        for(int i = 0; i < array.length; i++) {\n            System.out.println(array[i]);\n        }\n        \n        System.out.println();\n    }\n}\n'))),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Aufgabe 6 - Noten"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'import java.util.Scanner;\n\npublic class Noten {\n\n    public static void main(String[] args) {\n\n        Scanner sc = new Scanner(System.in);\n        \n        System.out.print("Anzahl Noten: ");\n        int number = sc.nextInt();\n        \n        double[] note = new double[number];\n        for(int i = 0; i < note.length; i++) {\n            System.out.println("Geben Sie eine Note ein: ");\n            note[i] = sc.nextDouble();\n            \n            double durchschnitt = durchschnitt(note, i + 1);\n            System.out.println("Durchschnitt: " + durchschnitt);\n            System.out.println();\n        }\n    }\n\n    // grade ist der Array mit den Noten\n    // count ist die bereits eingegebener Noten\n    public static double durchschnitt(double[] grade, int count) {\n        double durchschnitt = 0;\n        \n        double sum = 0;\n        for(int i = 0; i < count; i++) {\n            sum = sum + grade[i];\n        }\n        \n        durchschnitt = sum / count;\n        return durchschnitt;\n    }\n}\n'))),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Aufgabe 7 - Dice"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'public class Dice3 {\n\n    public static void main(String[] args) {\n        int countAll   = 0;\n        int[] count = { 0, 0, 0, 0, 0, 0 };\n        \n        while(countAll < 100) {\n            int number = rollDice();\n            count[number - 1]++;\n            countAll++;\n        }\n\n        System.out.println("Gew\xfcrfelte Zahlen:");\n        for(int i = 0; i < count.length; i++) {\n            System.out.println((i+1) + ": " + count[i]);\n        }\n    }\n\n    public static int getRandomNumber(int min, int max) {\n        int number = (int)(Math.random() * (max - min + 1)) + min;\n        return number;\n    }\n    \n    public static int rollDice() {\n        return getRandomNumber(1, 6);\n    }\n}\n'))))}d.isMDXComponent=!0}}]);