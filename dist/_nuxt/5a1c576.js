(window.webpackJsonp=window.webpackJsonp||[]).push([[8,2,3,4,5,6,7],{257:function(t,e,r){var content=r(261);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(108).default)("2d04ba0b",content,!0,{sourceMap:!1})},258:function(t,e,r){var content=r(266);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(108).default)("5c8f6204",content,!0,{sourceMap:!1})},259:function(t,e,r){var content=r(268);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(108).default)("747291a8",content,!0,{sourceMap:!1})},260:function(t,e,r){"use strict";r(257)},261:function(t,e,r){var n=r(107)(!1);n.push([t.i,".btn-remove[data-v-0e8e7ef2]{display:flex;align-items:center;justify-content:center;color:#dc3545;background-color:transparent;background-image:none;border:1px solid transparent;padding:5px 10px;font-size:1rem;border-radius:.25rem}.btn-remove[data-v-0e8e7ef2]:hover{border:1px solid #dc3545;cursor:pointer}",""]),t.exports=n},262:function(t,e,r){"use strict";r.r(e);var n={name:"ButtonRemove"},o=(r(260),r(57)),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("button",{staticClass:"btn-remove",attrs:{type:"button"},on:{click:function(e){return t.$emit("click")}}},[t._t("default")],2)}),[],!1,null,"0e8e7ef2",null);e.default=component.exports},263:function(t,e,r){"use strict";r(29),r(58),r(46);e.a={hoursToSeconds:function(time){var t=time.split(":");return parseInt(60*t[0])+parseInt(t[1])},secondsToTime:function(t){var e=t%60,r=(t-e)/60;return"".concat(r>9?r:"0"+r,":").concat(e>9?e:"0"+e)},isTimeValid:function(time){var t=time.split(":");return this.hoursToSeconds(time)<1440&&parseInt(t[0])<24&&parseInt(t[1])<60}}},264:function(t,e,r){var content=r(275);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(108).default)("1dd10732",content,!0,{sourceMap:!1})},265:function(t,e,r){"use strict";r(258)},266:function(t,e,r){var n=r(107)(!1);n.push([t.i,".mask[data-v-55dcab45]{font-size:1.5rem;padding:5px 10px;border:1px solid transparent;border-bottom-color:#ced4da;text-align:center}.mask[data-v-55dcab45]:focus{outline:none;box-shadow:none}.error[data-v-55dcab45]{color:#dc3545;border-bottom:1px solid #dc3545}",""]),t.exports=n},267:function(t,e,r){"use strict";r(259)},268:function(t,e,r){var n=r(107)(!1);n.push([t.i,".btn-primary[data-v-a6c115ec]{font-weight:500;font-size:.875rem;line-height:1.75;min-width:64px;padding:6px 16px;border-radius:4px;transition:background-color .25s cubic-bezier(.4,0,.2,1) 0ms,box-shadow .25s cubic-bezier(.4,0,.2,1) 0ms,border-color .25s cubic-bezier(.4,0,.2,1) 0ms,color .25s cubic-bezier(.4,0,.2,1) 0ms;border:0;cursor:pointer;box-shadow:0 1px 3px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.24);color:#fff;background-color:#4caf50;font-size:16px}.btn-primary[data-v-a6c115ec]:hover{box-shadow:0 3px 6px rgba(0,0,0,.16),0 3px 6px rgba(0,0,0,.23)}.btn-primary[data-v-a6c115ec]:active{box-shadow:inset 0 2px 4px 0 rgba(0,0,0,.06)}.disabled[data-v-a6c115ec]{pointer-events:none;opacity:.5}",""]),t.exports=n},269:function(t,e,r){var content=r(277);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(108).default)("45b7812a",content,!0,{sourceMap:!1})},270:function(t,e,r){"use strict";r.r(e);var n={name:"InputMask",emits:["input"],props:{value:{type:String,default:""},isError:{type:Boolean,default:!1}},computed:{maskInputData:{get:function(){return this.value},set:function(t){this.$emit("input",t)}}}},o=(r(265),r(57)),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("the-mask",{ref:"inputMask",staticClass:"mask",class:{error:t.isError},attrs:{mask:"##:##",masked:!0},model:{value:t.maskInputData,callback:function(e){t.maskInputData=e},expression:"maskInputData"}})}),[],!1,null,"55dcab45",null);e.default=component.exports},271:function(t,e,r){"use strict";r.r(e);var n={name:"ButtonApply",props:{disabled:{type:Boolean,default:!1}}},o=(r(267),r(57)),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("button",{staticClass:"btn-primary",class:{disabled:t.disabled},attrs:{type:"button",disabled:t.disabled},on:{click:function(e){return t.$emit("click")}}},[t._t("default")],2)}),[],!1,null,"a6c115ec",null);e.default=component.exports},272:function(t,e,r){"use strict";r.r(e);var n={name:"Remove"},o=r(57),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",viewBox:"0 0 16 16"}},[r("path",{attrs:{d:"M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"}}),t._v(" "),r("path",{attrs:{"fill-rule":"evenodd",d:"M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"}})])}),[],!1,null,null,null);e.default=component.exports},273:function(t,e,r){"use strict";var n=r(2),o=r(68).findIndex,c=r(109),d="findIndex",l=!0;d in[]&&Array(1).findIndex((function(){l=!1})),n({target:"Array",proto:!0,forced:l},{findIndex:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}}),c(d)},274:function(t,e,r){"use strict";r(264)},275:function(t,e,r){var n=r(107)(!1);n.push([t.i,".card[data-v-56ffd9ca]{box-shadow:0 4px 8px 0 rgba(0,0,0,.2);transition:.3s;border-radius:5px;padding:16px;background-color:#fff;position:sticky;top:0;display:flex;max-width:-webkit-fit-content;max-width:-moz-fit-content;max-width:fit-content;min-width:280px;top:20px}.card-body[data-v-56ffd9ca]{width:100%}.input-group[data-v-56ffd9ca]{width:100%;display:flex;justify-content:space-around;margin-top:20px;margin-bottom:20px}.input-field[data-v-56ffd9ca]{max-width:120px}.buttons-section[data-v-56ffd9ca]{display:flex;align-items:center}.buttons-section .btn-remove[data-v-56ffd9ca]{font-size:14px;padding:10px 16px;margin-left:10px}.success[data-v-56ffd9ca]{color:#4caf50;font-weight:700}.errors-container[data-v-56ffd9ca]{padding:10px 0}.errors-container .error-message[data-v-56ffd9ca]{color:#dc3545;font-size:13px}",""]),t.exports=n},276:function(t,e,r){"use strict";r(269)},277:function(t,e,r){var n=r(107)(!1);n.push([t.i,"#journal[data-v-fc0b3bf2]{font-family:Arial,Helvetica,sans-serif;border-collapse:collapse;width:100%}#journal th[data-v-fc0b3bf2]{position:sticky;top:0;top:36px;padding-top:12px;padding-bottom:12px;text-align:left;background-color:#04aa6d;color:#fff}#journal tr[data-v-fc0b3bf2]:nth-child(2n){background-color:#f2f2f2}#journal tr[data-v-fc0b3bf2]:hover{background-color:hsla(0,0%,86.7%,.233)}#journal td[data-v-fc0b3bf2],#journal th[data-v-fc0b3bf2]{border:1px solid #ddd;padding:8px}.total-section[data-v-fc0b3bf2]{position:sticky;top:0;background-color:#fff;padding:10px 5px;display:flex;justify-content:space-between;flex-wrap:wrap;align-items:center}.success[data-v-fc0b3bf2]{color:#04aa6d;font-weight:700}.card[data-v-fc0b3bf2]{box-shadow:0 4px 8px 0 rgba(0,0,0,.2);transition:.3s;border-radius:5px;padding:16px;background-color:#fff}",""]),t.exports=n},278:function(t,e,r){var content=r(282);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(108).default)("2065e928",content,!0,{sourceMap:!1})},279:function(t,e,r){"use strict";r.r(e);var n=r(102),o=(r(273),r(46),r(143),r(263)),c={name:"CounterWidget",data:function(){return{startTime:"",endTime:"",errors:[]}},computed:{currentWorktimeData:function(){return this.calculateCurrentWorktimeData(this.startTime,this.endTime)}},watch:{startTime:{immediate:!0,handler:function(t){this.validate(t,"startTimeIsEmpty"),this.isRightTimeFormat(t,"startTimeFormat")}},endTime:{immediate:!0,handler:function(t){this.validate(t,"endTimeIsEmpty"),this.isRightTimeFormat(t,"endTimeFormat")}}},methods:{calculateCurrentWorktimeData:function(t,e){if(5!==t.length||5!==e.length)return"";var r=o.a.hoursToSeconds(t);if(o.a.hoursToSeconds(e)<r)return this.addErrorName("endTimeCanNotBeLessThanStartTime"),"";this.removeErrorName("endTimeCanNotBeLessThanStartTime");var n=o.a.hoursToSeconds(e)-o.a.hoursToSeconds(t);return o.a.secondsToTime(n)},addErrorName:function(t){-1===this.errors.findIndex((function(e){return e===t}))&&(this.errors=[].concat(Object(n.a)(this.errors),[t]))},removeErrorName:function(t){var e=this.errors.findIndex((function(e){return e===t}));e>=0&&this.errors.splice(e,1)},isNameInErrorsArray:function(t){return this.errors.findIndex((function(e){return e===t}))>=0},saveRecord:function(){var t=this;this.$store.commit("time_list/addRecordToJournal",{startTime:this.startTime,endTime:this.endTime,currentWorktime:this.currentWorktimeData}),this.clearWidgetData(),this.$nextTick((function(){t.$refs.typeBox.$el.focus()}))},clearWidgetData:function(){this.startTime="",this.endTime=""},validate:function(t,e){5!==t.length?this.addErrorName(e):this.removeErrorName(e)},isRightTimeFormat:function(t,e){5===t.length&&(o.a.isTimeValid(t)?this.removeErrorName(e):this.addErrorName(e))}}},d=(r(274),r(57)),component=Object(d.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"card"},[r("div",{staticClass:"card-body"},[r("p",[t._v(t._s(t.$t("current-worktime"))+": "),r("span",{class:{success:t.currentWorktimeData.length}},[t._v(t._s(t.currentWorktimeData.length?t.currentWorktimeData:t.$t("none")))])]),t._v(" "),r("div",{staticClass:"input-group"},[r("div",[r("p",{staticClass:"text-center fs-20 fw-500 text-muted"},[t._v(t._s(t.$t("start-work")))]),t._v(" "),r("UIKitInputMask",{ref:"typeBox",staticClass:"input-field",attrs:{placeholder:"hh:mm",isError:t.isNameInErrorsArray("startTimeFormat")},model:{value:t.startTime,callback:function(e){t.startTime=e},expression:"startTime"}})],1),t._v(" "),r("div",[r("p",{staticClass:"text-center fs-20 fw-500 text-muted"},[t._v(t._s(t.$t("end-work")))]),t._v(" "),r("UIKitInputMask",{staticClass:"input-field",attrs:{placeholder:"hh:mm",isError:t.isNameInErrorsArray("endTimeFormat")},model:{value:t.endTime,callback:function(e){t.endTime=e},expression:"endTime"}})],1)]),t._v(" "),r("div",{staticClass:"errors-container"},[t.isNameInErrorsArray("endTimeCanNotBeLessThanStartTime")?r("p",{staticClass:"error-message"},[t._v(t._s(t.$t("end-time-cant-be-less-than-start-time")))]):t._e()]),t._v(" "),r("div",{staticClass:"buttons-section"},[r("UIKitButtonApply",{attrs:{disabled:t.errors.length>0},on:{click:function(e){return t.saveRecord()}}},[t._v(" "+t._s(t.$t("save"))+" ")]),t._v(" "),r("UIKitButtonRemove",{staticClass:"btn-remove",on:{click:function(e){t.clearWidgetData(),t.errors=[]}}},[t._v(" "+t._s(t.$t("clear"))+" ")])],1)])])])}),[],!1,null,"56ffd9ca",null);e.default=component.exports;installComponents(component,{UIKitInputMask:r(270).default,UIKitButtonApply:r(271).default,UIKitButtonRemove:r(262).default})},280:function(t,e,r){"use strict";r.r(e);r(41),r(34);var n=r(263),o={name:"HoursLog",data:function(){return{totalWorktime:"00:00"}},computed:{journalRecordsData:function(){return this.$store.getters["time_list/getJournalRecords"]}},watch:{journalRecordsData:{immediate:!0,deep:!0,handler:function(t){this.sumJournalRecordsCurrentTime(t)}}},methods:{deleteRecord:function(t){this.$store.commit("time_list/removeRecordByIndex",t)},sumJournalRecordsCurrentTime:function(t){var e=t.map((function(t){return t.currentWorktime})),r=0;e.forEach((function(t){r+=n.a.hoursToSeconds(t)})),this.totalWorktime=n.a.secondsToTime(r)},clearJournal:function(){this.$store.commit("time_list/clearJournalRecords")}}},c=(r(276),r(57)),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"card"},[r("div",{staticClass:"total-section"},[r("p",[t._v(t._s(t.$t("total-worktime"))+": "),r("span",{class:{success:"00:00"!==t.totalWorktime}},[t._v(t._s(t.totalWorktime))]),t._v(" "+t._s(t.$t("hr"))+".")]),t._v(" "),r("div",[r("UIKitButtonRemove",{on:{click:function(e){return t.clearJournal()}}},[t._v(" "+t._s(t.$t("wipe"))+" ")])],1)]),t._v(" "),r("table",{attrs:{id:"journal"}},[r("thead",[r("tr",[r("th",[t._v("#")]),t._v(" "),r("th",[t._v(t._s(t.$t("start-time")))]),t._v(" "),r("th",[t._v(t._s(t.$t("end-time")))]),t._v(" "),r("th",[t._v(t._s(t.$t("worked-time")))]),t._v(" "),r("th",[t._v(t._s(t.$t("actions")))])])]),t._v(" "),r("tbody",[t._l(t.journalRecordsData,(function(e,n){return r("tr",{key:"record-"+n},[r("td",[t._v(t._s(n+1))]),t._v(" "),r("td",[t._v(t._s(e.startTime))]),t._v(" "),r("td",[t._v(t._s(e.endTime))]),t._v(" "),r("td",[t._v(t._s(e.currentWorktime))]),t._v(" "),r("td",[r("UIKitButtonRemove",{on:{click:function(e){return t.deleteRecord(n)}}},[r("IconRemove")],1)],1)])})),t._v(" "),0===t.journalRecordsData.length?r("tr",[r("td",{staticClass:"text-center text-muted fw-500",attrs:{colspan:"5"}},[t._v(t._s(t.$t("enter-data")))])]):t._e()],2)])])])}),[],!1,null,"fc0b3bf2",null);e.default=component.exports;installComponents(component,{UIKitButtonRemove:r(262).default,IconRemove:r(272).default})},281:function(t,e,r){"use strict";r(278)},282:function(t,e,r){var n=r(107)(!1);n.push([t.i,"*{box-sizing:border-box;margin:0;padding:0;font-family:sans-serif}.main{display:flex;justify-content:center;min-height:100vh}.content{width:100%;max-width:1440px;padding:10px 25px}.text-center{text-align:center}.fs-18{font-size:18px}.fw-500{font-weight:500}.w-100{width:100%}.text-muted{color:#6c757d}.content-sheets{display:flex;justify-content:center;flex-wrap:wrap}.mx-2{margin-left:10px;margin-right:10px}.mb-2{margin-bottom:10px}.my-3{margin-top:20px;margin-bottom:20px}.py-3{padding-top:20px;padding-bottom:20px}.main .site-logo{display:flex;justify-content:flex-start;background-color:#04aa6d;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content}.main .site-logo .title-container .title{color:#fff;padding:5px 10px;margin-bottom:0}.footer,.main{background-color:#f9f9f9}.locales{display:flex;justify-content:center;margin-top:10px}a{text-decoration:none;color:#6c757d}",""]),t.exports=n},284:function(t,e,r){"use strict";r.r(e);var n=r(0).a.extend({name:"index"}),o=(r(281),r(57)),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("main",{staticClass:"main"},[r("div",{staticClass:"content"},[t._m(0),t._v(" "),r("div",{staticClass:"content-sheets"},[r("IndexCounterWidget",{staticClass:"mx-2 my-3 counter-widget"}),t._v(" "),r("IndexHoursLog",{staticClass:"mx-2 my-3"})],1)])]),t._v(" "),r("div",{staticClass:"footer py-3"},[r("h4",{staticClass:"text-center text-muted"},[t._v(t._s(t.$t("serhii-savchuk"))+" | "+t._s((new Date).getFullYear()))]),t._v(" "),r("div",{staticClass:"locales"},[r("NuxtLink",{staticClass:"mx-2",attrs:{to:"/"}},[t._v("укр")]),t._v(" | "),r("NuxtLink",{staticClass:"mx-2",attrs:{to:"/en/"}},[t._v("en")])],1)])])}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"site-logo"},[r("div",{staticClass:"title-container"},[r("h1",{staticClass:"mx-2 mb-2 title"},[t._v("Worktime")])])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{IndexCounterWidget:r(279).default,IndexHoursLog:r(280).default})}}]);