import{_ as n,r as u,o as l,d as m}from"./index.b692dc40.js";const d={props:{start:{type:Number,default:1900},end:{type:Number,default:2021},modelValue:{type:Number,default:2021,required:!0}},computed:{years(){return this.$names.years(this.start,this.end)}}};function p(t,e,r,c,f,o){const s=u("b-form-select");return l(),m(s,{modelValue:r.modelValue,options:o.years,onInput:e[0]||(e[0]=a=>t.$emit("update:modelValue",a))},null,8,["modelValue","options"])}var _=n(d,[["render",p]]);export{_ as Y};