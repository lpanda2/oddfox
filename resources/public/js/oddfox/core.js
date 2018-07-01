// Compiled by ClojureScript 1.9.908 {}
goog.provide('oddfox.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('re_com.core');
goog.require('oddfox.data');
goog.require('re_frame.core');
goog.require('clojure.string');
oddfox.core.dispatch_timer_event = (function oddfox$core$dispatch_timer_event(){
var now = (new Date());
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"timer","timer",-1266967739),now], null));
});
if(typeof oddfox.core.do_timer !== 'undefined'){
} else {
oddfox.core.do_timer = setInterval(oddfox.core.dispatch_timer_event,(1000));
}
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"initialize","initialize",609952913),(function (_,___$1){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"time","time",1385887882),(new Date()),new cljs.core.Keyword(null,"time-color","time-color",-1916736551),"#f88"], null);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"initialize","initialize",609952913),(function (_,___$1){
return new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"metricName","metricName",315361942),"weird test code",new cljs.core.Keyword(null,"claimRelationship","claimRelationship",1281894194),"same-claim",new cljs.core.Keyword(null,"metricCodes","metricCodes",-702052709),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"codeType","codeType",1244133673),"procedureCode",new cljs.core.Keyword(null,"codes","codes",-760505543),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["XYZ"], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"codeType","codeType",1244133673),"providerCategory",new cljs.core.Keyword(null,"codes","codes",-760505543),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["PR","OP","IP"], null)], null)], null),new cljs.core.Keyword(null,"filters","filters",974726919),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"time","time",1385887882),(new Date()),new cljs.core.Keyword(null,"time-color","time-color",-1916736551),"#f88",new cljs.core.Keyword(null,"time-history","time-history",1001486288),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#f88"], null)], null);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"time-color-change","time-color-change",-513896528),(function (db,p__39053){
var vec__39054 = p__39053;
var _ = cljs.core.nth.call(null,vec__39054,(0),null);
var new_color_value = cljs.core.nth.call(null,vec__39054,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"time-color","time-color",-1916736551),new_color_value);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"time-color-add","time-color-add",1351354254),(function (db,p__39057){
var vec__39058 = p__39057;
var _ = cljs.core.nth.call(null,vec__39058,(0),null);
var new_color_value = cljs.core.nth.call(null,vec__39058,(1),null);
return cljs.core.doall.call(null,cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"time-color","time-color",-1916736551),new_color_value),cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"time-history","time-history",1001486288),cljs.core.conj.call(null,new cljs.core.Keyword(null,"time-history","time-history",1001486288).cljs$core$IFn$_invoke$arity$1(db),new_color_value)));
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"timer","timer",-1266967739),(function (db,p__39061){
var vec__39062 = p__39061;
var _ = cljs.core.nth.call(null,vec__39062,(0),null);
var new_time = cljs.core.nth.call(null,vec__39062,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"time","time",1385887882),new_time);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"time","time",1385887882),(function (db,_){
return new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(db);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"metricName","metricName",315361942),(function (db,_){
return new cljs.core.Keyword(null,"metricName","metricName",315361942).cljs$core$IFn$_invoke$arity$1(db);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"time-color","time-color",-1916736551),(function (db,_){
return new cljs.core.Keyword(null,"time-color","time-color",-1916736551).cljs$core$IFn$_invoke$arity$1(db);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"time-history","time-history",1001486288),(function (db,_){
return new cljs.core.Keyword(null,"time-history","time-history",1001486288).cljs$core$IFn$_invoke$arity$1(db);
}));
oddfox.core.lister = (function oddfox$core$lister(items){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__35284__auto__ = (function oddfox$core$lister_$_iter__39065(s__39066){
return (new cljs.core.LazySeq(null,(function (){
var s__39066__$1 = s__39066;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__39066__$1);
if(temp__4657__auto__){
var s__39066__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__39066__$2)){
var c__35282__auto__ = cljs.core.chunk_first.call(null,s__39066__$2);
var size__35283__auto__ = cljs.core.count.call(null,c__35282__auto__);
var b__39068 = cljs.core.chunk_buffer.call(null,size__35283__auto__);
if((function (){var i__39067 = (0);
while(true){
if((i__39067 < size__35283__auto__)){
var item = cljs.core._nth.call(null,c__35282__auto__,i__39067);
cljs.core.chunk_append.call(null,b__39068,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),item], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),item], null)));

var G__39069 = (i__39067 + (1));
i__39067 = G__39069;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__39068),oddfox$core$lister_$_iter__39065.call(null,cljs.core.chunk_rest.call(null,s__39066__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__39068),null);
}
} else {
var item = cljs.core.first.call(null,s__39066__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),item], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),item], null)),oddfox$core$lister_$_iter__39065.call(null,cljs.core.rest.call(null,s__39066__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__35284__auto__.call(null,items);
})()], null);
});
oddfox.core.funcs = (function oddfox$core$funcs(){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"gap","gap",80255254),"1em",new cljs.core.Keyword(null,"justify","justify",-722524056),new cljs.core.Keyword(null,"around","around",-265975553),new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"stretch","stretch",-1888837380),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.selection_list,new cljs.core.Keyword(null,"choices","choices",1385611597),cljs.core.mapv.call(null,(function (p1__39070_SHARP_){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"label","label",1718410804)],[p1__39070_SHARP_,p1__39070_SHARP_]);
}),oddfox.data.time_frame_funcs),new cljs.core.Keyword(null,"model","model",331153215),cljs.core.set.call(null,oddfox.data.time_frame_funcs),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (){
return ((1) + (1));
}),new cljs.core.Keyword(null,"width","width",-384071477),"175px",new cljs.core.Keyword(null,"hide-border?","hide-border?",1792698922),true,new cljs.core.Keyword(null,"multi-select?","multi-select?",973156151),true], null),new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.selection_list,new cljs.core.Keyword(null,"choices","choices",1385611597),cljs.core.mapv.call(null,(function (p1__39071_SHARP_){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"label","label",1718410804)],[p1__39071_SHARP_,p1__39071_SHARP_]);
}),oddfox.data.filter_funcs),new cljs.core.Keyword(null,"model","model",331153215),cljs.core.set.call(null,oddfox.data.filter_funcs),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (){
return ((1) + (1));
}),new cljs.core.Keyword(null,"width","width",-384071477),"175px",new cljs.core.Keyword(null,"hide-border?","hide-border?",1792698922),true,new cljs.core.Keyword(null,"multi-select?","multi-select?",973156151),true], null),new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.selection_list,new cljs.core.Keyword(null,"choices","choices",1385611597),cljs.core.mapv.call(null,(function (p1__39072_SHARP_){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"label","label",1718410804)],[p1__39072_SHARP_,p1__39072_SHARP_]);
}),oddfox.data.reducer_funcs),new cljs.core.Keyword(null,"model","model",331153215),cljs.core.set.call(null,oddfox.data.reducer_funcs),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (){
return ((1) + (1));
}),new cljs.core.Keyword(null,"width","width",-384071477),"175px",new cljs.core.Keyword(null,"hide-border?","hide-border?",1792698922),true,new cljs.core.Keyword(null,"multi-select?","multi-select?",973156151),true], null),new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.selection_list,new cljs.core.Keyword(null,"choices","choices",1385611597),cljs.core.mapv.call(null,(function (p1__39073_SHARP_){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"label","label",1718410804)],[p1__39073_SHARP_,p1__39073_SHARP_]);
}),oddfox.data.selector_funcs),new cljs.core.Keyword(null,"model","model",331153215),cljs.core.set.call(null,oddfox.data.selector_funcs),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (){
return ((1) + (1));
}),new cljs.core.Keyword(null,"width","width",-384071477),"175px",new cljs.core.Keyword(null,"hide-border?","hide-border?",1792698922),true,new cljs.core.Keyword(null,"multi-select?","multi-select?",973156151),true], null)], null)], null);
});
oddfox.core.clock = (function oddfox$core$clock(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.example-clock","div.example-clock",1559289088),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"time-color","time-color",-1916736551)], null)))], null)], null),cljs.core.first.call(null,clojure.string.split.call(null,cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"time","time",1385887882)], null))).toTimeString()," "))], null);
});
oddfox.core.metric_meta = (function oddfox$core$metric_meta(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.metric-meta","div.metric-meta",-547620282),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"time-history","time-history",1001486288)], null))))].join('')], null);
});
oddfox.core.color_input = (function oddfox$core$color_input(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.color-input","div.color-input",-879914246),"Time color: ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"time-color","time-color",-1916736551)], null))),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__39074_SHARP_){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"time-color-change","time-color-change",-513896528),p1__39074_SHARP_.target.value], null));
})], null)], null)], null);
});
oddfox.core.box = (function oddfox$core$box(){
new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"selected"], null)], null);

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.checkbox","div.checkbox",389009838),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"test this"], null)], null);
});
oddfox.core.header = (function oddfox$core$header(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"Create your own metric"], null)], null);
});
oddfox.core.metric_ui = (function oddfox$core$metric_ui(){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [oddfox.core.header], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"All Operations to Create a Metric"], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.padding","div.padding",-352689147)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [oddfox.core.funcs], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"Selection Summary"], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [oddfox.core.box], null)], null);
});
oddfox.core.run = (function oddfox$core$run(){
re_frame.core.dispatch_sync.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"initialize","initialize",609952913)], null));

return reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [oddfox.core.metric_ui], null),document.getElementById("app"));
});
goog.exportSymbol('oddfox.core.run', oddfox.core.run);

//# sourceMappingURL=core.js.map?rel=1530468021670
