// Compiled by ClojureScript 1.9.908 {}
goog.provide('re_frame.trace');
goog.require('cljs.core');
goog.require('re_frame.interop');
goog.require('re_frame.loggers');
goog.require('goog.functions');
re_frame.trace.id = cljs.core.atom.call(null,(0));
re_frame.trace._STAR_current_trace_STAR_ = null;
re_frame.trace.reset_tracing_BANG_ = (function re_frame$trace$reset_tracing_BANG_(){
return cljs.core.reset_BANG_.call(null,re_frame.trace.id,(0));
});

/** @define {boolean} */
goog.define("re_frame.trace.trace_enabled_QMARK_",false);
/**
 * See https://groups.google.com/d/msg/clojurescript/jk43kmYiMhA/IHglVr_TPdgJ for more details
 */
re_frame.trace.is_trace_enabled_QMARK_ = (function re_frame$trace$is_trace_enabled_QMARK_(){
return re_frame.trace.trace_enabled_QMARK_;
});
re_frame.trace.trace_cbs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
if(typeof re_frame.trace.traces !== 'undefined'){
} else {
re_frame.trace.traces = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
if(typeof re_frame.trace.next_delivery !== 'undefined'){
} else {
re_frame.trace.next_delivery = cljs.core.atom.call(null,(0));
}
/**
 * Registers a tracing callback function which will receive a collection of one or more traces.
 *   Will replace an existing callback function if it shares the same key.
 */
re_frame.trace.register_trace_cb = (function re_frame$trace$register_trace_cb(key,f){
if(cljs.core.truth_(re_frame.trace.trace_enabled_QMARK_)){
return cljs.core.swap_BANG_.call(null,re_frame.trace.trace_cbs,cljs.core.assoc,key,f);
} else {
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Tracing is not enabled. Please set {\"re_frame.trace.trace_enabled_QMARK_\" true} in :closure-defines. See: https://github.com/Day8/re-frame-trace#installation.");
}
});
re_frame.trace.remove_trace_cb = (function re_frame$trace$remove_trace_cb(key){
cljs.core.swap_BANG_.call(null,re_frame.trace.trace_cbs,cljs.core.dissoc,key);

return null;
});
re_frame.trace.next_id = (function re_frame$trace$next_id(){
return cljs.core.swap_BANG_.call(null,re_frame.trace.id,cljs.core.inc);
});
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__30829){
var map__30830 = p__30829;
var map__30830__$1 = ((((!((map__30830 == null)))?((((map__30830.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30830.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30830):map__30830);
var operation = cljs.core.get.call(null,map__30830__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var op_type = cljs.core.get.call(null,map__30830__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var tags = cljs.core.get.call(null,map__30830__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var child_of = cljs.core.get.call(null,map__30830__$1,new cljs.core.Keyword(null,"child-of","child-of",-903376662));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),re_frame.trace.next_id.call(null),new cljs.core.Keyword(null,"operation","operation",-1267664310),operation,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type,new cljs.core.Keyword(null,"tags","tags",1771418977),tags,new cljs.core.Keyword(null,"child-of","child-of",-903376662),(function (){var or__28323__auto__ = child_of;
if(cljs.core.truth_(or__28323__auto__)){
return or__28323__auto__;
} else {
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_);
}
})(),new cljs.core.Keyword(null,"start","start",-355208981),re_frame.interop.now.call(null)], null);
});
re_frame.trace.debounce_time = (50);
re_frame.trace.debounce = (function re_frame$trace$debounce(f,interval){
return goog.functions.debounce(f,interval);
});
re_frame.trace.schedule_debounce = re_frame.trace.debounce.call(null,(function re_frame$trace$tracing_cb_debounced(){
var seq__30832_30844 = cljs.core.seq.call(null,cljs.core.deref.call(null,re_frame.trace.trace_cbs));
var chunk__30833_30845 = null;
var count__30834_30846 = (0);
var i__30835_30847 = (0);
while(true){
if((i__30835_30847 < count__30834_30846)){
var vec__30836_30848 = cljs.core._nth.call(null,chunk__30833_30845,i__30835_30847);
var k_30849 = cljs.core.nth.call(null,vec__30836_30848,(0),null);
var cb_30850 = cljs.core.nth.call(null,vec__30836_30848,(1),null);
try{cb_30850.call(null,cljs.core.deref.call(null,re_frame.trace.traces));
}catch (e30839){var e_30851 = e30839;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k_30849,"while storing",cljs.core.deref.call(null,re_frame.trace.traces),e_30851);
}
var G__30852 = seq__30832_30844;
var G__30853 = chunk__30833_30845;
var G__30854 = count__30834_30846;
var G__30855 = (i__30835_30847 + (1));
seq__30832_30844 = G__30852;
chunk__30833_30845 = G__30853;
count__30834_30846 = G__30854;
i__30835_30847 = G__30855;
continue;
} else {
var temp__4657__auto___30856 = cljs.core.seq.call(null,seq__30832_30844);
if(temp__4657__auto___30856){
var seq__30832_30857__$1 = temp__4657__auto___30856;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30832_30857__$1)){
var c__29162__auto___30858 = cljs.core.chunk_first.call(null,seq__30832_30857__$1);
var G__30859 = cljs.core.chunk_rest.call(null,seq__30832_30857__$1);
var G__30860 = c__29162__auto___30858;
var G__30861 = cljs.core.count.call(null,c__29162__auto___30858);
var G__30862 = (0);
seq__30832_30844 = G__30859;
chunk__30833_30845 = G__30860;
count__30834_30846 = G__30861;
i__30835_30847 = G__30862;
continue;
} else {
var vec__30840_30863 = cljs.core.first.call(null,seq__30832_30857__$1);
var k_30864 = cljs.core.nth.call(null,vec__30840_30863,(0),null);
var cb_30865 = cljs.core.nth.call(null,vec__30840_30863,(1),null);
try{cb_30865.call(null,cljs.core.deref.call(null,re_frame.trace.traces));
}catch (e30843){var e_30866 = e30843;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k_30864,"while storing",cljs.core.deref.call(null,re_frame.trace.traces),e_30866);
}
var G__30867 = cljs.core.next.call(null,seq__30832_30857__$1);
var G__30868 = null;
var G__30869 = (0);
var G__30870 = (0);
seq__30832_30844 = G__30867;
chunk__30833_30845 = G__30868;
count__30834_30846 = G__30869;
i__30835_30847 = G__30870;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_.call(null,re_frame.trace.traces,cljs.core.PersistentVector.EMPTY);
}),re_frame.trace.debounce_time);
re_frame.trace.run_tracing_callbacks_BANG_ = (function re_frame$trace$run_tracing_callbacks_BANG_(now){
if(((cljs.core.deref.call(null,re_frame.trace.next_delivery) - (10)) < now)){
re_frame.trace.schedule_debounce.call(null);

return cljs.core.reset_BANG_.call(null,re_frame.trace.next_delivery,(now + re_frame.trace.debounce_time));
} else {
return null;
}
});

//# sourceMappingURL=trace.js.map?rel=1530383435944
