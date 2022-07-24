import{T as F,S as L}from"./Spikes.js";import{N as S}from"./New.js";import{Y as x}from"./Years.js";import{_ as g,V as N,r as n,o as b,c as w,a as e,w as t,F as v,b as c,d as k,e as C,f as V,t as M,h as $,n as T}from"./index.js";import{N as A}from"./NamesText.js";const U={components:{New:S,Years:x,VueApexCharts:N},props:{value:{type:String,default:""}},data(){return{first:1901,last:2021,year:2021}},computed:{years(){return this.$names.years(this.first,this.last)},chartOptions(){return{colors:["#e6194b","#3cb44b","#ffe119","#4363d8","#f58231","#911eb4","#46f0f0","#f032e6","#bcf60c","#fabebe","#008080","#e6beff","#9a6324","#fffac8","#800000","#aaffc3","#808000","#ffd8b1","#000075","#808080"],xaxis:{type:"numeric",categories:this.years}}},series(){return[{name:"New names",data:this.years.map(a=>this.$names.new[a].length)}]}},methods:{sum(a){return(a.M||0)+(a.F||0)}},watch:{value(a){this.names=a}}},B=c("h2",null,"New names",-1);function J(a,o,f,_,s,m){const d=n("vue-apex-charts"),i=n("b-col"),u=n("years"),l=n("b-form-group"),p=n("b-card-text"),h=n("b-card"),y=n("new");return b(),w(v,null,[e(i,{sm:"12",lg:"9"},{default:t(()=>[e(d,{type:"bar",series:m.series,options:m.chartOptions},null,8,["series","options"])]),_:1}),e(i,{sm:"6",lg:"3"},{default:t(()=>[e(h,null,{header:t(()=>[B]),default:t(()=>[e(p,null,{default:t(()=>[e(l,{label:"First Year","label-for":"first"},{default:t(()=>[e(u,{id:"first",modelValue:s.first,"onUpdate:modelValue":o[0]||(o[0]=r=>s.first=r)},null,8,["modelValue"])]),_:1}),e(l,{label:"Last Year","label-for":"last"},{default:t(()=>[e(u,{id:"last",modelValue:s.last,"onUpdate:modelValue":o[1]||(o[1]=r=>s.last=r)},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1}),e(i,{sm:"6",lg:"4"},{default:t(()=>[e(y,{modelValue:s.year,"onUpdate:modelValue":o[2]||(o[2]=r=>s.year=r)},null,8,["modelValue"])]),_:1})],64)}var Y=g(U,[["render",J]]);const O={data(){return{names:{Aaliyah:"Music (1994)",Arya:"TV - Game of Thrones (2011)",Daniel:"Music - Daniel by Elton John (1973)",Harper:"Author - Go Set a Watchman (2015)",Jason:"Movie - Jason and the Argonauts (1963)",Juno:"Movie - Juno (2007)",Kylo:"Movie - The Force Awakens (2015)",Leonidas:"Movie - 300 (2006)",Luke:"Movie - Star Wars (1977)",Marshall:"Music - Eminem (1999)","Darren Darrin":"TV - Bewitched (1964)"},groups:["January February March April May June July August September October November December"]}},methods:{emit(a){this.$emit("input",a)}}},D=c("h2",null,"Some interesting names",-1),z=c("p",null,"Click any name to enter it into the graph above.",-1),W=c("p",null,"(Hover over a name to see why it might have become popular)",-1);function E(a,o,f,_,s,m){const d=n("b-list-group-item"),i=n("b-list-group"),u=n("b-card");return b(),k(u,{"no-body":"",header:"Card with flush list group"},{header:t(()=>[D,z]),footer:t(()=>[W]),default:t(()=>[e(i,{flush:""},{default:t(()=>[(b(!0),w(v,null,C(Object.keys(s.names),l=>(b(),k(d,{key:l,onClick:p=>m.emit(l),title:s.names[l],role:"button"},{default:t(()=>[V(M(l),1)]),_:2},1032,["onClick","title"]))),128))]),_:1})]),_:1})}var I=g(O,[["render",E]]);const G={components:{Names:A,Years:x,Interesting:I,VueApexCharts:N},props:{value:{type:String,default:""}},data(){return{first:1900,last:2021,nameList:[],names:"",colours:["#e6194b","#3cb44b","#ffe119","#4363d8","#f58231","#911eb4","#46f0f0","#f032e6","#bcf60c","#fabebe","#008080","#e6beff","#9a6324","#fffac8","#800000","#aaffc3","#808000","#ffd8b1","#000075","#808080"]}},computed:{years(){return this.$names.years(this.first,this.last)},chartOptions(){return{colors:this.colours,xaxis:{type:"numeric",categories:this.years}}},series(){return this.nameList.map((a,o)=>({name:a,data:this.$names.names[a]?this.years.map(f=>{var _,s;return(((_=this.$names.names[a][f])==null?void 0:_.M)||0)+(((s=this.$names.names[a][f])==null?void 0:s.F)||0)}):[]}))}},methods:{sum(a){return(a.M||0)+(a.F||0)}},watch:{value(a){this.names=a}}},H=c("h2",null,"Compare names",-1);function Z(a,o,f,_,s,m){const d=n("vue-apex-charts"),i=n("b-col"),u=n("names"),l=n("b-form-group"),p=n("years"),h=n("b-card-text"),y=n("b-card");return b(),w(v,null,[e(i,{sm:"12",lg:"9"},{default:t(()=>[e(d,{type:"line",series:m.series,options:m.chartOptions},null,8,["series","options"])]),_:1}),e(i,{sm:"6",lg:"3"},{default:t(()=>[e(y,null,{header:t(()=>[H]),default:t(()=>[e(h,null,{default:t(()=>[e(l,{label:"Names to compare","label-for":"names"},{default:t(()=>[e(u,{id:"names",modelValue:s.nameList,"onUpdate:modelValue":o[0]||(o[0]=r=>s.nameList=r),names:s.names,placeholder:"e.g. Luke Leia"},null,8,["modelValue","names"])]),_:1}),e(l,{label:"First Year","label-for":"first"},{default:t(()=>[e(p,{id:"first",modelValue:s.first,"onUpdate:modelValue":o[1]||(o[1]=r=>s.first=r)},null,8,["modelValue"])]),_:1}),e(l,{label:"Last Year","label-for":"last"},{default:t(()=>[e(p,{id:"last",modelValue:s.last,"onUpdate:modelValue":o[2]||(o[2]=r=>s.last=r)},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1})],64)}var j=g(G,[["render",Z]]);const K={components:{Years:x,VueApexCharts:N},props:{value:{type:String,default:""},title:{type:String,default:""},horizontal:{type:Boolean,default:!1}},data(){return{first:1900,last:2021,name:"",type:"bar"}},computed:{years(){return this.$names.years(this.first,this.last)},names(){return this.$names.androgynous},chartOptions(){return{chart:{stacked:!0},zoom:{type:"x",enabled:!0,autoScaleYaxis:!0},colors:["#e6194b","#3cb44b","#ffe119","#4363d8","#f58231","#911eb4","#46f0f0","#f032e6","#bcf60c","#fabebe","#008080","#e6beff","#9a6324","#fffac8","#800000","#aaffc3","#808000","#ffd8b1","#000075","#808080"],xaxis:{type:"numeric",categories:this.years}}},series(){return this.name?[{name:"Male",data:this.years.map(a=>{var o;return((o=this.$names.names[this.name][a])==null?void 0:o.M)||0})},{name:"Female",data:this.years.map(a=>{var o;return((o=this.$names.names[this.name][a])==null?void 0:o.F)||0})}]:[]}},methods:{sum(a){return(a.M||0)+(a.F||0)}},watch:{value(a){this.names=a}}};function q(a,o,f,_,s,m){const d=n("vue-apex-charts"),i=n("b-col"),u=n("b-form-select"),l=n("b-form-group"),p=n("years"),h=n("b-card-text"),y=n("b-card");return b(),w(v,null,[e(i,{sm:"12",lg:"9"},{default:t(()=>[e(d,{type:"line",series:m.series,options:m.chartOptions},null,8,["series","options"])]),_:1}),e(i,{sm:"6",lg:"3"},{default:t(()=>[e(y,null,$({default:t(()=>[e(h,{class:T({dFlex:f.horizontal})},{default:t(()=>[e(l,{label:"Name","label-for":"name"},{default:t(()=>[e(u,{id:"name",modelValue:s.name,"onUpdate:modelValue":o[0]||(o[0]=r=>s.name=r),options:m.names},null,8,["modelValue","options"])]),_:1}),e(l,{label:"First Year","label-for":"first"},{default:t(()=>[e(p,{id:"first",modelValue:s.first,"onUpdate:modelValue":o[1]||(o[1]=r=>s.first=r)},null,8,["modelValue"])]),_:1}),e(l,{label:"Last Year","label-for":"last"},{default:t(()=>[e(p,{id:"last",modelValue:s.last,"onUpdate:modelValue":o[2]||(o[2]=r=>s.last=r)},null,8,["modelValue"])]),_:1}),e(l,{label:"Chart Type","label-for":"type"},{default:t(()=>[e(u,{id:"type",modelValue:s.type,"onUpdate:modelValue":o[3]||(o[3]=r=>s.type=r),options:["Bar","Bar Stacked","Line"]},null,8,["modelValue"])]),_:1})]),_:1},8,["class"])]),_:2},[f.title?{name:"header",fn:t(()=>[c("h2",null,M(f.title),1)])}:void 0]),1024)]),_:1})],64)}var P=g(K,[["render",q]]);const Q={components:{Top:F,New:Y,Compare:j,Spikes:L,Androgynous:P}},R=V(" For privacy/anonymity reasons, this data set does not include names on any given year where fewer than 10 babies were given that name. For those years, the total will show in this data set as a zero. "),X=c("h2",null,"Welcome to the NZ Baby Names page",-1),ee=c("p",{class:"mb-5"},[V("This page uses "),c("a",{href:"https://catalogue.data.govt.nz/dataset/baby-name-popularity-over-time",target:"_blank"},"baby name data"),V(" from the New Zealand Department of Internal Affairs to show some interesting facts about the popularity of names over time. The website was originally created to see if the names Luke or Leia became popular after the 1977 release of Star Wars (type the names into the Compare Names box below to find out!).")],-1),te=c("h2",null,"Name popularity",-1),ae=c("p",null,"Looking for a name for your baby, but you're concerned that it might be going out of fashion? Want to know whether your name is still being given to babies? Want to see if your name is more popular than your friends'? The graph below will show you the popularity of one or more baby names over time. Just type one or more names in the box below, and a graph will appear showing you how many babies were given that name each year.",-1);function oe(a,o,f,_,s,m){const d=n("b-alert"),i=n("b-col"),u=n("compare"),l=n("b-row"),p=n("b-container");return b(),w(v,null,[e(d,{variant:"warning",show:"",dismissible:"",class:"mb-5"},{default:t(()=>[R]),_:1}),X,ee,e(p,null,{default:t(()=>[e(l,null,{default:t(()=>[e(i,{cols:"12"},{default:t(()=>[te,ae]),_:1}),e(u)]),_:1})]),_:1})],64)}var me=g(Q,[["render",oe]]);export{me as default};
