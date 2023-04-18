import{_ as p,V as x,r as e,o as i,e as m,w as s,b as c,a,c as V,f as v,d as $,t as C,F as B,g as U}from"./index.js";import{Y as g}from"./Years.js";const k={components:{VueApexCharts:x},data(){return{first:1901,last:2022}},computed:{years(){return this.$names.years(this.first,this.last)},series(){return[{name:"New names",data:this.years.map(t=>({x:t,y:this.$names.new[t].length,z:this.$names.new[t]}))}]},chartOptions(){return{colors:[this.$names.randomColour],xaxis:{type:"numeric",categories:this.years,title:{text:"Year"}},yaxis:{title:{text:"Number of new names"}},dataLabels:{enabled:!1},tooltip:{z:{title:"",formatter(t){return t.join("<br />")}}}}}}};function q(t,n,d,f,l,o){const r=e("vue-apex-charts");return i(),m(r,{type:"bar",series:o.series,options:o.chartOptions},null,8,["series","options"])}var O=p(k,[["render",q]]);const Y={components:{Years:g},data(){return{year:2022}},computed:{names(){return this.$names.new[this.year]}}},L=$("New names in ");function j(t,n,d,f,l,o){const r=e("years"),_=e("b-list-group-item"),h=e("b-list-group"),y=e("b-form-group"),b=e("b-col"),w=e("b-row"),N=e("b-card");return i(),m(N,{"no-body":""},{header:s(()=>[c("h2",null,[L,a(r,{modelValue:l.year,"onUpdate:modelValue":n[0]||(n[0]=u=>l.year=u),start:1900,end:2021},null,8,["modelValue"])])]),footer:s(()=>[a(w,null,{default:s(()=>[a(b,null,{default:s(()=>[a(y,{label:"Year","label-for":"year"},{default:s(()=>[a(r,{id:"year",modelValue:l.year,"onUpdate:modelValue":n[1]||(n[1]=u=>l.year=u),start:1900,end:2021},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})]),default:s(()=>[o.names?(i(),m(h,{key:0,flush:"",style:{"max-height":"80vh",overflow:"scroll"}},{default:s(()=>[(i(!0),V(B,null,v(o.names,u=>(i(),m(_,{key:u,class:"d-flex justify-content-between align-items-center"},{default:s(()=>[$(C(u),1)]),_:2},1024))),128))]),_:1})):U("",!0)]),_:1})}var z=p(Y,[["render",j]]);const F={components:{VueApexCharts:x},computed:{years(){return this.$names.years()},chartOptions(){return{colors:[this.$names.randomColour],xaxis:{type:"numeric",categories:this.years,title:{text:"Year"}},yaxis:{title:{text:"Number of names"}},dataLabels:{enabled:!1}}},series(){return[{name:"Unique names",data:this.years.map(t=>Object.values(this.$names.names).filter(n=>n[t]).length)}]}}};function T(t,n,d,f,l,o){const r=e("vue-apex-charts");return i(),m(r,{type:"bar",series:o.series,options:o.chartOptions},null,8,["series","options"])}var A=p(F,[["render",T]]);const D={components:{New:z,NewChart:O,Years:g,Unique:A,VueApexCharts:x}},E=c("h2",null,"Unique Names",-1),S=c("p",null,"Below is a graph of how many different names were used in each year.",-1),G=c("h2",null,"New Names",-1),H=c("p",null,"Below is a graph of how many new names were seen in the list of baby names for the first time in a given year.",-1),I=c("h2",null,"New Name List",-1),J=c("p",null,"The following is a list of all names that were first seen in a given year.",-1);function K(t,n,d,f,l,o){const r=e("unique"),_=e("b-col"),h=e("new-chart"),y=e("new",!0),b=e("b-row");return i(),m(b,null,{default:s(()=>[a(_,{cols:"12",class:"mt-5"},{default:s(()=>[E,S,a(r)]),_:1}),a(_,{cols:"12",class:"mb-5"},{default:s(()=>[G,H,a(h)]),_:1}),a(_,{cols:"12",class:"mt-5"},{default:s(()=>[I,J,a(y,{modelValue:t.year,"onUpdate:modelValue":n[0]||(n[0]=w=>t.year=w)},null,8,["modelValue"])]),_:1})]),_:1})}var Q=p(D,[["render",K]]);export{Q as default};
