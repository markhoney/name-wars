import{_ as n,r as u,o as l,e as m}from"./index.js";const p={props:{start:{type:Number,default:1900},end:{type:Number,default:2021},modelValue:{type:Number,default:2021,required:!0}},computed:{years(){return this.$names.years(this.start,this.end)}}};function d(t,e,r,c,f,o){const s=u("b-form-select");return l(),m(s,{modelValue:r.modelValue,options:o.years,onInput:e[0]||(e[0]=a=>t.$emit("update:modelValue",a))},null,8,["modelValue","options"])}var _=n(p,[["render",d]]);export{_ as Y};
