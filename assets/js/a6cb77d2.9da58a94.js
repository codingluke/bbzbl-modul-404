"use strict";(self.webpackChunkbbzbl_modul_404=self.webpackChunkbbzbl_modul_404||[]).push([[8946],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>p});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var o=a.createContext({}),u=function(e){var n=a.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},d=function(e){var n=u(e.components);return a.createElement(o.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),m=u(t),p=r,b=m["".concat(o,".").concat(p)]||m[p]||c[p]||i;return t?a.createElement(b,l(l({ref:n},d),{},{components:t})):a.createElement(b,l({ref:n},d))}));function p(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,l=new Array(i);l[0]=m;var s={};for(var o in n)hasOwnProperty.call(n,o)&&(s[o]=n[o]);s.originalType=e,s.mdxType="string"==typeof e?e:r,l[1]=s;for(var u=2;u<i;u++)l[u]=t[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},4813:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>M,contentTitle:()=>j,default:()=>D,frontMatter:()=>C,metadata:()=>O,toc:()=>E});var a=t(7462),r=t(7294),i=t(3905),l=t(6010),s=t(2466),o=t(6775),u=t(1980),d=t(7392),c=t(12);function m(e){return function(e){return r.Children.map(e,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')}))}(e).map((e=>{let{props:{value:n,label:t,attributes:a,default:r}}=e;return{value:n,label:t,attributes:a,default:r}}))}function p(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=null!=n?n:m(t);return function(e){const n=(0,d.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error('Docusaurus error: Duplicate values "'+n.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[n,t])}function b(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function k(e){let{queryString:n=!1,groupId:t}=e;const a=(0,o.k6)(),i=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=t?t:null}({queryString:n,groupId:t});return[(0,u._X)(i),(0,r.useCallback)((e=>{if(!i)return;const n=new URLSearchParams(a.location.search);n.set(i,e),a.replace({...a.location,search:n.toString()})}),[i,a])]}function h(e){const{defaultValue:n,queryString:t=!1,groupId:a}=e,i=p(e),[l,s]=(0,r.useState)((()=>function(e){var n;let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!b({value:t,tabValues:a}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+t+'" but none of its children has the corresponding value. Available values are: '+a.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return t}const r=null!=(n=a.find((e=>e.default)))?n:a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:i}))),[o,u]=k({queryString:t,groupId:a}),[d,m]=function(e){let{groupId:n}=e;const t=function(e){return e?"docusaurus.tab."+e:null}(n),[a,i]=(0,c.Nk)(t);return[a,(0,r.useCallback)((e=>{t&&i.set(e)}),[t,i])]}({groupId:a}),h=(()=>{const e=null!=o?o:d;return b({value:e,tabValues:i})?e:null})();(0,r.useEffect)((()=>{h&&s(h)}),[h]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!b({value:e,tabValues:i}))throw new Error("Can't select invalid tab value="+e);s(e),u(e),m(e)}),[u,m,i]),tabValues:i}}var g=t(2389);const N="tabList__CuJ",f="tabItem_LNqP";function v(e){let{className:n,block:t,selectedValue:i,selectValue:o,tabValues:u}=e;const d=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.o5)(),m=e=>{const n=e.currentTarget,t=d.indexOf(n),a=u[t].value;a!==i&&(c(n),o(a))},p=e=>{var n;let t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{var a;const n=d.indexOf(e.currentTarget)+1;t=null!=(a=d[n])?a:d[0];break}case"ArrowLeft":{var r;const n=d.indexOf(e.currentTarget)-1;t=null!=(r=d[n])?r:d[d.length-1];break}}null==(n=t)||n.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":t},n)},u.map((e=>{let{value:n,label:t,attributes:s}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:i===n?0:-1,"aria-selected":i===n,key:n,ref:e=>d.push(e),onKeyDown:p,onClick:m},s,{className:(0,l.Z)("tabs__item",f,null==s?void 0:s.className,{"tabs__item--active":i===n})}),null!=t?t:n)})))}function y(e){let{lazy:n,children:t,selectedValue:a}=e;if(n){const e=t.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},t.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==a}))))}function w(e){const n=h(e);return r.createElement("div",{className:(0,l.Z)("tabs-container",N)},r.createElement(v,(0,a.Z)({},e,n)),r.createElement(y,(0,a.Z)({},e,n)))}function I(e){const n=(0,g.Z)();return r.createElement(w,(0,a.Z)({key:String(n)},e))}const V="tabItem_Ymn6";function z(e){let{children:n,hidden:t,className:a}=e;return r.createElement("div",{role:"tabpanel",className:(0,l.Z)(V,a),hidden:t},n)}const C={},j="Fachklassen",O={unversionedId:"konzepte/fachklassen",id:"konzepte/fachklassen",title:"Fachklassen",description:'Eine Fachklasse ist eine Klasse, die nur "im Hintergrund" arbeitet und nicht f\xfcr die Interaktion mit dem Benutzer zust\xe4ndig ist.',source:"@site/docs/konzepte/fachklassen.md",sourceDirName:"konzepte",slug:"/konzepte/fachklassen",permalink:"/bbzbl-modul-404/docs/konzepte/fachklassen",draft:!1,editUrl:"https://github.com/codingluke/bbzbl-modul-404/tree/main/docs/konzepte/fachklassen.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"ActionListener",permalink:"/bbzbl-modul-404/docs/konzepte/actionlistener"},next:{title:"Formatierung",permalink:"/bbzbl-modul-404/docs/konzepte/formatierung"}},M={},E=[{value:"Klassenstruktur",id:"klassenstruktur",level:2},{value:"Instanziierung und Verwendung eines Objekts/Instanz",id:"instanziierung-und-verwendung-eines-objektsinstanz",level:2},{value:"\ud83e\uddb8 Unterschied von einem Objekt und einer Variable",id:"-unterschied-von-einem-objekt-und-einer-variable",level:2}],T={toc:E};function D(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,a.Z)({},T,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"fachklassen"},"Fachklassen"),(0,i.kt)("p",null,"Eine ",(0,i.kt)("strong",{parentName:"p"},"Fachklasse"),' ist eine Klasse, die nur "im Hintergrund" arbeitet und ',(0,i.kt)("strong",{parentName:"p"},"nicht f\xfcr die Interaktion mit dem Benutzer zust\xe4ndig ist"),"."),(0,i.kt)("h2",{id:"klassenstruktur"},"Klassenstruktur"),(0,i.kt)("p",null,"Gem\xe4ss aktuellem Wissensstand folgen Klassen folgendem ",(0,i.kt)("strong",{parentName:"p"},"Schema"),":"),(0,i.kt)(I,{mdxType:"Tabs"},(0,i.kt)(z,{className:"shadow--tl",value:"apple",label:"Klassen-Deklaration",default:!0,mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"// highlight-next-line\npublic class ClassName { // Klassendeklaration Start\n\n  private int myInstanceVariable;                // Instanzvariablen\n\n  public void setMyInstanceVariable(int value) { // Methode (setter)\n    myInstanceVariable = value;\n  }\n\n  public int getMyInstanceVariable() {           // Methode (getter)\n    return myInstanceVariable;\n  }\n\n// highlight-next-line\n} // Klassendeklaration Ende\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Die ",(0,i.kt)("inlineCode",{parentName:"li"},"Klassen-Deklaration")," definiert den ",(0,i.kt)("strong",{parentName:"li"},"Namen")," der Klasse."),(0,i.kt)("li",{parentName:"ul"},"Der ",(0,i.kt)("strong",{parentName:"li"},"Namen")," der Klasse definiert automatisch auch einen ",(0,i.kt)("strong",{parentName:"li"},"Datentyp"),"!"))),(0,i.kt)(z,{className:"shadow--tl",value:"body",label:"Klassen-Body",default:!0,mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"public class ClassName { // Klassendeklaration Start\n  // highlight-start\n\n  private int myInstanceVariable;                // Instanzvariablen\n\n  public void setMyInstanceVariable(int value) { // Methode (setter)\n    myInstanceVariable = value;\n  }\n\n  public int getMyInstanceVariable() {           // Methode (getter)\n    return myInstanceVariable;\n  }\n\n  // highlight-end\n} // Klassendeklaration Ende\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Der Klassenbody beinhaltet die ",(0,i.kt)("strong",{parentName:"li"},"Deklaration der ",(0,i.kt)("inlineCode",{parentName:"strong"},"Instanz-Variablen")," und ",(0,i.kt)("inlineCode",{parentName:"strong"},"Instanz-Methoden"))),(0,i.kt)("li",{parentName:"ul"},"Innerhalb des Body darf ",(0,i.kt)("strong",{parentName:"li"},"kein ausf\xfchrenden Code")," stehen!",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Dieser befindet sich ",(0,i.kt)("strong",{parentName:"li"},"immer")," innerhalb vom ",(0,i.kt)("inlineCode",{parentName:"li"},"Methoden-Body")))))),(0,i.kt)(z,{className:"shadow--tl",value:"orange",label:"Instanz-Variablen",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"public class ClassName { // Klassendeklaration Start\n  // highlight-start\n\n  private int myInstanceVariable;                // Instanzvariablen\n\n  // highlight-end\n  public void setMyInstanceVariable(int value) { // Methode (setter)\n    myInstanceVariable = value;\n  }\n\n  public int getMyInstanceVariable() {           // Methode (getter)\n    return myInstanceVariable;\n  }\n\n} // Klassendeklaration Ende\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Instanz-Variablen")," sind Variablen welche im ",(0,i.kt)("inlineCode",{parentName:"li"},"Klassen-Body")," definiert werden. "),(0,i.kt)("li",{parentName:"ul"},"Daher befinden sie sich ",(0,i.kt)("strong",{parentName:"li"},"nicht innerhalb")," einer ",(0,i.kt)("inlineCode",{parentName:"li"},"Methode"),"."),(0,i.kt)("li",{parentName:"ul"},"Instanzvariablen k\xf6nnen innerhalb ",(0,i.kt)("strong",{parentName:"li"},"aller ",(0,i.kt)("inlineCode",{parentName:"strong"},"Instanz-Methoden"))," zugegriffen werden."),(0,i.kt)("li",{parentName:"ul"},"Das Wort ",(0,i.kt)("inlineCode",{parentName:"li"},"private")," bedeutet, dass die Variable aber nur innerhalb der Klasse sichtbar ist, ",(0,i.kt)("strong",{parentName:"li"},"nicht von ausserhalb"),"."))),(0,i.kt)(z,{className:"shadow--tl",value:"banana",label:"Instanz-Methoden",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"public class ClassName { // Klassendeklaration Start\n\n  private int myInstanceVariable;                // Instanzvariablen\n\n  // highlight-start\n  public void setMyInstanceVariable(int value) { // Methode (setter)\n    myInstanceVariable = value;\n  }\n\n  public int getMyInstanceVariable() {           // Methode (getter)\n    return myInstanceVariable;\n  }\n  // highlight-end\n\n} // Klassendeklaration Ende\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"sind Methoden innerhalb einer Klasse, welche ",(0,i.kt)("strong",{parentName:"li"},"nicht ",(0,i.kt)("inlineCode",{parentName:"strong"},"static"))," deklariert sind"),(0,i.kt)("li",{parentName:"ul"},"k\xf6nnen auf alle ",(0,i.kt)("inlineCode",{parentName:"li"},"Instanz-Variablen")," zugreifen"),(0,i.kt)("li",{parentName:"ul"},"In ihnen wird die ",(0,i.kt)("strong",{parentName:"li"},"Fachlogik")," ausprogrammiert",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"H\xe4ufig werden ",(0,i.kt)("inlineCode",{parentName:"li"},"Instanz-Variablen")," mutiert, verarbeitet und oder zur\xfcckgegeben"))))),(0,i.kt)(z,{className:"shadow--tl",value:"instanzmethodenbody",label:"Methoden-Body",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"public class ClassName { // Klassendeklaration Start\n\n  private int myInstanceVariable;                // Instanzvariablen\n\n  public void setMyInstanceVariable(int value) { // Methode (setter)\n    // highlight-next-line\n    myInstanceVariable = value;\n  }\n\n  public int getMyInstanceVariable() {           // Methode (getter)\n    // highlight-next-line\n    return myInstanceVariable;\n  }\n\n} // Klassendeklaration Ende\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Im ",(0,i.kt)("inlineCode",{parentName:"li"},"Methoden-Body")," befindet sich der ",(0,i.kt)("strong",{parentName:"li"},"eigentliche Code f\xfcr die Fachlogik")),(0,i.kt)("li",{parentName:"ul"},"Werden ",(0,i.kt)("inlineCode",{parentName:"li"},"Variablen")," innerhalb vom Methoden-Body deklariert, sind diese ",(0,i.kt)("strong",{parentName:"li"},"ausschliesslich innerhalb diesem"),", ab deren deklaration verwendbar/sichtbar.")))),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("mdxAdmonitionTitle",{parentName:"admonition"},"Keine ",(0,i.kt)("inlineCode",{parentName:"mdxAdmonitionTitle"},"main")," Methode in einer Fachklasse"),(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},"Es gibt ",(0,i.kt)("strong",{parentName:"li"},"keine")," Methode ",(0,i.kt)("inlineCode",{parentName:"li"},"public static void main(String[] args)"),"."),(0,i.kt)("li",{parentName:"ul"},"Diese sollte ",(0,i.kt)("strong",{parentName:"li"},"nur")," in der ",(0,i.kt)("inlineCode",{parentName:"li"},"Starter")," Klasse existieren"),(0,i.kt)("li",{parentName:"ul"},"Es ist theoretisch m\xf6glich mehrere ",(0,i.kt)("inlineCode",{parentName:"li"},"main")," Methoden zu haben, dies ist jedoch ",(0,i.kt)("strong",{parentName:"li"},"schlechter Stil")))),(0,i.kt)("admonition",{title:"Klickt durch die Tabs!",type:"danger"},(0,i.kt)("p",{parentName:"admonition"},"Bitte clicked alle Tabs oberhalb einmal an und ",(0,i.kt)("strong",{parentName:"p"},"versucht zu verstehen"),", wie eine Klasse genau aufgebaut ist!")),(0,i.kt)("h2",{id:"instanziierung-und-verwendung-eines-objektsinstanz"},"Instanziierung und Verwendung eines Objekts/Instanz"),(0,i.kt)("p",null,"Objekte lassen sich im Code wie folgt erstellen:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'// Datentyp    Variable       Objektzuweisung  Objekterstellung\n   ClassName   variablenName         =         new ClassName();\n\n// Es k\xf6nnen mehrere Variablen mit Objekte der selben Klasse definiert werden\n   ClassName   otherClassName        =         new ClassName();\n\n//               Mit einem Punkt "." wird auf die Instanz-Methoden zugegriffen!\n   variablenName.setMyInstanceVariable(12); \n\n// Der R\xfcckgrabewert einer Methode kann in einer Variablen gespeichert werden\n   int value = variablenName.getMyInstanceVariable();\n\n// Der R\xfcckgrabewert einer Methode kann auch direkt wiederverwendet werden\n   otherObject.setMyInstanceVariable(variablenName.getMyInstanceVariable());\n')),(0,i.kt)("admonition",{title:"Je besser die Namen desto leserlicher wird der Code!",type:"tip"},(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("inlineCode",{parentName:"p"},"ClassName")," ist in dem oberen Beispiel generisch gew\xe4hlt da es sich um ein generelles Beispiel handelt. Anstatt ",(0,i.kt)("inlineCode",{parentName:"p"},"ClassName")," sollte sp\xe4ter ein ",(0,i.kt)("strong",{parentName:"p"},"spezifischer Namen")," gew\xe4hlt werden, wie z.B. ",(0,i.kt)("inlineCode",{parentName:"p"},"Account"),". Der Name der Variable kann beliebig sein. Das gleiche gilt f\xfcr ",(0,i.kt)("inlineCode",{parentName:"p"},"Variablen")," und ",(0,i.kt)("inlineCode",{parentName:"p"},"Methoden")),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-java"},"Account savingAccount = new Account(); // Toll\nXyz b = new Xzy();                     // Evt. nicht ganz so toll ;)\n"))),(0,i.kt)("admonition",{title:"Instanz oder Objekt, WTF :confused: ?!?",type:"note"},(0,i.kt)("p",{parentName:"admonition"},"Die W\xf6rter Objekt und Instanz sind ",(0,i.kt)("strong",{parentName:"p"},"Synonyme"),", k\xf6nnen also beliebig vertauscht werden.")),(0,i.kt)("h2",{id:"-unterschied-von-einem-objekt-und-einer-variable"},"\ud83e\uddb8 Unterschied von einem Objekt und einer Variable"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Ein Objekt ist ",(0,i.kt)("strong",{parentName:"li"},"immer in einer Variable")," gespeichert"),(0,i.kt)("li",{parentName:"ul"},"Eine Variable muss aber nicht immer ein Objekt beinhalten")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"Account accountObjektVariable = new Account(); \nint intVariable = 1;                 \n\n// `accountObjektVariable` beinhaltet ein Objekt der Klasse Account\n// `intVariable` beinhaltet den den Wert 1 vom `primitiven` Datentyp int\n\naccountObjektVariable.getClass(); // Ein Objekt besitzt Methoden welche ausgef\xfchrt werden k\xf6nnen\nintVariable.getClass(); // f\xfchrt zu einem ERROR. (versuche es in `eclipse`!)\n")),(0,i.kt)("admonition",{title:"Faustregel",type:"tip"},(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},"Wenn der ",(0,i.kt)("strong",{parentName:"li"},"Datentyp")," mit einem ",(0,i.kt)("strong",{parentName:"li"},"Grossbuchstaben")," anf\xe4ngt (",(0,i.kt)("inlineCode",{parentName:"li"},"String"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"Account"),", ...) handelt es sich um ein ",(0,i.kt)("strong",{parentName:"li"},"Objekt")),(0,i.kt)("li",{parentName:"ul"},"Wenn der ",(0,i.kt)("strong",{parentName:"li"},"Datentyp")," mit einem ",(0,i.kt)("strong",{parentName:"li"},"Kleinbuchstaben")," anf\xe4ngt (",(0,i.kt)("inlineCode",{parentName:"li"},"int"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"double"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"char"),", ...) ist es ",(0,i.kt)("strong",{parentName:"li"},"kein Objekt")),(0,i.kt)("li",{parentName:"ul"},"Ein ",(0,i.kt)("strong",{parentName:"li"},"Objekt besitzt Methoden"),", welche man ausf\xfchren kann, ein ",(0,i.kt)("strong",{parentName:"li"},"primitiver Datentyp nicht"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Jedes Objekt")," besitzt die Methode ",(0,i.kt)("inlineCode",{parentName:"li"},"getClass()"),";"))))))}D.isMDXComponent=!0}}]);