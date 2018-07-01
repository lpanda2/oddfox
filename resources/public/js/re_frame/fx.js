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
var _STAR_current_trace_STAR_39236 = re_frame.trace._STAR_current_trace_STAR_;
re_frame.trace._STAR_current_trace_STAR_ = re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));

try{try{var seq__39237 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__39238 = null;
var count__39239 = (0);
var i__39240 = (0);
while(true){
if((i__39240 < count__39239)){
var vec__39241 = cljs.core._nth.call(null,chunk__39238,i__39240);
var effect_key = cljs.core.nth.call(null,vec__39241,(0),null);
var effect_value = cljs.core.nth.call(null,vec__39241,(1),null);
var temp__4655__auto___39257 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__4655__auto___39257)){
var effect_fn_39258 = temp__4655__auto___39257;
effect_fn_39258.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}

var G__39259 = seq__39237;
var G__39260 = chunk__39238;
var G__39261 = count__39239;
var G__39262 = (i__39240 + (1));
seq__39237 = G__39259;
chunk__39238 = G__39260;
count__39239 = G__39261;
i__39240 = G__39262;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__39237);
if(temp__4657__auto__){
var seq__39237__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39237__$1)){
var c__29162__auto__ = cljs.core.chunk_first.call(null,seq__39237__$1);
var G__39263 = cljs.core.chunk_rest.call(null,seq__39237__$1);
var G__39264 = c__29162__auto__;
var G__39265 = cljs.core.count.call(null,c__29162__auto__);
var G__39266 = (0);
seq__39237 = G__39263;
chunk__39238 = G__39264;
count__39239 = G__39265;
i__39240 = G__39266;
continue;
} else {
var vec__39244 = cljs.core.first.call(null,seq__39237__$1);
var effect_key = cljs.core.nth.call(null,vec__39244,(0),null);
var effect_value = cljs.core.nth.call(null,vec__39244,(1),null);
var temp__4655__auto___39267 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__4655__auto___39267)){
var effect_fn_39268 = temp__4655__auto___39267;
effect_fn_39268.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}

var G__39269 = cljs.core.next.call(null,seq__39237__$1);
var G__39270 = null;
var G__39271 = (0);
var G__39272 = (0);
seq__39237 = G__39269;
chunk__39238 = G__39270;
count__39239 = G__39271;
i__39240 = G__39272;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__30863__auto___39273 = re_frame.interop.now.call(null);
var duration__30864__auto___39274 = (end__30863__auto___39273 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.call(null,re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__30864__auto___39274,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null)));

re_frame.trace.run_tracing_callbacks_BANG_.call(null,end__30863__auto___39273);
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_39236;
}} else {
var seq__39247 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__39248 = null;
var count__39249 = (0);
var i__39250 = (0);
while(true){
if((i__39250 < count__39249)){
var vec__39251 = cljs.core._nth.call(null,chunk__39248,i__39250);
var effect_key = cljs.core.nth.call(null,vec__39251,(0),null);
var effect_value = cljs.core.nth.call(null,vec__39251,(1),null);
var temp__4655__auto___39275 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__4655__auto___39275)){
var effect_fn_39276 = temp__4655__auto___39275;
effect_fn_39276.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}

var G__39277 = seq__39247;
var G__39278 = chunk__39248;
var G__39279 = count__39249;
var G__39280 = (i__39250 + (1));
seq__39247 = G__39277;
chunk__39248 = G__39278;
count__39249 = G__39279;
i__39250 = G__39280;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__39247);
if(temp__4657__auto__){
var seq__39247__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39247__$1)){
var c__29162__auto__ = cljs.core.chunk_first.call(null,seq__39247__$1);
var G__39281 = cljs.core.chunk_rest.call(null,seq__39247__$1);
var G__39282 = c__29162__auto__;
var G__39283 = cljs.core.count.call(null,c__29162__auto__);
var G__39284 = (0);
seq__39247 = G__39281;
chunk__39248 = G__39282;
count__39249 = G__39283;
i__39250 = G__39284;
continue;
} else {
var vec__39254 = cljs.core.first.call(null,seq__39247__$1);
var effect_key = cljs.core.nth.call(null,vec__39254,(0),null);
var effect_value = cljs.core.nth.call(null,vec__39254,(1),null);
var temp__4655__auto___39285 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__4655__auto___39285)){
var effect_fn_39286 = temp__4655__auto___39285;
effect_fn_39286.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}

