webpackJsonp_name_([27],{3:function(e,t,r){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function d(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var i=r(1),u=l(i),o=r(5),s=function(e){function t(){return n(this,t),d(this,e.apply(this,arguments))}return a(t,e),t.prototype.componentDidMount=function(){window.prettyPrint(null,(0,o.findDOMNode)(this.code))},t.prototype.render=function(){var e=this.props.children.split("\n").filter(function(e){return e.length>0}),t=e[0]?/^(\s*)/.exec(e[0])[1].length:0,r=new RegExp("^(\\s{"+t+"})");return e=e.map(function(e){return e.replace(r,"")}),u.default.createElement("div",{className:"code"},u.default.createElement("pre",{className:"prettyprint"},e.join("\n")))},t}(i.Component);s.propTypes={children:i.PropTypes.string},s.defaultProps={children:""},t.default=s},4:function(e,t,r){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}var n=r(1),d=l(n),a=r(2),i=l(a),u=function(e){return d.default.createElement("div",{className:(0,i.default)("docs-example",e.className)},e.children)};u.propTypes={children:n.PropTypes.any,className:n.PropTypes.string},e.exports=u},146:function(e,t,r){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function d(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i=r(1),u=l(i),o=r(3),s=l(o),f=r(4),c=l(f),p=r(9),m=r(10),y={border:"solid 1px #ccc",lineHeight:"30px",textAlign:"center"};e.exports=function(e){function t(r){n(this,t);var l=d(this,e.call(this,r));return l.state={grid:"12"},l}return a(t,e),t.prototype.gridChange=function(e){this.setState({grid:e})},t.prototype.renderSingle=function(){for(var e=this.state.grid,t=[],r=1;r<=e;r++)t.push(u.default.createElement(p.Grid,{style:y,key:r,width:1/e},r));return t},t.prototype.renderGroup=function(){for(var e=this.state.grid,t=[],r=1;r<=e;r++)t.push(u.default.createElement("div",{key:r,style:{background:"#fafafa",marginTop:10}},u.default.createElement(p.Grid,{style:{background:"#eee",lineHeight:"30px"},width:r/e},r," / ",e)));return t},t.prototype.render=function(){for(var e=[],t=2;t<=48;t++)e.push(t.toString());return u.default.createElement("div",null,u.default.createElement("div",{className:"header"},u.default.createElement("h1",null,"Grid"),u.default.createElement(m.Cn,{tag:"h2"},"栅格")),u.default.createElement("div",{className:"content"},u.default.createElement(m.Cn,null,"可以实现任意等分的栅格，支持responsive。"),u.default.createElement(m.En,null,"Any decile grid, support responsive."),u.default.createElement(m.Cn,null,u.default.createElement(s.default,null,"<Grid\n  width={n/m}         // 小于1的小数，值为列数/总列数，例如：1/2, 2/5，默认值为1\n  offset={n/m}        // 可选，小于1的小数，值为列数/总列数，例如：1/2, 2/5，默认为0\n  responsive={string} // 可选值为'sm|md|lg|xl'，对应的值为'568px|768px|992px|1200px'，默认值为'md'\n  style={object}\n  className={string}\n/>")),u.default.createElement(m.En,null,u.default.createElement(s.default,null,"<Grid\n  width={n/m}         // fraction, less than 1, example: 1/2, 2/5, default value is 1\n  offset={n/m}        // optional, fraction less than 1, example: 1/2, 2/5, default is 0\n  responsive={string} // option: 'sm(568px)|md(768px}|lg(992px)|xl(1200px)', default is 'md'\n  style={object}\n  className={string}\n/>")),u.default.createElement(m.Cn,null,"ReactUI 的所有表单组件内部都实现了Grid的封装，可以使用grid这个props进行调用。"),u.default.createElement(m.En,null,"All ReactUI FormItem extends Grid, you can just use grid props."),u.default.createElement(c.default,null,u.default.createElement(p.Input,{type:"text",grid:{width:.5,offset:.25,responsive:"md"}})),u.default.createElement(s.default,null,"            <Input type=\"text\" grid={{ width: 1 / 2, offset: 1 / 4, responsive: 'md' }} />"),u.default.createElement(m.Cn,null,"如果只定义宽度，可以再简化为"),u.default.createElement(m.En,null,"If only use width, can simplify use like this."),u.default.createElement(c.default,null,u.default.createElement(p.Input,{type:"text",grid:.5})),u.default.createElement(s.default,null,'            <Input type="text" grid={1 / 2} />'),u.default.createElement("h2",{className:"subhead"},"Example"),u.default.createElement(p.Select,{data:e,value:this.state.grid,onChange:this.gridChange.bind(this)}),u.default.createElement("div",{style:{marginTop:10}},this.renderSingle()),u.default.createElement("div",null,this.renderGroup()),u.default.createElement("h2",{className:"subhead"},"Offset"),u.default.createElement(c.default,null,u.default.createElement(p.Grid,{width:.25,offset:.25,style:y},"offset 1/4"),u.default.createElement(p.Grid,{width:.25,offset:.25,style:y},"offset 1/4"),u.default.createElement(p.Grid,{width:1/3,offset:0,style:y},"offset 0"),u.default.createElement(p.Grid,{width:.5,offset:1/6,style:y},"offset 1/6")),u.default.createElement(s.default,null,"            <Grid width={1 / 4} offset={1 / 4} style={borderGridStyle}>offset 1/4</Grid>\n            <Grid width={1 / 4} offset={1 / 4} style={borderGridStyle}>offset 1/4</Grid>\n            <Grid width={1 / 3} offset={0} style={borderGridStyle}>offset 0</Grid>\n            <Grid width={1 / 2} offset={1 / 6} style={borderGridStyle}>offset 1/6</Grid>"),u.default.createElement(m.Cn,null,u.default.createElement("h2",{className:"subhead"},"嵌套")),u.default.createElement(m.En,null,u.default.createElement("h2",{className:"subhead"},"Nested")),u.default.createElement(c.default,null,u.default.createElement(p.Grid,{style:{background:"#eee"},width:.5},u.default.createElement("div",{style:{textAlign:"center",lineHeight:"30px"}},"1/2"),u.default.createElement(p.Grid,{style:y,width:1/3},"1/3"),u.default.createElement(p.Grid,{style:y,width:2/3},"2/3")),u.default.createElement(p.Grid,{style:{background:"#fafafa"},width:.5},u.default.createElement("div",{style:{textAlign:"center",lineHeight:"30px"}},"1/2"),u.default.createElement(p.Grid,{style:y,width:.2},"1/5"),u.default.createElement(p.Grid,{style:y,width:.4},"2/5"),u.default.createElement(p.Grid,{style:y,width:.4},"2/5"))),u.default.createElement(s.default,null,"            <Grid style={{background: '#eee'}} width={ 1 / 2 }>\n              <div style={{ textAlign: 'center', lineHeight: '30px' }}>1/2</div>\n              <Grid style={borderGridStyle} width={ 1 / 3 }>1/3</Grid>\n              <Grid style={borderGridStyle} width={ 2 / 3 }>2/3</Grid>\n            </Grid>\n            <Grid style={{background: '#fafafa'}} width={ 1 / 2 }>\n              <div style={{ textAlign: 'center', lineHeight: '30px' }}>1/2</div>\n              <Grid style={borderGridStyle} width={ 1 / 5 }>1/5</Grid>\n              <Grid style={borderGridStyle} width={ 2 / 5 }>2/5</Grid>\n              <Grid style={borderGridStyle} width={ 2 / 5 }>2/5</Grid>\n            </Grid>"),u.default.createElement("h2",{className:"subhead"},"Auto Width"),u.default.createElement(m.Cn,null,"如果Grid嵌套在另一个Grid内，并且没有设定width，未设定width的Grid将会平分剩余的width"),u.default.createElement(c.default,null,u.default.createElement(p.Grid,{width:1},u.default.createElement(p.Grid,{style:y,width:.25},"1/4"),u.default.createElement(p.Grid,{style:y},"auto"),u.default.createElement(p.Grid,{style:y},"auto"),u.default.createElement(p.Grid,{style:y},"auto"),u.default.createElement(p.Grid,{style:y},"auto"),u.default.createElement(p.Grid,{style:y},"auto"),u.default.createElement(p.Grid,{style:y},"auto"))),u.default.createElement(s.default,null,"            <Grid width={ 1 }>\n              <Grid style={borderGridStyle} width={ 1 / 4 }>1/4</Grid>\n              <Grid style={borderGridStyle}>auto</Grid>\n              <Grid style={borderGridStyle}>auto</Grid>\n              <Grid style={borderGridStyle}>auto</Grid>\n              <Grid style={borderGridStyle}>auto</Grid>\n              <Grid style={borderGridStyle}>auto</Grid>\n              <Grid style={borderGridStyle}>auto</Grid>\n            </Grid>")))},t}(i.Component)}});