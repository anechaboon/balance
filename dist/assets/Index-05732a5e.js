import{A as u}from"./tenant.service-713d1294.js";import{P as v}from"./PlaceholderContent-9fa4866e.js";import{_ as p,r,o as _,d as f,c as I,a as t,b as n,n as g,V as d,t as m,e as w,f as x,h as b}from"./index-a94dd109.js";import{T as y}from"./TransactionList-5a44b8df.js";import"./moment-fbc5633a.js";const $={name:"DashboardPage",components:{PlaceholderContent:v},data(){return{onload:!0,imageUrl:localStorage.getItem("image_url"),name:localStorage.getItem("name"),walletId:parseInt(localStorage.getItem("walletId")),indexId:0,wallet:{},walletListId:[]}},mounted(){this.fetchData()},methods:{async fetchData(){this.getBalance(),this.getWallets()},async getBalance(){let s="?user_id="+parseInt(localStorage.getItem("balanceUserId"))+"&wallet_id="+this.walletId,e=await u.Home.getBalance(s);e.status==200&&(this.wallet=e.data,this.onload=!1)},async getWallets(){let s=await u.Wallet.getWallets();if(s.status==200){this.walletList=s.data;let e=[];s.data.forEach(function(l){e.push(l.id)}),this.walletListId=e;let i=this;this.indexId=this.walletListId.findIndex(l=>l==i.walletId)}},async preWallet(){this.indexId-=1,this.walletId=this.walletListId[this.indexId],this.getBalance()},async nextWallet(){this.indexId+=1,this.walletId=this.walletListId[this.indexId],this.getBalance()}},filters:{format_number:function(s){console.log("log:formatNumber-value",s)}}},T={key:1,class:"m-05em dashboard d-flex"},L={class:"col-1"},B={class:"col-10 h-40 mx-1 px-3",style:"width:80%"},k={class:"pb-2em row"},W={class:"col-2"},V=["src"],C={class:"col-10 mt-2"},S={class:"balance"},N={class:"mb-1"},D={class:"col-1"};function M(s,e,i,l,a,c){const o=r("placeholder-content");return a.onload?(_(),f(o,{key:0,"is-load":"true"})):(_(),I("div",T,[t("div",L,[n(d,{icon:"mdi-chevron-left-circle",variant:"text",width:"40",class:g("mt-5 btm"),onClick:e[0]||(e[0]=h=>c.preWallet()),disabled:a.indexId==0},null,8,["disabled"])]),t("div",B,[t("div",k,[t("div",W,[t("img",{class:"img-profile",alt:"Vue logo",src:a.imageUrl},null,8,V)]),t("div",C,[t("p",null,m(a.name),1)])]),t("div",S,[t("p",N,"Wallet | "+m(a.wallet.title),1),t("h1",null,[w("฿ "),t("b",null,m(s.$filters.formatNumber(a.wallet.balance)),1)])])]),t("div",D,[n(d,{to:"dashboard",icon:"mdi-chart-bar",width:"40",variant:"text"}),n(d,{icon:"mdi-chevron-right-circle",width:"40",variant:"text",class:g("btm"),onClick:e[1]||(e[1]=h=>c.nextWallet()),disabled:a.indexId==a.walletListId.length-1},null,8,["disabled"])])]))}const P=p($,[["render",M]]);const A={name:"TransactionsPage",components:{TransactionList:y}},U={class:"m-05em"},E={class:"row"},q=t("div",{class:"col-10"},[t("h1",null,"Transactions")],-1),z={class:"col-2"},H={class:"row"};function j(s,e,i,l,a,c){const o=r("TransactionList");return _(),I("div",U,[t("div",E,[q,t("div",z,[n(d,{to:"allTransaction",icon:"mdi-chevron-right-circle",height:"40",variant:"text",width:"40"})])]),t("div",H,[n(o)])])}const F=p(A,[["render",j]]);const G={components:{Transactions:F,Main:P},data(){return{}}};function J(s,e,i,l,a,c){const o=r("Main"),h=r("Transactions");return _(),f(b,{style:"background-color:black"},{default:x(()=>[n(o),n(h)]),_:1})}const Y=p(G,[["render",J]]);export{Y as default};