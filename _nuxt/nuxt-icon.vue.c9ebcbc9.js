import{s as r,r as _,w as l,o as c,f as u,l as m,u as d,_ as s}from"./entry.21e9f21f.js";const p=["innerHTML"],v=r({__name:"nuxt-icon",props:{name:null,filled:{type:Boolean,default:!1}},setup(e){const o=e,n=_("");return l(async()=>{try{const i=await Object.assign({"/assets/icons/outlined/arrow-right.svg":()=>s(()=>import("./arrow-right.54762c02.js"),[],import.meta.url).then(t=>t.default),"/assets/icons/solid/calendar.svg":()=>s(()=>import("./calendar.5e0d5aae.js"),[],import.meta.url).then(t=>t.default),"/assets/icons/solid/discount.svg":()=>s(()=>import("./discount.0287a62d.js"),[],import.meta.url).then(t=>t.default),"/assets/icons/solid/info.svg":()=>s(()=>import("./info.d2db4199.js"),[],import.meta.url).then(t=>t.default),"/assets/icons/solid/location.svg":()=>s(()=>import("./location.9b1ea681.js"),[],import.meta.url).then(t=>t.default),"/assets/icons/solid/users.svg":()=>s(()=>import("./users.0e641760.js"),[],import.meta.url).then(t=>t.default)})[`/assets/icons/${o.name}.svg`]();n.value=i}catch{console.error(`[nuxt-icons] Icon '${o.name}' doesn't exist in 'assets/icons'`)}}),(a,i)=>(c(),u("span",{class:m(["nuxt-icon",{"nuxt-icon--fill":!e.filled}]),innerHTML:d(n)},null,10,p))}});export{v as _};
