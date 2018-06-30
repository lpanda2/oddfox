// Compiled by ClojureScript 1.9.908 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('figwheel.client.utils');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.object');
goog.require('goog.net.jsloader');
goog.require('goog.html.legacyconversions');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.core.async');
goog.require('goog.async.Deferred');
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.on_cssload_custom_event = (function figwheel$client$file_reloading$on_cssload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.css-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__28323__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__28323__auto__){
return or__28323__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return goog.object.get(goog.dependencies_.nameToPath,ns);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return goog.object.get(goog.dependencies_.written,figwheel.client.file_reloading.name__GT_path.call(null,ns));
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__28323__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["cljs.nodejs",null,"goog",null,"cljs.core",null], null), null).call(null,name);
if(cljs.core.truth_(or__28323__auto__)){
return or__28323__auto__;
} else {
var or__28323__auto____$1 = goog.string.startsWith("clojure.",name);
if(cljs.core.truth_(or__28323__auto____$1)){
return or__28323__auto____$1;
} else {
return goog.string.startsWith("goog.",name);
}
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__35261_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__35261_SHARP_));
}),goog.object.getKeys(goog.object.get(goog.dependencies_.requires,figwheel.client.file_reloading.name__GT_path.call(null,ns)))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([name]));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([parent_ns]));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__35262 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__35263 = null;
var count__35264 = (0);
var i__35265 = (0);
while(true){
if((i__35265 < count__35264)){
var n = cljs.core._nth.call(null,chunk__35263,i__35265);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__35266 = seq__35262;
var G__35267 = chunk__35263;
var G__35268 = count__35264;
var G__35269 = (i__35265 + (1));
seq__35262 = G__35266;
chunk__35263 = G__35267;
count__35264 = G__35268;
i__35265 = G__35269;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__35262);
if(temp__4657__auto__){
var seq__35262__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35262__$1)){
var c__29162__auto__ = cljs.core.chunk_first.call(null,seq__35262__$1);
var G__35270 = cljs.core.chunk_rest.call(null,seq__35262__$1);
var G__35271 = c__29162__auto__;
var G__35272 = cljs.core.count.call(null,c__29162__auto__);
var G__35273 = (0);
seq__35262 = G__35270;
chunk__35263 = G__35271;
count__35264 = G__35272;
i__35265 = G__35273;
continue;
} else {
var n = cljs.core.first.call(null,seq__35262__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__35274 = cljs.core.next.call(null,seq__35262__$1);
var G__35275 = null;
var G__35276 = (0);
var G__35277 = (0);
seq__35262 = G__35274;
chunk__35263 = G__35275;
count__35264 = G__35276;
i__35265 = G__35277;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.in_upper_level_QMARK_ = (function figwheel$client$file_reloading$in_upper_level_QMARK_(topo_state,current_depth,dep){
return cljs.core.some.call(null,(function (p__35278){
var vec__35279 = p__35278;
var _ = cljs.core.nth.call(null,vec__35279,(0),null);
var v = cljs.core.nth.call(null,vec__35279,(1),null);
var and__28311__auto__ = v;
if(cljs.core.truth_(and__28311__auto__)){
return v.call(null,dep);
} else {
return and__28311__auto__;
}
}),cljs.core.filter.call(null,(function (p__35282){
var vec__35283 = p__35282;
var k = cljs.core.nth.call(null,vec__35283,(0),null);
var v = cljs.core.nth.call(null,vec__35283,(1),null);
return (k > current_depth);
}),topo_state));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__35295_35303 = cljs.core.seq.call(null,deps);
var chunk__35296_35304 = null;
var count__35297_35305 = (0);
var i__35298_35306 = (0);
while(true){
if((i__35298_35306 < count__35297_35305)){
var dep_35307 = cljs.core._nth.call(null,chunk__35296_35304,i__35298_35306);
if(cljs.core.truth_((function (){var and__28311__auto__ = dep_35307;
if(cljs.core.truth_(and__28311__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_35307));
} else {
return and__28311__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_35307,(depth + (1)),state);
} else {
}

var G__35308 = seq__35295_35303;
var G__35309 = chunk__35296_35304;
var G__35310 = count__35297_35305;
var G__35311 = (i__35298_35306 + (1));
seq__35295_35303 = G__35308;
chunk__35296_35304 = G__35309;
count__35297_35305 = G__35310;
i__35298_35306 = G__35311;
continue;
} else {
var temp__4657__auto___35312 = cljs.core.seq.call(null,seq__35295_35303);
if(temp__4657__auto___35312){
var seq__35295_35313__$1 = temp__4657__auto___35312;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35295_35313__$1)){
var c__29162__auto___35314 = cljs.core.chunk_first.call(null,seq__35295_35313__$1);
var G__35315 = cljs.core.chunk_rest.call(null,seq__35295_35313__$1);
var G__35316 = c__29162__auto___35314;
var G__35317 = cljs.core.count.call(null,c__29162__auto___35314);
var G__35318 = (0);
seq__35295_35303 = G__35315;
chunk__35296_35304 = G__35316;
count__35297_35305 = G__35317;
i__35298_35306 = G__35318;
continue;
} else {
var dep_35319 = cljs.core.first.call(null,seq__35295_35313__$1);
if(cljs.core.truth_((function (){var and__28311__auto__ = dep_35319;
if(cljs.core.truth_(and__28311__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_35319));
} else {
return and__28311__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_35319,(depth + (1)),state);
} else {
}

var G__35320 = cljs.core.next.call(null,seq__35295_35313__$1);
var G__35321 = null;
var G__35322 = (0);
var G__35323 = (0);
seq__35295_35303 = G__35320;
chunk__35296_35304 = G__35321;
count__35297_35305 = G__35322;
i__35298_35306 = G__35323;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__35299){
var vec__35300 = p__35299;
var seq__35301 = cljs.core.seq.call(null,vec__35300);
var first__35302 = cljs.core.first.call(null,seq__35301);
var seq__35301__$1 = cljs.core.next.call(null,seq__35301);
var x = first__35302;
var xs = seq__35301__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__35300,seq__35301,first__35302,seq__35301__$1,x,xs,get_deps__$1){
return (function (p1__35286_SHARP_){
return clojure.set.difference.call(null,p1__35286_SHARP_,x);
});})(vec__35300,seq__35301,first__35302,seq__35301__$1,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,figwheel.client.file_reloading.immutable_ns_QMARK_),cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss)))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__35324 = cljs.core.seq.call(null,provides);
var chunk__35325 = null;
var count__35326 = (0);
var i__35327 = (0);
while(true){
if((i__35327 < count__35326)){
var prov = cljs.core._nth.call(null,chunk__35325,i__35327);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__35328_35336 = cljs.core.seq.call(null,requires);
var chunk__35329_35337 = null;
var count__35330_35338 = (0);
var i__35331_35339 = (0);
while(true){
if((i__35331_35339 < count__35330_35338)){
var req_35340 = cljs.core._nth.call(null,chunk__35329_35337,i__35331_35339);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_35340,prov);

var G__35341 = seq__35328_35336;
var G__35342 = chunk__35329_35337;
var G__35343 = count__35330_35338;
var G__35344 = (i__35331_35339 + (1));
seq__35328_35336 = G__35341;
chunk__35329_35337 = G__35342;
count__35330_35338 = G__35343;
i__35331_35339 = G__35344;
continue;
} else {
var temp__4657__auto___35345 = cljs.core.seq.call(null,seq__35328_35336);
if(temp__4657__auto___35345){
var seq__35328_35346__$1 = temp__4657__auto___35345;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35328_35346__$1)){
var c__29162__auto___35347 = cljs.core.chunk_first.call(null,seq__35328_35346__$1);
var G__35348 = cljs.core.chunk_rest.call(null,seq__35328_35346__$1);
var G__35349 = c__29162__auto___35347;
var G__35350 = cljs.core.count.call(null,c__29162__auto___35347);
var G__35351 = (0);
seq__35328_35336 = G__35348;
chunk__35329_35337 = G__35349;
count__35330_35338 = G__35350;
i__35331_35339 = G__35351;
continue;
} else {
var req_35352 = cljs.core.first.call(null,seq__35328_35346__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_35352,prov);

var G__35353 = cljs.core.next.call(null,seq__35328_35346__$1);
var G__35354 = null;
var G__35355 = (0);
var G__35356 = (0);
seq__35328_35336 = G__35353;
chunk__35329_35337 = G__35354;
count__35330_35338 = G__35355;
i__35331_35339 = G__35356;
continue;
}
} else {
}
}
break;
}

var G__35357 = seq__35324;
var G__35358 = chunk__35325;
var G__35359 = count__35326;
var G__35360 = (i__35327 + (1));
seq__35324 = G__35357;
chunk__35325 = G__35358;
count__35326 = G__35359;
i__35327 = G__35360;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__35324);
if(temp__4657__auto__){
var seq__35324__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35324__$1)){
var c__29162__auto__ = cljs.core.chunk_first.call(null,seq__35324__$1);
var G__35361 = cljs.core.chunk_rest.call(null,seq__35324__$1);
var G__35362 = c__29162__auto__;
var G__35363 = cljs.core.count.call(null,c__29162__auto__);
var G__35364 = (0);
seq__35324 = G__35361;
chunk__35325 = G__35362;
count__35326 = G__35363;
i__35327 = G__35364;
continue;
} else {
var prov = cljs.core.first.call(null,seq__35324__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__35332_35365 = cljs.core.seq.call(null,requires);
var chunk__35333_35366 = null;
var count__35334_35367 = (0);
var i__35335_35368 = (0);
while(true){
if((i__35335_35368 < count__35334_35367)){
var req_35369 = cljs.core._nth.call(null,chunk__35333_35366,i__35335_35368);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_35369,prov);

var G__35370 = seq__35332_35365;
var G__35371 = chunk__35333_35366;
var G__35372 = count__35334_35367;
var G__35373 = (i__35335_35368 + (1));
seq__35332_35365 = G__35370;
chunk__35333_35366 = G__35371;
count__35334_35367 = G__35372;
i__35335_35368 = G__35373;
continue;
} else {
var temp__4657__auto___35374__$1 = cljs.core.seq.call(null,seq__35332_35365);
if(temp__4657__auto___35374__$1){
var seq__35332_35375__$1 = temp__4657__auto___35374__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35332_35375__$1)){
var c__29162__auto___35376 = cljs.core.chunk_first.call(null,seq__35332_35375__$1);
var G__35377 = cljs.core.chunk_rest.call(null,seq__35332_35375__$1);
var G__35378 = c__29162__auto___35376;
var G__35379 = cljs.core.count.call(null,c__29162__auto___35376);
var G__35380 = (0);
seq__35332_35365 = G__35377;
chunk__35333_35366 = G__35378;
count__35334_35367 = G__35379;
i__35335_35368 = G__35380;
continue;
} else {
var req_35381 = cljs.core.first.call(null,seq__35332_35375__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_35381,prov);

var G__35382 = cljs.core.next.call(null,seq__35332_35375__$1);
var G__35383 = null;
var G__35384 = (0);
var G__35385 = (0);
seq__35332_35365 = G__35382;
chunk__35333_35366 = G__35383;
count__35334_35367 = G__35384;
i__35335_35368 = G__35385;
continue;
}
} else {
}
}
break;
}

var G__35386 = cljs.core.next.call(null,seq__35324__$1);
var G__35387 = null;
var G__35388 = (0);
var G__35389 = (0);
seq__35324 = G__35386;
chunk__35325 = G__35387;
count__35326 = G__35388;
i__35327 = G__35389;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel.client.file_reloading.figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__35390_35394 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__35391_35395 = null;
var count__35392_35396 = (0);
var i__35393_35397 = (0);
while(true){
if((i__35393_35397 < count__35392_35396)){
var ns_35398 = cljs.core._nth.call(null,chunk__35391_35395,i__35393_35397);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_35398);

var G__35399 = seq__35390_35394;
var G__35400 = chunk__35391_35395;
var G__35401 = count__35392_35396;
var G__35402 = (i__35393_35397 + (1));
seq__35390_35394 = G__35399;
chunk__35391_35395 = G__35400;
count__35392_35396 = G__35401;
i__35393_35397 = G__35402;
continue;
} else {
var temp__4657__auto___35403 = cljs.core.seq.call(null,seq__35390_35394);
if(temp__4657__auto___35403){
var seq__35390_35404__$1 = temp__4657__auto___35403;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35390_35404__$1)){
var c__29162__auto___35405 = cljs.core.chunk_first.call(null,seq__35390_35404__$1);
var G__35406 = cljs.core.chunk_rest.call(null,seq__35390_35404__$1);
var G__35407 = c__29162__auto___35405;
var G__35408 = cljs.core.count.call(null,c__29162__auto___35405);
var G__35409 = (0);
seq__35390_35394 = G__35406;
chunk__35391_35395 = G__35407;
count__35392_35396 = G__35408;
i__35393_35397 = G__35409;
continue;
} else {
var ns_35410 = cljs.core.first.call(null,seq__35390_35404__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_35410);

var G__35411 = cljs.core.next.call(null,seq__35390_35404__$1);
var G__35412 = null;
var G__35413 = (0);
var G__35414 = (0);
seq__35390_35394 = G__35411;
chunk__35391_35395 = G__35412;
count__35392_35396 = G__35413;
i__35393_35397 = G__35414;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__28323__auto__ = goog.require__;
if(cljs.core.truth_(or__28323__auto__)){
return or__28323__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__35415__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__35415 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__35416__i = 0, G__35416__a = new Array(arguments.length -  0);
while (G__35416__i < G__35416__a.length) {G__35416__a[G__35416__i] = arguments[G__35416__i + 0]; ++G__35416__i;}
  args = new cljs.core.IndexedSeq(G__35416__a,0,null);
} 
return G__35415__delegate.call(this,args);};
G__35415.cljs$lang$maxFixedArity = 0;
G__35415.cljs$lang$applyTo = (function (arglist__35417){
var args = cljs.core.seq(arglist__35417);
return G__35415__delegate(args);
});
G__35415.cljs$core$IFn$_invoke$arity$variadic = G__35415__delegate;
return G__35415;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
return (
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
)
;
}
});
figwheel.client.file_reloading.gloader = ((typeof goog.net.jsloader.safeLoad !== 'undefined')?(function (p1__35418_SHARP_,p2__35419_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__35418_SHARP_)].join('')),p2__35419_SHARP_);
}):((typeof goog.net.jsloader.load !== 'undefined')?(function (p1__35420_SHARP_,p2__35421_SHARP_){
return goog.net.jsloader.load([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__35420_SHARP_)].join(''),p2__35421_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__35422 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__35422.addCallback(((function (G__35422){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(G__35422))
);

G__35422.addErrback(((function (G__35422){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(G__35422))
);

return G__35422;
});
figwheel.client.file_reloading.write_script_tag_import = figwheel.client.file_reloading.reload_file_in_html_env;
goog.exportSymbol('figwheel.client.file_reloading.write_script_tag_import', figwheel.client.file_reloading.write_script_tag_import);
figwheel.client.file_reloading.worker_import_script = (function figwheel$client$file_reloading$worker_import_script(request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e35423){if((e35423 instanceof Error)){
var e = e35423;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e35423;

}
}})());
});
goog.exportSymbol('figwheel.client.file_reloading.worker_import_script', figwheel.client.file_reloading.worker_import_script);
figwheel.client.file_reloading.create_node_script_import_fn = (function figwheel$client$file_reloading$create_node_script_import_fn(){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e35424){if((e35424 instanceof Error)){
var e = e35424;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e35424;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path))
});
goog.exportSymbol('figwheel.client.file_reloading.create_node_script_import_fn', figwheel.client.file_reloading.create_node_script_import_fn);
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__35425 = cljs.core._EQ_;
var expr__35426 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__35425.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__35426))){
return figwheel.client.file_reloading.create_node_script_import_fn.call(null);
} else {
if(cljs.core.truth_(pred__35425.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__35426))){
return figwheel.client.file_reloading.write_script_tag_import;
} else {
if(cljs.core.truth_(pred__35425.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__35426))){
return figwheel.client.file_reloading.worker_import_script;
} else {
return ((function (pred__35425,expr__35426){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__35425,expr__35426))
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__35428,callback){
var map__35429 = p__35428;
var map__35429__$1 = ((((!((map__35429 == null)))?((((map__35429.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35429.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35429):map__35429);
var file_msg = map__35429__$1;
var request_url = cljs.core.get.call(null,map__35429__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return (function (){var or__28323__auto__ = goog.object.get(goog.global,"FIGWHEEL_IMPORT_SCRIPT");
if(cljs.core.truth_(or__28323__auto__)){
return or__28323__auto__;
} else {
return figwheel.client.file_reloading.reload_file_STAR_;
}
})().call(null,request_url,((function (map__35429,map__35429__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__35429,map__35429__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__32091__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32091__auto__){
return (function (){
var f__32092__auto__ = (function (){var switch__32003__auto__ = ((function (c__32091__auto__){
return (function (state_35469){
var state_val_35470 = (state_35469[(1)]);
if((state_val_35470 === (7))){
var inst_35465 = (state_35469[(2)]);
var state_35469__$1 = state_35469;
var statearr_35471_35498 = state_35469__$1;
(statearr_35471_35498[(2)] = inst_35465);

(statearr_35471_35498[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35470 === (1))){
var state_35469__$1 = state_35469;
var statearr_35472_35499 = state_35469__$1;
(statearr_35472_35499[(2)] = null);

(statearr_35472_35499[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35470 === (4))){
var inst_35433 = (state_35469[(7)]);
var inst_35433__$1 = (state_35469[(2)]);
var state_35469__$1 = (function (){var statearr_35473 = state_35469;
(statearr_35473[(7)] = inst_35433__$1);

return statearr_35473;
})();
if(cljs.core.truth_(inst_35433__$1)){
var statearr_35474_35500 = state_35469__$1;
(statearr_35474_35500[(1)] = (5));

} else {
var statearr_35475_35501 = state_35469__$1;
(statearr_35475_35501[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35470 === (15))){
var inst_35450 = (state_35469[(8)]);
var inst_35447 = (state_35469[(9)]);
var inst_35452 = inst_35450.call(null,inst_35447);
var state_35469__$1 = state_35469;
var statearr_35476_35502 = state_35469__$1;
(statearr_35476_35502[(2)] = inst_35452);

(statearr_35476_35502[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35470 === (13))){
var inst_35459 = (state_35469[(2)]);
var state_35469__$1 = state_35469;
var statearr_35477_35503 = state_35469__$1;
(statearr_35477_35503[(2)] = inst_35459);

(statearr_35477_35503[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35470 === (6))){
var state_35469__$1 = state_35469;
var statearr_35478_35504 = state_35469__$1;
(statearr_35478_35504[(2)] = null);

(statearr_35478_35504[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35470 === (17))){
var inst_35456 = (state_35469[(2)]);
var state_35469__$1 = state_35469;
var statearr_35479_35505 = state_35469__$1;
(statearr_35479_35505[(2)] = inst_35456);

(statearr_35479_35505[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35470 === (3))){
var inst_35467 = (state_35469[(2)]);
var state_35469__$1 = state_35469;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35469__$1,inst_35467);
} else {
if((state_val_35470 === (12))){
var state_35469__$1 = state_35469;
var statearr_35480_35506 = state_35469__$1;
(statearr_35480_35506[(2)] = null);

(statearr_35480_35506[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35470 === (2))){
var state_35469__$1 = state_35469;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35469__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_35470 === (11))){
var inst_35438 = (state_35469[(10)]);
var inst_35445 = figwheel.client.file_reloading.blocking_load.call(null,inst_35438);
var state_35469__$1 = state_35469;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35469__$1,(14),inst_35445);
} else {
if((state_val_35470 === (9))){
var inst_35438 = (state_35469[(10)]);
var state_35469__$1 = state_35469;
if(cljs.core.truth_(inst_35438)){
var statearr_35481_35507 = state_35469__$1;
(statearr_35481_35507[(1)] = (11));

} else {
var statearr_35482_35508 = state_35469__$1;
(statearr_35482_35508[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35470 === (5))){
var inst_35439 = (state_35469[(11)]);
var inst_35433 = (state_35469[(7)]);
var inst_35438 = cljs.core.nth.call(null,inst_35433,(0),null);
var inst_35439__$1 = cljs.core.nth.call(null,inst_35433,(1),null);
var state_35469__$1 = (function (){var statearr_35483 = state_35469;
(statearr_35483[(11)] = inst_35439__$1);

(statearr_35483[(10)] = inst_35438);

return statearr_35483;
})();
if(cljs.core.truth_(inst_35439__$1)){
var statearr_35484_35509 = state_35469__$1;
(statearr_35484_35509[(1)] = (8));

} else {
var statearr_35485_35510 = state_35469__$1;
(statearr_35485_35510[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35470 === (14))){
var inst_35450 = (state_35469[(8)]);
var inst_35438 = (state_35469[(10)]);
var inst_35447 = (state_35469[(2)]);
var inst_35448 = console.log("Loading!",inst_35438);
var inst_35449 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_35450__$1 = cljs.core.get.call(null,inst_35449,inst_35438);
var state_35469__$1 = (function (){var statearr_35486 = state_35469;
(statearr_35486[(8)] = inst_35450__$1);

(statearr_35486[(9)] = inst_35447);

(statearr_35486[(12)] = inst_35448);

return statearr_35486;
})();
if(cljs.core.truth_(inst_35450__$1)){
var statearr_35487_35511 = state_35469__$1;
(statearr_35487_35511[(1)] = (15));

} else {
var statearr_35488_35512 = state_35469__$1;
(statearr_35488_35512[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35470 === (16))){
var inst_35447 = (state_35469[(9)]);
var inst_35454 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_35447);
var state_35469__$1 = state_35469;
var statearr_35489_35513 = state_35469__$1;
(statearr_35489_35513[(2)] = inst_35454);

(statearr_35489_35513[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35470 === (10))){
var inst_35461 = (state_35469[(2)]);
var state_35469__$1 = (function (){var statearr_35490 = state_35469;
(statearr_35490[(13)] = inst_35461);

return statearr_35490;
})();
var statearr_35491_35514 = state_35469__$1;
(statearr_35491_35514[(2)] = null);

(statearr_35491_35514[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35470 === (8))){
var inst_35439 = (state_35469[(11)]);
var inst_35441 = console.log("Evaling!",inst_35439);
var inst_35442 = eval(inst_35439);
var state_35469__$1 = (function (){var statearr_35492 = state_35469;
(statearr_35492[(14)] = inst_35441);

return statearr_35492;
})();
var statearr_35493_35515 = state_35469__$1;
(statearr_35493_35515[(2)] = inst_35442);

(statearr_35493_35515[(1)] = (10));


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
});})(c__32091__auto__))
;
return ((function (switch__32003__auto__,c__32091__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__32004__auto__ = null;
var figwheel$client$file_reloading$state_machine__32004__auto____0 = (function (){
var statearr_35494 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35494[(0)] = figwheel$client$file_reloading$state_machine__32004__auto__);

(statearr_35494[(1)] = (1));

return statearr_35494;
});
var figwheel$client$file_reloading$state_machine__32004__auto____1 = (function (state_35469){
while(true){
var ret_value__32005__auto__ = (function (){try{while(true){
var result__32006__auto__ = switch__32003__auto__.call(null,state_35469);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32006__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32006__auto__;
}
break;
}
}catch (e35495){if((e35495 instanceof Object)){
var ex__32007__auto__ = e35495;
var statearr_35496_35516 = state_35469;
(statearr_35496_35516[(5)] = ex__32007__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35469);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35495;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32005__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35517 = state_35469;
state_35469 = G__35517;
continue;
} else {
return ret_value__32005__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__32004__auto__ = function(state_35469){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__32004__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__32004__auto____1.call(this,state_35469);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$state_machine__32004__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__32004__auto____0;
figwheel$client$file_reloading$state_machine__32004__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__32004__auto____1;
return figwheel$client$file_reloading$state_machine__32004__auto__;
})()
;})(switch__32003__auto__,c__32091__auto__))
})();
var state__32093__auto__ = (function (){var statearr_35497 = f__32092__auto__.call(null);
(statearr_35497[(6)] = c__32091__auto__);

return statearr_35497;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32093__auto__);
});})(c__32091__auto__))
);

return c__32091__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(var_args){
var G__35519 = arguments.length;
switch (G__35519) {
case 1:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1 = (function (url){
return figwheel.client.file_reloading.queued_file_reload.call(null,url,null);
});

figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2 = (function (url,opt_source_text){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [url,opt_source_text], null));
});

figwheel.client.file_reloading.queued_file_reload.cljs$lang$maxFixedArity = 2;

figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__35521,callback){
var map__35522 = p__35521;
var map__35522__$1 = ((((!((map__35522 == null)))?((((map__35522.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35522.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35522):map__35522);
var file_msg = map__35522__$1;
var namespace = cljs.core.get.call(null,map__35522__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__35522,map__35522__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__35522,map__35522__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__35524){
var map__35525 = p__35524;
var map__35525__$1 = ((((!((map__35525 == null)))?((((map__35525.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35525.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35525):map__35525);
var file_msg = map__35525__$1;
var namespace = cljs.core.get.call(null,map__35525__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__35527){
var map__35528 = p__35527;
var map__35528__$1 = ((((!((map__35528 == null)))?((((map__35528.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35528.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35528):map__35528);
var file_msg = map__35528__$1;
var namespace = cljs.core.get.call(null,map__35528__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__28311__auto__ = cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,file_msg));
if(and__28311__auto__){
var or__28323__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__28323__auto__)){
return or__28323__auto__;
} else {
var or__28323__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__28323__auto____$1)){
return or__28323__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__28311__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__35530,callback){
var map__35531 = p__35530;
var map__35531__$1 = ((((!((map__35531 == null)))?((((map__35531.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35531.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35531):map__35531);
var file_msg = map__35531__$1;
var request_url = cljs.core.get.call(null,map__35531__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__35531__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,["Figwheel: Not trying to load file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__32091__auto___35581 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32091__auto___35581,out){
return (function (){
var f__32092__auto__ = (function (){var switch__32003__auto__ = ((function (c__32091__auto___35581,out){
return (function (state_35566){
var state_val_35567 = (state_35566[(1)]);
if((state_val_35567 === (1))){
var inst_35540 = cljs.core.seq.call(null,files);
var inst_35541 = cljs.core.first.call(null,inst_35540);
var inst_35542 = cljs.core.next.call(null,inst_35540);
var inst_35543 = files;
var state_35566__$1 = (function (){var statearr_35568 = state_35566;
(statearr_35568[(7)] = inst_35542);

(statearr_35568[(8)] = inst_35543);

(statearr_35568[(9)] = inst_35541);

return statearr_35568;
})();
var statearr_35569_35582 = state_35566__$1;
(statearr_35569_35582[(2)] = null);

(statearr_35569_35582[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35567 === (2))){
var inst_35549 = (state_35566[(10)]);
var inst_35543 = (state_35566[(8)]);
var inst_35548 = cljs.core.seq.call(null,inst_35543);
var inst_35549__$1 = cljs.core.first.call(null,inst_35548);
var inst_35550 = cljs.core.next.call(null,inst_35548);
var inst_35551 = (inst_35549__$1 == null);
var inst_35552 = cljs.core.not.call(null,inst_35551);
var state_35566__$1 = (function (){var statearr_35570 = state_35566;
(statearr_35570[(10)] = inst_35549__$1);

(statearr_35570[(11)] = inst_35550);

return statearr_35570;
})();
if(inst_35552){
var statearr_35571_35583 = state_35566__$1;
(statearr_35571_35583[(1)] = (4));

} else {
var statearr_35572_35584 = state_35566__$1;
(statearr_35572_35584[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35567 === (3))){
var inst_35564 = (state_35566[(2)]);
var state_35566__$1 = state_35566;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35566__$1,inst_35564);
} else {
if((state_val_35567 === (4))){
var inst_35549 = (state_35566[(10)]);
var inst_35554 = figwheel.client.file_reloading.reload_js_file.call(null,inst_35549);
var state_35566__$1 = state_35566;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35566__$1,(7),inst_35554);
} else {
if((state_val_35567 === (5))){
var inst_35560 = cljs.core.async.close_BANG_.call(null,out);
var state_35566__$1 = state_35566;
var statearr_35573_35585 = state_35566__$1;
(statearr_35573_35585[(2)] = inst_35560);

(statearr_35573_35585[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35567 === (6))){
var inst_35562 = (state_35566[(2)]);
var state_35566__$1 = state_35566;
var statearr_35574_35586 = state_35566__$1;
(statearr_35574_35586[(2)] = inst_35562);

(statearr_35574_35586[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35567 === (7))){
var inst_35550 = (state_35566[(11)]);
var inst_35556 = (state_35566[(2)]);
var inst_35557 = cljs.core.async.put_BANG_.call(null,out,inst_35556);
var inst_35543 = inst_35550;
var state_35566__$1 = (function (){var statearr_35575 = state_35566;
(statearr_35575[(12)] = inst_35557);

(statearr_35575[(8)] = inst_35543);

return statearr_35575;
})();
var statearr_35576_35587 = state_35566__$1;
(statearr_35576_35587[(2)] = null);

(statearr_35576_35587[(1)] = (2));


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
});})(c__32091__auto___35581,out))
;
return ((function (switch__32003__auto__,c__32091__auto___35581,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__32004__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__32004__auto____0 = (function (){
var statearr_35577 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35577[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__32004__auto__);

(statearr_35577[(1)] = (1));

return statearr_35577;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__32004__auto____1 = (function (state_35566){
while(true){
var ret_value__32005__auto__ = (function (){try{while(true){
var result__32006__auto__ = switch__32003__auto__.call(null,state_35566);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32006__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32006__auto__;
}
break;
}
}catch (e35578){if((e35578 instanceof Object)){
var ex__32007__auto__ = e35578;
var statearr_35579_35588 = state_35566;
(statearr_35579_35588[(5)] = ex__32007__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35566);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35578;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32005__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35589 = state_35566;
state_35566 = G__35589;
continue;
} else {
return ret_value__32005__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__32004__auto__ = function(state_35566){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__32004__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__32004__auto____1.call(this,state_35566);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__32004__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__32004__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__32004__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__32004__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__32004__auto__;
})()
;})(switch__32003__auto__,c__32091__auto___35581,out))
})();
var state__32093__auto__ = (function (){var statearr_35580 = f__32092__auto__.call(null);
(statearr_35580[(6)] = c__32091__auto___35581);

return statearr_35580;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32093__auto__);
});})(c__32091__auto___35581,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__35590,opts){
var map__35591 = p__35590;
var map__35591__$1 = ((((!((map__35591 == null)))?((((map__35591.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35591.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35591):map__35591);
var eval_body = cljs.core.get.call(null,map__35591__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__35591__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__28311__auto__ = eval_body;
if(cljs.core.truth_(and__28311__auto__)){
return typeof eval_body === 'string';
} else {
return and__28311__auto__;
}
})())){
var code = eval_body;
try{figwheel.client.utils.debug_prn.call(null,["Evaling file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e35593){var e = e35593;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Unable to evaluate ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.partial.call(null,cljs.core.re_matches,/figwheel\.connect.*/),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4655__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__35594_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__35594_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4655__auto__)){
var file_msg = temp__4655__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__35595){
var vec__35596 = p__35595;
var k = cljs.core.nth.call(null,vec__35596,(0),null);
var v = cljs.core.nth.call(null,vec__35596,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__35599){
var vec__35600 = p__35599;
var k = cljs.core.nth.call(null,vec__35600,(0),null);
var v = cljs.core.nth.call(null,vec__35600,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__35606,p__35607){
var map__35608 = p__35606;
var map__35608__$1 = ((((!((map__35608 == null)))?((((map__35608.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35608.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35608):map__35608);
var opts = map__35608__$1;
var before_jsload = cljs.core.get.call(null,map__35608__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__35608__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__35608__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__35609 = p__35607;
var map__35609__$1 = ((((!((map__35609 == null)))?((((map__35609.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35609.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35609):map__35609);
var msg = map__35609__$1;
var files = cljs.core.get.call(null,map__35609__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__35609__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__35609__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__32091__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32091__auto__,map__35608,map__35608__$1,opts,before_jsload,on_jsload,reload_dependents,map__35609,map__35609__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__32092__auto__ = (function (){var switch__32003__auto__ = ((function (c__32091__auto__,map__35608,map__35608__$1,opts,before_jsload,on_jsload,reload_dependents,map__35609,map__35609__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_35763){
var state_val_35764 = (state_35763[(1)]);
if((state_val_35764 === (7))){
var inst_35625 = (state_35763[(7)]);
var inst_35624 = (state_35763[(8)]);
var inst_35626 = (state_35763[(9)]);
var inst_35623 = (state_35763[(10)]);
var inst_35631 = cljs.core._nth.call(null,inst_35624,inst_35626);
var inst_35632 = figwheel.client.file_reloading.eval_body.call(null,inst_35631,opts);
var inst_35633 = (inst_35626 + (1));
var tmp35765 = inst_35625;
var tmp35766 = inst_35624;
var tmp35767 = inst_35623;
var inst_35623__$1 = tmp35767;
var inst_35624__$1 = tmp35766;
var inst_35625__$1 = tmp35765;
var inst_35626__$1 = inst_35633;
var state_35763__$1 = (function (){var statearr_35768 = state_35763;
(statearr_35768[(7)] = inst_35625__$1);

(statearr_35768[(8)] = inst_35624__$1);

(statearr_35768[(9)] = inst_35626__$1);

(statearr_35768[(10)] = inst_35623__$1);

(statearr_35768[(11)] = inst_35632);

return statearr_35768;
})();
var statearr_35769_35852 = state_35763__$1;
(statearr_35769_35852[(2)] = null);

(statearr_35769_35852[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35764 === (20))){
var inst_35666 = (state_35763[(12)]);
var inst_35674 = figwheel.client.file_reloading.sort_files.call(null,inst_35666);
var state_35763__$1 = state_35763;
var statearr_35770_35853 = state_35763__$1;
(statearr_35770_35853[(2)] = inst_35674);

(statearr_35770_35853[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35764 === (27))){
var state_35763__$1 = state_35763;
var statearr_35771_35854 = state_35763__$1;
(statearr_35771_35854[(2)] = null);

(statearr_35771_35854[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35764 === (1))){
var inst_35615 = (state_35763[(13)]);
var inst_35612 = before_jsload.call(null,files);
var inst_35613 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_35614 = (function (){return ((function (inst_35615,inst_35612,inst_35613,state_val_35764,c__32091__auto__,map__35608,map__35608__$1,opts,before_jsload,on_jsload,reload_dependents,map__35609,map__35609__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__35603_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__35603_SHARP_);
});
;})(inst_35615,inst_35612,inst_35613,state_val_35764,c__32091__auto__,map__35608,map__35608__$1,opts,before_jsload,on_jsload,reload_dependents,map__35609,map__35609__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_35615__$1 = cljs.core.filter.call(null,inst_35614,files);
var inst_35616 = cljs.core.not_empty.call(null,inst_35615__$1);
var state_35763__$1 = (function (){var statearr_35772 = state_35763;
(statearr_35772[(13)] = inst_35615__$1);

(statearr_35772[(14)] = inst_35613);

(statearr_35772[(15)] = inst_35612);

return statearr_35772;
})();
if(cljs.core.truth_(inst_35616)){
var statearr_35773_35855 = state_35763__$1;
(statearr_35773_35855[(1)] = (2));

} else {
var statearr_35774_35856 = state_35763__$1;
(statearr_35774_35856[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35764 === (24))){
var state_35763__$1 = state_35763;
var statearr_35775_35857 = state_35763__$1;
(statearr_35775_35857[(2)] = null);

(statearr_35775_35857[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35764 === (39))){
var inst_35716 = (state_35763[(16)]);
var state_35763__$1 = state_35763;
var statearr_35776_35858 = state_35763__$1;
(statearr_35776_35858[(2)] = inst_35716);

(statearr_35776_35858[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35764 === (46))){
var inst_35758 = (state_35763[(2)]);
var state_35763__$1 = state_35763;
var statearr_35777_35859 = state_35763__$1;
(statearr_35777_35859[(2)] = inst_35758);

(statearr_35777_35859[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35764 === (4))){
var inst_35660 = (state_35763[(2)]);
var inst_35661 = cljs.core.List.EMPTY;
var inst_35662 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_35661);
var inst_35663 = (function (){return ((function (inst_35660,inst_35661,inst_35662,state_val_35764,c__32091__auto__,map__35608,map__35608__$1,opts,before_jsload,on_jsload,reload_dependents,map__35609,map__35609__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__35604_SHARP_){
var and__28311__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__35604_SHARP_);
if(cljs.core.truth_(and__28311__auto__)){
return (cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__35604_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__35604_SHARP_)));
} else {
return and__28311__auto__;
}
});
;})(inst_35660,inst_35661,inst_35662,state_val_35764,c__32091__auto__,map__35608,map__35608__$1,opts,before_jsload,on_jsload,reload_dependents,map__35609,map__35609__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_35664 = cljs.core.filter.call(null,inst_35663,files);
var inst_35665 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_35666 = cljs.core.concat.call(null,inst_35664,inst_35665);
var state_35763__$1 = (function (){var statearr_35778 = state_35763;
(statearr_35778[(17)] = inst_35662);

(statearr_35778[(12)] = inst_35666);

(statearr_35778[(18)] = inst_35660);

return statearr_35778;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_35779_35860 = state_35763__$1;
(statearr_35779_35860[(1)] = (16));

} else {
var statearr_35780_35861 = state_35763__$1;
(statearr_35780_35861[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35764 === (15))){
var inst_35650 = (state_35763[(2)]);
var state_35763__$1 = state_35763;
var statearr_35781_35862 = state_35763__$1;
(statearr_35781_35862[(2)] = inst_35650);

(statearr_35781_35862[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35764 === (21))){
var inst_35676 = (state_35763[(19)]);
var inst_35676__$1 = (state_35763[(2)]);
var inst_35677 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_35676__$1);
var state_35763__$1 = (function (){var statearr_35782 = state_35763;
(statearr_35782[(19)] = inst_35676__$1);

return statearr_35782;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35763__$1,(22),inst_35677);
} else {
if((state_val_35764 === (31))){
var inst_35761 = (state_35763[(2)]);
var state_35763__$1 = state_35763;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35763__$1,inst_35761);
} else {
if((state_val_35764 === (32))){
var inst_35716 = (state_35763[(16)]);
var inst_35721 = inst_35716.cljs$lang$protocol_mask$partition0$;
var inst_35722 = (inst_35721 & (64));
var inst_35723 = inst_35716.cljs$core$ISeq$;
var inst_35724 = (cljs.core.PROTOCOL_SENTINEL === inst_35723);
var inst_35725 = (inst_35722) || (inst_35724);
var state_35763__$1 = state_35763;
if(cljs.core.truth_(inst_35725)){
var statearr_35783_35863 = state_35763__$1;
(statearr_35783_35863[(1)] = (35));

} else {
var statearr_35784_35864 = state_35763__$1;
(statearr_35784_35864[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35764 === (40))){
var inst_35738 = (state_35763[(20)]);
var inst_35737 = (state_35763[(2)]);
var inst_35738__$1 = cljs.core.get.call(null,inst_35737,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_35739 = cljs.core.get.call(null,inst_35737,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_35740 = cljs.core.not_empty.call(null,inst_35738__$1);
var state_35763__$1 = (function (){var statearr_35785 = state_35763;
(statearr_35785[(21)] = inst_35739);

(statearr_35785[(20)] = inst_35738__$1);

return statearr_35785;
})();
if(cljs.core.truth_(inst_35740)){
var statearr_35786_35865 = state_35763__$1;
(statearr_35786_35865[(1)] = (41));

} else {
var statearr_35787_35866 = state_35763__$1;
(statearr_35787_35866[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35764 === (33))){
var state_35763__$1 = state_35763;
var statearr_35788_35867 = state_35763__$1;
(statearr_35788_35867[(2)] = false);

(statearr_35788_35867[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35764 === (13))){
var inst_35636 = (state_35763[(22)]);
var inst_35640 = cljs.core.chunk_first.call(null,inst_35636);
var inst_35641 = cljs.core.chunk_rest.call(null,inst_35636);
var inst_35642 = cljs.core.count.call(null,inst_35640);
var inst_35623 = inst_35641;
var inst_35624 = inst_35640;
var inst_35625 = inst_35642;
var inst_35626 = (0);
var state_35763__$1 = (function (){var statearr_35789 = state_35763;
(statearr_35789[(7)] = inst_35625);

(statearr_35789[(8)] = inst_35624);

(statearr_35789[(9)] = inst_35626);

(statearr_35789[(10)] = inst_35623);

return statearr_35789;
})();
var statearr_35790_35868 = state_35763__$1;
(statearr_35790_35868[(2)] = null);

(statearr_35790_35868[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35764 === (22))){
var inst_35679 = (state_35763[(23)]);
var inst_35676 = (state_35763[(19)]);
var inst_35684 = (state_35763[(24)]);
var inst_35680 = (state_35763[(25)]);
var inst_35679__$1 = (state_35763[(2)]);
var inst_35680__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_35679__$1);
var inst_35681 = (function (){var all_files = inst_35676;
var res_SINGLEQUOTE_ = inst_35679__$1;
var res = inst_35680__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_35679,inst_35676,inst_35684,inst_35680,inst_35679__$1,inst_35680__$1,state_val_35764,c__32091__auto__,map__35608,map__35608__$1,opts,before_jsload,on_jsload,reload_dependents,map__35609,map__35609__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__35605_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__35605_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_35679,inst_35676,inst_35684,inst_35680,inst_35679__$1,inst_35680__$1,state_val_35764,c__32091__auto__,map__35608,map__35608__$1,opts,before_jsload,on_jsload,reload_dependents,map__35609,map__35609__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_35682 = cljs.core.filter.call(null,inst_35681,inst_35679__$1);
var inst_35683 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_35684__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_35683);
var inst_35685 = cljs.core.not_empty.call(null,inst_35684__$1);
var state_35763__$1 = (function (){var statearr_35791 = state_35763;
(statearr_35791[(23)] = inst_35679__$1);

(statearr_35791[(26)] = inst_35682);

(statearr_35791[(24)] = inst_35684__$1);

(statearr_35791[(25)] = inst_35680__$1);

return statearr_35791;
})();
if(cljs.core.truth_(inst_35685)){
var statearr_35792_35869 = state_35763__$1;
(statearr_35792_35869[(1)] = (23));

} else {
var statearr_35793_35870 = state_35763__$1;
(statearr_35793_35870[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35764 === (36))){
var state_35763__$1 = state_35763;
var statearr_35794_35871 = state_35763__$1;
(statearr_35794_35871[(2)] = false);

(statearr_35794_35871[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35764 === (41))){
var inst_35738 = (state_35763[(20)]);
var inst_35742 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_35743 = cljs.core.map.call(null,inst_35742,inst_35738);
var inst_35744 = cljs.core.pr_str.call(null,inst_35743);
var inst_35745 = ["figwheel-no-load meta-data: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_35744)].join('');
var inst_35746 = figwheel.client.utils.log.call(null,inst_35745);
var state_35763__$1 = state_35763;
var statearr_35795_35872 = state_35763__$1;
(statearr_35795_35872[(2)] = inst_35746);

(statearr_35795_35872[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35764 === (43))){
var inst_35739 = (state_35763[(21)]);
var inst_35749 = (state_35763[(2)]);
var inst_35750 = cljs.core.not_empty.call(null,inst_35739);
var state_35763__$1 = (function (){var statearr_35796 = state_35763;
(statearr_35796[(27)] = inst_35749);

return statearr_35796;
})();
if(cljs.core.truth_(inst_35750)){
var statearr_35797_35873 = state_35763__$1;
(statearr_35797_35873[(1)] = (44));

} else {
var statearr_35798_35874 = state_35763__$1;
(statearr_35798_35874[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35764 === (29))){
var inst_35679 = (state_35763[(23)]);
var inst_35676 = (state_35763[(19)]);
var inst_35682 = (state_35763[(26)]);
var inst_35684 = (state_35763[(24)]);
var inst_35680 = (state_35763[(25)]);
var inst_35716 = (state_35763[(16)]);
var inst_35712 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_35715 = (function (){var all_files = inst_35676;
var res_SINGLEQUOTE_ = inst_35679;
var res = inst_35680;
var files_not_loaded = inst_35682;
var dependencies_that_loaded = inst_35684;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35679,inst_35676,inst_35682,inst_35684,inst_35680,inst_35716,inst_35712,state_val_35764,c__32091__auto__,map__35608,map__35608__$1,opts,before_jsload,on_jsload,reload_dependents,map__35609,map__35609__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__35714){
var map__35799 = p__35714;
var map__35799__$1 = ((((!((map__35799 == null)))?((((map__35799.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35799.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35799):map__35799);
var namespace = cljs.core.get.call(null,map__35799__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35679,inst_35676,inst_35682,inst_35684,inst_35680,inst_35716,inst_35712,state_val_35764,c__32091__auto__,map__35608,map__35608__$1,opts,before_jsload,on_jsload,reload_dependents,map__35609,map__35609__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_35716__$1 = cljs.core.group_by.call(null,inst_35715,inst_35682);
var inst_35718 = (inst_35716__$1 == null);
var inst_35719 = cljs.core.not.call(null,inst_35718);
var state_35763__$1 = (function (){var statearr_35801 = state_35763;
(statearr_35801[(16)] = inst_35716__$1);

(statearr_35801[(28)] = inst_35712);

return statearr_35801;
})();
if(inst_35719){
var statearr_35802_35875 = state_35763__$1;
(statearr_35802_35875[(1)] = (32));

} else {
var statearr_35803_35876 = state_35763__$1;
(statearr_35803_35876[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35764 === (44))){
var inst_35739 = (state_35763[(21)]);
var inst_35752 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_35739);
var inst_35753 = cljs.core.pr_str.call(null,inst_35752);
var inst_35754 = ["not required: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_35753)].join('');
var inst_35755 = figwheel.client.utils.log.call(null,inst_35754);
var state_35763__$1 = state_35763;
var statearr_35804_35877 = state_35763__$1;
(statearr_35804_35877[(2)] = inst_35755);

(statearr_35804_35877[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35764 === (6))){
var inst_35657 = (state_35763[(2)]);
var state_35763__$1 = state_35763;
var statearr_35805_35878 = state_35763__$1;
(statearr_35805_35878[(2)] = inst_35657);

(statearr_35805_35878[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35764 === (28))){
var inst_35682 = (state_35763[(26)]);
var inst_35709 = (state_35763[(2)]);
var inst_35710 = cljs.core.not_empty.call(null,inst_35682);
var state_35763__$1 = (function (){var statearr_35806 = state_35763;
(statearr_35806[(29)] = inst_35709);

return statearr_35806;
})();
if(cljs.core.truth_(inst_35710)){
var statearr_35807_35879 = state_35763__$1;
(statearr_35807_35879[(1)] = (29));

} else {
var statearr_35808_35880 = state_35763__$1;
(statearr_35808_35880[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35764 === (25))){
var inst_35680 = (state_35763[(25)]);
var inst_35696 = (state_35763[(2)]);
var inst_35697 = cljs.core.not_empty.call(null,inst_35680);
var state_35763__$1 = (function (){var statearr_35809 = state_35763;
(statearr_35809[(30)] = inst_35696);

return statearr_35809;
})();
if(cljs.core.truth_(inst_35697)){
var statearr_35810_35881 = state_35763__$1;
(statearr_35810_35881[(1)] = (26));

} else {
var statearr_35811_35882 = state_35763__$1;
(statearr_35811_35882[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35764 === (34))){
var inst_35732 = (state_35763[(2)]);
var state_35763__$1 = state_35763;
if(cljs.core.truth_(inst_35732)){
var statearr_35812_35883 = state_35763__$1;
(statearr_35812_35883[(1)] = (38));

} else {
var statearr_35813_35884 = state_35763__$1;
(statearr_35813_35884[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35764 === (17))){
var state_35763__$1 = state_35763;
var statearr_35814_35885 = state_35763__$1;
(statearr_35814_35885[(2)] = recompile_dependents);

(statearr_35814_35885[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35764 === (3))){
var state_35763__$1 = state_35763;
var statearr_35815_35886 = state_35763__$1;
(statearr_35815_35886[(2)] = null);

(statearr_35815_35886[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35764 === (12))){
var inst_35653 = (state_35763[(2)]);
var state_35763__$1 = state_35763;
var statearr_35816_35887 = state_35763__$1;
(statearr_35816_35887[(2)] = inst_35653);

(statearr_35816_35887[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35764 === (2))){
var inst_35615 = (state_35763[(13)]);
var inst_35622 = cljs.core.seq.call(null,inst_35615);
var inst_35623 = inst_35622;
var inst_35624 = null;
var inst_35625 = (0);
var inst_35626 = (0);
var state_35763__$1 = (function (){var statearr_35817 = state_35763;
(statearr_35817[(7)] = inst_35625);

(statearr_35817[(8)] = inst_35624);

(statearr_35817[(9)] = inst_35626);

(statearr_35817[(10)] = inst_35623);

return statearr_35817;
})();
var statearr_35818_35888 = state_35763__$1;
(statearr_35818_35888[(2)] = null);

(statearr_35818_35888[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35764 === (23))){
var inst_35679 = (state_35763[(23)]);
var inst_35676 = (state_35763[(19)]);
var inst_35682 = (state_35763[(26)]);
var inst_35684 = (state_35763[(24)]);
var inst_35680 = (state_35763[(25)]);
var inst_35687 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_35689 = (function (){var all_files = inst_35676;
var res_SINGLEQUOTE_ = inst_35679;
var res = inst_35680;
var files_not_loaded = inst_35682;
var dependencies_that_loaded = inst_35684;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35679,inst_35676,inst_35682,inst_35684,inst_35680,inst_35687,state_val_35764,c__32091__auto__,map__35608,map__35608__$1,opts,before_jsload,on_jsload,reload_dependents,map__35609,map__35609__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__35688){
var map__35819 = p__35688;
var map__35819__$1 = ((((!((map__35819 == null)))?((((map__35819.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35819.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35819):map__35819);
var request_url = cljs.core.get.call(null,map__35819__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35679,inst_35676,inst_35682,inst_35684,inst_35680,inst_35687,state_val_35764,c__32091__auto__,map__35608,map__35608__$1,opts,before_jsload,on_jsload,reload_dependents,map__35609,map__35609__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_35690 = cljs.core.reverse.call(null,inst_35684);
var inst_35691 = cljs.core.map.call(null,inst_35689,inst_35690);
var inst_35692 = cljs.core.pr_str.call(null,inst_35691);
var inst_35693 = figwheel.client.utils.log.call(null,inst_35692);
var state_35763__$1 = (function (){var statearr_35821 = state_35763;
(statearr_35821[(31)] = inst_35687);

return statearr_35821;
})();
var statearr_35822_35889 = state_35763__$1;
(statearr_35822_35889[(2)] = inst_35693);

(statearr_35822_35889[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35764 === (35))){
var state_35763__$1 = state_35763;
var statearr_35823_35890 = state_35763__$1;
(statearr_35823_35890[(2)] = true);

(statearr_35823_35890[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35764 === (19))){
var inst_35666 = (state_35763[(12)]);
var inst_35672 = figwheel.client.file_reloading.expand_files.call(null,inst_35666);
var state_35763__$1 = state_35763;
var statearr_35824_35891 = state_35763__$1;
(statearr_35824_35891[(2)] = inst_35672);

(statearr_35824_35891[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35764 === (11))){
var state_35763__$1 = state_35763;
var statearr_35825_35892 = state_35763__$1;
(statearr_35825_35892[(2)] = null);

(statearr_35825_35892[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35764 === (9))){
var inst_35655 = (state_35763[(2)]);
var state_35763__$1 = state_35763;
var statearr_35826_35893 = state_35763__$1;
(statearr_35826_35893[(2)] = inst_35655);

(statearr_35826_35893[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35764 === (5))){
var inst_35625 = (state_35763[(7)]);
var inst_35626 = (state_35763[(9)]);
var inst_35628 = (inst_35626 < inst_35625);
var inst_35629 = inst_35628;
var state_35763__$1 = state_35763;
if(cljs.core.truth_(inst_35629)){
var statearr_35827_35894 = state_35763__$1;
(statearr_35827_35894[(1)] = (7));

} else {
var statearr_35828_35895 = state_35763__$1;
(statearr_35828_35895[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35764 === (14))){
var inst_35636 = (state_35763[(22)]);
var inst_35645 = cljs.core.first.call(null,inst_35636);
var inst_35646 = figwheel.client.file_reloading.eval_body.call(null,inst_35645,opts);
var inst_35647 = cljs.core.next.call(null,inst_35636);
var inst_35623 = inst_35647;
var inst_35624 = null;
var inst_35625 = (0);
var inst_35626 = (0);
var state_35763__$1 = (function (){var statearr_35829 = state_35763;
(statearr_35829[(7)] = inst_35625);

(statearr_35829[(32)] = inst_35646);

(statearr_35829[(8)] = inst_35624);

(statearr_35829[(9)] = inst_35626);

(statearr_35829[(10)] = inst_35623);

return statearr_35829;
})();
var statearr_35830_35896 = state_35763__$1;
(statearr_35830_35896[(2)] = null);

(statearr_35830_35896[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35764 === (45))){
var state_35763__$1 = state_35763;
var statearr_35831_35897 = state_35763__$1;
(statearr_35831_35897[(2)] = null);

(statearr_35831_35897[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35764 === (26))){
var inst_35679 = (state_35763[(23)]);
var inst_35676 = (state_35763[(19)]);
var inst_35682 = (state_35763[(26)]);
var inst_35684 = (state_35763[(24)]);
var inst_35680 = (state_35763[(25)]);
var inst_35699 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_35701 = (function (){var all_files = inst_35676;
var res_SINGLEQUOTE_ = inst_35679;
var res = inst_35680;
var files_not_loaded = inst_35682;
var dependencies_that_loaded = inst_35684;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35679,inst_35676,inst_35682,inst_35684,inst_35680,inst_35699,state_val_35764,c__32091__auto__,map__35608,map__35608__$1,opts,before_jsload,on_jsload,reload_dependents,map__35609,map__35609__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__35700){
var map__35832 = p__35700;
var map__35832__$1 = ((((!((map__35832 == null)))?((((map__35832.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35832.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35832):map__35832);
var namespace = cljs.core.get.call(null,map__35832__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__35832__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35679,inst_35676,inst_35682,inst_35684,inst_35680,inst_35699,state_val_35764,c__32091__auto__,map__35608,map__35608__$1,opts,before_jsload,on_jsload,reload_dependents,map__35609,map__35609__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_35702 = cljs.core.map.call(null,inst_35701,inst_35680);
var inst_35703 = cljs.core.pr_str.call(null,inst_35702);
var inst_35704 = figwheel.client.utils.log.call(null,inst_35703);
var inst_35705 = (function (){var all_files = inst_35676;
var res_SINGLEQUOTE_ = inst_35679;
var res = inst_35680;
var files_not_loaded = inst_35682;
var dependencies_that_loaded = inst_35684;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35679,inst_35676,inst_35682,inst_35684,inst_35680,inst_35699,inst_35701,inst_35702,inst_35703,inst_35704,state_val_35764,c__32091__auto__,map__35608,map__35608__$1,opts,before_jsload,on_jsload,reload_dependents,map__35609,map__35609__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35679,inst_35676,inst_35682,inst_35684,inst_35680,inst_35699,inst_35701,inst_35702,inst_35703,inst_35704,state_val_35764,c__32091__auto__,map__35608,map__35608__$1,opts,before_jsload,on_jsload,reload_dependents,map__35609,map__35609__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_35706 = setTimeout(inst_35705,(10));
var state_35763__$1 = (function (){var statearr_35834 = state_35763;
(statearr_35834[(33)] = inst_35699);

(statearr_35834[(34)] = inst_35704);

return statearr_35834;
})();
var statearr_35835_35898 = state_35763__$1;
(statearr_35835_35898[(2)] = inst_35706);

(statearr_35835_35898[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35764 === (16))){
var state_35763__$1 = state_35763;
var statearr_35836_35899 = state_35763__$1;
(statearr_35836_35899[(2)] = reload_dependents);

(statearr_35836_35899[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35764 === (38))){
var inst_35716 = (state_35763[(16)]);
var inst_35734 = cljs.core.apply.call(null,cljs.core.hash_map,inst_35716);
var state_35763__$1 = state_35763;
var statearr_35837_35900 = state_35763__$1;
(statearr_35837_35900[(2)] = inst_35734);

(statearr_35837_35900[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35764 === (30))){
var state_35763__$1 = state_35763;
var statearr_35838_35901 = state_35763__$1;
(statearr_35838_35901[(2)] = null);

(statearr_35838_35901[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35764 === (10))){
var inst_35636 = (state_35763[(22)]);
var inst_35638 = cljs.core.chunked_seq_QMARK_.call(null,inst_35636);
var state_35763__$1 = state_35763;
if(inst_35638){
var statearr_35839_35902 = state_35763__$1;
(statearr_35839_35902[(1)] = (13));

} else {
var statearr_35840_35903 = state_35763__$1;
(statearr_35840_35903[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35764 === (18))){
var inst_35670 = (state_35763[(2)]);
var state_35763__$1 = state_35763;
if(cljs.core.truth_(inst_35670)){
var statearr_35841_35904 = state_35763__$1;
(statearr_35841_35904[(1)] = (19));

} else {
var statearr_35842_35905 = state_35763__$1;
(statearr_35842_35905[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35764 === (42))){
var state_35763__$1 = state_35763;
var statearr_35843_35906 = state_35763__$1;
(statearr_35843_35906[(2)] = null);

(statearr_35843_35906[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35764 === (37))){
var inst_35729 = (state_35763[(2)]);
var state_35763__$1 = state_35763;
var statearr_35844_35907 = state_35763__$1;
(statearr_35844_35907[(2)] = inst_35729);

(statearr_35844_35907[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35764 === (8))){
var inst_35636 = (state_35763[(22)]);
var inst_35623 = (state_35763[(10)]);
var inst_35636__$1 = cljs.core.seq.call(null,inst_35623);
var state_35763__$1 = (function (){var statearr_35845 = state_35763;
(statearr_35845[(22)] = inst_35636__$1);

return statearr_35845;
})();
if(inst_35636__$1){
var statearr_35846_35908 = state_35763__$1;
(statearr_35846_35908[(1)] = (10));

} else {
var statearr_35847_35909 = state_35763__$1;
(statearr_35847_35909[(1)] = (11));

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
}
});})(c__32091__auto__,map__35608,map__35608__$1,opts,before_jsload,on_jsload,reload_dependents,map__35609,map__35609__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__32003__auto__,c__32091__auto__,map__35608,map__35608__$1,opts,before_jsload,on_jsload,reload_dependents,map__35609,map__35609__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__32004__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__32004__auto____0 = (function (){
var statearr_35848 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35848[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__32004__auto__);

(statearr_35848[(1)] = (1));

return statearr_35848;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__32004__auto____1 = (function (state_35763){
while(true){
var ret_value__32005__auto__ = (function (){try{while(true){
var result__32006__auto__ = switch__32003__auto__.call(null,state_35763);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32006__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32006__auto__;
}
break;
}
}catch (e35849){if((e35849 instanceof Object)){
var ex__32007__auto__ = e35849;
var statearr_35850_35910 = state_35763;
(statearr_35850_35910[(5)] = ex__32007__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35763);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35849;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32005__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35911 = state_35763;
state_35763 = G__35911;
continue;
} else {
return ret_value__32005__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__32004__auto__ = function(state_35763){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__32004__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__32004__auto____1.call(this,state_35763);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__32004__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__32004__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__32004__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__32004__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__32004__auto__;
})()
;})(switch__32003__auto__,c__32091__auto__,map__35608,map__35608__$1,opts,before_jsload,on_jsload,reload_dependents,map__35609,map__35609__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__32093__auto__ = (function (){var statearr_35851 = f__32092__auto__.call(null);
(statearr_35851[(6)] = c__32091__auto__);

return statearr_35851;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32093__auto__);
});})(c__32091__auto__,map__35608,map__35608__$1,opts,before_jsload,on_jsload,reload_dependents,map__35609,map__35609__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__32091__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__35914,link){
var map__35915 = p__35914;
var map__35915__$1 = ((((!((map__35915 == null)))?((((map__35915.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35915.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35915):map__35915);
var file = cljs.core.get.call(null,map__35915__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__35915,map__35915__$1,file){
return (function (p1__35912_SHARP_,p2__35913_SHARP_){
if(cljs.core._EQ_.call(null,p1__35912_SHARP_,p2__35913_SHARP_)){
return p1__35912_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__35915,map__35915__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__35918){
var map__35919 = p__35918;
var map__35919__$1 = ((((!((map__35919 == null)))?((((map__35919.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35919.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35919):map__35919);
var match_length = cljs.core.get.call(null,map__35919__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__35919__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__35917_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__35917_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4657__auto__)){
var res = temp__4657__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.distinctify = (function figwheel$client$file_reloading$distinctify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__35921_SHARP_,p2__35922_SHARP_){
return cljs.core.assoc.call(null,p1__35921_SHARP_,cljs.core.get.call(null,p2__35922_SHARP_,key),p2__35922_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.add_link_to_document = (function figwheel$client$file_reloading$add_link_to_document(orig_link,klone,finished_fn){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
parent.removeChild(orig_link);

return finished_fn.call(null);
});})(parent))
,(300));
});
if(typeof figwheel.client.file_reloading.reload_css_deferred_chain !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_css_deferred_chain = cljs.core.atom.call(null,goog.async.Deferred.succeed());
}
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(f_data,fin){
var temp__4655__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4655__auto__)){
var link = temp__4655__auto__;
return figwheel.client.file_reloading.add_link_to_document.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href),((function (link,temp__4655__auto__){
return (function (){
return fin.call(null,cljs.core.assoc.call(null,f_data,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),true));
});})(link,temp__4655__auto__))
);
} else {
return fin.call(null,f_data);
}
});
figwheel.client.file_reloading.reload_css_files_STAR_ = (function figwheel$client$file_reloading$reload_css_files_STAR_(deferred,f_datas,on_cssload){
return figwheel.client.utils.liftContD.call(null,figwheel.client.utils.mapConcatD.call(null,deferred,figwheel.client.file_reloading.reload_css_file,f_datas),(function (f_datas_SINGLEQUOTE_,fin){
var loaded_f_datas_35923 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_35923);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_35923);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__35924,p__35925){
var map__35926 = p__35924;
var map__35926__$1 = ((((!((map__35926 == null)))?((((map__35926.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35926.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35926):map__35926);
var on_cssload = cljs.core.get.call(null,map__35926__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__35927 = p__35925;
var map__35927__$1 = ((((!((map__35927 == null)))?((((map__35927.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35927.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35927):map__35927);
var files_msg = map__35927__$1;
var files = cljs.core.get.call(null,map__35927__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var temp__4657__auto__ = cljs.core.not_empty.call(null,figwheel.client.file_reloading.distinctify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
if(cljs.core.truth_(temp__4657__auto__)){
var f_datas = temp__4657__auto__;
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.reload_css_deferred_chain,figwheel.client.file_reloading.reload_css_files_STAR_,f_datas,on_cssload);
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1530383441469
