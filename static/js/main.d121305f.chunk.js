(this.webpackJsonptest=this.webpackJsonptest||[]).push([[0],{11:function(t){t.exports=JSON.parse('[{"id":"id-1","text":"\u0421\u043e\u0437\u0434\u0430\u0442\u044c \u0440\u0435\u043f\u043e\u0437\u0438\u0442\u043e\u0440\u0438\u0439","completed":true},{"id":"id-2","text":"\u041d\u0430\u043f\u0438\u0441\u0430\u0442\u044c \u043a\u043e\u0434","completed":false},{"id":"id-3","text":"\u041f\u0435\u0440\u0435\u0437\u0432\u043e\u043d\u0438\u0442\u044c","completed":false}]')},17:function(t,e,n){},27:function(t,e,n){},28:function(t,e,n){},29:function(t,e,n){"use strict";n.r(e);var o=n(1),r=n.n(o),a=n(9),s=n.n(a),c=(n(17),n(8)),i=n(12),d=n(3),u=n(4),l=n(6),b=n(5),f=n(10),j=n.n(f),h=n(0),m=function(t){var e=t.children;return Object(h.jsx)("div",{children:e})},p=(n(27),function(t){var e=t.todos,n=t.onDeleteTodo;return Object(h.jsx)("ul",{className:"Todo",children:e.map((function(t){var e=t.id,o=t.text;return Object(h.jsxs)("li",{className:"TodoList",children:[Object(h.jsx)("p",{className:"TodoList-text",children:o}),Object(h.jsx)("button",{onClick:function(){return n(e)},className:"TodoList-button",children:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c"})]},e)}))})}),O=(n(28),function(t){Object(l.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(d.a)(this,n);for(var o=arguments.length,r=new Array(o),a=0;a<o;a++)r[a]=arguments[a];return(t=e.call.apply(e,[this].concat(r))).state={message:""},t.handleChange=function(e){t.setState({message:e.currentTarget.value})},t.handleSubmit=function(e){e.preventDefault(),t.props.onSubmit(t.state.message),t.setState({message:""})},t}return Object(u.a)(n,[{key:"render",value:function(){return Object(h.jsxs)("form",{className:"TodoEditor",onSubmit:this.handleSubmit,children:[Object(h.jsx)("textarea",{className:"TodoEditor__textarea",value:this.state.message,onChange:this.handleChange}),Object(h.jsx)("button",{type:"submit",className:"TodoEditor__button",children:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"})]})}}]),n}(o.Component)),x=O,g=n(11),v=function(t){Object(l.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(d.a)(this,n);for(var o=arguments.length,r=new Array(o),a=0;a<o;a++)r[a]=arguments[a];return(t=e.call.apply(e,[this].concat(r))).state={todos:g,filter:""},t.addTodo=function(e){var n={id:j.a.generate(),text:e,completed:!1};t.setState((function(t){var e=t.todos;return{todos:[n].concat(Object(i.a)(e))}}))},t.deleteTodo=function(e){t.setState((function(t){return{todos:t.todos.filter((function(t){return t.id!==e}))}}))},t.toggleCompleted=function(e){t.setState((function(t){return{todos:t.todos.map((function(t){return t.id===e?Object(c.a)(Object(c.a)({},t),{},{completed:!t.completed}):t}))}}))},t.changeFilter=function(e){t.setState({filter:e.currentTarget.value})},t.getVisibleTodos=function(){var e=t.state,n=e.filter,o=e.todos,r=n.toLowerCase();return o.filter((function(t){return t.text.toLowerCase().includes(r)}))},t}return Object(u.a)(n,[{key:"render",value:function(){var t=this.getVisibleTodos();return Object(h.jsxs)(m,{children:[Object(h.jsx)("h1",{children:"\u0417\u0430\u043f\u0438\u0448\u0438\u0442\u0435 \u0437\u0430\u0434\u0430\u043d\u0438\u0435"}),Object(h.jsx)(x,{onSubmit:this.addTodo}),Object(h.jsx)(p,{todos:t,onDeleteTodo:this.deleteTodo,onToggleCompleted:this.toggleCompleted})]})}}]),n}(o.Component),T=v;s.a.render(Object(h.jsx)(r.a.StrictMode,{children:Object(h.jsx)(T,{})}),document.getElementById("root"))}},[[29,1,2]]]);
//# sourceMappingURL=main.d121305f.chunk.js.map