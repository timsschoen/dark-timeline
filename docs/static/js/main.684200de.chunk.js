(this["webpackJsonpdark-timeline"]=this["webpackJsonpdark-timeline"]||[]).push([[0],{124:function(e,a,t){},126:function(e,a,t){},127:function(e,a,t){},128:function(e,a,t){},129:function(e,a,t){},130:function(e,a,t){},131:function(e,a,t){},132:function(e,a,t){},133:function(e,a,t){},134:function(e,a,t){},135:function(e,a,t){},136:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),i=t(27),l=t.n(i),s=(t(34),t(2)),o=t(3),c=t(1),d=t(4),u=t(5),h=(t(35),function(e){Object(u.a)(t,e);var a=Object(d.a)(t);function t(e){var n;return Object(s.a)(this,t),(n=a.call(this,e)).onChange=n.onChange.bind(Object(c.a)(n)),n.characters=[{id:"",value:"All"},{id:"Agnes Nielsen",value:"Agnes Nielsen"},{id:"Alexsander Tiedemann",value:"Alexsander Tiedemann"},{id:"Bartosz Tiedemann",value:"Bartosz Tiedemann"},{id:"Benni W\xf6ller",value:"Benni W\xf6ller"},{id:"Bernd Doppler",value:"Bernd Doppler"},{id:"Charlotte Doppler",value:"Charlotte Doppler"},{id:"Claudia Tiedemann",value:"Claudia Tiedemann"},{id:"Clausen",value:"Clausen"},{id:"Daniel Kahnwald",value:"Daniel Kahnwald"},{id:"Donata Kraus",value:"Donata Kraus"},{id:"Doris Tiedemann",value:"Doris Tiedemann"},{id:"Egon Tiedemann",value:"Egon Tiedemann"},{id:"Elisabeth Doppler",value:"Elisabeth Doppler"},{id:"Ema Nielsen",value:"Ema Nielsen"},{id:"Erik Obendorf",value:"Erik Obendorf"},{id:"Franziska Doppler",value:"Franziska Doppler"},{id:"Greta Doppler",value:"Greta Doppler"},{id:"Gretchen",value:"Gretchen"},{id:"H.G. Tannhaus",value:"H.G. Tannhaus"},{id:"Hannah Kahnwald",value:"Hannah Kahnwald"},{id:"Helge Doppler",value:"Helge Doppler"},{id:"Ines Kahnwald",value:"Ines Kahnwald"},{id:"Jana Nielsen",value:"Jana Nielsen"},{id:"Jonas Kahnwald",value:"Jonas Kahnwald"},{id:"J\xfcrgen Obendorf",value:"J\xfcrgen Obendorf"},{id:"Katharina Nielsen",value:"Katharina Nielsen"},{id:"Mads Nielsen",value:"Mads Nielsen"},{id:"Magnus Nielsen",value:"Magnus Nielsen"},{id:"Martha Nielsen",value:"Martha Nielsen"},{id:"Michael Kahnwald",value:"Michael Kahnwald"},{id:"Mikkel Nielsen",value:"Mikkel Nielsen"},{id:"Noah",value:"Noah"},{id:"Peter Doppler",value:"Peter Doppler"},{id:"Regina Tiedemann",value:"Regina Tiedemann"},{id:"Silja",value:"Silja"},{id:"Torben W\xf6ller",value:"Torben W\xf6ller"},{id:"Tronte Nielsen",value:"Tronte Nielsen"},{id:"Ulla Obendorf",value:"Ulla Obendorf"},{id:"Ulrich Nielsen",value:"Ulrich Nielsen"},{id:"Yasin Friese",value:"Yasin Friese"}],n}return Object(o.a)(t,[{key:"onChange",value:function(e){var a=e.currentTarget.value;""===a&&(a=null),this.props.onChange("character",a)}},{key:"render",value:function(){return r.a.createElement("div",{className:"character-filter header-block"},r.a.createElement("label",{htmlFor:"character-filter"},"character"),r.a.createElement("select",{id:"character-filter",onChange:this.onChange,value:this.props.filters.character||""},this.characters.map((function(e,a){return r.a.createElement("option",{key:"character-filter-".concat(e.id),value:e.id},e.value)}))))}}]),t}(r.a.Component)),p=(t(36),function(e){Object(u.a)(t,e);var a=Object(d.a)(t);function t(e){var n;return Object(s.a)(this,t),(n=a.call(this,e)).onChange=n.onChange.bind(Object(c.a)(n)),n.days=[{id:"",value:"All"},{id:"06-20",value:"Jun 20"},{id:"06-21",value:"Jun 21"},{id:"06-22",value:"Jun 22"},{id:"06-23",value:"Jun 23"},{id:"06-24",value:"Jun 24"},{id:"06-25",value:"Jun 25"},{id:"06-26",value:"Jun 26"},{id:"06-27",value:"Jun 27"},{id:"11-04",value:"Nov 4"},{id:"11-05",value:"Nov 5"},{id:"11-06",value:"Nov 6"},{id:"11-07",value:"Nov 7"},{id:"11-08",value:"Nov 8"},{id:"11-09",value:"Nov 9"},{id:"11-10",value:"Nov 10"},{id:"11-11",value:"Nov 11"},{id:"11-12",value:"Nov 12"}],n}return Object(o.a)(t,[{key:"onChange",value:function(e){var a=e.currentTarget.value;""===a&&(a=null),this.props.onChange("day",a)}},{key:"render",value:function(){return r.a.createElement("div",{className:"day-filter header-block"},r.a.createElement("label",{htmlFor:"day-filter"},"Day"),r.a.createElement("select",{id:"day-filter",onChange:this.onChange,value:this.props.filters.day||""},this.days.map((function(e,a){return r.a.createElement("option",{key:"day-filter-".concat(e.id),value:e.id},e.value)}))))}}]),t}(r.a.Component)),v=t(9),m=t.n(v),f=t(28),g=t.n(f);t(124),t(125);var b=function(e){return r.a.createElement("div",{className:"display-order-toggle"},r.a.createElement(g.a,{id:"display-order-toggle",defaultChecked:!1,icons:!1,onChange:e.onChange}),r.a.createElement("label",{htmlFor:"display-order-toggle"},r.a.createElement(m.a,{source:{chronological:"Viewing in **chronological** order of events",episodic:"Viewing in **televised** episode order"}[e.displayOrder]})))},y=(t(126),function(e){Object(u.a)(t,e);var a=Object(d.a)(t);function t(e){var n;return Object(s.a)(this,t),(n=a.call(this,e)).onChange=n.onChange.bind(Object(c.a)(n)),n.episodes=[{id:"",value:"All"},{id:"s1e01",value:"S1 E01"},{id:"s1e02",value:"S1 E02"},{id:"s1e03",value:"S1 E03"},{id:"s1e04",value:"S1 E04"},{id:"s1e05",value:"S1 E05"},{id:"s1e06",value:"S1 E06"},{id:"s1e07",value:"S1 E07"},{id:"s1e08",value:"S1 E08"},{id:"s1e09",value:"S1 E09"},{id:"s1e10",value:"S1 E10"},{id:"s2e01",value:"S2 E01"},{id:"s2e02",value:"S2 E02"},{id:"s2e03",value:"S2 E03"},{id:"s2e04",value:"S2 E04"},{id:"s2e05",value:"S2 E05"},{id:"s2e06",value:"S2 E06"},{id:"s2e07",value:"S2 E07"},{id:"s2e08",value:"S2 E08"}],n}return Object(o.a)(t,[{key:"onChange",value:function(e){var a=e.currentTarget.value;""===a&&(a=null),this.props.onChange("episode",a)}},{key:"render",value:function(){return r.a.createElement("div",{className:"episode-filter header-block"},r.a.createElement("label",{htmlFor:"episode-filter"},"Episode"),r.a.createElement("select",{id:"episode-filter",onChange:this.onChange,value:this.props.filters.episode||""},this.episodes.map((function(e,a){return r.a.createElement("option",{key:"episode-filter-".concat(e.id),value:e.id},e.value)}))))}}]),t}(r.a.Component));t(127);var E=function(e){return r.a.createElement("div",{onClick:e.onClick,className:"reset-filters"},"Clear all filters")},k=(t(128),function(e){Object(u.a)(t,e);var a=Object(d.a)(t);function t(e){var n;return Object(s.a)(this,t),(n=a.call(this,e)).onChange=n.onChange.bind(Object(c.a)(n)),n.years=[{id:"",value:"All"},{id:"1921",value:"1921"},{id:"1953",value:"1953"},{id:"1954",value:"1954"},{id:"1986",value:"1986"},{id:"1987",value:"1987"},{id:"2019",value:"2019"},{id:"2020",value:"2020"},{id:"2052",value:"2052"},{id:"2053",value:"2053"}],n}return Object(o.a)(t,[{key:"onChange",value:function(e){var a=e.currentTarget.value;""===a&&(a=null),this.props.onChange("year",a)}},{key:"render",value:function(){return r.a.createElement("div",{className:"year-filter header-block"},r.a.createElement("label",{htmlFor:"year-filter"},"Year"),r.a.createElement("select",{id:"year-filter",onChange:this.onChange,value:this.props.filters.year||""},this.years.map((function(e,a){return r.a.createElement("option",{key:"year-filter-".concat(e.id),value:e.id},e.value)}))))}}]),t}(r.a.Component)),O=(t(129),function(e){Object(u.a)(t,e);var a=Object(d.a)(t);function t(){return Object(s.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"header"},r.a.createElement("p",{style:{color:"chartreuse"}},"Below, you can explore each scene in chronological order of the timeline, or in the televised episode order."),r.a.createElement("p",{style:{color:"chartreuse"}},"You may also find the ",r.a.createElement("a",{target:"_blank",href:"https://dark-netflix.fandom.com/"},"Dark Wiki")," and the ",r.a.createElement("a",{target:"_blank",href:"https://en.wikipedia.org/wiki/Dark_(TV_series)#Family_tree"},"Family Tree")," to be useful references."),r.a.createElement(b,{displayOrder:this.props.displayOrder,onChange:this.props.updateToggle}),r.a.createElement(y,{filters:this.props.filters,onChange:this.props.updateFilters}),r.a.createElement(k,{filters:this.props.filters,onChange:this.props.updateFilters}),r.a.createElement(p,{filters:this.props.filters,onChange:this.props.updateFilters}),r.a.createElement(h,{filters:this.props.filters,onChange:this.props.updateFilters}),r.a.createElement(E,{onClick:this.props.resetFilters}))}}]),t}(r.a.Component));t(130);var N=function(){return r.a.createElement("div",{className:"scenes--loading"},"Loading...")},j=(t(131),function(e){Object(u.a)(t,e);var a=Object(d.a)(t);function t(e){var n;return Object(s.a)(this,t),(n=a.call(this,e)).renderPrev=n.renderPrev.bind(Object(c.a)(n)),n.renderNext=n.renderNext.bind(Object(c.a)(n)),n.renderImages=n.renderImages.bind(Object(c.a)(n)),n.renderDescription=n.renderDescription.bind(Object(c.a)(n)),n.months=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],n}return Object(o.a)(t,[{key:"renderPrev",value:function(){return 0===this.props.sceneModalIdx?r.a.createElement("div",{className:"nav-placeholder"}):r.a.createElement("button",{type:"button",className:"prev",onClick:this.props.navigatePrev},"\u2190 Prev")}},{key:"renderNext",value:function(){return this.props.sceneModalIdx===this.props.lastSceneModalIdx?r.a.createElement("div",{className:"nav-placeholder"}):r.a.createElement("button",{type:"button",className:"next",onClick:this.props.navigateNext},"Next \u2192")}},{key:"renderImages",value:function(e){return(e.images?e.images.map((function(e){return e.medium})):["/screenshots/placeholder.png"]).map((function(e){return r.a.createElement("a",{target:"_blank",href:"/dark-timeline"+e},r.a.createElement("img",{src:"/dark-timeline"+e}))}))}},{key:"renderDescription",value:function(e){return r.a.createElement(m.a,{source:e.description})}},{key:"render",value:function(){var e=this.props.scene,a=this.months[parseInt(e.date.month,10)-1];return r.a.createElement("div",{className:"scene-modal modal","data-id":"".concat(e.season,"-").concat(e.episode,"-").concat(e.scene),onClick:this.props.close},r.a.createElement("div",{className:"modal-content"},r.a.createElement("button",{type:"button",className:"close",onClick:this.props.close},"close"),r.a.createElement("div",{className:"nav"},this.renderPrev(),r.a.createElement("div",{className:"progress"},this.props.sceneModalIdx+1," of ",this.props.lastSceneModalIdx+1),this.renderNext()),r.a.createElement("h5",{className:"date"},e.date.day," ",a," ",e.date.year),r.a.createElement("h6",{className:"episode"},"S",e.season," E",e.episode),r.a.createElement("p",{className:"description"},this.renderDescription(e)),r.a.createElement("div",{className:"images"},this.renderImages(e))))}}]),t}(r.a.Component)),S=(t(132),function(e){Object(u.a)(t,e);var a=Object(d.a)(t);function t(e){var n;return Object(s.a)(this,t),(n=a.call(this,e)).renderImage=n.renderImage.bind(Object(c.a)(n)),n.renderDescription=n.renderDescription.bind(Object(c.a)(n)),n.isTimeTravel=n.isTimeTravel.bind(Object(c.a)(n)),n.maxDescriptionLen=150,n.months=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],n}return Object(o.a)(t,[{key:"trimmedDescription",value:function(e){return e.length<=this.maxDescriptionLen?e:"".concat(e.substring(0,this.maxDescriptionLen),"...")}},{key:"renderImage",value:function(e){var a=e.images?e.images[0].thumb:"/screenshots/placeholder-thumb.png";return r.a.createElement("img",{src:"/dark-timeline"+a})}},{key:"renderDescription",value:function(e){return r.a.createElement(m.a,{source:this.trimmedDescription(e.description)})}},{key:"isTimeTravel",value:function(e){return e.timeTravel&&e.timeTravel.id}},{key:"render",value:function(){var e=this.props.scene,a=this.months[parseInt(e.date.month,10)-1],t=this.isTimeTravel(e)?"scene--time-travel":"";return r.a.createElement("div",{className:"scene ".concat(t),"data-id":this.props.sceneIdx,onClick:this.props.openModal,tabIndex:0},this.renderImage(e),r.a.createElement("h5",{className:"date"},e.date.day," ",a," ",e.date.year),r.a.createElement("h6",{className:"episode"},"S",e.season," E",e.episode),r.a.createElement("p",{className:"description"},this.renderDescription(e)))}}]),t}(r.a.Component)),C=(t(133),function(e){Object(u.a)(t,e);var a=Object(d.a)(t);function t(e){var n;return Object(s.a)(this,t),(n=a.call(this,e)).openModal=n.openModal.bind(Object(c.a)(n)),n.closeModal=n.closeModal.bind(Object(c.a)(n)),n.prevSceneModal=n.prevSceneModal.bind(Object(c.a)(n)),n.nextSceneModal=n.nextSceneModal.bind(Object(c.a)(n)),n.fetchData=n.fetchData.bind(Object(c.a)(n)),n.orderedScenes=n.orderedScenes.bind(Object(c.a)(n)),n.renderScenes=n.renderScenes.bind(Object(c.a)(n)),n.state={isLoading:!0,data:null,scenes:null,sceneModalIdx:null},n}return Object(o.a)(t,[{key:"componentDidMount",value:function(){this.fetchData()}},{key:"openModal",value:function(e){this.setState({sceneModalIdx:parseInt(e.currentTarget.dataset.id)}),document.getElementsByTagName("body")[0].classList.add("modal-open")}},{key:"closeModal",value:function(e){e.target===e.currentTarget&&(this.setState({sceneModalIdx:null}),document.getElementsByTagName("body")[0].classList.remove("modal-open"))}},{key:"prevSceneModal",value:function(){this.setState({sceneModalIdx:this.state.sceneModalIdx-1})}},{key:"nextSceneModal",value:function(){this.setState({sceneModalIdx:this.state.sceneModalIdx+1})}},{key:"fetchData",value:function(){var e=this;this.setState({isLoading:!0}),fetch("/dark-timeline/data.json").then((function(e){return e.json()})).then((function(a){e.setState({scenes:a.data,isLoading:!1})}))}},{key:"orderedScenes",value:function(){var e=this.props,a=e.displayOrder,t=e.filters,n=this.state.scenes.slice();return"chronological"===a?n.sort((function(e,a){return e.date.year<a.date.year?-1:e.date.year>a.date.year?1:e.date.month<a.date.month?-1:e.date.month>a.date.month?1:e.date.day<a.date.day?-1:e.date.day>a.date.day?1:e.rank.chronological<a.rank.chronological?-1:e.rank.chronological>a.rank.chronological?1:void 0})):n.sort((function(e,a){return e.season<a.season?-1:e.season>a.season?1:e.episode<a.episode?-1:e.episode>a.episode?1:e.rank.episode<a.rank.episode?-1:e.rank.episode>a.rank.episode?1:void 0})),this.filter(n,t)}},{key:"filter",value:function(e,a){return a.episode&&(e=e.filter((function(e){return"s".concat(e.season,"e").concat(e.episode.toString().padStart(2,"0"))===a.episode}))),a.year&&(e=e.filter((function(e){return e.date.year.toString()===a.year}))),a.day&&(e=e.filter((function(e){return"".concat(e.date.month.toString().padStart(2,"0"),"-").concat(e.date.day.toString().padStart(2,"0"))===a.day}))),a.character&&(e=e.filter((function(e){return e.characters.indexOf(a.character)>-1}))),e}},{key:"renderModal",value:function(){var e=this.state.sceneModalIdx;if(null===e)return null;var a=this.data[e];return r.a.createElement(j,{key:"modal-".concat(e),scene:a,sceneModalIdx:e,lastSceneModalIdx:this.data.length-1,close:this.closeModal,navigatePrev:this.prevSceneModal,navigateNext:this.nextSceneModal})}},{key:"renderScenes",value:function(){var e=this;return this.state.scenes?this.data.map((function(a,t){return r.a.createElement(S,{sceneIdx:t,scene:a,openModal:e.openModal})})):null}},{key:"render",value:function(){return this.state.isLoading?r.a.createElement(N,null):(this.data=this.orderedScenes(),r.a.createElement("div",{className:"scenes"},this.renderScenes(),this.renderModal()))}}]),t}(r.a.Component)),M=(t(134),function(e){Object(u.a)(t,e);var a=Object(d.a)(t);function t(e){var n;return Object(s.a)(this,t),(n=a.call(this,e)).updateToggle=n.updateToggle.bind(Object(c.a)(n)),n.updateFilters=n.updateFilters.bind(Object(c.a)(n)),n.resetFilters=n.resetFilters.bind(Object(c.a)(n)),n.state={displayOrder:"episodic",filters:{episode:null,year:null,day:null,characer:null}},n}return Object(o.a)(t,[{key:"updateToggle",value:function(e){this.setState({displayOrder:e.target.checked?"chronological":"episodic"})}},{key:"updateFilters",value:function(e,a){var t=this.state.filters;t[e]=a,this.setState({filters:t})}},{key:"resetFilters",value:function(){this.setState({filters:{episode:null,year:null,day:null}})}},{key:"render",value:function(){return r.a.createElement("div",{className:"timeline"},r.a.createElement(O,{updateToggle:this.updateToggle,updateFilters:this.updateFilters,resetFilters:this.resetFilters,displayOrder:this.state.displayOrder,filters:this.state.filters}),r.a.createElement(C,{displayOrder:this.state.displayOrder,filters:this.state.filters}))}}]),t}(r.a.Component));t(135);var T=function(){return r.a.createElement("div",{className:"app"},r.a.createElement("img",{className:"title-card",src:"/dark-timeline/dark-title-card.png",width:"490px"}),r.a.createElement("div",{className:"intro"},r.a.createElement("h1",null,"Explore the Timeline of 'Dark'"),r.a.createElement("p",null,"If you'd like to build your own visualizations, ",r.a.createElement("a",{href:"/dark-timeline/data.json"},"the data set for episodes")," is free to use."),r.a.createElement("p",null,"If you've found this or any other of my projects useful, I would greatly appreciate if you could ",r.a.createElement("a",{target:"_blank",href:"https://www.buymeacoffee.com/abhchand"},"buy me a coffee!"))),r.a.createElement("div",{className:"coming-soon"},"This timeline covers Seasons 1 & 2. Season 3 is coming soon!"),r.a.createElement(M,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var D=document.createElement("script");D.innerHTML="\n  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){\n  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),\n  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)\n  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');\n\n  ga('create', 'UA-93556188-1', 'auto');\n  ga('send', 'pageview');\n\n  alert('this loaded!');\n",document.body.appendChild(D),l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(T,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},29:function(e,a,t){e.exports=t(136)},34:function(e,a,t){},35:function(e,a,t){},36:function(e,a,t){}},[[29,1,2]]]);
//# sourceMappingURL=main.684200de.chunk.js.map