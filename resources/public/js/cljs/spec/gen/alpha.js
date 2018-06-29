// Compiled by ClojureScript 1.9.908 {}
goog.provide('cljs.spec.gen.alpha');
goog.require('cljs.core');
goog.require('cljs.core');

/**
* @constructor
 * @implements {cljs.core.IDeref}
*/
cljs.spec.gen.alpha.LazyVar = (function (f,cached){
this.f = f;
this.cached = cached;
this.cljs$lang$protocol_mask$partition0$ = 32768;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.spec.gen.alpha.LazyVar.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(!((self__.cached == null))){
return self__.cached;
} else {
var x = self__.f.call(null);
if((x == null)){
} else {
self__.cached = x;
}

return x;
}
});

cljs.spec.gen.alpha.LazyVar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),cljs.core.with_meta(new cljs.core.Symbol(null,"cached","cached",-1216707864,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

cljs.spec.gen.alpha.LazyVar.cljs$lang$type = true;

cljs.spec.gen.alpha.LazyVar.cljs$lang$ctorStr = "cljs.spec.gen.alpha/LazyVar";

cljs.spec.gen.alpha.LazyVar.cljs$lang$ctorPrWriter = (function (this__28948__auto__,writer__28949__auto__,opt__28950__auto__){
return cljs.core._write.call(null,writer__28949__auto__,"cljs.spec.gen.alpha/LazyVar");
});

cljs.spec.gen.alpha.__GT_LazyVar = (function cljs$spec$gen$alpha$__GT_LazyVar(f,cached){
return (new cljs.spec.gen.alpha.LazyVar(f,cached));
});

cljs.spec.gen.alpha.quick_check_ref = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check.quick_check !== 'undefined')){
return clojure.test.check.quick_check;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null)))," never required"].join('')));
}
}),null));
cljs.spec.gen.alpha.quick_check = (function cljs$spec$gen$alpha$quick_check(var_args){
var args__29499__auto__ = [];
var len__29492__auto___35933 = arguments.length;
var i__29493__auto___35934 = (0);
while(true){
if((i__29493__auto___35934 < len__29492__auto___35933)){
args__29499__auto__.push((arguments[i__29493__auto___35934]));

var G__35935 = (i__29493__auto___35934 + (1));
i__29493__auto___35934 = G__35935;
continue;
} else {
}
break;
}

var argseq__29500__auto__ = ((((0) < args__29499__auto__.length))?(new cljs.core.IndexedSeq(args__29499__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic(argseq__29500__auto__);
});

cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.gen.alpha.quick_check_ref),args);
});

cljs.spec.gen.alpha.quick_check.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.quick_check.cljs$lang$applyTo = (function (seq35932){
return cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35932));
});

cljs.spec.gen.alpha.for_all_STAR__ref = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.properties.for_all_STAR_ !== 'undefined')){
return clojure.test.check.properties.for_all_STAR_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null)))," never required"].join('')));
}
}),null));
/**
 * Dynamically loaded clojure.test.check.properties/for-all*.
 */
cljs.spec.gen.alpha.for_all_STAR_ = (function cljs$spec$gen$alpha$for_all_STAR_(var_args){
var args__29499__auto__ = [];
var len__29492__auto___35937 = arguments.length;
var i__29493__auto___35938 = (0);
while(true){
if((i__29493__auto___35938 < len__29492__auto___35937)){
args__29499__auto__.push((arguments[i__29493__auto___35938]));

var G__35939 = (i__29493__auto___35938 + (1));
i__29493__auto___35938 = G__35939;
continue;
} else {
}
break;
}

var argseq__29500__auto__ = ((((0) < args__29499__auto__.length))?(new cljs.core.IndexedSeq(args__29499__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__29500__auto__);
});

cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.gen.alpha.for_all_STAR__ref),args);
});

cljs.spec.gen.alpha.for_all_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.for_all_STAR_.cljs$lang$applyTo = (function (seq35936){
return cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35936));
});

var g_QMARK__35940 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null)))," never required"].join('')));
}
}),null));
var g_35941 = (new cljs.spec.gen.alpha.LazyVar(((function (g_QMARK__35940){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')){
return clojure.test.check.generators.generate;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null)))," never required"].join('')));
}
});})(g_QMARK__35940))
,null));
var mkg_35942 = (new cljs.spec.gen.alpha.LazyVar(((function (g_QMARK__35940,g_35941){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null)))," never required"].join('')));
}
});})(g_QMARK__35940,g_35941))
,null));
cljs.spec.gen.alpha.generator_QMARK_ = ((function (g_QMARK__35940,g_35941,mkg_35942){
return (function cljs$spec$gen$alpha$generator_QMARK_(x){
return cljs.core.deref.call(null,g_QMARK__35940).call(null,x);
});})(g_QMARK__35940,g_35941,mkg_35942))
;

cljs.spec.gen.alpha.generator = ((function (g_QMARK__35940,g_35941,mkg_35942){
return (function cljs$spec$gen$alpha$generator(gfn){
return cljs.core.deref.call(null,mkg_35942).call(null,gfn);
});})(g_QMARK__35940,g_35941,mkg_35942))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.gen.alpha.generate = ((function (g_QMARK__35940,g_35941,mkg_35942){
return (function cljs$spec$gen$alpha$generate(generator){
return cljs.core.deref.call(null,g_35941).call(null,generator);
});})(g_QMARK__35940,g_35941,mkg_35942))
;
cljs.spec.gen.alpha.delay_impl = (function cljs$spec$gen$alpha$delay_impl(gfnd){
return cljs.spec.gen.alpha.generator.call(null,(function (rnd,size){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gfnd)).call(null,rnd,size);
}));
});
var g__29585__auto___35962 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.gen.alpha.hash_map = ((function (g__29585__auto___35962){
return (function cljs$spec$gen$alpha$hash_map(var_args){
var args__29499__auto__ = [];
var len__29492__auto___35963 = arguments.length;
var i__29493__auto___35964 = (0);
while(true){
if((i__29493__auto___35964 < len__29492__auto___35963)){
args__29499__auto__.push((arguments[i__29493__auto___35964]));

var G__35965 = (i__29493__auto___35964 + (1));
i__29493__auto___35964 = G__35965;
continue;
} else {
}
break;
}

var argseq__29500__auto__ = ((((0) < args__29499__auto__.length))?(new cljs.core.IndexedSeq(args__29499__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__29500__auto__);
});})(g__29585__auto___35962))
;

cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29585__auto___35962){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__29585__auto___35962),args);
});})(g__29585__auto___35962))
;

cljs.spec.gen.alpha.hash_map.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.hash_map.cljs$lang$applyTo = ((function (g__29585__auto___35962){
return (function (seq35943){
return cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35943));
});})(g__29585__auto___35962))
;


