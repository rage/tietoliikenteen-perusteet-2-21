(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{"4KiG":function(e,t,n){"use strict";var a=n("kD0k"),r=n.n(a),i=(n("ls82"),n("/S4K")),o=n("9Hrx"),l=n("q1tI"),s=n.n(l),c=n("30+C"),u=n("oa/T"),m=n("r9w1"),d=n("ZGBi"),h=n("VmPI"),p=n("O6Ht"),f=n("M4Ey"),b=n("Z3vd"),g=n("Kfvu"),v=n("QLAq"),E=n("uVck"),O=n("vOnD"),j=n("pg4K"),k=n("IP2g"),_=n("i8i4"),C=n.n(_),x=n("KmP9"),w=n("1AYd"),y=n("jjAL"),I=n("ADg1"),L=n("cVXz"),S=n("LCzB"),M=Object(O.b)(I.a).withConfig({displayName:"DropdownMenu__StyledFormControl",componentId:"olaryr-0"})(["width:100%;"]),T=(Object(S.a)("user")(Object(j.a)((function(e){var t=e.selectedVariant,n=e.setSelectedVariant,a=e.t,r=Object(l.useState)(0),i=r[0],o=r[1],c=Object(l.useRef)(null);Object(l.useEffect)((function(){o(C.a.findDOMNode(c.current).offsetWidth)}));return s.a.createElement(M,{variant:"outlined"},s.a.createElement(w.a,{ref:c,htmlFor:"course-variant-select"},a("whichCourse")),s.a.createElement(L.a,{value:t,onChange:function(e){n(e.target.value)},input:s.a.createElement(x.a,{labelWidth:i,name:"course-variant",id:"course-variant-select"})},s.a.createElement(y.a,{value:"dl"},"Aikataulutettu Ohjelmoinnin MOOC, Ohjelmoinnin perusteet"),s.a.createElement(y.a,{value:"nodl"},"Aikatauluton Ohjelmoinnin MOOC, Ohjelmoinnin perusteet"),s.a.createElement(y.a,{value:"ohja-dl"},"Aikataulutettu Ohjelmoinnin MOOC, Ohjelmoinnin jatkokurssi"),s.a.createElement(y.a,{value:"ohja-nodl"},"Aikatauluton Ohjelmoinnin MOOC, Ohjelmoinnin jatkokurssi")))}))),n("Wbzz"),O.b.div.withConfig({displayName:"CourseOptionsEditor__Row",componentId:"sc-15i8a3h-0"})(["margin-bottom:1.5rem;"])),N=O.b.form.withConfig({displayName:"CourseOptionsEditor__Form",componentId:"sc-15i8a3h-1"})([""]),D=O.b.div.withConfig({displayName:"CourseOptionsEditor__InfoBox",componentId:"sc-15i8a3h-2"})(["margin-bottom:2rem;"]),F=O.b.div.withConfig({displayName:"CourseOptionsEditor__FormContainer",componentId:"sc-15i8a3h-3"})(["height:100%;margin-top:2rem;"]),A=(Object(O.b)(k.a).withConfig({displayName:"CourseOptionsEditor__StyledIcon",componentId:"sc-15i8a3h-4"})(["margin-right:0.25rem;"]),Object(O.b)(c.a).withConfig({displayName:"CourseOptionsEditor__WarningBox",componentId:"sc-15i8a3h-5"})(["margin:2rem 0;background:#f1a9a0;padding:1rem;font-weight:bold;"])),R=function(e){function t(){for(var t,n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return(t=e.call.apply(e,[this].concat(a))||this).onClick=function(){var e=Object(i.a)(r.a.mark((function e(n){var a,i;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),t.setState({submitting:!0}),a={digital_education_for_all:t.state.digital_education_for_all,marketing:t.state.marketing,research:t.state.research},i={first_name:t.state.first_name,last_name:t.state.last_name,organizational_id:t.state.student_number},e.prev=4,e.next=7,Object(E.l)({extraFields:a,userField:i});case 7:t.setState({submitting:!1}),t.props.onComplete(),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(4),t.setState({errorObj:e.t0,submitting:!1});case 14:case"end":return e.stop()}}),e,null,[[4,11]])})));return function(t){return e.apply(this,arguments)}}(),t.state={submitting:!1,error:!0,errorObj:void 0,digital_education_for_all:!1,marketing:!1,research:void 0,first_name:void 0,last_name:void 0,email:void 0,student_number:void 0,loading:!0,focused:null},t.handleInput=function(e){var n,a=e.target.name,r=e.target.value;t.setState(((n={})[a]=r,n),(function(){t.validate()}))},t.handleCheckboxInput=function(e){var n,a=e.target.name,r=e.target.checked;t.setState(((n={})[a]=r,n),(function(){t.validate()}))},t.handleFocus=function(e){var n=e.target.name;t.setState({focused:n})},t.handleUnFocus=function(){t.setState({focused:null})},t.validate=function(){t.setState((function(e){return{error:void 0===e.research}}))},t}Object(o.a)(t,e);var n=t.prototype;return n.componentDidMount=function(){var e=Object(i.a)(r.a.mark((function e(){var t,n,a,i,o,l,s,c=this;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(E.m)();case 2:s=e.sent,this.setState({first_name:null===(t=s.user_field)||void 0===t?void 0:t.first_name,last_name:null===(n=s.user_field)||void 0===n?void 0:n.last_name,email:s.email,student_number:null===(a=s.user_field)||void 0===a?void 0:a.organizational_id,digital_education_for_all:"t"===(null===(i=s.extra_fields)||void 0===i?void 0:i.digital_education_for_all),marketing:"t"===(null===(o=s.extra_fields)||void 0===o?void 0:o.marketing),research:null===(l=s.extra_fields)||void 0===l?void 0:l.research,loading:!1},(function(){c.validate()}));case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}(),n.render=function(){return s.a.createElement(F,null,s.a.createElement(v.a,{loading:this.state.loading,heightHint:"490px"},s.a.createElement(D,null,s.a.createElement(c.a,null,s.a.createElement(u.a,null,this.props.t("loggedInWith"),this.state.email)))),s.a.createElement("h1",null,this.props.t("studentInfo")),s.a.createElement(N,null,s.a.createElement(D,null,this.props.t("aboutYourself")),s.a.createElement(v.a,{loading:this.state.loading,heightHint:"490px"},s.a.createElement("div",null,s.a.createElement(T,null,s.a.createElement(m.a,{variant:"outlined",type:"text",label:this.props.t("firstName"),autoComplete:"given-name",name:"first_name",InputLabelProps:{shrink:this.state.first_name||"first_name"===this.state.focused},fullWidth:!0,value:this.state.first_name,onChange:this.handleInput,onFocus:this.handleFocus,onBlur:this.handleUnFocus})),s.a.createElement(T,null,s.a.createElement(m.a,{variant:"outlined",type:"text",label:this.props.t("lastName"),autoComplete:"family-name",name:"last_name",InputLabelProps:{shrink:this.state.last_name||"last_name"===this.state.focused},fullWidth:!0,value:this.state.last_name,onChange:this.handleInput,onFocus:this.handleFocus,onBlur:this.handleUnFocus})),s.a.createElement(T,null,s.a.createElement(m.a,{variant:"outlined",type:"text",label:this.props.t("sid"),name:"student_number",InputLabelProps:{shrink:this.state.student_number||"student_number"===this.state.focused},fullWidth:!0,value:this.state.student_number,onChange:this.handleInput,helperText:this.props.t("nosid"),onFocus:this.handleFocus,onBlur:this.handleUnFocus})),s.a.createElement(T,null,s.a.createElement(d.a,{control:s.a.createElement(h.a,{checked:this.state.digital_education_for_all,onChange:this.handleCheckboxInput,name:"digital_education_for_all",value:"1"}),label:"Olen tällä hetkellä opiskelijana Digital Education for All -hankkeessa. Jätä tämä valitsematta mikäli et tiedä kyseisestä hankkeesta."})),s.a.createElement(T,null,s.a.createElement(d.a,{control:s.a.createElement(h.a,{checked:this.state.marketing,onChange:this.handleCheckboxInput,name:"marketing",value:"1"}),label:this.props.t("marketing")})))),s.a.createElement("h2",null,this.props.t("researchTitle")),s.a.createElement("p",null,this.props.t("research1")),s.a.createElement("ol",null,s.a.createElement("li",null,this.props.t("research2")),s.a.createElement("li",null,this.props.t("research3")),s.a.createElement("li",null,this.props.t("research4"))),s.a.createElement("p",null,this.props.t("research5"),s.a.createElement(g.OutboundLink,{href:"https://dl.acm.org/citation.cfm?id=2858798",target:"_blank",rel:"noopener noreferrer"},"Educational Data Mining and Learning Analytics in Programming: Literature Review and Case Studies"),"."),s.a.createElement("p",null,this.props.t("research6")),s.a.createElement("p",null,this.props.t("research7")),s.a.createElement(T,null,s.a.createElement(v.a,{loading:this.state.loading,heightHint:"115px"},s.a.createElement(p.a,{"aria-label":this.props.t("researchAgree"),name:"research",value:this.state.research,onChange:this.handleInput},s.a.createElement(d.a,{value:"1",control:s.a.createElement(f.a,{color:"primary"}),label:this.props.t("researchYes")}),s.a.createElement(d.a,{value:"0",control:s.a.createElement(f.a,null),label:this.props.t("researchNo")})))),s.a.createElement(T,null,s.a.createElement(b.a,{onClick:this.onClick,disabled:this.state.submitting||this.state.error,loading:this.state.submitting,variant:"contained",color:"primary",fullWidth:!0},this.props.t("save")))),this.state.error&&s.a.createElement(D,null,s.a.createElement("b",null,this.props.t("fillRequired"))),this.state.errorObj&&s.a.createElement(A,null,this.state.errorObj.toString()))},t}(s.a.Component);t.a=Object(S.a)("common")(Object(j.a)(R))},"668i":function(e,t,n){"use strict";var a=n("q1tI"),r=n("i8i4"),i=n("gk1O"),o=n("bfFb"),l=n("Ovef");function s(e){return e.substring(2).toLowerCase()}t.a=function(e){var t=e.children,n=e.disableReactTree,c=void 0!==n&&n,u=e.mouseEvent,m=void 0===u?"onClick":u,d=e.onClickAway,h=e.touchEvent,p=void 0===h?"onTouchEnd":h,f=a.useRef(!1),b=a.useRef(null),g=a.useRef(!1),v=a.useRef(!1);a.useEffect((function(){return setTimeout((function(){g.current=!0}),0),function(){g.current=!1}}),[]);var E=a.useCallback((function(e){b.current=r.findDOMNode(e)}),[]),O=Object(o.a)(t.ref,E),j=Object(l.a)((function(e){var t=v.current;if(v.current=!1,g.current&&b.current&&!function(e){return document.documentElement.clientWidth<e.clientX||document.documentElement.clientHeight<e.clientY}(e))if(f.current)f.current=!1;else{var n;if(e.composedPath)n=e.composedPath().indexOf(b.current)>-1;else n=!Object(i.a)(b.current).documentElement.contains(e.target)||b.current.contains(e.target);n||!c&&t||d(e)}})),k=function(e){return function(n){v.current=!0;var a=t.props[e];a&&a(n)}},_={ref:O};return!1!==p&&(_[p]=k(p)),a.useEffect((function(){if(!1!==p){var e=s(p),t=Object(i.a)(b.current),n=function(){f.current=!0};return t.addEventListener(e,j),t.addEventListener("touchmove",n),function(){t.removeEventListener(e,j),t.removeEventListener("touchmove",n)}}}),[j,p]),!1!==m&&(_[m]=k(m)),a.useEffect((function(){if(!1!==m){var e=s(m),t=Object(i.a)(b.current);return t.addEventListener(e,j),function(){t.removeEventListener(e,j)}}}),[j,m]),a.createElement(a.Fragment,null,a.cloneElement(t,_))}},"79Xs":function(e,t,n){"use strict";var a=n("aXB2"),r=n("FqMR"),i=n("k1TG"),o=n("q1tI"),l=n("iuhU"),s=n("H2TA"),c=n("wpWl"),u=n("668i"),m=n("Ovef"),d=n("NqtD"),h=n("x6Ns"),p=n("bqsI"),f=n("t2Oo"),b=o.forwardRef((function(e,t){var n=e.action,r=e.anchorOrigin,s=(r=void 0===r?{vertical:"bottom",horizontal:"center"}:r).vertical,b=r.horizontal,g=e.autoHideDuration,v=void 0===g?null:g,E=e.children,O=e.classes,j=e.className,k=e.ClickAwayListenerProps,_=e.ContentProps,C=e.disableWindowBlurListener,x=void 0!==C&&C,w=e.message,y=e.onClose,I=e.onEnter,L=e.onEntered,S=e.onEntering,M=e.onExit,T=e.onExited,N=e.onExiting,D=e.onMouseEnter,F=e.onMouseLeave,A=e.open,R=e.resumeHideDuration,P=e.TransitionComponent,W=void 0===P?p.a:P,H=e.transitionDuration,z=void 0===H?{enter:c.b.enteringScreen,exit:c.b.leavingScreen}:H,B=e.TransitionProps,q=Object(a.a)(e,["action","anchorOrigin","autoHideDuration","children","classes","className","ClickAwayListenerProps","ContentProps","disableWindowBlurListener","message","onClose","onEnter","onEntered","onEntering","onExit","onExited","onExiting","onMouseEnter","onMouseLeave","open","resumeHideDuration","TransitionComponent","transitionDuration","TransitionProps"]),K=o.useRef(),G=o.useState(!0),U=G[0],V=G[1],X=Object(m.a)((function(){y&&y.apply(void 0,arguments)})),J=Object(m.a)((function(e){y&&null!=e&&(clearTimeout(K.current),K.current=setTimeout((function(){X(null,"timeout")}),e))}));o.useEffect((function(){return A&&J(v),function(){clearTimeout(K.current)}}),[A,v,J]);var Y=function(){clearTimeout(K.current)},Z=o.useCallback((function(){null!=v&&J(null!=R?R:.5*v)}),[v,R,J]);return o.useEffect((function(){if(!x&&A)return window.addEventListener("focus",Z),window.addEventListener("blur",Y),function(){window.removeEventListener("focus",Z),window.removeEventListener("blur",Y)}}),[x,Z,A]),!A&&U?null:o.createElement(u.a,Object(i.a)({onClickAway:function(e){y&&y(e,"clickaway")}},k),o.createElement("div",Object(i.a)({className:Object(l.a)(O.root,O["anchorOrigin".concat(Object(d.a)(s)).concat(Object(d.a)(b))],j),onMouseEnter:function(e){D&&D(e),Y()},onMouseLeave:function(e){F&&F(e),Z()},ref:t},q),o.createElement(W,Object(i.a)({appear:!0,in:A,onEnter:Object(h.a)((function(){V(!1)}),I),onEntered:L,onEntering:S,onExit:M,onExited:Object(h.a)((function(){V(!0)}),T),onExiting:N,timeout:z,direction:"top"===s?"down":"up"},B),E||o.createElement(f.a,Object(i.a)({message:w,action:n},_)))))}));t.a=Object(s.a)((function(e){var t={top:8},n={bottom:8},a={justifyContent:"flex-end"},o={justifyContent:"flex-start"},l={top:24},s={bottom:24},c={right:24},u={left:24},m={left:"50%",right:"auto",transform:"translateX(-50%)"};return{root:{zIndex:e.zIndex.snackbar,position:"fixed",display:"flex",left:8,right:8,justifyContent:"center",alignItems:"center"},anchorOriginTopCenter:Object(i.a)({},t,Object(r.a)({},e.breakpoints.up("sm"),Object(i.a)({},l,m))),anchorOriginBottomCenter:Object(i.a)({},n,Object(r.a)({},e.breakpoints.up("sm"),Object(i.a)({},s,m))),anchorOriginTopRight:Object(i.a)({},t,a,Object(r.a)({},e.breakpoints.up("sm"),Object(i.a)({left:"auto"},l,c))),anchorOriginBottomRight:Object(i.a)({},n,a,Object(r.a)({},e.breakpoints.up("sm"),Object(i.a)({left:"auto"},s,c))),anchorOriginTopLeft:Object(i.a)({},t,o,Object(r.a)({},e.breakpoints.up("sm"),Object(i.a)({right:"auto"},l,u))),anchorOriginBottomLeft:Object(i.a)({},n,o,Object(r.a)({},e.breakpoints.up("sm"),Object(i.a)({right:"auto"},s,u)))}}),{flip:!1,name:"MuiSnackbar"})(b)},"9Emu":function(e,t,n){"use strict";n.r(t);var a=n("kD0k"),r=n.n(a),i=(n("ls82"),n("/S4K")),o=n("9Hrx"),l=n("q1tI"),s=n.n(l),c=n("qhky"),u=n("vOnD"),m=n("RJaA"),d=n("4KiG"),h=n("Wbzz"),p=n("eczs"),f=n("VUD3"),b=n("Kfvu"),g=n("uVck"),v=n("IP2g"),E=n("wHSu"),O=n("79Xs"),j=n("t2Oo"),k=Object(u.b)(j.a).withConfig({displayName:"profile__StyledSnackbarContent",componentId:"sc-3be922-0"})(["background-color:#43a047 !important;"]),_=Object(u.b)(v.a).withConfig({displayName:"profile__StyledIcon",componentId:"sc-3be922-1"})(["margin-right:0.5rem;"]),C=function(e){function t(){for(var t,n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))||this).state={successMessage:null},t.onStepComplete=function(){t.setState({successMessage:"Tiedot tallennettu!"})},t.handleClose=function(){t.setState({successMessage:null})},t}Object(o.a)(t,e);var n=t.prototype;return n.componentDidMount=function(){var e=Object(i.a)(r.a.mark((function e(){var t,n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this.context.loggedIn){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,Object(g.g)();case 4:n=e.sent,void 0===(null==n||null===(t=n.extra_fields)||void 0===t?void 0:t.research)&&Object(h.navigate)("/missing-info");case 7:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}(),n.render=function(){return this.context.loggedIn?s.a.createElement(m.a,null,s.a.createElement(f.a,null,s.a.createElement(c.b,{title:"Profiili"}),s.a.createElement("h1",null,"Profiili"),s.a.createElement("p",null,"Täällä voit muokata mooc.fi -tilisi asetuksia tämän kurssin osalta. Katso myös profiilisi mooc.fi:n Test My Code -palvelussa:"," ",s.a.createElement(b.OutboundLink,{href:"https://tmc.mooc.fi",rel:"noopener noreferrer"},"https://tmc.mooc.fi"),"."),s.a.createElement(d.a,{onComplete:this.onStepComplete})),s.a.createElement(O.a,{anchorOrigin:{vertical:"bottom",horizontal:"center"},open:this.state.successMessage,autoHideDuration:6e3,onClose:this.handleClose},s.a.createElement(k,{variant:"success",message:s.a.createElement(l.Fragment,null,s.a.createElement(_,{icon:E.h})," ",s.a.createElement("span",null,this.state.successMessage))}))):("undefined"!=typeof window&&Object(h.navigate)("/sign-in"),s.a.createElement("div",null,"Redirecting..."))},t}(s.a.Component);C.contextType=p.b,t.default=Object(p.c)(C)},t2Oo:function(e,t,n){"use strict";var a=n("aXB2"),r=n("FqMR"),i=n("k1TG"),o=n("q1tI"),l=n("iuhU"),s=n("H2TA"),c=n("kKAo"),u=n("ye/S"),m=o.forwardRef((function(e,t){var n=e.action,r=e.classes,s=e.className,u=e.message,m=e.role,d=void 0===m?"alert":m,h=Object(a.a)(e,["action","classes","className","message","role"]);return o.createElement(c.a,Object(i.a)({role:d,square:!0,elevation:6,className:Object(l.a)(r.root,s),ref:t},h),o.createElement("div",{className:r.message},u),n?o.createElement("div",{className:r.action},n):null)}));t.a=Object(s.a)((function(e){var t="light"===e.palette.type?.8:.98,n=Object(u.b)(e.palette.background.default,t);return{root:Object(i.a)({},e.typography.body2,Object(r.a)({color:e.palette.getContrastText(n),backgroundColor:n,display:"flex",alignItems:"center",flexWrap:"wrap",padding:"6px 16px",borderRadius:e.shape.borderRadius,flexGrow:1},e.breakpoints.up("sm"),{flexGrow:"initial",minWidth:288})),message:{padding:"8px 0"},action:{display:"flex",alignItems:"center",marginLeft:"auto",paddingLeft:16,marginRight:-8}}}),{name:"MuiSnackbarContent"})(m)}}]);
//# sourceMappingURL=component---src-pages-profile-js-161c319577accc72a6da.js.map