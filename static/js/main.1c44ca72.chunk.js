(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,function(e,t,a){e.exports=a(12)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var o=a(0),n=a.n(o),i=a(4),u=a.n(i),r=(a(10),a(1)),c=a(2);a(11);function s(e){var t=e.todo,a=e.index,o=e.completeTodo,i=e.removeTodo;return n.a.createElement("div",{className:"todo"},n.a.createElement("p",{className:"todo_text",style:{textDecoration:t.isCompleted?"line-through":"none"}},n.a.createElement("div",{className:"todo_buttons"},n.a.createElement("button",{onClick:function(){return o(a)}},"Complete"),n.a.createElement("button",{onClick:function(){return i(a)}},"x")),t.text))}function m(e){var t=e.addTodo,a=Object(o.useState)(""),i=Object(c.a)(a,2),u=i[0],r=i[1];return n.a.createElement("form",{onSubmit:function(e){e.preventDefault(),u&&(t(u),r(""))}},n.a.createElement("input",{type:"text",className:"input",placeholder:"\u041d\u043e\u0432\u0430\u044f \u0437\u0430\u0434\u0430\u0447\u0430",value:u,onChange:function(e){return r(e.target.value)}}),n.a.createElement("button",{className:"addButton"},"Add"))}var l=function(){var e=Object(o.useState)([{text:"\u0421\u0434\u0435\u043b\u0430\u0442\u044c \u0442\u0443\u0434\u0443\u0448\u043a\u0443",isCompleted:!1},{text:"\u0417\u0430\u043b\u0438\u0442\u044c \u0432 \u0440\u0435\u043f\u0443 \u043d\u0430 \u0433\u0438\u0442",isCompleted:!1},{text:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus rerum, vel autem voluptas similique nisi veritatis iste tempora fugiat tenetur voluptatem tempore facere nemo maiores ipsum officia nam! Aperiam incidunt molestiae voluptates modi sit illo, quod quis provident assumenda accusantium consequuntur, dicta ea ad, architecto nam doloremque quibusdam officiis veritatis error quisquam enim repudiandae quia necessitatibus suscipit. Voluptatem modi eum itaque! Explicabo, inventore accusantium! Sunt esse magnam nobis obcaecati aspernatur amet repellat id excepturi ratione dolorum deleniti quas officiis neque, totam iste ut velit, ex perferendis consequuntur. Beatae deserunt consequatur amet? Voluptatem doloribus, obcaecati accusamus ex magni quod voluptates omnis.      ",isCompleted:!1}]),t=Object(c.a)(e,2),a=t[0],i=t[1],u=function(e){var t=Object(r.a)(a);!0!==t[e].isCompleted?t[e].isCompleted=!0:t[e].isCompleted=!1,i(t)},l=function(e){var t=Object(r.a)(a);t.splice(e,1),i(t)};return n.a.createElement("div",{className:"app"},n.a.createElement("div",{className:"todo-list"},n.a.createElement(m,{addTodo:function(e){var t=[].concat(Object(r.a)(a),[{text:e}]);i(t)}}),a.map(function(e,t){return n.a.createElement(s,{key:t,index:t,todo:e,completeTodo:u,removeTodo:l})})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));u.a.render(n.a.createElement(l,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[5,1,2]]]);
//# sourceMappingURL=main.1c44ca72.chunk.js.map