var g__29585__auto___35966 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')){
return clojure.test.check.generators.list;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.gen.alpha.list = ((function (g__29585__auto___35966){
return (function cljs$spec$gen$alpha$list(var_args){
var args__29499__auto__ = [];
var len__29492__auto___35967 = arguments.length;
var i__29493__auto___35968 = (0);
while(true){
if((i__29493__auto___35968 < len__29492__auto___35967)){
args__29499__auto__.push((arguments[i__29493__auto___35968]));

var G__35969 = (i__29493__auto___35968 + (1));
i__29493__auto___35968 = G__35969;
continue;
} else {
}
break;
}

var argseq__29500__auto__ = ((((0) < args__29499__auto__.length))?(new cljs.core.IndexedSeq(args__29499__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(argseq__29500__auto__);
});})(g__29585__auto___35966))
;

cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29585__auto___35966){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__29585__auto___35966),args);
});})(g__29585__auto___35966))
;

cljs.spec.gen.alpha.list.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.list.cljs$lang$applyTo = ((function (g__29585__auto___35966){
return (function (seq35944){
return cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35944));
});})(g__29585__auto___35966))
;


var g__29585__auto___35970 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')){
return clojure.test.check.generators.map;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.gen.alpha.map = ((function (g__29585__auto___35970){
return (function cljs$spec$gen$alpha$map(var_args){
var args__29499__auto__ = [];
var len__29492__auto___35971 = arguments.length;
var i__29493__auto___35972 = (0);
while(true){
if((i__29493__auto___35972 < len__29492__auto___35971)){
args__29499__auto__.push((arguments[i__29493__auto___35972]));

var G__35973 = (i__29493__auto___35972 + (1));
i__29493__auto___35972 = G__35973;
continue;
} else {
}
break;
}

var argseq__29500__auto__ = ((((0) < args__29499__auto__.length))?(new cljs.core.IndexedSeq(args__29499__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic(argseq__29500__auto__);
});})(g__29585__auto___35970))
;

cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29585__auto___35970){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__29585__auto___35970),args);
});})(g__29585__auto___35970))
;

cljs.spec.gen.alpha.map.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.map.cljs$lang$applyTo = ((function (g__29585__auto___35970){
return (function (seq35945){
return cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35945));
});})(g__29585__auto___35970))
;


var g__29585__auto___35974 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.gen.alpha.not_empty = ((function (g__29585__auto___35974){
return (function cljs$spec$gen$alpha$not_empty(var_args){
var args__29499__auto__ = [];
var len__29492__auto___35975 = arguments.length;
var i__29493__auto___35976 = (0);
while(true){
if((i__29493__auto___35976 < len__29492__auto___35975)){
args__29499__auto__.push((arguments[i__29493__auto___35976]));

var G__35977 = (i__29493__auto___35976 + (1));
i__29493__auto___35976 = G__35977;
continue;
} else {
}
break;
}

var argseq__29500__auto__ = ((((0) < args__29499__auto__.length))?(new cljs.core.IndexedSeq(args__29499__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__29500__auto__);
});})(g__29585__auto___35974))
;

cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29585__auto___35974){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__29585__auto___35974),args);
});})(g__29585__auto___35974))
;

cljs.spec.gen.alpha.not_empty.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.not_empty.cljs$lang$applyTo = ((function (g__29585__auto___35974){
return (function (seq35946){
return cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35946));
});})(g__29585__auto___35974))
;


var g__29585__auto___35978 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')){
return clojure.test.check.generators.set;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.gen.alpha.set = ((function (g__29585__auto___35978){
return (function cljs$spec$gen$alpha$set(var_args){
var args__29499__auto__ = [];
var len__29492__auto___35979 = arguments.length;
var i__29493__auto___35980 = (0);
while(true){
if((i__29493__auto___35980 < len__29492__auto___35979)){
args__29499__auto__.push((arguments[i__29493__auto___35980]));

var G__35981 = (i__29493__auto___35980 + (1));
i__29493__auto___35980 = G__35981;
continue;
} else {
}
break;
}

var argseq__29500__auto__ = ((((0) < args__29499__auto__.length))?(new cljs.core.IndexedSeq(args__29499__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic(argseq__29500__auto__);
});})(g__29585__auto___35978))
;

cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29585__auto___35978){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__29585__auto___35978),args);
});})(g__29585__auto___35978))
;

cljs.spec.gen.alpha.set.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.set.cljs$lang$applyTo = ((function (g__29585__auto___35978){
return (function (seq35947){
return cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35947));
});})(g__29585__auto___35978))
;


var g__29585__auto___35982 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')){
return clojure.test.check.generators.vector;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.gen.alpha.vector = ((function (g__29585__auto___35982){
return (function cljs$spec$gen$alpha$vector(var_args){
var args__29499__auto__ = [];
var len__29492__auto___35983 = arguments.length;
var i__29493__auto___35984 = (0);
while(true){
if((i__29493__auto___35984 < len__29492__auto___35983)){
args__29499__auto__.push((arguments[i__29493__auto___35984]));

var G__35985 = (i__29493__auto___35984 + (1));
i__29493__auto___35984 = G__35985;
continue;
} else {
}
break;
}

var argseq__29500__auto__ = ((((0) < args__29499__auto__.length))?(new cljs.core.IndexedSeq(args__29499__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__29500__auto__);
});})(g__29585__auto___35982))
;

cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29585__auto___35982){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__29585__auto___35982),args);
});})(g__29585__auto___35982))
;

cljs.spec.gen.alpha.vector.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.vector.cljs$lang$applyTo = ((function (g__29585__auto___35982){
return (function (seq35948){
return cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35948));
});})(g__29585__auto___35982))
;


var g__29585__auto___35986 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector_distinct !== 'undefined')){
return clojure.test.check.generators.vector_distinct;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector-distinct
 */
cljs.spec.gen.alpha.vector_distinct = ((function (g__29585__auto___35986){
return (function cljs$spec$gen$alpha$vector_distinct(var_args){
var args__29499__auto__ = [];
var len__29492__auto___35987 = arguments.length;
var i__29493__auto___35988 = (0);
while(true){
if((i__29493__auto___35988 < len__29492__auto___35987)){
args__29499__auto__.push((arguments[i__29493__auto___35988]));

var G__35989 = (i__29493__auto___35988 + (1));
i__29493__auto___35988 = G__35989;
continue;
} else {
}
break;
}

var argseq__29500__auto__ = ((((0) < args__29499__auto__.length))?(new cljs.core.IndexedSeq(args__29499__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(argseq__29500__auto__);
});})(g__29585__auto___35986))
;

cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29585__auto___35986){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__29585__auto___35986),args);
});})(g__29585__auto___35986))
;

cljs.spec.gen.alpha.vector_distinct.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.vector_distinct.cljs$lang$applyTo = ((function (g__29585__auto___35986){
return (function (seq35949){
return cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35949));
});})(g__29585__auto___35986))
;


var g__29585__auto___35990 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')){
return clojure.test.check.generators.fmap;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.gen.alpha.fmap = ((function (g__29585__auto___35990){
return (function cljs$spec$gen$alpha$fmap(var_args){
var args__29499__auto__ = [];
var len__29492__auto___35991 = arguments.length;
var i__29493__auto___35992 = (0);
while(true){
if((i__29493__auto___35992 < len__29492__auto___35991)){
args__29499__auto__.push((arguments[i__29493__auto___35992]));

var G__35993 = (i__29493__auto___35992 + (1));
i__29493__auto___35992 = G__35993;
continue;
} else {
}
break;
}

var argseq__29500__auto__ = ((((0) < args__29499__auto__.length))?(new cljs.core.IndexedSeq(args__29499__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__29500__auto__);
});})(g__29585__auto___35990))
;

cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29585__auto___35990){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__29585__auto___35990),args);
});})(g__29585__auto___35990))
;

