(function(t){function e(e){for(var n,r,l=e[0],c=e[1],o=e[2],v=0,f=[];v<l.length;v++)r=l[v],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&f.push(i[r][0]),i[r]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);u&&u(e);while(f.length)f.shift()();return s.push.apply(s,o||[]),a()}function a(){for(var t,e=0;e<s.length;e++){for(var a=s[e],n=!0,l=1;l<a.length;l++){var c=a[l];0!==i[c]&&(n=!1)}n&&(s.splice(e--,1),t=r(r.s=a[0]))}return t}var n={},i={app:0},s=[];function r(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=t,r.c=n,r.d=function(t,e,a){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)r.d(a,n,function(e){return t[e]}.bind(null,n));return a},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=e,l=l.slice();for(var o=0;o<l.length;o++)e(l[o]);var u=c;s.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},2223:function(t,e,a){},"23b0":function(t,e,a){"use strict";a("2223")},"4f09":function(t,e,a){"use strict";a("9a0e")},"55e0":function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("s-main-wrapper")],1)},s=[],r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t.isAuthenticated?a("div",{staticClass:"wrapper"},[a("s-navbar"),a("main",{staticClass:"main"},[a("s-header"),a("div",{staticClass:"main__wrapper"},[a("router-view")],1)],1)],1):a("s-login")],1)},l=[],c=a("5530"),o=a("2f62"),u=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"login"},[a("div",{staticClass:"backdrop"},[a("div",{staticClass:"login__inner"},[a("div",{staticClass:"container"},[a("nav",{staticClass:"nav login__nav"},[t._m(0),a("s-login-nav",{attrs:{activeLink:t.activeLink},on:{linkChange:t.changeLinkHandler}})],1)]),a("s-login-form",{attrs:{activeLink:t.activeLink}})],1)])])},v=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("h1",{staticClass:"nav__title"},[t._v(" Показатели эффективности и стимулирования "),a("br"),t._v(" профессорско-педагогического работника ")])}],f=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ul",{staticClass:"nav__link-list"},[a("li",{staticClass:"nav__link",class:{active:"contacts"===t.activeLink},on:{click:function(e){return t.$emit("linkChange","contacts")}}},[t._v(" Контакты ")]),a("li",{staticClass:"nav__link",class:{active:"login"===t.activeLink},on:{click:function(e){return t.$emit("linkChange","login")}}},[a("div",{staticClass:"nav__link-icon"},[a("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor"}},[a("path",{attrs:{"fill-rule":"evenodd",d:"M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z","clip-rule":"evenodd"}})])]),t._v(" Войти в систему ")])])},m=[],p={props:["activeLink"]},_=p,d=(a("c2be"),a("2877")),b=Object(d["a"])(_,f,m,!1,null,null,null),h=b.exports,g=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("transition",{attrs:{name:"fade"}},["login"===t.activeLink?a("div",{staticClass:"login-form login__form"},[a("form",{staticClass:"login-form__wrapper",on:{submit:function(e){return e.preventDefault(),t.signIn(e)}}},[a("div",{staticClass:"el-input"},[a("label",{attrs:{for:"email"}},[t._v("Введите Email адрес")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],attrs:{type:"email",placeholder:"Email",id:"email"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}})]),a("div",{staticClass:"el-input"},[a("label",{attrs:{for:"password"}},[t._v("Введите пароль")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],attrs:{type:"password",placeholder:"Пароль",id:"password"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}})]),a("button",{staticClass:"login-form__submit",attrs:{type:"submit"}},[t._v(" Войти "),a("div",{staticClass:"login-form__submit-icon"},[a("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"}},[a("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"}})])])]),a("div",{staticClass:"login-form__footer"},[a("a",{staticClass:"login-form__forgot",attrs:{href:"#"}},[t._v("Забыли пароль?")]),a("div",{staticClass:"login-form__remember"},[a("label",{attrs:{for:"remember"}},[t._v("Не выходить из системы")]),a("input",{attrs:{type:"checkbox",id:"remember"}})])])])]):t._e()])},C=[],w={props:["activeLink"],data:function(){return{email:"",password:""}},methods:Object(c["a"])(Object(c["a"])({},Object(o["b"])(["SIGN_IN"])),{},{signIn:function(){var t={email:this.email,password:this.password};this.SIGN_IN(t)},logout:function(){}})},O=w,k=(a("23b0"),Object(d["a"])(O,g,C,!1,null,null,null)),j=k.exports,y={components:{sLoginNav:h,sLoginForm:j},data:function(){return{activeLink:""}},methods:{changeLinkHandler:function(t){this.activeLink=t}}},x=y,E=(a("4f09"),Object(d["a"])(x,u,v,!1,null,null,null)),L=E.exports,S=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("header",{staticClass:"header"},[a("span",{staticClass:"header__faculty-name"},[t._v(t._s(t.user.faculty))]),a("span",{staticClass:"header__user-name"},[t._v(t._s(t.user.name))]),a("i",{staticClass:"header__logout material-icons",attrs:{title:"Выход"},on:{click:t.LOGOUT}},[t._v("logout")])])},$=[],N={computed:Object(c["a"])({},Object(o["c"])(["user"])),methods:Object(c["a"])({},Object(o["b"])(["LOGOUT"]))},M=N,P=(a("ae17"),Object(d["a"])(M,S,$,!1,null,null,null)),I=P.exports,T=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("nav",{staticClass:"navbar"},[a("div",{staticClass:"navbar__logo"},[a("img",{attrs:{src:"/faculties/"+t.user.facultyLogo,alt:"logo"}})]),a("ul",{staticClass:"navbar__list"},[a("li",{staticClass:"navbar__list-item"},[a("router-link",{attrs:{"active-class":"active",exact:"",to:"/"}},[a("i",{staticClass:"material-icons"},[t._v("home")]),t._v(" Главная ")])],1),a("li",{staticClass:"navbar__list-item"},[a("router-link",{attrs:{"active-class":"active",exact:"",to:"/efficiency"}},[a("i",{staticClass:"material-icons"},[t._v("grading")]),t._v(" Эффективности и стимулирования ")])],1),a("li",{staticClass:"navbar__list-item"},[a("router-link",{attrs:{"active-class":"active",exact:"",to:"/normative"}},[a("i",{staticClass:"material-icons"},[t._v("content_paste")]),t._v(" Нормативные документы ")])],1),a("li",{staticClass:"navbar__list-item"},[a("router-link",{attrs:{"active-class":"active",exact:"",to:"/archive"}},[a("i",{staticClass:"material-icons"},[t._v("folder")]),t._v(" Архив ")])],1),a("li",{staticClass:"navbar__list-item"},[a("router-link",{attrs:{"active-class":"active",exact:"",to:"/settings"}},[a("i",{staticClass:"material-icons"},[t._v("settings")]),t._v(" Настройки ")])],1)])])},U=[],G={computed:Object(c["a"])({},Object(o["c"])(["user"]))},H=G,R=(a("a7c3"),Object(d["a"])(H,T,U,!1,null,null,null)),z=R.exports,A={components:{sLogin:L,sHeader:I,sNavbar:z},computed:Object(c["a"])(Object(c["a"])({},Object(o["c"])(["user"])),{},{isAuthenticated:function(){return!!this.user}})},B=A,J=(a("b9a4"),Object(d["a"])(B,r,l,!1,null,null,null)),V=J.exports,D={components:{sMainWrapper:V}},F=D,W=(a("5c0b"),Object(d["a"])(F,i,s,!1,null,null,null)),q=W.exports,K=a("8c4f"),Q=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t._v("Главная страница")])},X=[],Y={},Z=Y,tt=Object(d["a"])(Z,Q,X,!1,null,null,null),et=tt.exports,at=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t._v("Cтраница Эффективности и стимулирования")])},nt=[],it={},st=it,rt=Object(d["a"])(st,at,nt,!1,null,null,null),lt=rt.exports,ct=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t._v("Cтраница Нормативные документы")])},ot=[],ut={},vt=ut,ft=Object(d["a"])(vt,ct,ot,!1,null,null,null),mt=ft.exports,pt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t._v("Cтраница Архива")])},_t=[],dt={},bt=dt,ht=Object(d["a"])(bt,pt,_t,!1,null,null,null),gt=ht.exports,Ct=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t._v("Cтраница Настроек")])},wt=[],Ot={},kt=Ot,jt=Object(d["a"])(kt,Ct,wt,!1,null,null,null),yt=jt.exports;n["a"].use(K["a"]);var xt=[{path:"/",name:"Home",component:et},{path:"/efficiency",name:"Efficiency",component:lt},{path:"/normative",name:"Normative",component:mt},{path:"/archive",name:"Archive",component:gt},{path:"/Settings",name:"Settings",component:yt}],Et=new K["a"]({mode:"history",base:"/",routes:xt}),Lt=Et;a("7db0");n["a"].use(o["a"]);var St=new o["a"].Store({state:{user:null,users:[{name:"Худалов М.З.",email:"hmz@mail.ru",password:"123",faculty:"Факультет математики и компьютерных наук",facultyLogo:"header-logo-it.svg"},{name:"Такаев З.И.",email:"zatakata1998@gmail.com",password:"123",faculty:"Факультет искусств",facultyLogo:"header-logo-art.svg"}]},mutations:{SET_USER:function(t,e){t.user=e},REMOVE_USER:function(t){t.user=null}},actions:{SIGN_IN:function(t,e){var a=t.commit,n=t.state,i=e.email,s=e.password,r=n.users.find((function(t){return t.email===i&&t.password===s}));r&&a("SET_USER",r)},LOGOUT:function(t){var e=t.commit;e("REMOVE_USER")}},modules:{}});a("c789");n["a"].config.productionTip=!1,new n["a"]({router:Lt,store:St,render:function(t){return t(q)}}).$mount("#app")},"5c0b":function(t,e,a){"use strict";a("9c0c")},"9a0e":function(t,e,a){},"9c0c":function(t,e,a){},a4c4:function(t,e,a){},a7c3:function(t,e,a){"use strict";a("55e0")},ae17:function(t,e,a){"use strict";a("bba7")},b9a4:function(t,e,a){"use strict";a("a4c4")},bba7:function(t,e,a){},c2be:function(t,e,a){"use strict";a("e451")},e451:function(t,e,a){}});
//# sourceMappingURL=app.aabf9a60.js.map