(self.webpackChunksakurairo_scripts=self.webpackChunksakurairo_scripts||[]).push([[470],{9470:()=>{!function(){if(("undefined"==typeof self||self.Prism)&&self.document&&Function.prototype.bind){var e,s,t={gradient:{create:(e={},s=function(s){if(e[s])return e[s];var t=s.match(/^(\b|\B-[a-z]{1,10}-)((?:repeating-)?(?:linear|radial)-gradient)/),i=t&&t[1],a=t&&t[2],r=s.replace(/^(?:\b|\B-[a-z]{1,10}-)(?:repeating-)?(?:linear|radial)-gradient\(|\)$/g,"").split(/\s*,\s*/);return a.indexOf("linear")>=0?e[s]=function(e,s,t){var i="180deg";return/^(?:-?(?:\d+(?:\.\d+)?|\.\d+)(?:deg|rad)|to\b|top|right|bottom|left)/.test(t[0])&&(i=t.shift()).indexOf("to ")<0&&(i.indexOf("top")>=0?i=i.indexOf("left")>=0?"to bottom right":i.indexOf("right")>=0?"to bottom left":"to bottom":i.indexOf("bottom")>=0?i=i.indexOf("left")>=0?"to top right":i.indexOf("right")>=0?"to top left":"to top":i.indexOf("left")>=0?i="to right":i.indexOf("right")>=0?i="to left":e&&(i.indexOf("deg")>=0?i=90-parseFloat(i)+"deg":i.indexOf("rad")>=0&&(i=Math.PI/2-parseFloat(i)+"rad"))),s+"("+i+","+t.join(",")+")"}(i,a,r):a.indexOf("radial")>=0?e[s]=function(e,s,t){if(t[0].indexOf("at")<0){var i="center",a="ellipse",r="farthest-corner";if(/\bcenter|top|right|bottom|left\b|^\d+/.test(t[0])&&(i=t.shift().replace(/\s*-?\d+(?:rad|deg)\s*/,"")),/\bcircle|ellipse|closest|farthest|contain|cover\b/.test(t[0])){var n=t.shift().split(/\s+/);!n[0]||"circle"!==n[0]&&"ellipse"!==n[0]||(a=n.shift()),n[0]&&(r=n.shift()),"cover"===r?r="farthest-corner":"contain"===r&&(r="clothest-side")}return s+"("+a+" "+r+" at "+i+","+t.join(",")+")"}return s+"("+t.join(",")+")"}(0,a,r):e[s]=a+"("+r.join(",")+")"},function(){new Prism.plugins.Previewer("gradient",(function(e){return this.firstChild.style.backgroundImage="",this.firstChild.style.backgroundImage=s(e),!!this.firstChild.style.backgroundImage}),"*",(function(){this._elt.innerHTML="<div></div>"}))}),tokens:{gradient:{pattern:/(?:\b|\B-[a-z]{1,10}-)(?:repeating-)?(?:linear|radial)-gradient\((?:(?:rgb|hsl)a?\(.+?\)|[^\)])+\)/gi,inside:{function:/[\w-]+(?=\()/,punctuation:/[(),]/}}},languages:{css:!0,less:!0,sass:[{lang:"sass",before:"punctuation",inside:"inside",root:Prism.languages.sass&&Prism.languages.sass["variable-line"]},{lang:"sass",before:"punctuation",inside:"inside",root:Prism.languages.sass&&Prism.languages.sass["property-line"]}],scss:!0,stylus:[{lang:"stylus",before:"func",inside:"rest",root:Prism.languages.stylus&&Prism.languages.stylus["property-declaration"].inside},{lang:"stylus",before:"func",inside:"rest",root:Prism.languages.stylus&&Prism.languages.stylus["variable-declaration"].inside}]}},angle:{create:function(){new Prism.plugins.Previewer("angle",(function(e){var s,t,i=parseFloat(e),a=e.match(/[a-z]+$/i);if(!i||!a)return!1;switch(a=a[0]){case"deg":s=360;break;case"grad":s=400;break;case"rad":s=2*Math.PI;break;case"turn":s=1}return t=100*i/s,t%=100,this[(i<0?"set":"remove")+"Attribute"]("data-negative",""),this.querySelector("circle").style.strokeDasharray=Math.abs(t)+",500",!0}),"*",(function(){this._elt.innerHTML='<svg viewBox="0 0 64 64"><circle r="16" cy="32" cx="32"></circle></svg>'}))},tokens:{angle:/(?:\b|\B-|(?=\B\.))(?:\d+(?:\.\d+)?|\.\d+)(?:deg|g?rad|turn)\b/i},languages:{css:!0,less:!0,markup:{lang:"markup",before:"punctuation",inside:"inside",root:Prism.languages.markup&&Prism.languages.markup.tag.inside["attr-value"]},sass:[{lang:"sass",inside:"inside",root:Prism.languages.sass&&Prism.languages.sass["property-line"]},{lang:"sass",before:"operator",inside:"inside",root:Prism.languages.sass&&Prism.languages.sass["variable-line"]}],scss:!0,stylus:[{lang:"stylus",before:"func",inside:"rest",root:Prism.languages.stylus&&Prism.languages.stylus["property-declaration"].inside},{lang:"stylus",before:"func",inside:"rest",root:Prism.languages.stylus&&Prism.languages.stylus["variable-declaration"].inside}]}},color:{create:function(){new Prism.plugins.Previewer("color",(function(e){return this.style.backgroundColor="",this.style.backgroundColor=e,!!this.style.backgroundColor}))},tokens:{color:[Prism.languages.css.hexcode].concat(Prism.languages.css.color)},languages:{css:!1,less:!0,markup:{lang:"markup",before:"punctuation",inside:"inside",root:Prism.languages.markup&&Prism.languages.markup.tag.inside["attr-value"]},sass:[{lang:"sass",before:"punctuation",inside:"inside",root:Prism.languages.sass&&Prism.languages.sass["variable-line"]},{lang:"sass",inside:"inside",root:Prism.languages.sass&&Prism.languages.sass["property-line"]}],scss:!1,stylus:[{lang:"stylus",before:"hexcode",inside:"rest",root:Prism.languages.stylus&&Prism.languages.stylus["property-declaration"].inside},{lang:"stylus",before:"hexcode",inside:"rest",root:Prism.languages.stylus&&Prism.languages.stylus["variable-declaration"].inside}]}},easing:{create:function(){new Prism.plugins.Previewer("easing",(function(e){var s=(e={linear:"0,0,1,1",ease:".25,.1,.25,1","ease-in":".42,0,1,1","ease-out":"0,0,.58,1","ease-in-out":".42,0,.58,1"}[e]||e).match(/-?(?:\d+(?:\.\d+)?|\.\d+)/g);if(4===s.length){s=s.map((function(e,s){return 100*(s%2?1-e:e)})),this.querySelector("path").setAttribute("d","M0,100 C"+s[0]+","+s[1]+", "+s[2]+","+s[3]+", 100,0");var t=this.querySelectorAll("line");return t[0].setAttribute("x2",s[0]),t[0].setAttribute("y2",s[1]),t[1].setAttribute("x2",s[2]),t[1].setAttribute("y2",s[3]),!0}return!1}),"*",(function(){this._elt.innerHTML='<svg viewBox="-20 -20 140 140" width="100" height="100"><defs><marker id="prism-previewer-easing-marker" viewBox="0 0 4 4" refX="2" refY="2" markerUnits="strokeWidth"><circle cx="2" cy="2" r="1.5" /></marker></defs><path d="M0,100 C20,50, 40,30, 100,0" /><line x1="0" y1="100" x2="20" y2="50" marker-start="url(#prism-previewer-easing-marker)" marker-end="url(#prism-previewer-easing-marker)" /><line x1="100" y1="0" x2="40" y2="30" marker-start="url(#prism-previewer-easing-marker)" marker-end="url(#prism-previewer-easing-marker)" /></svg>'}))},tokens:{easing:{pattern:/\bcubic-bezier\((?:-?(?:\d+(?:\.\d+)?|\.\d+),\s*){3}-?(?:\d+(?:\.\d+)?|\.\d+)\)\B|\b(?:linear|ease(?:-in)?(?:-out)?)(?=\s|[;}]|$)/i,inside:{function:/[\w-]+(?=\()/,punctuation:/[(),]/}}},languages:{css:!0,less:!0,sass:[{lang:"sass",inside:"inside",before:"punctuation",root:Prism.languages.sass&&Prism.languages.sass["variable-line"]},{lang:"sass",inside:"inside",root:Prism.languages.sass&&Prism.languages.sass["property-line"]}],scss:!0,stylus:[{lang:"stylus",before:"hexcode",inside:"rest",root:Prism.languages.stylus&&Prism.languages.stylus["property-declaration"].inside},{lang:"stylus",before:"hexcode",inside:"rest",root:Prism.languages.stylus&&Prism.languages.stylus["variable-declaration"].inside}]}},time:{create:function(){new Prism.plugins.Previewer("time",(function(e){var s=parseFloat(e),t=e.match(/[a-z]+$/i);return!(!s||!t)&&(t=t[0],this.querySelector("circle").style.animationDuration=2*s+t,!0)}),"*",(function(){this._elt.innerHTML='<svg viewBox="0 0 64 64"><circle r="16" cy="32" cx="32"></circle></svg>'}))},tokens:{time:/(?:\b|\B-|(?=\B\.))(?:\d+(?:\.\d+)?|\.\d+)m?s\b/i},languages:{css:!0,less:!0,markup:{lang:"markup",before:"punctuation",inside:"inside",root:Prism.languages.markup&&Prism.languages.markup.tag.inside["attr-value"]},sass:[{lang:"sass",inside:"inside",root:Prism.languages.sass&&Prism.languages.sass["property-line"]},{lang:"sass",before:"operator",inside:"inside",root:Prism.languages.sass&&Prism.languages.sass["variable-line"]}],scss:!0,stylus:[{lang:"stylus",before:"hexcode",inside:"rest",root:Prism.languages.stylus&&Prism.languages.stylus["property-declaration"].inside},{lang:"stylus",before:"hexcode",inside:"rest",root:Prism.languages.stylus&&Prism.languages.stylus["variable-declaration"].inside}]}}},i=/(?:^|\s)token(?=$|\s)/,a=/(?:^|\s)active(?=$|\s)/g,r=/(?:^|\s)flipped(?=$|\s)/g,n=function(e,s,t,i){this._elt=null,this._type=e,this._clsRegexp=RegExp("(?:^|\\s)"+e+"(?=$|\\s)"),this._token=null,this.updater=s,this._mouseout=this.mouseout.bind(this),this.initializer=i;var a=this;t||(t=["*"]),Array.isArray(t)||(t=[t]),t.forEach((function(e){"string"!=typeof e&&(e=e.lang),n.byLanguages[e]||(n.byLanguages[e]=[]),n.byLanguages[e].indexOf(a)<0&&n.byLanguages[e].push(a)})),n.byType[e]=this};for(var l in n.prototype.init=function(){this._elt||(this._elt=document.createElement("div"),this._elt.className="prism-previewer prism-previewer-"+this._type,document.body.appendChild(this._elt),this.initializer&&this.initializer())},n.prototype.isDisabled=function(e){do{if(e.hasAttribute&&e.hasAttribute("data-previewers"))return-1===(e.getAttribute("data-previewers")||"").split(/\s+/).indexOf(this._type)}while(e=e.parentNode);return!1},n.prototype.check=function(e){if(!i.test(e.className)||!this.isDisabled(e)){do{if(i.test(e.className)&&this._clsRegexp.test(e.className))break}while(e=e.parentNode);e&&e!==this._token&&(this._token=e,this.show())}},n.prototype.mouseout=function(){this._token.removeEventListener("mouseout",this._mouseout,!1),this._token=null,this.hide()},n.prototype.show=function(){var e,s,t,i,a;if(this._elt||this.init(),this._token)if(this.updater.call(this._elt,this._token.textContent)){this._token.addEventListener("mouseout",this._mouseout,!1);var n=(e=this._token,s=e.getBoundingClientRect(),t=s.left,i=s.top,a=document.documentElement.getBoundingClientRect(),t-=a.left,{top:i-=a.top,right:innerWidth-t-s.width,bottom:innerHeight-i-s.height,left:t,width:s.width,height:s.height});this._elt.className+=" active",n.top-this._elt.offsetHeight>0?(this._elt.className=this._elt.className.replace(r,""),this._elt.style.top=n.top+"px",this._elt.style.bottom=""):(this._elt.className+=" flipped",this._elt.style.bottom=n.bottom+"px",this._elt.style.top=""),this._elt.style.left=n.left+Math.min(200,n.width/2)+"px"}else this.hide()},n.prototype.hide=function(){this._elt.className=this._elt.className.replace(a,"")},n.byLanguages={},n.byType={},n.initEvents=function(e,s){var t=[];n.byLanguages[s]&&(t=t.concat(n.byLanguages[s])),n.byLanguages["*"]&&(t=t.concat(n.byLanguages["*"])),e.addEventListener("mouseover",(function(e){var s=e.target;t.forEach((function(e){e.check(s)}))}),!1)},Prism.plugins.Previewer=n,Prism.hooks.add("before-highlight",(function(e){for(var s in t){var i=t[s].languages;if(e.language&&i[e.language]&&!i[e.language].initialized){var a=i[e.language];Array.isArray(a)||(a=[a]),a.forEach((function(a){var r,n,l,o;!0===a?(r="important",n=e.language,a=e.language):(r=a.before||"important",n=a.inside||a.lang,l=a.root||Prism.languages,o=a.skip,a=e.language),!o&&Prism.languages[a]&&(Prism.languages.insertBefore(n,r,t[s].tokens,l),e.grammar=Prism.languages[a],i[e.language]={initialized:!0})}))}}})),Prism.hooks.add("after-highlight",(function(e){(n.byLanguages["*"]||n.byLanguages[e.language])&&n.initEvents(e.element,e.language)})),t)t[l].create()}}()}}]);
//# sourceMappingURL=470.js.map