cljs.spec.gen.alpha.fmap.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.fmap.cljs$lang$applyTo = ((function (g__29585__auto___35990){
return (function (seq35950){
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35950));
});})(g__29585__auto___35990))
;


var g__29585__auto___35994 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')){
return clojure.test.check.generators.elements;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.gen.alpha.elements = ((function (g__29585__auto___35994){
return (function cljs$spec$gen$alpha$elements(var_args){
var args__29499__auto__ = [];
var len__29492__auto___35995 = arguments.length;
var i__29493__auto___35996 = (0);
while(true){
if((i__29493__auto___35996 < len__29492__auto___35995)){
args__29499__auto__.push((arguments[i__29493__auto___35996]));

var G__35997 = (i__29493__auto___35996 + (1));
i__29493__auto___35996 = G__35997;
continue;
} else {
}
break;
}

var argseq__29500__auto__ = ((((0) < args__29499__auto__.length))?(new cljs.core.IndexedSeq(args__29499__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__29500__auto__);
});})(g__29585__auto___35994))
;

cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29585__auto___35994){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__29585__auto___35994),args);
});})(g__29585__auto___35994))
;

cljs.spec.gen.alpha.elements.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.elements.cljs$lang$applyTo = ((function (g__29585__auto___35994){
return (function (seq35951){
return cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35951));
});})(g__29585__auto___35994))
;


var g__29585__auto___35998 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')){
return clojure.test.check.generators.bind;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.gen.alpha.bind = ((function (g__29585__auto___35998){
return (function cljs$spec$gen$alpha$bind(var_args){
var args__29499__auto__ = [];
var len__29492__auto___35999 = arguments.length;
var i__29493__auto___36000 = (0);
while(true){
if((i__29493__auto___36000 < len__29492__auto___35999)){
args__29499__auto__.push((arguments[i__29493__auto___36000]));

var G__36001 = (i__29493__auto___36000 + (1));
i__29493__auto___36000 = G__36001;
continue;
} else {
}
break;
}

var argseq__29500__auto__ = ((((0) < args__29499__auto__.length))?(new cljs.core.IndexedSeq(args__29499__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__29500__auto__);
});})(g__29585__auto___35998))
;

cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29585__auto___35998){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__29585__auto___35998),args);
});})(g__29585__auto___35998))
;

cljs.spec.gen.alpha.bind.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.bind.cljs$lang$applyTo = ((function (g__29585__auto___35998){
return (function (seq35952){
return cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35952));
});})(g__29585__auto___35998))
;


var g__29585__auto___36002 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')){
return clojure.test.check.generators.choose;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.gen.alpha.choose = ((function (g__29585__auto___36002){
return (function cljs$spec$gen$alpha$choose(var_args){
var args__29499__auto__ = [];
var len__29492__auto___36003 = arguments.length;
var i__29493__auto___36004 = (0);
while(true){
if((i__29493__auto___36004 < len__29492__auto___36003)){
args__29499__auto__.push((arguments[i__29493__auto___36004]));

var G__36005 = (i__29493__auto___36004 + (1));
i__29493__auto___36004 = G__36005;
continue;
} else {
}
break;
}

var argseq__29500__auto__ = ((((0) < args__29499__auto__.length))?(new cljs.core.IndexedSeq(args__29499__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__29500__auto__);
});})(g__29585__auto___36002))
;

cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29585__auto___36002){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__29585__auto___36002),args);
});})(g__29585__auto___36002))
;

cljs.spec.gen.alpha.choose.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.choose.cljs$lang$applyTo = ((function (g__29585__auto___36002){
return (function (seq35953){
return cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35953));
});})(g__29585__auto___36002))
;


var g__29585__auto___36006 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')){
return clojure.test.check.generators.one_of;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.gen.alpha.one_of = ((function (g__29585__auto___36006){
return (function cljs$spec$gen$alpha$one_of(var_args){
var args__29499__auto__ = [];
var len__29492__auto___36007 = arguments.length;
var i__29493__auto___36008 = (0);
while(true){
if((i__29493__auto___36008 < len__29492__auto___36007)){
args__29499__auto__.push((arguments[i__29493__auto___36008]));

var G__36009 = (i__29493__auto___36008 + (1));
i__29493__auto___36008 = G__36009;
continue;
} else {
}
break;
}

var argseq__29500__auto__ = ((((0) < args__29499__auto__.length))?(new cljs.core.IndexedSeq(args__29499__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__29500__auto__);
});})(g__29585__auto___36006))
;

cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29585__auto___36006){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__29585__auto___36006),args);
});})(g__29585__auto___36006))
;

cljs.spec.gen.alpha.one_of.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.one_of.cljs$lang$applyTo = ((function (g__29585__auto___36006){
return (function (seq35954){
return cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35954));
});})(g__29585__auto___36006))
;


var g__29585__auto___36010 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')){
return clojure.test.check.generators.such_that;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.gen.alpha.such_that = ((function (g__29585__auto___36010){
return (function cljs$spec$gen$alpha$such_that(var_args){
var args__29499__auto__ = [];
var len__29492__auto___36011 = arguments.length;
var i__29493__auto___36012 = (0);
while(true){
if((i__29493__auto___36012 < len__29492__auto___36011)){
args__29499__auto__.push((arguments[i__29493__auto___36012]));

var G__36013 = (i__29493__auto___36012 + (1));
i__29493__auto___36012 = G__36013;
continue;
} else {
}
break;
}

var argseq__29500__auto__ = ((((0) < args__29499__auto__.length))?(new cljs.core.IndexedSeq(args__29499__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__29500__auto__);
});})(g__29585__auto___36010))
;

cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29585__auto___36010){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__29585__auto___36010),args);
});})(g__29585__auto___36010))
;

cljs.spec.gen.alpha.such_that.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.such_that.cljs$lang$applyTo = ((function (g__29585__auto___36010){
return (function (seq35955){
return cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35955));
});})(g__29585__auto___36010))
;


var g__29585__auto___36014 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')){
return clojure.test.check.generators.tuple;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.gen.alpha.tuple = ((function (g__29585__auto___36014){
return (function cljs$spec$gen$alpha$tuple(var_args){
var args__29499__auto__ = [];
var len__29492__auto___36015 = arguments.length;
var i__29493__auto___36016 = (0);
while(true){
if((i__29493__auto___36016 < len__29492__auto___36015)){
args__29499__auto__.push((arguments[i__29493__auto___36016]));

var G__36017 = (i__29493__auto___36016 + (1));
i__29493__auto___36016 = G__36017;
continue;
} else {
}
break;
}

var argseq__29500__auto__ = ((((0) < args__29499__auto__.length))?(new cljs.core.IndexedSeq(args__29499__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__29500__auto__);
});})(g__29585__auto___36014))
;

cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29585__auto___36014){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__29585__auto___36014),args);
});})(g__29585__auto___36014))
;

