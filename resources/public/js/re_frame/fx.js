// Compiled by ClojureScript 1.9.908 {}
goog.provide('re_frame.fx');
goog.require('cljs.core');
goog.require('re_frame.router');
goog.require('re_frame.db');
goog.require('re_frame.interceptor');
goog.require('re_frame.interop');
goog.require('re_frame.events');
goog.require('re_frame.registrar');
goog.require('re_frame.loggers');
goog.require('re_frame.trace');
re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_(re_frame.registrar.kinds.call(null,re_frame.fx.kind))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
/**
 * Register the given effect `handler` for the given `id`.
 * 
 *   `id` is keyword, often namespaced.
 *   `handler` is a side-effecting function which takes a single argument and whose return
 *   value is ignored.
 * 
 *   Example Use
 *   -----------
 * 
 *   First, registration ... associate `:effect2` with a handler.
 * 
 *   (reg-fx
 *   :effect2
 *   (fn [value]
 *      ... do something side-effect-y))
 * 
 *   Then, later, if an event handler were to return this effects map ...
 * 
 *   {...
 * :effect2  [1 2]}
 * 
 * ... then the `handler` `fn` we registered previously, using `reg-fx`, will be
 * called with an argument of `[1 2]`.
 */
re_frame.fx.reg_fx = (function re_frame$fx$reg_fx(id,handler){
return re_frame.registrar.register_handler.call(null,re_frame.fx.kind,id,handler);
});
/**
 * An interceptor whose `:after` actions the contents of `:effects`. As a result,
 *   this interceptor is Domino 3.
 * 
 *   This interceptor is silently added (by reg-event-db etc) to the front of
 *   interceptor chains for all events.
 * 
 *   For each key in `:effects` (a map), it calls the registered `effects handler`
 *   (see `reg-fx` for registration of effect handlers).
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 * 
 *   it will call the registered effect handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`. When calling each handler, provides the map
 *   value for that key - so in the example above the effect handler for :dispatch
 *   will be given one arg `[:hello 42]`.
 * 
 *   You cannot rely on the ordering in which effects are executed.
 */
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$fx$do_fx_after(context){
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var _STAR_current_trace_STAR_37922 = re_frame.trace._STAR_current_trace_STAR_;
re_frame.trace._STAR_current_trace_STAR_ = re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));

try{try{var seq__37923 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__37924 = null;
var count__37925 = (0);
var i__37926 = (0);
while(true){
if((i__37926 < count__37925)){
var vec__37927 = cljs.core._nth.call(null,chunk__37924,i__37926);
var effect_key = cljs.core.nth.call(null,vec__37927,(0),null);
var effect_value = cljs.core.nth.call(null,vec__37927,(1),null);
var temp__4655__auto___37943 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__4655__auto___37943)){
var effect_fn_37944 = temp__4655__auto___37943;
effect_fn_37944.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}

var G__37945 = seq__37923;
var G__37946 = chunk__37924;
var G__37947 = count__37925;
var G__37948 = (i__37926 + (1));
seq__37923 = G__37945;
chunk__37924 = G__37946;
count__37925 = G__37947;
i__37926 = G__37948;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__37923);
if(temp__4657__auto__){
var seq__37923__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37923__$1)){
var c__29162__auto__ = cljs.core.chunk_first.call(null,seq__37923__$1);
var G__37949 = cljs.core.chunk_rest.call(null,seq__37923__$1);
var G__37950 = c__29162__auto__;
var G__37951 = cljs.core.count.call(null,c__29162__auto__);
var G__37952 = (0);
seq__37923 = G__37949;
chunk__37924 = G__37950;
count__37925 = G__37951;
i__37926 = G__37952;
continue;
} else {
var vec__37930 = cljs.core.first.call(null,seq__37923__$1);
var effect_key = cljs.core.nth.call(null,vec__37930,(0),null);
var effect_value = cljs.core.nth.call(null,vec__37930,(1),null);
var temp__4655__auto___37953 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__4655__auto___37953)){
var effect_fn_37954 = temp__4655__auto___37953;
effect_fn_37954.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}

