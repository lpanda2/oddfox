// Compiled by ClojureScript 1.9.908 {}
goog.provide('oddfox.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('reagent_forms.core');
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
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"time-color-change","time-color-change",-513896528),(function (db,p__39355){
var vec__39356 = p__39355;
var _ = cljs.core.nth.call(null,vec__39356,(0),null);
var new_color_value = cljs.core.nth.call(null,vec__39356,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"time-color","time-color",-1916736551),new_color_value);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"time-color-add","time-color-add",1351354254),(function (db,p__39359){
var vec__39360 = p__39359;
var _ = cljs.core.nth.call(null,vec__39360,(0),null);
var new_color_value = cljs.core.nth.call(null,vec__39360,(1),null);
return cljs.core.doall.call(null,cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"time-color","time-color",-1916736551),new_color_value),cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"time-history","time-history",1001486288),cljs.core.conj.call(null,new cljs.core.Keyword(null,"time-history","time-history",1001486288).cljs$core$IFn$_invoke$arity$1(db),new_color_value)));
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"timer","timer",-1266967739),(function (db,p__39363){
var vec__39364 = p__39363;
var _ = cljs.core.nth.call(null,vec__39364,(0),null);
var new_time = cljs.core.nth.call(null,vec__39364,(1),null);
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
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__29131__auto__ = (function oddfox$core$lister_$_iter__39367(s__39368){
return (new cljs.core.LazySeq(null,(function (){
var s__39368__$1 = s__39368;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__39368__$1);
if(temp__4657__auto__){
var s__39368__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__39368__$2)){
var c__29129__auto__ = cljs.core.chunk_first.call(null,s__39368__$2);
var size__29130__auto__ = cljs.core.count.call(null,c__29129__auto__);
var b__39370 = cljs.core.chunk_buffer.call(null,size__29130__auto__);
if((function (){var i__39369 = (0);
while(true){
if((i__39369 < size__29130__auto__)){
var item = cljs.core._nth.call(null,c__29129__auto__,i__39369);
cljs.core.chunk_append.call(null,b__39370,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),item], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),item], null)));

var G__39371 = (i__39369 + (1));
i__39369 = G__39371;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__39370),oddfox$core$lister_$_iter__39367.call(null,cljs.core.chunk_rest.call(null,s__39368__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__39370),null);
}
} else {
var item = cljs.core.first.call(null,s__39368__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),item], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),item], null)),oddfox$core$lister_$_iter__39367.call(null,cljs.core.rest.call(null,s__39368__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__29131__auto__.call(null,items);
})()], null);
});
oddfox.core.row = (function oddfox$core$row(label,input){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.column","div.column",-1380853326),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),label], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.column","div.column",-1380853326),input], null)], null);
});
oddfox.core.input = (function oddfox$core$input(label,type,id){
return oddfox.core.row.call(null,label,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.form-control","input.form-control",-1123419636),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"field","field",-1302436500),type,new cljs.core.Keyword(null,"id","id",-1388402092),id], null)], null));
});
oddfox.core.func_list = (function oddfox$core$func_list(items){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"row"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.column","div.column",-1380853326),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"column"], null)], null),"Timeframe Functions: ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [oddfox.core.lister,oddfox.data.time_frame_funcs], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.column","div.column",-1380853326),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"column"], null)], null),"Filter Functions: ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [oddfox.core.lister,oddfox.data.filter_funcs], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.column","div.column",-1380853326),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"column"], null)], null),"Reducer Functions: ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [oddfox.core.lister,oddfox.data.reducer_funcs], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.column","div.column",-1380853326),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"column"], null)], null),"Selectors: ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [oddfox.core.lister,oddfox.data.selector_funcs], null)], null)], null);
});
oddfox.core.clock = (function oddfox$core$clock(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.example-clock","div.example-clock",1559289088),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"time-color","time-color",-1916736551)], null)))], null)], null),cljs.core.first.call(null,clojure.string.split.call(null,cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"time","time",1385887882)], null))).toTimeString()," "))], null);
});
oddfox.core.metric_meta = (function oddfox$core$metric_meta(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.metric-meta","div.metric-meta",-547620282),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"time-history","time-history",1001486288)], null))))].join('')], null);
});
oddfox.core.color_input = (function oddfox$core$color_input(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.color-input","div.color-input",-879914246),"Time color: ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"time-color","time-color",-1916736551)], null))),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__39372_SHARP_){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"time-color-change","time-color-change",-513896528),p1__39372_SHARP_.target.value], null));
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
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [oddfox.core.header], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"All Operations to Create a Metric"], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.padding","div.padding",-352689147)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [oddfox.core.func_list], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"Selection Summary"], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [oddfox.core.box], null)], null);
});
oddfox.core.run = (function oddfox$core$run(){
re_frame.core.dispatch_sync.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"initialize","initialize",609952913)], null));

return reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [oddfox.core.metric_ui], null),document.getElementById("app"));
});
goog.exportSymbol('oddfox.core.run', oddfox.core.run);

//# sourceMappingURL=core.js.map?rel=1530394027960