cljs.spec.gen.alpha.tuple.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.tuple.cljs$lang$applyTo = ((function (g__29585__auto___36014){
return (function (seq35956){
return cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35956));
});})(g__29585__auto___36014))
;


var g__29585__auto___36018 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')){
return clojure.test.check.generators.sample;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.gen.alpha.sample = ((function (g__29585__auto___36018){
return (function cljs$spec$gen$alpha$sample(var_args){
var args__29499__auto__ = [];
var len__29492__auto___36019 = arguments.length;
var i__29493__auto___36020 = (0);
while(true){
if((i__29493__auto___36020 < len__29492__auto___36019)){
args__29499__auto__.push((arguments[i__29493__auto___36020]));

var G__36021 = (i__29493__auto___36020 + (1));
i__29493__auto___36020 = G__36021;
continue;
} else {
}
break;
}

var argseq__29500__auto__ = ((((0) < args__29499__auto__.length))?(new cljs.core.IndexedSeq(args__29499__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__29500__auto__);
});})(g__29585__auto___36018))
;

cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29585__auto___36018){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__29585__auto___36018),args);
});})(g__29585__auto___36018))
;

cljs.spec.gen.alpha.sample.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.sample.cljs$lang$applyTo = ((function (g__29585__auto___36018){
return (function (seq35957){
return cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35957));
});})(g__29585__auto___36018))
;


var g__29585__auto___36022 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')){
return clojure.test.check.generators.return$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.gen.alpha.return$ = ((function (g__29585__auto___36022){
return (function cljs$spec$gen$alpha$return(var_args){
var args__29499__auto__ = [];
var len__29492__auto___36023 = arguments.length;
var i__29493__auto___36024 = (0);
while(true){
if((i__29493__auto___36024 < len__29492__auto___36023)){
args__29499__auto__.push((arguments[i__29493__auto___36024]));

var G__36025 = (i__29493__auto___36024 + (1));
i__29493__auto___36024 = G__36025;
continue;
} else {
}
break;
}

var argseq__29500__auto__ = ((((0) < args__29499__auto__.length))?(new cljs.core.IndexedSeq(args__29499__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__29500__auto__);
});})(g__29585__auto___36022))
;

cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29585__auto___36022){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__29585__auto___36022),args);
});})(g__29585__auto___36022))
;

cljs.spec.gen.alpha.return$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.return$.cljs$lang$applyTo = ((function (g__29585__auto___36022){
return (function (seq35958){
return cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35958));
});})(g__29585__auto___36022))
;


var g__29585__auto___36026 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer_STAR_ !== 'undefined')){
return clojure.test.check.generators.large_integer_STAR_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/large-integer*
 */
cljs.spec.gen.alpha.large_integer_STAR_ = ((function (g__29585__auto___36026){
return (function cljs$spec$gen$alpha$large_integer_STAR_(var_args){
var args__29499__auto__ = [];
var len__29492__auto___36027 = arguments.length;
var i__29493__auto___36028 = (0);
while(true){
if((i__29493__auto___36028 < len__29492__auto___36027)){
args__29499__auto__.push((arguments[i__29493__auto___36028]));

var G__36029 = (i__29493__auto___36028 + (1));
i__29493__auto___36028 = G__36029;
continue;
} else {
}
break;
}

var argseq__29500__auto__ = ((((0) < args__29499__auto__.length))?(new cljs.core.IndexedSeq(args__29499__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__29500__auto__);
});})(g__29585__auto___36026))
;

cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29585__auto___36026){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__29585__auto___36026),args);
});})(g__29585__auto___36026))
;

cljs.spec.gen.alpha.large_integer_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.large_integer_STAR_.cljs$lang$applyTo = ((function (g__29585__auto___36026){
return (function (seq35959){
return cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35959));
});})(g__29585__auto___36026))
;


var g__29585__auto___36030 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double_STAR_ !== 'undefined')){
return clojure.test.check.generators.double_STAR_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/double*
 */
cljs.spec.gen.alpha.double_STAR_ = ((function (g__29585__auto___36030){
return (function cljs$spec$gen$alpha$double_STAR_(var_args){
var args__29499__auto__ = [];
var len__29492__auto___36031 = arguments.length;
var i__29493__auto___36032 = (0);
while(true){
if((i__29493__auto___36032 < len__29492__auto___36031)){
args__29499__auto__.push((arguments[i__29493__auto___36032]));

var G__36033 = (i__29493__auto___36032 + (1));
i__29493__auto___36032 = G__36033;
continue;
} else {
}
break;
}

var argseq__29500__auto__ = ((((0) < args__29499__auto__.length))?(new cljs.core.IndexedSeq(args__29499__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__29500__auto__);
});})(g__29585__auto___36030))
;

cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29585__auto___36030){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__29585__auto___36030),args);
});})(g__29585__auto___36030))
;

cljs.spec.gen.alpha.double_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.double_STAR_.cljs$lang$applyTo = ((function (g__29585__auto___36030){
return (function (seq35960){
return cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35960));
});})(g__29585__auto___36030))
;


var g__29585__auto___36034 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.frequency !== 'undefined')){
return clojure.test.check.generators.frequency;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/frequency
 */
cljs.spec.gen.alpha.frequency = ((function (g__29585__auto___36034){
return (function cljs$spec$gen$alpha$frequency(var_args){
var args__29499__auto__ = [];
var len__29492__auto___36035 = arguments.length;
var i__29493__auto___36036 = (0);
while(true){
if((i__29493__auto___36036 < len__29492__auto___36035)){
args__29499__auto__.push((arguments[i__29493__auto___36036]));

var G__36037 = (i__29493__auto___36036 + (1));
i__29493__auto___36036 = G__36037;
continue;
} else {
}
break;
}

var argseq__29500__auto__ = ((((0) < args__29499__auto__.length))?(new cljs.core.IndexedSeq(args__29499__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic(argseq__29500__auto__);
});})(g__29585__auto___36034))
;

cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29585__auto___36034){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__29585__auto___36034),args);
});})(g__29585__auto___36034))
;

cljs.spec.gen.alpha.frequency.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.frequency.cljs$lang$applyTo = ((function (g__29585__auto___36034){
return (function (seq35961){
return cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35961));
});})(g__29585__auto___36034))
;

var g__29598__auto___36059 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')){
return clojure.test.check.generators.any;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.gen.alpha.any = ((function (g__29598__auto___36059){
return (function cljs$spec$gen$alpha$any(var_args){
var args__29499__auto__ = [];
var len__29492__auto___36060 = arguments.length;
var i__29493__auto___36061 = (0);
while(true){
if((i__29493__auto___36061 < len__29492__auto___36060)){
args__29499__auto__.push((arguments[i__29493__auto___36061]));

var G__36062 = (i__29493__auto___36061 + (1));
i__29493__auto___36061 = G__36062;
continue;
} else {
}
break;
}

var argseq__29500__auto__ = ((((0) < args__29499__auto__.length))?(new cljs.core.IndexedSeq(args__29499__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic(argseq__29500__auto__);
});})(g__29598__auto___36059))
;

cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29598__auto___36059){
return (function (args){
return cljs.core.deref.call(null,g__29598__auto___36059);
});})(g__29598__auto___36059))
;

