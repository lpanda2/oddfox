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
var G__32137 = arguments.length;
switch (G__32137) {
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
if(typeof cljs.core.async.t_cljs$core$async32138 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32138 = (function (f,blockable,meta32139){
this.f = f;
this.blockable = blockable;
this.meta32139 = meta32139;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async32138.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32140,meta32139__$1){
var self__ = this;
var _32140__$1 = this;
return (new cljs.core.async.t_cljs$core$async32138(self__.f,self__.blockable,meta32139__$1));
});

cljs.core.async.t_cljs$core$async32138.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32140){
var self__ = this;
var _32140__$1 = this;
return self__.meta32139;
});

cljs.core.async.t_cljs$core$async32138.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32138.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async32138.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async32138.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async32138.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta32139","meta32139",1106512476,null)], null);
});

cljs.core.async.t_cljs$core$async32138.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32138.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32138";

cljs.core.async.t_cljs$core$async32138.cljs$lang$ctorPrWriter = (function (this__28948__auto__,writer__28949__auto__,opt__28950__auto__){
return cljs.core._write.call(null,writer__28949__auto__,"cljs.core.async/t_cljs$core$async32138");
});

cljs.core.async.__GT_t_cljs$core$async32138 = (function cljs$core$async$__GT_t_cljs$core$async32138(f__$1,blockable__$1,meta32139){
return (new cljs.core.async.t_cljs$core$async32138(f__$1,blockable__$1,meta32139));
});

}

return (new cljs.core.async.t_cljs$core$async32138(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__32144 = arguments.length;
switch (G__32144) {
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
var G__32147 = arguments.length;
switch (G__32147) {
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
var G__32150 = arguments.length;
switch (G__32150) {
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
var val_32152 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_32152);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_32152,ret){
return (function (){
return fn1.call(null,val_32152);
});})(val_32152,ret))
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
var G__32154 = arguments.length;
switch (G__32154) {
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
var n__29268__auto___32156 = n;
var x_32157 = (0);
while(true){
if((x_32157 < n__29268__auto___32156)){
(a[x_32157] = (0));

var G__32158 = (x_32157 + (1));
x_32157 = G__32158;
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

var G__32159 = (i + (1));
i = G__32159;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async32160 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32160 = (function (flag,meta32161){
this.flag = flag;
this.meta32161 = meta32161;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async32160.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_32162,meta32161__$1){
var self__ = this;
var _32162__$1 = this;
return (new cljs.core.async.t_cljs$core$async32160(self__.flag,meta32161__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async32160.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_32162){
var self__ = this;
var _32162__$1 = this;
return self__.meta32161;
});})(flag))
;

cljs.core.async.t_cljs$core$async32160.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32160.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async32160.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async32160.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async32160.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta32161","meta32161",-1809399250,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async32160.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32160.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32160";

cljs.core.async.t_cljs$core$async32160.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__28948__auto__,writer__28949__auto__,opt__28950__auto__){
return cljs.core._write.call(null,writer__28949__auto__,"cljs.core.async/t_cljs$core$async32160");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async32160 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async32160(flag__$1,meta32161){
return (new cljs.core.async.t_cljs$core$async32160(flag__$1,meta32161));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async32160(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async32163 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32163 = (function (flag,cb,meta32164){
this.flag = flag;
this.cb = cb;
this.meta32164 = meta32164;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async32163.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32165,meta32164__$1){
var self__ = this;
var _32165__$1 = this;
return (new cljs.core.async.t_cljs$core$async32163(self__.flag,self__.cb,meta32164__$1));
});

cljs.core.async.t_cljs$core$async32163.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32165){
var self__ = this;
var _32165__$1 = this;
return self__.meta32164;
});

cljs.core.async.t_cljs$core$async32163.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32163.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async32163.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async32163.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async32163.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta32164","meta32164",-1499367209,null)], null);
});

cljs.core.async.t_cljs$core$async32163.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32163.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32163";

cljs.core.async.t_cljs$core$async32163.cljs$lang$ctorPrWriter = (function (this__28948__auto__,writer__28949__auto__,opt__28950__auto__){
return cljs.core._write.call(null,writer__28949__auto__,"cljs.core.async/t_cljs$core$async32163");
});

cljs.core.async.__GT_t_cljs$core$async32163 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async32163(flag__$1,cb__$1,meta32164){
return (new cljs.core.async.t_cljs$core$async32163(flag__$1,cb__$1,meta32164));
});

}

