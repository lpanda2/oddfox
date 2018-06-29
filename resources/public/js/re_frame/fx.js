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
var _STAR_current_trace_STAR_37533 = re_frame.trace._STAR_current_trace_STAR_;
re_frame.trace._STAR_current_trace_STAR_ = re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));

try{try{var seq__37534 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__37535 = null;
var count__37536 = (0);
var i__37537 = (0);
while(true){
if((i__37537 < count__37536)){
var vec__37538 = cljs.core._nth.call(null,chunk__37535,i__37537);
var effect_key = cljs.core.nth.call(null,vec__37538,(0),null);
var effect_value = cljs.core.nth.call(null,vec__37538,(1),null);
var temp__4655__auto___37554 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__4655__auto___37554)){
var effect_fn_37555 = temp__4655__auto___37554;
effect_fn_37555.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}

var G__37556 = seq__37534;
var G__37557 = chunk__37535;
var G__37558 = count__37536;
var G__37559 = (i__37537 + (1));
seq__37534 = G__37556;
chunk__37535 = G__37557;
count__37536 = G__37558;
i__37537 = G__37559;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__37534);
if(temp__4657__auto__){
var seq__37534__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37534__$1)){
var c__29162__auto__ = cljs.core.chunk_first.call(null,seq__37534__$1);
var G__37560 = cljs.core.chunk_rest.call(null,seq__37534__$1);
var G__37561 = c__29162__auto__;
var G__37562 = cljs.core.count.call(null,c__29162__auto__);
var G__37563 = (0);
seq__37534 = G__37560;
chunk__37535 = G__37561;
count__37536 = G__37562;
i__37537 = G__37563;
continue;
} else {
var vec__37541 = cljs.core.first.call(null,seq__37534__$1);
var effect_key = cljs.core.nth.call(null,vec__37541,(0),null);
var effect_value = cljs.core.nth.call(null,vec__37541,(1),null);
var temp__4655__auto___37564 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__4655__auto___37564)){
var effect_fn_37565 = temp__4655__auto___37564;
effect_fn_37565.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}

var G__37566 = cljs.core.next.call(null,seq__37534__$1);
var G__37567 = null;
var G__37568 = (0);
var G__37569 = (0);
seq__37534 = G__37566;
chunk__37535 = G__37567;
count__37536 = G__37568;
i__37537 = G__37569;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__30807__auto___37570 = re_frame.interop.now.call(null);
var duration__30808__auto___37571 = (end__30807__auto___37570 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.call(null,re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__30808__auto___37571,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null)));

re_frame.trace.run_tracing_callbacks_BANG_.call(null,end__30807__auto___37570);
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_37533;
}} else {
var seq__37544 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__37545 = null;
var count__37546 = (0);
var i__37547 = (0);
while(true){
if((i__37547 < count__37546)){
var vec__37548 = cljs.core._nth.call(null,chunk__37545,i__37547);
var effect_key = cljs.core.nth.call(null,vec__37548,(0),null);
var effect_value = cljs.core.nth.call(null,vec__37548,(1),null);
var temp__4655__auto___37572 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__4655__auto___37572)){
var effect_fn_37573 = temp__4655__auto___37572;
effect_fn_37573.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}

var G__37574 = seq__37544;
var G__37575 = chunk__37545;
var G__37576 = count__37546;
var G__37577 = (i__37547 + (1));
seq__37544 = G__37574;
chunk__37545 = G__37575;
count__37546 = G__37576;
i__37547 = G__37577;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__37544);
if(temp__4657__auto__){
var seq__37544__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37544__$1)){
var c__29162__auto__ = cljs.core.chunk_first.call(null,seq__37544__$1);
var G__37578 = cljs.core.chunk_rest.call(null,seq__37544__$1);
var G__37579 = c__29162__auto__;
var G__37580 = cljs.core.count.call(null,c__29162__auto__);
var G__37581 = (0);
seq__37544 = G__37578;
chunk__37545 = G__37579;
count__37546 = G__37580;
i__37547 = G__37581;
continue;
} else {
var vec__37551 = cljs.core.first.call(null,seq__37544__$1);
var effect_key = cljs.core.nth.call(null,vec__37551,(0),null);
var effect_value = cljs.core.nth.call(null,vec__37551,(1),null);
var temp__4655__auto___37582 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__4655__auto___37582)){
var effect_fn_37583 = temp__4655__auto___37582;
effect_fn_37583.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}

