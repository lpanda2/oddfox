// Compiled by ClojureScript 1.9.908 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__37522 = arguments.length;
switch (G__37522) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async37523 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async37523 = (function (f,blockable,meta37524){
this.f = f;
this.blockable = blockable;
this.meta37524 = meta37524;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async37523.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37525,meta37524__$1){
var self__ = this;
var _37525__$1 = this;
return (new cljs.core.async.t_cljs$core$async37523(self__.f,self__.blockable,meta37524__$1));
});

cljs.core.async.t_cljs$core$async37523.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37525){
var self__ = this;
var _37525__$1 = this;
return self__.meta37524;
});

cljs.core.async.t_cljs$core$async37523.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async37523.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async37523.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async37523.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async37523.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta37524","meta37524",763770064,null)], null);
});

cljs.core.async.t_cljs$core$async37523.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async37523.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async37523";

cljs.core.async.t_cljs$core$async37523.cljs$lang$ctorPrWriter = (function (this__34872__auto__,writer__34873__auto__,opt__34874__auto__){
return cljs.core._write.call(null,writer__34873__auto__,"cljs.core.async/t_cljs$core$async37523");
});

cljs.core.async.__GT_t_cljs$core$async37523 = (function cljs$core$async$__GT_t_cljs$core$async37523(f__$1,blockable__$1,meta37524){
return (new cljs.core.async.t_cljs$core$async37523(f__$1,blockable__$1,meta37524));
});

}

return (new cljs.core.async.t_cljs$core$async37523(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__37529 = arguments.length;
switch (G__37529) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__37532 = arguments.length;
switch (G__37532) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__37535 = arguments.length;
switch (G__37535) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_37537 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_37537);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_37537,ret){
return (function (){
return fn1.call(null,val_37537);
});})(val_37537,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__37539 = arguments.length;
switch (G__37539) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4655__auto__)){
var ret = temp__4655__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4655__auto__)){
var retb = temp__4655__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4655__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4655__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__35192__auto___37541 = n;
var x_37542 = (0);
while(true){
if((x_37542 < n__35192__auto___37541)){
(a[x_37542] = (0));

var G__37543 = (x_37542 + (1));
x_37542 = G__37543;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__37544 = (i + (1));
i = G__37544;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async37545 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async37545 = (function (flag,meta37546){
this.flag = flag;
this.meta37546 = meta37546;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async37545.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_37547,meta37546__$1){
var self__ = this;
var _37547__$1 = this;
return (new cljs.core.async.t_cljs$core$async37545(self__.flag,meta37546__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async37545.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_37547){
var self__ = this;
var _37547__$1 = this;
return self__.meta37546;
});})(flag))
;

cljs.core.async.t_cljs$core$async37545.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async37545.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async37545.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async37545.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async37545.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta37546","meta37546",-1681847304,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async37545.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async37545.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async37545";

cljs.core.async.t_cljs$core$async37545.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__34872__auto__,writer__34873__auto__,opt__34874__auto__){
return cljs.core._write.call(null,writer__34873__auto__,"cljs.core.async/t_cljs$core$async37545");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async37545 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async37545(flag__$1,meta37546){
return (new cljs.core.async.t_cljs$core$async37545(flag__$1,meta37546));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async37545(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async37548 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async37548 = (function (flag,cb,meta37549){
this.flag = flag;
this.cb = cb;
this.meta37549 = meta37549;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async37548.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37550,meta37549__$1){
var self__ = this;
var _37550__$1 = this;
return (new cljs.core.async.t_cljs$core$async37548(self__.flag,self__.cb,meta37549__$1));
});

cljs.core.async.t_cljs$core$async37548.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37550){
var self__ = this;
var _37550__$1 = this;
return self__.meta37549;
});

cljs.core.async.t_cljs$core$async37548.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async37548.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async37548.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async37548.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async37548.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta37549","meta37549",-484013451,null)], null);
});

cljs.core.async.t_cljs$core$async37548.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async37548.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async37548";

cljs.core.async.t_cljs$core$async37548.cljs$lang$ctorPrWriter = (function (this__34872__auto__,writer__34873__auto__,opt__34874__auto__){
return cljs.core._write.call(null,writer__34873__auto__,"cljs.core.async/t_cljs$core$async37548");
});

cljs.core.async.__GT_t_cljs$core$async37548 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async37548(flag__$1,cb__$1,meta37549){
return (new cljs.core.async.t_cljs$core$async37548(flag__$1,cb__$1,meta37549));
});

}

