import{_ as l,u as _,a as p,r as m,w as v,o as f,c as h,b as t,t as a,d as g,e as w,F as I,C as x}from"./index-RRv_w1S7.js";const C={class:"wrapper"},S={class:"img-container"},V=["src"],b={class:"text-container"},k={class:"price"},B={class:"desc"},D={__name:"ProductDetailsView",props:["itemId"],setup(r){const o=_(),i=r,d=p(),e=m({}),c=()=>{e.value=o.products.find(s=>i.itemId===s.id)};c(),v(d,()=>{c()});function u(s){return new URL(`${s}`,import.meta.url).href}return(s,n)=>(f(),h(I,null,[t("div",C,[t("div",S,[t("img",{src:u(e.value.img),alt:""},null,8,V)]),t("div",b,[t("h3",null,a(e.value.title),1),t("span",k,a(e.value.price)+"$",1),t("button",{onClick:n[0]||(n[0]=P=>g(o).addToCart({...e.value,amount:1}))},"Add to cart"),t("p",B,a(e.value.desc),1)])]),w(x)],64))}},F=l(D,[["__scopeId","data-v-4ba389a4"]]);export{F as default};
