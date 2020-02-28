(window.yoastWebpackJsonp=window.yoastWebpackJsonp||[]).push([[4],{0:function(e,t){e.exports=React},1:function(e,t){e.exports=window.lodash},13:function(e,t){e.exports=ReactDOM},21:function(e,t){e.exports=window.yoast.styleGuide},3:function(e,t){e.exports=window.wp.i18n},34:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.setTextdomainL10n=r,t.setYoastComponentsL10n=function(){r("yoast-components")},t.setWordPressSeoL10n=function(){r("wordpress-seo")};var s=n(3),o=n(1);function r(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"wpseoYoastJSL10n",n=(0,o.get)(window,[t,e,"locale_data",e],!1);!1===n?(0,s.setLocaleData)({"":{}},e):(0,s.setLocaleData)(n,e)}},374:function(e,t,n){"use strict";var s=function(){function e(e,t){for(var n=0;n<t.length;n++){var s=t[n];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}return function(t,n,s){return n&&e(t.prototype,n),s&&e(t,s),t}}(),o=d(n(0)),r=d(n(13)),a=n(6),i=n(21),l=n(95),c=n(7),u=n(34);function d(e){return e&&e.__esModule?e:{default:e}}var p=(0,c.makeOutboundLink)(),f=function(e){function t(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var e=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.state={statistics:null,ryte:null,feed:null},e.getStatistics(),e.getRyte(),e.getFeed(),e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.default.Component),s(t,[{key:"getStatistics",value:function(){var e=this;wpseoApi.get("statistics",function(n){var s={};s.seoScores=n.seo_scores.map(function(e){return{value:parseInt(e.count,10),color:t.getColorFromScore(e.seo_rank),html:'<a href="'+e.link+'">'+e.label+"</a>"}}),s.header=jQuery("<div>"+n.header+"</div>").text(),e.setState({statistics:s})})}},{key:"getRyte",value:function(){var e=this;"1"===wpseoDashboardWidgetL10n.ryteEnabled&&wpseoApi.get("ryte",function(n){if(n.ryte){var s={scores:[{color:t.getColorFromScore(n.ryte.score),html:n.ryte.label}],canFetch:n.ryte.can_fetch};e.setState({ryte:s})}})}},{key:"getFeed",value:function(){var e=this;(0,c.getPostFeed)("https://yoast.com/feed/widget/?wp_version="+wpseoDashboardWidgetL10n.wp_version+"&php_version="+wpseoDashboardWidgetL10n.php_version,2).then(function(t){t.items=t.items.map(function(e){return e.description=jQuery("<div>"+e.description+"</div>").text(),e.description=e.description.replace("The post "+e.title+" appeared first on Yoast.","").trim(),e}),e.setState({feed:t})}).catch(function(e){return console.log(e)})}},{key:"getSeoAssessment",value:function(){return null===this.state.statistics?null:wp.element.createElement(l.SiteSEOReport,{key:"yoast-seo-posts-assessment",seoAssessmentText:this.state.statistics.header,seoAssessmentItems:this.state.statistics.seoScores})}},{key:"getRyteAssessment",value:function(){return null===this.state.ryte?null:wp.element.createElement("div",{id:"yoast-seo-ryte-assessment",key:"yoast-seo-ryte-assessment"},wp.element.createElement("h3",null,wpseoDashboardWidgetL10n.ryte_header),wp.element.createElement(a.ScoreAssessments,{items:this.state.ryte.scores}),wp.element.createElement("div",null,this.state.ryte.canFetch&&wp.element.createElement("a",{className:"fetch-status button",href:wpseoDashboardWidgetL10n.ryte_fetch_url},wpseoDashboardWidgetL10n.ryte_fetch),wp.element.createElement(p,{className:"landing-page button",href:wpseoDashboardWidgetL10n.ryte_landing_url},wpseoDashboardWidgetL10n.ryte_analyze)))}},{key:"getYoastFeed",value:function(){return null===this.state.feed?null:wp.element.createElement(a.ArticleList,{className:"wordpress-feed",key:"yoast-seo-blog-feed",title:wpseoDashboardWidgetL10n.feed_header,feed:this.state.feed,footerLinkText:wpseoDashboardWidgetL10n.feed_footer})}},{key:"render",value:function(){var e=[this.getSeoAssessment(),this.getRyteAssessment(),this.getYoastFeed()].filter(function(e){return null!==e});return 0===e.length?null:wp.element.createElement("div",null,e)}}],[{key:"getColorFromScore",value:function(e){return i.colors["$color_"+e]||i.colors.$color_grey}}]),t}(),y=document.getElementById("yoast-seo-dashboard-widget");y&&((0,u.setYoastComponentsL10n)(),r.default.render(wp.element.createElement(f,null),y))},6:function(e,t){e.exports=window.yoast.componentsNew},7:function(e,t){e.exports=window.yoast.helpers},95:function(e,t){e.exports=window.yoast.analysisReport}},[[374,0]]]);