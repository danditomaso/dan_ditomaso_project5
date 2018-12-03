(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{26:function(e,t,a){e.exports=a(63)},31:function(e,t,a){},35:function(e,t,a){},63:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(22),l=a.n(c);a(31),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var s=a(65),o=a(66),i=a(67),m=a(12),u=a(6),d=a(7),h=a(9),f=a(8),p=a(10),v={simpsons:{url:"https://thesimpsonsquoteapi.glitch.me/quotes/",apiKey:"",requiresKey:!1}},g=function(e){function t(){var e;return Object(u.a)(this,t),(e=Object(h.a)(this,Object(f.a)(t).call(this))).handleChange=function(t){e.setState(Object(m.a)({},t.target.id,t.target.value))},e.state={api:v,themes:[]},e}return Object(p.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"ThemePicker"},r.a.createElement("label",{htmlFor:"ThemePicker"},"Select A Card Theme"),this.props.themes.map(function(t){return r.a.createElement("div",{className:"theme-picker"},r.a.createElement("button",{onChange:e.handleChange,value:t,id:t},t),r.a.createElement("label",{htmlFor:t}))}))}}]),t}(n.Component),E=function(e){function t(){var e;return Object(u.a)(this,t),(e=Object(h.a)(this,Object(f.a)(t).call(this))).handleChange=function(t){t.preventDefault(),e.setState(Object(m.a)({},t.target.id,t.target.value))},e.gotoGame=function(t){t.preventDefault(),e.props.history.push("/game/")},e.updateThemePickerOptions=function(){Object.entries(e.state.api);e.setState({themes:Object.keys(e.state.api)})},e.state={api:v,currentAPI:v.simpsons.url,difficulty:"medium",name:"Dan",themes:[]},e}return Object(p.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){this.updateThemePickerOptions()}},{key:"render",value:function(){return r.a.createElement("div",{className:"GamePicker"},r.a.createElement("h1",null,"Welcome to the Memory Game!"),r.a.createElement("form",{action:"",className:"GamePicker-Form",onSubmit:this.gotoGame},r.a.createElement("label",{htmlFor:"name"},"Enter Name:"),r.a.createElement("input",{type:"text",name:"name",placeholder:"Name",id:"name",value:this.state.name,onChange:this.handleChange}),r.a.createElement("label",{htmlFor:"easy"},"Easy"),r.a.createElement("input",{type:"radio",name:"difficulty",id:"difficulty",value:"easy",onChange:this.handleChange}),r.a.createElement("label",{htmlFor:"medium"},"Medium"),r.a.createElement("input",{type:"radio",name:"difficulty",id:"difficulty",value:"medium",checked:!0,onChange:this.handleChange}),r.a.createElement("label",{htmlFor:"hard"},"Hard"),r.a.createElement("input",{type:"radio",name:"difficulty",id:"difficulty",value:"hard",onChange:this.handleChange}),r.a.createElement(g,{themes:this.state.themes}),r.a.createElement("button",{type:"submit",id:"gameSubmit"},"Lets Play!")))}}]),t}(n.Component),b=a(11),C=a(15),y=a.n(C),k=a(23),O=(a(35),a(24)),j=a.n(O),N=function(e){return r.a.createElement("h4",{className:"score"},e.name," Score: ",e.score)},S=function(e){return r.a.createElement("div",null,r.a.createElement("h2",null,e.title),r.a.createElement(N,{score:e.currentScore,name:e.playerName}))},w=(a(57),function(e){var t;return(t=[]).concat.apply(t,Object(b.a)(e))}),F=function(e){for(var t=e.length-1;t>0;t--){var a=Math.floor(Math.random()*(t+1)),n=e[t];e[t]=e[a],e[a]=n}return e},M=function(e){var t=e.selected,a=e.id,n=e.solved,c=e.image,l=e.click,s=w(n),o=t.includes(a.toString())||s.includes(a.toString());return r.a.createElement("div",{className:o?"card selected":"card",onClick:l,id:a},r.a.createElement("div",{className:"front",id:a},"?"),r.a.createElement("div",{className:"back",id:a},r.a.createElement("img",{className:"card-image",src:c})))},P=function(){return r.a.createElement("div",null,r.a.createElement("footer",{className:"Footer"},r.a.createElement("span",null,"Designed By Dan Ditomaso 2018")))},D=function(e){function t(){var e;return Object(u.a)(this,t),(e=Object(h.a)(this,Object(f.a)(t).call(this))).getCardImages=Object(k.a)(y.a.mark(function t(){var a,n;return y.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return a=e.state.numOfRequestedImages.map(function(t){return j.a.get(e.state.currentAPI)}),t.prev=1,t.next=4,Promise.all(a);case 4:t.t0=function(e){return e.data},n=t.sent.map(t.t0),console.log(n),e.setState({cards:n}),e.shuffleCards(),t.next=14;break;case 11:t.prev=11,t.t1=t.catch(1),console.error(t.t1);case 14:case"end":return t.stop()}},t,this,[[1,11]])})),e.shuffleCards=function(){var t=Array.from(e.state.cards);console.log(e.state.cards),t=t.concat(t);var a=w(t);e.setState({shuffledCards:F(a)})},e.checkForMatch=function(t){e.state.selectedCard.length<=1?e.setState({selectedCard:Object(b.a)(e.state.selectedCard).concat([t])}):e.checkForSolved()},e.checkForSolved=function(){var t=e.state,a=t.selectedCard,n=t.shuffledCards,r=t.score,c=t.correctMatches;n[a[0]].character==n[a[1]].character?(console.log("match found"),e.setState({correctMatches:Object(b.a)(c).concat([a]),score:r+1,selectedCard:[]})):(console.log("else state hit on check for solved."),e.setState({selectedCard:[]}))},e.handleClick=function(t){t.preventDefault();var a=t.target.id;e.checkForMatch(a)},e.state={api:v,gameTitle:"Memory Game!",currentAPI:v.simpsons.url,score:0,timer:0,isShowing:!0,cards:[],shuffledCards:[],numOfRequestedImages:[0,1,2,3,4,5,6,7,8,9,10,11],correctMatches:[],flippedCards:[],selectedCard:[]},e}return Object(p.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){this.getCardImages()}},{key:"render",value:function(){var e=this,t=this.state,a=t.selectedCard,n=t.correctMatches,c=t.shuffledCards;return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement(S,{title:this.state.gameTitle,currentScore:this.state.score})),r.a.createElement("div",{className:"GameBoard"},c.map(function(t,c){return r.a.createElement(M,{key:t.image+t.name+c,id:c,name:t.character,click:e.handleClick,selected:a,solved:n,image:t.image})})),r.a.createElement(P,null))}}]),t}(n.Component),I=function(){return r.a.createElement("div",{className:"NotFound"},r.a.createElement("h2",null,"Not Found!!!!!!???!"))},A=function(){return r.a.createElement(s.a,null,r.a.createElement(o.a,null,r.a.createElement(i.a,{exact:!0,path:"/",component:E}),r.a.createElement(i.a,{path:"/game/",component:D}),r.a.createElement(i.a,{component:I})))};l.a.render(r.a.createElement(A,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[26,2,1]]]);
//# sourceMappingURL=main.4aa4594a.chunk.js.map