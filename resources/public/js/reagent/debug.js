// Compiled by ClojureScript 1.9.908 {}
goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = typeof console !== 'undefined';
reagent.debug.tracking = false;
if(typeof reagent.debug.warnings !== 'undefined'){
} else {
reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if(typeof reagent.debug.track_console !== 'undefined'){
} else {
reagent.debug.track_console = (function (){var o = ({});
o.warn = ((function (o){
return (function() { 
var G__29987__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__29987 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__29988__i = 0, G__29988__a = new Array(arguments.length -  0);
while (G__29988__i < G__29988__a.length) {G__29988__a[G__29988__i] = arguments[G__29988__i + 0]; ++G__29988__i;}
  args = new cljs.core.IndexedSeq(G__29988__a,0,null);
} 
return G__29987__delegate.call(this,args);};
G__29987.cljs$lang$maxFixedArity = 0;
G__29987.cljs$lang$applyTo = (function (arglist__29989){
var args = cljs.core.seq(arglist__29989);
return G__29987__delegate(args);
});
G__29987.cljs$core$IFn$_invoke$arity$variadic = G__29987__delegate;
return G__29987;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__29990__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__29990 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__29991__i = 0, G__29991__a = new Array(arguments.length -  0);
while (G__29991__i < G__29991__a.length) {G__29991__a[G__29991__i] = arguments[G__29991__i + 0]; ++G__29991__i;}
  args = new cljs.core.IndexedSeq(G__29991__a,0,null);
} 
return G__29990__delegate.call(this,args);};
G__29990.cljs$lang$maxFixedArity = 0;
G__29990.cljs$lang$applyTo = (function (arglist__29992){
var args = cljs.core.seq(arglist__29992);
return G__29990__delegate(args);
});
G__29990.cljs$core$IFn$_invoke$arity$variadic = G__29990__delegate;
return G__29990;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

reagent.debug.tracking = false;

return warns;
});

//# sourceMappingURL=debug.js.map?rel=1530383432982
