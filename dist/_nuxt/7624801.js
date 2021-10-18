(window.webpackJsonp=window.webpackJsonp||[]).push([[4,2,6],{258:function(t,e,o){var content=o(262);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(108).default)("2d04ba0b",content,!0,{sourceMap:!1})},261:function(t,e,o){"use strict";o(258)},262:function(t,e,o){var r=o(107)(!1);r.push([t.i,".btn-remove[data-v-0e8e7ef2]{display:flex;align-items:center;justify-content:center;color:#dc3545;background-color:transparent;background-image:none;border:1px solid transparent;padding:5px 10px;font-size:1rem;border-radius:.25rem}.btn-remove[data-v-0e8e7ef2]:hover{border:1px solid #dc3545;cursor:pointer}",""]),t.exports=r},263:function(t,e,o){"use strict";o.r(e);var r={name:"ButtonRemove"},n=(o(261),o(57)),component=Object(n.a)(r,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("button",{staticClass:"btn-remove",attrs:{type:"button"},on:{click:function(e){return t.$emit("click")}}},[t._t("default")],2)}),[],!1,null,"0e8e7ef2",null);e.default=component.exports},264:function(t,e,o){"use strict";o(29),o(58),o(47);e.a={hoursToSeconds:function(time){var t=time.split(":");return parseInt(60*t[0])+parseInt(t[1])},secondsToTime:function(t){var e=t%60,o=(t-e)/60;return"".concat(o>9?o:"0"+o,":").concat(e>9?e:"0"+e)},isTimeValid:function(time){var t=time.split(":");return this.hoursToSeconds(time)<1440&&parseInt(t[0])<24&&parseInt(t[1])<60}}},270:function(t,e,o){var content=o(278);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(108).default)("45b7812a",content,!0,{sourceMap:!1})},273:function(t,e,o){"use strict";o.r(e);var r={name:"Remove"},n=o(57),component=Object(n.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",viewBox:"0 0 16 16"}},[o("path",{attrs:{d:"M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"}}),t._v(" "),o("path",{attrs:{"fill-rule":"evenodd",d:"M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"}})])}),[],!1,null,null,null);e.default=component.exports},277:function(t,e,o){"use strict";o(270)},278:function(t,e,o){var r=o(107)(!1);r.push([t.i,"#journal[data-v-fc0b3bf2]{font-family:Arial,Helvetica,sans-serif;border-collapse:collapse;width:100%}#journal th[data-v-fc0b3bf2]{position:sticky;top:0;top:36px;padding-top:12px;padding-bottom:12px;text-align:left;background-color:#04aa6d;color:#fff}#journal tr[data-v-fc0b3bf2]:nth-child(2n){background-color:#f2f2f2}#journal tr[data-v-fc0b3bf2]:hover{background-color:hsla(0,0%,86.7%,.233)}#journal td[data-v-fc0b3bf2],#journal th[data-v-fc0b3bf2]{border:1px solid #ddd;padding:8px}.total-section[data-v-fc0b3bf2]{position:sticky;top:0;background-color:#fff;padding:10px 5px;display:flex;justify-content:space-between;flex-wrap:wrap;align-items:center}.success[data-v-fc0b3bf2]{color:#04aa6d;font-weight:700}.card[data-v-fc0b3bf2]{box-shadow:0 4px 8px 0 rgba(0,0,0,.2);transition:.3s;border-radius:5px;padding:16px;background-color:#fff}",""]),t.exports=r},281:function(t,e,o){"use strict";o.r(e);o(42),o(34);var r=o(264),n={name:"HoursLog",data:function(){return{totalWorktime:"00:00"}},computed:{journalRecordsData:function(){return this.$store.getters["time_list/getJournalRecords"]}},watch:{journalRecordsData:{immediate:!0,deep:!0,handler:function(t){this.sumJournalRecordsCurrentTime(t)}}},methods:{deleteRecord:function(t){this.$store.commit("time_list/removeRecordByIndex",t)},sumJournalRecordsCurrentTime:function(t){var e=t.map((function(t){return t.currentWorktime})),o=0;e.forEach((function(t){o+=r.a.hoursToSeconds(t)})),this.totalWorktime=r.a.secondsToTime(o)},clearJournal:function(){this.$store.commit("time_list/clearJournalRecords")}}},c=(o(277),o(57)),component=Object(c.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("div",{staticClass:"card"},[o("div",{staticClass:"total-section"},[o("p",[t._v(t._s(t.$t("total-worktime"))+": "),o("span",{class:{success:"00:00"!==t.totalWorktime}},[t._v(t._s(t.totalWorktime))]),t._v(" "+t._s(t.$t("hr"))+".")]),t._v(" "),o("div",[o("UIKitButtonRemove",{on:{click:function(e){return t.clearJournal()}}},[t._v(" "+t._s(t.$t("wipe"))+" ")])],1)]),t._v(" "),o("table",{attrs:{id:"journal"}},[o("thead",[o("tr",[o("th",[t._v("#")]),t._v(" "),o("th",[t._v(t._s(t.$t("start-time")))]),t._v(" "),o("th",[t._v(t._s(t.$t("end-time")))]),t._v(" "),o("th",[t._v(t._s(t.$t("worked-time")))]),t._v(" "),o("th",[t._v(t._s(t.$t("actions")))])])]),t._v(" "),o("tbody",[t._l(t.journalRecordsData,(function(e,r){return o("tr",{key:"record-"+r},[o("td",[t._v(t._s(r+1))]),t._v(" "),o("td",[t._v(t._s(e.startTime))]),t._v(" "),o("td",[t._v(t._s(e.endTime))]),t._v(" "),o("td",[t._v(t._s(e.currentWorktime))]),t._v(" "),o("td",[o("UIKitButtonRemove",{on:{click:function(e){return t.deleteRecord(r)}}},[o("IconRemove")],1)],1)])})),t._v(" "),0===t.journalRecordsData.length?o("tr",[o("td",{staticClass:"text-center text-muted fw-500",attrs:{colspan:"5"}},[t._v(t._s(t.$t("enter-data")))])]):t._e()],2)])])])}),[],!1,null,"fc0b3bf2",null);e.default=component.exports;installComponents(component,{UIKitButtonRemove:o(263).default,IconRemove:o(273).default})}}]);