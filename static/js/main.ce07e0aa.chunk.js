(this["webpackJsonptrello-app"]=this["webpackJsonptrello-app"]||[]).push([[0],{37:function(t,e,n){"use strict";n.d(e,"a",(function(){return a})),n.d(e,"b",(function(){return c}));var r=n(9),a=(n(61),function(t){return{type:r.CONSTANTS.ADD_LIST,payload:t}}),c=function(t,e,n,a,c,i){return{type:r.CONSTANTS.DRAG_HAPPENED,payload:{droppableIdStart:t,droppableIdEnd:e,droppableIndexStart:n,droppableIndexEnd:a,draggableId:c,type:i}}}},38:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var r=n(9),a=function(t,e){return{type:r.CONSTANTS.ADD_CARD,payload:{text:e,listID:t}}}},39:function(t,e){},65:function(t,e,n){},67:function(t,e,n){"use strict";n.r(e);var r,a,c,i,o,d,s=n(0),l=n.n(s),p=n(14),u=n.n(p),b=n(5),j=n(27),h=n(28),f=n(32),x=n(31),O=n(16),g=n(89),D=n(86),y=n(85),v=n(19),A=n(17),m=n(2),I=A.a.div(r||(r=Object(O.a)(["\n  margin-bottom: 8px;\n"]))),S=function(t){var e=t.text,n=t.id,r=t.index;return Object(m.jsx)(v.b,{draggableId:String(n),index:r,children:function(t){return Object(m.jsx)(I,Object(b.a)(Object(b.a)(Object(b.a)({ref:t.innerRef},t.draggableProps),t.dragHandleProps),{},{children:Object(m.jsx)(g.a,{children:Object(m.jsx)(y.a,{children:Object(m.jsx)(D.a,{children:e})})})}))}})},T=n(87),E=n(88),C=n(46),_=n(15),w=n(9),R=function(t){Object(f.a)(n,t);var e=Object(x.a)(n);function n(){var t;Object(j.a)(this,n);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(t=e.call.apply(e,[this].concat(a))).state={formOpen:!1,text:""},t.openForm=function(){t.setState({formOpen:!0})},t.closeForm=function(e){t.setState({formOpen:!1})},t.handleInputChange=function(e){t.setState({text:e.target.value})},t.handleAddList=function(){var e=t.props.dispatch,n=t.state.text;n&&(t.setState({text:""}),e(Object(w.addList)(n)))},t.handleAddCard=function(){var e=t.props,n=e.dispatch,r=e.listID,a=t.state.text;a&&(t.setState({text:""}),n(Object(w.addCard)(r,a)))},t.renderAddButton=function(){var e=t.props.list,n=e?"Add another list":"Add another card",r=e?1:.5,a=e?"white":"inherit",c=e?"rgba(0, 0, 0, .15)":"inherit";return Object(m.jsxs)("div",{onClick:t.openForm,style:Object(b.a)(Object(b.a)({},B.opentForButtonGroup),{},{opacity:r,color:a,background:c}),children:[Object(m.jsx)(T.a,{children:"add"}),Object(m.jsx)("p",{children:n})]})},t.renderForm=function(){var e=t.props.list,n=e?"Enter list title . . .":"Enter a title for this card ...",r=e?"Add List":"Add Card";return Object(m.jsxs)("div",{children:[Object(m.jsx)(g.a,{style:{overflow:"visible",minHeight:80,minWidth:272,padding:"6px 8px 2px"},children:Object(m.jsx)(C.a,{placeholder:n,autoFocus:!0,onBlur:t.closeForm,value:t.state.text,onChange:t.handleInputChange,style:{resize:"none",width:"100%",outline:"none",border:"none"}})}),Object(m.jsxs)("div",{style:B.formButtonGroup,children:[Object(m.jsx)(E.a,{onMouseDown:e?t.handleAddList:t.handleAddCard,variant:"contained",style:{color:"white",backgroundColor:"#5aac44"},children:r}),Object(m.jsx)(T.a,{style:{marginLeft:8,cursor:"pointer"},children:"close"})]})]})},t}return Object(h.a)(n,[{key:"render",value:function(){return this.state.formOpen?this.renderForm():this.renderAddButton()}}]),n}(l.a.Component),B={opentForButtonGroup:{display:"flex",alignItems:"center",cursor:"pointer",borderRadius:3,height:36,width:272,paddingLeft:10},formButtonGroup:{marginTop:8,display:"flex",alignItems:"center"}},L=Object(_.b)()(R),k=A.a.div(a||(a=Object(O.a)(["\n  background-color: #dfe3e6;\n  border-radius: 3px;\n  width: 300px;\n  padding: 8px;\n  margin-right: 8px;\n"]))),N=function(t){var e=t.title,n=t.cards,r=t.listID,a=t.index;return Object(m.jsx)(v.b,{draggableId:String(r),index:a,children:function(t){return Object(m.jsx)(k,Object(b.a)(Object(b.a)(Object(b.a)({},t.draggableProps),{},{ref:t.innerRef},t.dragHandleProps),{},{children:Object(m.jsx)(v.c,{droppableId:String(r),type:"card",children:function(t){return Object(m.jsxs)("div",Object(b.a)(Object(b.a)({},t.droppableProps),{},{ref:t.innerRef,children:[Object(m.jsx)("h3",{style:{marginBottom:8},children:e}),n.map((function(t,e){return Object(m.jsx)(S,{index:e,text:t.text,id:t.id},t.id)})),t.placeholder,Object(m.jsx)(L,{listID:r})]}))}})}))}})},P=n(47),H=function(t){var e=t.onClose,n=t.photos,r=t.onSetBg,a=Object(s.useState)([]),c=Object(P.a)(a,2),i=c[0],o=c[1];return Object(s.useEffect)((function(){n.then((function(t){o(t.response.results)}))}),[]),Object(m.jsx)("div",{onClick:e,style:G.modal,children:Object(m.jsxs)("div",{style:G.container,children:[Object(m.jsx)("h1",{style:{marginTop:10},children:"Choose background"}),Object(m.jsx)("div",{style:G.container,children:i&&i.map((function(t,e){return Object(m.jsx)("div",{onClick:function(){return r(t.urls.full)},style:Object(b.a)({backgroundImage:"url(".concat(t.urls.thumb,")")},G.image)},e)}))})]})})},G={modal:{position:"absolute",width:"100%",height:"100%",backgroundColor:"rgba(20, 22, 24, 0.2)",zIndex:"10"},container:{width:"500px",margin:"50px auto",display:"flex",flexWrap:"wrap",backgroundColor:"#fff",justifyContent:"center",zIndex:"15",borderRadius:5},image:{width:"100px",height:"100px",margin:10,cursor:"pointer"}},F=n(44),z=A.a.div(c||(c=Object(O.a)(["\n  display: flex;\n  align-items: flex-start;\n"]))),J=A.a.div(i||(i=Object(O.a)(["\n  display: flex;\n  justify-content: space-between;\n  margin: 10px 0;\n"]))),M=A.a.h1(o||(o=Object(O.a)(["\n  font-family: Arial;\n"]))),V=A.a.button(d||(d=Object(O.a)(["\n  border-style: none;\n  border-radius: 3px;\n  height: 36px;\n  width: 150px;\n  padding-left: 10;\n  background-color: #5aac44;\n  color: white;\n  cursor: pointer;\n  outline: none;\n"]))),W=Object(F.a)({accessKey:"x_3ldezigzJBJ1VSwdJnL1GLJdm93x44xmD4RnyTBGI",headers:{"X-Custom-Header":"foo"}}),Y=function(t){Object(f.a)(n,t);var e=Object(x.a)(n);function n(){var t;Object(j.a)(this,n);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(t=e.call.apply(e,[this].concat(a))).state={bg:!1,currentBg:"https://images.unsplash.com/photo-1580763543521-dc54d5be9695?crop=entropy&cs=srgb&fm=jpg&ixid=MnwyMjExMTl8MHwxfHNlYXJjaHw2fHx3YWxsc3xlbnwwfDB8fGdyZWVufDE2MTc3NjYzNDQ&ixlib=rb-1.2.1&q=85",photos:W.search.getPhotos({query:"walls",page:1,perPage:10,color:"green",orientation:"landscape"})},t.onDragEnd=function(e){var n=e.destination,r=e.source,a=e.draggableId,c=e.type;n&&t.props.dispatch(Object(w.sort)(r.droppableId,n.droppableId,r.index,n.index,a,c))},t.onClose=function(){t.setState({bg:!1})},t.onSetBg=function(e){t.setState({currentBg:e})},t}return Object(h.a)(n,[{key:"render",value:function(){var t=this,e=this.props.lists;return Object(m.jsxs)(m.Fragment,{children:[this.state.bg&&Object(m.jsx)(H,{photos:this.state.photos,onClose:this.onClose,onSetBg:this.onSetBg}),Object(m.jsx)(v.a,{onDragEnd:this.onDragEnd,children:Object(m.jsxs)("div",{style:{padding:"20px",backgroundImage:"url(".concat(this.state.currentBg,")"),backgroundRepeat:"no-repeat",backgroundSize:"cover",height:"100%"},children:[Object(m.jsxs)(J,{children:[Object(m.jsx)(M,{children:"Trello"}),Object(m.jsx)(V,{onClick:function(){return t.setState({bg:!0})},children:"Set background"})]}),Object(m.jsx)(v.c,{droppableId:"all-lists",direction:"horizontal",type:"list",children:function(t){return Object(m.jsxs)(z,Object(b.a)(Object(b.a)({},t.droppableProps),{},{ref:t.innerRef,children:[e.map((function(t,e){return Object(m.jsx)(N,{listID:t.id,title:t.title,cards:t.cards,index:e},t.id)})),Object(m.jsx)(L,{list:!0})]}))}})]})})]})}}]),n}(s.Component),q=Object(_.b)((function(t){return{lists:t.lists}}))(Y),X=n(12),K=n(21),Q=[{title:"To do",id:"list-".concat(0),cards:[{id:"card-".concat(0),text:"to be happy"},{id:"card-".concat(1),text:"to be thankful"}]}],Z=1,U=4,$=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Q,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case w.CONSTANTS.ADD_LIST:var n={title:e.payload,cards:[],id:"list-".concat(Z)};return Z+=1,[].concat(Object(K.a)(t),[n]);case w.CONSTANTS.ADD_CARD:var r={text:e.payload.text,id:"card-".concat(U)};U+=1;var a=t.map((function(t){return t.id===e.payload.listID?Object(b.a)(Object(b.a)({},t),{},{cards:[].concat(Object(K.a)(t.cards),[r])}):t}));return a;case w.CONSTANTS.DRAG_HAPPENED:var c=e.payload,i=c.droppableIdStart,o=c.droppableIdEnd,d=c.droppableIndexStart,s=c.droppableIndexEnd,l=c.type,p=Object(K.a)(t);if("list"===l){var u=p.splice(d,1);return p.splice.apply(p,[s,0].concat(Object(K.a)(u))),p}if(i===o){var j,h=t.find((function(t){return i===t.id})),f=h.cards.splice(d,1);(j=h.cards).splice.apply(j,[s,0].concat(Object(K.a)(f)))}if(i!==o){var x,O=t.find((function(t){return i===t.id})),g=O.cards.splice(d,1),D=t.find((function(t){return o===t.id}));(x=D.cards).splice.apply(x,[s,0].concat(Object(K.a)(g)))}return p;default:return t}},tt=Object(X.c)({lists:$}),et=Object(X.e)(tt);n(65);u.a.render(Object(m.jsx)(_.a,{store:et,children:Object(m.jsx)(q,{})}),document.getElementById("root"))},9:function(t,e,n){"use strict";n.d(e,"CONSTANTS",(function(){return c}));var r=n(37);n.d(e,"addList",(function(){return r.a})),n.d(e,"sort",(function(){return r.b}));var a=n(38);n.d(e,"addCard",(function(){return a.a}));n(39);var c={ADD_CARD:"ADD_CARD",ADD_LIST:"ADD_LIST",DRAG_HAPPENED:"DRAG_HAPPENED",EDIT_CARD:"EDIT_CARD",DELETE_CARD:"DELETE_CARD",EDIT_LIST_TITLE:"EDIT_LIST_TITLE",DELETE_LIST:"DELETE_LIST",SET_ACTIVE_BOARD:"SET_ACTIVE_BOARD",ADD_BOARD:"ADD_BOARD"}}},[[67,1,2]]]);
//# sourceMappingURL=main.ce07e0aa.chunk.js.map