var G__37955 = cljs.core.next.call(null,seq__37923__$1);
var G__37956 = null;
var G__37957 = (0);
var G__37958 = (0);
seq__37923 = G__37955;
chunk__37924 = G__37956;
count__37925 = G__37957;
i__37926 = G__37958;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__30807__auto___37959 = re_frame.interop.now.call(null);
var duration__30808__auto___37960 = (end__30807__auto___37959 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.call(null,re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__30808__auto___37960,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null)));

re_frame.trace.run_tracing_callbacks_BANG_.call(null,end__30807__auto___37959);
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_37922;
}} else {
var seq__37933 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__37934 = null;
var count__37935 = (0);
var i__37936 = (0);
while(true){
if((i__37936 < count__37935)){
var vec__37937 = cljs.core._nth.call(null,chunk__37934,i__37936);
var effect_key = cljs.core.nth.call(null,vec__37937,(0),null);
var effect_value = cljs.core.nth.call(null,vec__37937,(1),null);
var temp__4655__auto___37961 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__4655__auto___37961)){
var effect_fn_37962 = temp__4655__auto___37961;
effect_fn_37962.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}

var G__37963 = seq__37933;
var G__37964 = chunk__37934;
var G__37965 = count__37935;
var G__37966 = (i__37936 + (1));
seq__37933 = G__37963;
chunk__37934 = G__37964;
count__37935 = G__37965;
i__37936 = G__37966;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__37933);
if(temp__4657__auto__){
var seq__37933__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37933__$1)){
var c__29162__auto__ = cljs.core.chunk_first.call(null,seq__37933__$1);
var G__37967 = cljs.core.chunk_rest.call(null,seq__37933__$1);
var G__37968 = c__29162__auto__;
var G__37969 = cljs.core.count.call(null,c__29162__auto__);
var G__37970 = (0);
seq__37933 = G__37967;
chunk__37934 = G__37968;
count__37935 = G__37969;
i__37936 = G__37970;
continue;
} else {
var vec__37940 = cljs.core.first.call(null,seq__37933__$1);
var effect_key = cljs.core.nth.call(null,vec__37940,(0),null);
var effect_value = cljs.core.nth.call(null,vec__37940,(1),null);
var temp__4655__auto___37971 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__4655__auto___37971)){
var effect_fn_37972 = temp__4655__auto___37971;
effect_fn_37972.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}

