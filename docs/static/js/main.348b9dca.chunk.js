(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,n,t){},16:function(e,n,t){},18:function(e,n,t){"use strict";t.r(n);var a=t(0),o=t.n(a),r=t(2),s=t.n(r),c=(t(14),t(3)),l=t(4),i=t(7),d=t(5),u=t(8),w=t(6),p=t.n(w),m=(t(16),function(e){function n(){var e,t;Object(c.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(t=Object(i.a)(this,(e=Object(d.a)(n)).call.apply(e,[this].concat(o)))).isMetaMaskEnabled=function(){return!!window.web3},t.address=function(){return console.log("App::address"),window.web3?window.web3.eth.accounts[0]:null},t.sendETH=function(e,n){console.log("App::sendETH"),window.web3&&t.address()&&window.web3.eth.sendTransaction({from:t.address(),to:e,value:window.web3.toWei(n,"ether")},function(e,n){console.log("result",e),console.log("error",n)})},t.testSendETH=function(){t.sendETH("0xccE42227f42A01b80Fc374485186bd0feF6B2835",1)},t}return Object(u.a)(n,e),Object(l.a)(n,[{key:"render",value:function(){return o.a.createElement("div",{className:"App"},o.a.createElement("header",{className:"App-header"},o.a.createElement("img",{src:p.a,className:"App-logo",alt:"logo"}),this.isMetaMaskEnabled()?o.a.createElement("p",null,"Metamask ready"):o.a.createElement("p",null,"Please install Metamask"),this.address()?o.a.createElement("p",null,"Connected to account ",this.address()):o.a.createElement("p",null,"Please unlock Metamask"),o.a.createElement("a",{className:"App-link",href:"https://reactjs.org",target:"_blank",rel:"noopener noreferrer"},"Learn React"),o.a.createElement("button",{onClick:this.testSendETH}," send eth ")))}}]),n}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(o.a.createElement(m,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},6:function(e,n,t){e.exports=t.p+"static/media/logo.5d5d9eef.svg"},9:function(e,n,t){e.exports=t(18)}},[[9,2,1]]]);
//# sourceMappingURL=main.348b9dca.chunk.js.map