(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{17:function(e,n,t){e.exports=t(29)},22:function(e,n,t){},27:function(e,n,t){},29:function(e,n,t){"use strict";t.r(n);var a=t(0),o=t.n(a),r=t(13),c=t.n(r),i=(t(22),t(6)),d=t(2),l="display_key";var s="switch_power",p={activeButton:"",btnColor:"#439863",powerState:"on"};var u=Object(d.c)({keyboard:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",n=arguments.length>1?arguments[1]:void 0;switch(n.type){case l:return{displayMsg:n.payload};default:return e}},panel:function(){arguments.length>0&&void 0!==arguments[0]&&arguments[0];var e=arguments.length>1?arguments[1]:void 0;switch(e.type){case s:return"on"===e.payload?{powerState:e.payload,btnColor:"#439863"}:{powerState:e.payload,btnColor:"#986143"};default:return p}}}),m=Object(d.a)()(d.d)(u),h=t(3),y=t(4),w=t(7),f=t(5),v=t(8),b=[{id:"Q",sound:"https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",name:"Heater 1"},{id:"W",sound:"https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",name:"Heater 2"},{id:"E",sound:"https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",name:"Heater 3"},{id:"A",sound:"https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",name:"Heater 4"},{id:"S",sound:"https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",name:"Clap"},{id:"D",sound:"https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",name:"Open HH"},{id:"Z",sound:"https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",name:"Kick n' Hat"},{id:"X",sound:"https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",name:"Kick"},{id:"C",sound:"https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",name:"Closed HH"}],k=function(e){function n(){var e,t;Object(h.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(t=Object(w.a)(this,(e=Object(f.a)(n)).call.apply(e,[this].concat(r)))).component=o.a.createRef(),t.button=o.a.createRef(),t.handleKeyDown=function(e){var n=e.key.toUpperCase();"on"===t.props.power&&t.props.id===n&&(t.shouldPlay(),t.props.onClick(t.props.name),t.button.current&&(t.button.current.style.backgroundColor="#d9d9d9"))},t.handleKeyUp=function(e){t.button.current&&(t.button.current.style.backgroundColor="#eac67a")},t.handleOnClick=function(e){"on"===t.props.power&&(t.shouldPlay(),t.props.onClick(e.target.name))},t.shouldPlay=function(){t.component.current&&(t.component.current.paused?t.component.current.play():t.component.current.currentTime=0)},t}return Object(v.a)(n,e),Object(y.a)(n,[{key:"componentDidMount",value:function(){document.addEventListener("keydown",this.handleKeyDown),document.addEventListener("keyup",this.handleKeyUp)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keydown",this.handleKeyDown),document.removeEventListener("keyup",this.handleKeyUp)}},{key:"render",value:function(){var e=this.props,n=e.id,t=e.name,a=e.sound;return o.a.createElement("button",{name:t,id:n,type:"button",className:"drum-pad",onClick:this.handleOnClick,ref:this.button},n,o.a.createElement("audio",{className:"clip",id:n,src:a,ref:this.component}))}}]),n}(a.Component),C=function(e){var n=e.btnColor,t=e.onClick,a=e.powerState;return o.a.createElement("button",{id:"powerButton",type:"button",className:"power",onClick:t,style:{backgroundColor:n}},a)},E=function(e){function n(){var e,t;Object(h.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(t=Object(w.a)(this,(e=Object(f.a)(n)).call.apply(e,[this].concat(o)))).handleClick=function(){var e=t.props,n=e.displayKey,a=e.switchPower;n(""),a(t.props.power)},t.handleDrumClick=function(e){t.props.displayKey(e)},t}return Object(v.a)(n,e),Object(y.a)(n,[{key:"render",value:function(){var e=this,n=this.props,t=n.btnColor,a=n.id,r=n.power;return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"keyboard"},b.map(function(n){return o.a.createElement(k,{key:n.id,id:n.id,sound:n.sound,name:n.name,onClick:e.handleDrumClick,power:r})})),o.a.createElement("div",{id:"panel"},o.a.createElement("div",{id:"topPanel"},o.a.createElement(C,{btnColor:t,onClick:this.handleClick,powerState:r})),o.a.createElement("div",{id:"bottomPanel"},o.a.createElement("div",{id:"display"},o.a.createElement("div",null,a)))))}}]),n}(a.Component);var g=Object(i.b)(function(e){return{btnColor:e.panel.btnColor,id:e.keyboard.displayMsg,power:e.panel.powerState}},{displayKey:function(e){return{type:l,payload:e}},switchPower:function(e){return{type:s,payload:"on"===e?"off":"on"}}})(E),O=function(){return o.a.createElement("div",{id:"page"},o.a.createElement("h3",{id:"title"},"Drum Machine"),o.a.createElement("div",{id:"drum-machine"},o.a.createElement(g,null)))};t(27),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(function(){return o.a.createElement(i.a,{store:m},o.a.createElement(O,null))},null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[17,2,1]]]);
//# sourceMappingURL=main.82f8b925.chunk.js.map