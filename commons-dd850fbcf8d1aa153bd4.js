(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"8+s/":function(t,e,M){"use strict";function n(t){return t&&"object"==typeof t&&"default"in t?t.default:t}var r=M("q1tI"),i=n(r),u=n(M("Gytx"));function o(t,e,M){return e in t?Object.defineProperty(t,e,{value:M,enumerable:!0,configurable:!0,writable:!0}):t[e]=M,t}var N=!("undefined"==typeof window||!window.document||!window.document.createElement);t.exports=function(t,e,M){if("function"!=typeof t)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof e)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==M&&"function"!=typeof M)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(n){if("function"!=typeof n)throw new Error("Expected WrappedComponent to be a React component.");var T,c=[];function a(){T=t(c.map((function(t){return t.props}))),j.canUseDOM?e(T):M&&(T=M(T))}var j=function(t){var e,M;function r(){return t.apply(this,arguments)||this}M=t,(e=r).prototype=Object.create(M.prototype),e.prototype.constructor=e,e.__proto__=M,r.peek=function(){return T},r.rewind=function(){if(r.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var t=T;return T=void 0,c=[],t};var o=r.prototype;return o.shouldComponentUpdate=function(t){return!u(t,this.props)},o.componentWillMount=function(){c.push(this),a()},o.componentDidUpdate=function(){a()},o.componentWillUnmount=function(){var t=c.indexOf(this);c.splice(t,1),a()},o.render=function(){return i.createElement(n,this.props)},r}(r.Component);return o(j,"displayName","SideEffect("+function(t){return t.displayName||t.name||"Component"}(n)+")"),o(j,"canUseDOM",N),j}}},"8Svw":function(t,e,M){"use strict";var n=M("Wbzz"),r=M("q1tI"),i=M.n(r),u=M("J/Pr"),o=M.n(u);e.a=function(t){t.title;return i.a.createElement("div",{className:"top-bar"},i.a.createElement("div",{className:"top-bar-container"},i.a.createElement(n.Link,{to:"/",className:"top-bar-logo","aria-label":"JS.dev Home"},i.a.createElement("img",{alt:"JS.dev",title:"JS.dev",src:o.a}))))}},Gytx:function(t,e){t.exports=function(t,e,M,n){var r=M?M.call(n,t,e):void 0;if(void 0!==r)return!!r;if(t===e)return!0;if("object"!=typeof t||!t||"object"!=typeof e||!e)return!1;var i=Object.keys(t),u=Object.keys(e);if(i.length!==u.length)return!1;for(var o=Object.prototype.hasOwnProperty.bind(e),N=0;N<i.length;N++){var T=i[N];if(!o(T))return!1;var c=t[T],a=e[T];if(!1===(r=M?M.call(n,c,a,T):void 0)||void 0===r&&c!==a)return!1}return!0}},"J/Pr":function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNjAwIDMwMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiByeD0iMjUiIGZpbGw9IiNGREUwMDAiLz4KICA8cGF0aCBkPSJNNTEuODgyOCAyMzAuMTU5QzYwLjE4MzYgMjI4Ljg1NyA2Ni45MzgyIDIyNy4xMDcgNzIuMTQ2NSAyMjQuOTFDNzcuMzU0OCAyMjIuNjMyIDgxLjM4MzEgMjE5LjYyIDg0LjIzMTQgMjE1Ljg3N0M4Ny4xNjExIDIxMi4wNTIgODkuMTE0MyAyMDcuMzMyIDkwLjA5MDggMjAxLjcxN0M5MS4xNDg4IDE5Ni4xMDIgOTEuNjc3NyAxODkuMTg0IDkxLjY3NzcgMTgwLjk2NVY0Ni40NDM0SDEyNi43MTJWMTc4Ljc2OEMxMjYuNzEyIDE5MC4yNDIgMTI1LjY1NCAyMDAuNDE1IDEyMy41MzggMjA5LjI4NUMxMjEuNTA0IDIxOC4xNTYgMTE3Ljk2NCAyMjUuNzI0IDExMi45MTggMjMxLjk5QzEwNy44NzIgMjM4LjE3NSAxMDEuMTE4IDI0My4wMTcgOTIuNjU0MyAyNDYuNTE3Qzg0LjE5MDggMjUwLjA5NyA3My42MTEzIDI1Mi4yNTQgNjAuOTE2IDI1Mi45ODZMNTEuODgyOCAyMzAuMTU5Wk0yOTYuMjY4IDE4OC40MTFDMjk2LjI2OCAxOTYuNjMxIDI5NC45MjUgMjA0LjI4IDI5Mi4yMzkgMjExLjM2QzI4OS41NTQgMjE4LjM1OSAyODUuMzIyIDIyNC40NjMgMjc5LjU0NCAyMjkuNjcxQzI3My43NjYgMjM0Ljg3OSAyNjYuMzYgMjM4Ljk0OCAyNTcuMzI3IDI0MS44NzhDMjQ4LjI5NCAyNDQuODA4IDIzNy40NyAyNDYuMjcyIDIyNC44NTYgMjQ2LjI3MkMyMTYuMjMgMjQ2LjI3MiAyMDguMDkyIDI0NS40MTggMjAwLjQ0MiAyNDMuNzA5QzE5Mi44NzQgMjQyLjA4MSAxODYuMTYgMjQwLjI1IDE4MC4zMDEgMjM4LjIxNkMxNzMuNDY1IDIzNS44NTYgMTY3LjE5OSAyMzMuMTMgMTYxLjUwMiAyMzAuMDM3TDE2Ny40ODMgMjA0LjY0NkMxNjcuNDgzIDIwNC44MDkgMTY4LjMzOCAyMDUuMjk4IDE3MC4wNDcgMjA2LjExMUMxNzEuNzU2IDIwNi45MjUgMTc0LjA3NSAyMDcuOTAyIDE3Ny4wMDUgMjA5LjA0MUMxODAuMDE2IDIxMC4wOTkgMTgzLjQ3NSAyMTEuMjc5IDE4Ny4zODEgMjEyLjU4MUMxOTEuMjg3IDIxMy44ODMgMTk1LjQzOCAyMTUuMDYzIDE5OS44MzIgMjE2LjEyMUMyMDQuMzA4IDIxNy4xNzkgMjA4Ljg2NSAyMTguMDc0IDIxMy41MDQgMjE4LjgwN0MyMTguMjI0IDIxOS41MzkgMjIyLjc4MSAyMTkuOTA1IDIyNy4xNzYgMjE5LjkwNUMyMzIuNTQ3IDIxOS45MDUgMjM3LjM4OSAyMTkuNDE3IDI0MS43MDIgMjE4LjQ0QzI0Ni4wOTcgMjE3LjQ2NCAyNDkuNzk5IDIxNS45MTggMjUyLjgxMSAyMTMuODAyQzI1NS45MDMgMjExLjYwNCAyNTguMjYzIDIwOC43OTcgMjU5Ljg5MSAyMDUuMzc5QzI2MS42IDIwMS45NjEgMjYyLjQ1NCAxOTcuNzcgMjYyLjQ1NCAxOTIuODA2QzI2Mi40NTQgMTg1LjQ4MSAyNjAuNDYgMTc5LjQxOSAyNTYuNDczIDE3NC42MTdDMjUyLjQ4NSAxNjkuODE2IDI0Ni40MjIgMTY1Ljg2OSAyMzguMjg0IDE2Mi43NzZMMTk2LjQxNCAxNDYuNDE5QzE5MC42MzYgMTQ0LjE0IDE4NS4yNjUgMTQxLjQ1NSAxODAuMzAxIDEzOC4zNjJDMTc1LjMzNyAxMzUuMjcgMTcxLjAyMyAxMzEuNjg5IDE2Ny4zNjEgMTI3LjYyQzE2My43ODEgMTIzLjQ3IDE2MC45MzIgMTE4Ljc5IDE1OC44MTYgMTEzLjU4MkMxNTYuNzgyIDEwOC4zNzQgMTU1Ljc2NSAxMDIuNTE0IDE1NS43NjUgOTYuMDAzOUMxNTUuNzY1IDg2LjY0NTIgMTU3LjU5NiA3OC42MjkyIDE2MS4yNTggNzEuOTU2MUMxNjUuMDAxIDY1LjI4MjkgMTY5Ljk2NSA1OS43ODk3IDE3Ni4xNSA1NS40NzY2QzE4Mi40MTcgNTEuMTYzNCAxODkuNjYgNDcuOTg5NiAxOTcuODc5IDQ1Ljk1NTFDMjA2LjE4IDQzLjkyMDYgMjE0Ljg0NyA0Mi45MDMzIDIyMy44OCA0Mi45MDMzQzIzMS43NzQgNDIuOTAzMyAyMzkuMTM5IDQzLjU1NDQgMjQ1Ljk3NSA0NC44NTY0QzI1Mi44OTIgNDYuMTU4NSAyNTkuMDc3IDQ3LjcwNDggMjY0LjUyOSA0OS40OTUxQzI3MC4wNjMgNTEuMjA0MSAyNzQuNzQzIDUyLjk1MzggMjc4LjU2NyA1NC43NDQxQzI4Mi4zOTIgNTYuNTM0NSAyODUuMTU5IDU3LjkxOCAyODYuODY4IDU4Ljg5NDVMMjc5Ljc4OCA4My4wNjQ1QzI3OC4zMjMgODIuMTY5MyAyNzUuODQxIDgwLjk0ODYgMjcyLjM0MiA3OS40MDIzQzI2OC45MjQgNzcuNzc0NyAyNjQuODU1IDc2LjE4NzggMjYwLjEzNSA3NC42NDE2QzI1NS40OTYgNzMuMDk1NCAyNTAuNDEgNzEuNzUyNiAyNDQuODc2IDcwLjYxMzNDMjM5LjM0MiA2OS40NzQgMjMzLjcyNyA2OC45MDQzIDIyOC4wMyA2OC45MDQzQzIyMi4yNTIgNjguOTA0MyAyMTYuOTYzIDY5LjMxMTIgMjEyLjE2MSA3MC4xMjVDMjA3LjQ0MSA3MC44NTc0IDIwMy4zNzIgNzIuMTU5NSAxOTkuOTU0IDc0LjAzMTJDMTk2LjUzNiA3NS45MDMgMTkzLjg1MSA3OC40MjU4IDE5MS44OTcgODEuNTk5NkMxOTAuMDI2IDg0Ljc3MzQgMTg5LjA5IDg4LjcyMDQgMTg5LjA5IDkzLjQ0MDRDMTg5LjA5IDk1LjYzNzcgMTg5LjM3NSA5Ny43NTM2IDE4OS45NDQgOTkuNzg4MUMxOTAuNTk1IDEwMS44MjMgMTkxLjY1MyAxMDMuNzc2IDE5My4xMTggMTA1LjY0N0MxOTQuNTgzIDEwNy40MzggMTk2LjUzNiAxMDkuMTg4IDE5OC45NzggMTEwLjg5NkMyMDEuNSAxMTIuNTI0IDIwNC42NzQgMTE0LjA3IDIwOC40OTkgMTE1LjUzNUwyNTAuMDAzIDEzMS4wMzhDMjU2LjY3NiAxMzMuNTYxIDI2Mi44NjEgMTM2LjU3MiAyNjguNTU4IDE0MC4wNzFDMjc0LjI1NCAxNDMuNTcxIDI3OS4xMzcgMTQ3LjY4IDI4My4yMDYgMTUyLjRDMjg3LjI3NSAxNTcuMDM5IDI5MC40NDkgMTYyLjM2OSAyOTIuNzI4IDE2OC4zOTJDMjk1LjA4OCAxNzQuMzMyIDI5Ni4yNjggMTgxLjAwNiAyOTYuMjY4IDE4OC40MTFaIiBmaWxsPSJibGFjayIvPgogIDxwYXRoIGQ9Ik0zMDYuODY0IDIxNS4wMjdIMzI3Ljk4MlYyMzdIMzA2Ljg2NFYyMTUuMDI3Wk0zNjAuMjcgMjAwLjc0NUMzNjAuMjcgMjA1LjQyNCAzNjAuNjE2IDIwOS40MTIgMzYxLjMwOCAyMTIuNzA4QzM2Mi4wNCAyMTYuMDA0IDM2My4wNzggMjE4LjcxIDM2NC40MiAyMjAuODI2QzM2NS43NjMgMjIyLjkwMSAzNjcuMzkxIDIyNC40MjcgMzY5LjMwMyAyMjUuNDAzQzM3MS4yMTYgMjI2LjMzOSAzNzMuMzUyIDIyNi44MDcgMzc1LjcxMiAyMjYuODA3QzM3OC45NjcgMjI2LjgwNyAzODIuMDggMjI2LjE5NyAzODUuMDUgMjI0Ljk3NkMzODguMDIxIDIyMy43NTUgMzkwLjU4NCAyMjEuODYzIDM5Mi43NDEgMjE5LjNWMTgyLjU1N0MzODkuNzMgMTgwLjE1NiAzODYuNzU5IDE3OC4yNDMgMzgzLjgzIDE3Ni44MTlDMzgwLjkgMTc1LjM1NCAzNzcuODA3IDE3NC42MjIgMzc0LjU1MiAxNzQuNjIyQzM3MS43ODUgMTc0LjYyMiAzNjkuNDg2IDE3NS4yNTMgMzY3LjY1NSAxNzYuNTE0QzM2NS44MjQgMTc3LjczNSAzNjQuMzU5IDE3OS40ODUgMzYzLjI2MSAxODEuNzYzQzM2Mi4xNjIgMTg0LjA0MiAzNjEuMzg5IDE4Ni43ODggMzYwLjk0MSAxOTAuMDAzQzM2MC40OTQgMTkzLjIxNyAzNjAuMjcgMTk2Ljc5OCAzNjAuMjcgMjAwLjc0NVpNMzcxLjQzOSAxNjMuMDg2QzM3NS44NzUgMTYzLjA4NiAzNzkuODYyIDE2My44OCAzODMuNDAyIDE2NS40NjdDMzg2Ljk0MiAxNjcuMDU0IDM5MC4wNTUgMTY5LjQ5NSAzOTIuNzQxIDE3Mi43OTFWMTM2LjEwOUw0MDkuNTI1IDEzMy40ODRWMjM3SDM5Ny41MDFMMzk0LjI2NyAyMjYuMzE5QzM5My4yOSAyMjguMDY5IDM5Mi4wMjkgMjI5LjY5NiAzOTAuNDgyIDIzMS4yMDJDMzg4Ljk3NyAyMzIuNjY3IDM4Ny4yODggMjMzLjkyOCAzODUuNDE3IDIzNC45ODZDMzgzLjU0NSAyMzYuMDQ0IDM4MS41NTEgMjM2Ljg3OCAzNzkuNDM1IDIzNy40ODhDMzc3LjMxOSAyMzguMDk5IDM3NS4xNjMgMjM4LjQwNCAzNzIuOTY1IDIzOC40MDRDMzY3LjYzNSAyMzguNDA0IDM2My4xMTggMjM3LjM2NiAzNTkuNDE2IDIzNS4yOTFDMzU1LjcxMyAyMzMuMTc1IDM1Mi43MDIgMjMwLjMyNyAzNTAuMzgyIDIyNi43NDZDMzQ4LjA2MyAyMjMuMTI1IDM0Ni4zNzQgMjE4LjkzNCAzNDUuMzE2IDIxNC4xNzNDMzQ0LjI1OCAyMDkuMzcxIDM0My43MjkgMjA0LjI2NSAzNDMuNzI5IDE5OC44NTNDMzQzLjcyOSAxOTQuMDExIDM0NC4zNiAxODkuNDMzIDM0NS42MjIgMTg1LjEyQzM0Ni45MjQgMTgwLjc2NiAzNDguNzU1IDE3Ni45NjIgMzUxLjExNSAxNzMuNzA3QzM1My41MTUgMTcwLjQ1MSAzNTYuNDI1IDE2Ny44NjggMzU5Ljg0MyAxNjUuOTU1QzM2My4zMDEgMTY0LjA0MyAzNjcuMTY3IDE2My4wODYgMzcxLjQzOSAxNjMuMDg2Wk00ODIuNzA3IDIzMS43NTFDNDgwLjkxNiAyMzIuODUgNDc5LjAwNCAyMzMuODA2IDQ3Ni45NjkgMjM0LjYyQzQ3NC45MzUgMjM1LjQzMyA0NzIuODYgMjM2LjEyNSA0NzAuNzQ0IDIzNi42OTVDNDY4LjY2OCAyMzcuMjY0IDQ2Ni42MTQgMjM3LjY5MiA0NjQuNTc5IDIzNy45NzdDNDYyLjU0NSAyMzguMjYxIDQ2MC42MzIgMjM4LjQwNCA0NTguODQyIDIzOC40MDRDNDUzLjI2NyAyMzguNDA0IDQ0OC4zMDMgMjM3LjU3IDQ0My45NDkgMjM1LjkwMUM0MzkuNjM2IDIzNC4xOTIgNDM1Ljk3NCAyMzEuNzcxIDQzMi45NjMgMjI4LjYzOEM0MjkuOTkzIDIyNS40NjQgNDI3LjcxNCAyMjEuNjYgNDI2LjEyNyAyMTcuMjI1QzQyNC41ODEgMjEyLjc0OSA0MjMuODA4IDIwNy43NDQgNDIzLjgwOCAyMDIuMjFDNDIzLjgwOCAxOTYuNTU0IDQyNC41MiAxOTEuMzQ2IDQyNS45NDQgMTg2LjU4NUM0MjcuMzY4IDE4MS43ODQgNDI5LjQ2NCAxNzcuNjUzIDQzMi4yMyAxNzQuMTk1QzQzNS4wMzggMTcwLjY5NSA0MzguNDk3IDE2Ny45NjkgNDQyLjYwNiAxNjYuMDE2QzQ0Ni43NTcgMTY0LjA2MyA0NTEuNTE4IDE2My4wODYgNDU2Ljg4OSAxNjMuMDg2QzQ2MS42NDkgMTYzLjA4NiA0NjUuODQgMTYzLjg2IDQ2OS40NjIgMTY1LjQwNkM0NzMuMTI0IDE2Ni45MTEgNDc2LjE5NiAxNjkuMDY4IDQ3OC42NzggMTcxLjg3NUM0ODEuMTYgMTc0LjY4MyA0ODMuMDMyIDE3OC4wNiA0ODQuMjkzIDE4Mi4wMDdDNDg1LjU1NSAxODUuOTU0IDQ4Ni4xODYgMTkwLjM0OSA0ODYuMTg2IDE5NS4xOTFDNDg2LjE4NiAxOTYuNjk2IDQ4Ni4xNjUgMTk4LjE4MiA0ODYuMTI1IDE5OS42NDZDNDg2LjA4NCAyMDEuMTExIDQ4Ni4wMjMgMjAyLjUzNSA0ODUuOTQxIDIwMy45MTlINDQwLjg5N0M0NDAuOTM4IDIwNy44NjYgNDQxLjQwNiAyMTEuMjg0IDQ0Mi4zMDEgMjE0LjE3M0M0NDMuMTk2IDIxNy4wNjIgNDQ0LjQ1OCAyMTkuNDQyIDQ0Ni4wODUgMjIxLjMxNEM0NDcuNzU0IDIyMy4xODYgNDQ5Ljc2OCAyMjQuNTY5IDQ1Mi4xMjggMjI1LjQ2NEM0NTQuNTI5IDIyNi4zNiA0NTcuMjE0IDIyNi44MDcgNDYwLjE4NSAyMjYuODA3QzQ2My45NjkgMjI2LjgwNyA0NjcuMzA1IDIyNi4yNzggNDcwLjE5NCAyMjUuMjJDNDczLjA4MyAyMjQuMTIyIDQ3NS45MzIgMjIyLjQ5NCA0NzguNzM5IDIyMC4zMzdMNDgyLjcwNyAyMzEuNzUxWk00NzIuMDg2IDE5My45MDlDNDcyLjA4NiAxODcuNTYyIDQ3MC44MDUgMTgyLjc4IDQ2OC4yNDEgMTc5LjU2NkM0NjUuNjc4IDE3Ni4zNTEgNDYyLjExNyAxNzQuNzAzIDQ1Ny41NiAxNzQuNjIyQzQ1NC43OTMgMTc0LjcwMyA0NTIuMzkyIDE3NS4yOTMgNDUwLjM1OCAxNzYuMzkyQzQ0OC4zNjQgMTc3LjQ1IDQ0Ni42NzUgMTc4Ljg5NSA0NDUuMjkyIDE4MC43MjZDNDQzLjk0OSAxODIuNTU3IDQ0Mi45MTIgMTg0LjY5MyA0NDIuMTc5IDE4Ny4xMzRDNDQxLjQ0NyAxODkuNTc2IDQ0MS4wMiAxOTIuMTggNDQwLjg5NyAxOTQuOTQ3SDQ3Mi4wODZWMTkzLjkwOVpNNTE3LjQ5NyAyMzdMNDkyLjc3NyAxNjQuODU2SDUxMC4xMTFMNTI3LjE0IDIyMS40OTdMNTQzLjg2NCAxNjQuODU2SDU2MS4zODFMNTM2LjU0IDIzN0g1MTcuNDk3WiIgZmlsbD0iYmxhY2siLz4KPC9zdmc+Cg=="},TJpk:function(t,e,M){e.__esModule=!0,e.Helmet=void 0;var n=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var M=arguments[e];for(var n in M)Object.prototype.hasOwnProperty.call(M,n)&&(t[n]=M[n])}return t},r=function(){function t(t,e){for(var M=0;M<e.length;M++){var n=e[M];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,M,n){return M&&t(e.prototype,M),n&&t(e,n),e}}(),i=a(M("q1tI")),u=a(M("17x9")),o=a(M("8+s/")),N=a(M("bmMU")),T=M("v1p5"),c=M("hFT/");function a(t){return t&&t.__esModule?t:{default:t}}function j(t,e){var M={};for(var n in t)e.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(t,n)&&(M[n]=t[n]);return M}function A(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function D(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}var I,y,E,g=(0,o.default)(T.reducePropsToState,T.handleClientStateChange,T.mapStateOnServer)((function(){return null})),l=(I=g,E=y=function(t){function e(){return A(this,e),D(this,t.apply(this,arguments))}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),e.prototype.shouldComponentUpdate=function(t){return!(0,N.default)(this.props,t)},e.prototype.mapNestedChildrenToProps=function(t,e){if(!e)return null;switch(t.type){case c.TAG_NAMES.SCRIPT:case c.TAG_NAMES.NOSCRIPT:return{innerHTML:e};case c.TAG_NAMES.STYLE:return{cssText:e}}throw new Error("<"+t.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},e.prototype.flattenArrayTypeChildren=function(t){var e,M=t.child,r=t.arrayTypeChildren,i=t.newChildProps,u=t.nestedChildren;return n({},r,((e={})[M.type]=[].concat(r[M.type]||[],[n({},i,this.mapNestedChildrenToProps(M,u))]),e))},e.prototype.mapObjectTypeChildren=function(t){var e,M,r=t.child,i=t.newProps,u=t.newChildProps,o=t.nestedChildren;switch(r.type){case c.TAG_NAMES.TITLE:return n({},i,((e={})[r.type]=o,e.titleAttributes=n({},u),e));case c.TAG_NAMES.BODY:return n({},i,{bodyAttributes:n({},u)});case c.TAG_NAMES.HTML:return n({},i,{htmlAttributes:n({},u)})}return n({},i,((M={})[r.type]=n({},u),M))},e.prototype.mapArrayTypeChildrenToProps=function(t,e){var M=n({},e);return Object.keys(t).forEach((function(e){var r;M=n({},M,((r={})[e]=t[e],r))})),M},e.prototype.warnOnInvalidChildren=function(t,e){return!0},e.prototype.mapChildrenToProps=function(t,e){var M=this,n={};return i.default.Children.forEach(t,(function(t){if(t&&t.props){var r=t.props,i=r.children,u=j(r,["children"]),o=(0,T.convertReactPropstoHtmlAttributes)(u);switch(M.warnOnInvalidChildren(t,i),t.type){case c.TAG_NAMES.LINK:case c.TAG_NAMES.META:case c.TAG_NAMES.NOSCRIPT:case c.TAG_NAMES.SCRIPT:case c.TAG_NAMES.STYLE:n=M.flattenArrayTypeChildren({child:t,arrayTypeChildren:n,newChildProps:o,nestedChildren:i});break;default:e=M.mapObjectTypeChildren({child:t,newProps:e,newChildProps:o,nestedChildren:i})}}})),e=this.mapArrayTypeChildrenToProps(n,e)},e.prototype.render=function(){var t=this.props,e=t.children,M=j(t,["children"]),r=n({},M);return e&&(r=this.mapChildrenToProps(e,r)),i.default.createElement(I,r)},r(e,null,[{key:"canUseDOM",set:function(t){I.canUseDOM=t}}]),e}(i.default.Component),y.propTypes={base:u.default.object,bodyAttributes:u.default.object,children:u.default.oneOfType([u.default.arrayOf(u.default.node),u.default.node]),defaultTitle:u.default.string,defer:u.default.bool,encodeSpecialCharacters:u.default.bool,htmlAttributes:u.default.object,link:u.default.arrayOf(u.default.object),meta:u.default.arrayOf(u.default.object),noscript:u.default.arrayOf(u.default.object),onChangeClientState:u.default.func,script:u.default.arrayOf(u.default.object),style:u.default.arrayOf(u.default.object),title:u.default.string,titleAttributes:u.default.object,titleTemplate:u.default.string},y.defaultProps={defer:!0,encodeSpecialCharacters:!0},y.peek=I.peek,y.rewind=function(){var t=I.rewind();return t||(t=(0,T.mapStateOnServer)({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),t},E);l.renderStatic=l.rewind,e.Helmet=l,e.default=l},bmMU:function(t,e,M){"use strict";var n=Array.isArray,r=Object.keys,i=Object.prototype.hasOwnProperty,u="undefined"!=typeof Element;t.exports=function(t,e){try{return function t(e,M){if(e===M)return!0;if(e&&M&&"object"==typeof e&&"object"==typeof M){var o,N,T,c=n(e),a=n(M);if(c&&a){if((N=e.length)!=M.length)return!1;for(o=N;0!=o--;)if(!t(e[o],M[o]))return!1;return!0}if(c!=a)return!1;var j=e instanceof Date,A=M instanceof Date;if(j!=A)return!1;if(j&&A)return e.getTime()==M.getTime();var D=e instanceof RegExp,I=M instanceof RegExp;if(D!=I)return!1;if(D&&I)return e.toString()==M.toString();var y=r(e);if((N=y.length)!==r(M).length)return!1;for(o=N;0!=o--;)if(!i.call(M,y[o]))return!1;if(u&&e instanceof Element&&M instanceof Element)return e===M;for(o=N;0!=o--;)if(!("_owner"===(T=y[o])&&e.$$typeof||t(e[T],M[T])))return!1;return!0}return e!=e&&M!=M}(t,e)}catch(M){if(M.message&&M.message.match(/stack|recursion/i)||-2146828260===M.number)return console.warn("Warning: react-fast-compare does not handle circular references.",M.name,M.message),!1;throw M}}},"hFT/":function(t,e){e.__esModule=!0;e.ATTRIBUTE_NAMES={BODY:"bodyAttributes",HTML:"htmlAttributes",TITLE:"titleAttributes"};var M=e.TAG_NAMES={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},n=(e.VALID_TAG_NAMES=Object.keys(M).map((function(t){return M[t]})),e.TAG_PROPERTIES={CHARSET:"charset",CSS_TEXT:"cssText",HREF:"href",HTTPEQUIV:"http-equiv",INNER_HTML:"innerHTML",ITEM_PROP:"itemprop",NAME:"name",PROPERTY:"property",REL:"rel",SRC:"src"},e.REACT_TAG_MAP={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"});e.HELMET_PROPS={DEFAULT_TITLE:"defaultTitle",DEFER:"defer",ENCODE_SPECIAL_CHARACTERS:"encodeSpecialCharacters",ON_CHANGE_CLIENT_STATE:"onChangeClientState",TITLE_TEMPLATE:"titleTemplate"},e.HTML_TAG_MAP=Object.keys(n).reduce((function(t,e){return t[n[e]]=e,t}),{}),e.SELF_CLOSING_TAGS=[M.NOSCRIPT,M.SCRIPT,M.STYLE],e.HELMET_ATTRIBUTE="data-react-helmet"},nPH8:function(t,e,M){"use strict";var n=M("KQm4"),r=M("Wbzz");e.a=function(t){var e=Object(r.useStaticQuery)("3763906766"),M=Array.isArray(t)?Object(n.a)(t):[t],i=e.allAuthorYaml.nodes.filter((function(t){return M.includes(t.id)})).map((function(t){var e,M,n,r,i,u,o,N,T,c;return{id:t.id,name:t.name,slug:t.fields.slug,profilePicture:{src:null===(e=t.profilePicture)||void 0===e||null===(M=e.childImageSharp)||void 0===M||null===(n=M.fluid)||void 0===n?void 0:n.src},bio:t.bio||"",location:t.location||"",employment:{position:null===(r=t.employment)||void 0===r?void 0:r.position,company:null===(i=t.employment)||void 0===i?void 0:i.company,url:null===(u=t.employment)||void 0===u?void 0:u.url},social:{twitter:null===(o=t.social)||void 0===o?void 0:o.twitter,github:null===(N=t.social)||void 0===N?void 0:N.github,facebook:null===(T=t.social)||void 0===T?void 0:T.facebook,instagram:null===(c=t.social)||void 0===c?void 0:c.instagram}}}));return{first:function(){return i[0]},last:function(){return i[i.length-1]},all:function(){return i}}}},v1p5:function(t,e,M){(function(t){e.__esModule=!0,e.warn=e.requestAnimationFrame=e.reducePropsToState=e.mapStateOnServer=e.handleClientStateChange=e.convertReactPropstoHtmlAttributes=void 0;var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var M=arguments[e];for(var n in M)Object.prototype.hasOwnProperty.call(M,n)&&(t[n]=M[n])}return t},i=N(M("q1tI")),u=N(M("6qGY")),o=M("hFT/");function N(t){return t&&t.__esModule?t:{default:t}}var T,c=function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===e?String(t):String(t).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},a=function(t){var e=y(t,o.TAG_NAMES.TITLE),M=y(t,o.HELMET_PROPS.TITLE_TEMPLATE);if(M&&e)return M.replace(/%s/g,(function(){return e}));var n=y(t,o.HELMET_PROPS.DEFAULT_TITLE);return e||n||void 0},j=function(t){return y(t,o.HELMET_PROPS.ON_CHANGE_CLIENT_STATE)||function(){}},A=function(t,e){return e.filter((function(e){return void 0!==e[t]})).map((function(e){return e[t]})).reduce((function(t,e){return r({},t,e)}),{})},D=function(t,e){return e.filter((function(t){return void 0!==t[o.TAG_NAMES.BASE]})).map((function(t){return t[o.TAG_NAMES.BASE]})).reverse().reduce((function(e,M){if(!e.length)for(var n=Object.keys(M),r=0;r<n.length;r++){var i=n[r].toLowerCase();if(-1!==t.indexOf(i)&&M[i])return e.concat(M)}return e}),[])},I=function(t,e,M){var r={};return M.filter((function(e){return!!Array.isArray(e[t])||(void 0!==e[t]&&z("Helmet: "+t+' should be of type "Array". Instead found type "'+n(e[t])+'"'),!1)})).map((function(e){return e[t]})).reverse().reduce((function(t,M){var n={};M.filter((function(t){for(var M=void 0,i=Object.keys(t),u=0;u<i.length;u++){var N=i[u],T=N.toLowerCase();-1===e.indexOf(T)||M===o.TAG_PROPERTIES.REL&&"canonical"===t[M].toLowerCase()||T===o.TAG_PROPERTIES.REL&&"stylesheet"===t[T].toLowerCase()||(M=T),-1===e.indexOf(N)||N!==o.TAG_PROPERTIES.INNER_HTML&&N!==o.TAG_PROPERTIES.CSS_TEXT&&N!==o.TAG_PROPERTIES.ITEM_PROP||(M=N)}if(!M||!t[M])return!1;var c=t[M].toLowerCase();return r[M]||(r[M]={}),n[M]||(n[M]={}),!r[M][c]&&(n[M][c]=!0,!0)})).reverse().forEach((function(e){return t.push(e)}));for(var i=Object.keys(n),N=0;N<i.length;N++){var T=i[N],c=(0,u.default)({},r[T],n[T]);r[T]=c}return t}),[]).reverse()},y=function(t,e){for(var M=t.length-1;M>=0;M--){var n=t[M];if(n.hasOwnProperty(e))return n[e]}return null},E=(T=Date.now(),function(t){var e=Date.now();e-T>16?(T=e,t(e)):setTimeout((function(){E(t)}),0)}),g=function(t){return clearTimeout(t)},l="undefined"!=typeof window?window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||E:t.requestAnimationFrame||E,s="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||g:t.cancelAnimationFrame||g,z=function(t){return console&&"function"==typeof console.warn&&console.warn(t)},O=null,f=function(t,e){var M=t.baseTag,n=t.bodyAttributes,r=t.htmlAttributes,i=t.linkTags,u=t.metaTags,N=t.noscriptTags,T=t.onChangeClientState,c=t.scriptTags,a=t.styleTags,j=t.title,A=t.titleAttributes;d(o.TAG_NAMES.BODY,n),d(o.TAG_NAMES.HTML,r),S(j,A);var D={baseTag:p(o.TAG_NAMES.BASE,M),linkTags:p(o.TAG_NAMES.LINK,i),metaTags:p(o.TAG_NAMES.META,u),noscriptTags:p(o.TAG_NAMES.NOSCRIPT,N),scriptTags:p(o.TAG_NAMES.SCRIPT,c),styleTags:p(o.TAG_NAMES.STYLE,a)},I={},y={};Object.keys(D).forEach((function(t){var e=D[t],M=e.newTags,n=e.oldTags;M.length&&(I[t]=M),n.length&&(y[t]=D[t].oldTags)})),e&&e(),T(t,I,y)},L=function(t){return Array.isArray(t)?t.join(""):t},S=function(t,e){void 0!==t&&document.title!==t&&(document.title=L(t)),d(o.TAG_NAMES.TITLE,e)},d=function(t,e){var M=document.getElementsByTagName(t)[0];if(M){for(var n=M.getAttribute(o.HELMET_ATTRIBUTE),r=n?n.split(","):[],i=[].concat(r),u=Object.keys(e),N=0;N<u.length;N++){var T=u[N],c=e[T]||"";M.getAttribute(T)!==c&&M.setAttribute(T,c),-1===r.indexOf(T)&&r.push(T);var a=i.indexOf(T);-1!==a&&i.splice(a,1)}for(var j=i.length-1;j>=0;j--)M.removeAttribute(i[j]);r.length===i.length?M.removeAttribute(o.HELMET_ATTRIBUTE):M.getAttribute(o.HELMET_ATTRIBUTE)!==u.join(",")&&M.setAttribute(o.HELMET_ATTRIBUTE,u.join(","))}},p=function(t,e){var M=document.head||document.querySelector(o.TAG_NAMES.HEAD),n=M.querySelectorAll(t+"["+o.HELMET_ATTRIBUTE+"]"),r=Array.prototype.slice.call(n),i=[],u=void 0;return e&&e.length&&e.forEach((function(e){var M=document.createElement(t);for(var n in e)if(e.hasOwnProperty(n))if(n===o.TAG_PROPERTIES.INNER_HTML)M.innerHTML=e.innerHTML;else if(n===o.TAG_PROPERTIES.CSS_TEXT)M.styleSheet?M.styleSheet.cssText=e.cssText:M.appendChild(document.createTextNode(e.cssText));else{var N=void 0===e[n]?"":e[n];M.setAttribute(n,N)}M.setAttribute(o.HELMET_ATTRIBUTE,"true"),r.some((function(t,e){return u=e,M.isEqualNode(t)}))?r.splice(u,1):i.push(M)})),r.forEach((function(t){return t.parentNode.removeChild(t)})),i.forEach((function(t){return M.appendChild(t)})),{oldTags:r,newTags:i}},C=function(t){return Object.keys(t).reduce((function(e,M){var n=void 0!==t[M]?M+'="'+t[M]+'"':""+M;return e?e+" "+n:n}),"")},m=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(t).reduce((function(e,M){return e[o.REACT_TAG_MAP[M]||M]=t[M],e}),e)},w=function(t,e,M){switch(t){case o.TAG_NAMES.TITLE:return{toComponent:function(){return t=e.title,M=e.titleAttributes,(n={key:t})[o.HELMET_ATTRIBUTE]=!0,r=m(M,n),[i.default.createElement(o.TAG_NAMES.TITLE,r,t)];var t,M,n,r},toString:function(){return function(t,e,M,n){var r=C(M),i=L(e);return r?"<"+t+" "+o.HELMET_ATTRIBUTE+'="true" '+r+">"+c(i,n)+"</"+t+">":"<"+t+" "+o.HELMET_ATTRIBUTE+'="true">'+c(i,n)+"</"+t+">"}(t,e.title,e.titleAttributes,M)}};case o.ATTRIBUTE_NAMES.BODY:case o.ATTRIBUTE_NAMES.HTML:return{toComponent:function(){return m(e)},toString:function(){return C(e)}};default:return{toComponent:function(){return function(t,e){return e.map((function(e,M){var n,r=((n={key:M})[o.HELMET_ATTRIBUTE]=!0,n);return Object.keys(e).forEach((function(t){var M=o.REACT_TAG_MAP[t]||t;if(M===o.TAG_PROPERTIES.INNER_HTML||M===o.TAG_PROPERTIES.CSS_TEXT){var n=e.innerHTML||e.cssText;r.dangerouslySetInnerHTML={__html:n}}else r[M]=e[t]})),i.default.createElement(t,r)}))}(t,e)},toString:function(){return function(t,e,M){return e.reduce((function(e,n){var r=Object.keys(n).filter((function(t){return!(t===o.TAG_PROPERTIES.INNER_HTML||t===o.TAG_PROPERTIES.CSS_TEXT)})).reduce((function(t,e){var r=void 0===n[e]?e:e+'="'+c(n[e],M)+'"';return t?t+" "+r:r}),""),i=n.innerHTML||n.cssText||"",u=-1===o.SELF_CLOSING_TAGS.indexOf(t);return e+"<"+t+" "+o.HELMET_ATTRIBUTE+'="true" '+r+(u?"/>":">"+i+"</"+t+">")}),"")}(t,e,M)}}}};e.convertReactPropstoHtmlAttributes=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(t).reduce((function(e,M){return e[o.HTML_TAG_MAP[M]||M]=t[M],e}),e)},e.handleClientStateChange=function(t){O&&s(O),t.defer?O=l((function(){f(t,(function(){O=null}))})):(f(t),O=null)},e.mapStateOnServer=function(t){var e=t.baseTag,M=t.bodyAttributes,n=t.encode,r=t.htmlAttributes,i=t.linkTags,u=t.metaTags,N=t.noscriptTags,T=t.scriptTags,c=t.styleTags,a=t.title,j=void 0===a?"":a,A=t.titleAttributes;return{base:w(o.TAG_NAMES.BASE,e,n),bodyAttributes:w(o.ATTRIBUTE_NAMES.BODY,M,n),htmlAttributes:w(o.ATTRIBUTE_NAMES.HTML,r,n),link:w(o.TAG_NAMES.LINK,i,n),meta:w(o.TAG_NAMES.META,u,n),noscript:w(o.TAG_NAMES.NOSCRIPT,N,n),script:w(o.TAG_NAMES.SCRIPT,T,n),style:w(o.TAG_NAMES.STYLE,c,n),title:w(o.TAG_NAMES.TITLE,{title:j,titleAttributes:A},n)}},e.reducePropsToState=function(t){return{baseTag:D([o.TAG_PROPERTIES.HREF],t),bodyAttributes:A(o.ATTRIBUTE_NAMES.BODY,t),defer:y(t,o.HELMET_PROPS.DEFER),encode:y(t,o.HELMET_PROPS.ENCODE_SPECIAL_CHARACTERS),htmlAttributes:A(o.ATTRIBUTE_NAMES.HTML,t),linkTags:I(o.TAG_NAMES.LINK,[o.TAG_PROPERTIES.REL,o.TAG_PROPERTIES.HREF],t),metaTags:I(o.TAG_NAMES.META,[o.TAG_PROPERTIES.NAME,o.TAG_PROPERTIES.CHARSET,o.TAG_PROPERTIES.HTTPEQUIV,o.TAG_PROPERTIES.PROPERTY,o.TAG_PROPERTIES.ITEM_PROP],t),noscriptTags:I(o.TAG_NAMES.NOSCRIPT,[o.TAG_PROPERTIES.INNER_HTML],t),onChangeClientState:j(t),scriptTags:I(o.TAG_NAMES.SCRIPT,[o.TAG_PROPERTIES.SRC,o.TAG_PROPERTIES.INNER_HTML],t),styleTags:I(o.TAG_NAMES.STYLE,[o.TAG_PROPERTIES.CSS_TEXT],t),title:a(t),titleAttributes:A(o.ATTRIBUTE_NAMES.TITLE,t)}},e.requestAnimationFrame=l,e.warn=z}).call(this,M("yLpj"))},vrFN:function(t,e,M){"use strict";var n=M("q1tI"),r=M.n(n),i=M("TJpk"),u=M("Wbzz"),o=M("nPH8"),N=function(t){var e,M,n=t.description,N=t.lang,T=t.meta,c=t.title,a=t.twitterCreator,j=t.location,A=t.heroImage,D=t.twitterDescription,I=Object(o.a)(a).first(),y=Object(u.useStaticQuery)("1790439409").site,E=n||y.siteMetadata.description,g=null===(e=y.siteMetadata)||void 0===e?void 0:e.title,l=[{name:"description",content:E},{property:"og:title",content:c},{property:"og:description",content:E},{property:"og:type",content:"website"},{name:"twitter:title",content:c},{name:"twitter:description",content:D||E}];a&&l.push({name:"twitter:card",content:"summary_large_image"},{name:"twitter:creator",content:"@"+(null===(M=I.social)||void 0===M?void 0:M.twitter)},{name:"twitter:site",content:"@thejsdevsite"});return A?l.push({name:"twitter:image",content:""+y.siteMetadata.siteUrl+A}):j&&l.push({name:"twitter:image",content:""+y.siteMetadata.siteUrl+j.pathname+"/twitter-card.jpg"}),r.a.createElement(i.Helmet,{htmlAttributes:{lang:N},title:c,titleTemplate:g?"%s | "+g:null,meta:l.concat(T)})};N.defaultProps={lang:"en",meta:[],description:""},e.a=N},vzeB:function(t,e,M){"use strict";var n=M("KQm4"),r=M("Wbzz");e.a=function(t){var e=Object(r.useStaticQuery)("2756842759"),M=Array.isArray(t)?Object(n.a)(t):[t],i=e.allTagsYaml.nodes.filter((function(t){return M.includes(t.id)})).map((function(t){return{id:t.id,tag:t.tag,slug:t.fields.slug,title:t.title,description:t.description,foreground:t.foreground,background:t.background}}));return{first:function(){return i[0]},last:function(){return i[i.length-1]},all:function(){return i}}}}}]);
//# sourceMappingURL=commons-dd850fbcf8d1aa153bd4.js.map