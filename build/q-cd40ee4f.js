import{R as c,$ as u,w as r,d as l,s as d,S as m,_ as p,i as _}from"./q-4e3b0383.js";import{u as b}from"./q-f06b0a8e.js";const f=s=>{const e=c(s,["action","spaReset","reloadDocument","onSubmit$"]),a=b();return u("form",{...e,children:l(m,null,3,"BC_0"),onSubmit$:d(()=>p(()=>Promise.resolve().then(()=>S),void 0),"s_p9MSze0ojs4",[a])},{action:"get","preventdefault:submit":r(t=>!t.reloadDocument,[s],"!p0.reloadDocument"),"data-spa-reset":r(t=>t.spaReset?"true":void 0,[s],'p0.spaReset?"true":undefined')},0,"BC_1")},v=async(s,e)=>{const[a]=_(),t=new FormData(e),o=new URLSearchParams;t.forEach((n,i)=>{typeof n=="string"&&o.append(i,n)}),a("?"+o.toString(),!0).then(()=>{e.getAttribute("data-spa-reset")==="true"&&e.reset(),e.dispatchEvent(new CustomEvent("submitcompleted",{bubbles:!1,cancelable:!1,composed:!1,detail:{status:200}}))})},S=Object.freeze(Object.defineProperty({__proto__:null,s_Nk9PlpjQm9Y:f,s_p9MSze0ojs4:v},Symbol.toStringTag,{value:"Module"}));export{f as s_Nk9PlpjQm9Y,v as s_p9MSze0ojs4};