cljs.spec.gen.alpha.any.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.any.cljs$lang$applyTo = ((function (g__29598__auto___36059){
return (function (seq36038){
return cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36038));
});})(g__29598__auto___36059))
;


var g__29598__auto___36063 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.gen.alpha.any_printable = ((function (g__29598__auto___36063){
return (function cljs$spec$gen$alpha$any_printable(var_args){
var args__29499__auto__ = [];
var len__29492__auto___36064 = arguments.length;
var i__29493__auto___36065 = (0);
while(true){
if((i__29493__auto___36065 < len__29492__auto___36064)){
args__29499__auto__.push((arguments[i__29493__auto___36065]));

var G__36066 = (i__29493__auto___36065 + (1));
i__29493__auto___36065 = G__36066;
continue;
} else {
}
break;
}

var argseq__29500__auto__ = ((((0) < args__29499__auto__.length))?(new cljs.core.IndexedSeq(args__29499__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__29500__auto__);
});})(g__29598__auto___36063))
;

cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29598__auto___36063){
return (function (args){
return cljs.core.deref.call(null,g__29598__auto___36063);
});})(g__29598__auto___36063))
;

cljs.spec.gen.alpha.any_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.any_printable.cljs$lang$applyTo = ((function (g__29598__auto___36063){
return (function (seq36039){
return cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36039));
});})(g__29598__auto___36063))
;


var g__29598__auto___36067 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.gen.alpha.boolean$ = ((function (g__29598__auto___36067){
return (function cljs$spec$gen$alpha$boolean(var_args){
var args__29499__auto__ = [];
var len__29492__auto___36068 = arguments.length;
var i__29493__auto___36069 = (0);
while(true){
if((i__29493__auto___36069 < len__29492__auto___36068)){
args__29499__auto__.push((arguments[i__29493__auto___36069]));

var G__36070 = (i__29493__auto___36069 + (1));
i__29493__auto___36069 = G__36070;
continue;
} else {
}
break;
}

var argseq__29500__auto__ = ((((0) < args__29499__auto__.length))?(new cljs.core.IndexedSeq(args__29499__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__29500__auto__);
});})(g__29598__auto___36067))
;

cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29598__auto___36067){
return (function (args){
return cljs.core.deref.call(null,g__29598__auto___36067);
});})(g__29598__auto___36067))
;

cljs.spec.gen.alpha.boolean$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.boolean$.cljs$lang$applyTo = ((function (g__29598__auto___36067){
return (function (seq36040){
return cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36040));
});})(g__29598__auto___36067))
;


var g__29598__auto___36071 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')){
return clojure.test.check.generators.char$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.gen.alpha.char$ = ((function (g__29598__auto___36071){
return (function cljs$spec$gen$alpha$char(var_args){
var args__29499__auto__ = [];
var len__29492__auto___36072 = arguments.length;
var i__29493__auto___36073 = (0);
while(true){
if((i__29493__auto___36073 < len__29492__auto___36072)){
args__29499__auto__.push((arguments[i__29493__auto___36073]));

var G__36074 = (i__29493__auto___36073 + (1));
i__29493__auto___36073 = G__36074;
continue;
} else {
}
break;
}

var argseq__29500__auto__ = ((((0) < args__29499__auto__.length))?(new cljs.core.IndexedSeq(args__29499__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__29500__auto__);
});})(g__29598__auto___36071))
;

cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29598__auto___36071){
return (function (args){
return cljs.core.deref.call(null,g__29598__auto___36071);
});})(g__29598__auto___36071))
;

cljs.spec.gen.alpha.char$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char$.cljs$lang$applyTo = ((function (g__29598__auto___36071){
return (function (seq36041){
return cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36041));
});})(g__29598__auto___36071))
;


var g__29598__auto___36075 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.gen.alpha.char_alpha = ((function (g__29598__auto___36075){
return (function cljs$spec$gen$alpha$char_alpha(var_args){
var args__29499__auto__ = [];
var len__29492__auto___36076 = arguments.length;
var i__29493__auto___36077 = (0);
while(true){
if((i__29493__auto___36077 < len__29492__auto___36076)){
args__29499__auto__.push((arguments[i__29493__auto___36077]));

var G__36078 = (i__29493__auto___36077 + (1));
i__29493__auto___36077 = G__36078;
continue;
} else {
}
break;
}

var argseq__29500__auto__ = ((((0) < args__29499__auto__.length))?(new cljs.core.IndexedSeq(args__29499__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__29500__auto__);
});})(g__29598__auto___36075))
;

cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29598__auto___36075){
return (function (args){
return cljs.core.deref.call(null,g__29598__auto___36075);
});})(g__29598__auto___36075))
;

cljs.spec.gen.alpha.char_alpha.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_alpha.cljs$lang$applyTo = ((function (g__29598__auto___36075){
return (function (seq36042){
return cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36042));
});})(g__29598__auto___36075))
;


var g__29598__auto___36079 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.gen.alpha.char_alphanumeric = ((function (g__29598__auto___36079){
return (function cljs$spec$gen$alpha$char_alphanumeric(var_args){
var args__29499__auto__ = [];
var len__29492__auto___36080 = arguments.length;
var i__29493__auto___36081 = (0);
while(true){
if((i__29493__auto___36081 < len__29492__auto___36080)){
args__29499__auto__.push((arguments[i__29493__auto___36081]));

var G__36082 = (i__29493__auto___36081 + (1));
i__29493__auto___36081 = G__36082;
continue;
} else {
}
break;
}

var argseq__29500__auto__ = ((((0) < args__29499__auto__.length))?(new cljs.core.IndexedSeq(args__29499__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__29500__auto__);
});})(g__29598__auto___36079))
;

cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29598__auto___36079){
return (function (args){
return cljs.core.deref.call(null,g__29598__auto___36079);
});})(g__29598__auto___36079))
;

cljs.spec.gen.alpha.char_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_alphanumeric.cljs$lang$applyTo = ((function (g__29598__auto___36079){
return (function (seq36043){
return cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36043));
});})(g__29598__auto___36079))
;


var g__29598__auto___36083 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.gen.alpha.char_ascii = ((function (g__29598__auto___36083){
return (function cljs$spec$gen$alpha$char_ascii(var_args){
var args__29499__auto__ = [];
var len__29492__auto___36084 = arguments.length;
var i__29493__auto___36085 = (0);
while(true){
if((i__29493__auto___36085 < len__29492__auto___36084)){
args__29499__auto__.push((arguments[i__29493__auto___36085]));

var G__36086 = (i__29493__auto___36085 + (1));
i__29493__auto___36085 = G__36086;
continue;
} else {
}
break;
}

var argseq__29500__auto__ = ((((0) < args__29499__auto__.length))?(new cljs.core.IndexedSeq(args__29499__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__29500__auto__);
});})(g__29598__auto___36083))
;

cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29598__auto___36083){
return (function (args){
return cljs.core.deref.call(null,g__29598__auto___36083);
});})(g__29598__auto___36083))
;

cljs.spec.gen.alpha.char_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_ascii.cljs$lang$applyTo = ((function (g__29598__auto___36083){
return (function (seq36044){
return cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36044));
});})(g__29598__auto___36083))
;


