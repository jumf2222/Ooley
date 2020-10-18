(()=>{"use strict";var n={118:(n,e,t)=>{t.d(e,{Z:()=>a});var r=t(15),o=t.n(r),i=t(645),s=t.n(i)()(o());s.push([n.id,'* {\r\n    margin: 0;\r\n    padding: 0;\r\n    -webkit-tap-highlight-color: transparent;\r\n}\r\n\r\nbutton:focus,\r\ninput:focus,\r\ntextarea:focus,\r\nselect:focus,\r\n#controls input:focus {\r\n    outline: none;\r\n    border: 1px solid #1a73e8;\r\n    border-radius: 5px;\r\n}\r\n\r\nhtml,\r\nbody {\r\n    height: 100%;\r\n    position: relative;\r\n}\r\n\r\nbody {\r\n    background: #ffffff;\r\n    cursor: crosshair;\r\n}\r\n\r\n#preloader {\r\n    display: flex;\r\n    font-family: "Krona One", sans-serif;\r\n    font-size: 8rem;\r\n    position: absolute;\r\n    z-index: 2;\r\n    top: 50%;\r\n    left: 50%;\r\n    transform: translate3d(-50%, -50%, 0);\r\n    transition: opacity 1s, visibility 1s step-end;\r\n    user-select: none;\r\n    -moz-user-select: none;\r\n    -khtml-user-select: none;\r\n    -webkit-user-select: none;\r\n    -o-user-select: none;\r\n    cursor: crosshair;\r\n}\r\n\r\n#chatbox {\r\n    height: 300px;\r\n    width: 250px;\r\n    border: 1px solid black;\r\n    overflow-y: auto;\r\n    margin: 10px;\r\n    margin-left: 0;\r\n}\r\n\r\n@keyframes bounce {\r\n    0% {\r\n        transform: translateY(-120px);\r\n    }\r\n\r\n    75% {\r\n        transform: scaleY(0.9);\r\n    }\r\n\r\n    100% {\r\n        transform: translateY(0);\r\n    }\r\n}\r\n\r\n.first-o {\r\n    color: #111111;\r\n    transform: translateY(-120px);\r\n    animation: bounce 0.5s 0.15s cubic-bezier(0.5, 0.05, 1, 0.5) infinite\r\n        alternate;\r\n}\r\n\r\n.second-o {\r\n    color: #111111;\r\n    animation: bounce 0.5s cubic-bezier(0.5, 0.05, 1, 0.5) infinite alternate;\r\n}\r\n\r\n#preloader.hidden,\r\n.hidden {\r\n    opacity: 0;\r\n    visibility: hidden;\r\n}\r\n\r\n#controls.visible,\r\n.visible {\r\n    opacity: 1;\r\n    visibility: visible;\r\n}\r\n\r\ncanvas {\r\n    opacity: 0;\r\n    visibility: hidden;\r\n    width: 100vw;\r\n    height: 100vh;\r\n    cursor: crosshair;\r\n    transition: border-color 0.2s;\r\n    touch-action: none;\r\n    opacity: 1;\r\n    visibility: visible;\r\n    transition: opacity 1s, visibility 1s step-start;\r\n}\r\n\r\n#rainbow {\r\n    color: #de3618;\r\n}\r\n\r\n#rainbow.rainbowOn {\r\n    color: #50b83c;\r\n}\r\n\r\n#controls {\r\n    opacity: 0;\r\n    visibility: hidden;\r\n    transition: opacity 1s, visibility 1s step-start;\r\n}\r\n\r\n#controls input {\r\n    border: 1px solid transparent;\r\n    padding: 0;\r\n    width: 100%;\r\n}\r\n\r\n.controls-container {\r\n    font-family: Helvetica, Arial, sans-serif;\r\n    position: absolute;\r\n    z-index: 2;\r\n    width: 130px;\r\n    top: 20px;\r\n    left: 20px;\r\n}\r\n\r\ncanvas:active {\r\n    border-color: royalblue;\r\n}\r\n\r\nbutton {\r\n    font-family: Helvetica, sans-serif;\r\n    font-size: 14px;\r\n\r\n    width: 100%;\r\n    margin: 10px 0 0 0;\r\n    padding: 7px;\r\n\r\n    background-color: #ffffff;\r\n    color: #1a73e8;\r\n    border: 1px solid #dadce0;\r\n    border-radius: 5px;\r\n    transition: background-color 0.1s;\r\n    transition: border-color 0.1s;\r\n}\r\n\r\nbutton:hover {\r\n    background-color: #f4f8fe;\r\n    color: #1a73e8;\r\n    border-color: #1a73e8;\r\n    cursor: pointer;\r\n}\r\n\r\n#widthSlider {\r\n    width: 100%;\r\n}\r\n',"",{version:3,sources:["webpack://src/roomStyle.css"],names:[],mappings:"AAAA;IACI,SAAS;IACT,UAAU;IACV,wCAAwC;AAC5C;;AAEA;;;;;IAKI,aAAa;IACb,yBAAyB;IACzB,kBAAkB;AACtB;;AAEA;;IAEI,YAAY;IACZ,kBAAkB;AACtB;;AAEA;IACI,mBAAmB;IACnB,iBAAiB;AACrB;;AAEA;IACI,aAAa;IACb,oCAAoC;IACpC,eAAe;IACf,kBAAkB;IAClB,UAAU;IACV,QAAQ;IACR,SAAS;IACT,qCAAqC;IACrC,8CAA8C;IAC9C,iBAAiB;IACjB,sBAAsB;IACtB,wBAAwB;IACxB,yBAAyB;IACzB,oBAAoB;IACpB,iBAAiB;AACrB;;AAEA;IACI,aAAa;IACb,YAAY;IACZ,uBAAuB;IACvB,gBAAgB;IAChB,YAAY;IACZ,cAAc;AAClB;;AAEA;IACI;QACI,6BAA6B;IACjC;;IAEA;QACI,sBAAsB;IAC1B;;IAEA;QACI,wBAAwB;IAC5B;AACJ;;AAEA;IACI,cAAc;IACd,6BAA6B;IAC7B;iBACa;AACjB;;AAEA;IACI,cAAc;IACd,yEAAyE;AAC7E;;AAEA;;IAEI,UAAU;IACV,kBAAkB;AACtB;;AAEA;;IAEI,UAAU;IACV,mBAAmB;AACvB;;AAEA;IACI,UAAU;IACV,kBAAkB;IAClB,YAAY;IACZ,aAAa;IACb,iBAAiB;IACjB,6BAA6B;IAC7B,kBAAkB;IAClB,UAAU;IACV,mBAAmB;IACnB,gDAAgD;AACpD;;AAEA;IACI,cAAc;AAClB;;AAEA;IACI,cAAc;AAClB;;AAEA;IACI,UAAU;IACV,kBAAkB;IAClB,gDAAgD;AACpD;;AAEA;IACI,6BAA6B;IAC7B,UAAU;IACV,WAAW;AACf;;AAEA;IACI,yCAAyC;IACzC,kBAAkB;IAClB,UAAU;IACV,YAAY;IACZ,SAAS;IACT,UAAU;AACd;;AAEA;IACI,uBAAuB;AAC3B;;AAEA;IACI,kCAAkC;IAClC,eAAe;;IAEf,WAAW;IACX,kBAAkB;IAClB,YAAY;;IAEZ,yBAAyB;IACzB,cAAc;IACd,yBAAyB;IACzB,kBAAkB;IAClB,iCAAiC;IACjC,6BAA6B;AACjC;;AAEA;IACI,yBAAyB;IACzB,cAAc;IACd,qBAAqB;IACrB,eAAe;AACnB;;AAEA;IACI,WAAW;AACf",sourcesContent:['* {\r\n    margin: 0;\r\n    padding: 0;\r\n    -webkit-tap-highlight-color: transparent;\r\n}\r\n\r\nbutton:focus,\r\ninput:focus,\r\ntextarea:focus,\r\nselect:focus,\r\n#controls input:focus {\r\n    outline: none;\r\n    border: 1px solid #1a73e8;\r\n    border-radius: 5px;\r\n}\r\n\r\nhtml,\r\nbody {\r\n    height: 100%;\r\n    position: relative;\r\n}\r\n\r\nbody {\r\n    background: #ffffff;\r\n    cursor: crosshair;\r\n}\r\n\r\n#preloader {\r\n    display: flex;\r\n    font-family: "Krona One", sans-serif;\r\n    font-size: 8rem;\r\n    position: absolute;\r\n    z-index: 2;\r\n    top: 50%;\r\n    left: 50%;\r\n    transform: translate3d(-50%, -50%, 0);\r\n    transition: opacity 1s, visibility 1s step-end;\r\n    user-select: none;\r\n    -moz-user-select: none;\r\n    -khtml-user-select: none;\r\n    -webkit-user-select: none;\r\n    -o-user-select: none;\r\n    cursor: crosshair;\r\n}\r\n\r\n#chatbox {\r\n    height: 300px;\r\n    width: 250px;\r\n    border: 1px solid black;\r\n    overflow-y: auto;\r\n    margin: 10px;\r\n    margin-left: 0;\r\n}\r\n\r\n@keyframes bounce {\r\n    0% {\r\n        transform: translateY(-120px);\r\n    }\r\n\r\n    75% {\r\n        transform: scaleY(0.9);\r\n    }\r\n\r\n    100% {\r\n        transform: translateY(0);\r\n    }\r\n}\r\n\r\n.first-o {\r\n    color: #111111;\r\n    transform: translateY(-120px);\r\n    animation: bounce 0.5s 0.15s cubic-bezier(0.5, 0.05, 1, 0.5) infinite\r\n        alternate;\r\n}\r\n\r\n.second-o {\r\n    color: #111111;\r\n    animation: bounce 0.5s cubic-bezier(0.5, 0.05, 1, 0.5) infinite alternate;\r\n}\r\n\r\n#preloader.hidden,\r\n.hidden {\r\n    opacity: 0;\r\n    visibility: hidden;\r\n}\r\n\r\n#controls.visible,\r\n.visible {\r\n    opacity: 1;\r\n    visibility: visible;\r\n}\r\n\r\ncanvas {\r\n    opacity: 0;\r\n    visibility: hidden;\r\n    width: 100vw;\r\n    height: 100vh;\r\n    cursor: crosshair;\r\n    transition: border-color 0.2s;\r\n    touch-action: none;\r\n    opacity: 1;\r\n    visibility: visible;\r\n    transition: opacity 1s, visibility 1s step-start;\r\n}\r\n\r\n#rainbow {\r\n    color: #de3618;\r\n}\r\n\r\n#rainbow.rainbowOn {\r\n    color: #50b83c;\r\n}\r\n\r\n#controls {\r\n    opacity: 0;\r\n    visibility: hidden;\r\n    transition: opacity 1s, visibility 1s step-start;\r\n}\r\n\r\n#controls input {\r\n    border: 1px solid transparent;\r\n    padding: 0;\r\n    width: 100%;\r\n}\r\n\r\n.controls-container {\r\n    font-family: Helvetica, Arial, sans-serif;\r\n    position: absolute;\r\n    z-index: 2;\r\n    width: 130px;\r\n    top: 20px;\r\n    left: 20px;\r\n}\r\n\r\ncanvas:active {\r\n    border-color: royalblue;\r\n}\r\n\r\nbutton {\r\n    font-family: Helvetica, sans-serif;\r\n    font-size: 14px;\r\n\r\n    width: 100%;\r\n    margin: 10px 0 0 0;\r\n    padding: 7px;\r\n\r\n    background-color: #ffffff;\r\n    color: #1a73e8;\r\n    border: 1px solid #dadce0;\r\n    border-radius: 5px;\r\n    transition: background-color 0.1s;\r\n    transition: border-color 0.1s;\r\n}\r\n\r\nbutton:hover {\r\n    background-color: #f4f8fe;\r\n    color: #1a73e8;\r\n    border-color: #1a73e8;\r\n    cursor: pointer;\r\n}\r\n\r\n#widthSlider {\r\n    width: 100%;\r\n}\r\n'],sourceRoot:""}]);const a=s},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t=n(e);return e[2]?"@media ".concat(e[2]," {").concat(t,"}"):t})).join("")},e.i=function(n,t,r){"string"==typeof n&&(n=[[null,n,""]]);var o={};if(r)for(var i=0;i<this.length;i++){var s=this[i][0];null!=s&&(o[s]=!0)}for(var a=0;a<n.length;a++){var c=[].concat(n[a]);r&&o[c[0]]||(t&&(c[2]?c[2]="".concat(t," and ").concat(c[2]):c[2]=t),e.push(c))}},e}},15:n=>{function e(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=n[t];return r}n.exports=function(n){var t,r,o=(r=4,function(n){if(Array.isArray(n))return n}(t=n)||function(n,e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(n)){var t=[],r=!0,o=!1,i=void 0;try{for(var s,a=n[Symbol.iterator]();!(r=(s=a.next()).done)&&(t.push(s.value),!e||t.length!==e);r=!0);}catch(n){o=!0,i=n}finally{try{r||null==a.return||a.return()}finally{if(o)throw i}}return t}}(t,r)||function(n,t){if(n){if("string"==typeof n)return e(n,t);var r=Object.prototype.toString.call(n).slice(8,-1);return"Object"===r&&n.constructor&&(r=n.constructor.name),"Map"===r||"Set"===r?Array.from(n):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?e(n,t):void 0}}(t,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),i=o[1],s=o[3];if("function"==typeof btoa){var a=btoa(unescape(encodeURIComponent(JSON.stringify(s)))),c="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(a),l="/*# ".concat(c," */"),d=s.sources.map((function(n){return"/*# sourceURL=".concat(s.sourceRoot||"").concat(n," */")}));return[i].concat(d).concat([l]).join("\n")}return[i].join("\n")}},379:(n,e,t)=>{var r,o=function(){var n={};return function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}n[e]=t}return n[e]}}(),i=[];function s(n){for(var e=-1,t=0;t<i.length;t++)if(i[t].identifier===n){e=t;break}return e}function a(n,e){for(var t={},r=[],o=0;o<n.length;o++){var a=n[o],c=e.base?a[0]+e.base:a[0],l=t[c]||0,d="".concat(c," ").concat(l);t[c]=l+1;var u=s(d),h={css:a[1],media:a[2],sourceMap:a[3]};-1!==u?(i[u].references++,i[u].updater(h)):i.push({identifier:d,updater:f(h,e),references:1}),r.push(d)}return r}function c(n){var e=document.createElement("style"),r=n.attributes||{};if(void 0===r.nonce){var i=t.nc;i&&(r.nonce=i)}if(Object.keys(r).forEach((function(n){e.setAttribute(n,r[n])})),"function"==typeof n.insert)n.insert(e);else{var s=o(n.insert||"head");if(!s)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");s.appendChild(e)}return e}var l,d=(l=[],function(n,e){return l[n]=e,l.filter(Boolean).join("\n")});function u(n,e,t,r){var o=t?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(n.styleSheet)n.styleSheet.cssText=d(e,o);else{var i=document.createTextNode(o),s=n.childNodes;s[e]&&n.removeChild(s[e]),s.length?n.insertBefore(i,s[e]):n.appendChild(i)}}function h(n,e,t){var r=t.css,o=t.media,i=t.sourceMap;if(o?n.setAttribute("media",o):n.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleSheet)n.styleSheet.cssText=r;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(r))}}var p=null,A=0;function f(n,e){var t,r,o;if(e.singleton){var i=A++;t=p||(p=c(e)),r=u.bind(null,t,i,!1),o=u.bind(null,t,i,!0)}else t=c(e),r=h.bind(null,t,e),o=function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(t)};return r(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap)return;r(n=e)}else o()}}n.exports=function(n,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=(void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r));var t=a(n=n||[],e);return function(n){if(n=n||[],"[object Array]"===Object.prototype.toString.call(n)){for(var r=0;r<t.length;r++){var o=s(t[r]);i[o].references--}for(var c=a(n,e),l=0;l<t.length;l++){var d=s(t[l]);0===i[d].references&&(i[d].updater(),i.splice(d,1))}t=c}}}}},e={};function t(r){if(e[r])return e[r].exports;var o=e[r]={id:r,exports:{}};return n[r](o,o.exports,t),o.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{class n{}const e={iceServers:[{urls:"stun:stun.l.google.com:19302"},{urls:"turn:129.213.138.47",username:"webrtc",credential:"696969"}]};class r{constructor(){this._buffer=new ArrayBuffer(4096),this.buffer=new DataView(this._buffer),this.rpcs=[{signature:[],func:()=>{}},{signature:[],func:()=>{}}],this.objectTypes=[{signature:[],constr:()=>{}}],this.rpcLog=[],this.users=[null],this.userId=0,this.mode=1,this.signalingConnection=null,this.connectingPromise=null,this.sendLoopTimeout=null,this.invalid=!1,this.lastTime=0,this.onUserConnected=n=>{console.log("User Connected with id",n)},this.onUserDisconnected=n=>{console.log("User Disconnected with id",n)},this.onSyncCompleted=()=>{console.log("Completed sync")}}static get instance(){return null==r._instance&&(r._instance=new r),this._instance}async startHost(){this.mode=0;try{return setTimeout((()=>{this.sendLoop()}),0),this.setupSignalingServer()}catch(n){throw new Error(n)}}async setupSignalingServer(){return new Promise(((n,t)=>{this.userId=0;let r=new WebSocket("ws://129.213.120.18:80/ws/echo");this.signalingConnection=r,r.onmessage=async t=>{const o=JSON.parse(t.data);try{if(0===this.mode){let t=this.users.findIndex((n=>(null==n?void 0:n._uuid)===o.uuid));if(o.roomCreated)return n(o.roomId);if(o.ice){if(-1===t)return void console.error("Invalid user",o.uuid,this.users);let n=this.users[t];if(!n._peerCon)return void console.error("Signalling error: No peer con");await n._peerCon.addIceCandidate(new RTCIceCandidate(o.ice))}else if(0===this.mode&&o.sdpOffer){if(-1!==t)return void console.error("Signalling error: No peer con");let n=new RTCPeerConnection(e),i={syncing:!0,rpcLogInd:0,objects:[],tcpCon:null,udpCon:null,_peerCon:n,_uuid:o.uuid},s=this.users.length;if(this.users.push(i),n.onicecandidate=n=>{var e,t;null!=n.candidate&&1===(null===(e=this.signalingConnection)||void 0===e?void 0:e.readyState)?null===(t=this.signalingConnection)||void 0===t||t.send(JSON.stringify({ice:n.candidate,uuid:i._uuid,roomId:o.roomId})):this.mode},await n.setRemoteDescription(new RTCSessionDescription(o.sdpOffer)),this._setupTracks(i),!i._peerCon)return void console.error("Signalling error: No peer con");if(await i._peerCon.setLocalDescription(await i._peerCon.createAnswer()),r.send(JSON.stringify({sdpAnswer:i._peerCon.localDescription,uuid:o.uuid,roomId:o.roomId,userId:s})),!i.tcpCon)return void console.error("Signalling error: No tcp con");if(!i.udpCon)return void console.error("Signalling error: No udp con");let a=n=>{var e,t;"open"===(null===(e=i.tcpCon)||void 0===e?void 0:e.readyState)&&"open"===(null===(t=i.udpCon)||void 0===t?void 0:t.readyState)&&(this.invalid=!0)};i._peerCon.oniceconnectionstatechange=()=>{var n;"disconnected"==(null===(n=i._peerCon)||void 0===n?void 0:n.iceConnectionState)&&this.disconnectUser(s)},i.tcpCon.onopen=a,i.udpCon.onopen=a}}else{let n=this.users[0];if(!n._peerCon)return void console.error("Signalling error: No peer con");o.ice?n._peerCon.addIceCandidate(new RTCIceCandidate(o.ice)):o.sdpAnswer&&(this.userId=o.userId,this.connectingPromise&&(this.connectingPromise[0](o.roomId),this.connectingPromise=null),await n._peerCon.setRemoteDescription(new RTCSessionDescription(o.sdpAnswer)))}}catch(n){console.error("Signalling error:",n)}},r.onclose=()=>{1===this.mode&&this.connectingPromise&&(this.connectingPromise[1](new Error("Invalid roomId")),this.connectingPromise=null,console.error("Failed to connect"))},r.onerror=n=>{console.error("Websocket error",n),this.connectingPromise&&(this.connectingPromise[1](new Error("Websocket error!")),this.connectingPromise=null),t(new Error("Websocket error!"))},r.onopen=e=>{var t;1===this.mode?n(""):null===(t=this.signalingConnection)||void 0===t||t.send(JSON.stringify({startHost:!0}))}}))}_setupTracks(n){n._peerCon&&(n.tcpCon=n._peerCon.createDataChannel("tcp",{ordered:!0,negotiated:!0,id:0}),n.udpCon=n._peerCon.createDataChannel("udp",{ordered:!1,maxRetransmits:0,negotiated:!0,id:1}),n.tcpCon.binaryType="arraybuffer",n.udpCon.binaryType="arraybuffer",n.udpCon.onmessage=n=>{console.log("UDP DATA",n.data)})}connect(n){return new Promise((async(t,r)=>{var o;if(0===this.mode)return r(new Error("Mode is server!"));if(this.connectingPromise)return r(new Error("Already Connecting!"));this.connectingPromise=[t,r];try{await this.setupSignalingServer()}catch(n){return console.error("Connection error:",n),r(new Error("Failed to create connection!"))}let i=this.createUuid(),s=new RTCPeerConnection(e),a={syncing:!0,rpcLogInd:0,objects:[],tcpCon:null,udpCon:null,_peerCon:s,_uuid:i};if(s.onicecandidate=e=>{var t,r;null!=e.candidate&&1===(null===(t=this.signalingConnection)||void 0===t?void 0:t.readyState)?null===(r=this.signalingConnection)||void 0===r||r.send(JSON.stringify({ice:e.candidate,uuid:a._uuid,roomId:n})):this.mode},this.users[0]=a,this._setupTracks(a),!a._peerCon)return r(new Error("No peer con!"));if(!a.tcpCon)return r(new Error("No peer con!"));if(!a.udpCon)return r(new Error("No peer con!"));let c=e=>{var r,o;"open"===(null===(r=a.tcpCon)||void 0===r?void 0:r.readyState)&&"open"===(null===(o=a.udpCon)||void 0===o?void 0:o.readyState)&&(this.users[this.userId]={syncing:!0,rpcLogInd:0,objects:[],tcpCon:null,udpCon:null,_peerCon:null,_uuid:""},this.connectingPromise=null,t(n))};a.tcpCon.onmessage=n=>{this._decodeRPC(new DataView(n.data),0)},a.tcpCon.onopen=c,a.udpCon.onopen=c,await a._peerCon.setLocalDescription(await a._peerCon.createOffer()),null===(o=this.signalingConnection)||void 0===o||o.send(JSON.stringify({sdpOffer:a._peerCon.localDescription,uuid:i,roomId:n}))}))}createUuid(){function n(){return Math.floor(65536*(1+Math.random())).toString(16).substring(1)}return`${n()}${n()}-${n()}-${n()}-${n()}-${n()}${n()}${n()}`}spawn(n,...e){let t=this._spawn(this.userId,n,e);return this.sendRPC(0,this.encodeRPC(this.userId,n,0,e)),t}_spawn(n,e,t){let r=this.users[n];if(!r)return null;let o=new this.objectTypes[e].constr(...t);return console.log("created",o),r.objects.push(o),o._objId=r.objects.length-1,o._ownerId=n,o.onSpawn&&o.onSpawn(),o}registerRPC(n,e){return this.rpcs.push({func:n,signature:e}),this.rpcs.length-1}registerNetworkedObject(n,e){return this.objectTypes.push({signature:e,constr:n}),n.prototype._classId=this.objectTypes.length-1,this.objectTypes.length-1}sendRPC(n,e){var t;let r=this.users[n];r&&"open"===(null===(t=r.tcpCon)||void 0===t?void 0:t.readyState)&&r.tcpCon.send(e)}sendRPCAll(n){0===this.mode&&(this.rpcLog.push(n.buffer.slice(n.byteOffset,n.byteLength)),this.invalid=!0)}sendLoop(){var n;if(this.invalid){this.invalid=!1;for(let e=0;e<this.users.length;e++){let t=this.users[e];if(!t||"open"!==(null===(n=t.tcpCon)||void 0===n?void 0:n.readyState))continue;let r=0;for(let n=t.rpcLogInd;n<this.rpcLog.length;n++){if(t.tcpCon.bufferedAmount>1e4){this.invalid=!0;break}r+=this.rpcLog[n].byteLength,t.tcpCon.send(this.rpcLog[n]),t.rpcLogInd++}t.syncing&&t.rpcLogInd===this.rpcLog.length&&(t.syncing=!1,console.log("User",e,"Synced"),t.tcpCon.onmessage=n=>{this._decodeRPC(new DataView(n.data),e)},this.onUserConnected(e),this.sendRPCAll(this.encodeRPC(e,0,0,[])))}}setTimeout((()=>{this.sendLoop()}),0)}encodeRPC(n,e,t,r){this.buffer.setUint8(0,n),this.buffer.setUint8(1,t),this.buffer.setUint16(2,e,!0);let o=this._writeToBuf(this.rpcs[t].signature,4,r);return new DataView(this._buffer,0,o)}disconnectUser(n){var e,t;this.sendRPCAll(this.encodeRPC(n,0,1,[])),this.onUserDisconnected(n),null===(t=null===(e=this.users[n])||void 0===e?void 0:e._peerCon)||void 0===t||t.close(),this.users[n]=null}_decodeRPC(n,e){let t=n.getUint8(0),r=n.getUint8(1),o=n.getUint16(2,!0),i=[];if(0===r)if(0===o){if(0===this.mode)return void this.disconnectUser(e);if(t===this.userId)return console.log("Connected"),void this.onSyncCompleted();this.users[t]={syncing:!0,rpcLogInd:0,objects:[],tcpCon:null,udpCon:null,_peerCon:null,_uuid:""},this.onUserConnected(t)}else{if(t===this.userId)return;0===this.mode&&this.sendRPCAll(n),this._readFromBuf(this.objectTypes[o].signature,4,n,i),this._spawn(t,o,i)}else if(1===r)if(0===o){if(0===this.mode)return void this.disconnectUser(e);this.onUserDisconnected(t),this.users[t]=null}else{if(t===this.userId)return;0===this.mode&&this.sendRPCAll(n),this._readFromBuf(this.objectTypes[o].signature,4,n,i),this._spawn(t,o,i)}else{let s=this.users[t];if(!s)return void(0===this.mode&&this.disconnectUser(e));this._readFromBuf(this.rpcs[r].signature,4,n,i),this.rpcs[r].func.call(s.objects[o],...i)}}_readFromBuf(e,t,r,o){for(let i=0;i<e.length;i++)if(e[i]instanceof Array){let n=r.getFloat64(t,!0);t+=8;let s=[];for(let o=0;o<n;o++)t=this._readFromBuf([e[i][0]],t,r,s);o.push(s)}else switch(e[i]){case n:o.push(r.getUint8(t)),t+=1;break;case Number:o.push(r.getFloat64(t,!0)),t+=8;break;case Boolean:o.push(1===r.getUint8(t)),t+=1;break;case String:let e="";for(;r.getUint16(t,!0);)e+=String.fromCharCode(r.getUint16(t,!0)),t+=2;o.push(e),t+=2;break;case Object:t=this._readFromBuf([String],t,r,o),o[o.length-1]=JSON.parse(o[o.length-1]);break;default:console.error("Unsupported Type")}return t}_writeToBuf(e,t,r){for(let o=0;o<e.length;o++)if(e[o]instanceof Array){this.buffer.setFloat64(t,r[o].length,!0),t+=8;for(let n=0;n<r[o].length;n++)t=this._writeToBuf([e[o][0]],t,[r[o][n]])}else switch(e[o]){case n:this.buffer.setUint8(t,r[o]),t+=1;break;case Number:this.buffer.setFloat64(t,r[o],!0),t+=8;break;case Boolean:this.buffer.setUint8(t,r[o]?1:0),t+=1;break;case String:for(let n=0;n<r[o].length;n++)this.buffer.setUint16(t,r[o].charCodeAt(n),!0),t+=2;this.buffer.setUint16(t,0,!0),t+=2;break;case Object:t=this._writeToBuf([String],t,[JSON.stringify(r[o])]);break;default:console.error("Unsupported Type")}return t}}function o(...n){return function(e,t,o){let i=r.instance,s=o.value,a=i.registerRPC((function(...n){this._ownerId!==i.userId&&s.call(this,...n)}),n);o.value=function(...n){0!==i.mode&&(s.call(this,...n),i.sendRPC(0,i.encodeRPC(i.userId,this._objId,c,n)))};let c=i.registerRPC((function(...n){1!==i.mode&&i.sendRPCAll(i.encodeRPC(this._ownerId,this._objId,a,n))}),n)}}class i{constructor(n,e){this.x=n,this.y=e}add(n){return new i(this.x+n.x,this.y+n.y)}i_add(n){this.x+=n.x,this.y+=n.y}div(n){return new i(this.x/n.x,this.y/n.y)}i_div(n){this.x/=n.x,this.y/=n.y}div_s(n){return new i(this.x/n,this.y/n)}i_div_s(n){this.x/=n,this.y/=n}sqr_dist(n){let e=this.x-n.x,t=this.y-n.y;return e*e+t*t}}class s{constructor(n,e,t){this.r=n,this.g=e,this.b=t}lerp(n,e){return new s(a(this.r,n.r,e),a(this.g,n.g,e),a(this.b,n.b,e))}toColorString(){return`rgb(${this.r},${this.g},${this.b})`}}function a(n,e,t){return n+(e-n)*t}function c(n,e,t){let r=0,o=e.sqr_dist(t);return r=0===o?n.sqr_dist(e):((n.x-e.x)*(t.x-e.x)+(n.y-e.y)*(t.y-e.y))/o,r<0?Math.sqrt(n.sqr_dist(e)):r>1?Math.sqrt(n.sqr_dist(t)):Math.sqrt(n.sqr_dist(new i(e.x+r*(t.x-e.x),e.y+r*(t.y-e.y))))}var l=t(379),d=t.n(l),u=t(118);d()(u.Z,{insert:"head",singleton:!1}),u.Z.locals;var h=function(n,e,t,r){var o,i=arguments.length,s=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,t):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(n,e,t,r);else for(var a=n.length-1;a>=0;a--)(o=n[a])&&(s=(i<3?o(s):i>3?o(e,t,s):o(e,t))||s);return i>3&&s&&Object.defineProperty(e,t,s),s};const p=document.getElementById("paint-board"),A=p.getContext("2d"),f=[new s(94,189,62),new s(255,185,0),new s(247,130,0),new s(226,56,56),new s(151,57,153),new s(0,156,223)];let C=null,g=()=>{p.width=window.innerWidth,p.height=window.innerHeight,A.lineJoin="round",A.lineCap="round",A.lineWidth=2};window.addEventListener("resize",g),g();class b{constructor(n,e=1,t=!1){this.color=n,this.width=e,this.rainbow=t,this.points=[],this.isDrawing=!1,this.colorInd=0,this.colorTime=0}draw(n){if(this.rainbow){let e=f[this.colorInd%f.length],t=f[(this.colorInd+1)%f.length],r=this.colorTime/750;for(A.strokeStyle=e.lerp(t,r).toColorString(),this.colorTime+=n;this.colorTime>=750;)this.colorTime-=750,this.colorInd=(this.colorInd+1)%f.length}else A.strokeStyle=this.color.toColorString();if(A.lineWidth=this.width,this.points.length>1){A.beginPath(),A.moveTo(this.points[0].x,this.points[0].y);for(let n=1;n<this.points.length;n++)A.lineTo(this.points[n].x,this.points[n].y);A.stroke()}}mouseDown(n,e){this.isDrawing=!0,this._addPoint(n,e)}mouseUp(n,e){this.isDrawing=!1,this._addPoint(n,e);for(let n=0;n<3;n++)this.smooth(this.points.length-1+(n-3));this.points=function(n,e){let t=function(n,e,t,r){let o=[];o.push([e,t]);let i=e,s=new Array(t-e+1).fill(!0);for(;o.length>0;){let a=o.pop();e=a[0],t=a[1];let l=0,d=e;for(let r=d+1;r<t;++r)if(s[r-i]){let o=c(n[r],n[e],n[t]);o>l&&(d=r,l=o)}if(l>r)o.push([e,d]),o.push([d,t]);else for(let n=e+1;n<t;++n)s[n-i]=!1}return s}(n,0,n.length-1,e),r=[];for(let e=0,o=n.length;e<o;++e)t[e]&&r.push(n[e]);return r}(this.points,.5)}mouseMove(n,e){this.isDrawing&&this._addPoint(n,e)}_addPoint(n,e){this.points.push(new i(n,e)),this.smooth(this.points.length-1-3)}smooth(n){if(n<0||n>=this.points.length)return;let e=this.points[n],t=1;for(let r=Math.max(n-3,0);r<n;r++)e.i_add(this.points[r]),t++;for(let r=n+1;r<=Math.floor(Math.min(n+3,this.points.length-1));r++)e.i_add(this.points[r]),t++;e.i_div_s(t)}}let m=0,y=[],w=n=>{let e=n-m;m=n,A.clearRect(0,0,p.width,p.height);for(let n=0;n<y.length;n++)y[n].renderLoop(e);requestAnimationFrame(w)},v=class{constructor(){this.paths=[],this.activePath=null,this.widthSlider=null,this.colorInput=null,this.rainbowButton=null,this.mousePos=new i(0,0),this.rainbow=!1}onSpawn(){console.log("OBJID",this._ownerId,r.instance.userId,this),this._ownerId===r.instance.userId?(p.addEventListener("pointerdown",(n=>{this.mouseDown(n.offsetX,n.offsetY)})),p.addEventListener("pointerup",(n=>{this.mouseUp(n.offsetX,n.offsetY)})),p.addEventListener("pointerout",(n=>{this.mouseUp(n.offsetX,n.offsetY)})),p.addEventListener("pointermove",(n=>{if(n.getCoalescedEvents){let e=n.getCoalescedEvents();for(let n=0;n<e.length;n++)this.mouseMove(e[n].offsetX,e[n].offsetY)}else this.mouseMove(n.offsetX,n.offsetY)})),this.colorInput=document.getElementById("lineCol"),this.widthSlider=document.getElementById("widthSlider"),this.rainbowButton=document.getElementById("rainbow"),this.rainbowButton.onclick=()=>{this.toggleRainbow()},this.colorInput.onclick=()=>{this.rainbow&&this.toggleRainbow()},document.getElementById("undo").onclick=()=>{this.undo()},document.getElementById("clear").onclick=()=>{this.clear()},document.addEventListener("keydown",(n=>{n.ctrlKey&&"z"===n.key&&this.undo()})),y.push(this)):0===y.length?y.push(this):y.splice(y.length-1,0,this)}toggleRainbow(){var n,e;this.rainbow?(null===(n=this.rainbowButton)||void 0===n||n.classList.remove("rainbowOn"),this.rainbow=!1):(null===(e=this.rainbowButton)||void 0===e||e.classList.add("rainbowOn"),this.rainbow=!0)}newPath(n,e,t,r,o,i,a){this.activePath=new b(new s(r,o,i),t,a),this.paths.push(this.activePath),this.activePath.mouseDown(n,e)}mouseMove(n,e){this.mousePos.x=n,this.mousePos.y=e,this.activePath&&this.activePath.mouseMove(n,e)}mouseDown(n,e){var t;let r=(null===(t=this.colorInput)||void 0===t?void 0:t.value)||"#000000",o=1;this.widthSlider&&(o=parseInt(this.widthSlider.value)),this.newPath(n,e,o,parseInt(r.substr(1,2),16),parseInt(r.substr(3,2),16),parseInt(r.substr(5,2),16),this.rainbow)}clear(){this.paths=[]}undo(){this.paths.pop()}mouseUp(n,e){this.activePath&&(this.activePath.mouseUp(n,e),this.activePath=null)}renderLoop(n){for(let e=0;e<this.paths.length;e++)this.paths[e].draw(n);this._ownerId!==r.instance.userId&&(A.beginPath(),A.fillStyle="#000000",A.arc(this.mousePos.x,this.mousePos.y,5,0,2*Math.PI),A.fill())}};h([o(Number,Number,Number,n,n,n,Boolean)],v.prototype,"newPath",null),h([o(Number,Number)],v.prototype,"mouseMove",null),h([o()],v.prototype,"clear",null),h([o()],v.prototype,"undo",null),h([o(Number,Number)],v.prototype,"mouseUp",null),v=h([function(...n){return function(e){let t=e,o=r.instance,i=o.registerNetworkedObject(e,n),s=function(...n){return o.spawn(i,n)};return s.prototype=t.prototype,s}}()],v);let I=document.getElementById("status"),B=document.getElementById("preloader"),x=document.getElementById("controls"),S=null;window.startHost=function(n){var e;n?S?null===(e=S.contentWindow)||void 0===e||e.location.reload():(S=document.createElement("iframe"),S.src=window.location.href,S.style.display="none",document.body.append(S),S.onload=()=>{var n;null===(n=S.contentWindow)||void 0===n||n.startHost()}):r.instance.startHost().then((n=>{console.log("STARTED AS HOST WITH ROOM ID",n),window.parent.startedHost(n)}))},window.startClient=function(n){console.log("ROOMID",n),I.textContent="Connecting...",r.instance.connect(n).then((n=>{console.log("CONNECTED"),I.textContent=n,I.onclick=()=>{navigator.clipboard.writeText(`http://${window.location.hostname}:25565/?roomId=${n}`).then((function(){console.log("Async: Copying to clipboard was successful!")}),(function(n){console.error("Async: Could not copy text: ",n)}))},I.click(),r.instance.onSyncCompleted=()=>{console.log("Synced"),p.classList.add("visible"),x.classList.add("visible"),B.classList.add("hidden"),C=new v,requestAnimationFrame(w)}})).catch((n=>{I.textContent="Failed to connect"}))},window.startedHost=n=>{console.log("LOCATION",window.location.hostname),window.startClient(n)},window.onload=()=>{const n=new URLSearchParams(window.location.search),e=n.get("isHost"),t=n.get("roomId");localStorage.getItem("username"),e?window.startHost(!0):t?window.startClient(t):I.textContent="Invalid Room ID"}})()})();
//# sourceMappingURL=room.bundle.js.map