(this.webpackJsonpweb=this.webpackJsonpweb||[]).push([[0],{24:function(e,t,a){e.exports=a.p+"static/media/logo.0df5b4e0.svg"},35:function(e,t,a){e.exports=a.p+"static/media/micIconWhite.04514f15.svg"},36:function(e,t,a){e.exports=a.p+"static/media/videoIconWhite.67e5fd38.svg"},37:function(e,t,a){e.exports=a.p+"static/media/micIconBlack.57c33e88.svg"},38:function(e,t,a){e.exports=a.p+"static/media/videoIconBlack.4db8d2ae.svg"},39:function(e,t,a){e.exports=a.p+"static/media/phoneIconWhite.2503e736.svg"},40:function(e,t,a){e.exports=a.p+"static/media/arrowIconWhite.68a325c8.svg"},46:function(e,t,a){e.exports=a(63)},55:function(e,t,a){},60:function(e,t,a){},62:function(e,t,a){},63:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(17),i=a.n(r),l=a(18),o=a(13),s=a(14),m=a(5),u=a(6),p=a(9),d=a(8),b=a(64),f=a(68),E=a(66),h=a(69),O=(a(55),a(67)),v=a(21),g=a.n(v),C=a(65),y=a(35),j=a.n(y),x=a(36),w=a.n(x),k=a(37),N=a.n(k),M=a(38),I=a.n(M),R=a(39),B=a.n(R),G=a(40),W=a.n(G),T=function(e){Object(p.a)(a,e);var t=Object(d.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){var e=this.props,t=e.toggleMic,a=e.toggleVideo,n=e.toggleCameraDirection,r=e.isMuted,i=e.isWebcamOff,l=e.mic,s=e.webcam,m=e.switchCamera,u=e.endCall,p=e.endCallFunction;return c.a.createElement(b.a,null,l?c.a.createElement(h.a,{className:"webcam-button",onClick:t,active:r},r?c.a.createElement(C.a,{src:N.a}):c.a.createElement(C.a,{src:j.a})):c.a.createElement(b.a,null),s?c.a.createElement(h.a,{className:"webcam-button",onClick:a,active:i},i?c.a.createElement(C.a,{src:I.a}):c.a.createElement(C.a,{src:w.a})):c.a.createElement(b.a,null),m?c.a.createElement(h.a,{className:"webcam-button d-md-none",onClick:n},c.a.createElement(C.a,{src:W.a})):c.a.createElement(b.a,null),u?c.a.createElement(h.a,{className:"webcam-button phone-button",onClick:p},c.a.createElement(o.b,{to:"/left"},c.a.createElement(C.a,{src:B.a}))):c.a.createElement(b.a,null))}}]),a}(n.Component);var L=Object(l.b)((function(e){return{isMuted:e.CallButtonsReducer.isMuted,isWebcamOff:e.CallButtonsReducer.isWebcamOff,isBackCamera:e.CallButtonsReducer.isBackCamera}}),(function(e){return{toggleMic:function(){return e({type:"TOGGLEMIC"})},toggleVideo:function(){return e({type:"TOGGLEVIDEO"})},toggleCameraDirection:function(){return e({type:"TOGGLECAMERADIRECTION"})}}}))(T),D=function(e){Object(p.a)(a,e);var t=Object(d.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){var e=this.props.isMuted;return c.a.createElement(E.a,{xs:12,lg:8,className:"mx-0 px-0 video-wrapper pr-lg-5"},c.a.createElement(O.a,{aspectRatio:"4by3",className:"view-finder h-100"},c.a.createElement(g.a,{videoConstraints:{facingMode:"user"},audio:e})),c.a.createElement("div",{className:"webcam-button-wrapper pr-lg-5"},c.a.createElement(L,{mic:!0,webcam:!0})))}}]),a}(n.Component),A=Object(l.b)((function(e){return{isMuted:e.CallButtonsReducer.isMuted,isWebcamOff:e.CallButtonsReducer.isWebcamOff}}),(function(){return{}}))(D),V=function(e){Object(p.a)(a,e);var t=Object(d.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return c.a.createElement(b.a,{className:"vh-100",fluid:"lg"},c.a.createElement(f.a,{className:"h-100 align-items-lg-center align-items-start flex-row"},c.a.createElement(A,null),c.a.createElement(E.a,{xs:12,lg:4,className:"text-center mx-0 px-0"},c.a.createElement("h2",{className:"d-none d-lg-inline-block"},"Tulipe 5th Avenue"),c.a.createElement("p",null,"No one is in the chat"),c.a.createElement("br",{className:"d-none d-lg-block"}),c.a.createElement(h.a,{variant:"tulip-large-primary"},c.a.createElement(o.b,{to:"/room"},"Join Video Chat")))))}}]),a}(n.Component),J=a(24),F=a.n(J),P=function(e){Object(p.a)(a,e);var t=Object(d.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return c.a.createElement(b.a,{className:"text-center"},c.a.createElement(C.a,{src:F.a,style:{width:"88px"}}),c.a.createElement("h3",null,"Link Expired"),c.a.createElement("p",null,"This session has expired. Initiate a new video chat from Live Connect."))}}]),a}(n.Component),S=a(43),U=a.n(S),Y=(a(60),[{path:"/",exact:!0,component:V},{path:"/expired",component:P},{path:"/room",component:function(e){Object(p.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).isOnly=void 0,n.isOnly=!0,n}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=this;setTimeout((function(){e.isOnly=!1,e.forceUpdate()}),5e3)}},{key:"render",value:function(){return c.a.createElement(b.a,{className:"vh-100 text-center mx-0 px-0 overflow-hidden",fluid:!0},c.a.createElement(f.a,{className:"h-100 align-items-center mx-0 px-0"},c.a.createElement(E.a,{md:!0,className:"mx-0 px-0 h-100"},c.a.createElement(U.a,{bounds:"parent"},c.a.createElement(O.a,{aspectRatio:"4by3",className:"h-100 d-none small-view-finder position-absolute ".concat(this.isOnly?"d-none":"d-block")},c.a.createElement(g.a,{videoConstraints:{facingMode:"user"}}))),c.a.createElement(O.a,{aspectRatio:"4by3",className:"h-100 view-finder rounded-0"},c.a.createElement(g.a,{className:"rounded-0 h-100",videoConstraints:{facingMode:"user"}})),c.a.createElement("div",{className:"webcam-button-wrapper room ".concat(this.isOnly?"":"not-only")},c.a.createElement("p",{className:this.isOnly?"d-block":"d-none"},"No one else is in the chat"),c.a.createElement(L,{mic:!0,webcam:!0,switchCamera:!0,endCall:!0})))))}}]),a}(n.Component)},{path:"/left",component:function(e){Object(p.a)(a,e);var t=Object(d.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return c.a.createElement(b.a,{className:"text-center"},c.a.createElement(C.a,{src:F.a,style:{width:"88px"}}),c.a.createElement("br",null),c.a.createElement("p",null,"You've left the chat"),c.a.createElement("br",null),c.a.createElement(h.a,{variant:"tulip-large-primary"},c.a.createElement(o.b,{to:"/room"},"Rejoin Video Chat")))}}]),a}(n.Component)}]),q=a(44),z=a(15),H=a(45),K={loading:!1},Q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:K,t=arguments.length>1?arguments[1]:void 0;return t.type,e},X=a(16),Z={isMuted:!1,isWebcamOff:!1,isBackCamera:!1},$=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Z,t=arguments.length>1?arguments[1]:void 0;return"TOGGLEMIC"===t.type&&(e=Object(X.a)(Object(X.a)({},e),{},{isMuted:!e.isMuted})),"TOGGLEVIDEO"===t.type&&(e=Object(X.a)(Object(X.a)({},e),{},{isWebcamOff:!e.isWebcamOff})),"TOGGLECAMERADIRECTION"===t.type&&(e=Object(X.a)(Object(X.a)({},e),{},{isBackCamera:!e.isBackCamera})),e},_=function(){var e=[];e.push(q.a);var t=Object(z.c)({AppReducer:Q,CallButtonsReducer:$}),a=z.a.apply(void 0,e);return Object(z.d)(Object(H.a)(t),a)};a(61),a(62);i.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(l.a,{store:_()},c.a.createElement(o.a,null,c.a.createElement(s.c,null,Y.map((function(e,t){return c.a.createElement(s.a,{key:t,path:e.path,render:function(t){return c.a.createElement(e.component,t)},exact:Object.prototype.hasOwnProperty.call(e,"exact")})})))))),document.getElementById("root"))}},[[46,1,2]]]);
//# sourceMappingURL=main.a59e6c60.chunk.js.map