var g__29598__auto___36087 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')){
return clojure.test.check.generators.double$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.gen.alpha.double$ = ((function (g__29598__auto___36087){
return (function cljs$spec$gen$alpha$double(var_args){
var args__29499__auto__ = [];
var len__29492__auto___36088 = arguments.length;
var i__29493__auto___36089 = (0);
while(true){
if((i__29493__auto___36089 < len__29492__auto___36088)){
args__29499__auto__.push((arguments[i__29493__auto___36089]));

var G__36090 = (i__29493__auto___36089 + (1));
i__29493__auto___36089 = G__36090;
continue;
} else {
}
break;
}

var argseq__29500__auto__ = ((((0) < args__29499__auto__.length))?(new cljs.core.IndexedSeq(args__29499__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__29500__auto__);
});})(g__29598__auto___36087))
;

cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29598__auto___36087){
return (function (args){
return cljs.core.deref.call(null,g__29598__auto___36087);
});})(g__29598__auto___36087))
;

cljs.spec.gen.alpha.double$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.double$.cljs$lang$applyTo = ((function (g__29598__auto___36087){
return (function (seq36045){
return cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36045));
});})(g__29598__auto___36087))
;


var g__29598__auto___36091 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')){
return clojure.test.check.generators.int$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.gen.alpha.int$ = ((function (g__29598__auto___36091){
return (function cljs$spec$gen$alpha$int(var_args){
var args__29499__auto__ = [];
var len__29492__auto___36092 = arguments.length;
var i__29493__auto___36093 = (0);
while(true){
if((i__29493__auto___36093 < len__29492__auto___36092)){
args__29499__auto__.push((arguments[i__29493__auto___36093]));

var G__36094 = (i__29493__auto___36093 + (1));
i__29493__auto___36093 = G__36094;
continue;
} else {
}
break;
}

var argseq__29500__auto__ = ((((0) < args__29499__auto__.length))?(new cljs.core.IndexedSeq(args__29499__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__29500__auto__);
});})(g__29598__auto___36091))
;

cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29598__auto___36091){
return (function (args){
return cljs.core.deref.call(null,g__29598__auto___36091);
});})(g__29598__auto___36091))
;

cljs.spec.gen.alpha.int$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.int$.cljs$lang$applyTo = ((function (g__29598__auto___36091){
return (function (seq36046){
return cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36046));
});})(g__29598__auto___36091))
;


var g__29598__auto___36095 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')){
return clojure.test.check.generators.keyword;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.gen.alpha.keyword = ((function (g__29598__auto___36095){
return (function cljs$spec$gen$alpha$keyword(var_args){
var args__29499__auto__ = [];
var len__29492__auto___36096 = arguments.length;
var i__29493__auto___36097 = (0);
while(true){
if((i__29493__auto___36097 < len__29492__auto___36096)){
args__29499__auto__.push((arguments[i__29493__auto___36097]));

var G__36098 = (i__29493__auto___36097 + (1));
i__29493__auto___36097 = G__36098;
continue;
} else {
}
break;
}

var argseq__29500__auto__ = ((((0) < args__29499__auto__.length))?(new cljs.core.IndexedSeq(args__29499__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__29500__auto__);
});})(g__29598__auto___36095))
;

cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29598__auto___36095){
return (function (args){
return cljs.core.deref.call(null,g__29598__auto___36095);
});})(g__29598__auto___36095))
;

cljs.spec.gen.alpha.keyword.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.keyword.cljs$lang$applyTo = ((function (g__29598__auto___36095){
return (function (seq36047){
return cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36047));
});})(g__29598__auto___36095))
;


var g__29598__auto___36099 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.gen.alpha.keyword_ns = ((function (g__29598__auto___36099){
return (function cljs$spec$gen$alpha$keyword_ns(var_args){
var args__29499__auto__ = [];
var len__29492__auto___36100 = arguments.length;
var i__29493__auto___36101 = (0);
while(true){
if((i__29493__auto___36101 < len__29492__auto___36100)){
args__29499__auto__.push((arguments[i__29493__auto___36101]));

var G__36102 = (i__29493__auto___36101 + (1));
i__29493__auto___36101 = G__36102;
continue;
} else {
}
break;
}

var argseq__29500__auto__ = ((((0) < args__29499__auto__.length))?(new cljs.core.IndexedSeq(args__29499__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__29500__auto__);
});})(g__29598__auto___36099))
;

cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29598__auto___36099){
return (function (args){
return cljs.core.deref.call(null,g__29598__auto___36099);
});})(g__29598__auto___36099))
;

cljs.spec.gen.alpha.keyword_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.keyword_ns.cljs$lang$applyTo = ((function (g__29598__auto___36099){
return (function (seq36048){
return cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36048));
});})(g__29598__auto___36099))
;


var g__29598__auto___36103 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.gen.alpha.large_integer = ((function (g__29598__auto___36103){
return (function cljs$spec$gen$alpha$large_integer(var_args){
var args__29499__auto__ = [];
var len__29492__auto___36104 = arguments.length;
var i__29493__auto___36105 = (0);
while(true){
if((i__29493__auto___36105 < len__29492__auto___36104)){
args__29499__auto__.push((arguments[i__29493__auto___36105]));

var G__36106 = (i__29493__auto___36105 + (1));
i__29493__auto___36105 = G__36106;
continue;
} else {
}
break;
}

var argseq__29500__auto__ = ((((0) < args__29499__auto__.length))?(new cljs.core.IndexedSeq(args__29499__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__29500__auto__);
});})(g__29598__auto___36103))
;

cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29598__auto___36103){
return (function (args){
return cljs.core.deref.call(null,g__29598__auto___36103);
});})(g__29598__auto___36103))
;

cljs.spec.gen.alpha.large_integer.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.large_integer.cljs$lang$applyTo = ((function (g__29598__auto___36103){
return (function (seq36049){
return cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36049));
});})(g__29598__auto___36103))
;


var g__29598__auto___36107 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')){
return clojure.test.check.generators.ratio;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.gen.alpha.ratio = ((function (g__29598__auto___36107){
return (function cljs$spec$gen$alpha$ratio(var_args){
var args__29499__auto__ = [];
var len__29492__auto___36108 = arguments.length;
var i__29493__auto___36109 = (0);
while(true){
if((i__29493__auto___36109 < len__29492__auto___36108)){
args__29499__auto__.push((arguments[i__29493__auto___36109]));

var G__36110 = (i__29493__auto___36109 + (1));
i__29493__auto___36109 = G__36110;
continue;
} else {
}
break;
}

var argseq__29500__auto__ = ((((0) < args__29499__auto__.length))?(new cljs.core.IndexedSeq(args__29499__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__29500__auto__);
});})(g__29598__auto___36107))
;

cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29598__auto___36107){
return (function (args){
return cljs.core.deref.call(null,g__29598__auto___36107);
});})(g__29598__auto___36107))
;

cljs.spec.gen.alpha.ratio.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.ratio.cljs$lang$applyTo = ((function (g__29598__auto___36107){
return (function (seq36050){
return cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36050));
});})(g__29598__auto___36107))
;