return (new cljs.core.async.t_cljs$core$async37548(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__37551_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__37551_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__37552_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__37552_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__34247__auto__ = wport;
if(cljs.core.truth_(or__34247__auto__)){
return or__34247__auto__;
} else {
return port;
}
})()], null));
} else {
var G__37553 = (i + (1));
i = G__37553;
continue;
}
} else {
return null;
}
break;
}
})();
var or__34247__auto__ = ret;
if(cljs.core.truth_(or__34247__auto__)){
return or__34247__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__34235__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__34235__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__34235__auto__;
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var got = temp__4657__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__35423__auto__ = [];
var len__35416__auto___37559 = arguments.length;
var i__35417__auto___37560 = (0);
while(true){
if((i__35417__auto___37560 < len__35416__auto___37559)){
args__35423__auto__.push((arguments[i__35417__auto___37560]));

var G__37561 = (i__35417__auto___37560 + (1));
i__35417__auto___37560 = G__37561;
continue;
} else {
}
break;
}

var argseq__35424__auto__ = ((((1) < args__35423__auto__.length))?(new cljs.core.IndexedSeq(args__35423__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__35424__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__37556){
var map__37557 = p__37556;
var map__37557__$1 = ((((!((map__37557 == null)))?((((map__37557.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37557.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37557):map__37557);
var opts = map__37557__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq37554){
var G__37555 = cljs.core.first.call(null,seq37554);
var seq37554__$1 = cljs.core.next.call(null,seq37554);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__37555,seq37554__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__37563 = arguments.length;
switch (G__37563) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__37476__auto___37609 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37476__auto___37609){
return (function (){
var f__37477__auto__ = (function (){var switch__37388__auto__ = ((function (c__37476__auto___37609){
return (function (state_37587){
var state_val_37588 = (state_37587[(1)]);
if((state_val_37588 === (7))){
var inst_37583 = (state_37587[(2)]);
var state_37587__$1 = state_37587;
var statearr_37589_37610 = state_37587__$1;
(statearr_37589_37610[(2)] = inst_37583);

(statearr_37589_37610[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37588 === (1))){
var state_37587__$1 = state_37587;
var statearr_37590_37611 = state_37587__$1;
(statearr_37590_37611[(2)] = null);

(statearr_37590_37611[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37588 === (4))){
var inst_37566 = (state_37587[(7)]);
var inst_37566__$1 = (state_37587[(2)]);
var inst_37567 = (inst_37566__$1 == null);
var state_37587__$1 = (function (){var statearr_37591 = state_37587;
(statearr_37591[(7)] = inst_37566__$1);

return statearr_37591;
})();
if(cljs.core.truth_(inst_37567)){
var statearr_37592_37612 = state_37587__$1;
(statearr_37592_37612[(1)] = (5));

} else {
var statearr_37593_37613 = state_37587__$1;
(statearr_37593_37613[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37588 === (13))){
var state_37587__$1 = state_37587;
var statearr_37594_37614 = state_37587__$1;
(statearr_37594_37614[(2)] = null);

(statearr_37594_37614[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37588 === (6))){
var inst_37566 = (state_37587[(7)]);
var state_37587__$1 = state_37587;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37587__$1,(11),to,inst_37566);
} else {
if((state_val_37588 === (3))){
var inst_37585 = (state_37587[(2)]);
var state_37587__$1 = state_37587;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37587__$1,inst_37585);
} else {
if((state_val_37588 === (12))){
var state_37587__$1 = state_37587;
var statearr_37595_37615 = state_37587__$1;
(statearr_37595_37615[(2)] = null);

(statearr_37595_37615[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37588 === (2))){
var state_37587__$1 = state_37587;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37587__$1,(4),from);
} else {
if((state_val_37588 === (11))){
var inst_37576 = (state_37587[(2)]);
var state_37587__$1 = state_37587;
if(cljs.core.truth_(inst_37576)){
var statearr_37596_37616 = state_37587__$1;
(statearr_37596_37616[(1)] = (12));

} else {
var statearr_37597_37617 = state_37587__$1;
(statearr_37597_37617[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37588 === (9))){
var state_37587__$1 = state_37587;
var statearr_37598_37618 = state_37587__$1;
(statearr_37598_37618[(2)] = null);

(statearr_37598_37618[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37588 === (5))){
var state_37587__$1 = state_37587;
if(cljs.core.truth_(close_QMARK_)){
var statearr_37599_37619 = state_37587__$1;
(statearr_37599_37619[(1)] = (8));

} else {
var statearr_37600_37620 = state_37587__$1;
(statearr_37600_37620[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37588 === (14))){
var inst_37581 = (state_37587[(2)]);
var state_37587__$1 = state_37587;
var statearr_37601_37621 = state_37587__$1;
(statearr_37601_37621[(2)] = inst_37581);

(statearr_37601_37621[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37588 === (10))){
var inst_37573 = (state_37587[(2)]);
var state_37587__$1 = state_37587;
var statearr_37602_37622 = state_37587__$1;
(statearr_37602_37622[(2)] = inst_37573);

(statearr_37602_37622[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37588 === (8))){
var inst_37570 = cljs.core.async.close_BANG_.call(null,to);
var state_37587__$1 = state_37587;
var statearr_37603_37623 = state_37587__$1;
(statearr_37603_37623[(2)] = inst_37570);

(statearr_37603_37623[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__37476__auto___37609))
;
return ((function (switch__37388__auto__,c__37476__auto___37609){
return (function() {
var cljs$core$async$state_machine__37389__auto__ = null;
var cljs$core$async$state_machine__37389__auto____0 = (function (){
var statearr_37604 = [null,null,null,null,null,null,null,null];
(statearr_37604[(0)] = cljs$core$async$state_machine__37389__auto__);

(statearr_37604[(1)] = (1));

return statearr_37604;
});
var cljs$core$async$state_machine__37389__auto____1 = (function (state_37587){
while(true){
var ret_value__37390__auto__ = (function (){try{while(true){
var result__37391__auto__ = switch__37388__auto__.call(null,state_37587);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37391__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37391__auto__;
}
break;
}
}catch (e37605){if((e37605 instanceof Object)){
var ex__37392__auto__ = e37605;
var statearr_37606_37624 = state_37587;
(statearr_37606_37624[(5)] = ex__37392__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37587);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37605;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37390__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37625 = state_37587;
state_37587 = G__37625;
continue;
} else {
return ret_value__37390__auto__;
}
break;
}
});
cljs$core$async$state_machine__37389__auto__ = function(state_37587){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37389__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37389__auto____1.call(this,state_37587);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__37389__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37389__auto____0;
cljs$core$async$state_machine__37389__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37389__auto____1;
return cljs$core$async$state_machine__37389__auto__;
})()
;})(switch__37388__auto__,c__37476__auto___37609))
})();
var state__37478__auto__ = (function (){var statearr_37607 = f__37477__auto__.call(null);
(statearr_37607[(6)] = c__37476__auto___37609);

return statearr_37607;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37478__auto__);
});})(c__37476__auto___37609))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__37626){
var vec__37627 = p__37626;
var v = cljs.core.nth.call(null,vec__37627,(0),null);
var p = cljs.core.nth.call(null,vec__37627,(1),null);
var job = vec__37627;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__37476__auto___37798 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37476__auto___37798,res,vec__37627,v,p,job,jobs,results){
return (function (){
var f__37477__auto__ = (function (){var switch__37388__auto__ = ((function (c__37476__auto___37798,res,vec__37627,v,p,job,jobs,results){
return (function (state_37634){
var state_val_37635 = (state_37634[(1)]);
if((state_val_37635 === (1))){
var state_37634__$1 = state_37634;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37634__$1,(2),res,v);
} else {
if((state_val_37635 === (2))){
var inst_37631 = (state_37634[(2)]);
var inst_37632 = cljs.core.async.close_BANG_.call(null,res);
var state_37634__$1 = (function (){var statearr_37636 = state_37634;
(statearr_37636[(7)] = inst_37631);

return statearr_37636;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37634__$1,inst_37632);
} else {
return null;
}
}
});})(c__37476__auto___37798,res,vec__37627,v,p,job,jobs,results))
;
return ((function (switch__37388__auto__,c__37476__auto___37798,res,vec__37627,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__37389__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__37389__auto____0 = (function (){
var statearr_37637 = [null,null,null,null,null,null,null,null];
(statearr_37637[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__37389__auto__);

(statearr_37637[(1)] = (1));

return statearr_37637;
});
var cljs$core$async$pipeline_STAR__$_state_machine__37389__auto____1 = (function (state_37634){
while(true){
var ret_value__37390__auto__ = (function (){try{while(true){
var result__37391__auto__ = switch__37388__auto__.call(null,state_37634);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37391__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37391__auto__;
}
break;
}
}catch (e37638){if((e37638 instanceof Object)){
var ex__37392__auto__ = e37638;
var statearr_37639_37799 = state_37634;
(statearr_37639_37799[(5)] = ex__37392__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37634);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37638;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37390__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37800 = state_37634;
state_37634 = G__37800;
continue;
} else {
return ret_value__37390__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__37389__auto__ = function(state_37634){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__37389__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__37389__auto____1.call(this,state_37634);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__37389__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__37389__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__37389__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__37389__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__37389__auto__;
})()
;})(switch__37388__auto__,c__37476__auto___37798,res,vec__37627,v,p,job,jobs,results))
})();
var state__37478__auto__ = (function (){var statearr_37640 = f__37477__auto__.call(null);
(statearr_37640[(6)] = c__37476__auto___37798);

return statearr_37640;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37478__auto__);
});})(c__37476__auto___37798,res,vec__37627,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__37641){
var vec__37642 = p__37641;
var v = cljs.core.nth.call(null,vec__37642,(0),null);
var p = cljs.core.nth.call(null,vec__37642,(1),null);
var job = vec__37642;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__35192__auto___37801 = n;
var __37802 = (0);
while(true){
if((__37802 < n__35192__auto___37801)){
var G__37645_37803 = type;
var G__37645_37804__$1 = (((G__37645_37803 instanceof cljs.core.Keyword))?G__37645_37803.fqn:null);
switch (G__37645_37804__$1) {
case "compute":
var c__37476__auto___37806 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__37802,c__37476__auto___37806,G__37645_37803,G__37645_37804__$1,n__35192__auto___37801,jobs,results,process,async){
return (function (){
var f__37477__auto__ = (function (){var switch__37388__auto__ = ((function (__37802,c__37476__auto___37806,G__37645_37803,G__37645_37804__$1,n__35192__auto___37801,jobs,results,process,async){
return (function (state_37658){
var state_val_37659 = (state_37658[(1)]);
if((state_val_37659 === (1))){
var state_37658__$1 = state_37658;
var statearr_37660_37807 = state_37658__$1;
(statearr_37660_37807[(2)] = null);

(statearr_37660_37807[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37659 === (2))){
var state_37658__$1 = state_37658;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37658__$1,(4),jobs);
} else {
if((state_val_37659 === (3))){
var inst_37656 = (state_37658[(2)]);
var state_37658__$1 = state_37658;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37658__$1,inst_37656);
} else {
if((state_val_37659 === (4))){
var inst_37648 = (state_37658[(2)]);
var inst_37649 = process.call(null,inst_37648);
var state_37658__$1 = state_37658;
if(cljs.core.truth_(inst_37649)){
var statearr_37661_37808 = state_37658__$1;
(statearr_37661_37808[(1)] = (5));

} else {
var statearr_37662_37809 = state_37658__$1;
(statearr_37662_37809[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37659 === (5))){
var state_37658__$1 = state_37658;
var statearr_37663_37810 = state_37658__$1;
(statearr_37663_37810[(2)] = null);

(statearr_37663_37810[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37659 === (6))){
var state_37658__$1 = state_37658;
var statearr_37664_37811 = state_37658__$1;
(statearr_37664_37811[(2)] = null);

(statearr_37664_37811[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37659 === (7))){
var inst_37654 = (state_37658[(2)]);
var state_37658__$1 = state_37658;
var statearr_37665_37812 = state_37658__$1;
(statearr_37665_37812[(2)] = inst_37654);

(statearr_37665_37812[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__37802,c__37476__auto___37806,G__37645_37803,G__37645_37804__$1,n__35192__auto___37801,jobs,results,process,async))
;
return ((function (__37802,switch__37388__auto__,c__37476__auto___37806,G__37645_37803,G__37645_37804__$1,n__35192__auto___37801,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__37389__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__37389__auto____0 = (function (){
var statearr_37666 = [null,null,null,null,null,null,null];
(statearr_37666[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__37389__auto__);

(statearr_37666[(1)] = (1));

return statearr_37666;
});
var cljs$core$async$pipeline_STAR__$_state_machine__37389__auto____1 = (function (state_37658){
while(true){
var ret_value__37390__auto__ = (function (){try{while(true){
var result__37391__auto__ = switch__37388__auto__.call(null,state_37658);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37391__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37391__auto__;
}
break;
}
}catch (e37667){if((e37667 instanceof Object)){
var ex__37392__auto__ = e37667;
var statearr_37668_37813 = state_37658;
(statearr_37668_37813[(5)] = ex__37392__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37658);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37667;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37390__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37814 = state_37658;
state_37658 = G__37814;
continue;
} else {
return ret_value__37390__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__37389__auto__ = function(state_37658){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__37389__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__37389__auto____1.call(this,state_37658);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__37389__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__37389__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__37389__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__37389__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__37389__auto__;
})()
;})(__37802,switch__37388__auto__,c__37476__auto___37806,G__37645_37803,G__37645_37804__$1,n__35192__auto___37801,jobs,results,process,async))
})();
var state__37478__auto__ = (function (){var statearr_37669 = f__37477__auto__.call(null);
(statearr_37669[(6)] = c__37476__auto___37806);

return statearr_37669;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37478__auto__);
});})(__37802,c__37476__auto___37806,G__37645_37803,G__37645_37804__$1,n__35192__auto___37801,jobs,results,process,async))
);


break;
case "async":
var c__37476__auto___37815 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__37802,c__37476__auto___37815,G__37645_37803,G__37645_37804__$1,n__35192__auto___37801,jobs,results,process,async){
return (function (){
var f__37477__auto__ = (function (){var switch__37388__auto__ = ((function (__37802,c__37476__auto___37815,G__37645_37803,G__37645_37804__$1,n__35192__auto___37801,jobs,results,process,async){
return (function (state_37682){
var state_val_37683 = (state_37682[(1)]);
if((state_val_37683 === (1))){
var state_37682__$1 = state_37682;
var statearr_37684_37816 = state_37682__$1;
(statearr_37684_37816[(2)] = null);

(statearr_37684_37816[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37683 === (2))){
var state_37682__$1 = state_37682;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37682__$1,(4),jobs);
} else {
if((state_val_37683 === (3))){
var inst_37680 = (state_37682[(2)]);
var state_37682__$1 = state_37682;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37682__$1,inst_37680);
} else {
if((state_val_37683 === (4))){
var inst_37672 = (state_37682[(2)]);
var inst_37673 = async.call(null,inst_37672);
var state_37682__$1 = state_37682;
if(cljs.core.truth_(inst_37673)){
var statearr_37685_37817 = state_37682__$1;
(statearr_37685_37817[(1)] = (5));

} else {
var statearr_37686_37818 = state_37682__$1;
(statearr_37686_37818[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37683 === (5))){
var state_37682__$1 = state_37682;
var statearr_37687_37819 = state_37682__$1;
(statearr_37687_37819[(2)] = null);

(statearr_37687_37819[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37683 === (6))){
var state_37682__$1 = state_37682;
var statearr_37688_37820 = state_37682__$1;
(statearr_37688_37820[(2)] = null);

(statearr_37688_37820[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37683 === (7))){
var inst_37678 = (state_37682[(2)]);
var state_37682__$1 = state_37682;
var statearr_37689_37821 = state_37682__$1;
(statearr_37689_37821[(2)] = inst_37678);

(statearr_37689_37821[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__37802,c__37476__auto___37815,G__37645_37803,G__37645_37804__$1,n__35192__auto___37801,jobs,results,process,async))
;
return ((function (__37802,switch__37388__auto__,c__37476__auto___37815,G__37645_37803,G__37645_37804__$1,n__35192__auto___37801,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__37389__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__37389__auto____0 = (function (){
var statearr_37690 = [null,null,null,null,null,null,null];
(statearr_37690[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__37389__auto__);

(statearr_37690[(1)] = (1));

return statearr_37690;
});
var cljs$core$async$pipeline_STAR__$_state_machine__37389__auto____1 = (function (state_37682){
while(true){
var ret_value__37390__auto__ = (function (){try{while(true){
var result__37391__auto__ = switch__37388__auto__.call(null,state_37682);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37391__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37391__auto__;
}
break;
}
}catch (e37691){if((e37691 instanceof Object)){
var ex__37392__auto__ = e37691;
var statearr_37692_37822 = state_37682;
(statearr_37692_37822[(5)] = ex__37392__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37682);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37691;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37390__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37823 = state_37682;
state_37682 = G__37823;
continue;
} else {
return ret_value__37390__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__37389__auto__ = function(state_37682){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__37389__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__37389__auto____1.call(this,state_37682);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__37389__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__37389__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__37389__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__37389__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__37389__auto__;
})()
;})(__37802,switch__37388__auto__,c__37476__auto___37815,G__37645_37803,G__37645_37804__$1,n__35192__auto___37801,jobs,results,process,async))
})();
var state__37478__auto__ = (function (){var statearr_37693 = f__37477__auto__.call(null);
(statearr_37693[(6)] = c__37476__auto___37815);

return statearr_37693;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37478__auto__);
});})(__37802,c__37476__auto___37815,G__37645_37803,G__37645_37804__$1,n__35192__auto___37801,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__37645_37804__$1)].join('')));

}

var G__37824 = (__37802 + (1));
__37802 = G__37824;
continue;
} else {
}
break;
}

var c__37476__auto___37825 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37476__auto___37825,jobs,results,process,async){
return (function (){
var f__37477__auto__ = (function (){var switch__37388__auto__ = ((function (c__37476__auto___37825,jobs,results,process,async){
return (function (state_37715){
var state_val_37716 = (state_37715[(1)]);
if((state_val_37716 === (1))){
var state_37715__$1 = state_37715;
var statearr_37717_37826 = state_37715__$1;
(statearr_37717_37826[(2)] = null);

(statearr_37717_37826[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37716 === (2))){
var state_37715__$1 = state_37715;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37715__$1,(4),from);
} else {
if((state_val_37716 === (3))){
var inst_37713 = (state_37715[(2)]);
var state_37715__$1 = state_37715;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37715__$1,inst_37713);
} else {
if((state_val_37716 === (4))){
var inst_37696 = (state_37715[(7)]);
var inst_37696__$1 = (state_37715[(2)]);
var inst_37697 = (inst_37696__$1 == null);
var state_37715__$1 = (function (){var statearr_37718 = state_37715;
(statearr_37718[(7)] = inst_37696__$1);

return statearr_37718;
})();
if(cljs.core.truth_(inst_37697)){
var statearr_37719_37827 = state_37715__$1;
(statearr_37719_37827[(1)] = (5));

} else {
var statearr_37720_37828 = state_37715__$1;
(statearr_37720_37828[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37716 === (5))){
var inst_37699 = cljs.core.async.close_BANG_.call(null,jobs);
var state_37715__$1 = state_37715;
var statearr_37721_37829 = state_37715__$1;
(statearr_37721_37829[(2)] = inst_37699);

(statearr_37721_37829[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37716 === (6))){
var inst_37696 = (state_37715[(7)]);
var inst_37701 = (state_37715[(8)]);
var inst_37701__$1 = cljs.core.async.chan.call(null,(1));
var inst_37702 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_37703 = [inst_37696,inst_37701__$1];
var inst_37704 = (new cljs.core.PersistentVector(null,2,(5),inst_37702,inst_37703,null));
var state_37715__$1 = (function (){var statearr_37722 = state_37715;
(statearr_37722[(8)] = inst_37701__$1);

return statearr_37722;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37715__$1,(8),jobs,inst_37704);
} else {
if((state_val_37716 === (7))){
var inst_37711 = (state_37715[(2)]);
var state_37715__$1 = state_37715;
var statearr_37723_37830 = state_37715__$1;
(statearr_37723_37830[(2)] = inst_37711);

(statearr_37723_37830[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37716 === (8))){
var inst_37701 = (state_37715[(8)]);
var inst_37706 = (state_37715[(2)]);
var state_37715__$1 = (function (){var statearr_37724 = state_37715;
(statearr_37724[(9)] = inst_37706);

return statearr_37724;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37715__$1,(9),results,inst_37701);
} else {
if((state_val_37716 === (9))){
var inst_37708 = (state_37715[(2)]);
var state_37715__$1 = (function (){var statearr_37725 = state_37715;
(statearr_37725[(10)] = inst_37708);

return statearr_37725;
})();
var statearr_37726_37831 = state_37715__$1;
(statearr_37726_37831[(2)] = null);

(statearr_37726_37831[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
});})(c__37476__auto___37825,jobs,results,process,async))
;
return ((function (switch__37388__auto__,c__37476__auto___37825,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__37389__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__37389__auto____0 = (function (){
var statearr_37727 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_37727[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__37389__auto__);

(statearr_37727[(1)] = (1));

return statearr_37727;
});
var cljs$core$async$pipeline_STAR__$_state_machine__37389__auto____1 = (function (state_37715){
while(true){
var ret_value__37390__auto__ = (function (){try{while(true){
var result__37391__auto__ = switch__37388__auto__.call(null,state_37715);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37391__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37391__auto__;
}
break;
}
}catch (e37728){if((e37728 instanceof Object)){
var ex__37392__auto__ = e37728;
var statearr_37729_37832 = state_37715;
(statearr_37729_37832[(5)] = ex__37392__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37715);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37728;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37390__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37833 = state_37715;
state_37715 = G__37833;
continue;
} else {
return ret_value__37390__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__37389__auto__ = function(state_37715){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__37389__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__37389__auto____1.call(this,state_37715);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__37389__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__37389__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__37389__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__37389__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__37389__auto__;
})()
;})(switch__37388__auto__,c__37476__auto___37825,jobs,results,process,async))
})();
var state__37478__auto__ = (function (){var statearr_37730 = f__37477__auto__.call(null);
(statearr_37730[(6)] = c__37476__auto___37825);

return statearr_37730;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37478__auto__);
});})(c__37476__auto___37825,jobs,results,process,async))
);


var c__37476__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37476__auto__,jobs,results,process,async){
return (function (){
var f__37477__auto__ = (function (){var switch__37388__auto__ = ((function (c__37476__auto__,jobs,results,process,async){
return (function (state_37768){
var state_val_37769 = (state_37768[(1)]);
if((state_val_37769 === (7))){
var inst_37764 = (state_37768[(2)]);
var state_37768__$1 = state_37768;
var statearr_37770_37834 = state_37768__$1;
(statearr_37770_37834[(2)] = inst_37764);

(statearr_37770_37834[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37769 === (20))){
var state_37768__$1 = state_37768;
var statearr_37771_37835 = state_37768__$1;
(statearr_37771_37835[(2)] = null);

(statearr_37771_37835[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37769 === (1))){
var state_37768__$1 = state_37768;
var statearr_37772_37836 = state_37768__$1;
(statearr_37772_37836[(2)] = null);

(statearr_37772_37836[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37769 === (4))){
var inst_37733 = (state_37768[(7)]);
var inst_37733__$1 = (state_37768[(2)]);
var inst_37734 = (inst_37733__$1 == null);
var state_37768__$1 = (function (){var statearr_37773 = state_37768;
(statearr_37773[(7)] = inst_37733__$1);

return statearr_37773;
})();
if(cljs.core.truth_(inst_37734)){
var statearr_37774_37837 = state_37768__$1;
(statearr_37774_37837[(1)] = (5));

} else {
var statearr_37775_37838 = state_37768__$1;
(statearr_37775_37838[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37769 === (15))){
var inst_37746 = (state_37768[(8)]);
var state_37768__$1 = state_37768;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37768__$1,(18),to,inst_37746);
} else {
if((state_val_37769 === (21))){
var inst_37759 = (state_37768[(2)]);
var state_37768__$1 = state_37768;
var statearr_37776_37839 = state_37768__$1;
(statearr_37776_37839[(2)] = inst_37759);

(statearr_37776_37839[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37769 === (13))){
var inst_37761 = (state_37768[(2)]);
var state_37768__$1 = (function (){var statearr_37777 = state_37768;
(statearr_37777[(9)] = inst_37761);

return statearr_37777;
})();
var statearr_37778_37840 = state_37768__$1;
(statearr_37778_37840[(2)] = null);

(statearr_37778_37840[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37769 === (6))){
var inst_37733 = (state_37768[(7)]);
var state_37768__$1 = state_37768;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37768__$1,(11),inst_37733);
} else {
if((state_val_37769 === (17))){
var inst_37754 = (state_37768[(2)]);
var state_37768__$1 = state_37768;
if(cljs.core.truth_(inst_37754)){
var statearr_37779_37841 = state_37768__$1;
(statearr_37779_37841[(1)] = (19));

} else {
var statearr_37780_37842 = state_37768__$1;
(statearr_37780_37842[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37769 === (3))){
var inst_37766 = (state_37768[(2)]);
var state_37768__$1 = state_37768;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37768__$1,inst_37766);
} else {
if((state_val_37769 === (12))){
var inst_37743 = (state_37768[(10)]);
var state_37768__$1 = state_37768;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37768__$1,(14),inst_37743);
} else {
if((state_val_37769 === (2))){
var state_37768__$1 = state_37768;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37768__$1,(4),results);
} else {
if((state_val_37769 === (19))){
var state_37768__$1 = state_37768;
var statearr_37781_37843 = state_37768__$1;
(statearr_37781_37843[(2)] = null);

(statearr_37781_37843[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37769 === (11))){
var inst_37743 = (state_37768[(2)]);
var state_37768__$1 = (function (){var statearr_37782 = state_37768;
(statearr_37782[(10)] = inst_37743);

return statearr_37782;
})();
var statearr_37783_37844 = state_37768__$1;
(statearr_37783_37844[(2)] = null);

(statearr_37783_37844[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37769 === (9))){
var state_37768__$1 = state_37768;
var statearr_37784_37845 = state_37768__$1;
(statearr_37784_37845[(2)] = null);

(statearr_37784_37845[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37769 === (5))){
var state_37768__$1 = state_37768;
if(cljs.core.truth_(close_QMARK_)){
var statearr_37785_37846 = state_37768__$1;
(statearr_37785_37846[(1)] = (8));

} else {
var statearr_37786_37847 = state_37768__$1;
(statearr_37786_37847[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37769 === (14))){
var inst_37746 = (state_37768[(8)]);
var inst_37748 = (state_37768[(11)]);
var inst_37746__$1 = (state_37768[(2)]);
var inst_37747 = (inst_37746__$1 == null);
var inst_37748__$1 = cljs.core.not.call(null,inst_37747);
var state_37768__$1 = (function (){var statearr_37787 = state_37768;
(statearr_37787[(8)] = inst_37746__$1);

(statearr_37787[(11)] = inst_37748__$1);

return statearr_37787;
})();
if(inst_37748__$1){
var statearr_37788_37848 = state_37768__$1;
(statearr_37788_37848[(1)] = (15));

} else {
var statearr_37789_37849 = state_37768__$1;
(statearr_37789_37849[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37769 === (16))){
var inst_37748 = (state_37768[(11)]);
var state_37768__$1 = state_37768;
var statearr_37790_37850 = state_37768__$1;
(statearr_37790_37850[(2)] = inst_37748);

(statearr_37790_37850[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37769 === (10))){
var inst_37740 = (state_37768[(2)]);
var state_37768__$1 = state_37768;
var statearr_37791_37851 = state_37768__$1;
(statearr_37791_37851[(2)] = inst_37740);

(statearr_37791_37851[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37769 === (18))){
var inst_37751 = (state_37768[(2)]);
var state_37768__$1 = state_37768;
var statearr_37792_37852 = state_37768__$1;
(statearr_37792_37852[(2)] = inst_37751);

(statearr_37792_37852[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37769 === (8))){
var inst_37737 = cljs.core.async.close_BANG_.call(null,to);
var state_37768__$1 = state_37768;
var statearr_37793_37853 = state_37768__$1;
(statearr_37793_37853[(2)] = inst_37737);

(statearr_37793_37853[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__37476__auto__,jobs,results,process,async))
;
return ((function (switch__37388__auto__,c__37476__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__37389__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__37389__auto____0 = (function (){
var statearr_37794 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37794[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__37389__auto__);

(statearr_37794[(1)] = (1));

return statearr_37794;
});
var cljs$core$async$pipeline_STAR__$_state_machine__37389__auto____1 = (function (state_37768){
while(true){
var ret_value__37390__auto__ = (function (){try{while(true){
var result__37391__auto__ = switch__37388__auto__.call(null,state_37768);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37391__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37391__auto__;
}
break;
}
}catch (e37795){if((e37795 instanceof Object)){
var ex__37392__auto__ = e37795;
var statearr_37796_37854 = state_37768;
(statearr_37796_37854[(5)] = ex__37392__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37768);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37795;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37390__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37855 = state_37768;
state_37768 = G__37855;
continue;
} else {
return ret_value__37390__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__37389__auto__ = function(state_37768){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__37389__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__37389__auto____1.call(this,state_37768);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__37389__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__37389__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__37389__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__37389__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__37389__auto__;
})()
;})(switch__37388__auto__,c__37476__auto__,jobs,results,process,async))
})();
var state__37478__auto__ = (function (){var statearr_37797 = f__37477__auto__.call(null);
(statearr_37797[(6)] = c__37476__auto__);

return statearr_37797;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37478__auto__);
});})(c__37476__auto__,jobs,results,process,async))
);

return c__37476__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__37857 = arguments.length;
switch (G__37857) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__37860 = arguments.length;
switch (G__37860) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__37863 = arguments.length;
switch (G__37863) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__37476__auto___37912 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37476__auto___37912,tc,fc){
return (function (){
var f__37477__auto__ = (function (){var switch__37388__auto__ = ((function (c__37476__auto___37912,tc,fc){
return (function (state_37889){
var state_val_37890 = (state_37889[(1)]);
if((state_val_37890 === (7))){
var inst_37885 = (state_37889[(2)]);
var state_37889__$1 = state_37889;
var statearr_37891_37913 = state_37889__$1;
(statearr_37891_37913[(2)] = inst_37885);

(statearr_37891_37913[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37890 === (1))){
var state_37889__$1 = state_37889;
var statearr_37892_37914 = state_37889__$1;
(statearr_37892_37914[(2)] = null);

(statearr_37892_37914[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37890 === (4))){
var inst_37866 = (state_37889[(7)]);
var inst_37866__$1 = (state_37889[(2)]);
var inst_37867 = (inst_37866__$1 == null);
var state_37889__$1 = (function (){var statearr_37893 = state_37889;
(statearr_37893[(7)] = inst_37866__$1);

return statearr_37893;
})();
if(cljs.core.truth_(inst_37867)){
var statearr_37894_37915 = state_37889__$1;
(statearr_37894_37915[(1)] = (5));

} else {
var statearr_37895_37916 = state_37889__$1;
(statearr_37895_37916[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37890 === (13))){
var state_37889__$1 = state_37889;
var statearr_37896_37917 = state_37889__$1;
(statearr_37896_37917[(2)] = null);

(statearr_37896_37917[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37890 === (6))){
var inst_37866 = (state_37889[(7)]);
var inst_37872 = p.call(null,inst_37866);
var state_37889__$1 = state_37889;
if(cljs.core.truth_(inst_37872)){
var statearr_37897_37918 = state_37889__$1;
(statearr_37897_37918[(1)] = (9));

} else {
var statearr_37898_37919 = state_37889__$1;
(statearr_37898_37919[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37890 === (3))){
var inst_37887 = (state_37889[(2)]);
var state_37889__$1 = state_37889;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37889__$1,inst_37887);
} else {
if((state_val_37890 === (12))){
var state_37889__$1 = state_37889;
var statearr_37899_37920 = state_37889__$1;
(statearr_37899_37920[(2)] = null);

(statearr_37899_37920[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37890 === (2))){
var state_37889__$1 = state_37889;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37889__$1,(4),ch);
} else {
if((state_val_37890 === (11))){
var inst_37866 = (state_37889[(7)]);
var inst_37876 = (state_37889[(2)]);
var state_37889__$1 = state_37889;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37889__$1,(8),inst_37876,inst_37866);
} else {
if((state_val_37890 === (9))){
var state_37889__$1 = state_37889;
var statearr_37900_37921 = state_37889__$1;
(statearr_37900_37921[(2)] = tc);

(statearr_37900_37921[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37890 === (5))){
var inst_37869 = cljs.core.async.close_BANG_.call(null,tc);
var inst_37870 = cljs.core.async.close_BANG_.call(null,fc);
var state_37889__$1 = (function (){var statearr_37901 = state_37889;
(statearr_37901[(8)] = inst_37869);

return statearr_37901;
})();
var statearr_37902_37922 = state_37889__$1;
(statearr_37902_37922[(2)] = inst_37870);

(statearr_37902_37922[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37890 === (14))){
var inst_37883 = (state_37889[(2)]);
var state_37889__$1 = state_37889;
var statearr_37903_37923 = state_37889__$1;
(statearr_37903_37923[(2)] = inst_37883);

(statearr_37903_37923[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37890 === (10))){
var state_37889__$1 = state_37889;
var statearr_37904_37924 = state_37889__$1;
(statearr_37904_37924[(2)] = fc);

(statearr_37904_37924[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37890 === (8))){
var inst_37878 = (state_37889[(2)]);
var state_37889__$1 = state_37889;
if(cljs.core.truth_(inst_37878)){
var statearr_37905_37925 = state_37889__$1;
(statearr_37905_37925[(1)] = (12));

} else {
var statearr_37906_37926 = state_37889__$1;
(statearr_37906_37926[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__37476__auto___37912,tc,fc))
;
return ((function (switch__37388__auto__,c__37476__auto___37912,tc,fc){
return (function() {
var cljs$core$async$state_machine__37389__auto__ = null;
var cljs$core$async$state_machine__37389__auto____0 = (function (){
var statearr_37907 = [null,null,null,null,null,null,null,null,null];
(statearr_37907[(0)] = cljs$core$async$state_machine__37389__auto__);

(statearr_37907[(1)] = (1));

return statearr_37907;
});
var cljs$core$async$state_machine__37389__auto____1 = (function (state_37889){
while(true){
var ret_value__37390__auto__ = (function (){try{while(true){
var result__37391__auto__ = switch__37388__auto__.call(null,state_37889);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37391__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37391__auto__;
}
break;
}
}catch (e37908){if((e37908 instanceof Object)){
var ex__37392__auto__ = e37908;
var statearr_37909_37927 = state_37889;
(statearr_37909_37927[(5)] = ex__37392__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37889);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37908;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37390__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37928 = state_37889;
state_37889 = G__37928;
continue;
} else {
return ret_value__37390__auto__;
}
break;
}
});
cljs$core$async$state_machine__37389__auto__ = function(state_37889){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37389__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37389__auto____1.call(this,state_37889);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__37389__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37389__auto____0;
cljs$core$async$state_machine__37389__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37389__auto____1;
return cljs$core$async$state_machine__37389__auto__;
})()
;})(switch__37388__auto__,c__37476__auto___37912,tc,fc))
})();
var state__37478__auto__ = (function (){var statearr_37910 = f__37477__auto__.call(null);
(statearr_37910[(6)] = c__37476__auto___37912);

return statearr_37910;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37478__auto__);
});})(c__37476__auto___37912,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__37476__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37476__auto__){
return (function (){
var f__37477__auto__ = (function (){var switch__37388__auto__ = ((function (c__37476__auto__){
return (function (state_37949){
var state_val_37950 = (state_37949[(1)]);
if((state_val_37950 === (7))){
var inst_37945 = (state_37949[(2)]);
var state_37949__$1 = state_37949;
var statearr_37951_37969 = state_37949__$1;
(statearr_37951_37969[(2)] = inst_37945);

(statearr_37951_37969[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37950 === (1))){
var inst_37929 = init;
var state_37949__$1 = (function (){var statearr_37952 = state_37949;
(statearr_37952[(7)] = inst_37929);

return statearr_37952;
})();
var statearr_37953_37970 = state_37949__$1;
(statearr_37953_37970[(2)] = null);

(statearr_37953_37970[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37950 === (4))){
var inst_37932 = (state_37949[(8)]);
var inst_37932__$1 = (state_37949[(2)]);
var inst_37933 = (inst_37932__$1 == null);
var state_37949__$1 = (function (){var statearr_37954 = state_37949;
(statearr_37954[(8)] = inst_37932__$1);

return statearr_37954;
})();
if(cljs.core.truth_(inst_37933)){
var statearr_37955_37971 = state_37949__$1;
(statearr_37955_37971[(1)] = (5));

} else {
var statearr_37956_37972 = state_37949__$1;
(statearr_37956_37972[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37950 === (6))){
var inst_37936 = (state_37949[(9)]);
var inst_37929 = (state_37949[(7)]);
var inst_37932 = (state_37949[(8)]);
var inst_37936__$1 = f.call(null,inst_37929,inst_37932);
var inst_37937 = cljs.core.reduced_QMARK_.call(null,inst_37936__$1);
var state_37949__$1 = (function (){var statearr_37957 = state_37949;
(statearr_37957[(9)] = inst_37936__$1);

return statearr_37957;
})();
if(inst_37937){
var statearr_37958_37973 = state_37949__$1;
(statearr_37958_37973[(1)] = (8));

} else {
var statearr_37959_37974 = state_37949__$1;
(statearr_37959_37974[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37950 === (3))){
var inst_37947 = (state_37949[(2)]);
var state_37949__$1 = state_37949;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37949__$1,inst_37947);
} else {
if((state_val_37950 === (2))){
var state_37949__$1 = state_37949;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37949__$1,(4),ch);
} else {
if((state_val_37950 === (9))){
var inst_37936 = (state_37949[(9)]);
var inst_37929 = inst_37936;
var state_37949__$1 = (function (){var statearr_37960 = state_37949;
(statearr_37960[(7)] = inst_37929);

return statearr_37960;
})();
var statearr_37961_37975 = state_37949__$1;
(statearr_37961_37975[(2)] = null);

(statearr_37961_37975[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37950 === (5))){
var inst_37929 = (state_37949[(7)]);
var state_37949__$1 = state_37949;
var statearr_37962_37976 = state_37949__$1;
(statearr_37962_37976[(2)] = inst_37929);

(statearr_37962_37976[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37950 === (10))){
var inst_37943 = (state_37949[(2)]);
var state_37949__$1 = state_37949;
var statearr_37963_37977 = state_37949__$1;
(statearr_37963_37977[(2)] = inst_37943);

(statearr_37963_37977[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37950 === (8))){
var inst_37936 = (state_37949[(9)]);
var inst_37939 = cljs.core.deref.call(null,inst_37936);
var state_37949__$1 = state_37949;
var statearr_37964_37978 = state_37949__$1;
(statearr_37964_37978[(2)] = inst_37939);

(statearr_37964_37978[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});})(c__37476__auto__))
;
return ((function (switch__37388__auto__,c__37476__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__37389__auto__ = null;
var cljs$core$async$reduce_$_state_machine__37389__auto____0 = (function (){
var statearr_37965 = [null,null,null,null,null,null,null,null,null,null];
(statearr_37965[(0)] = cljs$core$async$reduce_$_state_machine__37389__auto__);

(statearr_37965[(1)] = (1));

return statearr_37965;
});
var cljs$core$async$reduce_$_state_machine__37389__auto____1 = (function (state_37949){
while(true){
var ret_value__37390__auto__ = (function (){try{while(true){
var result__37391__auto__ = switch__37388__auto__.call(null,state_37949);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37391__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37391__auto__;
}
break;
}
}catch (e37966){if((e37966 instanceof Object)){
var ex__37392__auto__ = e37966;
var statearr_37967_37979 = state_37949;
(statearr_37967_37979[(5)] = ex__37392__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37949);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37966;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37390__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37980 = state_37949;
state_37949 = G__37980;
continue;
} else {
return ret_value__37390__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__37389__auto__ = function(state_37949){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__37389__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__37389__auto____1.call(this,state_37949);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__37389__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__37389__auto____0;
cljs$core$async$reduce_$_state_machine__37389__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__37389__auto____1;
return cljs$core$async$reduce_$_state_machine__37389__auto__;
})()
;})(switch__37388__auto__,c__37476__auto__))
})();
var state__37478__auto__ = (function (){var statearr_37968 = f__37477__auto__.call(null);
(statearr_37968[(6)] = c__37476__auto__);

return statearr_37968;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37478__auto__);
});})(c__37476__auto__))
);

return c__37476__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__37476__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37476__auto__,f__$1){
return (function (){
var f__37477__auto__ = (function (){var switch__37388__auto__ = ((function (c__37476__auto__,f__$1){
return (function (state_37986){
var state_val_37987 = (state_37986[(1)]);
if((state_val_37987 === (1))){
var inst_37981 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_37986__$1 = state_37986;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37986__$1,(2),inst_37981);
} else {
if((state_val_37987 === (2))){
var inst_37983 = (state_37986[(2)]);
var inst_37984 = f__$1.call(null,inst_37983);
var state_37986__$1 = state_37986;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37986__$1,inst_37984);
} else {
return null;
}
}
});})(c__37476__auto__,f__$1))
;
return ((function (switch__37388__auto__,c__37476__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__37389__auto__ = null;
var cljs$core$async$transduce_$_state_machine__37389__auto____0 = (function (){
var statearr_37988 = [null,null,null,null,null,null,null];
(statearr_37988[(0)] = cljs$core$async$transduce_$_state_machine__37389__auto__);

(statearr_37988[(1)] = (1));

return statearr_37988;
});
var cljs$core$async$transduce_$_state_machine__37389__auto____1 = (function (state_37986){
while(true){
var ret_value__37390__auto__ = (function (){try{while(true){
var result__37391__auto__ = switch__37388__auto__.call(null,state_37986);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37391__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37391__auto__;
}
break;
}
}catch (e37989){if((e37989 instanceof Object)){
var ex__37392__auto__ = e37989;
var statearr_37990_37992 = state_37986;
(statearr_37990_37992[(5)] = ex__37392__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37986);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37989;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37390__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37993 = state_37986;
state_37986 = G__37993;
continue;
} else {
return ret_value__37390__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__37389__auto__ = function(state_37986){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__37389__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__37389__auto____1.call(this,state_37986);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$transduce_$_state_machine__37389__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__37389__auto____0;
cljs$core$async$transduce_$_state_machine__37389__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__37389__auto____1;
return cljs$core$async$transduce_$_state_machine__37389__auto__;
})()
;})(switch__37388__auto__,c__37476__auto__,f__$1))
})();
var state__37478__auto__ = (function (){var statearr_37991 = f__37477__auto__.call(null);
(statearr_37991[(6)] = c__37476__auto__);

return statearr_37991;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37478__auto__);
});})(c__37476__auto__,f__$1))
);

return c__37476__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__37995 = arguments.length;
switch (G__37995) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__37476__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37476__auto__){
return (function (){
var f__37477__auto__ = (function (){var switch__37388__auto__ = ((function (c__37476__auto__){
return (function (state_38020){
var state_val_38021 = (state_38020[(1)]);
if((state_val_38021 === (7))){
var inst_38002 = (state_38020[(2)]);
var state_38020__$1 = state_38020;
var statearr_38022_38043 = state_38020__$1;
(statearr_38022_38043[(2)] = inst_38002);

(statearr_38022_38043[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38021 === (1))){
var inst_37996 = cljs.core.seq.call(null,coll);
var inst_37997 = inst_37996;
var state_38020__$1 = (function (){var statearr_38023 = state_38020;
(statearr_38023[(7)] = inst_37997);

return statearr_38023;
})();
var statearr_38024_38044 = state_38020__$1;
(statearr_38024_38044[(2)] = null);

(statearr_38024_38044[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38021 === (4))){
var inst_37997 = (state_38020[(7)]);
var inst_38000 = cljs.core.first.call(null,inst_37997);
var state_38020__$1 = state_38020;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38020__$1,(7),ch,inst_38000);
} else {
if((state_val_38021 === (13))){
var inst_38014 = (state_38020[(2)]);
var state_38020__$1 = state_38020;
var statearr_38025_38045 = state_38020__$1;
(statearr_38025_38045[(2)] = inst_38014);

(statearr_38025_38045[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38021 === (6))){
var inst_38005 = (state_38020[(2)]);
var state_38020__$1 = state_38020;
if(cljs.core.truth_(inst_38005)){
var statearr_38026_38046 = state_38020__$1;
(statearr_38026_38046[(1)] = (8));

} else {
var statearr_38027_38047 = state_38020__$1;
(statearr_38027_38047[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38021 === (3))){
var inst_38018 = (state_38020[(2)]);
var state_38020__$1 = state_38020;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38020__$1,inst_38018);
} else {
if((state_val_38021 === (12))){
var state_38020__$1 = state_38020;
var statearr_38028_38048 = state_38020__$1;
(statearr_38028_38048[(2)] = null);

(statearr_38028_38048[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38021 === (2))){
var inst_37997 = (state_38020[(7)]);
var state_38020__$1 = state_38020;
if(cljs.core.truth_(inst_37997)){
var statearr_38029_38049 = state_38020__$1;
(statearr_38029_38049[(1)] = (4));

} else {
var statearr_38030_38050 = state_38020__$1;
(statearr_38030_38050[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38021 === (11))){
var inst_38011 = cljs.core.async.close_BANG_.call(null,ch);
var state_38020__$1 = state_38020;
var statearr_38031_38051 = state_38020__$1;
(statearr_38031_38051[(2)] = inst_38011);

(statearr_38031_38051[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38021 === (9))){
var state_38020__$1 = state_38020;
if(cljs.core.truth_(close_QMARK_)){
var statearr_38032_38052 = state_38020__$1;
(statearr_38032_38052[(1)] = (11));

} else {
var statearr_38033_38053 = state_38020__$1;
(statearr_38033_38053[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38021 === (5))){
var inst_37997 = (state_38020[(7)]);
var state_38020__$1 = state_38020;
var statearr_38034_38054 = state_38020__$1;
(statearr_38034_38054[(2)] = inst_37997);

(statearr_38034_38054[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38021 === (10))){
var inst_38016 = (state_38020[(2)]);
var state_38020__$1 = state_38020;
var statearr_38035_38055 = state_38020__$1;
(statearr_38035_38055[(2)] = inst_38016);

(statearr_38035_38055[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38021 === (8))){
var inst_37997 = (state_38020[(7)]);
var inst_38007 = cljs.core.next.call(null,inst_37997);
var inst_37997__$1 = inst_38007;
var state_38020__$1 = (function (){var statearr_38036 = state_38020;
(statearr_38036[(7)] = inst_37997__$1);

return statearr_38036;
})();
var statearr_38037_38056 = state_38020__$1;
(statearr_38037_38056[(2)] = null);

(statearr_38037_38056[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__37476__auto__))
;
return ((function (switch__37388__auto__,c__37476__auto__){
return (function() {
var cljs$core$async$state_machine__37389__auto__ = null;
var cljs$core$async$state_machine__37389__auto____0 = (function (){
var statearr_38038 = [null,null,null,null,null,null,null,null];
(statearr_38038[(0)] = cljs$core$async$state_machine__37389__auto__);

(statearr_38038[(1)] = (1));

return statearr_38038;
});
var cljs$core$async$state_machine__37389__auto____1 = (function (state_38020){
while(true){
var ret_value__37390__auto__ = (function (){try{while(true){
var result__37391__auto__ = switch__37388__auto__.call(null,state_38020);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37391__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37391__auto__;
}
break;
}
}catch (e38039){if((e38039 instanceof Object)){
var ex__37392__auto__ = e38039;
var statearr_38040_38057 = state_38020;
(statearr_38040_38057[(5)] = ex__37392__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38020);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38039;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37390__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38058 = state_38020;
state_38020 = G__38058;
continue;
} else {
return ret_value__37390__auto__;
}
break;
}
});
cljs$core$async$state_machine__37389__auto__ = function(state_38020){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37389__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37389__auto____1.call(this,state_38020);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__37389__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37389__auto____0;
cljs$core$async$state_machine__37389__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37389__auto____1;
return cljs$core$async$state_machine__37389__auto__;
})()
;})(switch__37388__auto__,c__37476__auto__))
})();
var state__37478__auto__ = (function (){var statearr_38041 = f__37477__auto__.call(null);
(statearr_38041[(6)] = c__37476__auto__);

return statearr_38041;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37478__auto__);
});})(c__37476__auto__))
);

return c__37476__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__34930__auto__ = (((_ == null))?null:_);
var m__34931__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__34930__auto__)]);
if(!((m__34931__auto__ == null))){
return m__34931__auto__.call(null,_);
} else {
var m__34931__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__34931__auto____$1 == null))){
return m__34931__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__34930__auto__ = (((m == null))?null:m);
var m__34931__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__34930__auto__)]);
if(!((m__34931__auto__ == null))){
return m__34931__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__34931__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__34931__auto____$1 == null))){
return m__34931__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__34930__auto__ = (((m == null))?null:m);
var m__34931__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__34930__auto__)]);
if(!((m__34931__auto__ == null))){
return m__34931__auto__.call(null,m,ch);
} else {
var m__34931__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__34931__auto____$1 == null))){
return m__34931__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__34930__auto__ = (((m == null))?null:m);
var m__34931__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__34930__auto__)]);
if(!((m__34931__auto__ == null))){
return m__34931__auto__.call(null,m);
} else {
var m__34931__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__34931__auto____$1 == null))){
return m__34931__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async38059 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async38059 = (function (ch,cs,meta38060){
this.ch = ch;
this.cs = cs;
this.meta38060 = meta38060;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async38059.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_38061,meta38060__$1){
var self__ = this;
var _38061__$1 = this;
return (new cljs.core.async.t_cljs$core$async38059(self__.ch,self__.cs,meta38060__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async38059.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_38061){
var self__ = this;
var _38061__$1 = this;
return self__.meta38060;
});})(cs))
;

cljs.core.async.t_cljs$core$async38059.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async38059.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async38059.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async38059.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async38059.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async38059.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async38059.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta38060","meta38060",-1347403746,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async38059.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async38059.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async38059";

cljs.core.async.t_cljs$core$async38059.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__34872__auto__,writer__34873__auto__,opt__34874__auto__){
return cljs.core._write.call(null,writer__34873__auto__,"cljs.core.async/t_cljs$core$async38059");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async38059 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async38059(ch__$1,cs__$1,meta38060){
return (new cljs.core.async.t_cljs$core$async38059(ch__$1,cs__$1,meta38060));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async38059(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__37476__auto___38281 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37476__auto___38281,cs,m,dchan,dctr,done){
return (function (){
var f__37477__auto__ = (function (){var switch__37388__auto__ = ((function (c__37476__auto___38281,cs,m,dchan,dctr,done){
return (function (state_38196){
var state_val_38197 = (state_38196[(1)]);
if((state_val_38197 === (7))){
var inst_38192 = (state_38196[(2)]);
var state_38196__$1 = state_38196;
var statearr_38198_38282 = state_38196__$1;
(statearr_38198_38282[(2)] = inst_38192);

(statearr_38198_38282[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38197 === (20))){
var inst_38095 = (state_38196[(7)]);
var inst_38107 = cljs.core.first.call(null,inst_38095);
var inst_38108 = cljs.core.nth.call(null,inst_38107,(0),null);
var inst_38109 = cljs.core.nth.call(null,inst_38107,(1),null);
var state_38196__$1 = (function (){var statearr_38199 = state_38196;
(statearr_38199[(8)] = inst_38108);

return statearr_38199;
})();
if(cljs.core.truth_(inst_38109)){
var statearr_38200_38283 = state_38196__$1;
(statearr_38200_38283[(1)] = (22));

} else {
var statearr_38201_38284 = state_38196__$1;
(statearr_38201_38284[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38197 === (27))){
var inst_38139 = (state_38196[(9)]);
var inst_38144 = (state_38196[(10)]);
var inst_38137 = (state_38196[(11)]);
var inst_38064 = (state_38196[(12)]);
var inst_38144__$1 = cljs.core._nth.call(null,inst_38137,inst_38139);
var inst_38145 = cljs.core.async.put_BANG_.call(null,inst_38144__$1,inst_38064,done);
var state_38196__$1 = (function (){var statearr_38202 = state_38196;
(statearr_38202[(10)] = inst_38144__$1);

return statearr_38202;
})();
if(cljs.core.truth_(inst_38145)){
var statearr_38203_38285 = state_38196__$1;
(statearr_38203_38285[(1)] = (30));

} else {
var statearr_38204_38286 = state_38196__$1;
(statearr_38204_38286[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38197 === (1))){
var state_38196__$1 = state_38196;
var statearr_38205_38287 = state_38196__$1;
(statearr_38205_38287[(2)] = null);

(statearr_38205_38287[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38197 === (24))){
var inst_38095 = (state_38196[(7)]);
var inst_38114 = (state_38196[(2)]);
var inst_38115 = cljs.core.next.call(null,inst_38095);
var inst_38073 = inst_38115;
var inst_38074 = null;
var inst_38075 = (0);
var inst_38076 = (0);
var state_38196__$1 = (function (){var statearr_38206 = state_38196;
(statearr_38206[(13)] = inst_38073);

(statearr_38206[(14)] = inst_38114);

(statearr_38206[(15)] = inst_38074);

(statearr_38206[(16)] = inst_38076);

(statearr_38206[(17)] = inst_38075);

return statearr_38206;
})();
var statearr_38207_38288 = state_38196__$1;
(statearr_38207_38288[(2)] = null);

(statearr_38207_38288[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38197 === (39))){
var state_38196__$1 = state_38196;
var statearr_38211_38289 = state_38196__$1;
(statearr_38211_38289[(2)] = null);

(statearr_38211_38289[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38197 === (4))){
var inst_38064 = (state_38196[(12)]);
var inst_38064__$1 = (state_38196[(2)]);
var inst_38065 = (inst_38064__$1 == null);
var state_38196__$1 = (function (){var statearr_38212 = state_38196;
(statearr_38212[(12)] = inst_38064__$1);

return statearr_38212;
})();
if(cljs.core.truth_(inst_38065)){
var statearr_38213_38290 = state_38196__$1;
(statearr_38213_38290[(1)] = (5));

} else {
var statearr_38214_38291 = state_38196__$1;
(statearr_38214_38291[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38197 === (15))){
var inst_38073 = (state_38196[(13)]);
var inst_38074 = (state_38196[(15)]);
var inst_38076 = (state_38196[(16)]);
var inst_38075 = (state_38196[(17)]);
var inst_38091 = (state_38196[(2)]);
var inst_38092 = (inst_38076 + (1));
var tmp38208 = inst_38073;
var tmp38209 = inst_38074;
var tmp38210 = inst_38075;
var inst_38073__$1 = tmp38208;
var inst_38074__$1 = tmp38209;
var inst_38075__$1 = tmp38210;
var inst_38076__$1 = inst_38092;
var state_38196__$1 = (function (){var statearr_38215 = state_38196;
(statearr_38215[(18)] = inst_38091);

(statearr_38215[(13)] = inst_38073__$1);

(statearr_38215[(15)] = inst_38074__$1);

(statearr_38215[(16)] = inst_38076__$1);

(statearr_38215[(17)] = inst_38075__$1);

return statearr_38215;
})();
var statearr_38216_38292 = state_38196__$1;
(statearr_38216_38292[(2)] = null);

(statearr_38216_38292[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38197 === (21))){
var inst_38118 = (state_38196[(2)]);
var state_38196__$1 = state_38196;
var statearr_38220_38293 = state_38196__$1;
(statearr_38220_38293[(2)] = inst_38118);

(statearr_38220_38293[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38197 === (31))){
var inst_38144 = (state_38196[(10)]);
var inst_38148 = done.call(null,null);
var inst_38149 = cljs.core.async.untap_STAR_.call(null,m,inst_38144);
var state_38196__$1 = (function (){var statearr_38221 = state_38196;
(statearr_38221[(19)] = inst_38148);

return statearr_38221;
})();
var statearr_38222_38294 = state_38196__$1;
(statearr_38222_38294[(2)] = inst_38149);

(statearr_38222_38294[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38197 === (32))){
var inst_38139 = (state_38196[(9)]);
var inst_38137 = (state_38196[(11)]);
var inst_38138 = (state_38196[(20)]);
var inst_38136 = (state_38196[(21)]);
var inst_38151 = (state_38196[(2)]);
var inst_38152 = (inst_38139 + (1));
var tmp38217 = inst_38137;
var tmp38218 = inst_38138;
var tmp38219 = inst_38136;
var inst_38136__$1 = tmp38219;
var inst_38137__$1 = tmp38217;
var inst_38138__$1 = tmp38218;
var inst_38139__$1 = inst_38152;
var state_38196__$1 = (function (){var statearr_38223 = state_38196;
(statearr_38223[(9)] = inst_38139__$1);

(statearr_38223[(11)] = inst_38137__$1);

(statearr_38223[(20)] = inst_38138__$1);

(statearr_38223[(21)] = inst_38136__$1);

(statearr_38223[(22)] = inst_38151);

return statearr_38223;
})();
var statearr_38224_38295 = state_38196__$1;
(statearr_38224_38295[(2)] = null);

(statearr_38224_38295[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38197 === (40))){
var inst_38164 = (state_38196[(23)]);
var inst_38168 = done.call(null,null);
var inst_38169 = cljs.core.async.untap_STAR_.call(null,m,inst_38164);
var state_38196__$1 = (function (){var statearr_38225 = state_38196;
(statearr_38225[(24)] = inst_38168);

return statearr_38225;
})();
var statearr_38226_38296 = state_38196__$1;
(statearr_38226_38296[(2)] = inst_38169);

(statearr_38226_38296[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38197 === (33))){
var inst_38155 = (state_38196[(25)]);
var inst_38157 = cljs.core.chunked_seq_QMARK_.call(null,inst_38155);
var state_38196__$1 = state_38196;
if(inst_38157){
var statearr_38227_38297 = state_38196__$1;
(statearr_38227_38297[(1)] = (36));

} else {
var statearr_38228_38298 = state_38196__$1;
(statearr_38228_38298[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38197 === (13))){
var inst_38085 = (state_38196[(26)]);
var inst_38088 = cljs.core.async.close_BANG_.call(null,inst_38085);
var state_38196__$1 = state_38196;
var statearr_38229_38299 = state_38196__$1;
(statearr_38229_38299[(2)] = inst_38088);

(statearr_38229_38299[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38197 === (22))){
var inst_38108 = (state_38196[(8)]);
var inst_38111 = cljs.core.async.close_BANG_.call(null,inst_38108);
var state_38196__$1 = state_38196;
var statearr_38230_38300 = state_38196__$1;
(statearr_38230_38300[(2)] = inst_38111);

(statearr_38230_38300[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38197 === (36))){
var inst_38155 = (state_38196[(25)]);
var inst_38159 = cljs.core.chunk_first.call(null,inst_38155);
var inst_38160 = cljs.core.chunk_rest.call(null,inst_38155);
var inst_38161 = cljs.core.count.call(null,inst_38159);
var inst_38136 = inst_38160;
var inst_38137 = inst_38159;
var inst_38138 = inst_38161;
var inst_38139 = (0);
var state_38196__$1 = (function (){var statearr_38231 = state_38196;
(statearr_38231[(9)] = inst_38139);

(statearr_38231[(11)] = inst_38137);

(statearr_38231[(20)] = inst_38138);

(statearr_38231[(21)] = inst_38136);

return statearr_38231;
})();
var statearr_38232_38301 = state_38196__$1;
(statearr_38232_38301[(2)] = null);

(statearr_38232_38301[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38197 === (41))){
var inst_38155 = (state_38196[(25)]);
var inst_38171 = (state_38196[(2)]);
var inst_38172 = cljs.core.next.call(null,inst_38155);
var inst_38136 = inst_38172;
var inst_38137 = null;
var inst_38138 = (0);
var inst_38139 = (0);
var state_38196__$1 = (function (){var statearr_38233 = state_38196;
(statearr_38233[(27)] = inst_38171);

(statearr_38233[(9)] = inst_38139);

(statearr_38233[(11)] = inst_38137);

(statearr_38233[(20)] = inst_38138);

(statearr_38233[(21)] = inst_38136);

return statearr_38233;
})();
var statearr_38234_38302 = state_38196__$1;
(statearr_38234_38302[(2)] = null);

(statearr_38234_38302[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38197 === (43))){
var state_38196__$1 = state_38196;
var statearr_38235_38303 = state_38196__$1;
(statearr_38235_38303[(2)] = null);

(statearr_38235_38303[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38197 === (29))){
var inst_38180 = (state_38196[(2)]);
var state_38196__$1 = state_38196;
var statearr_38236_38304 = state_38196__$1;
(statearr_38236_38304[(2)] = inst_38180);

(statearr_38236_38304[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38197 === (44))){
var inst_38189 = (state_38196[(2)]);
var state_38196__$1 = (function (){var statearr_38237 = state_38196;
(statearr_38237[(28)] = inst_38189);

return statearr_38237;
})();
var statearr_38238_38305 = state_38196__$1;
(statearr_38238_38305[(2)] = null);

(statearr_38238_38305[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38197 === (6))){
var inst_38128 = (state_38196[(29)]);
var inst_38127 = cljs.core.deref.call(null,cs);
var inst_38128__$1 = cljs.core.keys.call(null,inst_38127);
var inst_38129 = cljs.core.count.call(null,inst_38128__$1);
var inst_38130 = cljs.core.reset_BANG_.call(null,dctr,inst_38129);
var inst_38135 = cljs.core.seq.call(null,inst_38128__$1);
var inst_38136 = inst_38135;
var inst_38137 = null;
var inst_38138 = (0);
var inst_38139 = (0);
var state_38196__$1 = (function (){var statearr_38239 = state_38196;
(statearr_38239[(29)] = inst_38128__$1);

(statearr_38239[(30)] = inst_38130);

(statearr_38239[(9)] = inst_38139);

(statearr_38239[(11)] = inst_38137);

(statearr_38239[(20)] = inst_38138);

(statearr_38239[(21)] = inst_38136);

return statearr_38239;
})();
var statearr_38240_38306 = state_38196__$1;
(statearr_38240_38306[(2)] = null);

(statearr_38240_38306[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38197 === (28))){
var inst_38136 = (state_38196[(21)]);
var inst_38155 = (state_38196[(25)]);
var inst_38155__$1 = cljs.core.seq.call(null,inst_38136);
var state_38196__$1 = (function (){var statearr_38241 = state_38196;
(statearr_38241[(25)] = inst_38155__$1);

return statearr_38241;
})();
if(inst_38155__$1){
var statearr_38242_38307 = state_38196__$1;
(statearr_38242_38307[(1)] = (33));

} else {
var statearr_38243_38308 = state_38196__$1;
(statearr_38243_38308[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38197 === (25))){
var inst_38139 = (state_38196[(9)]);
var inst_38138 = (state_38196[(20)]);
var inst_38141 = (inst_38139 < inst_38138);
var inst_38142 = inst_38141;
var state_38196__$1 = state_38196;
if(cljs.core.truth_(inst_38142)){
var statearr_38244_38309 = state_38196__$1;
(statearr_38244_38309[(1)] = (27));

} else {
var statearr_38245_38310 = state_38196__$1;
(statearr_38245_38310[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38197 === (34))){
var state_38196__$1 = state_38196;
var statearr_38246_38311 = state_38196__$1;
(statearr_38246_38311[(2)] = null);

(statearr_38246_38311[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38197 === (17))){
var state_38196__$1 = state_38196;
var statearr_38247_38312 = state_38196__$1;
(statearr_38247_38312[(2)] = null);

(statearr_38247_38312[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38197 === (3))){
var inst_38194 = (state_38196[(2)]);
var state_38196__$1 = state_38196;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38196__$1,inst_38194);
} else {
if((state_val_38197 === (12))){
var inst_38123 = (state_38196[(2)]);
var state_38196__$1 = state_38196;
var statearr_38248_38313 = state_38196__$1;
(statearr_38248_38313[(2)] = inst_38123);

(statearr_38248_38313[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38197 === (2))){
var state_38196__$1 = state_38196;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38196__$1,(4),ch);
} else {
if((state_val_38197 === (23))){
var state_38196__$1 = state_38196;
var statearr_38249_38314 = state_38196__$1;
(statearr_38249_38314[(2)] = null);

(statearr_38249_38314[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38197 === (35))){
var inst_38178 = (state_38196[(2)]);
var state_38196__$1 = state_38196;
var statearr_38250_38315 = state_38196__$1;
(statearr_38250_38315[(2)] = inst_38178);

(statearr_38250_38315[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38197 === (19))){
var inst_38095 = (state_38196[(7)]);
var inst_38099 = cljs.core.chunk_first.call(null,inst_38095);
var inst_38100 = cljs.core.chunk_rest.call(null,inst_38095);
var inst_38101 = cljs.core.count.call(null,inst_38099);
var inst_38073 = inst_38100;
var inst_38074 = inst_38099;
var inst_38075 = inst_38101;
var inst_38076 = (0);
var state_38196__$1 = (function (){var statearr_38251 = state_38196;
(statearr_38251[(13)] = inst_38073);

(statearr_38251[(15)] = inst_38074);

(statearr_38251[(16)] = inst_38076);

(statearr_38251[(17)] = inst_38075);

return statearr_38251;
})();
var statearr_38252_38316 = state_38196__$1;
(statearr_38252_38316[(2)] = null);

(statearr_38252_38316[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38197 === (11))){
var inst_38073 = (state_38196[(13)]);
var inst_38095 = (state_38196[(7)]);
var inst_38095__$1 = cljs.core.seq.call(null,inst_38073);
var state_38196__$1 = (function (){var statearr_38253 = state_38196;
(statearr_38253[(7)] = inst_38095__$1);

return statearr_38253;
})();
if(inst_38095__$1){
var statearr_38254_38317 = state_38196__$1;
(statearr_38254_38317[(1)] = (16));

} else {
var statearr_38255_38318 = state_38196__$1;
(statearr_38255_38318[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38197 === (9))){
var inst_38125 = (state_38196[(2)]);
var state_38196__$1 = state_38196;
var statearr_38256_38319 = state_38196__$1;
(statearr_38256_38319[(2)] = inst_38125);

(statearr_38256_38319[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38197 === (5))){
var inst_38071 = cljs.core.deref.call(null,cs);
var inst_38072 = cljs.core.seq.call(null,inst_38071);
var inst_38073 = inst_38072;
var inst_38074 = null;
var inst_38075 = (0);
var inst_38076 = (0);
var state_38196__$1 = (function (){var statearr_38257 = state_38196;
(statearr_38257[(13)] = inst_38073);

(statearr_38257[(15)] = inst_38074);

(statearr_38257[(16)] = inst_38076);

(statearr_38257[(17)] = inst_38075);

return statearr_38257;
})();
var statearr_38258_38320 = state_38196__$1;
(statearr_38258_38320[(2)] = null);

(statearr_38258_38320[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38197 === (14))){
var state_38196__$1 = state_38196;
var statearr_38259_38321 = state_38196__$1;
(statearr_38259_38321[(2)] = null);

(statearr_38259_38321[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38197 === (45))){
var inst_38186 = (state_38196[(2)]);
var state_38196__$1 = state_38196;
var statearr_38260_38322 = state_38196__$1;
(statearr_38260_38322[(2)] = inst_38186);

(statearr_38260_38322[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38197 === (26))){
var inst_38128 = (state_38196[(29)]);
var inst_38182 = (state_38196[(2)]);
var inst_38183 = cljs.core.seq.call(null,inst_38128);
var state_38196__$1 = (function (){var statearr_38261 = state_38196;
(statearr_38261[(31)] = inst_38182);

return statearr_38261;
})();
if(inst_38183){
var statearr_38262_38323 = state_38196__$1;
(statearr_38262_38323[(1)] = (42));

} else {
var statearr_38263_38324 = state_38196__$1;
(statearr_38263_38324[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38197 === (16))){
var inst_38095 = (state_38196[(7)]);
var inst_38097 = cljs.core.chunked_seq_QMARK_.call(null,inst_38095);
var state_38196__$1 = state_38196;
if(inst_38097){
var statearr_38264_38325 = state_38196__$1;
(statearr_38264_38325[(1)] = (19));

} else {
var statearr_38265_38326 = state_38196__$1;
(statearr_38265_38326[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38197 === (38))){
var inst_38175 = (state_38196[(2)]);
var state_38196__$1 = state_38196;
var statearr_38266_38327 = state_38196__$1;
(statearr_38266_38327[(2)] = inst_38175);

(statearr_38266_38327[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38197 === (30))){
var state_38196__$1 = state_38196;
var statearr_38267_38328 = state_38196__$1;
(statearr_38267_38328[(2)] = null);

(statearr_38267_38328[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38197 === (10))){
var inst_38074 = (state_38196[(15)]);
var inst_38076 = (state_38196[(16)]);
var inst_38084 = cljs.core._nth.call(null,inst_38074,inst_38076);
var inst_38085 = cljs.core.nth.call(null,inst_38084,(0),null);
var inst_38086 = cljs.core.nth.call(null,inst_38084,(1),null);
var state_38196__$1 = (function (){var statearr_38268 = state_38196;
(statearr_38268[(26)] = inst_38085);

return statearr_38268;
})();
if(cljs.core.truth_(inst_38086)){
var statearr_38269_38329 = state_38196__$1;
(statearr_38269_38329[(1)] = (13));

} else {
var statearr_38270_38330 = state_38196__$1;
(statearr_38270_38330[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38197 === (18))){
var inst_38121 = (state_38196[(2)]);
var state_38196__$1 = state_38196;
var statearr_38271_38331 = state_38196__$1;
(statearr_38271_38331[(2)] = inst_38121);

(statearr_38271_38331[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38197 === (42))){
var state_38196__$1 = state_38196;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38196__$1,(45),dchan);
} else {
if((state_val_38197 === (37))){
var inst_38064 = (state_38196[(12)]);
var inst_38164 = (state_38196[(23)]);
var inst_38155 = (state_38196[(25)]);
var inst_38164__$1 = cljs.core.first.call(null,inst_38155);
var inst_38165 = cljs.core.async.put_BANG_.call(null,inst_38164__$1,inst_38064,done);
var state_38196__$1 = (function (){var statearr_38272 = state_38196;
(statearr_38272[(23)] = inst_38164__$1);

return statearr_38272;
})();
if(cljs.core.truth_(inst_38165)){
var statearr_38273_38332 = state_38196__$1;
(statearr_38273_38332[(1)] = (39));

} else {
var statearr_38274_38333 = state_38196__$1;
(statearr_38274_38333[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38197 === (8))){
var inst_38076 = (state_38196[(16)]);
var inst_38075 = (state_38196[(17)]);
var inst_38078 = (inst_38076 < inst_38075);
var inst_38079 = inst_38078;
var state_38196__$1 = state_38196;
if(cljs.core.truth_(inst_38079)){
var statearr_38275_38334 = state_38196__$1;
(statearr_38275_38334[(1)] = (10));

} else {
var statearr_38276_38335 = state_38196__$1;
(statearr_38276_38335[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__37476__auto___38281,cs,m,dchan,dctr,done))
;
return ((function (switch__37388__auto__,c__37476__auto___38281,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__37389__auto__ = null;
var cljs$core$async$mult_$_state_machine__37389__auto____0 = (function (){
var statearr_38277 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38277[(0)] = cljs$core$async$mult_$_state_machine__37389__auto__);

(statearr_38277[(1)] = (1));

return statearr_38277;
});
var cljs$core$async$mult_$_state_machine__37389__auto____1 = (function (state_38196){
while(true){
var ret_value__37390__auto__ = (function (){try{while(true){
var result__37391__auto__ = switch__37388__auto__.call(null,state_38196);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37391__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37391__auto__;
}
break;
}
}catch (e38278){if((e38278 instanceof Object)){
var ex__37392__auto__ = e38278;
var statearr_38279_38336 = state_38196;
(statearr_38279_38336[(5)] = ex__37392__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38196);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38278;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37390__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38337 = state_38196;
state_38196 = G__38337;
continue;
} else {
return ret_value__37390__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__37389__auto__ = function(state_38196){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__37389__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__37389__auto____1.call(this,state_38196);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__37389__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__37389__auto____0;
cljs$core$async$mult_$_state_machine__37389__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__37389__auto____1;
return cljs$core$async$mult_$_state_machine__37389__auto__;
})()
;})(switch__37388__auto__,c__37476__auto___38281,cs,m,dchan,dctr,done))
})();
var state__37478__auto__ = (function (){var statearr_38280 = f__37477__auto__.call(null);
(statearr_38280[(6)] = c__37476__auto___38281);

return statearr_38280;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37478__auto__);
});})(c__37476__auto___38281,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__38339 = arguments.length;
switch (G__38339) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__34930__auto__ = (((m == null))?null:m);
var m__34931__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__34930__auto__)]);
if(!((m__34931__auto__ == null))){
return m__34931__auto__.call(null,m,ch);
} else {
var m__34931__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__34931__auto____$1 == null))){
return m__34931__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__34930__auto__ = (((m == null))?null:m);
var m__34931__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__34930__auto__)]);
if(!((m__34931__auto__ == null))){
return m__34931__auto__.call(null,m,ch);
} else {
var m__34931__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__34931__auto____$1 == null))){
return m__34931__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__34930__auto__ = (((m == null))?null:m);
var m__34931__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__34930__auto__)]);
if(!((m__34931__auto__ == null))){
return m__34931__auto__.call(null,m);
} else {
var m__34931__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__34931__auto____$1 == null))){
return m__34931__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__34930__auto__ = (((m == null))?null:m);
var m__34931__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__34930__auto__)]);
if(!((m__34931__auto__ == null))){
return m__34931__auto__.call(null,m,state_map);
} else {
var m__34931__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__34931__auto____$1 == null))){
return m__34931__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__34930__auto__ = (((m == null))?null:m);
var m__34931__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__34930__auto__)]);
if(!((m__34931__auto__ == null))){
return m__34931__auto__.call(null,m,mode);
} else {
var m__34931__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__34931__auto____$1 == null))){
return m__34931__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__35423__auto__ = [];
var len__35416__auto___38351 = arguments.length;
var i__35417__auto___38352 = (0);
while(true){
if((i__35417__auto___38352 < len__35416__auto___38351)){
args__35423__auto__.push((arguments[i__35417__auto___38352]));

var G__38353 = (i__35417__auto___38352 + (1));
i__35417__auto___38352 = G__38353;
continue;
} else {
}
break;
}

var argseq__35424__auto__ = ((((3) < args__35423__auto__.length))?(new cljs.core.IndexedSeq(args__35423__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__35424__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__38345){
var map__38346 = p__38345;
var map__38346__$1 = ((((!((map__38346 == null)))?((((map__38346.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38346.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38346):map__38346);
var opts = map__38346__$1;
var statearr_38348_38354 = state;
(statearr_38348_38354[(1)] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__38346,map__38346__$1,opts){
return (function (val){
var statearr_38349_38355 = state;
(statearr_38349_38355[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__38346,map__38346__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_38350_38356 = state;
(statearr_38350_38356[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq38341){
var G__38342 = cljs.core.first.call(null,seq38341);
var seq38341__$1 = cljs.core.next.call(null,seq38341);
var G__38343 = cljs.core.first.call(null,seq38341__$1);
var seq38341__$2 = cljs.core.next.call(null,seq38341__$1);
var G__38344 = cljs.core.first.call(null,seq38341__$2);
var seq38341__$3 = cljs.core.next.call(null,seq38341__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__38342,G__38343,G__38344,seq38341__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async38357 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async38357 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta38358){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta38358 = meta38358;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async38357.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_38359,meta38358__$1){
var self__ = this;
var _38359__$1 = this;
return (new cljs.core.async.t_cljs$core$async38357(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta38358__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async38357.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_38359){
var self__ = this;
var _38359__$1 = this;
return self__.meta38358;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async38357.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async38357.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async38357.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async38357.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async38357.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async38357.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async38357.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async38357.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join('')),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async38357.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta38358","meta38358",-2046943466,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async38357.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async38357.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async38357";

cljs.core.async.t_cljs$core$async38357.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__34872__auto__,writer__34873__auto__,opt__34874__auto__){
return cljs.core._write.call(null,writer__34873__auto__,"cljs.core.async/t_cljs$core$async38357");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async38357 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async38357(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta38358){
return (new cljs.core.async.t_cljs$core$async38357(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta38358));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async38357(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__37476__auto___38521 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37476__auto___38521,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__37477__auto__ = (function (){var switch__37388__auto__ = ((function (c__37476__auto___38521,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_38461){
var state_val_38462 = (state_38461[(1)]);
if((state_val_38462 === (7))){
var inst_38376 = (state_38461[(2)]);
var state_38461__$1 = state_38461;
var statearr_38463_38522 = state_38461__$1;
(statearr_38463_38522[(2)] = inst_38376);

(statearr_38463_38522[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38462 === (20))){
var inst_38388 = (state_38461[(7)]);
var state_38461__$1 = state_38461;
var statearr_38464_38523 = state_38461__$1;
(statearr_38464_38523[(2)] = inst_38388);

(statearr_38464_38523[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38462 === (27))){
var state_38461__$1 = state_38461;
var statearr_38465_38524 = state_38461__$1;
(statearr_38465_38524[(2)] = null);

(statearr_38465_38524[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38462 === (1))){
var inst_38363 = (state_38461[(8)]);
var inst_38363__$1 = calc_state.call(null);
var inst_38365 = (inst_38363__$1 == null);
var inst_38366 = cljs.core.not.call(null,inst_38365);
var state_38461__$1 = (function (){var statearr_38466 = state_38461;
(statearr_38466[(8)] = inst_38363__$1);

return statearr_38466;
})();
if(inst_38366){
var statearr_38467_38525 = state_38461__$1;
(statearr_38467_38525[(1)] = (2));

} else {
var statearr_38468_38526 = state_38461__$1;
(statearr_38468_38526[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38462 === (24))){
var inst_38421 = (state_38461[(9)]);
var inst_38412 = (state_38461[(10)]);
var inst_38435 = (state_38461[(11)]);
var inst_38435__$1 = inst_38412.call(null,inst_38421);
var state_38461__$1 = (function (){var statearr_38469 = state_38461;
(statearr_38469[(11)] = inst_38435__$1);

return statearr_38469;
})();
if(cljs.core.truth_(inst_38435__$1)){
var statearr_38470_38527 = state_38461__$1;
(statearr_38470_38527[(1)] = (29));

} else {
var statearr_38471_38528 = state_38461__$1;
(statearr_38471_38528[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38462 === (4))){
var inst_38379 = (state_38461[(2)]);
var state_38461__$1 = state_38461;
if(cljs.core.truth_(inst_38379)){
var statearr_38472_38529 = state_38461__$1;
(statearr_38472_38529[(1)] = (8));

} else {
var statearr_38473_38530 = state_38461__$1;
(statearr_38473_38530[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38462 === (15))){
var inst_38406 = (state_38461[(2)]);
var state_38461__$1 = state_38461;
if(cljs.core.truth_(inst_38406)){
var statearr_38474_38531 = state_38461__$1;
(statearr_38474_38531[(1)] = (19));

} else {
var statearr_38475_38532 = state_38461__$1;
(statearr_38475_38532[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38462 === (21))){
var inst_38411 = (state_38461[(12)]);
var inst_38411__$1 = (state_38461[(2)]);
var inst_38412 = cljs.core.get.call(null,inst_38411__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_38413 = cljs.core.get.call(null,inst_38411__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_38414 = cljs.core.get.call(null,inst_38411__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_38461__$1 = (function (){var statearr_38476 = state_38461;
(statearr_38476[(13)] = inst_38413);

(statearr_38476[(10)] = inst_38412);

(statearr_38476[(12)] = inst_38411__$1);

return statearr_38476;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_38461__$1,(22),inst_38414);
} else {
if((state_val_38462 === (31))){
var inst_38443 = (state_38461[(2)]);
var state_38461__$1 = state_38461;
if(cljs.core.truth_(inst_38443)){
var statearr_38477_38533 = state_38461__$1;
(statearr_38477_38533[(1)] = (32));

} else {
var statearr_38478_38534 = state_38461__$1;
(statearr_38478_38534[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38462 === (32))){
var inst_38420 = (state_38461[(14)]);
var state_38461__$1 = state_38461;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38461__$1,(35),out,inst_38420);
} else {
if((state_val_38462 === (33))){
var inst_38411 = (state_38461[(12)]);
var inst_38388 = inst_38411;
var state_38461__$1 = (function (){var statearr_38479 = state_38461;
(statearr_38479[(7)] = inst_38388);

return statearr_38479;
})();
var statearr_38480_38535 = state_38461__$1;
(statearr_38480_38535[(2)] = null);

(statearr_38480_38535[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38462 === (13))){
var inst_38388 = (state_38461[(7)]);
var inst_38395 = inst_38388.cljs$lang$protocol_mask$partition0$;
var inst_38396 = (inst_38395 & (64));
var inst_38397 = inst_38388.cljs$core$ISeq$;
var inst_38398 = (cljs.core.PROTOCOL_SENTINEL === inst_38397);
var inst_38399 = (inst_38396) || (inst_38398);
var state_38461__$1 = state_38461;
if(cljs.core.truth_(inst_38399)){
var statearr_38481_38536 = state_38461__$1;
(statearr_38481_38536[(1)] = (16));

} else {
var statearr_38482_38537 = state_38461__$1;
(statearr_38482_38537[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38462 === (22))){
var inst_38421 = (state_38461[(9)]);
var inst_38420 = (state_38461[(14)]);
var inst_38419 = (state_38461[(2)]);
var inst_38420__$1 = cljs.core.nth.call(null,inst_38419,(0),null);
var inst_38421__$1 = cljs.core.nth.call(null,inst_38419,(1),null);
var inst_38422 = (inst_38420__$1 == null);
var inst_38423 = cljs.core._EQ_.call(null,inst_38421__$1,change);
var inst_38424 = (inst_38422) || (inst_38423);
var state_38461__$1 = (function (){var statearr_38483 = state_38461;
(statearr_38483[(9)] = inst_38421__$1);

(statearr_38483[(14)] = inst_38420__$1);

return statearr_38483;
})();
if(cljs.core.truth_(inst_38424)){
var statearr_38484_38538 = state_38461__$1;
(statearr_38484_38538[(1)] = (23));

} else {
var statearr_38485_38539 = state_38461__$1;
(statearr_38485_38539[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38462 === (36))){
var inst_38411 = (state_38461[(12)]);
var inst_38388 = inst_38411;
var state_38461__$1 = (function (){var statearr_38486 = state_38461;
(statearr_38486[(7)] = inst_38388);

return statearr_38486;
})();
var statearr_38487_38540 = state_38461__$1;
(statearr_38487_38540[(2)] = null);

(statearr_38487_38540[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38462 === (29))){
var inst_38435 = (state_38461[(11)]);
var state_38461__$1 = state_38461;
var statearr_38488_38541 = state_38461__$1;
(statearr_38488_38541[(2)] = inst_38435);

(statearr_38488_38541[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38462 === (6))){
var state_38461__$1 = state_38461;
var statearr_38489_38542 = state_38461__$1;
(statearr_38489_38542[(2)] = false);

(statearr_38489_38542[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38462 === (28))){
var inst_38431 = (state_38461[(2)]);
var inst_38432 = calc_state.call(null);
var inst_38388 = inst_38432;
var state_38461__$1 = (function (){var statearr_38490 = state_38461;
(statearr_38490[(7)] = inst_38388);

(statearr_38490[(15)] = inst_38431);

return statearr_38490;
})();
var statearr_38491_38543 = state_38461__$1;
(statearr_38491_38543[(2)] = null);

(statearr_38491_38543[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38462 === (25))){
var inst_38457 = (state_38461[(2)]);
var state_38461__$1 = state_38461;
var statearr_38492_38544 = state_38461__$1;
(statearr_38492_38544[(2)] = inst_38457);

(statearr_38492_38544[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38462 === (34))){
var inst_38455 = (state_38461[(2)]);
var state_38461__$1 = state_38461;
var statearr_38493_38545 = state_38461__$1;
(statearr_38493_38545[(2)] = inst_38455);

(statearr_38493_38545[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38462 === (17))){
var state_38461__$1 = state_38461;
var statearr_38494_38546 = state_38461__$1;
(statearr_38494_38546[(2)] = false);

(statearr_38494_38546[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38462 === (3))){
var state_38461__$1 = state_38461;
var statearr_38495_38547 = state_38461__$1;
(statearr_38495_38547[(2)] = false);

(statearr_38495_38547[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38462 === (12))){
var inst_38459 = (state_38461[(2)]);
var state_38461__$1 = state_38461;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38461__$1,inst_38459);
} else {
if((state_val_38462 === (2))){
var inst_38363 = (state_38461[(8)]);
var inst_38368 = inst_38363.cljs$lang$protocol_mask$partition0$;
var inst_38369 = (inst_38368 & (64));
var inst_38370 = inst_38363.cljs$core$ISeq$;
var inst_38371 = (cljs.core.PROTOCOL_SENTINEL === inst_38370);
var inst_38372 = (inst_38369) || (inst_38371);
var state_38461__$1 = state_38461;
if(cljs.core.truth_(inst_38372)){
var statearr_38496_38548 = state_38461__$1;
(statearr_38496_38548[(1)] = (5));

} else {
var statearr_38497_38549 = state_38461__$1;
(statearr_38497_38549[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38462 === (23))){
var inst_38420 = (state_38461[(14)]);
var inst_38426 = (inst_38420 == null);
var state_38461__$1 = state_38461;
if(cljs.core.truth_(inst_38426)){
var statearr_38498_38550 = state_38461__$1;
(statearr_38498_38550[(1)] = (26));

} else {
var statearr_38499_38551 = state_38461__$1;
(statearr_38499_38551[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38462 === (35))){
var inst_38446 = (state_38461[(2)]);
var state_38461__$1 = state_38461;
if(cljs.core.truth_(inst_38446)){
var statearr_38500_38552 = state_38461__$1;
(statearr_38500_38552[(1)] = (36));

} else {
var statearr_38501_38553 = state_38461__$1;
(statearr_38501_38553[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38462 === (19))){
var inst_38388 = (state_38461[(7)]);
var inst_38408 = cljs.core.apply.call(null,cljs.core.hash_map,inst_38388);
var state_38461__$1 = state_38461;
var statearr_38502_38554 = state_38461__$1;
(statearr_38502_38554[(2)] = inst_38408);

(statearr_38502_38554[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38462 === (11))){
var inst_38388 = (state_38461[(7)]);
var inst_38392 = (inst_38388 == null);
var inst_38393 = cljs.core.not.call(null,inst_38392);
var state_38461__$1 = state_38461;
if(inst_38393){
var statearr_38503_38555 = state_38461__$1;
(statearr_38503_38555[(1)] = (13));

} else {
var statearr_38504_38556 = state_38461__$1;
(statearr_38504_38556[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38462 === (9))){
var inst_38363 = (state_38461[(8)]);
var state_38461__$1 = state_38461;
var statearr_38505_38557 = state_38461__$1;
(statearr_38505_38557[(2)] = inst_38363);

(statearr_38505_38557[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38462 === (5))){
var state_38461__$1 = state_38461;
var statearr_38506_38558 = state_38461__$1;
(statearr_38506_38558[(2)] = true);

(statearr_38506_38558[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38462 === (14))){
var state_38461__$1 = state_38461;
var statearr_38507_38559 = state_38461__$1;
(statearr_38507_38559[(2)] = false);

(statearr_38507_38559[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38462 === (26))){
var inst_38421 = (state_38461[(9)]);
var inst_38428 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_38421);
var state_38461__$1 = state_38461;
var statearr_38508_38560 = state_38461__$1;
(statearr_38508_38560[(2)] = inst_38428);

(statearr_38508_38560[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38462 === (16))){
var state_38461__$1 = state_38461;
var statearr_38509_38561 = state_38461__$1;
(statearr_38509_38561[(2)] = true);

(statearr_38509_38561[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38462 === (38))){
var inst_38451 = (state_38461[(2)]);
var state_38461__$1 = state_38461;
var statearr_38510_38562 = state_38461__$1;
(statearr_38510_38562[(2)] = inst_38451);

(statearr_38510_38562[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38462 === (30))){
var inst_38421 = (state_38461[(9)]);
var inst_38413 = (state_38461[(13)]);
var inst_38412 = (state_38461[(10)]);
var inst_38438 = cljs.core.empty_QMARK_.call(null,inst_38412);
var inst_38439 = inst_38413.call(null,inst_38421);
var inst_38440 = cljs.core.not.call(null,inst_38439);
var inst_38441 = (inst_38438) && (inst_38440);
var state_38461__$1 = state_38461;
var statearr_38511_38563 = state_38461__$1;
(statearr_38511_38563[(2)] = inst_38441);

(statearr_38511_38563[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38462 === (10))){
var inst_38363 = (state_38461[(8)]);
var inst_38384 = (state_38461[(2)]);
var inst_38385 = cljs.core.get.call(null,inst_38384,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_38386 = cljs.core.get.call(null,inst_38384,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_38387 = cljs.core.get.call(null,inst_38384,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_38388 = inst_38363;
var state_38461__$1 = (function (){var statearr_38512 = state_38461;
(statearr_38512[(16)] = inst_38386);

(statearr_38512[(17)] = inst_38385);

(statearr_38512[(18)] = inst_38387);

(statearr_38512[(7)] = inst_38388);

return statearr_38512;
})();
var statearr_38513_38564 = state_38461__$1;
(statearr_38513_38564[(2)] = null);

(statearr_38513_38564[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38462 === (18))){
var inst_38403 = (state_38461[(2)]);
var state_38461__$1 = state_38461;
var statearr_38514_38565 = state_38461__$1;
(statearr_38514_38565[(2)] = inst_38403);

(statearr_38514_38565[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38462 === (37))){
var state_38461__$1 = state_38461;
var statearr_38515_38566 = state_38461__$1;
(statearr_38515_38566[(2)] = null);

(statearr_38515_38566[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38462 === (8))){
var inst_38363 = (state_38461[(8)]);
var inst_38381 = cljs.core.apply.call(null,cljs.core.hash_map,inst_38363);
var state_38461__$1 = state_38461;
var statearr_38516_38567 = state_38461__$1;
(statearr_38516_38567[(2)] = inst_38381);

(statearr_38516_38567[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__37476__auto___38521,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__37388__auto__,c__37476__auto___38521,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__37389__auto__ = null;
var cljs$core$async$mix_$_state_machine__37389__auto____0 = (function (){
var statearr_38517 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38517[(0)] = cljs$core$async$mix_$_state_machine__37389__auto__);

(statearr_38517[(1)] = (1));

return statearr_38517;
});
var cljs$core$async$mix_$_state_machine__37389__auto____1 = (function (state_38461){
while(true){
var ret_value__37390__auto__ = (function (){try{while(true){
var result__37391__auto__ = switch__37388__auto__.call(null,state_38461);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37391__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37391__auto__;
}
break;
}
}catch (e38518){if((e38518 instanceof Object)){
var ex__37392__auto__ = e38518;
var statearr_38519_38568 = state_38461;
(statearr_38519_38568[(5)] = ex__37392__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38461);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38518;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37390__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38569 = state_38461;
state_38461 = G__38569;
continue;
} else {
return ret_value__37390__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__37389__auto__ = function(state_38461){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__37389__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__37389__auto____1.call(this,state_38461);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__37389__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__37389__auto____0;
cljs$core$async$mix_$_state_machine__37389__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__37389__auto____1;
return cljs$core$async$mix_$_state_machine__37389__auto__;
})()
;})(switch__37388__auto__,c__37476__auto___38521,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__37478__auto__ = (function (){var statearr_38520 = f__37477__auto__.call(null);
(statearr_38520[(6)] = c__37476__auto___38521);

return statearr_38520;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37478__auto__);
});})(c__37476__auto___38521,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__34930__auto__ = (((p == null))?null:p);
var m__34931__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__34930__auto__)]);
if(!((m__34931__auto__ == null))){
return m__34931__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__34931__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__34931__auto____$1 == null))){
return m__34931__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__34930__auto__ = (((p == null))?null:p);
var m__34931__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__34930__auto__)]);
if(!((m__34931__auto__ == null))){
return m__34931__auto__.call(null,p,v,ch);
} else {
var m__34931__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__34931__auto____$1 == null))){
return m__34931__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__38571 = arguments.length;
switch (G__38571) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__34930__auto__ = (((p == null))?null:p);
var m__34931__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__34930__auto__)]);
if(!((m__34931__auto__ == null))){
return m__34931__auto__.call(null,p);
} else {
var m__34931__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__34931__auto____$1 == null))){
return m__34931__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__34930__auto__ = (((p == null))?null:p);
var m__34931__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__34930__auto__)]);
if(!((m__34931__auto__ == null))){
return m__34931__auto__.call(null,p,v);
} else {
var m__34931__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__34931__auto____$1 == null))){
return m__34931__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__38575 = arguments.length;
switch (G__38575) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__34247__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__34247__auto__)){
return or__34247__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__34247__auto__,mults){
return (function (p1__38573_SHARP_){
if(cljs.core.truth_(p1__38573_SHARP_.call(null,topic))){
return p1__38573_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__38573_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__34247__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async38576 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async38576 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta38577){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta38577 = meta38577;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async38576.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_38578,meta38577__$1){
var self__ = this;
var _38578__$1 = this;
return (new cljs.core.async.t_cljs$core$async38576(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta38577__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async38576.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_38578){
var self__ = this;
var _38578__$1 = this;
return self__.meta38577;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async38576.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async38576.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async38576.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async38576.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async38576.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4657__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4657__auto__)){
var m = temp__4657__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async38576.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async38576.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async38576.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta38577","meta38577",993978165,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async38576.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async38576.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async38576";

cljs.core.async.t_cljs$core$async38576.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__34872__auto__,writer__34873__auto__,opt__34874__auto__){
return cljs.core._write.call(null,writer__34873__auto__,"cljs.core.async/t_cljs$core$async38576");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async38576 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async38576(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta38577){
return (new cljs.core.async.t_cljs$core$async38576(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta38577));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async38576(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__37476__auto___38696 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37476__auto___38696,mults,ensure_mult,p){
return (function (){
var f__37477__auto__ = (function (){var switch__37388__auto__ = ((function (c__37476__auto___38696,mults,ensure_mult,p){
return (function (state_38650){
var state_val_38651 = (state_38650[(1)]);
if((state_val_38651 === (7))){
var inst_38646 = (state_38650[(2)]);
var state_38650__$1 = state_38650;
var statearr_38652_38697 = state_38650__$1;
(statearr_38652_38697[(2)] = inst_38646);

(statearr_38652_38697[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38651 === (20))){
var state_38650__$1 = state_38650;
var statearr_38653_38698 = state_38650__$1;
(statearr_38653_38698[(2)] = null);

(statearr_38653_38698[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38651 === (1))){
var state_38650__$1 = state_38650;
var statearr_38654_38699 = state_38650__$1;
(statearr_38654_38699[(2)] = null);

(statearr_38654_38699[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38651 === (24))){
var inst_38629 = (state_38650[(7)]);
var inst_38638 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_38629);
var state_38650__$1 = state_38650;
var statearr_38655_38700 = state_38650__$1;
(statearr_38655_38700[(2)] = inst_38638);

(statearr_38655_38700[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38651 === (4))){
var inst_38581 = (state_38650[(8)]);
var inst_38581__$1 = (state_38650[(2)]);
var inst_38582 = (inst_38581__$1 == null);
var state_38650__$1 = (function (){var statearr_38656 = state_38650;
(statearr_38656[(8)] = inst_38581__$1);

return statearr_38656;
})();
if(cljs.core.truth_(inst_38582)){
var statearr_38657_38701 = state_38650__$1;
(statearr_38657_38701[(1)] = (5));

} else {
var statearr_38658_38702 = state_38650__$1;
(statearr_38658_38702[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38651 === (15))){
var inst_38623 = (state_38650[(2)]);
var state_38650__$1 = state_38650;
var statearr_38659_38703 = state_38650__$1;
(statearr_38659_38703[(2)] = inst_38623);

(statearr_38659_38703[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38651 === (21))){
var inst_38643 = (state_38650[(2)]);
var state_38650__$1 = (function (){var statearr_38660 = state_38650;
(statearr_38660[(9)] = inst_38643);

return statearr_38660;
})();
var statearr_38661_38704 = state_38650__$1;
(statearr_38661_38704[(2)] = null);

(statearr_38661_38704[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38651 === (13))){
var inst_38605 = (state_38650[(10)]);
var inst_38607 = cljs.core.chunked_seq_QMARK_.call(null,inst_38605);
var state_38650__$1 = state_38650;
if(inst_38607){
var statearr_38662_38705 = state_38650__$1;
(statearr_38662_38705[(1)] = (16));

} else {
var statearr_38663_38706 = state_38650__$1;
(statearr_38663_38706[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38651 === (22))){
var inst_38635 = (state_38650[(2)]);
var state_38650__$1 = state_38650;
if(cljs.core.truth_(inst_38635)){
var statearr_38664_38707 = state_38650__$1;
(statearr_38664_38707[(1)] = (23));

} else {
var statearr_38665_38708 = state_38650__$1;
(statearr_38665_38708[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38651 === (6))){
var inst_38629 = (state_38650[(7)]);
var inst_38581 = (state_38650[(8)]);
var inst_38631 = (state_38650[(11)]);
var inst_38629__$1 = topic_fn.call(null,inst_38581);
var inst_38630 = cljs.core.deref.call(null,mults);
var inst_38631__$1 = cljs.core.get.call(null,inst_38630,inst_38629__$1);
var state_38650__$1 = (function (){var statearr_38666 = state_38650;
(statearr_38666[(7)] = inst_38629__$1);

(statearr_38666[(11)] = inst_38631__$1);

return statearr_38666;
})();
if(cljs.core.truth_(inst_38631__$1)){
var statearr_38667_38709 = state_38650__$1;
(statearr_38667_38709[(1)] = (19));

} else {
var statearr_38668_38710 = state_38650__$1;
(statearr_38668_38710[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38651 === (25))){
var inst_38640 = (state_38650[(2)]);
var state_38650__$1 = state_38650;
var statearr_38669_38711 = state_38650__$1;
(statearr_38669_38711[(2)] = inst_38640);

(statearr_38669_38711[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38651 === (17))){
var inst_38605 = (state_38650[(10)]);
var inst_38614 = cljs.core.first.call(null,inst_38605);
var inst_38615 = cljs.core.async.muxch_STAR_.call(null,inst_38614);
var inst_38616 = cljs.core.async.close_BANG_.call(null,inst_38615);
var inst_38617 = cljs.core.next.call(null,inst_38605);
var inst_38591 = inst_38617;
var inst_38592 = null;
var inst_38593 = (0);
var inst_38594 = (0);
var state_38650__$1 = (function (){var statearr_38670 = state_38650;
(statearr_38670[(12)] = inst_38591);

(statearr_38670[(13)] = inst_38594);

(statearr_38670[(14)] = inst_38616);

(statearr_38670[(15)] = inst_38593);

(statearr_38670[(16)] = inst_38592);

return statearr_38670;
})();
var statearr_38671_38712 = state_38650__$1;
(statearr_38671_38712[(2)] = null);

(statearr_38671_38712[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38651 === (3))){
var inst_38648 = (state_38650[(2)]);
var state_38650__$1 = state_38650;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38650__$1,inst_38648);
} else {
if((state_val_38651 === (12))){
var inst_38625 = (state_38650[(2)]);
var state_38650__$1 = state_38650;
var statearr_38672_38713 = state_38650__$1;
(statearr_38672_38713[(2)] = inst_38625);

(statearr_38672_38713[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38651 === (2))){
var state_38650__$1 = state_38650;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38650__$1,(4),ch);
} else {
if((state_val_38651 === (23))){
var state_38650__$1 = state_38650;
var statearr_38673_38714 = state_38650__$1;
(statearr_38673_38714[(2)] = null);

(statearr_38673_38714[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38651 === (19))){
var inst_38581 = (state_38650[(8)]);
var inst_38631 = (state_38650[(11)]);
var inst_38633 = cljs.core.async.muxch_STAR_.call(null,inst_38631);
var state_38650__$1 = state_38650;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38650__$1,(22),inst_38633,inst_38581);
} else {
if((state_val_38651 === (11))){
var inst_38591 = (state_38650[(12)]);
var inst_38605 = (state_38650[(10)]);
var inst_38605__$1 = cljs.core.seq.call(null,inst_38591);
var state_38650__$1 = (function (){var statearr_38674 = state_38650;
(statearr_38674[(10)] = inst_38605__$1);

return statearr_38674;
})();
if(inst_38605__$1){
var statearr_38675_38715 = state_38650__$1;
(statearr_38675_38715[(1)] = (13));

} else {
var statearr_38676_38716 = state_38650__$1;
(statearr_38676_38716[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38651 === (9))){
var inst_38627 = (state_38650[(2)]);
var state_38650__$1 = state_38650;
var statearr_38677_38717 = state_38650__$1;
(statearr_38677_38717[(2)] = inst_38627);

(statearr_38677_38717[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38651 === (5))){
var inst_38588 = cljs.core.deref.call(null,mults);
var inst_38589 = cljs.core.vals.call(null,inst_38588);
var inst_38590 = cljs.core.seq.call(null,inst_38589);
var inst_38591 = inst_38590;
var inst_38592 = null;
var inst_38593 = (0);
var inst_38594 = (0);
var state_38650__$1 = (function (){var statearr_38678 = state_38650;
(statearr_38678[(12)] = inst_38591);

(statearr_38678[(13)] = inst_38594);

(statearr_38678[(15)] = inst_38593);

(statearr_38678[(16)] = inst_38592);

return statearr_38678;
})();
var statearr_38679_38718 = state_38650__$1;
(statearr_38679_38718[(2)] = null);

(statearr_38679_38718[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38651 === (14))){
var state_38650__$1 = state_38650;
var statearr_38683_38719 = state_38650__$1;
(statearr_38683_38719[(2)] = null);

(statearr_38683_38719[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38651 === (16))){
var inst_38605 = (state_38650[(10)]);
var inst_38609 = cljs.core.chunk_first.call(null,inst_38605);
var inst_38610 = cljs.core.chunk_rest.call(null,inst_38605);
var inst_38611 = cljs.core.count.call(null,inst_38609);
var inst_38591 = inst_38610;
var inst_38592 = inst_38609;
var inst_38593 = inst_38611;
var inst_38594 = (0);
var state_38650__$1 = (function (){var statearr_38684 = state_38650;
(statearr_38684[(12)] = inst_38591);

(statearr_38684[(13)] = inst_38594);

(statearr_38684[(15)] = inst_38593);

(statearr_38684[(16)] = inst_38592);

return statearr_38684;
})();
var statearr_38685_38720 = state_38650__$1;
(statearr_38685_38720[(2)] = null);

(statearr_38685_38720[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38651 === (10))){
var inst_38591 = (state_38650[(12)]);
var inst_38594 = (state_38650[(13)]);
var inst_38593 = (state_38650[(15)]);
var inst_38592 = (state_38650[(16)]);
var inst_38599 = cljs.core._nth.call(null,inst_38592,inst_38594);
var inst_38600 = cljs.core.async.muxch_STAR_.call(null,inst_38599);
var inst_38601 = cljs.core.async.close_BANG_.call(null,inst_38600);
var inst_38602 = (inst_38594 + (1));
var tmp38680 = inst_38591;
var tmp38681 = inst_38593;
var tmp38682 = inst_38592;
var inst_38591__$1 = tmp38680;
var inst_38592__$1 = tmp38682;
var inst_38593__$1 = tmp38681;
var inst_38594__$1 = inst_38602;
var state_38650__$1 = (function (){var statearr_38686 = state_38650;
(statearr_38686[(12)] = inst_38591__$1);

(statearr_38686[(13)] = inst_38594__$1);

(statearr_38686[(17)] = inst_38601);

(statearr_38686[(15)] = inst_38593__$1);

(statearr_38686[(16)] = inst_38592__$1);

return statearr_38686;
})();
var statearr_38687_38721 = state_38650__$1;
(statearr_38687_38721[(2)] = null);

(statearr_38687_38721[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38651 === (18))){
var inst_38620 = (state_38650[(2)]);
var state_38650__$1 = state_38650;
var statearr_38688_38722 = state_38650__$1;
(statearr_38688_38722[(2)] = inst_38620);

(statearr_38688_38722[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38651 === (8))){
var inst_38594 = (state_38650[(13)]);
var inst_38593 = (state_38650[(15)]);
var inst_38596 = (inst_38594 < inst_38593);
var inst_38597 = inst_38596;
var state_38650__$1 = state_38650;
if(cljs.core.truth_(inst_38597)){
var statearr_38689_38723 = state_38650__$1;
(statearr_38689_38723[(1)] = (10));

} else {
var statearr_38690_38724 = state_38650__$1;
(statearr_38690_38724[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__37476__auto___38696,mults,ensure_mult,p))
;
return ((function (switch__37388__auto__,c__37476__auto___38696,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__37389__auto__ = null;
var cljs$core$async$state_machine__37389__auto____0 = (function (){
var statearr_38691 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38691[(0)] = cljs$core$async$state_machine__37389__auto__);

(statearr_38691[(1)] = (1));

return statearr_38691;
});
var cljs$core$async$state_machine__37389__auto____1 = (function (state_38650){
while(true){
var ret_value__37390__auto__ = (function (){try{while(true){
var result__37391__auto__ = switch__37388__auto__.call(null,state_38650);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37391__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37391__auto__;
}
break;
}
}catch (e38692){if((e38692 instanceof Object)){
var ex__37392__auto__ = e38692;
var statearr_38693_38725 = state_38650;
(statearr_38693_38725[(5)] = ex__37392__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38650);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38692;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37390__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38726 = state_38650;
state_38650 = G__38726;
continue;
} else {
return ret_value__37390__auto__;
}
break;
}
});
cljs$core$async$state_machine__37389__auto__ = function(state_38650){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37389__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37389__auto____1.call(this,state_38650);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__37389__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37389__auto____0;
cljs$core$async$state_machine__37389__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37389__auto____1;
return cljs$core$async$state_machine__37389__auto__;
})()
;})(switch__37388__auto__,c__37476__auto___38696,mults,ensure_mult,p))
})();
var state__37478__auto__ = (function (){var statearr_38694 = f__37477__auto__.call(null);
(statearr_38694[(6)] = c__37476__auto___38696);

return statearr_38694;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37478__auto__);
});})(c__37476__auto___38696,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__38728 = arguments.length;
switch (G__38728) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__38731 = arguments.length;
switch (G__38731) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__38734 = arguments.length;
switch (G__38734) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__37476__auto___38801 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37476__auto___38801,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__37477__auto__ = (function (){var switch__37388__auto__ = ((function (c__37476__auto___38801,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_38773){
var state_val_38774 = (state_38773[(1)]);
if((state_val_38774 === (7))){
var state_38773__$1 = state_38773;
var statearr_38775_38802 = state_38773__$1;
(statearr_38775_38802[(2)] = null);

(statearr_38775_38802[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38774 === (1))){
var state_38773__$1 = state_38773;
var statearr_38776_38803 = state_38773__$1;
(statearr_38776_38803[(2)] = null);

(statearr_38776_38803[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38774 === (4))){
var inst_38737 = (state_38773[(7)]);
var inst_38739 = (inst_38737 < cnt);
var state_38773__$1 = state_38773;
if(cljs.core.truth_(inst_38739)){
var statearr_38777_38804 = state_38773__$1;
(statearr_38777_38804[(1)] = (6));

} else {
var statearr_38778_38805 = state_38773__$1;
(statearr_38778_38805[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38774 === (15))){
var inst_38769 = (state_38773[(2)]);
var state_38773__$1 = state_38773;
var statearr_38779_38806 = state_38773__$1;
(statearr_38779_38806[(2)] = inst_38769);

(statearr_38779_38806[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38774 === (13))){
var inst_38762 = cljs.core.async.close_BANG_.call(null,out);
var state_38773__$1 = state_38773;
var statearr_38780_38807 = state_38773__$1;
(statearr_38780_38807[(2)] = inst_38762);

(statearr_38780_38807[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38774 === (6))){
var state_38773__$1 = state_38773;
var statearr_38781_38808 = state_38773__$1;
(statearr_38781_38808[(2)] = null);

(statearr_38781_38808[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38774 === (3))){
var inst_38771 = (state_38773[(2)]);
var state_38773__$1 = state_38773;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38773__$1,inst_38771);
} else {
if((state_val_38774 === (12))){
var inst_38759 = (state_38773[(8)]);
var inst_38759__$1 = (state_38773[(2)]);
var inst_38760 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_38759__$1);
var state_38773__$1 = (function (){var statearr_38782 = state_38773;
(statearr_38782[(8)] = inst_38759__$1);

return statearr_38782;
})();
if(cljs.core.truth_(inst_38760)){
var statearr_38783_38809 = state_38773__$1;
(statearr_38783_38809[(1)] = (13));

} else {
var statearr_38784_38810 = state_38773__$1;
(statearr_38784_38810[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38774 === (2))){
var inst_38736 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_38737 = (0);
var state_38773__$1 = (function (){var statearr_38785 = state_38773;
(statearr_38785[(7)] = inst_38737);

(statearr_38785[(9)] = inst_38736);

return statearr_38785;
})();
var statearr_38786_38811 = state_38773__$1;
(statearr_38786_38811[(2)] = null);

(statearr_38786_38811[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38774 === (11))){
var inst_38737 = (state_38773[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_38773,(10),Object,null,(9));
var inst_38746 = chs__$1.call(null,inst_38737);
var inst_38747 = done.call(null,inst_38737);
var inst_38748 = cljs.core.async.take_BANG_.call(null,inst_38746,inst_38747);
var state_38773__$1 = state_38773;
var statearr_38787_38812 = state_38773__$1;
(statearr_38787_38812[(2)] = inst_38748);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38773__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38774 === (9))){
var inst_38737 = (state_38773[(7)]);
var inst_38750 = (state_38773[(2)]);
var inst_38751 = (inst_38737 + (1));
var inst_38737__$1 = inst_38751;
var state_38773__$1 = (function (){var statearr_38788 = state_38773;
(statearr_38788[(10)] = inst_38750);

(statearr_38788[(7)] = inst_38737__$1);

return statearr_38788;
})();
var statearr_38789_38813 = state_38773__$1;
(statearr_38789_38813[(2)] = null);

(statearr_38789_38813[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38774 === (5))){
var inst_38757 = (state_38773[(2)]);
var state_38773__$1 = (function (){var statearr_38790 = state_38773;
(statearr_38790[(11)] = inst_38757);

return statearr_38790;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38773__$1,(12),dchan);
} else {
if((state_val_38774 === (14))){
var inst_38759 = (state_38773[(8)]);
var inst_38764 = cljs.core.apply.call(null,f,inst_38759);
var state_38773__$1 = state_38773;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38773__$1,(16),out,inst_38764);
} else {
if((state_val_38774 === (16))){
var inst_38766 = (state_38773[(2)]);
var state_38773__$1 = (function (){var statearr_38791 = state_38773;
(statearr_38791[(12)] = inst_38766);

return statearr_38791;
})();
var statearr_38792_38814 = state_38773__$1;
(statearr_38792_38814[(2)] = null);

(statearr_38792_38814[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38774 === (10))){
var inst_38741 = (state_38773[(2)]);
var inst_38742 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_38773__$1 = (function (){var statearr_38793 = state_38773;
(statearr_38793[(13)] = inst_38741);

return statearr_38793;
})();
var statearr_38794_38815 = state_38773__$1;
(statearr_38794_38815[(2)] = inst_38742);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38773__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38774 === (8))){
var inst_38755 = (state_38773[(2)]);
var state_38773__$1 = state_38773;
var statearr_38795_38816 = state_38773__$1;
(statearr_38795_38816[(2)] = inst_38755);

(statearr_38795_38816[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__37476__auto___38801,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__37388__auto__,c__37476__auto___38801,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__37389__auto__ = null;
var cljs$core$async$state_machine__37389__auto____0 = (function (){
var statearr_38796 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38796[(0)] = cljs$core$async$state_machine__37389__auto__);

(statearr_38796[(1)] = (1));

return statearr_38796;
});
var cljs$core$async$state_machine__37389__auto____1 = (function (state_38773){
while(true){
var ret_value__37390__auto__ = (function (){try{while(true){
var result__37391__auto__ = switch__37388__auto__.call(null,state_38773);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37391__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37391__auto__;
}
break;
}
}catch (e38797){if((e38797 instanceof Object)){
var ex__37392__auto__ = e38797;
var statearr_38798_38817 = state_38773;
(statearr_38798_38817[(5)] = ex__37392__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38773);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38797;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37390__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38818 = state_38773;
state_38773 = G__38818;
continue;
} else {
return ret_value__37390__auto__;
}
break;
}
});
cljs$core$async$state_machine__37389__auto__ = function(state_38773){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37389__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37389__auto____1.call(this,state_38773);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__37389__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37389__auto____0;
cljs$core$async$state_machine__37389__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37389__auto____1;
return cljs$core$async$state_machine__37389__auto__;
})()
;})(switch__37388__auto__,c__37476__auto___38801,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__37478__auto__ = (function (){var statearr_38799 = f__37477__auto__.call(null);
(statearr_38799[(6)] = c__37476__auto___38801);

return statearr_38799;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37478__auto__);
});})(c__37476__auto___38801,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__38821 = arguments.length;
switch (G__38821) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__37476__auto___38875 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37476__auto___38875,out){
return (function (){
var f__37477__auto__ = (function (){var switch__37388__auto__ = ((function (c__37476__auto___38875,out){
return (function (state_38853){
var state_val_38854 = (state_38853[(1)]);
if((state_val_38854 === (7))){
var inst_38833 = (state_38853[(7)]);
var inst_38832 = (state_38853[(8)]);
var inst_38832__$1 = (state_38853[(2)]);
var inst_38833__$1 = cljs.core.nth.call(null,inst_38832__$1,(0),null);
var inst_38834 = cljs.core.nth.call(null,inst_38832__$1,(1),null);
var inst_38835 = (inst_38833__$1 == null);
var state_38853__$1 = (function (){var statearr_38855 = state_38853;
(statearr_38855[(7)] = inst_38833__$1);

(statearr_38855[(8)] = inst_38832__$1);

(statearr_38855[(9)] = inst_38834);

return statearr_38855;
})();
if(cljs.core.truth_(inst_38835)){
var statearr_38856_38876 = state_38853__$1;
(statearr_38856_38876[(1)] = (8));

} else {
var statearr_38857_38877 = state_38853__$1;
(statearr_38857_38877[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38854 === (1))){
var inst_38822 = cljs.core.vec.call(null,chs);
var inst_38823 = inst_38822;
var state_38853__$1 = (function (){var statearr_38858 = state_38853;
(statearr_38858[(10)] = inst_38823);

return statearr_38858;
})();
var statearr_38859_38878 = state_38853__$1;
(statearr_38859_38878[(2)] = null);

(statearr_38859_38878[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38854 === (4))){
var inst_38823 = (state_38853[(10)]);
var state_38853__$1 = state_38853;
return cljs.core.async.ioc_alts_BANG_.call(null,state_38853__$1,(7),inst_38823);
} else {
if((state_val_38854 === (6))){
var inst_38849 = (state_38853[(2)]);
var state_38853__$1 = state_38853;
var statearr_38860_38879 = state_38853__$1;
(statearr_38860_38879[(2)] = inst_38849);

(statearr_38860_38879[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38854 === (3))){
var inst_38851 = (state_38853[(2)]);
var state_38853__$1 = state_38853;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38853__$1,inst_38851);
} else {
if((state_val_38854 === (2))){
var inst_38823 = (state_38853[(10)]);
var inst_38825 = cljs.core.count.call(null,inst_38823);
var inst_38826 = (inst_38825 > (0));
var state_38853__$1 = state_38853;
if(cljs.core.truth_(inst_38826)){
var statearr_38862_38880 = state_38853__$1;
(statearr_38862_38880[(1)] = (4));

} else {
var statearr_38863_38881 = state_38853__$1;
(statearr_38863_38881[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38854 === (11))){
var inst_38823 = (state_38853[(10)]);
var inst_38842 = (state_38853[(2)]);
var tmp38861 = inst_38823;
var inst_38823__$1 = tmp38861;
var state_38853__$1 = (function (){var statearr_38864 = state_38853;
(statearr_38864[(11)] = inst_38842);

(statearr_38864[(10)] = inst_38823__$1);

return statearr_38864;
})();
var statearr_38865_38882 = state_38853__$1;
(statearr_38865_38882[(2)] = null);

(statearr_38865_38882[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38854 === (9))){
var inst_38833 = (state_38853[(7)]);
var state_38853__$1 = state_38853;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38853__$1,(11),out,inst_38833);
} else {
if((state_val_38854 === (5))){
var inst_38847 = cljs.core.async.close_BANG_.call(null,out);
var state_38853__$1 = state_38853;
var statearr_38866_38883 = state_38853__$1;
(statearr_38866_38883[(2)] = inst_38847);

(statearr_38866_38883[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38854 === (10))){
var inst_38845 = (state_38853[(2)]);
var state_38853__$1 = state_38853;
var statearr_38867_38884 = state_38853__$1;
(statearr_38867_38884[(2)] = inst_38845);

(statearr_38867_38884[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38854 === (8))){
var inst_38833 = (state_38853[(7)]);
var inst_38823 = (state_38853[(10)]);
var inst_38832 = (state_38853[(8)]);
var inst_38834 = (state_38853[(9)]);
var inst_38837 = (function (){var cs = inst_38823;
var vec__38828 = inst_38832;
var v = inst_38833;
var c = inst_38834;
return ((function (cs,vec__38828,v,c,inst_38833,inst_38823,inst_38832,inst_38834,state_val_38854,c__37476__auto___38875,out){
return (function (p1__38819_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__38819_SHARP_);
});
;})(cs,vec__38828,v,c,inst_38833,inst_38823,inst_38832,inst_38834,state_val_38854,c__37476__auto___38875,out))
})();
var inst_38838 = cljs.core.filterv.call(null,inst_38837,inst_38823);
var inst_38823__$1 = inst_38838;
var state_38853__$1 = (function (){var statearr_38868 = state_38853;
(statearr_38868[(10)] = inst_38823__$1);

return statearr_38868;
})();
var statearr_38869_38885 = state_38853__$1;
(statearr_38869_38885[(2)] = null);

(statearr_38869_38885[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__37476__auto___38875,out))
;
return ((function (switch__37388__auto__,c__37476__auto___38875,out){
return (function() {
var cljs$core$async$state_machine__37389__auto__ = null;
var cljs$core$async$state_machine__37389__auto____0 = (function (){
var statearr_38870 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38870[(0)] = cljs$core$async$state_machine__37389__auto__);

(statearr_38870[(1)] = (1));

return statearr_38870;
});
var cljs$core$async$state_machine__37389__auto____1 = (function (state_38853){
while(true){
var ret_value__37390__auto__ = (function (){try{while(true){
var result__37391__auto__ = switch__37388__auto__.call(null,state_38853);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37391__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37391__auto__;
}
break;
}
}catch (e38871){if((e38871 instanceof Object)){
var ex__37392__auto__ = e38871;
var statearr_38872_38886 = state_38853;
(statearr_38872_38886[(5)] = ex__37392__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38853);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38871;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37390__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38887 = state_38853;
state_38853 = G__38887;
continue;
} else {
return ret_value__37390__auto__;
}
break;
}
});
cljs$core$async$state_machine__37389__auto__ = function(state_38853){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37389__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37389__auto____1.call(this,state_38853);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__37389__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37389__auto____0;
cljs$core$async$state_machine__37389__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37389__auto____1;
return cljs$core$async$state_machine__37389__auto__;
})()
;})(switch__37388__auto__,c__37476__auto___38875,out))
})();
var state__37478__auto__ = (function (){var statearr_38873 = f__37477__auto__.call(null);
(statearr_38873[(6)] = c__37476__auto___38875);

return statearr_38873;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37478__auto__);
});})(c__37476__auto___38875,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__38889 = arguments.length;
switch (G__38889) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__37476__auto___38934 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37476__auto___38934,out){
return (function (){
var f__37477__auto__ = (function (){var switch__37388__auto__ = ((function (c__37476__auto___38934,out){
return (function (state_38913){
var state_val_38914 = (state_38913[(1)]);
if((state_val_38914 === (7))){
var inst_38895 = (state_38913[(7)]);
var inst_38895__$1 = (state_38913[(2)]);
var inst_38896 = (inst_38895__$1 == null);
var inst_38897 = cljs.core.not.call(null,inst_38896);
var state_38913__$1 = (function (){var statearr_38915 = state_38913;
(statearr_38915[(7)] = inst_38895__$1);

return statearr_38915;
})();
if(inst_38897){
var statearr_38916_38935 = state_38913__$1;
(statearr_38916_38935[(1)] = (8));

} else {
var statearr_38917_38936 = state_38913__$1;
(statearr_38917_38936[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38914 === (1))){
var inst_38890 = (0);
var state_38913__$1 = (function (){var statearr_38918 = state_38913;
(statearr_38918[(8)] = inst_38890);

return statearr_38918;
})();
var statearr_38919_38937 = state_38913__$1;
(statearr_38919_38937[(2)] = null);

(statearr_38919_38937[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38914 === (4))){
var state_38913__$1 = state_38913;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38913__$1,(7),ch);
} else {
if((state_val_38914 === (6))){
var inst_38908 = (state_38913[(2)]);
var state_38913__$1 = state_38913;
var statearr_38920_38938 = state_38913__$1;
(statearr_38920_38938[(2)] = inst_38908);

(statearr_38920_38938[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38914 === (3))){
var inst_38910 = (state_38913[(2)]);
var inst_38911 = cljs.core.async.close_BANG_.call(null,out);
var state_38913__$1 = (function (){var statearr_38921 = state_38913;
(statearr_38921[(9)] = inst_38910);

return statearr_38921;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38913__$1,inst_38911);
} else {
if((state_val_38914 === (2))){
var inst_38890 = (state_38913[(8)]);
var inst_38892 = (inst_38890 < n);
var state_38913__$1 = state_38913;
if(cljs.core.truth_(inst_38892)){
var statearr_38922_38939 = state_38913__$1;
(statearr_38922_38939[(1)] = (4));

} else {
var statearr_38923_38940 = state_38913__$1;
(statearr_38923_38940[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38914 === (11))){
var inst_38890 = (state_38913[(8)]);
var inst_38900 = (state_38913[(2)]);
var inst_38901 = (inst_38890 + (1));
var inst_38890__$1 = inst_38901;
var state_38913__$1 = (function (){var statearr_38924 = state_38913;
(statearr_38924[(10)] = inst_38900);

(statearr_38924[(8)] = inst_38890__$1);

return statearr_38924;
})();
var statearr_38925_38941 = state_38913__$1;
(statearr_38925_38941[(2)] = null);

(statearr_38925_38941[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38914 === (9))){
var state_38913__$1 = state_38913;
var statearr_38926_38942 = state_38913__$1;
(statearr_38926_38942[(2)] = null);

(statearr_38926_38942[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38914 === (5))){
var state_38913__$1 = state_38913;
var statearr_38927_38943 = state_38913__$1;
(statearr_38927_38943[(2)] = null);

(statearr_38927_38943[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38914 === (10))){
var inst_38905 = (state_38913[(2)]);
var state_38913__$1 = state_38913;
var statearr_38928_38944 = state_38913__$1;
(statearr_38928_38944[(2)] = inst_38905);

(statearr_38928_38944[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38914 === (8))){
var inst_38895 = (state_38913[(7)]);
var state_38913__$1 = state_38913;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38913__$1,(11),out,inst_38895);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__37476__auto___38934,out))
;
return ((function (switch__37388__auto__,c__37476__auto___38934,out){
return (function() {
var cljs$core$async$state_machine__37389__auto__ = null;
var cljs$core$async$state_machine__37389__auto____0 = (function (){
var statearr_38929 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_38929[(0)] = cljs$core$async$state_machine__37389__auto__);

(statearr_38929[(1)] = (1));

return statearr_38929;
});
var cljs$core$async$state_machine__37389__auto____1 = (function (state_38913){
while(true){
var ret_value__37390__auto__ = (function (){try{while(true){
var result__37391__auto__ = switch__37388__auto__.call(null,state_38913);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37391__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37391__auto__;
}
break;
}
}catch (e38930){if((e38930 instanceof Object)){
var ex__37392__auto__ = e38930;
var statearr_38931_38945 = state_38913;
(statearr_38931_38945[(5)] = ex__37392__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38913);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38930;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37390__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38946 = state_38913;
state_38913 = G__38946;
continue;
} else {
return ret_value__37390__auto__;
}
break;
}
});
cljs$core$async$state_machine__37389__auto__ = function(state_38913){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37389__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37389__auto____1.call(this,state_38913);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__37389__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37389__auto____0;
cljs$core$async$state_machine__37389__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37389__auto____1;
return cljs$core$async$state_machine__37389__auto__;
})()
;})(switch__37388__auto__,c__37476__auto___38934,out))
})();
var state__37478__auto__ = (function (){var statearr_38932 = f__37477__auto__.call(null);
(statearr_38932[(6)] = c__37476__auto___38934);

return statearr_38932;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37478__auto__);
});})(c__37476__auto___38934,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async38948 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async38948 = (function (f,ch,meta38949){
this.f = f;
this.ch = ch;
this.meta38949 = meta38949;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async38948.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38950,meta38949__$1){
var self__ = this;
var _38950__$1 = this;
return (new cljs.core.async.t_cljs$core$async38948(self__.f,self__.ch,meta38949__$1));
});

cljs.core.async.t_cljs$core$async38948.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38950){
var self__ = this;
var _38950__$1 = this;
return self__.meta38949;
});

cljs.core.async.t_cljs$core$async38948.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async38948.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async38948.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async38948.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async38948.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async38951 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async38951 = (function (f,ch,meta38949,_,fn1,meta38952){
this.f = f;
this.ch = ch;
this.meta38949 = meta38949;
this._ = _;
this.fn1 = fn1;
this.meta38952 = meta38952;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async38951.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_38953,meta38952__$1){
var self__ = this;
var _38953__$1 = this;
return (new cljs.core.async.t_cljs$core$async38951(self__.f,self__.ch,self__.meta38949,self__._,self__.fn1,meta38952__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async38951.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_38953){
var self__ = this;
var _38953__$1 = this;
return self__.meta38952;
});})(___$1))
;

cljs.core.async.t_cljs$core$async38951.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async38951.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async38951.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async38951.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__38947_SHARP_){
return f1.call(null,(((p1__38947_SHARP_ == null))?null:self__.f.call(null,p1__38947_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async38951.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta38949","meta38949",-1888311264,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async38948","cljs.core.async/t_cljs$core$async38948",-1636684513,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta38952","meta38952",-1599282496,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async38951.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async38951.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async38951";

cljs.core.async.t_cljs$core$async38951.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__34872__auto__,writer__34873__auto__,opt__34874__auto__){
return cljs.core._write.call(null,writer__34873__auto__,"cljs.core.async/t_cljs$core$async38951");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async38951 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async38951(f__$1,ch__$1,meta38949__$1,___$2,fn1__$1,meta38952){
return (new cljs.core.async.t_cljs$core$async38951(f__$1,ch__$1,meta38949__$1,___$2,fn1__$1,meta38952));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async38951(self__.f,self__.ch,self__.meta38949,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__34235__auto__ = ret;
if(cljs.core.truth_(and__34235__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__34235__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async38948.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async38948.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async38948.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta38949","meta38949",-1888311264,null)], null);
});

cljs.core.async.t_cljs$core$async38948.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async38948.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async38948";

cljs.core.async.t_cljs$core$async38948.cljs$lang$ctorPrWriter = (function (this__34872__auto__,writer__34873__auto__,opt__34874__auto__){
return cljs.core._write.call(null,writer__34873__auto__,"cljs.core.async/t_cljs$core$async38948");
});

cljs.core.async.__GT_t_cljs$core$async38948 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async38948(f__$1,ch__$1,meta38949){
return (new cljs.core.async.t_cljs$core$async38948(f__$1,ch__$1,meta38949));
});

}

return (new cljs.core.async.t_cljs$core$async38948(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async38954 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async38954 = (function (f,ch,meta38955){
this.f = f;
this.ch = ch;
this.meta38955 = meta38955;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async38954.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38956,meta38955__$1){
var self__ = this;
var _38956__$1 = this;
return (new cljs.core.async.t_cljs$core$async38954(self__.f,self__.ch,meta38955__$1));
});

cljs.core.async.t_cljs$core$async38954.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38956){
var self__ = this;
var _38956__$1 = this;
return self__.meta38955;
});

cljs.core.async.t_cljs$core$async38954.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async38954.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async38954.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async38954.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async38954.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async38954.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async38954.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta38955","meta38955",916933780,null)], null);
});

cljs.core.async.t_cljs$core$async38954.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async38954.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async38954";

cljs.core.async.t_cljs$core$async38954.cljs$lang$ctorPrWriter = (function (this__34872__auto__,writer__34873__auto__,opt__34874__auto__){
return cljs.core._write.call(null,writer__34873__auto__,"cljs.core.async/t_cljs$core$async38954");
});

cljs.core.async.__GT_t_cljs$core$async38954 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async38954(f__$1,ch__$1,meta38955){
return (new cljs.core.async.t_cljs$core$async38954(f__$1,ch__$1,meta38955));
});

}

return (new cljs.core.async.t_cljs$core$async38954(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async38957 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async38957 = (function (p,ch,meta38958){
this.p = p;
this.ch = ch;
this.meta38958 = meta38958;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async38957.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38959,meta38958__$1){
var self__ = this;
var _38959__$1 = this;
return (new cljs.core.async.t_cljs$core$async38957(self__.p,self__.ch,meta38958__$1));
});

cljs.core.async.t_cljs$core$async38957.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38959){
var self__ = this;
var _38959__$1 = this;
return self__.meta38958;
});

cljs.core.async.t_cljs$core$async38957.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async38957.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async38957.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async38957.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async38957.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async38957.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async38957.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async38957.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta38958","meta38958",1714558631,null)], null);
});

cljs.core.async.t_cljs$core$async38957.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async38957.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async38957";

cljs.core.async.t_cljs$core$async38957.cljs$lang$ctorPrWriter = (function (this__34872__auto__,writer__34873__auto__,opt__34874__auto__){
return cljs.core._write.call(null,writer__34873__auto__,"cljs.core.async/t_cljs$core$async38957");
});

cljs.core.async.__GT_t_cljs$core$async38957 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async38957(p__$1,ch__$1,meta38958){
return (new cljs.core.async.t_cljs$core$async38957(p__$1,ch__$1,meta38958));
});

}

return (new cljs.core.async.t_cljs$core$async38957(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__38961 = arguments.length;
switch (G__38961) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__37476__auto___39001 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37476__auto___39001,out){
return (function (){
var f__37477__auto__ = (function (){var switch__37388__auto__ = ((function (c__37476__auto___39001,out){
return (function (state_38982){
var state_val_38983 = (state_38982[(1)]);
if((state_val_38983 === (7))){
var inst_38978 = (state_38982[(2)]);
var state_38982__$1 = state_38982;
var statearr_38984_39002 = state_38982__$1;
(statearr_38984_39002[(2)] = inst_38978);

(statearr_38984_39002[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38983 === (1))){
var state_38982__$1 = state_38982;
var statearr_38985_39003 = state_38982__$1;
(statearr_38985_39003[(2)] = null);

(statearr_38985_39003[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38983 === (4))){
var inst_38964 = (state_38982[(7)]);
var inst_38964__$1 = (state_38982[(2)]);
var inst_38965 = (inst_38964__$1 == null);
var state_38982__$1 = (function (){var statearr_38986 = state_38982;
(statearr_38986[(7)] = inst_38964__$1);

return statearr_38986;
})();
if(cljs.core.truth_(inst_38965)){
var statearr_38987_39004 = state_38982__$1;
(statearr_38987_39004[(1)] = (5));

} else {
var statearr_38988_39005 = state_38982__$1;
(statearr_38988_39005[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38983 === (6))){
var inst_38964 = (state_38982[(7)]);
var inst_38969 = p.call(null,inst_38964);
var state_38982__$1 = state_38982;
if(cljs.core.truth_(inst_38969)){
var statearr_38989_39006 = state_38982__$1;
(statearr_38989_39006[(1)] = (8));

} else {
var statearr_38990_39007 = state_38982__$1;
(statearr_38990_39007[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38983 === (3))){
var inst_38980 = (state_38982[(2)]);
var state_38982__$1 = state_38982;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38982__$1,inst_38980);
} else {
if((state_val_38983 === (2))){
var state_38982__$1 = state_38982;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38982__$1,(4),ch);
} else {
if((state_val_38983 === (11))){
var inst_38972 = (state_38982[(2)]);
var state_38982__$1 = state_38982;
var statearr_38991_39008 = state_38982__$1;
(statearr_38991_39008[(2)] = inst_38972);

(statearr_38991_39008[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38983 === (9))){
var state_38982__$1 = state_38982;
var statearr_38992_39009 = state_38982__$1;
(statearr_38992_39009[(2)] = null);

(statearr_38992_39009[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38983 === (5))){
var inst_38967 = cljs.core.async.close_BANG_.call(null,out);
var state_38982__$1 = state_38982;
var statearr_38993_39010 = state_38982__$1;
(statearr_38993_39010[(2)] = inst_38967);

(statearr_38993_39010[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38983 === (10))){
var inst_38975 = (state_38982[(2)]);
var state_38982__$1 = (function (){var statearr_38994 = state_38982;
(statearr_38994[(8)] = inst_38975);

return statearr_38994;
})();
var statearr_38995_39011 = state_38982__$1;
(statearr_38995_39011[(2)] = null);

(statearr_38995_39011[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38983 === (8))){
var inst_38964 = (state_38982[(7)]);
var state_38982__$1 = state_38982;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38982__$1,(11),out,inst_38964);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__37476__auto___39001,out))
;
return ((function (switch__37388__auto__,c__37476__auto___39001,out){
return (function() {
var cljs$core$async$state_machine__37389__auto__ = null;
var cljs$core$async$state_machine__37389__auto____0 = (function (){
var statearr_38996 = [null,null,null,null,null,null,null,null,null];
(statearr_38996[(0)] = cljs$core$async$state_machine__37389__auto__);

(statearr_38996[(1)] = (1));

return statearr_38996;
});
var cljs$core$async$state_machine__37389__auto____1 = (function (state_38982){
while(true){
var ret_value__37390__auto__ = (function (){try{while(true){
var result__37391__auto__ = switch__37388__auto__.call(null,state_38982);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37391__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37391__auto__;
}
break;
}
}catch (e38997){if((e38997 instanceof Object)){
var ex__37392__auto__ = e38997;
var statearr_38998_39012 = state_38982;
(statearr_38998_39012[(5)] = ex__37392__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38982);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38997;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37390__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39013 = state_38982;
state_38982 = G__39013;
continue;
} else {
return ret_value__37390__auto__;
}
break;
}
});
cljs$core$async$state_machine__37389__auto__ = function(state_38982){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37389__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37389__auto____1.call(this,state_38982);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__37389__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37389__auto____0;
cljs$core$async$state_machine__37389__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37389__auto____1;
return cljs$core$async$state_machine__37389__auto__;
})()
;})(switch__37388__auto__,c__37476__auto___39001,out))
})();
var state__37478__auto__ = (function (){var statearr_38999 = f__37477__auto__.call(null);
(statearr_38999[(6)] = c__37476__auto___39001);

return statearr_38999;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37478__auto__);
});})(c__37476__auto___39001,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__39015 = arguments.length;
switch (G__39015) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__37476__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37476__auto__){
return (function (){
var f__37477__auto__ = (function (){var switch__37388__auto__ = ((function (c__37476__auto__){
return (function (state_39078){
var state_val_39079 = (state_39078[(1)]);
if((state_val_39079 === (7))){
var inst_39074 = (state_39078[(2)]);
var state_39078__$1 = state_39078;
var statearr_39080_39118 = state_39078__$1;
(statearr_39080_39118[(2)] = inst_39074);

(statearr_39080_39118[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39079 === (20))){
var inst_39044 = (state_39078[(7)]);
var inst_39055 = (state_39078[(2)]);
var inst_39056 = cljs.core.next.call(null,inst_39044);
var inst_39030 = inst_39056;
var inst_39031 = null;
var inst_39032 = (0);
var inst_39033 = (0);
var state_39078__$1 = (function (){var statearr_39081 = state_39078;
(statearr_39081[(8)] = inst_39033);

(statearr_39081[(9)] = inst_39031);

(statearr_39081[(10)] = inst_39032);

(statearr_39081[(11)] = inst_39030);

(statearr_39081[(12)] = inst_39055);

return statearr_39081;
})();
var statearr_39082_39119 = state_39078__$1;
(statearr_39082_39119[(2)] = null);

(statearr_39082_39119[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39079 === (1))){
var state_39078__$1 = state_39078;
var statearr_39083_39120 = state_39078__$1;
(statearr_39083_39120[(2)] = null);

(statearr_39083_39120[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39079 === (4))){
var inst_39019 = (state_39078[(13)]);
var inst_39019__$1 = (state_39078[(2)]);
var inst_39020 = (inst_39019__$1 == null);
var state_39078__$1 = (function (){var statearr_39084 = state_39078;
(statearr_39084[(13)] = inst_39019__$1);

return statearr_39084;
})();
if(cljs.core.truth_(inst_39020)){
var statearr_39085_39121 = state_39078__$1;
(statearr_39085_39121[(1)] = (5));

} else {
var statearr_39086_39122 = state_39078__$1;
(statearr_39086_39122[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39079 === (15))){
var state_39078__$1 = state_39078;
var statearr_39090_39123 = state_39078__$1;
(statearr_39090_39123[(2)] = null);

(statearr_39090_39123[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39079 === (21))){
var state_39078__$1 = state_39078;
var statearr_39091_39124 = state_39078__$1;
(statearr_39091_39124[(2)] = null);

(statearr_39091_39124[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39079 === (13))){
var inst_39033 = (state_39078[(8)]);
var inst_39031 = (state_39078[(9)]);
var inst_39032 = (state_39078[(10)]);
var inst_39030 = (state_39078[(11)]);
var inst_39040 = (state_39078[(2)]);
var inst_39041 = (inst_39033 + (1));
var tmp39087 = inst_39031;
var tmp39088 = inst_39032;
var tmp39089 = inst_39030;
var inst_39030__$1 = tmp39089;
var inst_39031__$1 = tmp39087;
var inst_39032__$1 = tmp39088;
var inst_39033__$1 = inst_39041;
var state_39078__$1 = (function (){var statearr_39092 = state_39078;
(statearr_39092[(8)] = inst_39033__$1);

(statearr_39092[(9)] = inst_39031__$1);

(statearr_39092[(10)] = inst_39032__$1);

(statearr_39092[(11)] = inst_39030__$1);

(statearr_39092[(14)] = inst_39040);

return statearr_39092;
})();
var statearr_39093_39125 = state_39078__$1;
(statearr_39093_39125[(2)] = null);

(statearr_39093_39125[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39079 === (22))){
var state_39078__$1 = state_39078;
var statearr_39094_39126 = state_39078__$1;
(statearr_39094_39126[(2)] = null);

(statearr_39094_39126[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39079 === (6))){
var inst_39019 = (state_39078[(13)]);
var inst_39028 = f.call(null,inst_39019);
var inst_39029 = cljs.core.seq.call(null,inst_39028);
var inst_39030 = inst_39029;
var inst_39031 = null;
var inst_39032 = (0);
var inst_39033 = (0);
var state_39078__$1 = (function (){var statearr_39095 = state_39078;
(statearr_39095[(8)] = inst_39033);

(statearr_39095[(9)] = inst_39031);

(statearr_39095[(10)] = inst_39032);

(statearr_39095[(11)] = inst_39030);

return statearr_39095;
})();
var statearr_39096_39127 = state_39078__$1;
(statearr_39096_39127[(2)] = null);

(statearr_39096_39127[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39079 === (17))){
var inst_39044 = (state_39078[(7)]);
var inst_39048 = cljs.core.chunk_first.call(null,inst_39044);
var inst_39049 = cljs.core.chunk_rest.call(null,inst_39044);
var inst_39050 = cljs.core.count.call(null,inst_39048);
var inst_39030 = inst_39049;
var inst_39031 = inst_39048;
var inst_39032 = inst_39050;
var inst_39033 = (0);
var state_39078__$1 = (function (){var statearr_39097 = state_39078;
(statearr_39097[(8)] = inst_39033);

(statearr_39097[(9)] = inst_39031);

(statearr_39097[(10)] = inst_39032);

(statearr_39097[(11)] = inst_39030);

return statearr_39097;
})();
var statearr_39098_39128 = state_39078__$1;
(statearr_39098_39128[(2)] = null);

(statearr_39098_39128[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39079 === (3))){
var inst_39076 = (state_39078[(2)]);
var state_39078__$1 = state_39078;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39078__$1,inst_39076);
} else {
if((state_val_39079 === (12))){
var inst_39064 = (state_39078[(2)]);
var state_39078__$1 = state_39078;
var statearr_39099_39129 = state_39078__$1;
(statearr_39099_39129[(2)] = inst_39064);

(statearr_39099_39129[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39079 === (2))){
var state_39078__$1 = state_39078;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39078__$1,(4),in$);
} else {
if((state_val_39079 === (23))){
var inst_39072 = (state_39078[(2)]);
var state_39078__$1 = state_39078;
var statearr_39100_39130 = state_39078__$1;
(statearr_39100_39130[(2)] = inst_39072);

(statearr_39100_39130[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39079 === (19))){
var inst_39059 = (state_39078[(2)]);
var state_39078__$1 = state_39078;
var statearr_39101_39131 = state_39078__$1;
(statearr_39101_39131[(2)] = inst_39059);

(statearr_39101_39131[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39079 === (11))){
var inst_39030 = (state_39078[(11)]);
var inst_39044 = (state_39078[(7)]);
var inst_39044__$1 = cljs.core.seq.call(null,inst_39030);
var state_39078__$1 = (function (){var statearr_39102 = state_39078;
(statearr_39102[(7)] = inst_39044__$1);

return statearr_39102;
})();
if(inst_39044__$1){
var statearr_39103_39132 = state_39078__$1;
(statearr_39103_39132[(1)] = (14));

} else {
var statearr_39104_39133 = state_39078__$1;
(statearr_39104_39133[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39079 === (9))){
var inst_39066 = (state_39078[(2)]);
var inst_39067 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_39078__$1 = (function (){var statearr_39105 = state_39078;
(statearr_39105[(15)] = inst_39066);

return statearr_39105;
})();
if(cljs.core.truth_(inst_39067)){
var statearr_39106_39134 = state_39078__$1;
(statearr_39106_39134[(1)] = (21));

} else {
var statearr_39107_39135 = state_39078__$1;
(statearr_39107_39135[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39079 === (5))){
var inst_39022 = cljs.core.async.close_BANG_.call(null,out);
var state_39078__$1 = state_39078;
var statearr_39108_39136 = state_39078__$1;
(statearr_39108_39136[(2)] = inst_39022);

(statearr_39108_39136[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39079 === (14))){
var inst_39044 = (state_39078[(7)]);
var inst_39046 = cljs.core.chunked_seq_QMARK_.call(null,inst_39044);
var state_39078__$1 = state_39078;
if(inst_39046){
var statearr_39109_39137 = state_39078__$1;
(statearr_39109_39137[(1)] = (17));

} else {
var statearr_39110_39138 = state_39078__$1;
(statearr_39110_39138[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39079 === (16))){
var inst_39062 = (state_39078[(2)]);
var state_39078__$1 = state_39078;
var statearr_39111_39139 = state_39078__$1;
(statearr_39111_39139[(2)] = inst_39062);

(statearr_39111_39139[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39079 === (10))){
var inst_39033 = (state_39078[(8)]);
var inst_39031 = (state_39078[(9)]);
var inst_39038 = cljs.core._nth.call(null,inst_39031,inst_39033);
var state_39078__$1 = state_39078;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39078__$1,(13),out,inst_39038);
} else {
if((state_val_39079 === (18))){
var inst_39044 = (state_39078[(7)]);
var inst_39053 = cljs.core.first.call(null,inst_39044);
var state_39078__$1 = state_39078;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39078__$1,(20),out,inst_39053);
} else {
if((state_val_39079 === (8))){
var inst_39033 = (state_39078[(8)]);
var inst_39032 = (state_39078[(10)]);
var inst_39035 = (inst_39033 < inst_39032);
var inst_39036 = inst_39035;
var state_39078__$1 = state_39078;
if(cljs.core.truth_(inst_39036)){
var statearr_39112_39140 = state_39078__$1;
(statearr_39112_39140[(1)] = (10));

} else {
var statearr_39113_39141 = state_39078__$1;
(statearr_39113_39141[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__37476__auto__))
;
return ((function (switch__37388__auto__,c__37476__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__37389__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__37389__auto____0 = (function (){
var statearr_39114 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39114[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__37389__auto__);

(statearr_39114[(1)] = (1));

return statearr_39114;
});
var cljs$core$async$mapcat_STAR__$_state_machine__37389__auto____1 = (function (state_39078){
while(true){
var ret_value__37390__auto__ = (function (){try{while(true){
var result__37391__auto__ = switch__37388__auto__.call(null,state_39078);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37391__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37391__auto__;
}
break;
}
}catch (e39115){if((e39115 instanceof Object)){
var ex__37392__auto__ = e39115;
var statearr_39116_39142 = state_39078;
(statearr_39116_39142[(5)] = ex__37392__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39078);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39115;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37390__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39143 = state_39078;
state_39078 = G__39143;
continue;
} else {
return ret_value__37390__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__37389__auto__ = function(state_39078){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__37389__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__37389__auto____1.call(this,state_39078);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__37389__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__37389__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__37389__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__37389__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__37389__auto__;
})()
;})(switch__37388__auto__,c__37476__auto__))
})();
var state__37478__auto__ = (function (){var statearr_39117 = f__37477__auto__.call(null);
(statearr_39117[(6)] = c__37476__auto__);

return statearr_39117;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37478__auto__);
});})(c__37476__auto__))
);

return c__37476__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__39145 = arguments.length;
switch (G__39145) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__39148 = arguments.length;
switch (G__39148) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__39151 = arguments.length;
switch (G__39151) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__37476__auto___39198 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37476__auto___39198,out){
return (function (){
var f__37477__auto__ = (function (){var switch__37388__auto__ = ((function (c__37476__auto___39198,out){
return (function (state_39175){
var state_val_39176 = (state_39175[(1)]);
if((state_val_39176 === (7))){
var inst_39170 = (state_39175[(2)]);
var state_39175__$1 = state_39175;
var statearr_39177_39199 = state_39175__$1;
(statearr_39177_39199[(2)] = inst_39170);

(statearr_39177_39199[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39176 === (1))){
var inst_39152 = null;
var state_39175__$1 = (function (){var statearr_39178 = state_39175;
(statearr_39178[(7)] = inst_39152);

return statearr_39178;
})();
var statearr_39179_39200 = state_39175__$1;
(statearr_39179_39200[(2)] = null);

(statearr_39179_39200[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39176 === (4))){
var inst_39155 = (state_39175[(8)]);
var inst_39155__$1 = (state_39175[(2)]);
var inst_39156 = (inst_39155__$1 == null);
var inst_39157 = cljs.core.not.call(null,inst_39156);
var state_39175__$1 = (function (){var statearr_39180 = state_39175;
(statearr_39180[(8)] = inst_39155__$1);

return statearr_39180;
})();
if(inst_39157){
var statearr_39181_39201 = state_39175__$1;
(statearr_39181_39201[(1)] = (5));

} else {
var statearr_39182_39202 = state_39175__$1;
(statearr_39182_39202[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39176 === (6))){
var state_39175__$1 = state_39175;
var statearr_39183_39203 = state_39175__$1;
(statearr_39183_39203[(2)] = null);

(statearr_39183_39203[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39176 === (3))){
var inst_39172 = (state_39175[(2)]);
var inst_39173 = cljs.core.async.close_BANG_.call(null,out);
var state_39175__$1 = (function (){var statearr_39184 = state_39175;
(statearr_39184[(9)] = inst_39172);

return statearr_39184;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39175__$1,inst_39173);
} else {
if((state_val_39176 === (2))){
var state_39175__$1 = state_39175;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39175__$1,(4),ch);
} else {
if((state_val_39176 === (11))){
var inst_39155 = (state_39175[(8)]);
var inst_39164 = (state_39175[(2)]);
var inst_39152 = inst_39155;
var state_39175__$1 = (function (){var statearr_39185 = state_39175;
(statearr_39185[(10)] = inst_39164);

(statearr_39185[(7)] = inst_39152);

return statearr_39185;
})();
var statearr_39186_39204 = state_39175__$1;
(statearr_39186_39204[(2)] = null);

(statearr_39186_39204[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39176 === (9))){
var inst_39155 = (state_39175[(8)]);
var state_39175__$1 = state_39175;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39175__$1,(11),out,inst_39155);
} else {
if((state_val_39176 === (5))){
var inst_39152 = (state_39175[(7)]);
var inst_39155 = (state_39175[(8)]);
var inst_39159 = cljs.core._EQ_.call(null,inst_39155,inst_39152);
var state_39175__$1 = state_39175;
if(inst_39159){
var statearr_39188_39205 = state_39175__$1;
(statearr_39188_39205[(1)] = (8));

} else {
var statearr_39189_39206 = state_39175__$1;
(statearr_39189_39206[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39176 === (10))){
var inst_39167 = (state_39175[(2)]);
var state_39175__$1 = state_39175;
var statearr_39190_39207 = state_39175__$1;
(statearr_39190_39207[(2)] = inst_39167);

(statearr_39190_39207[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39176 === (8))){
var inst_39152 = (state_39175[(7)]);
var tmp39187 = inst_39152;
var inst_39152__$1 = tmp39187;
var state_39175__$1 = (function (){var statearr_39191 = state_39175;
(statearr_39191[(7)] = inst_39152__$1);

return statearr_39191;
})();
var statearr_39192_39208 = state_39175__$1;
(statearr_39192_39208[(2)] = null);

(statearr_39192_39208[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__37476__auto___39198,out))
;
return ((function (switch__37388__auto__,c__37476__auto___39198,out){
return (function() {
var cljs$core$async$state_machine__37389__auto__ = null;
var cljs$core$async$state_machine__37389__auto____0 = (function (){
var statearr_39193 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_39193[(0)] = cljs$core$async$state_machine__37389__auto__);

(statearr_39193[(1)] = (1));

return statearr_39193;
});
var cljs$core$async$state_machine__37389__auto____1 = (function (state_39175){
while(true){
var ret_value__37390__auto__ = (function (){try{while(true){
var result__37391__auto__ = switch__37388__auto__.call(null,state_39175);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37391__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37391__auto__;
}
break;
}
}catch (e39194){if((e39194 instanceof Object)){
var ex__37392__auto__ = e39194;
var statearr_39195_39209 = state_39175;
(statearr_39195_39209[(5)] = ex__37392__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39175);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39194;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37390__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39210 = state_39175;
state_39175 = G__39210;
continue;
} else {
return ret_value__37390__auto__;
}
break;
}
});
cljs$core$async$state_machine__37389__auto__ = function(state_39175){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37389__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37389__auto____1.call(this,state_39175);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__37389__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37389__auto____0;
cljs$core$async$state_machine__37389__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37389__auto____1;
return cljs$core$async$state_machine__37389__auto__;
})()
;})(switch__37388__auto__,c__37476__auto___39198,out))
})();
var state__37478__auto__ = (function (){var statearr_39196 = f__37477__auto__.call(null);
(statearr_39196[(6)] = c__37476__auto___39198);

return statearr_39196;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37478__auto__);
});})(c__37476__auto___39198,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__39212 = arguments.length;
switch (G__39212) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__37476__auto___39278 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37476__auto___39278,out){
return (function (){
var f__37477__auto__ = (function (){var switch__37388__auto__ = ((function (c__37476__auto___39278,out){
return (function (state_39250){
var state_val_39251 = (state_39250[(1)]);
if((state_val_39251 === (7))){
var inst_39246 = (state_39250[(2)]);
var state_39250__$1 = state_39250;
var statearr_39252_39279 = state_39250__$1;
(statearr_39252_39279[(2)] = inst_39246);

(statearr_39252_39279[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39251 === (1))){
var inst_39213 = (new Array(n));
var inst_39214 = inst_39213;
var inst_39215 = (0);
var state_39250__$1 = (function (){var statearr_39253 = state_39250;
(statearr_39253[(7)] = inst_39215);

(statearr_39253[(8)] = inst_39214);

return statearr_39253;
})();
var statearr_39254_39280 = state_39250__$1;
(statearr_39254_39280[(2)] = null);

(statearr_39254_39280[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39251 === (4))){
var inst_39218 = (state_39250[(9)]);
var inst_39218__$1 = (state_39250[(2)]);
var inst_39219 = (inst_39218__$1 == null);
var inst_39220 = cljs.core.not.call(null,inst_39219);
var state_39250__$1 = (function (){var statearr_39255 = state_39250;
(statearr_39255[(9)] = inst_39218__$1);

return statearr_39255;
})();
if(inst_39220){
var statearr_39256_39281 = state_39250__$1;
(statearr_39256_39281[(1)] = (5));

} else {
var statearr_39257_39282 = state_39250__$1;
(statearr_39257_39282[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39251 === (15))){
var inst_39240 = (state_39250[(2)]);
var state_39250__$1 = state_39250;
var statearr_39258_39283 = state_39250__$1;
(statearr_39258_39283[(2)] = inst_39240);

(statearr_39258_39283[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39251 === (13))){
var state_39250__$1 = state_39250;
var statearr_39259_39284 = state_39250__$1;
(statearr_39259_39284[(2)] = null);

(statearr_39259_39284[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39251 === (6))){
var inst_39215 = (state_39250[(7)]);
var inst_39236 = (inst_39215 > (0));
var state_39250__$1 = state_39250;
if(cljs.core.truth_(inst_39236)){
var statearr_39260_39285 = state_39250__$1;
(statearr_39260_39285[(1)] = (12));

} else {
var statearr_39261_39286 = state_39250__$1;
(statearr_39261_39286[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39251 === (3))){
var inst_39248 = (state_39250[(2)]);
var state_39250__$1 = state_39250;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39250__$1,inst_39248);
} else {
if((state_val_39251 === (12))){
var inst_39214 = (state_39250[(8)]);
var inst_39238 = cljs.core.vec.call(null,inst_39214);
var state_39250__$1 = state_39250;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39250__$1,(15),out,inst_39238);
} else {
if((state_val_39251 === (2))){
var state_39250__$1 = state_39250;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39250__$1,(4),ch);
} else {
if((state_val_39251 === (11))){
var inst_39230 = (state_39250[(2)]);
var inst_39231 = (new Array(n));
var inst_39214 = inst_39231;
var inst_39215 = (0);
var state_39250__$1 = (function (){var statearr_39262 = state_39250;
(statearr_39262[(7)] = inst_39215);

(statearr_39262[(10)] = inst_39230);

(statearr_39262[(8)] = inst_39214);

return statearr_39262;
})();
var statearr_39263_39287 = state_39250__$1;
(statearr_39263_39287[(2)] = null);

(statearr_39263_39287[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39251 === (9))){
var inst_39214 = (state_39250[(8)]);
var inst_39228 = cljs.core.vec.call(null,inst_39214);
var state_39250__$1 = state_39250;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39250__$1,(11),out,inst_39228);
} else {
if((state_val_39251 === (5))){
var inst_39215 = (state_39250[(7)]);
var inst_39223 = (state_39250[(11)]);
var inst_39218 = (state_39250[(9)]);
var inst_39214 = (state_39250[(8)]);
var inst_39222 = (inst_39214[inst_39215] = inst_39218);
var inst_39223__$1 = (inst_39215 + (1));
var inst_39224 = (inst_39223__$1 < n);
var state_39250__$1 = (function (){var statearr_39264 = state_39250;
(statearr_39264[(12)] = inst_39222);

(statearr_39264[(11)] = inst_39223__$1);

return statearr_39264;
})();
if(cljs.core.truth_(inst_39224)){
var statearr_39265_39288 = state_39250__$1;
(statearr_39265_39288[(1)] = (8));

} else {
var statearr_39266_39289 = state_39250__$1;
(statearr_39266_39289[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39251 === (14))){
var inst_39243 = (state_39250[(2)]);
var inst_39244 = cljs.core.async.close_BANG_.call(null,out);
var state_39250__$1 = (function (){var statearr_39268 = state_39250;
(statearr_39268[(13)] = inst_39243);

return statearr_39268;
})();
var statearr_39269_39290 = state_39250__$1;
(statearr_39269_39290[(2)] = inst_39244);

(statearr_39269_39290[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39251 === (10))){
var inst_39234 = (state_39250[(2)]);
var state_39250__$1 = state_39250;
var statearr_39270_39291 = state_39250__$1;
(statearr_39270_39291[(2)] = inst_39234);

(statearr_39270_39291[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39251 === (8))){
var inst_39223 = (state_39250[(11)]);
var inst_39214 = (state_39250[(8)]);
var tmp39267 = inst_39214;
var inst_39214__$1 = tmp39267;
var inst_39215 = inst_39223;
var state_39250__$1 = (function (){var statearr_39271 = state_39250;
(statearr_39271[(7)] = inst_39215);

(statearr_39271[(8)] = inst_39214__$1);

return statearr_39271;
})();
var statearr_39272_39292 = state_39250__$1;
(statearr_39272_39292[(2)] = null);

(statearr_39272_39292[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__37476__auto___39278,out))
;
return ((function (switch__37388__auto__,c__37476__auto___39278,out){
return (function() {
var cljs$core$async$state_machine__37389__auto__ = null;
var cljs$core$async$state_machine__37389__auto____0 = (function (){
var statearr_39273 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39273[(0)] = cljs$core$async$state_machine__37389__auto__);

(statearr_39273[(1)] = (1));

return statearr_39273;
});
var cljs$core$async$state_machine__37389__auto____1 = (function (state_39250){
while(true){
var ret_value__37390__auto__ = (function (){try{while(true){
var result__37391__auto__ = switch__37388__auto__.call(null,state_39250);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37391__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37391__auto__;
}
break;
}
}catch (e39274){if((e39274 instanceof Object)){
var ex__37392__auto__ = e39274;
var statearr_39275_39293 = state_39250;
(statearr_39275_39293[(5)] = ex__37392__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39250);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39274;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37390__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39294 = state_39250;
state_39250 = G__39294;
continue;
} else {
return ret_value__37390__auto__;
}
break;
}
});
cljs$core$async$state_machine__37389__auto__ = function(state_39250){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37389__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37389__auto____1.call(this,state_39250);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__37389__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37389__auto____0;
cljs$core$async$state_machine__37389__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37389__auto____1;
return cljs$core$async$state_machine__37389__auto__;
})()
;})(switch__37388__auto__,c__37476__auto___39278,out))
})();
var state__37478__auto__ = (function (){var statearr_39276 = f__37477__auto__.call(null);
(statearr_39276[(6)] = c__37476__auto___39278);

return statearr_39276;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37478__auto__);
});})(c__37476__auto___39278,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__39296 = arguments.length;
switch (G__39296) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__37476__auto___39366 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37476__auto___39366,out){
return (function (){
var f__37477__auto__ = (function (){var switch__37388__auto__ = ((function (c__37476__auto___39366,out){
return (function (state_39338){
var state_val_39339 = (state_39338[(1)]);
if((state_val_39339 === (7))){
var inst_39334 = (state_39338[(2)]);
var state_39338__$1 = state_39338;
var statearr_39340_39367 = state_39338__$1;
(statearr_39340_39367[(2)] = inst_39334);

(statearr_39340_39367[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39339 === (1))){
var inst_39297 = [];
var inst_39298 = inst_39297;
var inst_39299 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_39338__$1 = (function (){var statearr_39341 = state_39338;
(statearr_39341[(7)] = inst_39299);

(statearr_39341[(8)] = inst_39298);

return statearr_39341;
})();
var statearr_39342_39368 = state_39338__$1;
(statearr_39342_39368[(2)] = null);

(statearr_39342_39368[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39339 === (4))){
var inst_39302 = (state_39338[(9)]);
var inst_39302__$1 = (state_39338[(2)]);
var inst_39303 = (inst_39302__$1 == null);
var inst_39304 = cljs.core.not.call(null,inst_39303);
var state_39338__$1 = (function (){var statearr_39343 = state_39338;
(statearr_39343[(9)] = inst_39302__$1);

return statearr_39343;
})();
if(inst_39304){
var statearr_39344_39369 = state_39338__$1;
(statearr_39344_39369[(1)] = (5));

} else {
var statearr_39345_39370 = state_39338__$1;
(statearr_39345_39370[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39339 === (15))){
var inst_39328 = (state_39338[(2)]);
var state_39338__$1 = state_39338;
var statearr_39346_39371 = state_39338__$1;
(statearr_39346_39371[(2)] = inst_39328);

(statearr_39346_39371[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39339 === (13))){
var state_39338__$1 = state_39338;
var statearr_39347_39372 = state_39338__$1;
(statearr_39347_39372[(2)] = null);

(statearr_39347_39372[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39339 === (6))){
var inst_39298 = (state_39338[(8)]);
var inst_39323 = inst_39298.length;
var inst_39324 = (inst_39323 > (0));
var state_39338__$1 = state_39338;
if(cljs.core.truth_(inst_39324)){
var statearr_39348_39373 = state_39338__$1;
(statearr_39348_39373[(1)] = (12));

} else {
var statearr_39349_39374 = state_39338__$1;
(statearr_39349_39374[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39339 === (3))){
var inst_39336 = (state_39338[(2)]);
var state_39338__$1 = state_39338;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39338__$1,inst_39336);
} else {
if((state_val_39339 === (12))){
var inst_39298 = (state_39338[(8)]);
var inst_39326 = cljs.core.vec.call(null,inst_39298);
var state_39338__$1 = state_39338;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39338__$1,(15),out,inst_39326);
} else {
if((state_val_39339 === (2))){
var state_39338__$1 = state_39338;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39338__$1,(4),ch);
} else {
if((state_val_39339 === (11))){
var inst_39306 = (state_39338[(10)]);
var inst_39302 = (state_39338[(9)]);
var inst_39316 = (state_39338[(2)]);
var inst_39317 = [];
var inst_39318 = inst_39317.push(inst_39302);
var inst_39298 = inst_39317;
var inst_39299 = inst_39306;
var state_39338__$1 = (function (){var statearr_39350 = state_39338;
(statearr_39350[(11)] = inst_39316);

(statearr_39350[(7)] = inst_39299);

(statearr_39350[(12)] = inst_39318);

(statearr_39350[(8)] = inst_39298);

return statearr_39350;
})();
var statearr_39351_39375 = state_39338__$1;
(statearr_39351_39375[(2)] = null);

(statearr_39351_39375[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39339 === (9))){
var inst_39298 = (state_39338[(8)]);
var inst_39314 = cljs.core.vec.call(null,inst_39298);
var state_39338__$1 = state_39338;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39338__$1,(11),out,inst_39314);
} else {
if((state_val_39339 === (5))){
var inst_39299 = (state_39338[(7)]);
var inst_39306 = (state_39338[(10)]);
var inst_39302 = (state_39338[(9)]);
var inst_39306__$1 = f.call(null,inst_39302);
var inst_39307 = cljs.core._EQ_.call(null,inst_39306__$1,inst_39299);
var inst_39308 = cljs.core.keyword_identical_QMARK_.call(null,inst_39299,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_39309 = (inst_39307) || (inst_39308);
var state_39338__$1 = (function (){var statearr_39352 = state_39338;
(statearr_39352[(10)] = inst_39306__$1);

return statearr_39352;
})();
if(cljs.core.truth_(inst_39309)){
var statearr_39353_39376 = state_39338__$1;
(statearr_39353_39376[(1)] = (8));

} else {
var statearr_39354_39377 = state_39338__$1;
(statearr_39354_39377[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39339 === (14))){
var inst_39331 = (state_39338[(2)]);
var inst_39332 = cljs.core.async.close_BANG_.call(null,out);
var state_39338__$1 = (function (){var statearr_39356 = state_39338;
(statearr_39356[(13)] = inst_39331);

return statearr_39356;
})();
var statearr_39357_39378 = state_39338__$1;
(statearr_39357_39378[(2)] = inst_39332);

(statearr_39357_39378[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39339 === (10))){
var inst_39321 = (state_39338[(2)]);
var state_39338__$1 = state_39338;
var statearr_39358_39379 = state_39338__$1;
(statearr_39358_39379[(2)] = inst_39321);

(statearr_39358_39379[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39339 === (8))){
var inst_39306 = (state_39338[(10)]);
var inst_39298 = (state_39338[(8)]);
var inst_39302 = (state_39338[(9)]);
var inst_39311 = inst_39298.push(inst_39302);
var tmp39355 = inst_39298;
var inst_39298__$1 = tmp39355;
var inst_39299 = inst_39306;
var state_39338__$1 = (function (){var statearr_39359 = state_39338;
(statearr_39359[(7)] = inst_39299);

(statearr_39359[(14)] = inst_39311);

(statearr_39359[(8)] = inst_39298__$1);

return statearr_39359;
})();
var statearr_39360_39380 = state_39338__$1;
(statearr_39360_39380[(2)] = null);

(statearr_39360_39380[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__37476__auto___39366,out))
;
return ((function (switch__37388__auto__,c__37476__auto___39366,out){
return (function() {
var cljs$core$async$state_machine__37389__auto__ = null;
var cljs$core$async$state_machine__37389__auto____0 = (function (){
var statearr_39361 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39361[(0)] = cljs$core$async$state_machine__37389__auto__);

(statearr_39361[(1)] = (1));

return statearr_39361;
});
var cljs$core$async$state_machine__37389__auto____1 = (function (state_39338){
while(true){
var ret_value__37390__auto__ = (function (){try{while(true){
var result__37391__auto__ = switch__37388__auto__.call(null,state_39338);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37391__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37391__auto__;
}
break;
}
}catch (e39362){if((e39362 instanceof Object)){
var ex__37392__auto__ = e39362;
var statearr_39363_39381 = state_39338;
(statearr_39363_39381[(5)] = ex__37392__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39338);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39362;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37390__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39382 = state_39338;
state_39338 = G__39382;
continue;
} else {
return ret_value__37390__auto__;
}
break;
}
});
cljs$core$async$state_machine__37389__auto__ = function(state_39338){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37389__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37389__auto____1.call(this,state_39338);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__37389__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37389__auto____0;
cljs$core$async$state_machine__37389__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37389__auto____1;
return cljs$core$async$state_machine__37389__auto__;
})()
;})(switch__37388__auto__,c__37476__auto___39366,out))
})();
var state__37478__auto__ = (function (){var statearr_39364 = f__37477__auto__.call(null);
(statearr_39364[(6)] = c__37476__auto___39366);

return statearr_39364;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37478__auto__);
});})(c__37476__auto___39366,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1530402583195
