if(document.querySelector('.t-wrap')) {
    document.querySelector('.t-wrap').remove();
}
/*! tiny.toast 2014-11-04 */
!function(e,t){function o(e){return e?"object"==typeof Node?e instanceof Node:e&&"object"==typeof e&&"number"==typeof e.nodeType&&"string"==typeof e.nodeName:!1}function a(e){return e===t.body?!1:t.body.contains(e)}function n(e,t){for(var o=0,a=e.length;a>o;o++)t(e[o],o,e)}function i(e){function t(){a(e)&&e.parentElement.removeChild(e)}h?(e.addEventListener("webkitAnimationEnd",t,!1),e.addEventListener("animationend",t,!1),e.className+=" t-exit"):t(e)}function r(e){e=[].slice.call(e);var t;return n(e,function(e){t||"object"!=typeof e||(t=e)}),t=t||{},t.msg=t.msg||t.message,t.group=t.action?!1:void 0!==t.group?!!t.group:!!y.group,"string"==typeof e[0]&&(t.msg=e[0]),"number"==typeof e[1]&&(t.timeout=e[1]),t}function c(e,a){if(e instanceof Array)return a=a||t.createElement("span"),n(e,function(e){a.appendChild(c(e,a))}),a;if(e.dom&&o(e.dom))return e.dom;if(e.name&&e.onclick){var i=t.createElement("span"),r=t.createTextNode(e.name);return i.onclick=e.onclick,i.appendChild(r),i.className="t-action",i}return t.createTextNode("")}function m(e){var o={},a=function(a){var n=this;n.count=0,n.dom=t.createElement("div"),n.textNode=t.createTextNode(""),n.autoRemove=void 0,n.remove=function(){clearTimeout(n.autoRemove),delete o[a],i(n.dom)},n.dom.appendChild(n.textNode),n.dom.removeToast=n.remove,n.dom.className=e+" t-toast",g.appendChild(n.dom),!!y.group&&(o[a]=n)};return function(){var e=r(arguments),t=e.msg||"",n=e.dismissible,i="function"==typeof e.onclick?e.onclick:!1,m=n===!1?-1:e.timeout,d=e.group&&o[t]?o[t]:new a(t),s=d.dom,u=d&&++d.count>1?t+" (x"+d.count+")":t;return d.textNode.nodeValue=u,e.action&&"object"==typeof e.action&&s.appendChild(c(e.action)),-1!==m&&(clearTimeout(d.autoRemove),d.autoRemove=setTimeout(function(){d.remove()},+m||+y.timeout||5e3)),s.className+=n!==!1||i?" t-click":"",s.onclick=function(){i&&i({message:t,count:d.count}),n!==!1&&d.remove()},d.remove}}function d(){n(g.children,function(e){e.removeToast?e.removeToast():i(e)})}var s=t.getElementsByTagName("head")[0],u=t.createElement("style");u.type="text/css";var l=".t-wrap{position:fixed;bottom:0;text-align:center;font-family:sans-serif;width:100%;z-index:10000}@media (min-width:0){.t-wrap{width:auto;display:inline-block;left:50%;-webkit-transform:translate(-50%,0);-ms-transform:translate(-50%,0);transform:translate(-50%,0);transform:translate3d(-50%,0,0);transform-style:preserve-3d}}.t-toast{width:16em;margin:.6em auto;padding:.5em .3em;border-radius:2em;box-shadow:0 4px 0 -1px rgba(0,0,0,.2);color:#eee;cursor:default;overflow-y:hidden;will-change:opacity,height,margin;-webkit-animation:t-enter 500ms ease-out;animation:t-enter 500ms ease-out;transform-style:preserve-3d}.t-toast.t-gray{background:#777;background:rgba(119,119,119,.9)}.t-toast.t-red{background:#D85955;background:rgba(216,89,85,.9)}.t-toast.t-blue{background:#4374AD;background:rgba(67,116,173,.9)}.t-toast.t-green{background:#75AD44;background:rgba(117,173,68,.9)}.t-toast.t-orange{background:#D89B55;background:rgba(216,133,73,.9)}.t-toast.t-white{background:#FAFAFA;background:rgba(255,255,255,.9);color:#777}.t-action,.t-click{cursor:pointer}.t-action{font-weight:700;text-decoration:underline;margin-left:.5em;display:inline-block}.t-toast.t-exit{-webkit-animation:t-exit 500ms ease-in;animation:t-exit 500ms ease-in}@-webkit-keyframes t-enter{from{opacity:0;max-height:0}to{opacity:1;max-height:2em}}@keyframes t-enter{from{opacity:0;max-height:0}to{opacity:1;max-height:2em}}@-webkit-keyframes t-exit{from{opacity:1;max-height:2em}to{opacity:0;max-height:0}}@keyframes t-exit{from{opacity:1;max-height:2em}to{opacity:0;max-height:0}}@media screen and (max-width:17em){.t-toast{width:90%}}";u.styleSheet?u.styleSheet.cssText=l:u.appendChild(t.createTextNode(l)),s.appendChild(u);var g=t.createElement("div");g.className="t-wrap";var f=function(){t.body.appendChild(g)},p=function(){"complete"===t.readyState&&f()};t.addEventListener?t.addEventListener("readystatechange",p,!1):t.attachEvent("onreadystatechange",p);p();var h=function(e){return"animation"in e||"-webkit-animation"in e}(g.style),y=e.toastr=e.toast={timeout:4e3,group:!0,clear:d,log:m("t-gray"),alert:m("t-white"),error:m("t-red"),info:m("t-blue"),success:m("t-green"),warning:m("t-orange")}}(window,document);