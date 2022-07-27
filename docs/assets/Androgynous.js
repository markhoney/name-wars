import{Y as y}from"./Years.js";import{_ as V,V as x,r as a,o as k,e as g,w as t,a as s,b as c}from"./index.js";const v={components:{Years:y,VueApexCharts:x},props:{value:{type:String,default:""}},data(){return{first:1900,last:2021,name:"Alex",stacked:!0}},computed:{years(){return this.$names.years(this.first,this.last)},names(){return this.$names.androgynous},chartOptions(){return{chart:{stacked:this.stacked},colors:this.$names.colours,xaxis:{type:"numeric",categories:this.years}}},series(){return this.name?[{name:"Male",data:this.years.map(o=>{var e;return((e=this.$names.names[this.name][o])==null?void 0:e.M)||0})},{name:"Female",data:this.years.map(o=>{var e;return((e=this.$names.names[this.name][o])==null?void 0:e.F)||0})}]:[]}},methods:{sum(o){return(o.M||0)+(o.F||0)}},watch:{value(o){this.names=o}}},w=c("h2",null,"Androgynous Names",-1),C=c("p",null,"Some names can be used for a boy or a girl. Check out which names are considered androgynous, and find out how popular they have been for boys and girls over time.",-1),A=c("h4",null,"Chart options",-1);function F(o,e,N,U,n,m){const u=a("b-col"),i=a("b-form-select"),r=a("b-form-group"),d=a("years"),_=a("b-form-checkbox"),p=a("b-card-text"),f=a("b-card"),h=a("vue-apex-charts"),b=a("b-row");return k(),g(b,null,{default:t(()=>[s(u,{cols:"12",class:"mb-5"},{default:t(()=>[w,C]),_:1}),s(u,{cols:"12"},{default:t(()=>[s(f,null,{header:t(()=>[A]),default:t(()=>[s(p,{class:"d-flex justify-content-evenly"},{default:t(()=>[s(r,{label:"Name","label-for":"name"},{default:t(()=>[s(i,{id:"name",modelValue:n.name,"onUpdate:modelValue":e[0]||(e[0]=l=>n.name=l),options:m.names},null,8,["modelValue","options"])]),_:1}),s(r,{label:"First Year","label-for":"first"},{default:t(()=>[s(d,{id:"first",modelValue:n.first,"onUpdate:modelValue":e[1]||(e[1]=l=>n.first=l)},null,8,["modelValue"])]),_:1}),s(r,{label:"Last Year","label-for":"last"},{default:t(()=>[s(d,{id:"last",modelValue:n.last,"onUpdate:modelValue":e[2]||(e[2]=l=>n.last=l)},null,8,["modelValue"])]),_:1}),s(r,{label:"Stacked","label-for":"stacked"},{default:t(()=>[s(_,{id:"stacked",size:"lg",modelValue:n.stacked,"onUpdate:modelValue":e[3]||(e[3]=l=>n.stacked=l),switch:""},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1}),s(u,{cols:"12"},{default:t(()=>[s(h,{type:"bar",series:m.series,options:m.chartOptions},null,8,["series","options"])]),_:1})]),_:1})}var M=V(v,[["render",F]]);export{M as default};