var G__37973 = cljs.core.next.call(null,seq__37933__$1);
var G__37974 = null;
var G__37975 = (0);
var G__37976 = (0);
seq__37933 = G__37973;
chunk__37934 = G__37974;
count__37935 = G__37975;
i__37936 = G__37976;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
var seq__37977 = cljs.core.seq.call(null,value);
var chunk__37978 = null;
var count__37979 = (0);
var i__37980 = (0);
while(true){
if((i__37980 < count__37979)){
var map__37981 = cljs.core._nth.call(null,chunk__37978,i__37980);
var map__37981__$1 = ((((!((map__37981 == null)))?((((map__37981.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37981.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37981):map__37981);
var effect = map__37981__$1;
var ms = cljs.core.get.call(null,map__37981__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__37981__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number'))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__37977,chunk__37978,count__37979,i__37980,map__37981,map__37981__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__37977,chunk__37978,count__37979,i__37980,map__37981,map__37981__$1,effect,ms,dispatch))
,ms);
}

var G__37985 = seq__37977;
var G__37986 = chunk__37978;
var G__37987 = count__37979;
var G__37988 = (i__37980 + (1));
seq__37977 = G__37985;
chunk__37978 = G__37986;
count__37979 = G__37987;
i__37980 = G__37988;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__37977);
if(temp__4657__auto__){
var seq__37977__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37977__$1)){
var c__29162__auto__ = cljs.core.chunk_first.call(null,seq__37977__$1);
var G__37989 = cljs.core.chunk_rest.call(null,seq__37977__$1);
var G__37990 = c__29162__auto__;
var G__37991 = cljs.core.count.call(null,c__29162__auto__);
var G__37992 = (0);
seq__37977 = G__37989;
chunk__37978 = G__37990;
count__37979 = G__37991;
i__37980 = G__37992;
continue;
} else {
var map__37983 = cljs.core.first.call(null,seq__37977__$1);
var map__37983__$1 = ((((!((map__37983 == null)))?((((map__37983.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37983.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37983):map__37983);
var effect = map__37983__$1;
var ms = cljs.core.get.call(null,map__37983__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__37983__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number'))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__37977,chunk__37978,count__37979,i__37980,map__37983,map__37983__$1,effect,ms,dispatch,seq__37977__$1,temp__4657__auto__){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__37977,chunk__37978,count__37979,i__37980,map__37983,map__37983__$1,effect,ms,dispatch,seq__37977__$1,temp__4657__auto__))
,ms);
}

var G__37993 = cljs.core.next.call(null,seq__37977__$1);
var G__37994 = null;
var G__37995 = (0);
var G__37996 = (0);
seq__37977 = G__37993;
chunk__37978 = G__37994;
count__37979 = G__37995;
i__37980 = G__37996;
continue;
}
} else {
return null;
}
}
break;
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if(!(cljs.core.vector_QMARK_.call(null,value))){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value);
} else {
return re_frame.router.dispatch.call(null,value);
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if(!(cljs.core.sequential_QMARK_.call(null,value))){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-n value. Expected a collection, got got:",value);
} else {
var seq__37997 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,value));
var chunk__37998 = null;
var count__37999 = (0);
var i__38000 = (0);
while(true){
if((i__38000 < count__37999)){
var event = cljs.core._nth.call(null,chunk__37998,i__38000);
re_frame.router.dispatch.call(null,event);

var G__38001 = seq__37997;
var G__38002 = chunk__37998;
var G__38003 = count__37999;
var G__38004 = (i__38000 + (1));
seq__37997 = G__38001;
chunk__37998 = G__38002;
count__37999 = G__38003;
i__38000 = G__38004;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__37997);
if(temp__4657__auto__){
var seq__37997__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37997__$1)){
var c__29162__auto__ = cljs.core.chunk_first.call(null,seq__37997__$1);
var G__38005 = cljs.core.chunk_rest.call(null,seq__37997__$1);
var G__38006 = c__29162__auto__;
var G__38007 = cljs.core.count.call(null,c__29162__auto__);
var G__38008 = (0);
seq__37997 = G__38005;
chunk__37998 = G__38006;
count__37999 = G__38007;
i__38000 = G__38008;
continue;
} else {
var event = cljs.core.first.call(null,seq__37997__$1);
re_frame.router.dispatch.call(null,event);

var G__38009 = cljs.core.next.call(null,seq__37997__$1);
var G__38010 = null;
var G__38011 = (0);
var G__38012 = (0);
seq__37997 = G__38009;
chunk__37998 = G__38010;
count__37999 = G__38011;
i__38000 = G__38012;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.call(null,re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_.call(null,value)){
var seq__38013 = cljs.core.seq.call(null,value);
var chunk__38014 = null;
var count__38015 = (0);
var i__38016 = (0);
while(true){
if((i__38016 < count__38015)){
var event = cljs.core._nth.call(null,chunk__38014,i__38016);
clear_event.call(null,event);

var G__38017 = seq__38013;
var G__38018 = chunk__38014;
var G__38019 = count__38015;
var G__38020 = (i__38016 + (1));
seq__38013 = G__38017;
chunk__38014 = G__38018;
count__38015 = G__38019;
i__38016 = G__38020;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__38013);
if(temp__4657__auto__){
var seq__38013__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38013__$1)){
var c__29162__auto__ = cljs.core.chunk_first.call(null,seq__38013__$1);
var G__38021 = cljs.core.chunk_rest.call(null,seq__38013__$1);
var G__38022 = c__29162__auto__;
var G__38023 = cljs.core.count.call(null,c__29162__auto__);
var G__38024 = (0);
seq__38013 = G__38021;
chunk__38014 = G__38022;
count__38015 = G__38023;
i__38016 = G__38024;
continue;
} else {
var event = cljs.core.first.call(null,seq__38013__$1);
clear_event.call(null,event);

var G__38025 = cljs.core.next.call(null,seq__38013__$1);
var G__38026 = null;
var G__38027 = (0);
var G__38028 = (0);
seq__38013 = G__38025;
chunk__38014 = G__38026;
count__38015 = G__38027;
i__38016 = G__38028;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return clear_event.call(null,value);
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if(!((cljs.core.deref.call(null,re_frame.db.app_db) === value))){
return cljs.core.reset_BANG_.call(null,re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=fx.js.map?rel=1530383445920