return (new cljs.core.async.t_cljs$core$async32163(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__32166_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__32166_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__32167_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__32167_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__28323__auto__ = wport;
if(cljs.core.truth_(or__28323__auto__)){
return or__28323__auto__;
} else {
return port;
}
})()], null));
} else {
var G__32168 = (i + (1));
i = G__32168;
continue;
}
} else {
return null;
}
break;
}
})();
var or__28323__auto__ = ret;
if(cljs.core.truth_(or__28323__auto__)){
return or__28323__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__28311__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__28311__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__28311__auto__;
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
var args__29499__auto__ = [];
var len__29492__auto___32174 = arguments.length;
var i__29493__auto___32175 = (0);
while(true){
if((i__29493__auto___32175 < len__29492__auto___32174)){
args__29499__auto__.push((arguments[i__29493__auto___32175]));

var G__32176 = (i__29493__auto___32175 + (1));
i__29493__auto___32175 = G__32176;
continue;
} else {
}
break;
}

var argseq__29500__auto__ = ((((1) < args__29499__auto__.length))?(new cljs.core.IndexedSeq(args__29499__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__29500__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__32171){
var map__32172 = p__32171;
var map__32172__$1 = ((((!((map__32172 == null)))?((((map__32172.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32172.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32172):map__32172);
var opts = map__32172__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq32169){
var G__32170 = cljs.core.first.call(null,seq32169);
var seq32169__$1 = cljs.core.next.call(null,seq32169);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__32170,seq32169__$1);
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
var G__32178 = arguments.length;
switch (G__32178) {
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
var c__32091__auto___32224 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32091__auto___32224){
return (function (){
var f__32092__auto__ = (function (){var switch__32003__auto__ = ((function (c__32091__auto___32224){
return (function (state_32202){
var state_val_32203 = (state_32202[(1)]);
if((state_val_32203 === (7))){
var inst_32198 = (state_32202[(2)]);
var state_32202__$1 = state_32202;
var statearr_32204_32225 = state_32202__$1;
(statearr_32204_32225[(2)] = inst_32198);

(statearr_32204_32225[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32203 === (1))){
var state_32202__$1 = state_32202;
var statearr_32205_32226 = state_32202__$1;
(statearr_32205_32226[(2)] = null);

(statearr_32205_32226[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32203 === (4))){
var inst_32181 = (state_32202[(7)]);
var inst_32181__$1 = (state_32202[(2)]);
var inst_32182 = (inst_32181__$1 == null);
var state_32202__$1 = (function (){var statearr_32206 = state_32202;
(statearr_32206[(7)] = inst_32181__$1);

return statearr_32206;
})();
if(cljs.core.truth_(inst_32182)){
var statearr_32207_32227 = state_32202__$1;
(statearr_32207_32227[(1)] = (5));

} else {
var statearr_32208_32228 = state_32202__$1;
(statearr_32208_32228[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32203 === (13))){
var state_32202__$1 = state_32202;
var statearr_32209_32229 = state_32202__$1;
(statearr_32209_32229[(2)] = null);

(statearr_32209_32229[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32203 === (6))){
var inst_32181 = (state_32202[(7)]);
var state_32202__$1 = state_32202;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32202__$1,(11),to,inst_32181);
} else {
if((state_val_32203 === (3))){
var inst_32200 = (state_32202[(2)]);
var state_32202__$1 = state_32202;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32202__$1,inst_32200);
} else {
if((state_val_32203 === (12))){
var state_32202__$1 = state_32202;
var statearr_32210_32230 = state_32202__$1;
(statearr_32210_32230[(2)] = null);

(statearr_32210_32230[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32203 === (2))){
var state_32202__$1 = state_32202;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32202__$1,(4),from);
} else {
if((state_val_32203 === (11))){
var inst_32191 = (state_32202[(2)]);
var state_32202__$1 = state_32202;
if(cljs.core.truth_(inst_32191)){
var statearr_32211_32231 = state_32202__$1;
(statearr_32211_32231[(1)] = (12));

} else {
var statearr_32212_32232 = state_32202__$1;
(statearr_32212_32232[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32203 === (9))){
var state_32202__$1 = state_32202;
var statearr_32213_32233 = state_32202__$1;
(statearr_32213_32233[(2)] = null);

(statearr_32213_32233[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32203 === (5))){
var state_32202__$1 = state_32202;
if(cljs.core.truth_(close_QMARK_)){
var statearr_32214_32234 = state_32202__$1;
(statearr_32214_32234[(1)] = (8));

} else {
var statearr_32215_32235 = state_32202__$1;
(statearr_32215_32235[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32203 === (14))){
var inst_32196 = (state_32202[(2)]);
var state_32202__$1 = state_32202;
var statearr_32216_32236 = state_32202__$1;
(statearr_32216_32236[(2)] = inst_32196);

(statearr_32216_32236[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32203 === (10))){
var inst_32188 = (state_32202[(2)]);
var state_32202__$1 = state_32202;
var statearr_32217_32237 = state_32202__$1;
(statearr_32217_32237[(2)] = inst_32188);

(statearr_32217_32237[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32203 === (8))){
var inst_32185 = cljs.core.async.close_BANG_.call(null,to);
var state_32202__$1 = state_32202;
var statearr_32218_32238 = state_32202__$1;
(statearr_32218_32238[(2)] = inst_32185);

(statearr_32218_32238[(1)] = (10));


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
});})(c__32091__auto___32224))
;
return ((function (switch__32003__auto__,c__32091__auto___32224){
return (function() {
var cljs$core$async$state_machine__32004__auto__ = null;
var cljs$core$async$state_machine__32004__auto____0 = (function (){
var statearr_32219 = [null,null,null,null,null,null,null,null];
(statearr_32219[(0)] = cljs$core$async$state_machine__32004__auto__);

(statearr_32219[(1)] = (1));

return statearr_32219;
});
var cljs$core$async$state_machine__32004__auto____1 = (function (state_32202){
while(true){
var ret_value__32005__auto__ = (function (){try{while(true){
var result__32006__auto__ = switch__32003__auto__.call(null,state_32202);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32006__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32006__auto__;
}
break;
}
}catch (e32220){if((e32220 instanceof Object)){
var ex__32007__auto__ = e32220;
var statearr_32221_32239 = state_32202;
(statearr_32221_32239[(5)] = ex__32007__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32202);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32220;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32005__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32240 = state_32202;
state_32202 = G__32240;
continue;
} else {
return ret_value__32005__auto__;
}
break;
}
});
cljs$core$async$state_machine__32004__auto__ = function(state_32202){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32004__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32004__auto____1.call(this,state_32202);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__32004__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32004__auto____0;
cljs$core$async$state_machine__32004__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32004__auto____1;
return cljs$core$async$state_machine__32004__auto__;
})()
;})(switch__32003__auto__,c__32091__auto___32224))
})();
var state__32093__auto__ = (function (){var statearr_32222 = f__32092__auto__.call(null);
(statearr_32222[(6)] = c__32091__auto___32224);

return statearr_32222;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32093__auto__);
});})(c__32091__auto___32224))
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
return (function (p__32241){
var vec__32242 = p__32241;
var v = cljs.core.nth.call(null,vec__32242,(0),null);
var p = cljs.core.nth.call(null,vec__32242,(1),null);
var job = vec__32242;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__32091__auto___32413 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32091__auto___32413,res,vec__32242,v,p,job,jobs,results){
return (function (){
var f__32092__auto__ = (function (){var switch__32003__auto__ = ((function (c__32091__auto___32413,res,vec__32242,v,p,job,jobs,results){
return (function (state_32249){
var state_val_32250 = (state_32249[(1)]);
if((state_val_32250 === (1))){
var state_32249__$1 = state_32249;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32249__$1,(2),res,v);
} else {
if((state_val_32250 === (2))){
var inst_32246 = (state_32249[(2)]);
var inst_32247 = cljs.core.async.close_BANG_.call(null,res);
var state_32249__$1 = (function (){var statearr_32251 = state_32249;
(statearr_32251[(7)] = inst_32246);

return statearr_32251;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32249__$1,inst_32247);
} else {
return null;
}
}
});})(c__32091__auto___32413,res,vec__32242,v,p,job,jobs,results))
;
return ((function (switch__32003__auto__,c__32091__auto___32413,res,vec__32242,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32004__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32004__auto____0 = (function (){
var statearr_32252 = [null,null,null,null,null,null,null,null];
(statearr_32252[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32004__auto__);

(statearr_32252[(1)] = (1));

return statearr_32252;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32004__auto____1 = (function (state_32249){
while(true){
var ret_value__32005__auto__ = (function (){try{while(true){
var result__32006__auto__ = switch__32003__auto__.call(null,state_32249);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32006__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32006__auto__;
}
break;
}
}catch (e32253){if((e32253 instanceof Object)){
var ex__32007__auto__ = e32253;
var statearr_32254_32414 = state_32249;
(statearr_32254_32414[(5)] = ex__32007__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32249);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32253;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32005__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32415 = state_32249;
state_32249 = G__32415;
continue;
} else {
return ret_value__32005__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32004__auto__ = function(state_32249){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32004__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32004__auto____1.call(this,state_32249);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__32004__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32004__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32004__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32004__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32004__auto__;
})()
;})(switch__32003__auto__,c__32091__auto___32413,res,vec__32242,v,p,job,jobs,results))
})();
var state__32093__auto__ = (function (){var statearr_32255 = f__32092__auto__.call(null);
(statearr_32255[(6)] = c__32091__auto___32413);

return statearr_32255;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32093__auto__);
});})(c__32091__auto___32413,res,vec__32242,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__32256){
var vec__32257 = p__32256;
var v = cljs.core.nth.call(null,vec__32257,(0),null);
var p = cljs.core.nth.call(null,vec__32257,(1),null);
var job = vec__32257;
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
var n__29268__auto___32416 = n;
var __32417 = (0);
while(true){
if((__32417 < n__29268__auto___32416)){
var G__32260_32418 = type;
var G__32260_32419__$1 = (((G__32260_32418 instanceof cljs.core.Keyword))?G__32260_32418.fqn:null);
switch (G__32260_32419__$1) {
case "compute":
var c__32091__auto___32421 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__32417,c__32091__auto___32421,G__32260_32418,G__32260_32419__$1,n__29268__auto___32416,jobs,results,process,async){
return (function (){
var f__32092__auto__ = (function (){var switch__32003__auto__ = ((function (__32417,c__32091__auto___32421,G__32260_32418,G__32260_32419__$1,n__29268__auto___32416,jobs,results,process,async){
return (function (state_32273){
var state_val_32274 = (state_32273[(1)]);
if((state_val_32274 === (1))){
var state_32273__$1 = state_32273;
var statearr_32275_32422 = state_32273__$1;
(statearr_32275_32422[(2)] = null);

(statearr_32275_32422[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32274 === (2))){
var state_32273__$1 = state_32273;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32273__$1,(4),jobs);
} else {
if((state_val_32274 === (3))){
var inst_32271 = (state_32273[(2)]);
var state_32273__$1 = state_32273;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32273__$1,inst_32271);
} else {
if((state_val_32274 === (4))){
var inst_32263 = (state_32273[(2)]);
var inst_32264 = process.call(null,inst_32263);
var state_32273__$1 = state_32273;
if(cljs.core.truth_(inst_32264)){
var statearr_32276_32423 = state_32273__$1;
(statearr_32276_32423[(1)] = (5));

} else {
var statearr_32277_32424 = state_32273__$1;
(statearr_32277_32424[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32274 === (5))){
var state_32273__$1 = state_32273;
var statearr_32278_32425 = state_32273__$1;
(statearr_32278_32425[(2)] = null);

(statearr_32278_32425[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32274 === (6))){
var state_32273__$1 = state_32273;
var statearr_32279_32426 = state_32273__$1;
(statearr_32279_32426[(2)] = null);

(statearr_32279_32426[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32274 === (7))){
var inst_32269 = (state_32273[(2)]);
var state_32273__$1 = state_32273;
var statearr_32280_32427 = state_32273__$1;
(statearr_32280_32427[(2)] = inst_32269);

(statearr_32280_32427[(1)] = (3));


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
});})(__32417,c__32091__auto___32421,G__32260_32418,G__32260_32419__$1,n__29268__auto___32416,jobs,results,process,async))
;
return ((function (__32417,switch__32003__auto__,c__32091__auto___32421,G__32260_32418,G__32260_32419__$1,n__29268__auto___32416,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32004__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32004__auto____0 = (function (){
var statearr_32281 = [null,null,null,null,null,null,null];
(statearr_32281[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32004__auto__);

(statearr_32281[(1)] = (1));

return statearr_32281;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32004__auto____1 = (function (state_32273){
while(true){
var ret_value__32005__auto__ = (function (){try{while(true){
var result__32006__auto__ = switch__32003__auto__.call(null,state_32273);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32006__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32006__auto__;
}
break;
}
}catch (e32282){if((e32282 instanceof Object)){
var ex__32007__auto__ = e32282;
var statearr_32283_32428 = state_32273;
(statearr_32283_32428[(5)] = ex__32007__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32273);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32282;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32005__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32429 = state_32273;
state_32273 = G__32429;
continue;
} else {
return ret_value__32005__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32004__auto__ = function(state_32273){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32004__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32004__auto____1.call(this,state_32273);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__32004__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32004__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32004__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32004__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32004__auto__;
})()
;})(__32417,switch__32003__auto__,c__32091__auto___32421,G__32260_32418,G__32260_32419__$1,n__29268__auto___32416,jobs,results,process,async))
})();
var state__32093__auto__ = (function (){var statearr_32284 = f__32092__auto__.call(null);
(statearr_32284[(6)] = c__32091__auto___32421);

return statearr_32284;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32093__auto__);
});})(__32417,c__32091__auto___32421,G__32260_32418,G__32260_32419__$1,n__29268__auto___32416,jobs,results,process,async))
);


break;
case "async":
var c__32091__auto___32430 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__32417,c__32091__auto___32430,G__32260_32418,G__32260_32419__$1,n__29268__auto___32416,jobs,results,process,async){
return (function (){
var f__32092__auto__ = (function (){var switch__32003__auto__ = ((function (__32417,c__32091__auto___32430,G__32260_32418,G__32260_32419__$1,n__29268__auto___32416,jobs,results,process,async){
return (function (state_32297){
var state_val_32298 = (state_32297[(1)]);
if((state_val_32298 === (1))){
var state_32297__$1 = state_32297;
var statearr_32299_32431 = state_32297__$1;
(statearr_32299_32431[(2)] = null);

(statearr_32299_32431[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32298 === (2))){
var state_32297__$1 = state_32297;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32297__$1,(4),jobs);
} else {
if((state_val_32298 === (3))){
var inst_32295 = (state_32297[(2)]);
var state_32297__$1 = state_32297;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32297__$1,inst_32295);
} else {
if((state_val_32298 === (4))){
var inst_32287 = (state_32297[(2)]);
var inst_32288 = async.call(null,inst_32287);
var state_32297__$1 = state_32297;
if(cljs.core.truth_(inst_32288)){
var statearr_32300_32432 = state_32297__$1;
(statearr_32300_32432[(1)] = (5));

} else {
var statearr_32301_32433 = state_32297__$1;
(statearr_32301_32433[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32298 === (5))){
var state_32297__$1 = state_32297;
var statearr_32302_32434 = state_32297__$1;
(statearr_32302_32434[(2)] = null);

(statearr_32302_32434[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32298 === (6))){
var state_32297__$1 = state_32297;
var statearr_32303_32435 = state_32297__$1;
(statearr_32303_32435[(2)] = null);

(statearr_32303_32435[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32298 === (7))){
var inst_32293 = (state_32297[(2)]);
var state_32297__$1 = state_32297;
var statearr_32304_32436 = state_32297__$1;
(statearr_32304_32436[(2)] = inst_32293);

(statearr_32304_32436[(1)] = (3));


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
});})(__32417,c__32091__auto___32430,G__32260_32418,G__32260_32419__$1,n__29268__auto___32416,jobs,results,process,async))
;
return ((function (__32417,switch__32003__auto__,c__32091__auto___32430,G__32260_32418,G__32260_32419__$1,n__29268__auto___32416,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32004__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32004__auto____0 = (function (){
var statearr_32305 = [null,null,null,null,null,null,null];
(statearr_32305[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32004__auto__);

(statearr_32305[(1)] = (1));

return statearr_32305;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32004__auto____1 = (function (state_32297){
while(true){
var ret_value__32005__auto__ = (function (){try{while(true){
var result__32006__auto__ = switch__32003__auto__.call(null,state_32297);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32006__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32006__auto__;
}
break;
}
}catch (e32306){if((e32306 instanceof Object)){
var ex__32007__auto__ = e32306;
var statearr_32307_32437 = state_32297;
(statearr_32307_32437[(5)] = ex__32007__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32297);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32306;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32005__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32438 = state_32297;
state_32297 = G__32438;
continue;
} else {
return ret_value__32005__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32004__auto__ = function(state_32297){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32004__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32004__auto____1.call(this,state_32297);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__32004__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32004__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32004__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32004__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32004__auto__;
})()
;})(__32417,switch__32003__auto__,c__32091__auto___32430,G__32260_32418,G__32260_32419__$1,n__29268__auto___32416,jobs,results,process,async))
})();
var state__32093__auto__ = (function (){var statearr_32308 = f__32092__auto__.call(null);
(statearr_32308[(6)] = c__32091__auto___32430);

return statearr_32308;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32093__auto__);
});})(__32417,c__32091__auto___32430,G__32260_32418,G__32260_32419__$1,n__29268__auto___32416,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__32260_32419__$1)].join('')));

}

var G__32439 = (__32417 + (1));
__32417 = G__32439;
continue;
} else {
}
break;
}

var c__32091__auto___32440 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32091__auto___32440,jobs,results,process,async){
return (function (){
var f__32092__auto__ = (function (){var switch__32003__auto__ = ((function (c__32091__auto___32440,jobs,results,process,async){
return (function (state_32330){
var state_val_32331 = (state_32330[(1)]);
if((state_val_32331 === (1))){
var state_32330__$1 = state_32330;
var statearr_32332_32441 = state_32330__$1;
(statearr_32332_32441[(2)] = null);

(statearr_32332_32441[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32331 === (2))){
var state_32330__$1 = state_32330;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32330__$1,(4),from);
} else {
if((state_val_32331 === (3))){
var inst_32328 = (state_32330[(2)]);
var state_32330__$1 = state_32330;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32330__$1,inst_32328);
} else {
if((state_val_32331 === (4))){
var inst_32311 = (state_32330[(7)]);
var inst_32311__$1 = (state_32330[(2)]);
var inst_32312 = (inst_32311__$1 == null);
var state_32330__$1 = (function (){var statearr_32333 = state_32330;
(statearr_32333[(7)] = inst_32311__$1);

return statearr_32333;
})();
if(cljs.core.truth_(inst_32312)){
var statearr_32334_32442 = state_32330__$1;
(statearr_32334_32442[(1)] = (5));

} else {
var statearr_32335_32443 = state_32330__$1;
(statearr_32335_32443[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32331 === (5))){
var inst_32314 = cljs.core.async.close_BANG_.call(null,jobs);
var state_32330__$1 = state_32330;
var statearr_32336_32444 = state_32330__$1;
(statearr_32336_32444[(2)] = inst_32314);

(statearr_32336_32444[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32331 === (6))){
var inst_32311 = (state_32330[(7)]);
var inst_32316 = (state_32330[(8)]);
var inst_32316__$1 = cljs.core.async.chan.call(null,(1));
var inst_32317 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_32318 = [inst_32311,inst_32316__$1];
var inst_32319 = (new cljs.core.PersistentVector(null,2,(5),inst_32317,inst_32318,null));
var state_32330__$1 = (function (){var statearr_32337 = state_32330;
(statearr_32337[(8)] = inst_32316__$1);

return statearr_32337;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32330__$1,(8),jobs,inst_32319);
} else {
if((state_val_32331 === (7))){
var inst_32326 = (state_32330[(2)]);
var state_32330__$1 = state_32330;
var statearr_32338_32445 = state_32330__$1;
(statearr_32338_32445[(2)] = inst_32326);

(statearr_32338_32445[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32331 === (8))){
var inst_32316 = (state_32330[(8)]);
var inst_32321 = (state_32330[(2)]);
var state_32330__$1 = (function (){var statearr_32339 = state_32330;
(statearr_32339[(9)] = inst_32321);

return statearr_32339;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32330__$1,(9),results,inst_32316);
} else {
if((state_val_32331 === (9))){
var inst_32323 = (state_32330[(2)]);
var state_32330__$1 = (function (){var statearr_32340 = state_32330;
(statearr_32340[(10)] = inst_32323);

return statearr_32340;
})();
var statearr_32341_32446 = state_32330__$1;
(statearr_32341_32446[(2)] = null);

(statearr_32341_32446[(1)] = (2));


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
});})(c__32091__auto___32440,jobs,results,process,async))
;
return ((function (switch__32003__auto__,c__32091__auto___32440,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32004__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32004__auto____0 = (function (){
var statearr_32342 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32342[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32004__auto__);

(statearr_32342[(1)] = (1));

return statearr_32342;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32004__auto____1 = (function (state_32330){
while(true){
var ret_value__32005__auto__ = (function (){try{while(true){
var result__32006__auto__ = switch__32003__auto__.call(null,state_32330);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32006__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32006__auto__;
}
break;
}
}catch (e32343){if((e32343 instanceof Object)){
var ex__32007__auto__ = e32343;
var statearr_32344_32447 = state_32330;
(statearr_32344_32447[(5)] = ex__32007__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32330);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32343;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32005__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32448 = state_32330;
state_32330 = G__32448;
continue;
} else {
return ret_value__32005__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32004__auto__ = function(state_32330){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32004__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32004__auto____1.call(this,state_32330);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__32004__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32004__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32004__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32004__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32004__auto__;
})()
;})(switch__32003__auto__,c__32091__auto___32440,jobs,results,process,async))
})();
var state__32093__auto__ = (function (){var statearr_32345 = f__32092__auto__.call(null);
(statearr_32345[(6)] = c__32091__auto___32440);

return statearr_32345;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32093__auto__);
});})(c__32091__auto___32440,jobs,results,process,async))
);


var c__32091__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32091__auto__,jobs,results,process,async){
return (function (){
var f__32092__auto__ = (function (){var switch__32003__auto__ = ((function (c__32091__auto__,jobs,results,process,async){
return (function (state_32383){
var state_val_32384 = (state_32383[(1)]);
if((state_val_32384 === (7))){
var inst_32379 = (state_32383[(2)]);
var state_32383__$1 = state_32383;
var statearr_32385_32449 = state_32383__$1;
(statearr_32385_32449[(2)] = inst_32379);

(statearr_32385_32449[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32384 === (20))){
var state_32383__$1 = state_32383;
var statearr_32386_32450 = state_32383__$1;
(statearr_32386_32450[(2)] = null);

(statearr_32386_32450[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32384 === (1))){
var state_32383__$1 = state_32383;
var statearr_32387_32451 = state_32383__$1;
(statearr_32387_32451[(2)] = null);

(statearr_32387_32451[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32384 === (4))){
var inst_32348 = (state_32383[(7)]);
var inst_32348__$1 = (state_32383[(2)]);
var inst_32349 = (inst_32348__$1 == null);
var state_32383__$1 = (function (){var statearr_32388 = state_32383;
(statearr_32388[(7)] = inst_32348__$1);

return statearr_32388;
})();
if(cljs.core.truth_(inst_32349)){
var statearr_32389_32452 = state_32383__$1;
(statearr_32389_32452[(1)] = (5));

} else {
var statearr_32390_32453 = state_32383__$1;
(statearr_32390_32453[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32384 === (15))){
var inst_32361 = (state_32383[(8)]);
var state_32383__$1 = state_32383;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32383__$1,(18),to,inst_32361);
} else {
if((state_val_32384 === (21))){
var inst_32374 = (state_32383[(2)]);
var state_32383__$1 = state_32383;
var statearr_32391_32454 = state_32383__$1;
(statearr_32391_32454[(2)] = inst_32374);

(statearr_32391_32454[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32384 === (13))){
var inst_32376 = (state_32383[(2)]);
var state_32383__$1 = (function (){var statearr_32392 = state_32383;
(statearr_32392[(9)] = inst_32376);

return statearr_32392;
})();
var statearr_32393_32455 = state_32383__$1;
(statearr_32393_32455[(2)] = null);

(statearr_32393_32455[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32384 === (6))){
var inst_32348 = (state_32383[(7)]);
var state_32383__$1 = state_32383;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32383__$1,(11),inst_32348);
} else {
if((state_val_32384 === (17))){
var inst_32369 = (state_32383[(2)]);
var state_32383__$1 = state_32383;
if(cljs.core.truth_(inst_32369)){
var statearr_32394_32456 = state_32383__$1;
(statearr_32394_32456[(1)] = (19));

} else {
var statearr_32395_32457 = state_32383__$1;
(statearr_32395_32457[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32384 === (3))){
var inst_32381 = (state_32383[(2)]);
var state_32383__$1 = state_32383;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32383__$1,inst_32381);
} else {
if((state_val_32384 === (12))){
var inst_32358 = (state_32383[(10)]);
var state_32383__$1 = state_32383;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32383__$1,(14),inst_32358);
} else {
if((state_val_32384 === (2))){
var state_32383__$1 = state_32383;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32383__$1,(4),results);
} else {
if((state_val_32384 === (19))){
var state_32383__$1 = state_32383;
var statearr_32396_32458 = state_32383__$1;
(statearr_32396_32458[(2)] = null);

(statearr_32396_32458[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32384 === (11))){
var inst_32358 = (state_32383[(2)]);
var state_32383__$1 = (function (){var statearr_32397 = state_32383;
(statearr_32397[(10)] = inst_32358);

return statearr_32397;
})();
var statearr_32398_32459 = state_32383__$1;
(statearr_32398_32459[(2)] = null);

(statearr_32398_32459[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32384 === (9))){
var state_32383__$1 = state_32383;
var statearr_32399_32460 = state_32383__$1;
(statearr_32399_32460[(2)] = null);

(statearr_32399_32460[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32384 === (5))){
var state_32383__$1 = state_32383;
if(cljs.core.truth_(close_QMARK_)){
var statearr_32400_32461 = state_32383__$1;
(statearr_32400_32461[(1)] = (8));

} else {
var statearr_32401_32462 = state_32383__$1;
(statearr_32401_32462[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32384 === (14))){
var inst_32363 = (state_32383[(11)]);
var inst_32361 = (state_32383[(8)]);
var inst_32361__$1 = (state_32383[(2)]);
var inst_32362 = (inst_32361__$1 == null);
var inst_32363__$1 = cljs.core.not.call(null,inst_32362);
var state_32383__$1 = (function (){var statearr_32402 = state_32383;
(statearr_32402[(11)] = inst_32363__$1);

(statearr_32402[(8)] = inst_32361__$1);

return statearr_32402;
})();
if(inst_32363__$1){
var statearr_32403_32463 = state_32383__$1;
(statearr_32403_32463[(1)] = (15));

} else {
var statearr_32404_32464 = state_32383__$1;
(statearr_32404_32464[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32384 === (16))){
var inst_32363 = (state_32383[(11)]);
var state_32383__$1 = state_32383;
var statearr_32405_32465 = state_32383__$1;
(statearr_32405_32465[(2)] = inst_32363);

(statearr_32405_32465[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32384 === (10))){
var inst_32355 = (state_32383[(2)]);
var state_32383__$1 = state_32383;
var statearr_32406_32466 = state_32383__$1;
(statearr_32406_32466[(2)] = inst_32355);

(statearr_32406_32466[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32384 === (18))){
var inst_32366 = (state_32383[(2)]);
var state_32383__$1 = state_32383;
var statearr_32407_32467 = state_32383__$1;
(statearr_32407_32467[(2)] = inst_32366);

(statearr_32407_32467[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32384 === (8))){
var inst_32352 = cljs.core.async.close_BANG_.call(null,to);
var state_32383__$1 = state_32383;
var statearr_32408_32468 = state_32383__$1;
(statearr_32408_32468[(2)] = inst_32352);

(statearr_32408_32468[(1)] = (10));


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
});})(c__32091__auto__,jobs,results,process,async))
;
return ((function (switch__32003__auto__,c__32091__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32004__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32004__auto____0 = (function (){
var statearr_32409 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32409[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32004__auto__);

(statearr_32409[(1)] = (1));

return statearr_32409;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32004__auto____1 = (function (state_32383){
while(true){
var ret_value__32005__auto__ = (function (){try{while(true){
var result__32006__auto__ = switch__32003__auto__.call(null,state_32383);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32006__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32006__auto__;
}
break;
}
}catch (e32410){if((e32410 instanceof Object)){
var ex__32007__auto__ = e32410;
var statearr_32411_32469 = state_32383;
(statearr_32411_32469[(5)] = ex__32007__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32383);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32410;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32005__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32470 = state_32383;
state_32383 = G__32470;
continue;
} else {
return ret_value__32005__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32004__auto__ = function(state_32383){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32004__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32004__auto____1.call(this,state_32383);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__32004__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32004__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32004__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32004__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32004__auto__;
})()
;})(switch__32003__auto__,c__32091__auto__,jobs,results,process,async))
})();
var state__32093__auto__ = (function (){var statearr_32412 = f__32092__auto__.call(null);
(statearr_32412[(6)] = c__32091__auto__);

return statearr_32412;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32093__auto__);
});})(c__32091__auto__,jobs,results,process,async))
);

return c__32091__auto__;
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
var G__32472 = arguments.length;
switch (G__32472) {
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
var G__32475 = arguments.length;
switch (G__32475) {
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
var G__32478 = arguments.length;
switch (G__32478) {
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
var c__32091__auto___32527 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32091__auto___32527,tc,fc){
return (function (){
var f__32092__auto__ = (function (){var switch__32003__auto__ = ((function (c__32091__auto___32527,tc,fc){
return (function (state_32504){
var state_val_32505 = (state_32504[(1)]);
if((state_val_32505 === (7))){
var inst_32500 = (state_32504[(2)]);
var state_32504__$1 = state_32504;
var statearr_32506_32528 = state_32504__$1;
(statearr_32506_32528[(2)] = inst_32500);

(statearr_32506_32528[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32505 === (1))){
var state_32504__$1 = state_32504;
var statearr_32507_32529 = state_32504__$1;
(statearr_32507_32529[(2)] = null);

(statearr_32507_32529[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32505 === (4))){
var inst_32481 = (state_32504[(7)]);
var inst_32481__$1 = (state_32504[(2)]);
var inst_32482 = (inst_32481__$1 == null);
var state_32504__$1 = (function (){var statearr_32508 = state_32504;
(statearr_32508[(7)] = inst_32481__$1);

return statearr_32508;
})();
if(cljs.core.truth_(inst_32482)){
var statearr_32509_32530 = state_32504__$1;
(statearr_32509_32530[(1)] = (5));

} else {
var statearr_32510_32531 = state_32504__$1;
(statearr_32510_32531[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32505 === (13))){
var state_32504__$1 = state_32504;
var statearr_32511_32532 = state_32504__$1;
(statearr_32511_32532[(2)] = null);

(statearr_32511_32532[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32505 === (6))){
var inst_32481 = (state_32504[(7)]);
var inst_32487 = p.call(null,inst_32481);
var state_32504__$1 = state_32504;
if(cljs.core.truth_(inst_32487)){
var statearr_32512_32533 = state_32504__$1;
(statearr_32512_32533[(1)] = (9));

} else {
var statearr_32513_32534 = state_32504__$1;
(statearr_32513_32534[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32505 === (3))){
var inst_32502 = (state_32504[(2)]);
var state_32504__$1 = state_32504;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32504__$1,inst_32502);
} else {
if((state_val_32505 === (12))){
var state_32504__$1 = state_32504;
var statearr_32514_32535 = state_32504__$1;
(statearr_32514_32535[(2)] = null);

(statearr_32514_32535[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32505 === (2))){
var state_32504__$1 = state_32504;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32504__$1,(4),ch);
} else {
if((state_val_32505 === (11))){
var inst_32481 = (state_32504[(7)]);
var inst_32491 = (state_32504[(2)]);
var state_32504__$1 = state_32504;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32504__$1,(8),inst_32491,inst_32481);
} else {
if((state_val_32505 === (9))){
var state_32504__$1 = state_32504;
var statearr_32515_32536 = state_32504__$1;
(statearr_32515_32536[(2)] = tc);

(statearr_32515_32536[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32505 === (5))){
var inst_32484 = cljs.core.async.close_BANG_.call(null,tc);
var inst_32485 = cljs.core.async.close_BANG_.call(null,fc);
var state_32504__$1 = (function (){var statearr_32516 = state_32504;
(statearr_32516[(8)] = inst_32484);

return statearr_32516;
})();
var statearr_32517_32537 = state_32504__$1;
(statearr_32517_32537[(2)] = inst_32485);

(statearr_32517_32537[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32505 === (14))){
var inst_32498 = (state_32504[(2)]);
var state_32504__$1 = state_32504;
var statearr_32518_32538 = state_32504__$1;
(statearr_32518_32538[(2)] = inst_32498);

(statearr_32518_32538[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32505 === (10))){
var state_32504__$1 = state_32504;
var statearr_32519_32539 = state_32504__$1;
(statearr_32519_32539[(2)] = fc);

(statearr_32519_32539[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32505 === (8))){
var inst_32493 = (state_32504[(2)]);
var state_32504__$1 = state_32504;
if(cljs.core.truth_(inst_32493)){
var statearr_32520_32540 = state_32504__$1;
(statearr_32520_32540[(1)] = (12));

} else {
var statearr_32521_32541 = state_32504__$1;
(statearr_32521_32541[(1)] = (13));

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
});})(c__32091__auto___32527,tc,fc))
;
return ((function (switch__32003__auto__,c__32091__auto___32527,tc,fc){
return (function() {
var cljs$core$async$state_machine__32004__auto__ = null;
var cljs$core$async$state_machine__32004__auto____0 = (function (){
var statearr_32522 = [null,null,null,null,null,null,null,null,null];
(statearr_32522[(0)] = cljs$core$async$state_machine__32004__auto__);

(statearr_32522[(1)] = (1));

return statearr_32522;
});
var cljs$core$async$state_machine__32004__auto____1 = (function (state_32504){
while(true){
var ret_value__32005__auto__ = (function (){try{while(true){
var result__32006__auto__ = switch__32003__auto__.call(null,state_32504);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32006__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32006__auto__;
}
break;
}
}catch (e32523){if((e32523 instanceof Object)){
var ex__32007__auto__ = e32523;
var statearr_32524_32542 = state_32504;
(statearr_32524_32542[(5)] = ex__32007__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32504);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32523;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32005__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32543 = state_32504;
state_32504 = G__32543;
continue;
} else {
return ret_value__32005__auto__;
}
break;
}
});
cljs$core$async$state_machine__32004__auto__ = function(state_32504){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32004__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32004__auto____1.call(this,state_32504);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__32004__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32004__auto____0;
cljs$core$async$state_machine__32004__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32004__auto____1;
return cljs$core$async$state_machine__32004__auto__;
})()
;})(switch__32003__auto__,c__32091__auto___32527,tc,fc))
})();
var state__32093__auto__ = (function (){var statearr_32525 = f__32092__auto__.call(null);
(statearr_32525[(6)] = c__32091__auto___32527);

return statearr_32525;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32093__auto__);
});})(c__32091__auto___32527,tc,fc))
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
var c__32091__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32091__auto__){
return (function (){
var f__32092__auto__ = (function (){var switch__32003__auto__ = ((function (c__32091__auto__){
return (function (state_32564){
var state_val_32565 = (state_32564[(1)]);
if((state_val_32565 === (7))){
var inst_32560 = (state_32564[(2)]);
var state_32564__$1 = state_32564;
var statearr_32566_32584 = state_32564__$1;
(statearr_32566_32584[(2)] = inst_32560);

(statearr_32566_32584[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32565 === (1))){
var inst_32544 = init;
var state_32564__$1 = (function (){var statearr_32567 = state_32564;
(statearr_32567[(7)] = inst_32544);

return statearr_32567;
})();
var statearr_32568_32585 = state_32564__$1;
(statearr_32568_32585[(2)] = null);

(statearr_32568_32585[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32565 === (4))){
var inst_32547 = (state_32564[(8)]);
var inst_32547__$1 = (state_32564[(2)]);
var inst_32548 = (inst_32547__$1 == null);
var state_32564__$1 = (function (){var statearr_32569 = state_32564;
(statearr_32569[(8)] = inst_32547__$1);

return statearr_32569;
})();
if(cljs.core.truth_(inst_32548)){
var statearr_32570_32586 = state_32564__$1;
(statearr_32570_32586[(1)] = (5));

} else {
var statearr_32571_32587 = state_32564__$1;
(statearr_32571_32587[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32565 === (6))){
var inst_32551 = (state_32564[(9)]);
var inst_32544 = (state_32564[(7)]);
var inst_32547 = (state_32564[(8)]);
var inst_32551__$1 = f.call(null,inst_32544,inst_32547);
var inst_32552 = cljs.core.reduced_QMARK_.call(null,inst_32551__$1);
var state_32564__$1 = (function (){var statearr_32572 = state_32564;
(statearr_32572[(9)] = inst_32551__$1);

return statearr_32572;
})();
if(inst_32552){
var statearr_32573_32588 = state_32564__$1;
(statearr_32573_32588[(1)] = (8));

} else {
var statearr_32574_32589 = state_32564__$1;
(statearr_32574_32589[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32565 === (3))){
var inst_32562 = (state_32564[(2)]);
var state_32564__$1 = state_32564;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32564__$1,inst_32562);
} else {
if((state_val_32565 === (2))){
var state_32564__$1 = state_32564;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32564__$1,(4),ch);
} else {
if((state_val_32565 === (9))){
var inst_32551 = (state_32564[(9)]);
var inst_32544 = inst_32551;
var state_32564__$1 = (function (){var statearr_32575 = state_32564;
(statearr_32575[(7)] = inst_32544);

return statearr_32575;
})();
var statearr_32576_32590 = state_32564__$1;
(statearr_32576_32590[(2)] = null);

(statearr_32576_32590[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32565 === (5))){
var inst_32544 = (state_32564[(7)]);
var state_32564__$1 = state_32564;
var statearr_32577_32591 = state_32564__$1;
(statearr_32577_32591[(2)] = inst_32544);

(statearr_32577_32591[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32565 === (10))){
var inst_32558 = (state_32564[(2)]);
var state_32564__$1 = state_32564;
var statearr_32578_32592 = state_32564__$1;
(statearr_32578_32592[(2)] = inst_32558);

(statearr_32578_32592[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32565 === (8))){
var inst_32551 = (state_32564[(9)]);
var inst_32554 = cljs.core.deref.call(null,inst_32551);
var state_32564__$1 = state_32564;
var statearr_32579_32593 = state_32564__$1;
(statearr_32579_32593[(2)] = inst_32554);

(statearr_32579_32593[(1)] = (10));


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
});})(c__32091__auto__))
;
return ((function (switch__32003__auto__,c__32091__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__32004__auto__ = null;
var cljs$core$async$reduce_$_state_machine__32004__auto____0 = (function (){
var statearr_32580 = [null,null,null,null,null,null,null,null,null,null];
(statearr_32580[(0)] = cljs$core$async$reduce_$_state_machine__32004__auto__);

(statearr_32580[(1)] = (1));

return statearr_32580;
});
var cljs$core$async$reduce_$_state_machine__32004__auto____1 = (function (state_32564){
while(true){
var ret_value__32005__auto__ = (function (){try{while(true){
var result__32006__auto__ = switch__32003__auto__.call(null,state_32564);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32006__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32006__auto__;
}
break;
}
}catch (e32581){if((e32581 instanceof Object)){
var ex__32007__auto__ = e32581;
var statearr_32582_32594 = state_32564;
(statearr_32582_32594[(5)] = ex__32007__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32564);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32581;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32005__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32595 = state_32564;
state_32564 = G__32595;
continue;
} else {
return ret_value__32005__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__32004__auto__ = function(state_32564){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__32004__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__32004__auto____1.call(this,state_32564);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__32004__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__32004__auto____0;
cljs$core$async$reduce_$_state_machine__32004__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__32004__auto____1;
return cljs$core$async$reduce_$_state_machine__32004__auto__;
})()
;})(switch__32003__auto__,c__32091__auto__))
})();
var state__32093__auto__ = (function (){var statearr_32583 = f__32092__auto__.call(null);
(statearr_32583[(6)] = c__32091__auto__);

return statearr_32583;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32093__auto__);
});})(c__32091__auto__))
);

return c__32091__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__32091__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32091__auto__,f__$1){
return (function (){
var f__32092__auto__ = (function (){var switch__32003__auto__ = ((function (c__32091__auto__,f__$1){
return (function (state_32601){
var state_val_32602 = (state_32601[(1)]);
if((state_val_32602 === (1))){
var inst_32596 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_32601__$1 = state_32601;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32601__$1,(2),inst_32596);
} else {
if((state_val_32602 === (2))){
var inst_32598 = (state_32601[(2)]);
var inst_32599 = f__$1.call(null,inst_32598);
var state_32601__$1 = state_32601;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32601__$1,inst_32599);
} else {
return null;
}
}
});})(c__32091__auto__,f__$1))
;
return ((function (switch__32003__auto__,c__32091__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__32004__auto__ = null;
var cljs$core$async$transduce_$_state_machine__32004__auto____0 = (function (){
var statearr_32603 = [null,null,null,null,null,null,null];
(statearr_32603[(0)] = cljs$core$async$transduce_$_state_machine__32004__auto__);

(statearr_32603[(1)] = (1));

return statearr_32603;
});
var cljs$core$async$transduce_$_state_machine__32004__auto____1 = (function (state_32601){
while(true){
var ret_value__32005__auto__ = (function (){try{while(true){
var result__32006__auto__ = switch__32003__auto__.call(null,state_32601);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32006__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32006__auto__;
}
break;
}
}catch (e32604){if((e32604 instanceof Object)){
var ex__32007__auto__ = e32604;
var statearr_32605_32607 = state_32601;
(statearr_32605_32607[(5)] = ex__32007__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32601);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32604;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32005__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32608 = state_32601;
state_32601 = G__32608;
continue;
} else {
return ret_value__32005__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__32004__auto__ = function(state_32601){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__32004__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__32004__auto____1.call(this,state_32601);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$transduce_$_state_machine__32004__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__32004__auto____0;
cljs$core$async$transduce_$_state_machine__32004__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__32004__auto____1;
return cljs$core$async$transduce_$_state_machine__32004__auto__;
})()
;})(switch__32003__auto__,c__32091__auto__,f__$1))
})();
var state__32093__auto__ = (function (){var statearr_32606 = f__32092__auto__.call(null);
(statearr_32606[(6)] = c__32091__auto__);

return statearr_32606;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32093__auto__);
});})(c__32091__auto__,f__$1))
);

return c__32091__auto__;
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
var G__32610 = arguments.length;
switch (G__32610) {
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
var c__32091__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32091__auto__){
return (function (){
var f__32092__auto__ = (function (){var switch__32003__auto__ = ((function (c__32091__auto__){
return (function (state_32635){
var state_val_32636 = (state_32635[(1)]);
if((state_val_32636 === (7))){
var inst_32617 = (state_32635[(2)]);
var state_32635__$1 = state_32635;
var statearr_32637_32658 = state_32635__$1;
(statearr_32637_32658[(2)] = inst_32617);

(statearr_32637_32658[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32636 === (1))){
var inst_32611 = cljs.core.seq.call(null,coll);
var inst_32612 = inst_32611;
var state_32635__$1 = (function (){var statearr_32638 = state_32635;
(statearr_32638[(7)] = inst_32612);

return statearr_32638;
})();
var statearr_32639_32659 = state_32635__$1;
(statearr_32639_32659[(2)] = null);

(statearr_32639_32659[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32636 === (4))){
var inst_32612 = (state_32635[(7)]);
var inst_32615 = cljs.core.first.call(null,inst_32612);
var state_32635__$1 = state_32635;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32635__$1,(7),ch,inst_32615);
} else {
if((state_val_32636 === (13))){
var inst_32629 = (state_32635[(2)]);
var state_32635__$1 = state_32635;
var statearr_32640_32660 = state_32635__$1;
(statearr_32640_32660[(2)] = inst_32629);

(statearr_32640_32660[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32636 === (6))){
var inst_32620 = (state_32635[(2)]);
var state_32635__$1 = state_32635;
if(cljs.core.truth_(inst_32620)){
var statearr_32641_32661 = state_32635__$1;
(statearr_32641_32661[(1)] = (8));

} else {
var statearr_32642_32662 = state_32635__$1;
(statearr_32642_32662[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32636 === (3))){
var inst_32633 = (state_32635[(2)]);
var state_32635__$1 = state_32635;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32635__$1,inst_32633);
} else {
if((state_val_32636 === (12))){
var state_32635__$1 = state_32635;
var statearr_32643_32663 = state_32635__$1;
(statearr_32643_32663[(2)] = null);

(statearr_32643_32663[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32636 === (2))){
var inst_32612 = (state_32635[(7)]);
var state_32635__$1 = state_32635;
if(cljs.core.truth_(inst_32612)){
var statearr_32644_32664 = state_32635__$1;
(statearr_32644_32664[(1)] = (4));

} else {
var statearr_32645_32665 = state_32635__$1;
(statearr_32645_32665[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32636 === (11))){
var inst_32626 = cljs.core.async.close_BANG_.call(null,ch);
var state_32635__$1 = state_32635;
var statearr_32646_32666 = state_32635__$1;
(statearr_32646_32666[(2)] = inst_32626);

(statearr_32646_32666[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32636 === (9))){
var state_32635__$1 = state_32635;
if(cljs.core.truth_(close_QMARK_)){
var statearr_32647_32667 = state_32635__$1;
(statearr_32647_32667[(1)] = (11));

} else {
var statearr_32648_32668 = state_32635__$1;
(statearr_32648_32668[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32636 === (5))){
var inst_32612 = (state_32635[(7)]);
var state_32635__$1 = state_32635;
var statearr_32649_32669 = state_32635__$1;
(statearr_32649_32669[(2)] = inst_32612);

(statearr_32649_32669[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32636 === (10))){
var inst_32631 = (state_32635[(2)]);
var state_32635__$1 = state_32635;
var statearr_32650_32670 = state_32635__$1;
(statearr_32650_32670[(2)] = inst_32631);

(statearr_32650_32670[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32636 === (8))){
var inst_32612 = (state_32635[(7)]);
var inst_32622 = cljs.core.next.call(null,inst_32612);
var inst_32612__$1 = inst_32622;
var state_32635__$1 = (function (){var statearr_32651 = state_32635;
(statearr_32651[(7)] = inst_32612__$1);

return statearr_32651;
})();
var statearr_32652_32671 = state_32635__$1;
(statearr_32652_32671[(2)] = null);

(statearr_32652_32671[(1)] = (2));


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
});})(c__32091__auto__))
;
return ((function (switch__32003__auto__,c__32091__auto__){
return (function() {
var cljs$core$async$state_machine__32004__auto__ = null;
var cljs$core$async$state_machine__32004__auto____0 = (function (){
var statearr_32653 = [null,null,null,null,null,null,null,null];
(statearr_32653[(0)] = cljs$core$async$state_machine__32004__auto__);

(statearr_32653[(1)] = (1));

return statearr_32653;
});
var cljs$core$async$state_machine__32004__auto____1 = (function (state_32635){
while(true){
var ret_value__32005__auto__ = (function (){try{while(true){
var result__32006__auto__ = switch__32003__auto__.call(null,state_32635);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32006__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32006__auto__;
}
break;
}
}catch (e32654){if((e32654 instanceof Object)){
var ex__32007__auto__ = e32654;
var statearr_32655_32672 = state_32635;
(statearr_32655_32672[(5)] = ex__32007__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32635);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32654;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32005__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32673 = state_32635;
state_32635 = G__32673;
continue;
} else {
return ret_value__32005__auto__;
}
break;
}
});
cljs$core$async$state_machine__32004__auto__ = function(state_32635){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32004__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32004__auto____1.call(this,state_32635);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__32004__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32004__auto____0;
cljs$core$async$state_machine__32004__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32004__auto____1;
return cljs$core$async$state_machine__32004__auto__;
})()
;})(switch__32003__auto__,c__32091__auto__))
})();
var state__32093__auto__ = (function (){var statearr_32656 = f__32092__auto__.call(null);
(statearr_32656[(6)] = c__32091__auto__);

return statearr_32656;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32093__auto__);
});})(c__32091__auto__))
);

return c__32091__auto__;
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
var x__29006__auto__ = (((_ == null))?null:_);
var m__29007__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__29006__auto__)]);
if(!((m__29007__auto__ == null))){
return m__29007__auto__.call(null,_);
} else {
var m__29007__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__29007__auto____$1 == null))){
return m__29007__auto____$1.call(null,_);
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
var x__29006__auto__ = (((m == null))?null:m);
var m__29007__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__29006__auto__)]);
if(!((m__29007__auto__ == null))){
return m__29007__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__29007__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__29007__auto____$1 == null))){
return m__29007__auto____$1.call(null,m,ch,close_QMARK_);
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
var x__29006__auto__ = (((m == null))?null:m);
var m__29007__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__29006__auto__)]);
if(!((m__29007__auto__ == null))){
return m__29007__auto__.call(null,m,ch);
} else {
var m__29007__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__29007__auto____$1 == null))){
return m__29007__auto____$1.call(null,m,ch);
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
var x__29006__auto__ = (((m == null))?null:m);
var m__29007__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__29006__auto__)]);
if(!((m__29007__auto__ == null))){
return m__29007__auto__.call(null,m);
} else {
var m__29007__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__29007__auto____$1 == null))){
return m__29007__auto____$1.call(null,m);
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
if(typeof cljs.core.async.t_cljs$core$async32674 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32674 = (function (ch,cs,meta32675){
this.ch = ch;
this.cs = cs;
this.meta32675 = meta32675;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async32674.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_32676,meta32675__$1){
var self__ = this;
var _32676__$1 = this;
return (new cljs.core.async.t_cljs$core$async32674(self__.ch,self__.cs,meta32675__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async32674.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_32676){
var self__ = this;
var _32676__$1 = this;
return self__.meta32675;
});})(cs))
;

cljs.core.async.t_cljs$core$async32674.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32674.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async32674.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32674.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async32674.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async32674.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async32674.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta32675","meta32675",1528629600,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async32674.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32674.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32674";

cljs.core.async.t_cljs$core$async32674.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__28948__auto__,writer__28949__auto__,opt__28950__auto__){
return cljs.core._write.call(null,writer__28949__auto__,"cljs.core.async/t_cljs$core$async32674");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async32674 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async32674(ch__$1,cs__$1,meta32675){
return (new cljs.core.async.t_cljs$core$async32674(ch__$1,cs__$1,meta32675));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async32674(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__32091__auto___32896 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32091__auto___32896,cs,m,dchan,dctr,done){
return (function (){
var f__32092__auto__ = (function (){var switch__32003__auto__ = ((function (c__32091__auto___32896,cs,m,dchan,dctr,done){
return (function (state_32811){
var state_val_32812 = (state_32811[(1)]);
if((state_val_32812 === (7))){
var inst_32807 = (state_32811[(2)]);
var state_32811__$1 = state_32811;
var statearr_32813_32897 = state_32811__$1;
(statearr_32813_32897[(2)] = inst_32807);

(statearr_32813_32897[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32812 === (20))){
var inst_32710 = (state_32811[(7)]);
var inst_32722 = cljs.core.first.call(null,inst_32710);
var inst_32723 = cljs.core.nth.call(null,inst_32722,(0),null);
var inst_32724 = cljs.core.nth.call(null,inst_32722,(1),null);
var state_32811__$1 = (function (){var statearr_32814 = state_32811;
(statearr_32814[(8)] = inst_32723);

return statearr_32814;
})();
if(cljs.core.truth_(inst_32724)){
var statearr_32815_32898 = state_32811__$1;
(statearr_32815_32898[(1)] = (22));

} else {
var statearr_32816_32899 = state_32811__$1;
(statearr_32816_32899[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32812 === (27))){
var inst_32759 = (state_32811[(9)]);
var inst_32679 = (state_32811[(10)]);
var inst_32754 = (state_32811[(11)]);
var inst_32752 = (state_32811[(12)]);
var inst_32759__$1 = cljs.core._nth.call(null,inst_32752,inst_32754);
var inst_32760 = cljs.core.async.put_BANG_.call(null,inst_32759__$1,inst_32679,done);
var state_32811__$1 = (function (){var statearr_32817 = state_32811;
(statearr_32817[(9)] = inst_32759__$1);

return statearr_32817;
})();
if(cljs.core.truth_(inst_32760)){
var statearr_32818_32900 = state_32811__$1;
(statearr_32818_32900[(1)] = (30));

} else {
var statearr_32819_32901 = state_32811__$1;
(statearr_32819_32901[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32812 === (1))){
var state_32811__$1 = state_32811;
var statearr_32820_32902 = state_32811__$1;
(statearr_32820_32902[(2)] = null);

(statearr_32820_32902[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32812 === (24))){
var inst_32710 = (state_32811[(7)]);
var inst_32729 = (state_32811[(2)]);
var inst_32730 = cljs.core.next.call(null,inst_32710);
var inst_32688 = inst_32730;
var inst_32689 = null;
var inst_32690 = (0);
var inst_32691 = (0);
var state_32811__$1 = (function (){var statearr_32821 = state_32811;
(statearr_32821[(13)] = inst_32691);

(statearr_32821[(14)] = inst_32688);

(statearr_32821[(15)] = inst_32729);

(statearr_32821[(16)] = inst_32689);

(statearr_32821[(17)] = inst_32690);

return statearr_32821;
})();
var statearr_32822_32903 = state_32811__$1;
(statearr_32822_32903[(2)] = null);

(statearr_32822_32903[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32812 === (39))){
var state_32811__$1 = state_32811;
var statearr_32826_32904 = state_32811__$1;
(statearr_32826_32904[(2)] = null);

(statearr_32826_32904[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32812 === (4))){
var inst_32679 = (state_32811[(10)]);
var inst_32679__$1 = (state_32811[(2)]);
var inst_32680 = (inst_32679__$1 == null);
var state_32811__$1 = (function (){var statearr_32827 = state_32811;
(statearr_32827[(10)] = inst_32679__$1);

return statearr_32827;
})();
if(cljs.core.truth_(inst_32680)){
var statearr_32828_32905 = state_32811__$1;
(statearr_32828_32905[(1)] = (5));

} else {
var statearr_32829_32906 = state_32811__$1;
(statearr_32829_32906[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32812 === (15))){
var inst_32691 = (state_32811[(13)]);
var inst_32688 = (state_32811[(14)]);
var inst_32689 = (state_32811[(16)]);
var inst_32690 = (state_32811[(17)]);
var inst_32706 = (state_32811[(2)]);
var inst_32707 = (inst_32691 + (1));
var tmp32823 = inst_32688;
var tmp32824 = inst_32689;
var tmp32825 = inst_32690;
var inst_32688__$1 = tmp32823;
var inst_32689__$1 = tmp32824;
var inst_32690__$1 = tmp32825;
var inst_32691__$1 = inst_32707;
var state_32811__$1 = (function (){var statearr_32830 = state_32811;
(statearr_32830[(13)] = inst_32691__$1);

(statearr_32830[(14)] = inst_32688__$1);

(statearr_32830[(16)] = inst_32689__$1);

(statearr_32830[(18)] = inst_32706);

(statearr_32830[(17)] = inst_32690__$1);

return statearr_32830;
})();
var statearr_32831_32907 = state_32811__$1;
(statearr_32831_32907[(2)] = null);

(statearr_32831_32907[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32812 === (21))){
var inst_32733 = (state_32811[(2)]);
var state_32811__$1 = state_32811;
var statearr_32835_32908 = state_32811__$1;
(statearr_32835_32908[(2)] = inst_32733);

(statearr_32835_32908[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32812 === (31))){
var inst_32759 = (state_32811[(9)]);
var inst_32763 = done.call(null,null);
var inst_32764 = cljs.core.async.untap_STAR_.call(null,m,inst_32759);
var state_32811__$1 = (function (){var statearr_32836 = state_32811;
(statearr_32836[(19)] = inst_32763);

return statearr_32836;
})();
var statearr_32837_32909 = state_32811__$1;
(statearr_32837_32909[(2)] = inst_32764);

(statearr_32837_32909[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32812 === (32))){
var inst_32754 = (state_32811[(11)]);
var inst_32751 = (state_32811[(20)]);
var inst_32753 = (state_32811[(21)]);
var inst_32752 = (state_32811[(12)]);
var inst_32766 = (state_32811[(2)]);
var inst_32767 = (inst_32754 + (1));
var tmp32832 = inst_32751;
var tmp32833 = inst_32753;
var tmp32834 = inst_32752;
var inst_32751__$1 = tmp32832;
var inst_32752__$1 = tmp32834;
var inst_32753__$1 = tmp32833;
var inst_32754__$1 = inst_32767;
var state_32811__$1 = (function (){var statearr_32838 = state_32811;
(statearr_32838[(11)] = inst_32754__$1);

(statearr_32838[(20)] = inst_32751__$1);

(statearr_32838[(22)] = inst_32766);

(statearr_32838[(21)] = inst_32753__$1);

(statearr_32838[(12)] = inst_32752__$1);

return statearr_32838;
})();
var statearr_32839_32910 = state_32811__$1;
(statearr_32839_32910[(2)] = null);

(statearr_32839_32910[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32812 === (40))){
var inst_32779 = (state_32811[(23)]);
var inst_32783 = done.call(null,null);
var inst_32784 = cljs.core.async.untap_STAR_.call(null,m,inst_32779);
var state_32811__$1 = (function (){var statearr_32840 = state_32811;
(statearr_32840[(24)] = inst_32783);

return statearr_32840;
})();
var statearr_32841_32911 = state_32811__$1;
(statearr_32841_32911[(2)] = inst_32784);

(statearr_32841_32911[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32812 === (33))){
var inst_32770 = (state_32811[(25)]);
var inst_32772 = cljs.core.chunked_seq_QMARK_.call(null,inst_32770);
var state_32811__$1 = state_32811;
if(inst_32772){
var statearr_32842_32912 = state_32811__$1;
(statearr_32842_32912[(1)] = (36));

} else {
var statearr_32843_32913 = state_32811__$1;
(statearr_32843_32913[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32812 === (13))){
var inst_32700 = (state_32811[(26)]);
var inst_32703 = cljs.core.async.close_BANG_.call(null,inst_32700);
var state_32811__$1 = state_32811;
var statearr_32844_32914 = state_32811__$1;
(statearr_32844_32914[(2)] = inst_32703);

(statearr_32844_32914[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32812 === (22))){
var inst_32723 = (state_32811[(8)]);
var inst_32726 = cljs.core.async.close_BANG_.call(null,inst_32723);
var state_32811__$1 = state_32811;
var statearr_32845_32915 = state_32811__$1;
(statearr_32845_32915[(2)] = inst_32726);

(statearr_32845_32915[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32812 === (36))){
var inst_32770 = (state_32811[(25)]);
var inst_32774 = cljs.core.chunk_first.call(null,inst_32770);
var inst_32775 = cljs.core.chunk_rest.call(null,inst_32770);
var inst_32776 = cljs.core.count.call(null,inst_32774);
var inst_32751 = inst_32775;
var inst_32752 = inst_32774;
var inst_32753 = inst_32776;
var inst_32754 = (0);
var state_32811__$1 = (function (){var statearr_32846 = state_32811;
(statearr_32846[(11)] = inst_32754);

(statearr_32846[(20)] = inst_32751);

(statearr_32846[(21)] = inst_32753);

(statearr_32846[(12)] = inst_32752);

return statearr_32846;
})();
var statearr_32847_32916 = state_32811__$1;
(statearr_32847_32916[(2)] = null);

(statearr_32847_32916[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32812 === (41))){
var inst_32770 = (state_32811[(25)]);
var inst_32786 = (state_32811[(2)]);
var inst_32787 = cljs.core.next.call(null,inst_32770);
var inst_32751 = inst_32787;
var inst_32752 = null;
var inst_32753 = (0);
var inst_32754 = (0);
var state_32811__$1 = (function (){var statearr_32848 = state_32811;
(statearr_32848[(11)] = inst_32754);

(statearr_32848[(20)] = inst_32751);

(statearr_32848[(21)] = inst_32753);

(statearr_32848[(27)] = inst_32786);

(statearr_32848[(12)] = inst_32752);

return statearr_32848;
})();
var statearr_32849_32917 = state_32811__$1;
(statearr_32849_32917[(2)] = null);

(statearr_32849_32917[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32812 === (43))){
var state_32811__$1 = state_32811;
var statearr_32850_32918 = state_32811__$1;
(statearr_32850_32918[(2)] = null);

(statearr_32850_32918[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32812 === (29))){
var inst_32795 = (state_32811[(2)]);
var state_32811__$1 = state_32811;
var statearr_32851_32919 = state_32811__$1;
(statearr_32851_32919[(2)] = inst_32795);

(statearr_32851_32919[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32812 === (44))){
var inst_32804 = (state_32811[(2)]);
var state_32811__$1 = (function (){var statearr_32852 = state_32811;
(statearr_32852[(28)] = inst_32804);

return statearr_32852;
})();
var statearr_32853_32920 = state_32811__$1;
(statearr_32853_32920[(2)] = null);

(statearr_32853_32920[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32812 === (6))){
var inst_32743 = (state_32811[(29)]);
var inst_32742 = cljs.core.deref.call(null,cs);
var inst_32743__$1 = cljs.core.keys.call(null,inst_32742);
var inst_32744 = cljs.core.count.call(null,inst_32743__$1);
var inst_32745 = cljs.core.reset_BANG_.call(null,dctr,inst_32744);
var inst_32750 = cljs.core.seq.call(null,inst_32743__$1);
var inst_32751 = inst_32750;
var inst_32752 = null;
var inst_32753 = (0);
var inst_32754 = (0);
var state_32811__$1 = (function (){var statearr_32854 = state_32811;
(statearr_32854[(11)] = inst_32754);

(statearr_32854[(20)] = inst_32751);

(statearr_32854[(29)] = inst_32743__$1);

(statearr_32854[(21)] = inst_32753);

(statearr_32854[(30)] = inst_32745);

(statearr_32854[(12)] = inst_32752);

return statearr_32854;
})();
var statearr_32855_32921 = state_32811__$1;
(statearr_32855_32921[(2)] = null);

(statearr_32855_32921[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32812 === (28))){
var inst_32751 = (state_32811[(20)]);
var inst_32770 = (state_32811[(25)]);
var inst_32770__$1 = cljs.core.seq.call(null,inst_32751);
var state_32811__$1 = (function (){var statearr_32856 = state_32811;
(statearr_32856[(25)] = inst_32770__$1);

return statearr_32856;
})();
if(inst_32770__$1){
var statearr_32857_32922 = state_32811__$1;
(statearr_32857_32922[(1)] = (33));

} else {
var statearr_32858_32923 = state_32811__$1;
(statearr_32858_32923[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32812 === (25))){
var inst_32754 = (state_32811[(11)]);
var inst_32753 = (state_32811[(21)]);
var inst_32756 = (inst_32754 < inst_32753);
var inst_32757 = inst_32756;
var state_32811__$1 = state_32811;
if(cljs.core.truth_(inst_32757)){
var statearr_32859_32924 = state_32811__$1;
(statearr_32859_32924[(1)] = (27));

} else {
var statearr_32860_32925 = state_32811__$1;
(statearr_32860_32925[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32812 === (34))){
var state_32811__$1 = state_32811;
var statearr_32861_32926 = state_32811__$1;
(statearr_32861_32926[(2)] = null);

(statearr_32861_32926[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32812 === (17))){
var state_32811__$1 = state_32811;
var statearr_32862_32927 = state_32811__$1;
(statearr_32862_32927[(2)] = null);

(statearr_32862_32927[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32812 === (3))){
var inst_32809 = (state_32811[(2)]);
var state_32811__$1 = state_32811;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32811__$1,inst_32809);
} else {
if((state_val_32812 === (12))){
var inst_32738 = (state_32811[(2)]);
var state_32811__$1 = state_32811;
var statearr_32863_32928 = state_32811__$1;
(statearr_32863_32928[(2)] = inst_32738);

(statearr_32863_32928[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32812 === (2))){
var state_32811__$1 = state_32811;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32811__$1,(4),ch);
} else {
if((state_val_32812 === (23))){
var state_32811__$1 = state_32811;
var statearr_32864_32929 = state_32811__$1;
(statearr_32864_32929[(2)] = null);

(statearr_32864_32929[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32812 === (35))){
var inst_32793 = (state_32811[(2)]);
var state_32811__$1 = state_32811;
var statearr_32865_32930 = state_32811__$1;
(statearr_32865_32930[(2)] = inst_32793);

(statearr_32865_32930[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32812 === (19))){
var inst_32710 = (state_32811[(7)]);
var inst_32714 = cljs.core.chunk_first.call(null,inst_32710);
var inst_32715 = cljs.core.chunk_rest.call(null,inst_32710);
var inst_32716 = cljs.core.count.call(null,inst_32714);
var inst_32688 = inst_32715;
var inst_32689 = inst_32714;
var inst_32690 = inst_32716;
var inst_32691 = (0);
var state_32811__$1 = (function (){var statearr_32866 = state_32811;
(statearr_32866[(13)] = inst_32691);

(statearr_32866[(14)] = inst_32688);

(statearr_32866[(16)] = inst_32689);

(statearr_32866[(17)] = inst_32690);

return statearr_32866;
})();
var statearr_32867_32931 = state_32811__$1;
(statearr_32867_32931[(2)] = null);

(statearr_32867_32931[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32812 === (11))){
var inst_32688 = (state_32811[(14)]);
var inst_32710 = (state_32811[(7)]);
var inst_32710__$1 = cljs.core.seq.call(null,inst_32688);
var state_32811__$1 = (function (){var statearr_32868 = state_32811;
(statearr_32868[(7)] = inst_32710__$1);

return statearr_32868;
})();
if(inst_32710__$1){
var statearr_32869_32932 = state_32811__$1;
(statearr_32869_32932[(1)] = (16));

} else {
var statearr_32870_32933 = state_32811__$1;
(statearr_32870_32933[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32812 === (9))){
var inst_32740 = (state_32811[(2)]);
var state_32811__$1 = state_32811;
var statearr_32871_32934 = state_32811__$1;
(statearr_32871_32934[(2)] = inst_32740);

(statearr_32871_32934[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32812 === (5))){
var inst_32686 = cljs.core.deref.call(null,cs);
var inst_32687 = cljs.core.seq.call(null,inst_32686);
var inst_32688 = inst_32687;
var inst_32689 = null;
var inst_32690 = (0);
var inst_32691 = (0);
var state_32811__$1 = (function (){var statearr_32872 = state_32811;
(statearr_32872[(13)] = inst_32691);

(statearr_32872[(14)] = inst_32688);

(statearr_32872[(16)] = inst_32689);

(statearr_32872[(17)] = inst_32690);

return statearr_32872;
})();
var statearr_32873_32935 = state_32811__$1;
(statearr_32873_32935[(2)] = null);

(statearr_32873_32935[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32812 === (14))){
var state_32811__$1 = state_32811;
var statearr_32874_32936 = state_32811__$1;
(statearr_32874_32936[(2)] = null);

(statearr_32874_32936[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32812 === (45))){
var inst_32801 = (state_32811[(2)]);
var state_32811__$1 = state_32811;
var statearr_32875_32937 = state_32811__$1;
(statearr_32875_32937[(2)] = inst_32801);

(statearr_32875_32937[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32812 === (26))){
var inst_32743 = (state_32811[(29)]);
var inst_32797 = (state_32811[(2)]);
var inst_32798 = cljs.core.seq.call(null,inst_32743);
var state_32811__$1 = (function (){var statearr_32876 = state_32811;
(statearr_32876[(31)] = inst_32797);

return statearr_32876;
})();
if(inst_32798){
var statearr_32877_32938 = state_32811__$1;
(statearr_32877_32938[(1)] = (42));

} else {
var statearr_32878_32939 = state_32811__$1;
(statearr_32878_32939[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32812 === (16))){
var inst_32710 = (state_32811[(7)]);
var inst_32712 = cljs.core.chunked_seq_QMARK_.call(null,inst_32710);
var state_32811__$1 = state_32811;
if(inst_32712){
var statearr_32879_32940 = state_32811__$1;
(statearr_32879_32940[(1)] = (19));

} else {
var statearr_32880_32941 = state_32811__$1;
(statearr_32880_32941[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32812 === (38))){
var inst_32790 = (state_32811[(2)]);
var state_32811__$1 = state_32811;
var statearr_32881_32942 = state_32811__$1;
(statearr_32881_32942[(2)] = inst_32790);

(statearr_32881_32942[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32812 === (30))){
var state_32811__$1 = state_32811;
var statearr_32882_32943 = state_32811__$1;
(statearr_32882_32943[(2)] = null);

(statearr_32882_32943[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32812 === (10))){
var inst_32691 = (state_32811[(13)]);
var inst_32689 = (state_32811[(16)]);
var inst_32699 = cljs.core._nth.call(null,inst_32689,inst_32691);
var inst_32700 = cljs.core.nth.call(null,inst_32699,(0),null);
var inst_32701 = cljs.core.nth.call(null,inst_32699,(1),null);
var state_32811__$1 = (function (){var statearr_32883 = state_32811;
(statearr_32883[(26)] = inst_32700);

return statearr_32883;
})();
if(cljs.core.truth_(inst_32701)){
var statearr_32884_32944 = state_32811__$1;
(statearr_32884_32944[(1)] = (13));

} else {
var statearr_32885_32945 = state_32811__$1;
(statearr_32885_32945[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32812 === (18))){
var inst_32736 = (state_32811[(2)]);
var state_32811__$1 = state_32811;
var statearr_32886_32946 = state_32811__$1;
(statearr_32886_32946[(2)] = inst_32736);

(statearr_32886_32946[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32812 === (42))){
var state_32811__$1 = state_32811;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32811__$1,(45),dchan);
} else {
if((state_val_32812 === (37))){
var inst_32679 = (state_32811[(10)]);
var inst_32770 = (state_32811[(25)]);
var inst_32779 = (state_32811[(23)]);
var inst_32779__$1 = cljs.core.first.call(null,inst_32770);
var inst_32780 = cljs.core.async.put_BANG_.call(null,inst_32779__$1,inst_32679,done);
var state_32811__$1 = (function (){var statearr_32887 = state_32811;
(statearr_32887[(23)] = inst_32779__$1);

return statearr_32887;
})();
if(cljs.core.truth_(inst_32780)){
var statearr_32888_32947 = state_32811__$1;
(statearr_32888_32947[(1)] = (39));

} else {
var statearr_32889_32948 = state_32811__$1;
(statearr_32889_32948[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32812 === (8))){
var inst_32691 = (state_32811[(13)]);
var inst_32690 = (state_32811[(17)]);
var inst_32693 = (inst_32691 < inst_32690);
var inst_32694 = inst_32693;
var state_32811__$1 = state_32811;
if(cljs.core.truth_(inst_32694)){
var statearr_32890_32949 = state_32811__$1;
(statearr_32890_32949[(1)] = (10));

} else {
var statearr_32891_32950 = state_32811__$1;
(statearr_32891_32950[(1)] = (11));

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
});})(c__32091__auto___32896,cs,m,dchan,dctr,done))
;
return ((function (switch__32003__auto__,c__32091__auto___32896,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__32004__auto__ = null;
var cljs$core$async$mult_$_state_machine__32004__auto____0 = (function (){
var statearr_32892 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32892[(0)] = cljs$core$async$mult_$_state_machine__32004__auto__);

(statearr_32892[(1)] = (1));

return statearr_32892;
});
var cljs$core$async$mult_$_state_machine__32004__auto____1 = (function (state_32811){
while(true){
var ret_value__32005__auto__ = (function (){try{while(true){
var result__32006__auto__ = switch__32003__auto__.call(null,state_32811);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32006__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32006__auto__;
}
break;
}
}catch (e32893){if((e32893 instanceof Object)){
var ex__32007__auto__ = e32893;
var statearr_32894_32951 = state_32811;
(statearr_32894_32951[(5)] = ex__32007__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32811);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32893;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32005__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32952 = state_32811;
state_32811 = G__32952;
continue;
} else {
return ret_value__32005__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__32004__auto__ = function(state_32811){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__32004__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__32004__auto____1.call(this,state_32811);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__32004__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__32004__auto____0;
cljs$core$async$mult_$_state_machine__32004__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__32004__auto____1;
return cljs$core$async$mult_$_state_machine__32004__auto__;
})()
;})(switch__32003__auto__,c__32091__auto___32896,cs,m,dchan,dctr,done))
})();
var state__32093__auto__ = (function (){var statearr_32895 = f__32092__auto__.call(null);
(statearr_32895[(6)] = c__32091__auto___32896);

return statearr_32895;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32093__auto__);
});})(c__32091__auto___32896,cs,m,dchan,dctr,done))
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
var G__32954 = arguments.length;
switch (G__32954) {
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
var x__29006__auto__ = (((m == null))?null:m);
var m__29007__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__29006__auto__)]);
if(!((m__29007__auto__ == null))){
return m__29007__auto__.call(null,m,ch);
} else {
var m__29007__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__29007__auto____$1 == null))){
return m__29007__auto____$1.call(null,m,ch);
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
var x__29006__auto__ = (((m == null))?null:m);
var m__29007__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__29006__auto__)]);
if(!((m__29007__auto__ == null))){
return m__29007__auto__.call(null,m,ch);
} else {
var m__29007__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__29007__auto____$1 == null))){
return m__29007__auto____$1.call(null,m,ch);
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
var x__29006__auto__ = (((m == null))?null:m);
var m__29007__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__29006__auto__)]);
if(!((m__29007__auto__ == null))){
return m__29007__auto__.call(null,m);
} else {
var m__29007__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__29007__auto____$1 == null))){
return m__29007__auto____$1.call(null,m);
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
var x__29006__auto__ = (((m == null))?null:m);
var m__29007__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__29006__auto__)]);
if(!((m__29007__auto__ == null))){
return m__29007__auto__.call(null,m,state_map);
} else {
var m__29007__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__29007__auto____$1 == null))){
return m__29007__auto____$1.call(null,m,state_map);
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
var x__29006__auto__ = (((m == null))?null:m);
var m__29007__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__29006__auto__)]);
if(!((m__29007__auto__ == null))){
return m__29007__auto__.call(null,m,mode);
} else {
var m__29007__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__29007__auto____$1 == null))){
return m__29007__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__29499__auto__ = [];
var len__29492__auto___32966 = arguments.length;
var i__29493__auto___32967 = (0);
while(true){
if((i__29493__auto___32967 < len__29492__auto___32966)){
args__29499__auto__.push((arguments[i__29493__auto___32967]));

var G__32968 = (i__29493__auto___32967 + (1));
i__29493__auto___32967 = G__32968;
continue;
} else {
}
break;
}

var argseq__29500__auto__ = ((((3) < args__29499__auto__.length))?(new cljs.core.IndexedSeq(args__29499__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__29500__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__32960){
var map__32961 = p__32960;
var map__32961__$1 = ((((!((map__32961 == null)))?((((map__32961.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32961.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32961):map__32961);
var opts = map__32961__$1;
var statearr_32963_32969 = state;
(statearr_32963_32969[(1)] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__32961,map__32961__$1,opts){
return (function (val){
var statearr_32964_32970 = state;
(statearr_32964_32970[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__32961,map__32961__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_32965_32971 = state;
(statearr_32965_32971[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq32956){
var G__32957 = cljs.core.first.call(null,seq32956);
var seq32956__$1 = cljs.core.next.call(null,seq32956);
var G__32958 = cljs.core.first.call(null,seq32956__$1);
var seq32956__$2 = cljs.core.next.call(null,seq32956__$1);
var G__32959 = cljs.core.first.call(null,seq32956__$2);
var seq32956__$3 = cljs.core.next.call(null,seq32956__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__32957,G__32958,G__32959,seq32956__$3);
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
if(typeof cljs.core.async.t_cljs$core$async32972 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32972 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta32973){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta32973 = meta32973;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async32972.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_32974,meta32973__$1){
var self__ = this;
var _32974__$1 = this;
return (new cljs.core.async.t_cljs$core$async32972(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta32973__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32972.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_32974){
var self__ = this;
var _32974__$1 = this;
return self__.meta32973;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32972.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32972.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32972.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32972.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32972.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32972.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32972.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32972.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async32972.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta32973","meta32973",2052404165,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32972.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32972.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32972";

cljs.core.async.t_cljs$core$async32972.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__28948__auto__,writer__28949__auto__,opt__28950__auto__){
return cljs.core._write.call(null,writer__28949__auto__,"cljs.core.async/t_cljs$core$async32972");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async32972 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async32972(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta32973){
return (new cljs.core.async.t_cljs$core$async32972(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta32973));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async32972(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__32091__auto___33136 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32091__auto___33136,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__32092__auto__ = (function (){var switch__32003__auto__ = ((function (c__32091__auto___33136,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_33076){
var state_val_33077 = (state_33076[(1)]);
if((state_val_33077 === (7))){
var inst_32991 = (state_33076[(2)]);
var state_33076__$1 = state_33076;
var statearr_33078_33137 = state_33076__$1;
(statearr_33078_33137[(2)] = inst_32991);

(statearr_33078_33137[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33077 === (20))){
var inst_33003 = (state_33076[(7)]);
var state_33076__$1 = state_33076;
var statearr_33079_33138 = state_33076__$1;
(statearr_33079_33138[(2)] = inst_33003);

(statearr_33079_33138[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33077 === (27))){
var state_33076__$1 = state_33076;
var statearr_33080_33139 = state_33076__$1;
(statearr_33080_33139[(2)] = null);

(statearr_33080_33139[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33077 === (1))){
var inst_32978 = (state_33076[(8)]);
var inst_32978__$1 = calc_state.call(null);
var inst_32980 = (inst_32978__$1 == null);
var inst_32981 = cljs.core.not.call(null,inst_32980);
var state_33076__$1 = (function (){var statearr_33081 = state_33076;
(statearr_33081[(8)] = inst_32978__$1);

return statearr_33081;
})();
if(inst_32981){
var statearr_33082_33140 = state_33076__$1;
(statearr_33082_33140[(1)] = (2));

} else {
var statearr_33083_33141 = state_33076__$1;
(statearr_33083_33141[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33077 === (24))){
var inst_33036 = (state_33076[(9)]);
var inst_33050 = (state_33076[(10)]);
var inst_33027 = (state_33076[(11)]);
var inst_33050__$1 = inst_33027.call(null,inst_33036);
var state_33076__$1 = (function (){var statearr_33084 = state_33076;
(statearr_33084[(10)] = inst_33050__$1);

return statearr_33084;
})();
if(cljs.core.truth_(inst_33050__$1)){
var statearr_33085_33142 = state_33076__$1;
(statearr_33085_33142[(1)] = (29));

} else {
var statearr_33086_33143 = state_33076__$1;
(statearr_33086_33143[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33077 === (4))){
var inst_32994 = (state_33076[(2)]);
var state_33076__$1 = state_33076;
if(cljs.core.truth_(inst_32994)){
var statearr_33087_33144 = state_33076__$1;
(statearr_33087_33144[(1)] = (8));

} else {
var statearr_33088_33145 = state_33076__$1;
(statearr_33088_33145[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33077 === (15))){
var inst_33021 = (state_33076[(2)]);
var state_33076__$1 = state_33076;
if(cljs.core.truth_(inst_33021)){
var statearr_33089_33146 = state_33076__$1;
(statearr_33089_33146[(1)] = (19));

} else {
var statearr_33090_33147 = state_33076__$1;
(statearr_33090_33147[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33077 === (21))){
var inst_33026 = (state_33076[(12)]);
var inst_33026__$1 = (state_33076[(2)]);
var inst_33027 = cljs.core.get.call(null,inst_33026__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_33028 = cljs.core.get.call(null,inst_33026__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_33029 = cljs.core.get.call(null,inst_33026__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_33076__$1 = (function (){var statearr_33091 = state_33076;
(statearr_33091[(12)] = inst_33026__$1);

(statearr_33091[(13)] = inst_33028);

(statearr_33091[(11)] = inst_33027);

return statearr_33091;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_33076__$1,(22),inst_33029);
} else {
if((state_val_33077 === (31))){
var inst_33058 = (state_33076[(2)]);
var state_33076__$1 = state_33076;
if(cljs.core.truth_(inst_33058)){
var statearr_33092_33148 = state_33076__$1;
(statearr_33092_33148[(1)] = (32));

} else {
var statearr_33093_33149 = state_33076__$1;
(statearr_33093_33149[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33077 === (32))){
var inst_33035 = (state_33076[(14)]);
var state_33076__$1 = state_33076;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33076__$1,(35),out,inst_33035);
} else {
if((state_val_33077 === (33))){
var inst_33026 = (state_33076[(12)]);
var inst_33003 = inst_33026;
var state_33076__$1 = (function (){var statearr_33094 = state_33076;
(statearr_33094[(7)] = inst_33003);

return statearr_33094;
})();
var statearr_33095_33150 = state_33076__$1;
(statearr_33095_33150[(2)] = null);

(statearr_33095_33150[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33077 === (13))){
var inst_33003 = (state_33076[(7)]);
var inst_33010 = inst_33003.cljs$lang$protocol_mask$partition0$;
var inst_33011 = (inst_33010 & (64));
var inst_33012 = inst_33003.cljs$core$ISeq$;
var inst_33013 = (cljs.core.PROTOCOL_SENTINEL === inst_33012);
var inst_33014 = (inst_33011) || (inst_33013);
var state_33076__$1 = state_33076;
if(cljs.core.truth_(inst_33014)){
var statearr_33096_33151 = state_33076__$1;
(statearr_33096_33151[(1)] = (16));

} else {
var statearr_33097_33152 = state_33076__$1;
(statearr_33097_33152[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33077 === (22))){
var inst_33036 = (state_33076[(9)]);
var inst_33035 = (state_33076[(14)]);
var inst_33034 = (state_33076[(2)]);
var inst_33035__$1 = cljs.core.nth.call(null,inst_33034,(0),null);
var inst_33036__$1 = cljs.core.nth.call(null,inst_33034,(1),null);
var inst_33037 = (inst_33035__$1 == null);
var inst_33038 = cljs.core._EQ_.call(null,inst_33036__$1,change);
var inst_33039 = (inst_33037) || (inst_33038);
var state_33076__$1 = (function (){var statearr_33098 = state_33076;
(statearr_33098[(9)] = inst_33036__$1);

(statearr_33098[(14)] = inst_33035__$1);

return statearr_33098;
})();
if(cljs.core.truth_(inst_33039)){
var statearr_33099_33153 = state_33076__$1;
(statearr_33099_33153[(1)] = (23));

} else {
var statearr_33100_33154 = state_33076__$1;
(statearr_33100_33154[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33077 === (36))){
var inst_33026 = (state_33076[(12)]);
var inst_33003 = inst_33026;
var state_33076__$1 = (function (){var statearr_33101 = state_33076;
(statearr_33101[(7)] = inst_33003);

return statearr_33101;
})();
var statearr_33102_33155 = state_33076__$1;
(statearr_33102_33155[(2)] = null);

(statearr_33102_33155[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33077 === (29))){
var inst_33050 = (state_33076[(10)]);
var state_33076__$1 = state_33076;
var statearr_33103_33156 = state_33076__$1;
(statearr_33103_33156[(2)] = inst_33050);

(statearr_33103_33156[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33077 === (6))){
var state_33076__$1 = state_33076;
var statearr_33104_33157 = state_33076__$1;
(statearr_33104_33157[(2)] = false);

(statearr_33104_33157[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33077 === (28))){
var inst_33046 = (state_33076[(2)]);
var inst_33047 = calc_state.call(null);
var inst_33003 = inst_33047;
var state_33076__$1 = (function (){var statearr_33105 = state_33076;
(statearr_33105[(7)] = inst_33003);

(statearr_33105[(15)] = inst_33046);

return statearr_33105;
})();
var statearr_33106_33158 = state_33076__$1;
(statearr_33106_33158[(2)] = null);

(statearr_33106_33158[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33077 === (25))){
var inst_33072 = (state_33076[(2)]);
var state_33076__$1 = state_33076;
var statearr_33107_33159 = state_33076__$1;
(statearr_33107_33159[(2)] = inst_33072);

(statearr_33107_33159[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33077 === (34))){
var inst_33070 = (state_33076[(2)]);
var state_33076__$1 = state_33076;
var statearr_33108_33160 = state_33076__$1;
(statearr_33108_33160[(2)] = inst_33070);

(statearr_33108_33160[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33077 === (17))){
var state_33076__$1 = state_33076;
var statearr_33109_33161 = state_33076__$1;
(statearr_33109_33161[(2)] = false);

(statearr_33109_33161[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33077 === (3))){
var state_33076__$1 = state_33076;
var statearr_33110_33162 = state_33076__$1;
(statearr_33110_33162[(2)] = false);

(statearr_33110_33162[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33077 === (12))){
var inst_33074 = (state_33076[(2)]);
var state_33076__$1 = state_33076;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33076__$1,inst_33074);
} else {
if((state_val_33077 === (2))){
var inst_32978 = (state_33076[(8)]);
var inst_32983 = inst_32978.cljs$lang$protocol_mask$partition0$;
var inst_32984 = (inst_32983 & (64));
var inst_32985 = inst_32978.cljs$core$ISeq$;
var inst_32986 = (cljs.core.PROTOCOL_SENTINEL === inst_32985);
var inst_32987 = (inst_32984) || (inst_32986);
var state_33076__$1 = state_33076;
if(cljs.core.truth_(inst_32987)){
var statearr_33111_33163 = state_33076__$1;
(statearr_33111_33163[(1)] = (5));

} else {
var statearr_33112_33164 = state_33076__$1;
(statearr_33112_33164[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33077 === (23))){
var inst_33035 = (state_33076[(14)]);
var inst_33041 = (inst_33035 == null);
var state_33076__$1 = state_33076;
if(cljs.core.truth_(inst_33041)){
var statearr_33113_33165 = state_33076__$1;
(statearr_33113_33165[(1)] = (26));

} else {
var statearr_33114_33166 = state_33076__$1;
(statearr_33114_33166[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33077 === (35))){
var inst_33061 = (state_33076[(2)]);
var state_33076__$1 = state_33076;
if(cljs.core.truth_(inst_33061)){
var statearr_33115_33167 = state_33076__$1;
(statearr_33115_33167[(1)] = (36));

} else {
var statearr_33116_33168 = state_33076__$1;
(statearr_33116_33168[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33077 === (19))){
var inst_33003 = (state_33076[(7)]);
var inst_33023 = cljs.core.apply.call(null,cljs.core.hash_map,inst_33003);
var state_33076__$1 = state_33076;
var statearr_33117_33169 = state_33076__$1;
(statearr_33117_33169[(2)] = inst_33023);

(statearr_33117_33169[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33077 === (11))){
var inst_33003 = (state_33076[(7)]);
var inst_33007 = (inst_33003 == null);
var inst_33008 = cljs.core.not.call(null,inst_33007);
var state_33076__$1 = state_33076;
if(inst_33008){
var statearr_33118_33170 = state_33076__$1;
(statearr_33118_33170[(1)] = (13));

} else {
var statearr_33119_33171 = state_33076__$1;
(statearr_33119_33171[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33077 === (9))){
var inst_32978 = (state_33076[(8)]);
var state_33076__$1 = state_33076;
var statearr_33120_33172 = state_33076__$1;
(statearr_33120_33172[(2)] = inst_32978);

(statearr_33120_33172[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33077 === (5))){
var state_33076__$1 = state_33076;
var statearr_33121_33173 = state_33076__$1;
(statearr_33121_33173[(2)] = true);

(statearr_33121_33173[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33077 === (14))){
var state_33076__$1 = state_33076;
var statearr_33122_33174 = state_33076__$1;
(statearr_33122_33174[(2)] = false);

(statearr_33122_33174[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33077 === (26))){
var inst_33036 = (state_33076[(9)]);
var inst_33043 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_33036);
var state_33076__$1 = state_33076;
var statearr_33123_33175 = state_33076__$1;
(statearr_33123_33175[(2)] = inst_33043);

(statearr_33123_33175[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33077 === (16))){
var state_33076__$1 = state_33076;
var statearr_33124_33176 = state_33076__$1;
(statearr_33124_33176[(2)] = true);

(statearr_33124_33176[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33077 === (38))){
var inst_33066 = (state_33076[(2)]);
var state_33076__$1 = state_33076;
var statearr_33125_33177 = state_33076__$1;
(statearr_33125_33177[(2)] = inst_33066);

(statearr_33125_33177[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33077 === (30))){
var inst_33036 = (state_33076[(9)]);
var inst_33028 = (state_33076[(13)]);
var inst_33027 = (state_33076[(11)]);
var inst_33053 = cljs.core.empty_QMARK_.call(null,inst_33027);
var inst_33054 = inst_33028.call(null,inst_33036);
var inst_33055 = cljs.core.not.call(null,inst_33054);
var inst_33056 = (inst_33053) && (inst_33055);
var state_33076__$1 = state_33076;
var statearr_33126_33178 = state_33076__$1;
(statearr_33126_33178[(2)] = inst_33056);

(statearr_33126_33178[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33077 === (10))){
var inst_32978 = (state_33076[(8)]);
var inst_32999 = (state_33076[(2)]);
var inst_33000 = cljs.core.get.call(null,inst_32999,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_33001 = cljs.core.get.call(null,inst_32999,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_33002 = cljs.core.get.call(null,inst_32999,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_33003 = inst_32978;
var state_33076__$1 = (function (){var statearr_33127 = state_33076;
(statearr_33127[(7)] = inst_33003);

(statearr_33127[(16)] = inst_33002);

(statearr_33127[(17)] = inst_33001);

(statearr_33127[(18)] = inst_33000);

return statearr_33127;
})();
var statearr_33128_33179 = state_33076__$1;
(statearr_33128_33179[(2)] = null);

(statearr_33128_33179[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33077 === (18))){
var inst_33018 = (state_33076[(2)]);
var state_33076__$1 = state_33076;
var statearr_33129_33180 = state_33076__$1;
(statearr_33129_33180[(2)] = inst_33018);

(statearr_33129_33180[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33077 === (37))){
var state_33076__$1 = state_33076;
var statearr_33130_33181 = state_33076__$1;
(statearr_33130_33181[(2)] = null);

(statearr_33130_33181[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33077 === (8))){
var inst_32978 = (state_33076[(8)]);
var inst_32996 = cljs.core.apply.call(null,cljs.core.hash_map,inst_32978);
var state_33076__$1 = state_33076;
var statearr_33131_33182 = state_33076__$1;
(statearr_33131_33182[(2)] = inst_32996);

(statearr_33131_33182[(1)] = (10));


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
});})(c__32091__auto___33136,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__32003__auto__,c__32091__auto___33136,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__32004__auto__ = null;
var cljs$core$async$mix_$_state_machine__32004__auto____0 = (function (){
var statearr_33132 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33132[(0)] = cljs$core$async$mix_$_state_machine__32004__auto__);

(statearr_33132[(1)] = (1));

return statearr_33132;
});
var cljs$core$async$mix_$_state_machine__32004__auto____1 = (function (state_33076){
while(true){
var ret_value__32005__auto__ = (function (){try{while(true){
var result__32006__auto__ = switch__32003__auto__.call(null,state_33076);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32006__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32006__auto__;
}
break;
}
}catch (e33133){if((e33133 instanceof Object)){
var ex__32007__auto__ = e33133;
var statearr_33134_33183 = state_33076;
(statearr_33134_33183[(5)] = ex__32007__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33076);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33133;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32005__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33184 = state_33076;
state_33076 = G__33184;
continue;
} else {
return ret_value__32005__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__32004__auto__ = function(state_33076){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__32004__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__32004__auto____1.call(this,state_33076);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__32004__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__32004__auto____0;
cljs$core$async$mix_$_state_machine__32004__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__32004__auto____1;
return cljs$core$async$mix_$_state_machine__32004__auto__;
})()
;})(switch__32003__auto__,c__32091__auto___33136,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__32093__auto__ = (function (){var statearr_33135 = f__32092__auto__.call(null);
(statearr_33135[(6)] = c__32091__auto___33136);

return statearr_33135;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32093__auto__);
});})(c__32091__auto___33136,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var x__29006__auto__ = (((p == null))?null:p);
var m__29007__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__29006__auto__)]);
if(!((m__29007__auto__ == null))){
return m__29007__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__29007__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__29007__auto____$1 == null))){
return m__29007__auto____$1.call(null,p,v,ch,close_QMARK_);
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
var x__29006__auto__ = (((p == null))?null:p);
var m__29007__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__29006__auto__)]);
if(!((m__29007__auto__ == null))){
return m__29007__auto__.call(null,p,v,ch);
} else {
var m__29007__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__29007__auto____$1 == null))){
return m__29007__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__33186 = arguments.length;
switch (G__33186) {
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
var x__29006__auto__ = (((p == null))?null:p);
var m__29007__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__29006__auto__)]);
if(!((m__29007__auto__ == null))){
return m__29007__auto__.call(null,p);
} else {
var m__29007__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__29007__auto____$1 == null))){
return m__29007__auto____$1.call(null,p);
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
var x__29006__auto__ = (((p == null))?null:p);
var m__29007__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__29006__auto__)]);
if(!((m__29007__auto__ == null))){
return m__29007__auto__.call(null,p,v);
} else {
var m__29007__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__29007__auto____$1 == null))){
return m__29007__auto____$1.call(null,p,v);
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
var G__33190 = arguments.length;
switch (G__33190) {
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
var or__28323__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__28323__auto__)){
return or__28323__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__28323__auto__,mults){
return (function (p1__33188_SHARP_){
if(cljs.core.truth_(p1__33188_SHARP_.call(null,topic))){
return p1__33188_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__33188_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__28323__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async33191 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33191 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta33192){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta33192 = meta33192;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async33191.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_33193,meta33192__$1){
var self__ = this;
var _33193__$1 = this;
return (new cljs.core.async.t_cljs$core$async33191(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta33192__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async33191.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_33193){
var self__ = this;
var _33193__$1 = this;
return self__.meta33192;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async33191.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33191.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async33191.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33191.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async33191.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async33191.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async33191.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async33191.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta33192","meta33192",1025412495,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async33191.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33191.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33191";

cljs.core.async.t_cljs$core$async33191.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__28948__auto__,writer__28949__auto__,opt__28950__auto__){
return cljs.core._write.call(null,writer__28949__auto__,"cljs.core.async/t_cljs$core$async33191");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async33191 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async33191(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta33192){
return (new cljs.core.async.t_cljs$core$async33191(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta33192));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async33191(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__32091__auto___33311 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32091__auto___33311,mults,ensure_mult,p){
return (function (){
var f__32092__auto__ = (function (){var switch__32003__auto__ = ((function (c__32091__auto___33311,mults,ensure_mult,p){
return (function (state_33265){
var state_val_33266 = (state_33265[(1)]);
if((state_val_33266 === (7))){
var inst_33261 = (state_33265[(2)]);
var state_33265__$1 = state_33265;
var statearr_33267_33312 = state_33265__$1;
(statearr_33267_33312[(2)] = inst_33261);

(statearr_33267_33312[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33266 === (20))){
var state_33265__$1 = state_33265;
var statearr_33268_33313 = state_33265__$1;
(statearr_33268_33313[(2)] = null);

(statearr_33268_33313[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33266 === (1))){
var state_33265__$1 = state_33265;
var statearr_33269_33314 = state_33265__$1;
(statearr_33269_33314[(2)] = null);

(statearr_33269_33314[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33266 === (24))){
var inst_33244 = (state_33265[(7)]);
var inst_33253 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_33244);
var state_33265__$1 = state_33265;
var statearr_33270_33315 = state_33265__$1;
(statearr_33270_33315[(2)] = inst_33253);

(statearr_33270_33315[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33266 === (4))){
var inst_33196 = (state_33265[(8)]);
var inst_33196__$1 = (state_33265[(2)]);
var inst_33197 = (inst_33196__$1 == null);
var state_33265__$1 = (function (){var statearr_33271 = state_33265;
(statearr_33271[(8)] = inst_33196__$1);

return statearr_33271;
})();
if(cljs.core.truth_(inst_33197)){
var statearr_33272_33316 = state_33265__$1;
(statearr_33272_33316[(1)] = (5));

} else {
var statearr_33273_33317 = state_33265__$1;
(statearr_33273_33317[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33266 === (15))){
var inst_33238 = (state_33265[(2)]);
var state_33265__$1 = state_33265;
var statearr_33274_33318 = state_33265__$1;
(statearr_33274_33318[(2)] = inst_33238);

(statearr_33274_33318[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33266 === (21))){
var inst_33258 = (state_33265[(2)]);
var state_33265__$1 = (function (){var statearr_33275 = state_33265;
(statearr_33275[(9)] = inst_33258);

return statearr_33275;
})();
var statearr_33276_33319 = state_33265__$1;
(statearr_33276_33319[(2)] = null);

(statearr_33276_33319[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33266 === (13))){
var inst_33220 = (state_33265[(10)]);
var inst_33222 = cljs.core.chunked_seq_QMARK_.call(null,inst_33220);
var state_33265__$1 = state_33265;
if(inst_33222){
var statearr_33277_33320 = state_33265__$1;
(statearr_33277_33320[(1)] = (16));

} else {
var statearr_33278_33321 = state_33265__$1;
(statearr_33278_33321[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33266 === (22))){
var inst_33250 = (state_33265[(2)]);
var state_33265__$1 = state_33265;
if(cljs.core.truth_(inst_33250)){
var statearr_33279_33322 = state_33265__$1;
(statearr_33279_33322[(1)] = (23));

} else {
var statearr_33280_33323 = state_33265__$1;
(statearr_33280_33323[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33266 === (6))){
var inst_33196 = (state_33265[(8)]);
var inst_33246 = (state_33265[(11)]);
var inst_33244 = (state_33265[(7)]);
var inst_33244__$1 = topic_fn.call(null,inst_33196);
var inst_33245 = cljs.core.deref.call(null,mults);
var inst_33246__$1 = cljs.core.get.call(null,inst_33245,inst_33244__$1);
var state_33265__$1 = (function (){var statearr_33281 = state_33265;
(statearr_33281[(11)] = inst_33246__$1);

(statearr_33281[(7)] = inst_33244__$1);

return statearr_33281;
})();
if(cljs.core.truth_(inst_33246__$1)){
var statearr_33282_33324 = state_33265__$1;
(statearr_33282_33324[(1)] = (19));

} else {
var statearr_33283_33325 = state_33265__$1;
(statearr_33283_33325[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33266 === (25))){
var inst_33255 = (state_33265[(2)]);
var state_33265__$1 = state_33265;
var statearr_33284_33326 = state_33265__$1;
(statearr_33284_33326[(2)] = inst_33255);

(statearr_33284_33326[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33266 === (17))){
var inst_33220 = (state_33265[(10)]);
var inst_33229 = cljs.core.first.call(null,inst_33220);
var inst_33230 = cljs.core.async.muxch_STAR_.call(null,inst_33229);
var inst_33231 = cljs.core.async.close_BANG_.call(null,inst_33230);
var inst_33232 = cljs.core.next.call(null,inst_33220);
var inst_33206 = inst_33232;
var inst_33207 = null;
var inst_33208 = (0);
var inst_33209 = (0);
var state_33265__$1 = (function (){var statearr_33285 = state_33265;
(statearr_33285[(12)] = inst_33231);

(statearr_33285[(13)] = inst_33208);

(statearr_33285[(14)] = inst_33206);

(statearr_33285[(15)] = inst_33207);

(statearr_33285[(16)] = inst_33209);

return statearr_33285;
})();
var statearr_33286_33327 = state_33265__$1;
(statearr_33286_33327[(2)] = null);

(statearr_33286_33327[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33266 === (3))){
var inst_33263 = (state_33265[(2)]);
var state_33265__$1 = state_33265;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33265__$1,inst_33263);
} else {
if((state_val_33266 === (12))){
var inst_33240 = (state_33265[(2)]);
var state_33265__$1 = state_33265;
var statearr_33287_33328 = state_33265__$1;
(statearr_33287_33328[(2)] = inst_33240);

(statearr_33287_33328[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33266 === (2))){
var state_33265__$1 = state_33265;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33265__$1,(4),ch);
} else {
if((state_val_33266 === (23))){
var state_33265__$1 = state_33265;
var statearr_33288_33329 = state_33265__$1;
(statearr_33288_33329[(2)] = null);

(statearr_33288_33329[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33266 === (19))){
var inst_33196 = (state_33265[(8)]);
var inst_33246 = (state_33265[(11)]);
var inst_33248 = cljs.core.async.muxch_STAR_.call(null,inst_33246);
var state_33265__$1 = state_33265;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33265__$1,(22),inst_33248,inst_33196);
} else {
if((state_val_33266 === (11))){
var inst_33220 = (state_33265[(10)]);
var inst_33206 = (state_33265[(14)]);
var inst_33220__$1 = cljs.core.seq.call(null,inst_33206);
var state_33265__$1 = (function (){var statearr_33289 = state_33265;
(statearr_33289[(10)] = inst_33220__$1);

return statearr_33289;
})();
if(inst_33220__$1){
var statearr_33290_33330 = state_33265__$1;
(statearr_33290_33330[(1)] = (13));

} else {
var statearr_33291_33331 = state_33265__$1;
(statearr_33291_33331[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33266 === (9))){
var inst_33242 = (state_33265[(2)]);
var state_33265__$1 = state_33265;
var statearr_33292_33332 = state_33265__$1;
(statearr_33292_33332[(2)] = inst_33242);

(statearr_33292_33332[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33266 === (5))){
var inst_33203 = cljs.core.deref.call(null,mults);
var inst_33204 = cljs.core.vals.call(null,inst_33203);
var inst_33205 = cljs.core.seq.call(null,inst_33204);
var inst_33206 = inst_33205;
var inst_33207 = null;
var inst_33208 = (0);
var inst_33209 = (0);
var state_33265__$1 = (function (){var statearr_33293 = state_33265;
(statearr_33293[(13)] = inst_33208);

(statearr_33293[(14)] = inst_33206);

(statearr_33293[(15)] = inst_33207);

(statearr_33293[(16)] = inst_33209);

return statearr_33293;
})();
var statearr_33294_33333 = state_33265__$1;
(statearr_33294_33333[(2)] = null);

(statearr_33294_33333[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33266 === (14))){
var state_33265__$1 = state_33265;
var statearr_33298_33334 = state_33265__$1;
(statearr_33298_33334[(2)] = null);

(statearr_33298_33334[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33266 === (16))){
var inst_33220 = (state_33265[(10)]);
var inst_33224 = cljs.core.chunk_first.call(null,inst_33220);
var inst_33225 = cljs.core.chunk_rest.call(null,inst_33220);
var inst_33226 = cljs.core.count.call(null,inst_33224);
var inst_33206 = inst_33225;
var inst_33207 = inst_33224;
var inst_33208 = inst_33226;
var inst_33209 = (0);
var state_33265__$1 = (function (){var statearr_33299 = state_33265;
(statearr_33299[(13)] = inst_33208);

(statearr_33299[(14)] = inst_33206);

(statearr_33299[(15)] = inst_33207);

(statearr_33299[(16)] = inst_33209);

return statearr_33299;
})();
var statearr_33300_33335 = state_33265__$1;
(statearr_33300_33335[(2)] = null);

(statearr_33300_33335[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33266 === (10))){
var inst_33208 = (state_33265[(13)]);
var inst_33206 = (state_33265[(14)]);
var inst_33207 = (state_33265[(15)]);
var inst_33209 = (state_33265[(16)]);
var inst_33214 = cljs.core._nth.call(null,inst_33207,inst_33209);
var inst_33215 = cljs.core.async.muxch_STAR_.call(null,inst_33214);
var inst_33216 = cljs.core.async.close_BANG_.call(null,inst_33215);
var inst_33217 = (inst_33209 + (1));
var tmp33295 = inst_33208;
var tmp33296 = inst_33206;
var tmp33297 = inst_33207;
var inst_33206__$1 = tmp33296;
var inst_33207__$1 = tmp33297;
var inst_33208__$1 = tmp33295;
var inst_33209__$1 = inst_33217;
var state_33265__$1 = (function (){var statearr_33301 = state_33265;
(statearr_33301[(17)] = inst_33216);

(statearr_33301[(13)] = inst_33208__$1);

(statearr_33301[(14)] = inst_33206__$1);

(statearr_33301[(15)] = inst_33207__$1);

(statearr_33301[(16)] = inst_33209__$1);

return statearr_33301;
})();
var statearr_33302_33336 = state_33265__$1;
(statearr_33302_33336[(2)] = null);

(statearr_33302_33336[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33266 === (18))){
var inst_33235 = (state_33265[(2)]);
var state_33265__$1 = state_33265;
var statearr_33303_33337 = state_33265__$1;
(statearr_33303_33337[(2)] = inst_33235);

(statearr_33303_33337[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33266 === (8))){
var inst_33208 = (state_33265[(13)]);
var inst_33209 = (state_33265[(16)]);
var inst_33211 = (inst_33209 < inst_33208);
var inst_33212 = inst_33211;
var state_33265__$1 = state_33265;
if(cljs.core.truth_(inst_33212)){
var statearr_33304_33338 = state_33265__$1;
(statearr_33304_33338[(1)] = (10));

} else {
var statearr_33305_33339 = state_33265__$1;
(statearr_33305_33339[(1)] = (11));

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
});})(c__32091__auto___33311,mults,ensure_mult,p))
;
return ((function (switch__32003__auto__,c__32091__auto___33311,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__32004__auto__ = null;
var cljs$core$async$state_machine__32004__auto____0 = (function (){
var statearr_33306 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33306[(0)] = cljs$core$async$state_machine__32004__auto__);

(statearr_33306[(1)] = (1));

return statearr_33306;
});
var cljs$core$async$state_machine__32004__auto____1 = (function (state_33265){
while(true){
var ret_value__32005__auto__ = (function (){try{while(true){
var result__32006__auto__ = switch__32003__auto__.call(null,state_33265);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32006__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32006__auto__;
}
break;
}
}catch (e33307){if((e33307 instanceof Object)){
var ex__32007__auto__ = e33307;
var statearr_33308_33340 = state_33265;
(statearr_33308_33340[(5)] = ex__32007__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33265);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33307;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32005__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33341 = state_33265;
state_33265 = G__33341;
continue;
} else {
return ret_value__32005__auto__;
}
break;
}
});
cljs$core$async$state_machine__32004__auto__ = function(state_33265){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32004__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32004__auto____1.call(this,state_33265);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__32004__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32004__auto____0;
cljs$core$async$state_machine__32004__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32004__auto____1;
return cljs$core$async$state_machine__32004__auto__;
})()
;})(switch__32003__auto__,c__32091__auto___33311,mults,ensure_mult,p))
})();
var state__32093__auto__ = (function (){var statearr_33309 = f__32092__auto__.call(null);
(statearr_33309[(6)] = c__32091__auto___33311);

return statearr_33309;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32093__auto__);
});})(c__32091__auto___33311,mults,ensure_mult,p))
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
var G__33343 = arguments.length;
switch (G__33343) {
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
var G__33346 = arguments.length;
switch (G__33346) {
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
var G__33349 = arguments.length;
switch (G__33349) {
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
var c__32091__auto___33416 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32091__auto___33416,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__32092__auto__ = (function (){var switch__32003__auto__ = ((function (c__32091__auto___33416,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_33388){
var state_val_33389 = (state_33388[(1)]);
if((state_val_33389 === (7))){
var state_33388__$1 = state_33388;
var statearr_33390_33417 = state_33388__$1;
(statearr_33390_33417[(2)] = null);

(statearr_33390_33417[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33389 === (1))){
var state_33388__$1 = state_33388;
var statearr_33391_33418 = state_33388__$1;
(statearr_33391_33418[(2)] = null);

(statearr_33391_33418[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33389 === (4))){
var inst_33352 = (state_33388[(7)]);
var inst_33354 = (inst_33352 < cnt);
var state_33388__$1 = state_33388;
if(cljs.core.truth_(inst_33354)){
var statearr_33392_33419 = state_33388__$1;
(statearr_33392_33419[(1)] = (6));

} else {
var statearr_33393_33420 = state_33388__$1;
(statearr_33393_33420[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33389 === (15))){
var inst_33384 = (state_33388[(2)]);
var state_33388__$1 = state_33388;
var statearr_33394_33421 = state_33388__$1;
(statearr_33394_33421[(2)] = inst_33384);

(statearr_33394_33421[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33389 === (13))){
var inst_33377 = cljs.core.async.close_BANG_.call(null,out);
var state_33388__$1 = state_33388;
var statearr_33395_33422 = state_33388__$1;
(statearr_33395_33422[(2)] = inst_33377);

(statearr_33395_33422[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33389 === (6))){
var state_33388__$1 = state_33388;
var statearr_33396_33423 = state_33388__$1;
(statearr_33396_33423[(2)] = null);

(statearr_33396_33423[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33389 === (3))){
var inst_33386 = (state_33388[(2)]);
var state_33388__$1 = state_33388;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33388__$1,inst_33386);
} else {
if((state_val_33389 === (12))){
var inst_33374 = (state_33388[(8)]);
var inst_33374__$1 = (state_33388[(2)]);
var inst_33375 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_33374__$1);
var state_33388__$1 = (function (){var statearr_33397 = state_33388;
(statearr_33397[(8)] = inst_33374__$1);

return statearr_33397;
})();
if(cljs.core.truth_(inst_33375)){
var statearr_33398_33424 = state_33388__$1;
(statearr_33398_33424[(1)] = (13));

} else {
var statearr_33399_33425 = state_33388__$1;
(statearr_33399_33425[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33389 === (2))){
var inst_33351 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_33352 = (0);
var state_33388__$1 = (function (){var statearr_33400 = state_33388;
(statearr_33400[(9)] = inst_33351);

(statearr_33400[(7)] = inst_33352);

return statearr_33400;
})();
var statearr_33401_33426 = state_33388__$1;
(statearr_33401_33426[(2)] = null);

(statearr_33401_33426[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33389 === (11))){
var inst_33352 = (state_33388[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_33388,(10),Object,null,(9));
var inst_33361 = chs__$1.call(null,inst_33352);
var inst_33362 = done.call(null,inst_33352);
var inst_33363 = cljs.core.async.take_BANG_.call(null,inst_33361,inst_33362);
var state_33388__$1 = state_33388;
var statearr_33402_33427 = state_33388__$1;
(statearr_33402_33427[(2)] = inst_33363);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33388__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33389 === (9))){
var inst_33352 = (state_33388[(7)]);
var inst_33365 = (state_33388[(2)]);
var inst_33366 = (inst_33352 + (1));
var inst_33352__$1 = inst_33366;
var state_33388__$1 = (function (){var statearr_33403 = state_33388;
(statearr_33403[(7)] = inst_33352__$1);

(statearr_33403[(10)] = inst_33365);

return statearr_33403;
})();
var statearr_33404_33428 = state_33388__$1;
(statearr_33404_33428[(2)] = null);

(statearr_33404_33428[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33389 === (5))){
var inst_33372 = (state_33388[(2)]);
var state_33388__$1 = (function (){var statearr_33405 = state_33388;
(statearr_33405[(11)] = inst_33372);

return statearr_33405;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33388__$1,(12),dchan);
} else {
if((state_val_33389 === (14))){
var inst_33374 = (state_33388[(8)]);
var inst_33379 = cljs.core.apply.call(null,f,inst_33374);
var state_33388__$1 = state_33388;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33388__$1,(16),out,inst_33379);
} else {
if((state_val_33389 === (16))){
var inst_33381 = (state_33388[(2)]);
var state_33388__$1 = (function (){var statearr_33406 = state_33388;
(statearr_33406[(12)] = inst_33381);

return statearr_33406;
})();
var statearr_33407_33429 = state_33388__$1;
(statearr_33407_33429[(2)] = null);

(statearr_33407_33429[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33389 === (10))){
var inst_33356 = (state_33388[(2)]);
var inst_33357 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_33388__$1 = (function (){var statearr_33408 = state_33388;
(statearr_33408[(13)] = inst_33356);

return statearr_33408;
})();
var statearr_33409_33430 = state_33388__$1;
(statearr_33409_33430[(2)] = inst_33357);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33388__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33389 === (8))){
var inst_33370 = (state_33388[(2)]);
var state_33388__$1 = state_33388;
var statearr_33410_33431 = state_33388__$1;
(statearr_33410_33431[(2)] = inst_33370);

(statearr_33410_33431[(1)] = (5));


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
});})(c__32091__auto___33416,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__32003__auto__,c__32091__auto___33416,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__32004__auto__ = null;
var cljs$core$async$state_machine__32004__auto____0 = (function (){
var statearr_33411 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33411[(0)] = cljs$core$async$state_machine__32004__auto__);

(statearr_33411[(1)] = (1));

return statearr_33411;
});
var cljs$core$async$state_machine__32004__auto____1 = (function (state_33388){
while(true){
var ret_value__32005__auto__ = (function (){try{while(true){
var result__32006__auto__ = switch__32003__auto__.call(null,state_33388);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32006__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32006__auto__;
}
break;
}
}catch (e33412){if((e33412 instanceof Object)){
var ex__32007__auto__ = e33412;
var statearr_33413_33432 = state_33388;
(statearr_33413_33432[(5)] = ex__32007__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33388);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33412;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32005__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33433 = state_33388;
state_33388 = G__33433;
continue;
} else {
return ret_value__32005__auto__;
}
break;
}
});
cljs$core$async$state_machine__32004__auto__ = function(state_33388){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32004__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32004__auto____1.call(this,state_33388);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__32004__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32004__auto____0;
cljs$core$async$state_machine__32004__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32004__auto____1;
return cljs$core$async$state_machine__32004__auto__;
})()
;})(switch__32003__auto__,c__32091__auto___33416,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__32093__auto__ = (function (){var statearr_33414 = f__32092__auto__.call(null);
(statearr_33414[(6)] = c__32091__auto___33416);

return statearr_33414;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32093__auto__);
});})(c__32091__auto___33416,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__33436 = arguments.length;
switch (G__33436) {
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
var c__32091__auto___33490 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32091__auto___33490,out){
return (function (){
var f__32092__auto__ = (function (){var switch__32003__auto__ = ((function (c__32091__auto___33490,out){
return (function (state_33468){
var state_val_33469 = (state_33468[(1)]);
if((state_val_33469 === (7))){
var inst_33448 = (state_33468[(7)]);
var inst_33447 = (state_33468[(8)]);
var inst_33447__$1 = (state_33468[(2)]);
var inst_33448__$1 = cljs.core.nth.call(null,inst_33447__$1,(0),null);
var inst_33449 = cljs.core.nth.call(null,inst_33447__$1,(1),null);
var inst_33450 = (inst_33448__$1 == null);
var state_33468__$1 = (function (){var statearr_33470 = state_33468;
(statearr_33470[(9)] = inst_33449);

(statearr_33470[(7)] = inst_33448__$1);

(statearr_33470[(8)] = inst_33447__$1);

return statearr_33470;
})();
if(cljs.core.truth_(inst_33450)){
var statearr_33471_33491 = state_33468__$1;
(statearr_33471_33491[(1)] = (8));

} else {
var statearr_33472_33492 = state_33468__$1;
(statearr_33472_33492[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33469 === (1))){
var inst_33437 = cljs.core.vec.call(null,chs);
var inst_33438 = inst_33437;
var state_33468__$1 = (function (){var statearr_33473 = state_33468;
(statearr_33473[(10)] = inst_33438);

return statearr_33473;
})();
var statearr_33474_33493 = state_33468__$1;
(statearr_33474_33493[(2)] = null);

(statearr_33474_33493[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33469 === (4))){
var inst_33438 = (state_33468[(10)]);
var state_33468__$1 = state_33468;
return cljs.core.async.ioc_alts_BANG_.call(null,state_33468__$1,(7),inst_33438);
} else {
if((state_val_33469 === (6))){
var inst_33464 = (state_33468[(2)]);
var state_33468__$1 = state_33468;
var statearr_33475_33494 = state_33468__$1;
(statearr_33475_33494[(2)] = inst_33464);

(statearr_33475_33494[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33469 === (3))){
var inst_33466 = (state_33468[(2)]);
var state_33468__$1 = state_33468;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33468__$1,inst_33466);
} else {
if((state_val_33469 === (2))){
var inst_33438 = (state_33468[(10)]);
var inst_33440 = cljs.core.count.call(null,inst_33438);
var inst_33441 = (inst_33440 > (0));
var state_33468__$1 = state_33468;
if(cljs.core.truth_(inst_33441)){
var statearr_33477_33495 = state_33468__$1;
(statearr_33477_33495[(1)] = (4));

} else {
var statearr_33478_33496 = state_33468__$1;
(statearr_33478_33496[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33469 === (11))){
var inst_33438 = (state_33468[(10)]);
var inst_33457 = (state_33468[(2)]);
var tmp33476 = inst_33438;
var inst_33438__$1 = tmp33476;
var state_33468__$1 = (function (){var statearr_33479 = state_33468;
(statearr_33479[(11)] = inst_33457);

(statearr_33479[(10)] = inst_33438__$1);

return statearr_33479;
})();
var statearr_33480_33497 = state_33468__$1;
(statearr_33480_33497[(2)] = null);

(statearr_33480_33497[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33469 === (9))){
var inst_33448 = (state_33468[(7)]);
var state_33468__$1 = state_33468;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33468__$1,(11),out,inst_33448);
} else {
if((state_val_33469 === (5))){
var inst_33462 = cljs.core.async.close_BANG_.call(null,out);
var state_33468__$1 = state_33468;
var statearr_33481_33498 = state_33468__$1;
(statearr_33481_33498[(2)] = inst_33462);

(statearr_33481_33498[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33469 === (10))){
var inst_33460 = (state_33468[(2)]);
var state_33468__$1 = state_33468;
var statearr_33482_33499 = state_33468__$1;
(statearr_33482_33499[(2)] = inst_33460);

(statearr_33482_33499[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33469 === (8))){
var inst_33449 = (state_33468[(9)]);
var inst_33448 = (state_33468[(7)]);
var inst_33447 = (state_33468[(8)]);
var inst_33438 = (state_33468[(10)]);
var inst_33452 = (function (){var cs = inst_33438;
var vec__33443 = inst_33447;
var v = inst_33448;
var c = inst_33449;
return ((function (cs,vec__33443,v,c,inst_33449,inst_33448,inst_33447,inst_33438,state_val_33469,c__32091__auto___33490,out){
return (function (p1__33434_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__33434_SHARP_);
});
;})(cs,vec__33443,v,c,inst_33449,inst_33448,inst_33447,inst_33438,state_val_33469,c__32091__auto___33490,out))
})();
var inst_33453 = cljs.core.filterv.call(null,inst_33452,inst_33438);
var inst_33438__$1 = inst_33453;
var state_33468__$1 = (function (){var statearr_33483 = state_33468;
(statearr_33483[(10)] = inst_33438__$1);

return statearr_33483;
})();
var statearr_33484_33500 = state_33468__$1;
(statearr_33484_33500[(2)] = null);

(statearr_33484_33500[(1)] = (2));


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
});})(c__32091__auto___33490,out))
;
return ((function (switch__32003__auto__,c__32091__auto___33490,out){
return (function() {
var cljs$core$async$state_machine__32004__auto__ = null;
var cljs$core$async$state_machine__32004__auto____0 = (function (){
var statearr_33485 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33485[(0)] = cljs$core$async$state_machine__32004__auto__);

(statearr_33485[(1)] = (1));

return statearr_33485;
});
var cljs$core$async$state_machine__32004__auto____1 = (function (state_33468){
while(true){
var ret_value__32005__auto__ = (function (){try{while(true){
var result__32006__auto__ = switch__32003__auto__.call(null,state_33468);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32006__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32006__auto__;
}
break;
}
}catch (e33486){if((e33486 instanceof Object)){
var ex__32007__auto__ = e33486;
var statearr_33487_33501 = state_33468;
(statearr_33487_33501[(5)] = ex__32007__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33468);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33486;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32005__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33502 = state_33468;
state_33468 = G__33502;
continue;
} else {
return ret_value__32005__auto__;
}
break;
}
});
cljs$core$async$state_machine__32004__auto__ = function(state_33468){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32004__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32004__auto____1.call(this,state_33468);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__32004__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32004__auto____0;
cljs$core$async$state_machine__32004__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32004__auto____1;
return cljs$core$async$state_machine__32004__auto__;
})()
;})(switch__32003__auto__,c__32091__auto___33490,out))
})();
var state__32093__auto__ = (function (){var statearr_33488 = f__32092__auto__.call(null);
(statearr_33488[(6)] = c__32091__auto___33490);

return statearr_33488;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32093__auto__);
});})(c__32091__auto___33490,out))
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
var G__33504 = arguments.length;
switch (G__33504) {
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
var c__32091__auto___33549 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32091__auto___33549,out){
return (function (){
var f__32092__auto__ = (function (){var switch__32003__auto__ = ((function (c__32091__auto___33549,out){
return (function (state_33528){
var state_val_33529 = (state_33528[(1)]);
if((state_val_33529 === (7))){
var inst_33510 = (state_33528[(7)]);
var inst_33510__$1 = (state_33528[(2)]);
var inst_33511 = (inst_33510__$1 == null);
var inst_33512 = cljs.core.not.call(null,inst_33511);
var state_33528__$1 = (function (){var statearr_33530 = state_33528;
(statearr_33530[(7)] = inst_33510__$1);

return statearr_33530;
})();
if(inst_33512){
var statearr_33531_33550 = state_33528__$1;
(statearr_33531_33550[(1)] = (8));

} else {
var statearr_33532_33551 = state_33528__$1;
(statearr_33532_33551[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33529 === (1))){
var inst_33505 = (0);
var state_33528__$1 = (function (){var statearr_33533 = state_33528;
(statearr_33533[(8)] = inst_33505);

return statearr_33533;
})();
var statearr_33534_33552 = state_33528__$1;
(statearr_33534_33552[(2)] = null);

(statearr_33534_33552[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33529 === (4))){
var state_33528__$1 = state_33528;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33528__$1,(7),ch);
} else {
if((state_val_33529 === (6))){
var inst_33523 = (state_33528[(2)]);
var state_33528__$1 = state_33528;
var statearr_33535_33553 = state_33528__$1;
(statearr_33535_33553[(2)] = inst_33523);

(statearr_33535_33553[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33529 === (3))){
var inst_33525 = (state_33528[(2)]);
var inst_33526 = cljs.core.async.close_BANG_.call(null,out);
var state_33528__$1 = (function (){var statearr_33536 = state_33528;
(statearr_33536[(9)] = inst_33525);

return statearr_33536;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33528__$1,inst_33526);
} else {
if((state_val_33529 === (2))){
var inst_33505 = (state_33528[(8)]);
var inst_33507 = (inst_33505 < n);
var state_33528__$1 = state_33528;
if(cljs.core.truth_(inst_33507)){
var statearr_33537_33554 = state_33528__$1;
(statearr_33537_33554[(1)] = (4));

} else {
var statearr_33538_33555 = state_33528__$1;
(statearr_33538_33555[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33529 === (11))){
var inst_33505 = (state_33528[(8)]);
var inst_33515 = (state_33528[(2)]);
var inst_33516 = (inst_33505 + (1));
var inst_33505__$1 = inst_33516;
var state_33528__$1 = (function (){var statearr_33539 = state_33528;
(statearr_33539[(10)] = inst_33515);

(statearr_33539[(8)] = inst_33505__$1);

return statearr_33539;
})();
var statearr_33540_33556 = state_33528__$1;
(statearr_33540_33556[(2)] = null);

(statearr_33540_33556[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33529 === (9))){
var state_33528__$1 = state_33528;
var statearr_33541_33557 = state_33528__$1;
(statearr_33541_33557[(2)] = null);

(statearr_33541_33557[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33529 === (5))){
var state_33528__$1 = state_33528;
var statearr_33542_33558 = state_33528__$1;
(statearr_33542_33558[(2)] = null);

(statearr_33542_33558[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33529 === (10))){
var inst_33520 = (state_33528[(2)]);
var state_33528__$1 = state_33528;
var statearr_33543_33559 = state_33528__$1;
(statearr_33543_33559[(2)] = inst_33520);

(statearr_33543_33559[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33529 === (8))){
var inst_33510 = (state_33528[(7)]);
var state_33528__$1 = state_33528;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33528__$1,(11),out,inst_33510);
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
});})(c__32091__auto___33549,out))
;
return ((function (switch__32003__auto__,c__32091__auto___33549,out){
return (function() {
var cljs$core$async$state_machine__32004__auto__ = null;
var cljs$core$async$state_machine__32004__auto____0 = (function (){
var statearr_33544 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_33544[(0)] = cljs$core$async$state_machine__32004__auto__);

(statearr_33544[(1)] = (1));

return statearr_33544;
});
var cljs$core$async$state_machine__32004__auto____1 = (function (state_33528){
while(true){
var ret_value__32005__auto__ = (function (){try{while(true){
var result__32006__auto__ = switch__32003__auto__.call(null,state_33528);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32006__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32006__auto__;
}
break;
}
}catch (e33545){if((e33545 instanceof Object)){
var ex__32007__auto__ = e33545;
var statearr_33546_33560 = state_33528;
(statearr_33546_33560[(5)] = ex__32007__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33528);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33545;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32005__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33561 = state_33528;
state_33528 = G__33561;
continue;
} else {
return ret_value__32005__auto__;
}
break;
}
});
cljs$core$async$state_machine__32004__auto__ = function(state_33528){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32004__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32004__auto____1.call(this,state_33528);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__32004__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32004__auto____0;
cljs$core$async$state_machine__32004__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32004__auto____1;
return cljs$core$async$state_machine__32004__auto__;
})()
;})(switch__32003__auto__,c__32091__auto___33549,out))
})();
var state__32093__auto__ = (function (){var statearr_33547 = f__32092__auto__.call(null);
(statearr_33547[(6)] = c__32091__auto___33549);

return statearr_33547;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32093__auto__);
});})(c__32091__auto___33549,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async33563 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33563 = (function (f,ch,meta33564){
this.f = f;
this.ch = ch;
this.meta33564 = meta33564;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async33563.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33565,meta33564__$1){
var self__ = this;
var _33565__$1 = this;
return (new cljs.core.async.t_cljs$core$async33563(self__.f,self__.ch,meta33564__$1));
});

cljs.core.async.t_cljs$core$async33563.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33565){
var self__ = this;
var _33565__$1 = this;
return self__.meta33564;
});

cljs.core.async.t_cljs$core$async33563.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33563.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async33563.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async33563.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33563.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async33566 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33566 = (function (f,ch,meta33564,_,fn1,meta33567){
this.f = f;
this.ch = ch;
this.meta33564 = meta33564;
this._ = _;
this.fn1 = fn1;
this.meta33567 = meta33567;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async33566.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_33568,meta33567__$1){
var self__ = this;
var _33568__$1 = this;
return (new cljs.core.async.t_cljs$core$async33566(self__.f,self__.ch,self__.meta33564,self__._,self__.fn1,meta33567__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async33566.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_33568){
var self__ = this;
var _33568__$1 = this;
return self__.meta33567;
});})(___$1))
;

cljs.core.async.t_cljs$core$async33566.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33566.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async33566.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async33566.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__33562_SHARP_){
return f1.call(null,(((p1__33562_SHARP_ == null))?null:self__.f.call(null,p1__33562_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async33566.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta33564","meta33564",281542893,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async33563","cljs.core.async/t_cljs$core$async33563",-516718843,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta33567","meta33567",1420854378,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async33566.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33566.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33566";

cljs.core.async.t_cljs$core$async33566.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__28948__auto__,writer__28949__auto__,opt__28950__auto__){
return cljs.core._write.call(null,writer__28949__auto__,"cljs.core.async/t_cljs$core$async33566");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async33566 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async33566(f__$1,ch__$1,meta33564__$1,___$2,fn1__$1,meta33567){
return (new cljs.core.async.t_cljs$core$async33566(f__$1,ch__$1,meta33564__$1,___$2,fn1__$1,meta33567));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async33566(self__.f,self__.ch,self__.meta33564,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__28311__auto__ = ret;
if(cljs.core.truth_(and__28311__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__28311__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async33563.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33563.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async33563.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta33564","meta33564",281542893,null)], null);
});

cljs.core.async.t_cljs$core$async33563.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33563.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33563";

cljs.core.async.t_cljs$core$async33563.cljs$lang$ctorPrWriter = (function (this__28948__auto__,writer__28949__auto__,opt__28950__auto__){
return cljs.core._write.call(null,writer__28949__auto__,"cljs.core.async/t_cljs$core$async33563");
});

cljs.core.async.__GT_t_cljs$core$async33563 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async33563(f__$1,ch__$1,meta33564){
return (new cljs.core.async.t_cljs$core$async33563(f__$1,ch__$1,meta33564));
});

}

return (new cljs.core.async.t_cljs$core$async33563(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async33569 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33569 = (function (f,ch,meta33570){
this.f = f;
this.ch = ch;
this.meta33570 = meta33570;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async33569.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33571,meta33570__$1){
var self__ = this;
var _33571__$1 = this;
return (new cljs.core.async.t_cljs$core$async33569(self__.f,self__.ch,meta33570__$1));
});

cljs.core.async.t_cljs$core$async33569.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33571){
var self__ = this;
var _33571__$1 = this;
return self__.meta33570;
});

cljs.core.async.t_cljs$core$async33569.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33569.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async33569.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33569.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async33569.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33569.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async33569.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta33570","meta33570",-1683819759,null)], null);
});

cljs.core.async.t_cljs$core$async33569.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33569.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33569";

cljs.core.async.t_cljs$core$async33569.cljs$lang$ctorPrWriter = (function (this__28948__auto__,writer__28949__auto__,opt__28950__auto__){
return cljs.core._write.call(null,writer__28949__auto__,"cljs.core.async/t_cljs$core$async33569");
});

cljs.core.async.__GT_t_cljs$core$async33569 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async33569(f__$1,ch__$1,meta33570){
return (new cljs.core.async.t_cljs$core$async33569(f__$1,ch__$1,meta33570));
});

}

return (new cljs.core.async.t_cljs$core$async33569(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async33572 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33572 = (function (p,ch,meta33573){
this.p = p;
this.ch = ch;
this.meta33573 = meta33573;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async33572.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33574,meta33573__$1){
var self__ = this;
var _33574__$1 = this;
return (new cljs.core.async.t_cljs$core$async33572(self__.p,self__.ch,meta33573__$1));
});

cljs.core.async.t_cljs$core$async33572.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33574){
var self__ = this;
var _33574__$1 = this;
return self__.meta33573;
});

cljs.core.async.t_cljs$core$async33572.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33572.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async33572.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async33572.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33572.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async33572.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33572.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async33572.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta33573","meta33573",-1550584554,null)], null);
});

cljs.core.async.t_cljs$core$async33572.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33572.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33572";

cljs.core.async.t_cljs$core$async33572.cljs$lang$ctorPrWriter = (function (this__28948__auto__,writer__28949__auto__,opt__28950__auto__){
return cljs.core._write.call(null,writer__28949__auto__,"cljs.core.async/t_cljs$core$async33572");
});

cljs.core.async.__GT_t_cljs$core$async33572 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async33572(p__$1,ch__$1,meta33573){
return (new cljs.core.async.t_cljs$core$async33572(p__$1,ch__$1,meta33573));
});

}

return (new cljs.core.async.t_cljs$core$async33572(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__33576 = arguments.length;
switch (G__33576) {
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
var c__32091__auto___33616 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32091__auto___33616,out){
return (function (){
var f__32092__auto__ = (function (){var switch__32003__auto__ = ((function (c__32091__auto___33616,out){
return (function (state_33597){
var state_val_33598 = (state_33597[(1)]);
if((state_val_33598 === (7))){
var inst_33593 = (state_33597[(2)]);
var state_33597__$1 = state_33597;
var statearr_33599_33617 = state_33597__$1;
(statearr_33599_33617[(2)] = inst_33593);

(statearr_33599_33617[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33598 === (1))){
var state_33597__$1 = state_33597;
var statearr_33600_33618 = state_33597__$1;
(statearr_33600_33618[(2)] = null);

(statearr_33600_33618[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33598 === (4))){
var inst_33579 = (state_33597[(7)]);
var inst_33579__$1 = (state_33597[(2)]);
var inst_33580 = (inst_33579__$1 == null);
var state_33597__$1 = (function (){var statearr_33601 = state_33597;
(statearr_33601[(7)] = inst_33579__$1);

return statearr_33601;
})();
if(cljs.core.truth_(inst_33580)){
var statearr_33602_33619 = state_33597__$1;
(statearr_33602_33619[(1)] = (5));

} else {
var statearr_33603_33620 = state_33597__$1;
(statearr_33603_33620[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33598 === (6))){
var inst_33579 = (state_33597[(7)]);
var inst_33584 = p.call(null,inst_33579);
var state_33597__$1 = state_33597;
if(cljs.core.truth_(inst_33584)){
var statearr_33604_33621 = state_33597__$1;
(statearr_33604_33621[(1)] = (8));

} else {
var statearr_33605_33622 = state_33597__$1;
(statearr_33605_33622[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33598 === (3))){
var inst_33595 = (state_33597[(2)]);
var state_33597__$1 = state_33597;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33597__$1,inst_33595);
} else {
if((state_val_33598 === (2))){
var state_33597__$1 = state_33597;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33597__$1,(4),ch);
} else {
if((state_val_33598 === (11))){
var inst_33587 = (state_33597[(2)]);
var state_33597__$1 = state_33597;
var statearr_33606_33623 = state_33597__$1;
(statearr_33606_33623[(2)] = inst_33587);

(statearr_33606_33623[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33598 === (9))){
var state_33597__$1 = state_33597;
var statearr_33607_33624 = state_33597__$1;
(statearr_33607_33624[(2)] = null);

(statearr_33607_33624[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33598 === (5))){
var inst_33582 = cljs.core.async.close_BANG_.call(null,out);
var state_33597__$1 = state_33597;
var statearr_33608_33625 = state_33597__$1;
(statearr_33608_33625[(2)] = inst_33582);

(statearr_33608_33625[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33598 === (10))){
var inst_33590 = (state_33597[(2)]);
var state_33597__$1 = (function (){var statearr_33609 = state_33597;
(statearr_33609[(8)] = inst_33590);

return statearr_33609;
})();
var statearr_33610_33626 = state_33597__$1;
(statearr_33610_33626[(2)] = null);

(statearr_33610_33626[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33598 === (8))){
var inst_33579 = (state_33597[(7)]);
var state_33597__$1 = state_33597;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33597__$1,(11),out,inst_33579);
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
});})(c__32091__auto___33616,out))
;
return ((function (switch__32003__auto__,c__32091__auto___33616,out){
return (function() {
var cljs$core$async$state_machine__32004__auto__ = null;
var cljs$core$async$state_machine__32004__auto____0 = (function (){
var statearr_33611 = [null,null,null,null,null,null,null,null,null];
(statearr_33611[(0)] = cljs$core$async$state_machine__32004__auto__);

(statearr_33611[(1)] = (1));

return statearr_33611;
});
var cljs$core$async$state_machine__32004__auto____1 = (function (state_33597){
while(true){
var ret_value__32005__auto__ = (function (){try{while(true){
var result__32006__auto__ = switch__32003__auto__.call(null,state_33597);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32006__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32006__auto__;
}
break;
}
}catch (e33612){if((e33612 instanceof Object)){
var ex__32007__auto__ = e33612;
var statearr_33613_33627 = state_33597;
(statearr_33613_33627[(5)] = ex__32007__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33597);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33612;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32005__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33628 = state_33597;
state_33597 = G__33628;
continue;
} else {
return ret_value__32005__auto__;
}
break;
}
});
cljs$core$async$state_machine__32004__auto__ = function(state_33597){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32004__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32004__auto____1.call(this,state_33597);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__32004__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32004__auto____0;
cljs$core$async$state_machine__32004__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32004__auto____1;
return cljs$core$async$state_machine__32004__auto__;
})()
;})(switch__32003__auto__,c__32091__auto___33616,out))
})();
var state__32093__auto__ = (function (){var statearr_33614 = f__32092__auto__.call(null);
(statearr_33614[(6)] = c__32091__auto___33616);

return statearr_33614;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32093__auto__);
});})(c__32091__auto___33616,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__33630 = arguments.length;
switch (G__33630) {
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
var c__32091__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32091__auto__){
return (function (){
var f__32092__auto__ = (function (){var switch__32003__auto__ = ((function (c__32091__auto__){
return (function (state_33693){
var state_val_33694 = (state_33693[(1)]);
if((state_val_33694 === (7))){
var inst_33689 = (state_33693[(2)]);
var state_33693__$1 = state_33693;
var statearr_33695_33733 = state_33693__$1;
(statearr_33695_33733[(2)] = inst_33689);

(statearr_33695_33733[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33694 === (20))){
var inst_33659 = (state_33693[(7)]);
var inst_33670 = (state_33693[(2)]);
var inst_33671 = cljs.core.next.call(null,inst_33659);
var inst_33645 = inst_33671;
var inst_33646 = null;
var inst_33647 = (0);
var inst_33648 = (0);
var state_33693__$1 = (function (){var statearr_33696 = state_33693;
(statearr_33696[(8)] = inst_33646);

(statearr_33696[(9)] = inst_33670);

(statearr_33696[(10)] = inst_33647);

(statearr_33696[(11)] = inst_33645);

(statearr_33696[(12)] = inst_33648);

return statearr_33696;
})();
var statearr_33697_33734 = state_33693__$1;
(statearr_33697_33734[(2)] = null);

(statearr_33697_33734[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33694 === (1))){
var state_33693__$1 = state_33693;
var statearr_33698_33735 = state_33693__$1;
(statearr_33698_33735[(2)] = null);

(statearr_33698_33735[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33694 === (4))){
var inst_33634 = (state_33693[(13)]);
var inst_33634__$1 = (state_33693[(2)]);
var inst_33635 = (inst_33634__$1 == null);
var state_33693__$1 = (function (){var statearr_33699 = state_33693;
(statearr_33699[(13)] = inst_33634__$1);

return statearr_33699;
})();
if(cljs.core.truth_(inst_33635)){
var statearr_33700_33736 = state_33693__$1;
(statearr_33700_33736[(1)] = (5));

} else {
var statearr_33701_33737 = state_33693__$1;
(statearr_33701_33737[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33694 === (15))){
var state_33693__$1 = state_33693;
var statearr_33705_33738 = state_33693__$1;
(statearr_33705_33738[(2)] = null);

(statearr_33705_33738[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33694 === (21))){
var state_33693__$1 = state_33693;
var statearr_33706_33739 = state_33693__$1;
(statearr_33706_33739[(2)] = null);

(statearr_33706_33739[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33694 === (13))){
var inst_33646 = (state_33693[(8)]);
var inst_33647 = (state_33693[(10)]);
var inst_33645 = (state_33693[(11)]);
var inst_33648 = (state_33693[(12)]);
var inst_33655 = (state_33693[(2)]);
var inst_33656 = (inst_33648 + (1));
var tmp33702 = inst_33646;
var tmp33703 = inst_33647;
var tmp33704 = inst_33645;
var inst_33645__$1 = tmp33704;
var inst_33646__$1 = tmp33702;
var inst_33647__$1 = tmp33703;
var inst_33648__$1 = inst_33656;
var state_33693__$1 = (function (){var statearr_33707 = state_33693;
(statearr_33707[(14)] = inst_33655);

(statearr_33707[(8)] = inst_33646__$1);

(statearr_33707[(10)] = inst_33647__$1);

(statearr_33707[(11)] = inst_33645__$1);

(statearr_33707[(12)] = inst_33648__$1);

return statearr_33707;
})();
var statearr_33708_33740 = state_33693__$1;
(statearr_33708_33740[(2)] = null);

(statearr_33708_33740[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33694 === (22))){
var state_33693__$1 = state_33693;
var statearr_33709_33741 = state_33693__$1;
(statearr_33709_33741[(2)] = null);

(statearr_33709_33741[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33694 === (6))){
var inst_33634 = (state_33693[(13)]);
var inst_33643 = f.call(null,inst_33634);
var inst_33644 = cljs.core.seq.call(null,inst_33643);
var inst_33645 = inst_33644;
var inst_33646 = null;
var inst_33647 = (0);
var inst_33648 = (0);
var state_33693__$1 = (function (){var statearr_33710 = state_33693;
(statearr_33710[(8)] = inst_33646);

(statearr_33710[(10)] = inst_33647);

(statearr_33710[(11)] = inst_33645);

(statearr_33710[(12)] = inst_33648);

return statearr_33710;
})();
var statearr_33711_33742 = state_33693__$1;
(statearr_33711_33742[(2)] = null);

(statearr_33711_33742[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33694 === (17))){
var inst_33659 = (state_33693[(7)]);
var inst_33663 = cljs.core.chunk_first.call(null,inst_33659);
var inst_33664 = cljs.core.chunk_rest.call(null,inst_33659);
var inst_33665 = cljs.core.count.call(null,inst_33663);
var inst_33645 = inst_33664;
var inst_33646 = inst_33663;
var inst_33647 = inst_33665;
var inst_33648 = (0);
var state_33693__$1 = (function (){var statearr_33712 = state_33693;
(statearr_33712[(8)] = inst_33646);

(statearr_33712[(10)] = inst_33647);

(statearr_33712[(11)] = inst_33645);

(statearr_33712[(12)] = inst_33648);

return statearr_33712;
})();
var statearr_33713_33743 = state_33693__$1;
(statearr_33713_33743[(2)] = null);

(statearr_33713_33743[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33694 === (3))){
var inst_33691 = (state_33693[(2)]);
var state_33693__$1 = state_33693;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33693__$1,inst_33691);
} else {
if((state_val_33694 === (12))){
var inst_33679 = (state_33693[(2)]);
var state_33693__$1 = state_33693;
var statearr_33714_33744 = state_33693__$1;
(statearr_33714_33744[(2)] = inst_33679);

(statearr_33714_33744[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33694 === (2))){
var state_33693__$1 = state_33693;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33693__$1,(4),in$);
} else {
if((state_val_33694 === (23))){
var inst_33687 = (state_33693[(2)]);
var state_33693__$1 = state_33693;
var statearr_33715_33745 = state_33693__$1;
(statearr_33715_33745[(2)] = inst_33687);

(statearr_33715_33745[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33694 === (19))){
var inst_33674 = (state_33693[(2)]);
var state_33693__$1 = state_33693;
var statearr_33716_33746 = state_33693__$1;
(statearr_33716_33746[(2)] = inst_33674);

(statearr_33716_33746[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33694 === (11))){
var inst_33645 = (state_33693[(11)]);
var inst_33659 = (state_33693[(7)]);
var inst_33659__$1 = cljs.core.seq.call(null,inst_33645);
var state_33693__$1 = (function (){var statearr_33717 = state_33693;
(statearr_33717[(7)] = inst_33659__$1);

return statearr_33717;
})();
if(inst_33659__$1){
var statearr_33718_33747 = state_33693__$1;
(statearr_33718_33747[(1)] = (14));

} else {
var statearr_33719_33748 = state_33693__$1;
(statearr_33719_33748[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33694 === (9))){
var inst_33681 = (state_33693[(2)]);
var inst_33682 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_33693__$1 = (function (){var statearr_33720 = state_33693;
(statearr_33720[(15)] = inst_33681);

return statearr_33720;
})();
if(cljs.core.truth_(inst_33682)){
var statearr_33721_33749 = state_33693__$1;
(statearr_33721_33749[(1)] = (21));

} else {
var statearr_33722_33750 = state_33693__$1;
(statearr_33722_33750[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33694 === (5))){
var inst_33637 = cljs.core.async.close_BANG_.call(null,out);
var state_33693__$1 = state_33693;
var statearr_33723_33751 = state_33693__$1;
(statearr_33723_33751[(2)] = inst_33637);

(statearr_33723_33751[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33694 === (14))){
var inst_33659 = (state_33693[(7)]);
var inst_33661 = cljs.core.chunked_seq_QMARK_.call(null,inst_33659);
var state_33693__$1 = state_33693;
if(inst_33661){
var statearr_33724_33752 = state_33693__$1;
(statearr_33724_33752[(1)] = (17));

} else {
var statearr_33725_33753 = state_33693__$1;
(statearr_33725_33753[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33694 === (16))){
var inst_33677 = (state_33693[(2)]);
var state_33693__$1 = state_33693;
var statearr_33726_33754 = state_33693__$1;
(statearr_33726_33754[(2)] = inst_33677);

(statearr_33726_33754[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33694 === (10))){
var inst_33646 = (state_33693[(8)]);
var inst_33648 = (state_33693[(12)]);
var inst_33653 = cljs.core._nth.call(null,inst_33646,inst_33648);
var state_33693__$1 = state_33693;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33693__$1,(13),out,inst_33653);
} else {
if((state_val_33694 === (18))){
var inst_33659 = (state_33693[(7)]);
var inst_33668 = cljs.core.first.call(null,inst_33659);
var state_33693__$1 = state_33693;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33693__$1,(20),out,inst_33668);
} else {
if((state_val_33694 === (8))){
var inst_33647 = (state_33693[(10)]);
var inst_33648 = (state_33693[(12)]);
var inst_33650 = (inst_33648 < inst_33647);
var inst_33651 = inst_33650;
var state_33693__$1 = state_33693;
if(cljs.core.truth_(inst_33651)){
var statearr_33727_33755 = state_33693__$1;
(statearr_33727_33755[(1)] = (10));

} else {
var statearr_33728_33756 = state_33693__$1;
(statearr_33728_33756[(1)] = (11));

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
});})(c__32091__auto__))
;
return ((function (switch__32003__auto__,c__32091__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__32004__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__32004__auto____0 = (function (){
var statearr_33729 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33729[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__32004__auto__);

(statearr_33729[(1)] = (1));

return statearr_33729;
});
var cljs$core$async$mapcat_STAR__$_state_machine__32004__auto____1 = (function (state_33693){
while(true){
var ret_value__32005__auto__ = (function (){try{while(true){
var result__32006__auto__ = switch__32003__auto__.call(null,state_33693);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32006__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32006__auto__;
}
break;
}
}catch (e33730){if((e33730 instanceof Object)){
var ex__32007__auto__ = e33730;
var statearr_33731_33757 = state_33693;
(statearr_33731_33757[(5)] = ex__32007__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33693);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33730;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32005__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33758 = state_33693;
state_33693 = G__33758;
continue;
} else {
return ret_value__32005__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__32004__auto__ = function(state_33693){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__32004__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__32004__auto____1.call(this,state_33693);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__32004__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__32004__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__32004__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__32004__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__32004__auto__;
})()
;})(switch__32003__auto__,c__32091__auto__))
})();
var state__32093__auto__ = (function (){var statearr_33732 = f__32092__auto__.call(null);
(statearr_33732[(6)] = c__32091__auto__);

return statearr_33732;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32093__auto__);
});})(c__32091__auto__))
);

return c__32091__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__33760 = arguments.length;
switch (G__33760) {
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
var G__33763 = arguments.length;
switch (G__33763) {
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
var G__33766 = arguments.length;
switch (G__33766) {
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
var c__32091__auto___33813 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32091__auto___33813,out){
return (function (){
var f__32092__auto__ = (function (){var switch__32003__auto__ = ((function (c__32091__auto___33813,out){
return (function (state_33790){
var state_val_33791 = (state_33790[(1)]);
if((state_val_33791 === (7))){
var inst_33785 = (state_33790[(2)]);
var state_33790__$1 = state_33790;
var statearr_33792_33814 = state_33790__$1;
(statearr_33792_33814[(2)] = inst_33785);

(statearr_33792_33814[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33791 === (1))){
var inst_33767 = null;
var state_33790__$1 = (function (){var statearr_33793 = state_33790;
(statearr_33793[(7)] = inst_33767);

return statearr_33793;
})();
var statearr_33794_33815 = state_33790__$1;
(statearr_33794_33815[(2)] = null);

(statearr_33794_33815[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33791 === (4))){
var inst_33770 = (state_33790[(8)]);
var inst_33770__$1 = (state_33790[(2)]);
var inst_33771 = (inst_33770__$1 == null);
var inst_33772 = cljs.core.not.call(null,inst_33771);
var state_33790__$1 = (function (){var statearr_33795 = state_33790;
(statearr_33795[(8)] = inst_33770__$1);

return statearr_33795;
})();
if(inst_33772){
var statearr_33796_33816 = state_33790__$1;
(statearr_33796_33816[(1)] = (5));

} else {
var statearr_33797_33817 = state_33790__$1;
(statearr_33797_33817[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33791 === (6))){
var state_33790__$1 = state_33790;
var statearr_33798_33818 = state_33790__$1;
(statearr_33798_33818[(2)] = null);

(statearr_33798_33818[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33791 === (3))){
var inst_33787 = (state_33790[(2)]);
var inst_33788 = cljs.core.async.close_BANG_.call(null,out);
var state_33790__$1 = (function (){var statearr_33799 = state_33790;
(statearr_33799[(9)] = inst_33787);

return statearr_33799;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33790__$1,inst_33788);
} else {
if((state_val_33791 === (2))){
var state_33790__$1 = state_33790;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33790__$1,(4),ch);
} else {
if((state_val_33791 === (11))){
var inst_33770 = (state_33790[(8)]);
var inst_33779 = (state_33790[(2)]);
var inst_33767 = inst_33770;
var state_33790__$1 = (function (){var statearr_33800 = state_33790;
(statearr_33800[(10)] = inst_33779);

(statearr_33800[(7)] = inst_33767);

return statearr_33800;
})();
var statearr_33801_33819 = state_33790__$1;
(statearr_33801_33819[(2)] = null);

(statearr_33801_33819[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33791 === (9))){
var inst_33770 = (state_33790[(8)]);
var state_33790__$1 = state_33790;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33790__$1,(11),out,inst_33770);
} else {
if((state_val_33791 === (5))){
var inst_33770 = (state_33790[(8)]);
var inst_33767 = (state_33790[(7)]);
var inst_33774 = cljs.core._EQ_.call(null,inst_33770,inst_33767);
var state_33790__$1 = state_33790;
if(inst_33774){
var statearr_33803_33820 = state_33790__$1;
(statearr_33803_33820[(1)] = (8));

} else {
var statearr_33804_33821 = state_33790__$1;
(statearr_33804_33821[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33791 === (10))){
var inst_33782 = (state_33790[(2)]);
var state_33790__$1 = state_33790;
var statearr_33805_33822 = state_33790__$1;
(statearr_33805_33822[(2)] = inst_33782);

(statearr_33805_33822[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33791 === (8))){
var inst_33767 = (state_33790[(7)]);
var tmp33802 = inst_33767;
var inst_33767__$1 = tmp33802;
var state_33790__$1 = (function (){var statearr_33806 = state_33790;
(statearr_33806[(7)] = inst_33767__$1);

return statearr_33806;
})();
var statearr_33807_33823 = state_33790__$1;
(statearr_33807_33823[(2)] = null);

(statearr_33807_33823[(1)] = (2));


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
});})(c__32091__auto___33813,out))
;
return ((function (switch__32003__auto__,c__32091__auto___33813,out){
return (function() {
var cljs$core$async$state_machine__32004__auto__ = null;
var cljs$core$async$state_machine__32004__auto____0 = (function (){
var statearr_33808 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_33808[(0)] = cljs$core$async$state_machine__32004__auto__);

(statearr_33808[(1)] = (1));

return statearr_33808;
});
var cljs$core$async$state_machine__32004__auto____1 = (function (state_33790){
while(true){
var ret_value__32005__auto__ = (function (){try{while(true){
var result__32006__auto__ = switch__32003__auto__.call(null,state_33790);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32006__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32006__auto__;
}
break;
}
}catch (e33809){if((e33809 instanceof Object)){
var ex__32007__auto__ = e33809;
var statearr_33810_33824 = state_33790;
(statearr_33810_33824[(5)] = ex__32007__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33790);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33809;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32005__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33825 = state_33790;
state_33790 = G__33825;
continue;
} else {
return ret_value__32005__auto__;
}
break;
}
});
cljs$core$async$state_machine__32004__auto__ = function(state_33790){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32004__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32004__auto____1.call(this,state_33790);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__32004__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32004__auto____0;
cljs$core$async$state_machine__32004__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32004__auto____1;
return cljs$core$async$state_machine__32004__auto__;
})()
;})(switch__32003__auto__,c__32091__auto___33813,out))
})();
var state__32093__auto__ = (function (){var statearr_33811 = f__32092__auto__.call(null);
(statearr_33811[(6)] = c__32091__auto___33813);

return statearr_33811;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32093__auto__);
});})(c__32091__auto___33813,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__33827 = arguments.length;
switch (G__33827) {
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
var c__32091__auto___33893 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32091__auto___33893,out){
return (function (){
var f__32092__auto__ = (function (){var switch__32003__auto__ = ((function (c__32091__auto___33893,out){
return (function (state_33865){
var state_val_33866 = (state_33865[(1)]);
if((state_val_33866 === (7))){
var inst_33861 = (state_33865[(2)]);
var state_33865__$1 = state_33865;
var statearr_33867_33894 = state_33865__$1;
(statearr_33867_33894[(2)] = inst_33861);

(statearr_33867_33894[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33866 === (1))){
var inst_33828 = (new Array(n));
var inst_33829 = inst_33828;
var inst_33830 = (0);
var state_33865__$1 = (function (){var statearr_33868 = state_33865;
(statearr_33868[(7)] = inst_33829);

(statearr_33868[(8)] = inst_33830);

return statearr_33868;
})();
var statearr_33869_33895 = state_33865__$1;
(statearr_33869_33895[(2)] = null);

(statearr_33869_33895[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33866 === (4))){
var inst_33833 = (state_33865[(9)]);
var inst_33833__$1 = (state_33865[(2)]);
var inst_33834 = (inst_33833__$1 == null);
var inst_33835 = cljs.core.not.call(null,inst_33834);
var state_33865__$1 = (function (){var statearr_33870 = state_33865;
(statearr_33870[(9)] = inst_33833__$1);

return statearr_33870;
})();
if(inst_33835){
var statearr_33871_33896 = state_33865__$1;
(statearr_33871_33896[(1)] = (5));

} else {
var statearr_33872_33897 = state_33865__$1;
(statearr_33872_33897[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33866 === (15))){
var inst_33855 = (state_33865[(2)]);
var state_33865__$1 = state_33865;
var statearr_33873_33898 = state_33865__$1;
(statearr_33873_33898[(2)] = inst_33855);

(statearr_33873_33898[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33866 === (13))){
var state_33865__$1 = state_33865;
var statearr_33874_33899 = state_33865__$1;
(statearr_33874_33899[(2)] = null);

(statearr_33874_33899[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33866 === (6))){
var inst_33830 = (state_33865[(8)]);
var inst_33851 = (inst_33830 > (0));
var state_33865__$1 = state_33865;
if(cljs.core.truth_(inst_33851)){
var statearr_33875_33900 = state_33865__$1;
(statearr_33875_33900[(1)] = (12));

} else {
var statearr_33876_33901 = state_33865__$1;
(statearr_33876_33901[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33866 === (3))){
var inst_33863 = (state_33865[(2)]);
var state_33865__$1 = state_33865;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33865__$1,inst_33863);
} else {
if((state_val_33866 === (12))){
var inst_33829 = (state_33865[(7)]);
var inst_33853 = cljs.core.vec.call(null,inst_33829);
var state_33865__$1 = state_33865;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33865__$1,(15),out,inst_33853);
} else {
if((state_val_33866 === (2))){
var state_33865__$1 = state_33865;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33865__$1,(4),ch);
} else {
if((state_val_33866 === (11))){
var inst_33845 = (state_33865[(2)]);
var inst_33846 = (new Array(n));
var inst_33829 = inst_33846;
var inst_33830 = (0);
var state_33865__$1 = (function (){var statearr_33877 = state_33865;
(statearr_33877[(7)] = inst_33829);

(statearr_33877[(8)] = inst_33830);

(statearr_33877[(10)] = inst_33845);

return statearr_33877;
})();
var statearr_33878_33902 = state_33865__$1;
(statearr_33878_33902[(2)] = null);

(statearr_33878_33902[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33866 === (9))){
var inst_33829 = (state_33865[(7)]);
var inst_33843 = cljs.core.vec.call(null,inst_33829);
var state_33865__$1 = state_33865;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33865__$1,(11),out,inst_33843);
} else {
if((state_val_33866 === (5))){
var inst_33829 = (state_33865[(7)]);
var inst_33830 = (state_33865[(8)]);
var inst_33838 = (state_33865[(11)]);
var inst_33833 = (state_33865[(9)]);
var inst_33837 = (inst_33829[inst_33830] = inst_33833);
var inst_33838__$1 = (inst_33830 + (1));
var inst_33839 = (inst_33838__$1 < n);
var state_33865__$1 = (function (){var statearr_33879 = state_33865;
(statearr_33879[(12)] = inst_33837);

(statearr_33879[(11)] = inst_33838__$1);

return statearr_33879;
})();
if(cljs.core.truth_(inst_33839)){
var statearr_33880_33903 = state_33865__$1;
(statearr_33880_33903[(1)] = (8));

} else {
var statearr_33881_33904 = state_33865__$1;
(statearr_33881_33904[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33866 === (14))){
var inst_33858 = (state_33865[(2)]);
var inst_33859 = cljs.core.async.close_BANG_.call(null,out);
var state_33865__$1 = (function (){var statearr_33883 = state_33865;
(statearr_33883[(13)] = inst_33858);

return statearr_33883;
})();
var statearr_33884_33905 = state_33865__$1;
(statearr_33884_33905[(2)] = inst_33859);

(statearr_33884_33905[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33866 === (10))){
var inst_33849 = (state_33865[(2)]);
var state_33865__$1 = state_33865;
var statearr_33885_33906 = state_33865__$1;
(statearr_33885_33906[(2)] = inst_33849);

(statearr_33885_33906[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33866 === (8))){
var inst_33829 = (state_33865[(7)]);
var inst_33838 = (state_33865[(11)]);
var tmp33882 = inst_33829;
var inst_33829__$1 = tmp33882;
var inst_33830 = inst_33838;
var state_33865__$1 = (function (){var statearr_33886 = state_33865;
(statearr_33886[(7)] = inst_33829__$1);

(statearr_33886[(8)] = inst_33830);

return statearr_33886;
})();
var statearr_33887_33907 = state_33865__$1;
(statearr_33887_33907[(2)] = null);

(statearr_33887_33907[(1)] = (2));


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
});})(c__32091__auto___33893,out))
;
return ((function (switch__32003__auto__,c__32091__auto___33893,out){
return (function() {
var cljs$core$async$state_machine__32004__auto__ = null;
var cljs$core$async$state_machine__32004__auto____0 = (function (){
var statearr_33888 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33888[(0)] = cljs$core$async$state_machine__32004__auto__);

(statearr_33888[(1)] = (1));

return statearr_33888;
});
var cljs$core$async$state_machine__32004__auto____1 = (function (state_33865){
while(true){
var ret_value__32005__auto__ = (function (){try{while(true){
var result__32006__auto__ = switch__32003__auto__.call(null,state_33865);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32006__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32006__auto__;
}
break;
}
}catch (e33889){if((e33889 instanceof Object)){
var ex__32007__auto__ = e33889;
var statearr_33890_33908 = state_33865;
(statearr_33890_33908[(5)] = ex__32007__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33865);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33889;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32005__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33909 = state_33865;
state_33865 = G__33909;
continue;
} else {
return ret_value__32005__auto__;
}
break;
}
});
cljs$core$async$state_machine__32004__auto__ = function(state_33865){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32004__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32004__auto____1.call(this,state_33865);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__32004__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32004__auto____0;
cljs$core$async$state_machine__32004__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32004__auto____1;
return cljs$core$async$state_machine__32004__auto__;
})()
;})(switch__32003__auto__,c__32091__auto___33893,out))
})();
var state__32093__auto__ = (function (){var statearr_33891 = f__32092__auto__.call(null);
(statearr_33891[(6)] = c__32091__auto___33893);

return statearr_33891;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32093__auto__);
});})(c__32091__auto___33893,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__33911 = arguments.length;
switch (G__33911) {
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
var c__32091__auto___33981 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32091__auto___33981,out){
return (function (){
var f__32092__auto__ = (function (){var switch__32003__auto__ = ((function (c__32091__auto___33981,out){
return (function (state_33953){
var state_val_33954 = (state_33953[(1)]);
if((state_val_33954 === (7))){
var inst_33949 = (state_33953[(2)]);
var state_33953__$1 = state_33953;
var statearr_33955_33982 = state_33953__$1;
(statearr_33955_33982[(2)] = inst_33949);

(statearr_33955_33982[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33954 === (1))){
var inst_33912 = [];
var inst_33913 = inst_33912;
var inst_33914 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_33953__$1 = (function (){var statearr_33956 = state_33953;
(statearr_33956[(7)] = inst_33913);

(statearr_33956[(8)] = inst_33914);

return statearr_33956;
})();
var statearr_33957_33983 = state_33953__$1;
(statearr_33957_33983[(2)] = null);

(statearr_33957_33983[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33954 === (4))){
var inst_33917 = (state_33953[(9)]);
var inst_33917__$1 = (state_33953[(2)]);
var inst_33918 = (inst_33917__$1 == null);
var inst_33919 = cljs.core.not.call(null,inst_33918);
var state_33953__$1 = (function (){var statearr_33958 = state_33953;
(statearr_33958[(9)] = inst_33917__$1);

return statearr_33958;
})();
if(inst_33919){
var statearr_33959_33984 = state_33953__$1;
(statearr_33959_33984[(1)] = (5));

} else {
var statearr_33960_33985 = state_33953__$1;
(statearr_33960_33985[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33954 === (15))){
var inst_33943 = (state_33953[(2)]);
var state_33953__$1 = state_33953;
var statearr_33961_33986 = state_33953__$1;
(statearr_33961_33986[(2)] = inst_33943);

(statearr_33961_33986[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33954 === (13))){
var state_33953__$1 = state_33953;
var statearr_33962_33987 = state_33953__$1;
(statearr_33962_33987[(2)] = null);

(statearr_33962_33987[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33954 === (6))){
var inst_33913 = (state_33953[(7)]);
var inst_33938 = inst_33913.length;
var inst_33939 = (inst_33938 > (0));
var state_33953__$1 = state_33953;
if(cljs.core.truth_(inst_33939)){
var statearr_33963_33988 = state_33953__$1;
(statearr_33963_33988[(1)] = (12));

} else {
var statearr_33964_33989 = state_33953__$1;
(statearr_33964_33989[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33954 === (3))){
var inst_33951 = (state_33953[(2)]);
var state_33953__$1 = state_33953;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33953__$1,inst_33951);
} else {
if((state_val_33954 === (12))){
var inst_33913 = (state_33953[(7)]);
var inst_33941 = cljs.core.vec.call(null,inst_33913);
var state_33953__$1 = state_33953;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33953__$1,(15),out,inst_33941);
} else {
if((state_val_33954 === (2))){
var state_33953__$1 = state_33953;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33953__$1,(4),ch);
} else {
if((state_val_33954 === (11))){
var inst_33921 = (state_33953[(10)]);
var inst_33917 = (state_33953[(9)]);
var inst_33931 = (state_33953[(2)]);
var inst_33932 = [];
var inst_33933 = inst_33932.push(inst_33917);
var inst_33913 = inst_33932;
var inst_33914 = inst_33921;
var state_33953__$1 = (function (){var statearr_33965 = state_33953;
(statearr_33965[(11)] = inst_33931);

(statearr_33965[(7)] = inst_33913);

(statearr_33965[(8)] = inst_33914);

(statearr_33965[(12)] = inst_33933);

return statearr_33965;
})();
var statearr_33966_33990 = state_33953__$1;
(statearr_33966_33990[(2)] = null);

(statearr_33966_33990[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33954 === (9))){
var inst_33913 = (state_33953[(7)]);
var inst_33929 = cljs.core.vec.call(null,inst_33913);
var state_33953__$1 = state_33953;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33953__$1,(11),out,inst_33929);
} else {
if((state_val_33954 === (5))){
var inst_33921 = (state_33953[(10)]);
var inst_33914 = (state_33953[(8)]);
var inst_33917 = (state_33953[(9)]);
var inst_33921__$1 = f.call(null,inst_33917);
var inst_33922 = cljs.core._EQ_.call(null,inst_33921__$1,inst_33914);
var inst_33923 = cljs.core.keyword_identical_QMARK_.call(null,inst_33914,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_33924 = (inst_33922) || (inst_33923);
var state_33953__$1 = (function (){var statearr_33967 = state_33953;
(statearr_33967[(10)] = inst_33921__$1);

return statearr_33967;
})();
if(cljs.core.truth_(inst_33924)){
var statearr_33968_33991 = state_33953__$1;
(statearr_33968_33991[(1)] = (8));

} else {
var statearr_33969_33992 = state_33953__$1;
(statearr_33969_33992[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33954 === (14))){
var inst_33946 = (state_33953[(2)]);
var inst_33947 = cljs.core.async.close_BANG_.call(null,out);
var state_33953__$1 = (function (){var statearr_33971 = state_33953;
(statearr_33971[(13)] = inst_33946);

return statearr_33971;
})();
var statearr_33972_33993 = state_33953__$1;
(statearr_33972_33993[(2)] = inst_33947);

(statearr_33972_33993[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33954 === (10))){
var inst_33936 = (state_33953[(2)]);
var state_33953__$1 = state_33953;
var statearr_33973_33994 = state_33953__$1;
(statearr_33973_33994[(2)] = inst_33936);

(statearr_33973_33994[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33954 === (8))){
var inst_33913 = (state_33953[(7)]);
var inst_33921 = (state_33953[(10)]);
var inst_33917 = (state_33953[(9)]);
var inst_33926 = inst_33913.push(inst_33917);
var tmp33970 = inst_33913;
var inst_33913__$1 = tmp33970;
var inst_33914 = inst_33921;
var state_33953__$1 = (function (){var statearr_33974 = state_33953;
(statearr_33974[(7)] = inst_33913__$1);

(statearr_33974[(8)] = inst_33914);

(statearr_33974[(14)] = inst_33926);

return statearr_33974;
})();
var statearr_33975_33995 = state_33953__$1;
(statearr_33975_33995[(2)] = null);

(statearr_33975_33995[(1)] = (2));


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
});})(c__32091__auto___33981,out))
;
return ((function (switch__32003__auto__,c__32091__auto___33981,out){
return (function() {
var cljs$core$async$state_machine__32004__auto__ = null;
var cljs$core$async$state_machine__32004__auto____0 = (function (){
var statearr_33976 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33976[(0)] = cljs$core$async$state_machine__32004__auto__);

(statearr_33976[(1)] = (1));

return statearr_33976;
});
var cljs$core$async$state_machine__32004__auto____1 = (function (state_33953){
while(true){
var ret_value__32005__auto__ = (function (){try{while(true){
var result__32006__auto__ = switch__32003__auto__.call(null,state_33953);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32006__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32006__auto__;
}
break;
}
}catch (e33977){if((e33977 instanceof Object)){
var ex__32007__auto__ = e33977;
var statearr_33978_33996 = state_33953;
(statearr_33978_33996[(5)] = ex__32007__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33953);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33977;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32005__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33997 = state_33953;
state_33953 = G__33997;
continue;
} else {
return ret_value__32005__auto__;
}
break;
}
});
cljs$core$async$state_machine__32004__auto__ = function(state_33953){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32004__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32004__auto____1.call(this,state_33953);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__32004__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32004__auto____0;
cljs$core$async$state_machine__32004__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32004__auto____1;
return cljs$core$async$state_machine__32004__auto__;
})()
;})(switch__32003__auto__,c__32091__auto___33981,out))
})();
var state__32093__auto__ = (function (){var statearr_33979 = f__32092__auto__.call(null);
(statearr_33979[(6)] = c__32091__auto___33981);

return statearr_33979;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32093__auto__);
});})(c__32091__auto___33981,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1530314314576
