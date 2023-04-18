import{Y as L}from"./Years.js";import{_ as g,r as i,o as _,e as p,w as r,b as n,t as s,a as o,d as m,V as $,c as T,f as j,F as N}from"./index.js";const O={props:{value:{type:String,default:""}},computed:{years(){return this.$names.years()},data(){return this.years.map(t=>({year:t,total:this.$names.total(this.$names.names[this.name][t])}))},name(){return this.value?this.$names.case(this.value):""},seen(){return{first:Object.keys(this.$names.names[this.name])[0],last:Object.keys(this.$names.names[this.name])[Object.keys(this.$names.names[this.name]).length-1]}},number(){const t=this.data.reduce((l,d)=>d.total>l.total?d:l,{year:0,total:0}),e={total:this.data.reduce((l,d)=>l+d.total,0),highest:{year:t.year,number:t.total},first:{year:this.data[0].year,number:this.data[0].total},last:{year:this.data[this.data.length-1].year,number:this.data[this.data.length-1].total}};return e.last>e.previous?e.direction="a rise":e.last<e.previous?e.direction="a fall":e.direction="no change",e},ranking(){const t=this.years[this.years.length-1],e={overall:this.$names.overall.findIndex(l=>l.name===this.name)+1,last:this.$names.top(t).findIndex(l=>l.name===this.name)+1,previous:this.$names.top(t-1).findIndex(l=>l.name===this.name)+1};return e.change=Math.abs(e.last-e.previous),e.last>e.previous?e.direction="a rise":e.last<e.previous?e.direction="a fall":e.direction="no change",e},chartOptions(){return{colors:this.$names.colours,xaxis:{type:"numeric",categories:this.years}}},series(){return[{name:"Popularity",data:this.data}]}}},C={class:"text-center"},S=m(", and was last used in "),B=m("."),F=m(", in "),Y=m("."),I=m(" most popular name overall since 1900 in New Zealand, and the "),U=m(" places.");function P(t,e,l,d,c,a){const f=i("b-card-text"),h=i("b-card");return _(),p(h,null,{header:r(()=>[n("h2",C,s(a.name),1)]),default:r(()=>[o(f,null,{default:r(()=>[n("p",null,[m(s(a.name)+" was first used as a baby name in ",1),n("strong",null,s(a.seen.first),1),S,n("strong",null,s(a.seen.last),1),B]),n("p",null,[n("strong",null,s(a.number.total.toLocaleString()),1),m(" babies have been named "+s(a.name)+" since 1900. The highest number of babies named "+s(a.name)+" in a year was a total of ",1),n("strong",null,s(a.number.highest.number.toLocaleString()),1),F,n("strong",null,s(a.number.highest.year),1),Y]),n("p",null,[m(s(a.name)+" is the ",1),n("strong",null,s(t.$names.ordinal(a.ranking.overall)),1),I,n("strong",null,s(t.$names.ordinal(a.ranking.last)),1),m(" most popular last year. This was "+s(a.ranking.direction)+" from the previous year of ",1),n("strong",null,s(a.ranking.change),1),U])]),_:1})]),_:1})}var A=g(O,[["render",P]]);const D={components:{Years:L,NameFacts:A,VueApexCharts:$},props:{names:{type:String,default:""}},data(){return{first:1900,last:2022,nameText:""}},computed:{years(){return this.$names.years()},data(){return this.names.map(t=>this.years.map(e=>this.$names.total(this.$names.names[t][e])))},chartOptions(){return{colors:this.$names.colours,xaxis:{type:"numeric",categories:this.years}}},series(){return this.nameList.map(t=>({name:t,data:this.years.map(e=>this.$names.total(this.$names.names[t][e]))}))},nameList(){return this.$names.valid(this.nameText.split(/[, ]+/))}},watch:{nameList(){this.$router.push(`/compare/${this.nameList.map(t=>t.toLowerCase()).join(",")}`)}},created(){this.nameText=this.names.split(",").join(" ")}},E=n("h2",null,"Chart options",-1),M=n("h3",null,"Popularity",-1);function Z(t,e,l,d,c,a){const f=i("b-form-input"),h=i("b-form-group"),y=i("years"),x=i("b-card-text"),v=i("b-card"),b=i("b-col"),k=i("vue-apex-charts"),V=i("name-facts"),w=i("b-row");return _(),p(w,null,{default:r(()=>[o(b,{cols:"12"},{default:r(()=>[o(v,null,{header:r(()=>[E]),default:r(()=>[o(x,{class:"d-flex justify-content-evenly"},{default:r(()=>[o(h,{label:"Names to compare","label-for":"names"},{default:r(()=>[o(f,{modelValue:c.nameText,"onUpdate:modelValue":e[0]||(e[0]=u=>c.nameText=u),type:"text"},null,8,["modelValue"])]),_:1}),o(h,{label:"First Year","label-for":"first"},{default:r(()=>[o(y,{id:"first",modelValue:c.first,"onUpdate:modelValue":e[1]||(e[1]=u=>c.first=u)},null,8,["modelValue"])]),_:1}),o(h,{label:"Last Year","label-for":"last"},{default:r(()=>[o(y,{id:"last",modelValue:c.last,"onUpdate:modelValue":e[2]||(e[2]=u=>c.last=u)},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1}),o(b,{cols:"12"},{default:r(()=>[M,(_(),p(k,{type:"line",series:a.series,options:a.chartOptions,key:a.series.length},null,8,["series","options"]))]),_:1}),(_(!0),T(N,null,j(a.nameList,u=>(_(),p(b,{sm:"12",md:"6",lg:"4",key:u},{default:r(()=>[o(V,{value:u},null,8,["value"])]),_:2},1024))),128))]),_:1})}var G=g(D,[["render",Z]]);export{G as default};