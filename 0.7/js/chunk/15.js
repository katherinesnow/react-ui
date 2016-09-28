webpackJsonp_name_([15],{3:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var u=n(1),i=a(u),s=n(5),c=function(e){function t(){return l(this,t),r(this,e.apply(this,arguments))}return o(t,e),t.prototype.componentDidMount=function(){window.prettyPrint(null,(0,s.findDOMNode)(this.code))},t.prototype.render=function(){var e=this.props.children.split("\n").filter(function(e){return e.length>0}),t=e[0]?/^(\s*)/.exec(e[0])[1].length:0,n=new RegExp("^(\\s{"+t+"})");return e=e.map(function(e){return e.replace(n,"")}),i.default.createElement("div",{className:"code"},i.default.createElement("pre",{className:"prettyprint"},e.join("\n")))},t}(u.Component);c.propTypes={children:u.PropTypes.string},c.defaultProps={children:""},t.default=c},4:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}var l=n(1),r=a(l),o=n(2),u=a(o),i=function(e){return r.default.createElement("div",{className:(0,u.default)("docs-example",e.className)},e.children)};i.propTypes={children:l.PropTypes.any,className:l.PropTypes.string},e.exports=i},162:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var u=n(1),i=a(u),s=n(3),c=a(s),f=n(4),d=a(f),p=n(9),m=n(10),h=[i.default.createElement(p.Icon,{key:"f",size:2,style:{color:"gold"}},""),i.default.createElement(p.Icon,{key:"b",size:2,style:{color:"gold"}},"")],y=[i.default.createElement(p.Icon,{key:"f",size:2,icon:"favorite-outline",style:{color:"red"}}),i.default.createElement(p.Icon,{key:"b",size:2,icon:"favorite",style:{color:"red"}})];e.exports=function(e){function t(n){l(this,t);var a=r(this,e.call(this,n));return a.state={readOnly:!1,maxValue:10,value:3,icons:h},a}return o(t,e),t.prototype.render=function(){var e=this;return i.default.createElement("div",null,i.default.createElement("div",{className:"header"},i.default.createElement("h1",null,"Rating"),i.default.createElement(m.Cn,{tag:"h2"},"评分")),i.default.createElement("div",{className:"content"},i.default.createElement(m.Cn,null,i.default.createElement(c.default,null,"<Rating\n  className={string}  // class\n  icons={array}       // 数组，长度为2，值为element，两个元素宽度高度必须相同，0为未选中，1为选中\n  maxValue={int}      // 最大值，正整数，默认为 5\n  onChange={function} // 当选项改变时回调方法，参数为 value\n  readOnly={bool}     // 为 true 时，只读。默认为 false\n  value={number}      // 值，整数。只读状态下，支持小数\n/>")),i.default.createElement(m.En,null,i.default.createElement(c.default,null,"<Rating\n  className={string}  // class\n  icons={[element]}   // array, 2 elements, first element is front, second is background\n  maxValue={int}      // positive integer, default is 5\n  onChange={function(value)}\n  readOnly={bool}     // default is false\n  value={number}      // positive integer, if readOnly is true, support float\n/>")),i.default.createElement("h2",{className:"subhead"},"Example"),i.default.createElement(m.Cn,null,"演示代码star和heart用了两个不同的icon库，所以大小稍有不同"),i.default.createElement(c.default,null,"const STARS = [\n  <Icon size={2} style={{color: 'gold'}}>&#xe607;</Icon>,\n  <Icon size={2} style={{color: 'gold'}}>&#xe606;</Icon>\n];\n\nconst HEARTS = [\n  <Icon size={2} icon=\"favorite-outline\" style={{color: 'red'}} />,\n  <Icon size={2} icon=\"favorite\" style={{color: 'red'}} />\n]\n"),i.default.createElement(d.default,null,i.default.createElement(p.Rating,{maxValue:this.state.maxValue,theme:this.state.theme,icons:this.state.icons,readOnly:this.state.readOnly,value:this.state.value,onChange:function(t){return e.setState({value:t})}}),i.default.createElement("div",{style:{marginBottom:10}},i.default.createElement("span",null,"maxValue: "),i.default.createElement(p.RadioGroup,{inline:!0,onChange:function(t){return e.setState({maxValue:t})},value:this.state.maxValue,data:[5,10,12,20]})),i.default.createElement("div",null,i.default.createElement(p.Checkbox,{onChange:function(t){return e.setState({icons:t?y:h})}},"Set heart icon")),i.default.createElement("div",null,i.default.createElement(p.Checkbox,{value:"readOnly",onChange:function(t){return e.setState({readOnly:t})},text:"readOnly"})),i.default.createElement("div",{style:{marginBottom:10}},i.default.createElement("span",null,"value: "),i.default.createElement(p.Input,{onChange:function(t){return e.setState({value:t})},type:"number",value:this.state.value}))),i.default.createElement(c.default,null,'<Rating maxValue={this.state.maxValue}\n  theme={this.state.theme}\n  icons={this.state.icons}\n  readOnly={this.state.readOnly}\n  value={this.state.value}\n  onChange={value => this.setState({ value })}\n/>\n\n{/* =================== state control ====================== */}\n<div style={{marginBottom: 10}}>\n  <span>maxValue: </span>\n  <RadioGroup inline\n    onChange={maxValue => this.setState({ maxValue })}\n    value={this.state.maxValue}\n    data={[5, 10, 12, 20]} />\n</div>\n\n<div>\n  <Checkbox onChange={\n    checked => this.setState({\n      icons: checked ? HEARTS : STARS\n    })}>\n    Set heart icon\n  </Checkbox>\n</div>\n\n<div>\n  <Checkbox value="readOnly" onChange={readOnly => this.setState({ readOnly })} text={\'readOnly\'} />\n</div>\n\n<div style={{marginBottom: 10}}>\n  <span>value: </span>\n  <Input onChange={value => this.setState({ value })} type="number" value={this.state.value} />\n</div>')))},t}(u.Component)}});