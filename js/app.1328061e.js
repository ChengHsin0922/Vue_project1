(function(){"use strict";var e={8926:function(e,o,t){var n=t(5130),l=t(6768);function a(e,o,t,n,a,i){const r=(0,l.g2)("RoomList");return(0,l.uX)(),(0,l.Wv)(r)}var i=t(4232);const r={id:"rooms"},s={class:"container-fluid"},u={class:"row"},c={class:"col-sm-3 bg-light py-4"},m={class:"d-inline fw-bold align-bottom"},d={style:{height:"45vh",overflowY:"scroll"},class:"mb-2"},p=["data-bs-target"],f=["onClick"],b=["id"],k=["onUpdate:modelValue"],v=["onUpdate:modelValue"],h=["onUpdate:modelValue"],g=["onUpdate:modelValue"],L=["onUpdate:modelValue"],y={for:"",class:"mb-5"},_={for:""},x=["onUpdate:modelValue"],w={for:""},j=["onUpdate:modelValue"],C={for:""},q=["onUpdate:modelValue"],U={class:"col-sm-9",style:{height:"80vh",overflowY:"scroll"}},V={class:""},E={class:"row list-unstyled"},O={class:"shadow-sm"},D=["onClick"],R={class:"position-absolute top-50 fs-5 px-4 py-1 bg-white fw-bold"},W={class:"p-4"},X={class:"d-flex justify-content-between"},P={class:"d-inline-block"},S={key:0},T={key:1},J={key:2},B={class:"d-flex"},I={class:"text-danger ms-auto"};function H(e,o,t,a,H,A){return(0,l.uX)(),(0,l.CE)("div",r,[(0,l.Lk)("div",s,[(0,l.Lk)("div",u,[(0,l.Lk)("div",c,[o[12]||(o[12]=(0,l.Lk)("h4",{class:"fw-bold"},"飯店資料",-1)),o[13]||(o[13]=(0,l.Lk)("hr",null,null,-1)),o[14]||(o[14]=(0,l.Lk)("label",{for:""},"總折數",-1)),(0,l.bo)((0,l.Lk)("input",{"onUpdate:modelValue":o[0]||(o[0]=e=>this.hotel_discount=e),type:"text",class:"form-control mb-2"},null,512),[[n.Jo,this.hotel_discount]]),o[15]||(o[15]=(0,l.Lk)("label",{for:""},"服務費",-1)),(0,l.bo)((0,l.Lk)("input",{"onUpdate:modelValue":o[1]||(o[1]=e=>this.service_fee=e),type:"text",class:"form-control mb-4"},null,512),[[n.Jo,this.service_fee]]),(0,l.Lk)("h4",m,"房間編輯 ("+(0,i.v_)(H.roomData.length+"間")+")",1),(0,l.Lk)("button",{onClick:o[2]||(o[2]=(...e)=>A.add_rooms&&A.add_rooms(...e)),type:"button",class:"d-block btn btn-secondary mt-2"},"+新增房間"),o[16]||(o[16]=(0,l.Lk)("hr",null,null,-1)),(0,l.Lk)("div",d,[((0,l.uX)(!0),(0,l.CE)(l.FK,null,(0,l.pI)(H.roomData,((e,t)=>((0,l.uX)(),(0,l.CE)("div",{key:t},[(0,l.Lk)("h5",{class:"fw-bold mb-4 border rounded-1 p-2","data-bs-toggle":"collapse","data-bs-target":"#room_"+t,style:{cursor:"pointer","border-left-width":"4px"}},[(0,l.eW)((0,i.v_)(e.name)+" ",1),(0,l.Lk)("i",{class:"fa-solid fa-trash-can",onClick:e=>A.delete_room(t),style:{cursor:"pointer"}},null,8,f)],8,p),(0,l.Lk)("div",{class:"collapse",id:"room_"+t},[o[7]||(o[7]=(0,l.Lk)("label",{for:""},"房間名稱 ",-1)),(0,l.bo)((0,l.Lk)("input",{"onUpdate:modelValue":o=>e.name=o,type:"text",class:"form-control"},null,8,k),[[n.Jo,e.name]]),o[8]||(o[8]=(0,l.Lk)("label",{for:""},"英文名稱",-1)),(0,l.bo)((0,l.Lk)("input",{"onUpdate:modelValue":o=>e.eng=o,type:"text",class:"form-control"},null,8,v),[[n.Jo,e.eng]]),o[9]||(o[9]=(0,l.Lk)("label",{for:""},"價錢",-1)),(0,l.bo)((0,l.Lk)("input",{"onUpdate:modelValue":o=>e.price=o,type:"text",class:"form-control"},null,8,h),[[n.Jo,e.price]]),o[10]||(o[10]=(0,l.Lk)("label",{for:""},"折價",-1)),(0,l.bo)((0,l.Lk)("input",{"onUpdate:modelValue":o=>e.discount=o,type:"text",class:"form-control"},null,8,g),[[n.Jo,e.discount]]),o[11]||(o[11]=(0,l.Lk)("label",{for:""},"圖片網址",-1)),(0,l.bo)((0,l.Lk)("input",{"onUpdate:modelValue":o=>e.cover=o,type:"text",class:"form-control"},null,8,L),[[n.Jo,e.cover]]),(0,l.Lk)("label",y,[o[6]||(o[6]=(0,l.eW)("房間設備： ")),(0,l.Lk)("label",_,[o[3]||(o[3]=(0,l.eW)("早餐 ")),(0,l.bo)((0,l.Lk)("input",{"onUpdate:modelValue":o=>e.equipment.breakfast=o,type:"checkbox",class:"me-1"},null,8,x),[[n.lH,e.equipment.breakfast]])]),(0,l.Lk)("label",w,[o[4]||(o[4]=(0,l.eW)("浴缸 ")),(0,l.bo)((0,l.Lk)("input",{"onUpdate:modelValue":o=>e.equipment.bathtub=o,type:"checkbox",class:"me-1"},null,8,j),[[n.lH,e.equipment.bathtub]])]),(0,l.Lk)("label",C,[o[5]||(o[5]=(0,l.eW)("電視 ")),(0,l.bo)((0,l.Lk)("input",{"onUpdate:modelValue":o=>e.equipment.television=o,type:"checkbox",class:"me-1"},null,8,q),[[n.lH,e.equipment.television]])])])],8,b)])))),128))])]),(0,l.Lk)("div",U,[o[21]||(o[21]=(0,l.Lk)("h1",null,"房間列表",-1)),o[22]||(o[22]=(0,l.Lk)("hr",null,null,-1)),(0,l.Lk)("div",V,[(0,l.Lk)("ul",E,[((0,l.uX)(!0),(0,l.CE)(l.FK,null,(0,l.pI)(A.roomPrices,((e,t)=>((0,l.uX)(),(0,l.CE)("li",{class:"col-4 p-4",key:t},[(0,l.Lk)("div",O,[(0,l.Lk)("div",{class:"position-relative",style:(0,i.Tr)({backgroundImage:`url('${e.cover}')`,backgroundPosition:"center",backgroundSize:"cover",height:"150px"})},[(0,l.Lk)("i",{class:"fa-regular fa-circle-xmark fa-2xl position-absolute mt-2 end-0 p-4",style:{color:"#ffffff",cursor:"pointer"},onClick:e=>A.delete_room(t)},null,8,D),(0,l.Lk)("h3",R,(0,i.v_)(e.name),1)],4),(0,l.Lk)("div",W,[(0,l.Lk)("h4",X,[(0,l.eW)((0,i.v_)(e.eng)+" ",1),(0,l.Lk)("div",P,[e.equipment.breakfast?((0,l.uX)(),(0,l.CE)("span",S,o[17]||(o[17]=[(0,l.Lk)("i",{class:"fa-solid fa-mug-saucer fa-sm ms-2 opacity-75"},null,-1)]))):(0,l.Q3)("",!0),e.equipment.bathtub?((0,l.uX)(),(0,l.CE)("span",T,o[18]||(o[18]=[(0,l.Lk)("i",{class:"fa-solid fa-bath fa-sm ms-2 opacity-75"},null,-1)]))):(0,l.Q3)("",!0),e.equipment.television?((0,l.uX)(),(0,l.CE)("span",J,o[19]||(o[19]=[(0,l.Lk)("i",{class:"fa-solid fa-tv fa-sm ms-2 opacity-75"},null,-1)]))):(0,l.Q3)("",!0)])]),(0,l.Lk)("h5",null,(0,i.v_)(e.price)+"*"+(0,i.v_)(e.discount)+"*"+(0,i.v_)(H.hotel_discount)+"="+(0,i.v_)(e.final_price),1),(0,l.Lk)("h5",null,(0,i.v_)(e.discount)+"*"+(0,i.v_)(H.hotel_discount)+" = "+(0,i.v_)(e.final_discount)+"折",1),(0,l.Lk)("div",B,[(0,l.Lk)("h4",null,[o[20]||(o[20]=(0,l.eW)("TWD ")),(0,l.Lk)("del",null,(0,i.v_)(e.price),1)]),(0,l.Lk)("h4",I,"$ "+(0,i.v_)(e.final_price),1)])])])])))),128))])])])])])])}t(4114);var A=t(4874),F=t.n(A),M=[{name:"經濟雙人房",eng:"Economy Double Room",price:7e3,amount:0,cover:"./images/room01.jpg",discount:.9,equipment:{television:!1,bathtub:!0,breakfast:!0}},{name:"海景三人房",eng:"Sea view triple Room",price:7800,amount:0,cover:"./images/room02.jpg",discount:.8,equipment:{television:!0,bathtub:!0,breakfast:!1}},{name:"典雅景觀房",eng:"Elegant landscape Room",price:5400,amount:0,cover:"./images/room03.jpg",discount:.85,equipment:{television:!1,bathtub:!0,breakfast:!0}},{name:"尊享豪華房",eng:"Exclusive Deluxe Room",price:9800,amount:0,cover:"./images/room04.jpg",discount:.8,equipment:{television:!0,bathtub:!1,breakfast:!0}},{name:"商務雙人房",eng:"Business Double Room",price:5600,amount:0,cover:"./images/room05.jpg",discount:.9,equipment:{television:!0,bathtub:!1,breakfast:!1}},{name:"溫泉雙人房",eng:"Hot spring double Room",price:8400,amount:0,cover:"./images/room06.jpg",discount:.6,equipment:{television:!0,bathtub:!0,breakfast:!0}},{name:"總統套房",eng:"Presidential Suite",price:23e3,amount:0,cover:"./images/room07.jpg",discount:.75,equipment:{television:!0,bathtub:!0,breakfast:!0}},{name:"奢華四人房",eng:"Luxury four Room",price:8500,amount:0,cover:"./images/room08.jpg",discount:.7,equipment:{television:!0,bathtub:!0,breakfast:!1}}],Q={data(){return{roomData:M,hotel_discount:.9,service_fee:200}},computed:{roomPrices(){return this.roomData.map((e=>({...e,final_discount:parseInt(e.discount*this.hotel_discount*100),final_price:parseInt(e.price*e.discount*this.hotel_discount)+1*this.service_fee})))}},methods:{add_rooms:function(){this.roomData.push({name:"新房間",eng:"New Room",price:0,amount:0,cover:"http://bosscode.monoame.com/20170323_vue_comp/img/room%20(1).jpg",discount:0,equipment:{wifi:!1,bathtub:!0,breakfast:!0}})},delete_room:function(e){F().fire({title:"確定要刪除房間?",text:"這個操作無法撤回",icon:"warning",showCancelButton:!0,confirmButtonColor:"#d33",cancelButtonColor:"#3085d6",confirmButtonText:"確定",cancelButtonText:"取消"}).then((o=>{o.isConfirmed&&(this.roomData.splice(e,1),F().fire("刪除成功","房間已刪除!","success"))}))}},mounted(){console.log("ok")}},K=t(1241);const Y=(0,K.A)(Q,[["render",H]]);var $=Y,z={name:"App",components:{RoomList:$}};const N=(0,K.A)(z,[["render",a]]);var G=N;t(8077);(0,n.Ef)(G).mount("#app")}},o={};function t(n){var l=o[n];if(void 0!==l)return l.exports;var a=o[n]={exports:{}};return e[n].call(a.exports,a,a.exports,t),a.exports}t.m=e,function(){var e=[];t.O=function(o,n,l,a){if(!n){var i=1/0;for(c=0;c<e.length;c++){n=e[c][0],l=e[c][1],a=e[c][2];for(var r=!0,s=0;s<n.length;s++)(!1&a||i>=a)&&Object.keys(t.O).every((function(e){return t.O[e](n[s])}))?n.splice(s--,1):(r=!1,a<i&&(i=a));if(r){e.splice(c--,1);var u=l();void 0!==u&&(o=u)}}return o}a=a||0;for(var c=e.length;c>0&&e[c-1][2]>a;c--)e[c]=e[c-1];e[c]=[n,l,a]}}(),function(){t.n=function(e){var o=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(o,{a:o}),o}}(),function(){t.d=function(e,o){for(var n in o)t.o(o,n)&&!t.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:o[n]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,o){return Object.prototype.hasOwnProperty.call(e,o)}}(),function(){t.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){var e={524:0};t.O.j=function(o){return 0===e[o]};var o=function(o,n){var l,a,i=n[0],r=n[1],s=n[2],u=0;if(i.some((function(o){return 0!==e[o]}))){for(l in r)t.o(r,l)&&(t.m[l]=r[l]);if(s)var c=s(t)}for(o&&o(n);u<i.length;u++)a=i[u],t.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return t.O(c)},n=self["webpackChunkmy_new_project"]=self["webpackChunkmy_new_project"]||[];n.forEach(o.bind(null,0)),n.push=o.bind(null,n.push.bind(n))}();var n=t.O(void 0,[504],(function(){return t(8926)}));n=t.O(n)})();
//# sourceMappingURL=app.1328061e.js.map