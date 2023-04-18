import{Y as F}from"./Years.js";import{_ as k,r as o,o as u,e as h,w as e,b as w,t as _,a as t,c as x,f as j,d as V,F as N,g as C}from"./index.js";const T={components:{Years:F},data(){return{year:2022,top:10}},computed:{names(){return this.$names.top(this.year).slice(0,this.top)}}};function Y(p,l,d,y,n,f){const a=o("b-badge"),i=o("b-list-group-item"),b=o("b-list-group"),m=o("years"),r=o("b-form-group"),c=o("b-col"),g=o("b-form-select"),v=o("b-row"),U=o("b-card");return u(),h(U,{"no-body":""},{header:e(()=>[w("h2",null,"Top "+_(n.top)+" names for "+_(n.year),1)]),footer:e(()=>[t(v,null,{default:e(()=>[t(c,{sm:"6"},{default:e(()=>[t(r,{label:"Year","label-for":"year"},{default:e(()=>[t(m,{id:"year",modelValue:n.year,"onUpdate:modelValue":l[0]||(l[0]=s=>n.year=s),start:1900,end:2022},null,8,["modelValue"])]),_:1})]),_:1}),t(c,{sm:"6"},{default:e(()=>[t(r,{label:"Number of Results","label-for":"top"},{default:e(()=>[t(g,{id:"top",modelValue:n.top,"onUpdate:modelValue":l[1]||(l[1]=s=>n.top=s),options:[10,25,50,100]},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})]),default:e(()=>[f.names?(u(),h(b,{key:0,flush:""},{default:e(()=>[(u(!0),x(N,null,j(f.names,(s,M)=>(u(),h(i,{key:s.name,class:"d-flex justify-content-between align-items-center"},{default:e(()=>[V(_(M+1)+". "+_(s.name)+" ",1),t(a,{pill:""},{default:e(()=>[V(_(s.number),1)]),_:2},1024)]),_:2},1024))),128))]),_:1})):C("",!0)]),_:1})}var $=k(T,[["render",Y]]);const B={data(){return{top:10}},computed:{names(){return this.$names.overall.slice(0,this.top)}}};function O(p,l,d,y,n,f){const a=o("b-badge"),i=o("b-list-group-item"),b=o("b-list-group"),m=o("b-form-select"),r=o("b-form-group"),c=o("b-card");return u(),h(c,{"no-body":""},{header:e(()=>[w("h2",null,"Top "+_(n.top)+" names of all time",1)]),footer:e(()=>[t(r,{label:"Number of Results","label-for":"top"},{default:e(()=>[t(m,{id:"top",modelValue:n.top,"onUpdate:modelValue":l[0]||(l[0]=g=>n.top=g),options:[10,25,50,100]},null,8,["modelValue"])]),_:1})]),default:e(()=>[f.names?(u(),h(b,{key:0,flush:""},{default:e(()=>[(u(!0),x(N,null,j(f.names,(g,v)=>(u(),h(i,{key:g.name,class:"d-flex justify-content-between align-items-center"},{default:e(()=>[V(_(v+1)+". "+_(g.name)+" ",1),t(a,{pill:""},{default:e(()=>[V(_(g.number),1)]),_:2},1024)]),_:2},1024))),128))]),_:1})):C("",!0)]),_:1})}var L=k(B,[["render",O]]);const R={components:{Years:F},data(){return{first:1900,last:2022,average:1,top:10}},computed:{years(){return this.$names.years(this.first,this.last)},spikes(){return Object.entries(this.$names.names).reduce((p,[l,d])=>(p[l]=this.years.slice(this.average).reduce((y,n)=>{var i,b,m,r;const f=this.$names.years(n-this.average+1,n).reverse();let a=0;for(const c of f)a+=(((i=d[c])==null?void 0:i.M)||0)+(((b=d[c])==null?void 0:b.F)||0)-(((m=d[c-1])==null?void 0:m.M)||0)-(((r=d[c-1])==null?void 0:r.F)||0);return y[n]=Math.floor(a/this.average),y},{}),p),{})},largest(){return Object.entries(this.spikes).map(([p,l])=>Object.entries(l).map(([d,y])=>({name:p,year:d,diff:y}))).flat().sort((p,l)=>Math.abs(l.diff)-Math.abs(p.diff)).slice(0,this.top)}}},S=V("+");function A(p,l,d,y,n,f){const a=o("b-badge"),i=o("b-list-group-item"),b=o("b-list-group"),m=o("years"),r=o("b-form-group"),c=o("b-col"),g=o("b-form-select"),v=o("b-row"),U=o("b-card");return u(),h(U,{"no-body":""},{header:e(()=>[w("h2",null,_(n.top)+" largest changes",1)]),footer:e(()=>[t(v,null,{default:e(()=>[t(c,{sm:"6"},{default:e(()=>[t(r,{label:"First Year","label-for":"first"},{default:e(()=>[t(m,{id:"first",modelValue:n.first,"onUpdate:modelValue":l[0]||(l[0]=s=>n.first=s)},null,8,["modelValue"])]),_:1}),t(r,{label:"Last Year","label-for":"last"},{default:e(()=>[t(m,{id:"last",modelValue:n.last,"onUpdate:modelValue":l[1]||(l[1]=s=>n.last=s)},null,8,["modelValue"])]),_:1})]),_:1}),t(c,{sm:"6"},{default:e(()=>[t(r,{label:"Number of results","label-for":"top"},{default:e(()=>[t(g,{id:"top",modelValue:n.top,"onUpdate:modelValue":l[2]||(l[2]=s=>n.top=s),options:[10,25,50,100]},null,8,["modelValue"])]),_:1}),t(r,{label:"Average over years","label-for":"average"},{default:e(()=>[t(g,{id:"average",modelValue:n.average,"onUpdate:modelValue":l[3]||(l[3]=s=>n.average=s),options:[1,2,3,4,5]},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})]),default:e(()=>[t(b,{flush:""},{default:e(()=>[(u(!0),x(N,null,j(f.largest,s=>(u(),h(i,{key:s.name+s.year,variant:s.diff>0?"success":"danger",class:"d-flex justify-content-between align-items-center"},{default:e(()=>[V(_(s.name)+" ("+_(s.year)+") ",1),t(a,{variant:s.diff>0?"success":"danger",pill:""},{default:e(()=>[s.diff>0?(u(),x(N,{key:0},[S],64)):C("",!0),V(_(s.diff),1)]),_:2},1032,["variant"])]),_:2},1032,["variant"]))),128))]),_:1})]),_:1})}var D=k(R,[["render",A]]);const E={components:{Top:$,Totals:L,Spikes:D}},H=w("h2",null,"Charts",-1),Z=w("p",null,"Here are some charts showing the most popular names in New Zealand, and names that have seen sharp increases or decreases in usage.",-1);function q(p,l,d,y,n,f){const a=o("b-col"),i=o("top"),b=o("totals"),m=o("spikes"),r=o("b-row");return u(),h(r,null,{default:e(()=>[t(a,{cols:"12",class:"mb-5"},{default:e(()=>[H,Z]),_:1}),t(a,{sm:"6",lg:"4"},{default:e(()=>[t(i)]),_:1}),t(a,{sm:"6",lg:"4"},{default:e(()=>[t(b)]),_:1}),t(a,{sm:"6",lg:"4"},{default:e(()=>[t(m)]),_:1})]),_:1})}var I=k(E,[["render",q]]);export{I as default};
