import{F as o}from"./q-f06b0a8e.js";import{d as e,f as l,M as c,v as n,g as r}from"./q-4e3b0383.js";import{useListLoader as p,useAddToListAction as d}from"./q-1a1735ea.js";const m="_list_1ofyy_1",_="_empty_1ofyy_9",y="_input_1ofyy_22",h="_hint_1ofyy_32",t={list:m,empty:_,input:y,hint:h},g=()=>{const s=p(),i=d();return e(r,{children:[l("div",null,{class:"container container-center"},l("h1",null,null,[l("span",null,{class:"highlight"},"TODO",3,null)," List"],3,null),3,null),l("div",null,{role:"presentation",class:"ellipsis"},null,3,null),l("div",null,{class:"container container-center"},s.value.length&&l("ul",null,{class:t.list},s.value.map((u,a)=>l("li",null,null,c(u,"text"),1,`items-${a}`)),1,"AP_0")||l("span",null,{class:t.empty},"No items found",3,"AP_1"),1,null),l("div",null,{class:"container container-center"},[e(o,{action:i,spaReset:!0,children:[l("input",null,{type:"text",name:"text",required:!0,class:t.input},null,3,null)," ",l("button",null,{type:"submit",class:"button-dark"},"Add item",3,null)],[n]:{action:n,spaReset:n}},3,"AP_2"),l("p",null,{class:t.hint},"PS: This little app works even when JavaScript is disabled.",3,null)],1,null)]},1,"AP_3")};export{g as s_J4V2qsF7Yxo};