var g__29598__auto___36111 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.gen.alpha.simple_type = ((function (g__29598__auto___36111){
return (function cljs$spec$gen$alpha$simple_type(var_args){
var args__29499__auto__ = [];
var len__29492__auto___36112 = arguments.length;
var i__29493__auto___36113 = (0);
while(true){
if((i__29493__auto___36113 < len__29492__auto___36112)){
args__29499__auto__.push((arguments[i__29493__auto___36113]));

var G__36114 = (i__29493__auto___36113 + (1));
i__29493__auto___36113 = G__36114;
continue;
} else {
}
break;
}

var argseq__29500__auto__ = ((((0) < args__29499__auto__.length))?(new cljs.core.IndexedSeq(args__29499__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__29500__auto__);
});})(g__29598__auto___36111))
;

cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29598__auto___36111){
return (function (args){
return cljs.core.deref.call(null,g__29598__auto___36111);
});})(g__29598__auto___36111))
;

cljs.spec.gen.alpha.simple_type.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.simple_type.cljs$lang$applyTo = ((function (g__29598__auto___36111){
return (function (seq36051){
return cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36051));
});})(g__29598__auto___36111))
;


var g__29598__auto___36115 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.gen.alpha.simple_type_printable = ((function (g__29598__auto___36115){
return (function cljs$spec$gen$alpha$simple_type_printable(var_args){
var args__29499__auto__ = [];
var len__29492__auto___36116 = arguments.length;
var i__29493__auto___36117 = (0);
while(true){
if((i__29493__auto___36117 < len__29492__auto___36116)){
args__29499__auto__.push((arguments[i__29493__auto___36117]));

var G__36118 = (i__29493__auto___36117 + (1));
i__29493__auto___36117 = G__36118;
continue;
} else {
}
break;
}

var argseq__29500__auto__ = ((((0) < args__29499__auto__.length))?(new cljs.core.IndexedSeq(args__29499__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__29500__auto__);
});})(g__29598__auto___36115))
;

cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29598__auto___36115){
return (function (args){
return cljs.core.deref.call(null,g__29598__auto___36115);
});})(g__29598__auto___36115))
;

cljs.spec.gen.alpha.simple_type_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.simple_type_printable.cljs$lang$applyTo = ((function (g__29598__auto___36115){
return (function (seq36052){
return cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36052));
});})(g__29598__auto___36115))
;


var g__29598__auto___36119 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')){
return clojure.test.check.generators.string;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.gen.alpha.string = ((function (g__29598__auto___36119){
return (function cljs$spec$gen$alpha$string(var_args){
var args__29499__auto__ = [];
var len__29492__auto___36120 = arguments.length;
var i__29493__auto___36121 = (0);
while(true){
if((i__29493__auto___36121 < len__29492__auto___36120)){
args__29499__auto__.push((arguments[i__29493__auto___36121]));

var G__36122 = (i__29493__auto___36121 + (1));
i__29493__auto___36121 = G__36122;
continue;
} else {
}
break;
}

var argseq__29500__auto__ = ((((0) < args__29499__auto__.length))?(new cljs.core.IndexedSeq(args__29499__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic(argseq__29500__auto__);
});})(g__29598__auto___36119))
;

cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29598__auto___36119){
return (function (args){
return cljs.core.deref.call(null,g__29598__auto___36119);
});})(g__29598__auto___36119))
;

cljs.spec.gen.alpha.string.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string.cljs$lang$applyTo = ((function (g__29598__auto___36119){
return (function (seq36053){
return cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36053));
});})(g__29598__auto___36119))
;


var g__29598__auto___36123 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.gen.alpha.string_ascii = ((function (g__29598__auto___36123){
return (function cljs$spec$gen$alpha$string_ascii(var_args){
var args__29499__auto__ = [];
var len__29492__auto___36124 = arguments.length;
var i__29493__auto___36125 = (0);
while(true){
if((i__29493__auto___36125 < len__29492__auto___36124)){
args__29499__auto__.push((arguments[i__29493__auto___36125]));

var G__36126 = (i__29493__auto___36125 + (1));
i__29493__auto___36125 = G__36126;
continue;
} else {
}
break;
}

var argseq__29500__auto__ = ((((0) < args__29499__auto__.length))?(new cljs.core.IndexedSeq(args__29499__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__29500__auto__);
});})(g__29598__auto___36123))
;

cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29598__auto___36123){
return (function (args){
return cljs.core.deref.call(null,g__29598__auto___36123);
});})(g__29598__auto___36123))
;

cljs.spec.gen.alpha.string_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string_ascii.cljs$lang$applyTo = ((function (g__29598__auto___36123){
return (function (seq36054){
return cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36054));
});})(g__29598__auto___36123))
;


var g__29598__auto___36127 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.gen.alpha.string_alphanumeric = ((function (g__29598__auto___36127){
return (function cljs$spec$gen$alpha$string_alphanumeric(var_args){
var args__29499__auto__ = [];
var len__29492__auto___36128 = arguments.length;
var i__29493__auto___36129 = (0);
while(true){
if((i__29493__auto___36129 < len__29492__auto___36128)){
args__29499__auto__.push((arguments[i__29493__auto___36129]));

var G__36130 = (i__29493__auto___36129 + (1));
i__29493__auto___36129 = G__36130;
continue;
} else {
}
break;
}

var argseq__29500__auto__ = ((((0) < args__29499__auto__.length))?(new cljs.core.IndexedSeq(args__29499__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__29500__auto__);
});})(g__29598__auto___36127))
;

cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29598__auto___36127){
return (function (args){
return cljs.core.deref.call(null,g__29598__auto___36127);
});})(g__29598__auto___36127))
;

cljs.spec.gen.alpha.string_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string_alphanumeric.cljs$lang$applyTo = ((function (g__29598__auto___36127){
return (function (seq36055){
return cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36055));
});})(g__29598__auto___36127))
;


var g__29598__auto___36131 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')){
return clojure.test.check.generators.symbol;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.gen.alpha.symbol = ((function (g__29598__auto___36131){
return (function cljs$spec$gen$alpha$symbol(var_args){
var args__29499__auto__ = [];
var len__29492__auto___36132 = arguments.length;
var i__29493__auto___36133 = (0);
while(true){
if((i__29493__auto___36133 < len__29492__auto___36132)){
args__29499__auto__.push((arguments[i__29493__auto___36133]));

var G__36134 = (i__29493__auto___36133 + (1));
i__29493__auto___36133 = G__36134;
continue;
} else {
}
break;
}

var argseq__29500__auto__ = ((((0) < args__29499__auto__.length))?(new cljs.core.IndexedSeq(args__29499__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__29500__auto__);
});})(g__29598__auto___36131))
;

cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29598__auto___36131){
return (function (args){
return cljs.core.deref.call(null,g__29598__auto___36131);
});})(g__29598__auto___36131))
;

cljs.spec.gen.alpha.symbol.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.symbol.cljs$lang$applyTo = ((function (g__29598__auto___36131){
return (function (seq36056){
return cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36056));
});})(g__29598__auto___36131))
;


