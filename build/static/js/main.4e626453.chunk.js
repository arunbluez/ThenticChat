(this["webpackJsonpthenthic-chat"]=this["webpackJsonpthenthic-chat"]||[]).push([[0],{155:function(e){e.exports=JSON.parse('{"lvl1":{"name":"#1","description":"Congrats, on your level 1 achievement","image":"https://arweave.net/ezpV6q5HM066IrDI9-qGklriU1vac4DmXCO01aCyVTM","edition":1,"attributes":[{"trait_type":"Level","value":"1"},{"trait_type":"Messages","value":"5"}],"platform":"Thentic Chat App"},"lvl2":{"name":"#2","description":"Congrats, on your level 2 achievement","image":"https://arweave.net/WSWJpEVCCIGsPh0kVa6HC7GZMVSNLt2rRYKW05JWeCo","edition":1,"attributes":[{"trait_type":"Level","value":"2"},{"trait_type":"Messages","value":"15"}],"platform":"Thentic Chat App"},"lvl3":{"name":"#3","description":"Congrats, on your level 3 achievement","image":"https://arweave.net/_xksr0LMX0W_wSQ3_H-_STq7rj1TUYv11ld0VlyvARQ","edition":1,"attributes":[{"trait_type":"Level","value":"3"},{"trait_type":"Messages","value":"30"}],"platform":"Thentic Chat App"}}')},208:function(e,t){},209:function(e,t){},231:function(e,t,r){},244:function(e,t,r){"use strict";r.r(t);var n=r(0),c=r.n(n),a=r(78),s=r.n(a),o=r(1),i=r.n(o),l=r(18),u=r(11),d=r(283),b=r(280),j=r(267),h=Object(j.a)({fonts:{heading:"Inter",body:"Inter"}}),p=r(268),f=r(4);function x(e){var t=e.children;return Object(f.jsx)(p.a,{flexDirection:"column",alignItems:"center",justifyContent:"center",h:"100vh",bg:"gray.800",children:t})}var O,m=r(270),v=r(271),g=r(281),C=r(269),y=r(279),w=r(167),k=r(150),S=r(151),_=r.n(S),I=r(103).a.div(O||(O=Object(k.a)(["\n  height: 2rem;\n  width: 2rem;\n  border-radius: 1.125rem;\n  background-color: black;\n"])));function z(e){var t=Object(n.useRef)();return Object(n.useEffect)((function(){e.account&&t.current&&(t.current.innerHTML="",t.current.appendChild(_()(32,parseInt(e.account.slice(2,10),16))))}),[e.account]),Object(f.jsx)(I,{ref:t})}var A=r(70),T=r.n(A);r(203),r(206),r(245);T.a.initializeApp({apiKey:"AIzaSyC9PENEfw55brZ7uEz-3idWI8a8eQPQuag",authDomain:"thenticchat.firebaseapp.com",projectId:"thenticchat",storageBucket:"thenticchat.appspot.com",messagingSenderId:"141030462850",appId:"1:141030462850:web:06cef6c511f658dc4b6b9b"});var M=Object(n.createContext)();function N(e){var t=e.children,r=Object(n.useState)(null),c=Object(u.a)(r,2),a=c[0],s=c[1],o=T.a.auth(),i=T.a.firestore();T.a.analytics();return Object(f.jsx)(M.Provider,{value:{firebase:T.a,auth:o,firestore:i,user:a,setUser:s},children:t})}function R(e){var t=e.handleOpenModal,r=Object(n.useContext)(M),c=r.firestore,a=r.setUser,s=Object(C.a)(),o=s.activateBrowserWallet,u=s.account,d=Object(y.a)(u),b=c.collection("users");return Object(n.useEffect)((function(){Object(l.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!u){e.next=5;break}return e.next=3,b.doc(u).get();case 3:(t=e.sent).exists?a(t.data()):(b.doc(u).set({account:u,messages:0,nfts:[]}),a({account:u,messages:0,nfts:[]}));case 5:case"end":return e.stop()}}),e)})))()}),[u]),u?Object(f.jsxs)(m.a,{display:"flex",alignItems:"center",background:"gray.700",borderRadius:"xl",py:"0",children:[Object(f.jsx)(m.a,{px:"3",children:Object(f.jsxs)(v.a,{color:"white",fontSize:"md",children:[d&&parseFloat(Object(w.a)(d)).toFixed(3)," BNB"]})}),Object(f.jsxs)(g.a,{onClick:t,bg:"gray.800",border:"1px solid transparent",_hover:{border:"1px",borderStyle:"solid",borderColor:"blue.400",backgroundColor:"gray.700"},borderRadius:"xl",m:"1px",px:3,height:"38px",children:[Object(f.jsx)(v.a,{color:"white",fontSize:"md",fontWeight:"medium",mr:"2",children:u&&"".concat(u.slice(0,6),"...").concat(u.slice(u.length-4,u.length))}),Object(f.jsx)(z,{account:u})]})]}):Object(f.jsx)(g.a,{onClick:function(){o()},bg:"blue.800",color:"blue.300",fontSize:"lg",fontWeight:"medium",borderRadius:"xl",border:"1px solid transparent",_hover:{borderColor:"blue.700",color:"blue.400"},_active:{backgroundColor:"blue.800",borderColor:"blue.700"},children:"Connect to a wallet"})}var W=r(276),E=r(274),V=r(282),B=r(273),D=r(275),F=r.p+"static/media/lvl1.0dafa33d.png",H=r.p+"static/media/lvl2.c02bf475.png",L=r.p+"static/media/lvl3.cb475541.png",J=r(104),P=r.n(J),U=r(155),q=Object(n.createContext)(),Q="https://thentic.tech/api/",G={"Content-Type":"application/json"},K="xRa3TCvKpVeIlZCAV7Q01fSIPvnCg8r5";function Z(e){var t=Object(n.useState)(null),r=Object(u.a)(t,2),c=r[0],a=r[1];Object(n.useEffect)((function(){Object(l.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s();case 2:case"end":return e.stop()}}),e)})))()}),[]);var s=function(){var e=Object(l.a)(i.a.mark((function e(){var t,r,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="".concat(Q,"contracts?key=").concat(K,"&chain_id=",97),e.prev=1,e.next=4,P.a.get(t,{headers:G});case 4:r=e.sent,console.log(r.data),n=r.data.contracts.filter((function(e){return"success"===e.status})),console.log(n[0]),a(n[0]),e.next=14;break;case 11:return e.prev=11,e.t0=e.catch(1),e.abrupt("return",{result:null,error:e.t0});case 14:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(){return e.apply(this,arguments)}}(),o=function(){var e=Object(l.a)(i.a.mark((function e(){var t,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(console.log("init contract"),c){e.next=16;break}return Q+"contract",t={key:K,chain_id:97,name:"ThenticChatNfts",short_name:"TCHAT"},e.prev=4,e.next=7,P.a.post("https://thentic.tech/api/contract",t,{headers:G});case 7:return r=e.sent,e.abrupt("return",{result:r.data,error:null});case 11:return e.prev=11,e.t0=e.catch(4),e.abrupt("return",{result:null,error:e.t0});case 14:e.next=17;break;case 16:return e.abrupt("return",{result:c,error:null});case 17:case"end":return e.stop()}}),e,null,[[4,11]])})));return function(){return e.apply(this,arguments)}}(),d=function(){var e=Object(l.a)(i.a.mark((function e(t,r){var n,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(console.log(c),!c){e.next=17;break}return Q+"nfts/mint",n={key:K,chain_id:97,contract:c.contract,nft_id:(new Date).valueOf(),nft_data:JSON.stringify(U["lvl".concat(t)]),to:r},console.log(n),e.prev=5,e.next=8,P.a.post("https://thentic.tech/api/nfts/mint",n,{headers:G});case 8:return a=e.sent,e.abrupt("return",{result:a.data,error:null});case 12:return e.prev=12,e.t0=e.catch(5),e.abrupt("return",{result:null,error:e.t0});case 15:e.next=18;break;case 17:return e.abrupt("return",{result:null,error:"No contract found"});case 18:case"end":return e.stop()}}),e,null,[[5,12]])})));return function(t,r){return e.apply(this,arguments)}}();return Object(f.jsx)(q.Provider,{value:{initializeContract:o,mintNft:d},children:e.children})}function X(e){var t=e.lvl,r=Object(C.a)().account,c=Object(n.useContext)(q).mintNft,a=function(){var e=Object(l.a)(i.a.mark((function e(){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c(t,r);case 2:n=e.sent,console.log(n),n.result&&(console.log(n.result),s(n.result.transaction_url));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),s=function(e){window.open(e,"_blank","noopener,noreferrer")};return Object(f.jsxs)("div",{className:"lvl-mint",children:[Object(f.jsx)("img",{src:function(){switch(t){case 1:return F;case 2:return H;case 3:return L;default:return""}}(),width:20,height:20}),Object(f.jsx)(g.a,{onClick:a,colorScheme:"teal",size:"xs",children:"Mint"})]})}function Y(e){var t=e.isOpen,r=e.onClose,c=Object(C.a)(),a=c.account,s=c.deactivate,o=Object(n.useState)(!1),i=Object(u.a)(o,2),l=i[0],d=i[1],b=Object(n.useState)(!1),j=Object(u.a)(b,2),h=j[0],x=j[1],O=Object(n.useState)(!1),y=Object(u.a)(O,2),w=y[0],k=y[1],S=Object(n.useContext)(M).user,_=Object(n.useState)(0),I=Object(u.a)(_,2),A=I[0],T=I[1];return Object(n.useEffect)((function(){var e=0;S&&(S.messages<5?e=parseInt((S.messages/5*100).toFixed(0)):S.messages>=5&&S.messages<15?(e=parseInt((S.messages/15*100).toFixed(0)),d(!0)):S.messages>=15&&S.messages<30?(e=parseInt((S.messages/30*100).toFixed(0)),x(!0)):k(!0),T(e))}),[S]),Object(f.jsxs)(W.a,{isOpen:t,onClose:r,isCentered:!0,size:"md",children:[Object(f.jsx)(W.g,{}),Object(f.jsxs)(W.d,{background:"gray.900",border:"1px",borderStyle:"solid",borderColor:"gray.700",borderRadius:"3xl",children:[Object(f.jsx)(W.f,{color:"white",px:4,fontSize:"lg",fontWeight:"medium",children:"Account"}),Object(f.jsx)(W.c,{color:"white",fontSize:"sm",_hover:{color:"whiteAlpha.700"}}),Object(f.jsx)(W.b,{pt:0,px:4,children:Object(f.jsxs)(m.a,{borderRadius:"3xl",border:"1px",borderStyle:"solid",borderColor:"gray.600",px:5,pt:4,pb:2,mb:3,children:[Object(f.jsxs)(p.a,{justifyContent:"space-between",alignItems:"center",mb:3,children:[Object(f.jsx)(v.a,{color:"gray.400",fontSize:"sm",children:"Connected with MetaMask"}),Object(f.jsx)(g.a,{variant:"outline",size:"sm",borderColor:"blue.800",borderRadius:"3xl",color:"blue.500",fontSize:"13px",fontWeight:"normal",px:2,height:"26px",_hover:{background:"none",borderColor:"blue.300",textDecoration:"underline"},onClick:function(){s(),r()},children:"Change"})]}),Object(f.jsxs)(p.a,{alignItems:"center",mt:2,mb:4,lineHeight:1,children:[Object(f.jsx)(z,{account:a}),Object(f.jsx)(v.a,{color:"white",fontSize:"xl",fontWeight:"semibold",ml:"2",lineHeight:"1.1",children:a&&"".concat(a.slice(0,6),"...").concat(a.slice(a.length-4,a.length))})]}),Object(f.jsxs)(p.a,{alignContent:"center",m:3,children:[Object(f.jsxs)(g.a,{variant:"link",color:"gray.400",fontWeight:"normal",fontSize:"sm",_hover:{textDecoration:"none",color:"whiteAlpha.800"},children:[Object(f.jsx)(B.a,{mr:1}),"Copy Address"]}),Object(f.jsxs)(E.a,{fontSize:"sm",display:"flex",alignItems:"center",href:"https://ropsten.etherscan.io/address/".concat(a),isExternal:!0,color:"gray.400",ml:6,_hover:{color:"whiteAlpha.800",textDecoration:"underline"},children:[Object(f.jsx)(D.a,{mr:1}),"View on Explorer"]})]})]})}),Object(f.jsx)(W.e,{justifyContent:"center",background:"gray.700",borderBottomLeftRadius:"3xl",borderBottomRightRadius:"3xl",p:6,children:Object(f.jsxs)(v.a,{color:"white",textAlign:"left",fontWeight:"medium",fontSize:"md",children:["Total number of messages sent: ",null===S||void 0===S?void 0:S.messages,Object(f.jsx)(V.a,{hasStripe:!0,value:A}),Object(f.jsxs)("div",{className:"lvl-mint-div",children:[l&&Object(f.jsx)(X,{lvl:1}),h&&Object(f.jsx)(X,{lvl:2}),w&&Object(f.jsx)(X,{lvl:3})]})]})})]})]})}r(230);var $=r(160),ee=r(161);function te(e){var t=Object(C.a)().account,r=e.message,n=r.text,c=r.account===t?"sent":"received";return Object(f.jsx)(f.Fragment,{children:Object(f.jsxs)("div",{className:"message ".concat(c),children:[Object(f.jsx)(z,{account:t}),Object(f.jsx)("p",{children:n})]})})}function re(){var e=Object(C.a)().account,t=Object(n.useContext)(M),r=t.firebase,c=t.firestore,a=t.user,s=t.setUser,o=Object(n.useRef)(),d=c.collection("messages"),b=c.collection("users"),j=d.orderBy("createdAt").limit(25),h=Object(ee.a)(j),p=Object(u.a)(h,1)[0],x=Object(n.useState)(""),O=Object(u.a)(x,2),m=O[0],v=O[1],g=function(){var t=Object(l.a)(i.a.mark((function t(n){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),t.next=3,d.add({text:m,createdAt:r.firestore.FieldValue.serverTimestamp(),account:e});case 3:a.messages+=1,s(Object($.a)({},a)),b.doc(e).set(a,{merge:!0}),v(""),o.current.scrollIntoView({behavior:"smooth"});case 8:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsxs)("main",{children:[p&&p.map((function(e){return Object(f.jsx)(te,{message:e},e.id)})),Object(f.jsx)("span",{ref:o})]}),Object(f.jsxs)("form",{onSubmit:g,children:[Object(f.jsx)("input",{value:m,onChange:function(e){return v(e.target.value)},placeholder:"say something nice"}),Object(f.jsx)("button",{type:"submit",disabled:!m,children:"\ud83d\udcac"})]})]})}r(231);function ne(e){return Object(f.jsx)("iframe",{src:"https://thentic.tech/request?id=gvkVyT2EHED6qgON",width:1,height:1,scrolling:"no"})}var ce=function(){var e=Object(d.a)(),t=e.isOpen,r=e.onOpen,c=e.onClose,a=(Object(C.a)().account,Object(n.useContext)(q).initializeContract,Object(n.useState)(null)),s=Object(u.a)(a,2),o=s[0];return s[1],Object(f.jsx)(b.a,{theme:h,children:Object(f.jsx)(x,{children:Object(f.jsxs)("div",{className:"App",children:[console.log(o),Object(f.jsx)(ne,{iframe:o}),Object(f.jsxs)("header",{children:[Object(f.jsx)("h1",{children:"Thentic Chat! \u269b\ufe0f\ud83d\udd25"}),Object(f.jsx)(R,{handleOpenModal:r}),Object(f.jsx)(Y,{isOpen:t,onClose:c})]}),Object(f.jsx)("section",{children:Object(f.jsx)(re,{})})]})})})},ae=r(277);s.a.render(Object(f.jsx)(c.a.StrictMode,{children:Object(f.jsx)(ae.a,{config:{readOnlyChainId:97,readOnlyUrls:{97:"https://data-seed-prebsc-1-s1.binance.org:8545/"},multicallAddresses:{97:"0xae11C5B5f29A6a25e955F0CB8ddCc416f522AF5C"},supportedChains:[97]},children:Object(f.jsx)(N,{children:Object(f.jsx)(Z,{children:Object(f.jsx)(ce,{})})})})}),document.getElementById("root"))}},[[244,1,2]]]);
//# sourceMappingURL=main.4e626453.chunk.js.map