var G__37584 = cljs.core.next.call(null,seq__37544__$1);
var G__37585 = null;
var G__37586 = (0);
var G__37587 = (0);
seq__37544 = G__37584;
chunk__37545 = G__37585;
count__37546 = G__37586;
i__37547 = G__37587;
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
var seq__37588 = cljs.core.seq.call(null,value);
var chunk__37589 = null;
var count__37590 = (0);
var i__37591 = (0);
while(true){
if((i__37591 < count__37590)){
var map__37592 = cljs.core._nth.call(null,chunk__37589,i__37591);
var map__37592__$1 = ((((!((map__37592 == null)))?((((map__37592.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37592.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37592):map__37592);
var effect = map__37592__$1;
var ms = cljs.core.get.call(null,map__37592__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__37592__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number'))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__37588,chunk__37589,count__37590,i__37591,map__37592,map__37592__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__37588,chunk__37589,count__37590,i__37591,map__37592,map__37592__$1,effect,ms,dispatch))
,ms);
}

var G__37596 = seq__37588;
var G__37597 = chunk__37589;
var G__37598 = count__37590;
var G__37599 = (i__37591 + (1));
seq__37588 = G__37596;
chunk__37589 = G__37597;
count__37590 = G__37598;
i__37591 = G__37599;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__37588);
if(temp__4657__auto__){
var seq__37588__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37588__$1)){
var c__29162__auto__ = cljs.core.chunk_first.call(null,seq__37588__$1);
var G__37600 = cljs.core.chunk_rest.call(null,seq__37588__$1);
var G__37601 = c__29162__auto__;
var G__37602 = cljs.core.count.call(null,c__29162__auto__);
var G__37603 = (0);
seq__37588 = G__37600;
chunk__37589 = G__37601;
count__37590 = G__37602;
i__37591 = G__37603;
continue;
} else {
var map__37594 = cljs.core.first.call(null,seq__37588__$1);
var map__37594__$1 = ((((!((map__37594 == null)))?((((map__37594.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37594.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37594):map__37594);
var effect = map__37594__$1;
var ms = cljs.core.get.call(null,map__37594__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__37594__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number'))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__37588,chunk__37589,count__37590,i__37591,map__37594,map__37594__$1,effect,ms,dispatch,seq__37588__$1,temp__4657__auto__){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__37588,chunk__37589,count__37590,i__37591,map__37594,map__37594__$1,effect,ms,dispatch,seq__37588__$1,temp__4657__auto__))
,ms);
}

var G__37604 = cljs.core.next.call(null,seq__37588__$1);
var G__37605 = null;
var G__37606 = (0);
var G__37607 = (0);
seq__37588 = G__37604;
chunk__37589 = G__37605;
count__37590 = G__37606;
i__37591 = G__37607;
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
var seq__37608 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,value));
var chunk__37609 = null;
var count__37610 = (0);
var i__37611 = (0);
while(true){
if((i__37611 < count__37610)){
var event = cljs.core._nth.call(null,chunk__37609,i__37611);
re_frame.router.dispatch.call(null,event);

var G__37612 = seq__37608;
var G__37613 = chunk__37609;
var G__37614 = count__37610;
var G__37615 = (i__37611 + (1));
seq__37608 = G__37612;
chunk__37609 = G__37613;
count__37610 = G__37614;
i__37611 = G__37615;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__37608);
if(temp__4657__auto__){
var seq__37608__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37608__$1)){
var c__29162__auto__ = cljs.core.chunk_first.call(null,seq__37608__$1);
var G__37616 = cljs.core.chunk_rest.call(null,seq__37608__$1);
var G__37617 = c__29162__auto__;
var G__37618 = cljs.core.count.call(null,c__29162__auto__);
var G__37619 = (0);
seq__37608 = G__37616;
chunk__37609 = G__37617;
count__37610 = G__37618;
i__37611 = G__37619;
continue;
} else {
var event = cljs.core.first.call(null,seq__37608__$1);
re_frame.router.dispatch.call(null,event);

var G__37620 = cljs.core.next.call(null,seq__37608__$1);
var G__37621 = null;
var G__37622 = (0);
var G__37623 = (0);
seq__37608 = G__37620;
chunk__37609 = G__37621;
count__37610 = G__37622;
i__37611 = G__37623;
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
var seq__37624 = cljs.core.seq.call(null,value);
var chunk__37625 = null;
var count__37626 = (0);
var i__37627 = (0);
while(true){
if((i__37627 < count__37626)){
var event = cljs.core._nth.call(null,chunk__37625,i__37627);
clear_event.call(null,event);

var G__37628 = seq__37624;
var G__37629 = chunk__37625;
var G__37630 = count__37626;
var G__37631 = (i__37627 + (1));
seq__37624 = G__37628;
chunk__37625 = G__37629;
count__37626 = G__37630;
i__37627 = G__37631;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__37624);
if(temp__4657__auto__){
var seq__37624__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37624__$1)){
var c__29162__auto__ = cljs.core.chunk_first.call(null,seq__37624__$1);
var G__37632 = cljs.core.chunk_rest.call(null,seq__37624__$1);
var G__37633 = c__29162__auto__;
var G__37634 = cljs.core.count.call(null,c__29162__auto__);
var G__37635 = (0);
seq__37624 = G__37632;
chunk__37625 = G__37633;
count__37626 = G__37634;
i__37627 = G__37635;
continue;
} else {
var event = cljs.core.first.call(null,seq__37624__$1);
clear_event.call(null,event);

var G__37636 = cljs.core.next.call(null,seq__37624__$1);
var G__37637 = null;
var G__37638 = (0);
var G__37639 = (0);
seq__37624 = G__37636;
chunk__37625 = G__37637;
count__37626 = G__37638;
i__37627 = G__37639;
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

//# sourceMappingURL=fx.js.map?rel=1530314319363