var G__39287 = cljs.core.next.call(null,seq__39247__$1);
var G__39288 = null;
var G__39289 = (0);
var G__39290 = (0);
seq__39247 = G__39287;
chunk__39248 = G__39288;
count__39249 = G__39289;
i__39250 = G__39290;
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
var seq__39291 = cljs.core.seq.call(null,value);
var chunk__39292 = null;
var count__39293 = (0);
var i__39294 = (0);
while(true){
if((i__39294 < count__39293)){
var map__39295 = cljs.core._nth.call(null,chunk__39292,i__39294);
var map__39295__$1 = ((((!((map__39295 == null)))?((((map__39295.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39295.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39295):map__39295);
var effect = map__39295__$1;
var ms = cljs.core.get.call(null,map__39295__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__39295__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number'))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__39291,chunk__39292,count__39293,i__39294,map__39295,map__39295__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__39291,chunk__39292,count__39293,i__39294,map__39295,map__39295__$1,effect,ms,dispatch))
,ms);
}

var G__39299 = seq__39291;
var G__39300 = chunk__39292;
var G__39301 = count__39293;
var G__39302 = (i__39294 + (1));
seq__39291 = G__39299;
chunk__39292 = G__39300;
count__39293 = G__39301;
i__39294 = G__39302;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__39291);
if(temp__4657__auto__){
var seq__39291__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39291__$1)){
var c__29162__auto__ = cljs.core.chunk_first.call(null,seq__39291__$1);
var G__39303 = cljs.core.chunk_rest.call(null,seq__39291__$1);
var G__39304 = c__29162__auto__;
var G__39305 = cljs.core.count.call(null,c__29162__auto__);
var G__39306 = (0);
seq__39291 = G__39303;
chunk__39292 = G__39304;
count__39293 = G__39305;
i__39294 = G__39306;
continue;
} else {
var map__39297 = cljs.core.first.call(null,seq__39291__$1);
var map__39297__$1 = ((((!((map__39297 == null)))?((((map__39297.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39297.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39297):map__39297);
var effect = map__39297__$1;
var ms = cljs.core.get.call(null,map__39297__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__39297__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number'))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__39291,chunk__39292,count__39293,i__39294,map__39297,map__39297__$1,effect,ms,dispatch,seq__39291__$1,temp__4657__auto__){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__39291,chunk__39292,count__39293,i__39294,map__39297,map__39297__$1,effect,ms,dispatch,seq__39291__$1,temp__4657__auto__))
,ms);
}

var G__39307 = cljs.core.next.call(null,seq__39291__$1);
var G__39308 = null;
var G__39309 = (0);
var G__39310 = (0);
seq__39291 = G__39307;
chunk__39292 = G__39308;
count__39293 = G__39309;
i__39294 = G__39310;
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
var seq__39311 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,value));
var chunk__39312 = null;
var count__39313 = (0);
var i__39314 = (0);
while(true){
if((i__39314 < count__39313)){
var event = cljs.core._nth.call(null,chunk__39312,i__39314);
re_frame.router.dispatch.call(null,event);

var G__39315 = seq__39311;
var G__39316 = chunk__39312;
var G__39317 = count__39313;
var G__39318 = (i__39314 + (1));
seq__39311 = G__39315;
chunk__39312 = G__39316;
count__39313 = G__39317;
i__39314 = G__39318;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__39311);
if(temp__4657__auto__){
var seq__39311__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39311__$1)){
var c__29162__auto__ = cljs.core.chunk_first.call(null,seq__39311__$1);
var G__39319 = cljs.core.chunk_rest.call(null,seq__39311__$1);
var G__39320 = c__29162__auto__;
var G__39321 = cljs.core.count.call(null,c__29162__auto__);
var G__39322 = (0);
seq__39311 = G__39319;
chunk__39312 = G__39320;
count__39313 = G__39321;
i__39314 = G__39322;
continue;
} else {
var event = cljs.core.first.call(null,seq__39311__$1);
re_frame.router.dispatch.call(null,event);

var G__39323 = cljs.core.next.call(null,seq__39311__$1);
var G__39324 = null;
var G__39325 = (0);
var G__39326 = (0);
seq__39311 = G__39323;
chunk__39312 = G__39324;
count__39313 = G__39325;
i__39314 = G__39326;
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
var seq__39327 = cljs.core.seq.call(null,value);
var chunk__39328 = null;
var count__39329 = (0);
var i__39330 = (0);
while(true){
if((i__39330 < count__39329)){
var event = cljs.core._nth.call(null,chunk__39328,i__39330);
clear_event.call(null,event);

var G__39331 = seq__39327;
var G__39332 = chunk__39328;
var G__39333 = count__39329;
var G__39334 = (i__39330 + (1));
seq__39327 = G__39331;
chunk__39328 = G__39332;
count__39329 = G__39333;
i__39330 = G__39334;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__39327);
if(temp__4657__auto__){
var seq__39327__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39327__$1)){
var c__29162__auto__ = cljs.core.chunk_first.call(null,seq__39327__$1);
var G__39335 = cljs.core.chunk_rest.call(null,seq__39327__$1);
var G__39336 = c__29162__auto__;
var G__39337 = cljs.core.count.call(null,c__29162__auto__);
var G__39338 = (0);
seq__39327 = G__39335;
chunk__39328 = G__39336;
count__39329 = G__39337;
i__39330 = G__39338;
continue;
} else {
var event = cljs.core.first.call(null,seq__39327__$1);
clear_event.call(null,event);

var G__39339 = cljs.core.next.call(null,seq__39327__$1);
var G__39340 = null;
var G__39341 = (0);
var G__39342 = (0);
seq__39327 = G__39339;
chunk__39328 = G__39340;
count__39329 = G__39341;
i__39330 = G__39342;
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

//# sourceMappingURL=fx.js.map?rel=1530396901066
