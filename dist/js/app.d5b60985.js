(function(t){function e(e){for(var c,o,p=e[0],l=e[1],u=e[2],b=0,s=[];b<p.length;b++)o=p[b],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&s.push(r[o][0]),r[o]=0;for(c in l)Object.prototype.hasOwnProperty.call(l,c)&&(t[c]=l[c]);i&&i(e);while(s.length)s.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],c=!0,p=1;p<n.length;p++){var l=n[p];0!==r[l]&&(c=!1)}c&&(a.splice(e--,1),t=o(o.s=n[0]))}return t}var c={},r={app:0},a=[];function o(e){if(c[e])return c[e].exports;var n=c[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=c,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var c in t)o.d(n,c,function(e){return t[e]}.bind(null,c));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var p=window["webpackJsonp"]=window["webpackJsonp"]||[],l=p.push.bind(p);p.push=e,p=p.slice();for(var u=0;u<p.length;u++)e(p[u]);var i=l;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},2002:function(t,e,n){},"441a":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var c=n("7a23"),r={class:"container column"},a={class:"container"};function o(t,e,n,o,p,l){var u=Object(c["k"])("app-form"),i=Object(c["k"])("app-resume"),b=Object(c["k"])("app-comments");return Object(c["g"])(),Object(c["c"])(c["a"],null,[Object(c["e"])("div",r,[Object(c["e"])(u,{onAddBlock:l.addBlock},null,8,["onAddBlock"]),Object(c["e"])(i,{content:p.content},null,8,["content"])]),Object(c["e"])("div",a,[Object(c["e"])("p",null,[p.comments.length?Object(c["d"])("",!0):(Object(c["g"])(),Object(c["c"])("button",{key:0,class:"btn primary",onClick:e[1]||(e[1]=function(t){return l.loadComments(102)})},"Load comments"))]),Object(c["e"])(b,{comments:p.comments,loading:p.loading},null,8,["comments","loading"])])],64)}n("96cf");var p=n("1da1"),l=Object(c["r"])("data-v-050f3cb0");Object(c["i"])("data-v-050f3cb0");var u={class:"card card-w70"},i={key:0},b={key:1};Object(c["h"])();var s=l((function(t,e,n,r,a,o){var p=Object(c["k"])("app-block");return Object(c["g"])(),Object(c["c"])("div",u,[o.isEmpty?(Object(c["g"])(),Object(c["c"])("div",i,[(Object(c["g"])(!0),Object(c["c"])(c["a"],null,Object(c["j"])(n.content,(function(t){return Object(c["g"])(),Object(c["c"])(p,Object(c["f"])({key:t.id},t.props,{type:t.type}),null,16,["type"])})),128))])):(Object(c["g"])(),Object(c["c"])("h3",b,"So, Are you ready? please add your first block! Good luck"))])})),d=Object(c["r"])("data-v-cd4f571c"),O=d((function(t,e,n,r,a,o){return Object(c["g"])(),Object(c["c"])(Object(c["l"])(o.typeOfBlock))})),j=(n("caad"),Object(c["r"])("data-v-209a6d5c")),m=j((function(t,e,n,r,a,o){return Object(c["g"])(),Object(c["c"])("h1",{textContent:Object(c["m"])(n.text)},null,8,["textContent"])})),v={name:"AppTitle",props:{text:{type:String}}};v.render=m,v.__scopeId="data-v-209a6d5c";var f=v,y=Object(c["r"])("data-v-1499d848"),g=y((function(t,e,n,r,a,o){return Object(c["g"])(),Object(c["c"])("p",{textContent:Object(c["m"])(n.text)},null,8,["textContent"])})),h={name:"AppText",props:{text:{type:String}}};h.render=g,h.__scopeId="data-v-1499d848";var x=h,k=Object(c["r"])("data-v-5ac4390b");Object(c["i"])("data-v-5ac4390b");var A={class:"avatar"};Object(c["h"])();var _=k((function(t,e,n,r,a,o){return Object(c["g"])(),Object(c["c"])("div",A,[Object(c["e"])("img",{src:n.src},null,8,["src"])])})),I={name:"AppAvatar",props:{src:{type:String}}};I.render=_,I.__scopeId="data-v-5ac4390b";var S=I,w=Object(c["r"])("data-v-14ecec86"),C=w((function(t,e,n,r,a,o){return Object(c["g"])(),Object(c["c"])("h2",{textContent:Object(c["m"])(n.text)},null,8,["textContent"])})),T={name:"AppSubtitle",props:{text:{type:String}}};T.render=C,T.__scopeId="data-v-14ecec86";var B=T,P={name:"AppBlock",components:{AppTitle:f,AppText:x,AppAvatar:S,AppSubtitle:B},props:{type:{type:String,required:!0,validator:function(t){var e=["title","subtitle","avatar","text"].includes(t);return!!e||(console.log("You should use correct type of block, please check"),!1)}}},computed:{typeOfBlock:function(){return"app-".concat(this.type)}}};P.render=O,P.__scopeId="data-v-cd4f571c";var M=P,R={name:"AppResume",props:{content:{type:Array}},data:function(){return{}},computed:{isEmpty:function(){return this.content.length}},components:{AppBlock:M}};R.render=s,R.__scopeId="data-v-050f3cb0";var L=R,V=Object(c["r"])("data-v-6babe881");Object(c["i"])("data-v-6babe881");var q={class:"form-control"},E=Object(c["e"])("label",{for:"type"},"Type of block",-1),F=Object(c["e"])("option",{value:{type:"title",prop:"text"}},"Title",-1),J=Object(c["e"])("option",{value:{type:"subtitle",prop:"text"}},"Subtitle",-1),U=Object(c["e"])("option",{value:{type:"avatar",prop:"src"}},"Avatar",-1),G=Object(c["e"])("option",{value:{type:"text",prop:"text"}},"Text",-1),N={class:"form-control"},Y=Object(c["e"])("label",{for:"value"},"Value",-1);Object(c["h"])();var $=V((function(t,e,n,r,a,o){return Object(c["g"])(),Object(c["c"])("form",{class:"card card-w30",onSubmit:e[3]||(e[3]=Object(c["q"])((function(){return o.onSubmit&&o.onSubmit.apply(o,arguments)}),["prevent"]))},[Object(c["e"])("div",q,[E,Object(c["p"])(Object(c["e"])("select",{id:"type","onUpdate:modelValue":e[1]||(e[1]=function(t){return a.selectInput=t})},[F,J,U,G],512),[[c["n"],a.selectInput]])]),Object(c["e"])("div",N,[Y,Object(c["p"])(Object(c["e"])("textarea",{id:"value",rows:"3","onUpdate:modelValue":e[2]||(e[2]=function(t){return a.textareaInput=t})},null,512),[[c["o"],a.textareaInput]])]),Object(c["e"])("button",{disabled:o.isActive,class:"btn primary"},"Add",8,["disabled"])],32)})),z=(n("a9e3"),{name:"AppForm",emits:["add-block"],props:{minTextAreaLength:{type:Number,default:2}},data:function(){return{selectInput:{type:"title",prop:"text"},textareaInput:""}},computed:{isActive:function(){return this.minTextAreaLength>=this.textareaInput.length}},methods:{onSubmit:function(){var t={};t[this.selectInput.prop]=this.textareaInput;var e={type:this.selectInput.type,props:t};this.$emit("add-block",e),this.textareaInput="",this.selectInput={type:"title",prop:"text"}}}});z.render=$,z.__scopeId="data-v-6babe881";var D=z,H=n("bc3a"),K=n.n(H),Q=Object(c["r"])("data-v-5c775614");Object(c["i"])("data-v-5c775614");var W={key:0,class:"card"},X=Object(c["e"])("h2",null,"Комментарии",-1),Z={class:"list"},tt={key:1,class:"loader"};Object(c["h"])();var et=Q((function(t,e,n,r,a,o){return Object(c["g"])(),Object(c["c"])(c["a"],null,[n.comments.length?(Object(c["g"])(),Object(c["c"])("div",W,[X,Object(c["e"])("ul",Z,[(Object(c["g"])(!0),Object(c["c"])(c["a"],null,Object(c["j"])(n.comments,(function(t){return Object(c["g"])(),Object(c["c"])("li",{class:"list-item",key:t.id},[Object(c["e"])("div",null,[Object(c["e"])("p",null,[Object(c["e"])("strong",null,Object(c["m"])(t.email),1)]),Object(c["e"])("small",null,Object(c["m"])(t.body),1)])])})),128))])])):Object(c["d"])("",!0),n.loading?(Object(c["g"])(),Object(c["c"])("div",tt)):Object(c["d"])("",!0)],64)})),nt={name:"AppComments",props:["comments","loading"]};nt.render=et,nt.__scopeId="data-v-5c775614";var ct=nt,rt={data:function(){return{content:[],comments:[],loading:!1}},methods:{addBlock:function(t){t.id=1e3*Math.random(),this.content.push(t)},loadComments:function(t){var e=this;return Object(p["a"])(regeneratorRuntime.mark((function n(){var c,r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return e.loading=!0,n.next=3,K.a.get("https://jsonplaceholder.typicode.com/comments?_limit=".concat(t));case 3:c=n.sent,r=c.data,e.comments=r,e.loading=!1;case 7:case"end":return n.stop()}}),n)})))()}},components:{AppForm:D,AppResume:L,AppComments:ct}};n("e3a3");rt.render=o;var at=rt;n("441a");Object(c["b"])(at).mount("#app")},e3a3:function(t,e,n){"use strict";n("2002")}});
//# sourceMappingURL=app.d5b60985.js.map