var g__29598__auto___36135 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.gen.alpha.symbol_ns = ((function (g__29598__auto___36135){
return (function cljs$spec$gen$alpha$symbol_ns(var_args){
var args__29499__auto__ = [];
var len__29492__auto___36136 = arguments.length;
var i__29493__auto___36137 = (0);
while(true){
if((i__29493__auto___36137 < len__29492__auto___36136)){
args__29499__auto__.push((arguments[i__29493__auto___36137]));

var G__36138 = (i__29493__auto___36137 + (1));
i__29493__auto___36137 = G__36138;
continue;
} else {
}
break;
}

var argseq__29500__auto__ = ((((0) < args__29499__auto__.length))?(new cljs.core.IndexedSeq(args__29499__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__29500__auto__);
});})(g__29598__auto___36135))
;

cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29598__auto___36135){
return (function (args){
return cljs.core.deref.call(null,g__29598__auto___36135);
});})(g__29598__auto___36135))
;

cljs.spec.gen.alpha.symbol_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.symbol_ns.cljs$lang$applyTo = ((function (g__29598__auto___36135){
return (function (seq36057){
return cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36057));
});})(g__29598__auto___36135))
;


var g__29598__auto___36139 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')){
return clojure.test.check.generators.uuid;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.gen.alpha.uuid = ((function (g__29598__auto___36139){
return (function cljs$spec$gen$alpha$uuid(var_args){
var args__29499__auto__ = [];
var len__29492__auto___36140 = arguments.length;
var i__29493__auto___36141 = (0);
while(true){
if((i__29493__auto___36141 < len__29492__auto___36140)){
args__29499__auto__.push((arguments[i__29493__auto___36141]));

var G__36142 = (i__29493__auto___36141 + (1));
i__29493__auto___36141 = G__36142;
continue;
} else {
}
break;
}

var argseq__29500__auto__ = ((((0) < args__29499__auto__.length))?(new cljs.core.IndexedSeq(args__29499__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__29500__auto__);
});})(g__29598__auto___36139))
;

cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29598__auto___36139){
return (function (args){
return cljs.core.deref.call(null,g__29598__auto___36139);
});})(g__29598__auto___36139))
;

cljs.spec.gen.alpha.uuid.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.uuid.cljs$lang$applyTo = ((function (g__29598__auto___36139){
return (function (seq36058){
return cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36058));
});})(g__29598__auto___36139))
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.gen.alpha.cat = (function cljs$spec$gen$alpha$cat(var_args){
var args__29499__auto__ = [];
var len__29492__auto___36145 = arguments.length;
var i__29493__auto___36146 = (0);
while(true){
if((i__29493__auto___36146 < len__29492__auto___36145)){
args__29499__auto__.push((arguments[i__29493__auto___36146]));

var G__36147 = (i__29493__auto___36146 + (1));
i__29493__auto___36146 = G__36147;
continue;
} else {
}
break;
}

var argseq__29500__auto__ = ((((0) < args__29499__auto__.length))?(new cljs.core.IndexedSeq(args__29499__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__29500__auto__);
});

cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.gen.alpha.fmap.call(null,(function (p1__36143_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__36143_SHARP_);
}),cljs.core.apply.call(null,cljs.spec.gen.alpha.tuple,gens));
});

cljs.spec.gen.alpha.cat.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.cat.cljs$lang$applyTo = (function (seq36144){
return cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36144));
});

cljs.spec.gen.alpha.qualified_QMARK_ = (function cljs$spec$gen$alpha$qualified_QMARK_(ident){
return !((cljs.core.namespace.call(null,ident) == null));
});
cljs.spec.gen.alpha.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.gen.alpha.simple_type_printable.call(null);
return cljs.core.PersistentHashMap.fromArrays([cljs.core.qualified_keyword_QMARK_,cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.any_QMARK_,cljs.core.boolean_QMARK_,cljs.core.char_QMARK_,cljs.core.inst_QMARK_,cljs.core.simple_symbol_QMARK_,cljs.core.sequential_QMARK_,cljs.core.float_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.double_QMARK_,cljs.core.int_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.indexed_QMARK_,cljs.core.zero_QMARK_,cljs.core.simple_keyword_QMARK_,cljs.core.neg_int_QMARK_,cljs.core.nil_QMARK_,cljs.core.ident_QMARK_,cljs.core.qualified_ident_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.nat_int_QMARK_,cljs.core.pos_int_QMARK_,cljs.core.uuid_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.simple_ident_QMARK_,cljs.core.number_QMARK_,cljs.core.qualified_symbol_QMARK_,cljs.core.seqable_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.gen.alpha.such_that.call(null,cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.keyword_ns.call(null)),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.return$.call(null,null),cljs.spec.gen.alpha.any_printable.call(null)], null)),cljs.spec.gen.alpha.boolean$.call(null),cljs.spec.gen.alpha.char$.call(null),cljs.spec.gen.alpha.fmap.call(null,((function (simple){
return (function (p1__36148_SHARP_){
return (new Date(p1__36148_SHARP_));
});})(simple))
,cljs.spec.gen.alpha.large_integer.call(null)),cljs.spec.gen.alpha.symbol.call(null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple)], null)),cljs.spec.gen.alpha.double$.call(null),cljs.spec.gen.alpha.set.call(null,simple),cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.elements.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.List.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentHashSet.EMPTY], null)),cljs.spec.gen.alpha.string_alphanumeric.call(null),cljs.spec.gen.alpha.double$.call(null),cljs.spec.gen.alpha.large_integer.call(null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.vector.call(null,simple)], null)),cljs.spec.gen.alpha.keyword_ns.call(null),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.return$.call(null,(0)),cljs.spec.gen.alpha.keyword.call(null),cljs.spec.gen.alpha.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max","max",61366548),(-1)], null)),cljs.spec.gen.alpha.return$.call(null,null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.keyword_ns.call(null),cljs.spec.gen.alpha.symbol_ns.call(null)], null)),cljs.spec.gen.alpha.such_that.call(null,cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.keyword_ns.call(null),cljs.spec.gen.alpha.symbol_ns.call(null)], null))),cljs.spec.gen.alpha.return$.call(null,true),cljs.spec.gen.alpha.large_integer.call(null),cljs.spec.gen.alpha.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(0)], null)),cljs.spec.gen.alpha.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(1)], null)),cljs.spec.gen.alpha.uuid.call(null),cljs.spec.gen.alpha.return$.call(null,false),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.keyword.call(null),cljs.spec.gen.alpha.symbol.call(null)], null)),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.large_integer.call(null),cljs.spec.gen.alpha.double$.call(null)], null)),cljs.spec.gen.alpha.such_that.call(null,cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.symbol_ns.call(null)),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.return$.call(null,null),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.set.call(null,simple),cljs.spec.gen.alpha.string_alphanumeric.call(null)], null)),cljs.spec.gen.alpha.symbol_ns.call(null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.set.call(null,simple)], null))]);
}),null));
/**
 * Given a predicate, returns a built-in generator if one exists.
 */
cljs.spec.gen.alpha.gen_for_pred = (function cljs$spec$gen$alpha$gen_for_pred(pred){
if(cljs.core.set_QMARK_.call(null,pred)){
return cljs.spec.gen.alpha.elements.call(null,pred);
} else {
return cljs.core.get.call(null,cljs.core.deref.call(null,cljs.spec.gen.alpha.gen_builtins),pred);
}
});

//# sourceMappingURL=alpha.js.map?rel=1530314317519
