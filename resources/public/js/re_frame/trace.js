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
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__30885){
var map__30886 = p__30885;
var map__30886__$1 = ((((!((map__30886 == null)))?((((map__30886.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30886.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30886):map__30886);
var operation = cljs.core.get.call(null,map__30886__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var op_type = cljs.core.get.call(null,map__30886__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var tags = cljs.core.get.call(null,map__30886__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var child_of = cljs.core.get.call(null,map__30886__$1,new cljs.core.Keyword(null,"child-of","child-of",-903376662));
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
var seq__30888_30900 = cljs.core.seq.call(null,cljs.core.deref.call(null,re_frame.trace.trace_cbs));
var chunk__30889_30901 = null;
var count__30890_30902 = (0);
var i__30891_30903 = (0);
while(true){
if((i__30891_30903 < count__30890_30902)){
var vec__30892_30904 = cljs.core._nth.call(null,chunk__30889_30901,i__30891_30903);
var k_30905 = cljs.core.nth.call(null,vec__30892_30904,(0),null);
var cb_30906 = cljs.core.nth.call(null,vec__30892_30904,(1),null);
try{cb_30906.call(null,cljs.core.deref.call(null,re_frame.trace.traces));
}catch (e30895){var e_30907 = e30895;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k_30905,"while storing",cljs.core.deref.call(null,re_frame.trace.traces),e_30907);
}
var G__30908 = seq__30888_30900;
var G__30909 = chunk__30889_30901;
var G__30910 = count__30890_30902;
var G__30911 = (i__30891_30903 + (1));
seq__30888_30900 = G__30908;
chunk__30889_30901 = G__30909;
count__30890_30902 = G__30910;
i__30891_30903 = G__30911;
continue;
} else {
var temp__4657__auto___30912 = cljs.core.seq.call(null,seq__30888_30900);
if(temp__4657__auto___30912){
var seq__30888_30913__$1 = temp__4657__auto___30912;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30888_30913__$1)){
var c__29162__auto___30914 = cljs.core.chunk_first.call(null,seq__30888_30913__$1);
var G__30915 = cljs.core.chunk_rest.call(null,seq__30888_30913__$1);
var G__30916 = c__29162__auto___30914;
var G__30917 = cljs.core.count.call(null,c__29162__auto___30914);
var G__30918 = (0);
seq__30888_30900 = G__30915;
chunk__30889_30901 = G__30916;
count__30890_30902 = G__30917;
i__30891_30903 = G__30918;
continue;
} else {
var vec__30896_30919 = cljs.core.first.call(null,seq__30888_30913__$1);
var k_30920 = cljs.core.nth.call(null,vec__30896_30919,(0),null);
var cb_30921 = cljs.core.nth.call(null,vec__30896_30919,(1),null);
try{cb_30921.call(null,cljs.core.deref.call(null,re_frame.trace.traces));
}catch (e30899){var e_30922 = e30899;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k_30920,"while storing",cljs.core.deref.call(null,re_frame.trace.traces),e_30922);
}
var G__30923 = cljs.core.next.call(null,seq__30888_30913__$1);
var G__30924 = null;
var G__30925 = (0);
var G__30926 = (0);
seq__30888_30900 = G__30923;
chunk__30889_30901 = G__30924;
count__30890_30902 = G__30925;
i__30891_30903 = G__30926;
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

//# sourceMappingURL=trace.js.map?rel=1530396886975
