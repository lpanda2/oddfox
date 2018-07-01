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
var or__34247__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__34247__auto__){
return or__34247__auto__;
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
var or__34247__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["cljs.nodejs",null,"goog",null,"cljs.core",null], null), null).call(null,name);
if(cljs.core.truth_(or__34247__auto__)){
return or__34247__auto__;
} else {
var or__34247__auto____$1 = goog.string.startsWith("clojure.",name);
if(cljs.core.truth_(or__34247__auto____$1)){
return or__34247__auto____$1;
} else {
return goog.string.startsWith("goog.",name);
}
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__40568_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__40568_SHARP_));
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
var seq__40569 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__40570 = null;
var count__40571 = (0);
var i__40572 = (0);
while(true){
if((i__40572 < count__40571)){
var n = cljs.core._nth.call(null,chunk__40570,i__40572);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__40573 = seq__40569;
var G__40574 = chunk__40570;
var G__40575 = count__40571;
var G__40576 = (i__40572 + (1));
seq__40569 = G__40573;
chunk__40570 = G__40574;
count__40571 = G__40575;
i__40572 = G__40576;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__40569);
if(temp__4657__auto__){
var seq__40569__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40569__$1)){
var c__35086__auto__ = cljs.core.chunk_first.call(null,seq__40569__$1);
var G__40577 = cljs.core.chunk_rest.call(null,seq__40569__$1);
var G__40578 = c__35086__auto__;
var G__40579 = cljs.core.count.call(null,c__35086__auto__);
var G__40580 = (0);
seq__40569 = G__40577;
chunk__40570 = G__40578;
count__40571 = G__40579;
i__40572 = G__40580;
continue;
} else {
var n = cljs.core.first.call(null,seq__40569__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__40581 = cljs.core.next.call(null,seq__40569__$1);
var G__40582 = null;
var G__40583 = (0);
var G__40584 = (0);
seq__40569 = G__40581;
chunk__40570 = G__40582;
count__40571 = G__40583;
i__40572 = G__40584;
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
return cljs.core.some.call(null,(function (p__40585){
var vec__40586 = p__40585;
var _ = cljs.core.nth.call(null,vec__40586,(0),null);
var v = cljs.core.nth.call(null,vec__40586,(1),null);
var and__34235__auto__ = v;
if(cljs.core.truth_(and__34235__auto__)){
return v.call(null,dep);
} else {
return and__34235__auto__;
}
}),cljs.core.filter.call(null,(function (p__40589){
var vec__40590 = p__40589;
var k = cljs.core.nth.call(null,vec__40590,(0),null);
var v = cljs.core.nth.call(null,vec__40590,(1),null);
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

var seq__40602_40610 = cljs.core.seq.call(null,deps);
var chunk__40603_40611 = null;
var count__40604_40612 = (0);
var i__40605_40613 = (0);
while(true){
if((i__40605_40613 < count__40604_40612)){
var dep_40614 = cljs.core._nth.call(null,chunk__40603_40611,i__40605_40613);
if(cljs.core.truth_((function (){var and__34235__auto__ = dep_40614;
if(cljs.core.truth_(and__34235__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_40614));
} else {
return and__34235__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_40614,(depth + (1)),state);
} else {
}

var G__40615 = seq__40602_40610;
var G__40616 = chunk__40603_40611;
var G__40617 = count__40604_40612;
var G__40618 = (i__40605_40613 + (1));
seq__40602_40610 = G__40615;
chunk__40603_40611 = G__40616;
count__40604_40612 = G__40617;
i__40605_40613 = G__40618;
continue;
} else {
var temp__4657__auto___40619 = cljs.core.seq.call(null,seq__40602_40610);
if(temp__4657__auto___40619){
var seq__40602_40620__$1 = temp__4657__auto___40619;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40602_40620__$1)){
var c__35086__auto___40621 = cljs.core.chunk_first.call(null,seq__40602_40620__$1);
var G__40622 = cljs.core.chunk_rest.call(null,seq__40602_40620__$1);
var G__40623 = c__35086__auto___40621;
var G__40624 = cljs.core.count.call(null,c__35086__auto___40621);
var G__40625 = (0);
seq__40602_40610 = G__40622;
chunk__40603_40611 = G__40623;
count__40604_40612 = G__40624;
i__40605_40613 = G__40625;
continue;
} else {
var dep_40626 = cljs.core.first.call(null,seq__40602_40620__$1);
if(cljs.core.truth_((function (){var and__34235__auto__ = dep_40626;
if(cljs.core.truth_(and__34235__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_40626));
} else {
return and__34235__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_40626,(depth + (1)),state);
} else {
}

var G__40627 = cljs.core.next.call(null,seq__40602_40620__$1);
var G__40628 = null;
var G__40629 = (0);
var G__40630 = (0);
seq__40602_40610 = G__40627;
chunk__40603_40611 = G__40628;
count__40604_40612 = G__40629;
i__40605_40613 = G__40630;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__40606){
var vec__40607 = p__40606;
var seq__40608 = cljs.core.seq.call(null,vec__40607);
var first__40609 = cljs.core.first.call(null,seq__40608);
var seq__40608__$1 = cljs.core.next.call(null,seq__40608);
var x = first__40609;
var xs = seq__40608__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__40607,seq__40608,first__40609,seq__40608__$1,x,xs,get_deps__$1){
return (function (p1__40593_SHARP_){
return clojure.set.difference.call(null,p1__40593_SHARP_,x);
});})(vec__40607,seq__40608,first__40609,seq__40608__$1,x,xs,get_deps__$1))
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
var seq__40631 = cljs.core.seq.call(null,provides);
var chunk__40632 = null;
var count__40633 = (0);
var i__40634 = (0);
while(true){
if((i__40634 < count__40633)){
var prov = cljs.core._nth.call(null,chunk__40632,i__40634);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__40635_40643 = cljs.core.seq.call(null,requires);
var chunk__40636_40644 = null;
var count__40637_40645 = (0);
var i__40638_40646 = (0);
while(true){
if((i__40638_40646 < count__40637_40645)){
var req_40647 = cljs.core._nth.call(null,chunk__40636_40644,i__40638_40646);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_40647,prov);

var G__40648 = seq__40635_40643;
var G__40649 = chunk__40636_40644;
var G__40650 = count__40637_40645;
var G__40651 = (i__40638_40646 + (1));
seq__40635_40643 = G__40648;
chunk__40636_40644 = G__40649;
count__40637_40645 = G__40650;
i__40638_40646 = G__40651;
continue;
} else {
var temp__4657__auto___40652 = cljs.core.seq.call(null,seq__40635_40643);
if(temp__4657__auto___40652){
var seq__40635_40653__$1 = temp__4657__auto___40652;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40635_40653__$1)){
var c__35086__auto___40654 = cljs.core.chunk_first.call(null,seq__40635_40653__$1);
var G__40655 = cljs.core.chunk_rest.call(null,seq__40635_40653__$1);
var G__40656 = c__35086__auto___40654;
var G__40657 = cljs.core.count.call(null,c__35086__auto___40654);
var G__40658 = (0);
seq__40635_40643 = G__40655;
chunk__40636_40644 = G__40656;
count__40637_40645 = G__40657;
i__40638_40646 = G__40658;
continue;
} else {
var req_40659 = cljs.core.first.call(null,seq__40635_40653__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_40659,prov);

var G__40660 = cljs.core.next.call(null,seq__40635_40653__$1);
var G__40661 = null;
var G__40662 = (0);
var G__40663 = (0);
seq__40635_40643 = G__40660;
chunk__40636_40644 = G__40661;
count__40637_40645 = G__40662;
i__40638_40646 = G__40663;
continue;
}
} else {
}
}
break;
}

var G__40664 = seq__40631;
var G__40665 = chunk__40632;
var G__40666 = count__40633;
var G__40667 = (i__40634 + (1));
seq__40631 = G__40664;
chunk__40632 = G__40665;
count__40633 = G__40666;
i__40634 = G__40667;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__40631);
if(temp__4657__auto__){
var seq__40631__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40631__$1)){
var c__35086__auto__ = cljs.core.chunk_first.call(null,seq__40631__$1);
var G__40668 = cljs.core.chunk_rest.call(null,seq__40631__$1);
var G__40669 = c__35086__auto__;
var G__40670 = cljs.core.count.call(null,c__35086__auto__);
var G__40671 = (0);
seq__40631 = G__40668;
chunk__40632 = G__40669;
count__40633 = G__40670;
i__40634 = G__40671;
continue;
} else {
var prov = cljs.core.first.call(null,seq__40631__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__40639_40672 = cljs.core.seq.call(null,requires);
var chunk__40640_40673 = null;
var count__40641_40674 = (0);
var i__40642_40675 = (0);
while(true){
if((i__40642_40675 < count__40641_40674)){
var req_40676 = cljs.core._nth.call(null,chunk__40640_40673,i__40642_40675);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_40676,prov);

var G__40677 = seq__40639_40672;
var G__40678 = chunk__40640_40673;
var G__40679 = count__40641_40674;
var G__40680 = (i__40642_40675 + (1));
seq__40639_40672 = G__40677;
chunk__40640_40673 = G__40678;
count__40641_40674 = G__40679;
i__40642_40675 = G__40680;
continue;
} else {
var temp__4657__auto___40681__$1 = cljs.core.seq.call(null,seq__40639_40672);
if(temp__4657__auto___40681__$1){
var seq__40639_40682__$1 = temp__4657__auto___40681__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40639_40682__$1)){
var c__35086__auto___40683 = cljs.core.chunk_first.call(null,seq__40639_40682__$1);
var G__40684 = cljs.core.chunk_rest.call(null,seq__40639_40682__$1);
var G__40685 = c__35086__auto___40683;
var G__40686 = cljs.core.count.call(null,c__35086__auto___40683);
var G__40687 = (0);
seq__40639_40672 = G__40684;
chunk__40640_40673 = G__40685;
count__40641_40674 = G__40686;
i__40642_40675 = G__40687;
continue;
} else {
var req_40688 = cljs.core.first.call(null,seq__40639_40682__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_40688,prov);

var G__40689 = cljs.core.next.call(null,seq__40639_40682__$1);
var G__40690 = null;
var G__40691 = (0);
var G__40692 = (0);
seq__40639_40672 = G__40689;
chunk__40640_40673 = G__40690;
count__40641_40674 = G__40691;
i__40642_40675 = G__40692;
continue;
}
} else {
}
}
break;
}

var G__40693 = cljs.core.next.call(null,seq__40631__$1);
var G__40694 = null;
var G__40695 = (0);
var G__40696 = (0);
seq__40631 = G__40693;
chunk__40632 = G__40694;
count__40633 = G__40695;
i__40634 = G__40696;
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
var seq__40697_40701 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__40698_40702 = null;
var count__40699_40703 = (0);
var i__40700_40704 = (0);
while(true){
if((i__40700_40704 < count__40699_40703)){
var ns_40705 = cljs.core._nth.call(null,chunk__40698_40702,i__40700_40704);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_40705);

var G__40706 = seq__40697_40701;
var G__40707 = chunk__40698_40702;
var G__40708 = count__40699_40703;
var G__40709 = (i__40700_40704 + (1));
seq__40697_40701 = G__40706;
chunk__40698_40702 = G__40707;
count__40699_40703 = G__40708;
i__40700_40704 = G__40709;
continue;
} else {
var temp__4657__auto___40710 = cljs.core.seq.call(null,seq__40697_40701);
if(temp__4657__auto___40710){
var seq__40697_40711__$1 = temp__4657__auto___40710;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40697_40711__$1)){
var c__35086__auto___40712 = cljs.core.chunk_first.call(null,seq__40697_40711__$1);
var G__40713 = cljs.core.chunk_rest.call(null,seq__40697_40711__$1);
var G__40714 = c__35086__auto___40712;
var G__40715 = cljs.core.count.call(null,c__35086__auto___40712);
var G__40716 = (0);
seq__40697_40701 = G__40713;
chunk__40698_40702 = G__40714;
count__40699_40703 = G__40715;
i__40700_40704 = G__40716;
continue;
} else {
var ns_40717 = cljs.core.first.call(null,seq__40697_40711__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_40717);

var G__40718 = cljs.core.next.call(null,seq__40697_40711__$1);
var G__40719 = null;
var G__40720 = (0);
var G__40721 = (0);
seq__40697_40701 = G__40718;
chunk__40698_40702 = G__40719;
count__40699_40703 = G__40720;
i__40700_40704 = G__40721;
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
goog.require_figwheel_backup_ = (function (){var or__34247__auto__ = goog.require__;
if(cljs.core.truth_(or__34247__auto__)){
return or__34247__auto__;
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
var G__40722__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__40722 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__40723__i = 0, G__40723__a = new Array(arguments.length -  0);
while (G__40723__i < G__40723__a.length) {G__40723__a[G__40723__i] = arguments[G__40723__i + 0]; ++G__40723__i;}
  args = new cljs.core.IndexedSeq(G__40723__a,0,null);
} 
return G__40722__delegate.call(this,args);};
G__40722.cljs$lang$maxFixedArity = 0;
G__40722.cljs$lang$applyTo = (function (arglist__40724){
var args = cljs.core.seq(arglist__40724);
return G__40722__delegate(args);
});
G__40722.cljs$core$IFn$_invoke$arity$variadic = G__40722__delegate;
return G__40722;
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
figwheel.client.file_reloading.gloader = ((typeof goog.net.jsloader.safeLoad !== 'undefined')?(function (p1__40725_SHARP_,p2__40726_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__40725_SHARP_)].join('')),p2__40726_SHARP_);
}):((typeof goog.net.jsloader.load !== 'undefined')?(function (p1__40727_SHARP_,p2__40728_SHARP_){
return goog.net.jsloader.load([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__40727_SHARP_)].join(''),p2__40728_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__40729 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__40729.addCallback(((function (G__40729){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(G__40729))
);

G__40729.addErrback(((function (G__40729){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(G__40729))
);

return G__40729;
});
figwheel.client.file_reloading.write_script_tag_import = figwheel.client.file_reloading.reload_file_in_html_env;
goog.exportSymbol('figwheel.client.file_reloading.write_script_tag_import', figwheel.client.file_reloading.write_script_tag_import);
figwheel.client.file_reloading.worker_import_script = (function figwheel$client$file_reloading$worker_import_script(request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e40730){if((e40730 instanceof Error)){
var e = e40730;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e40730;

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
}catch (e40731){if((e40731 instanceof Error)){
var e = e40731;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e40731;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path))
});
goog.exportSymbol('figwheel.client.file_reloading.create_node_script_import_fn', figwheel.client.file_reloading.create_node_script_import_fn);
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__40732 = cljs.core._EQ_;
var expr__40733 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__40732.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__40733))){
return figwheel.client.file_reloading.create_node_script_import_fn.call(null);
} else {
if(cljs.core.truth_(pred__40732.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__40733))){
return figwheel.client.file_reloading.write_script_tag_import;
} else {
if(cljs.core.truth_(pred__40732.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__40733))){
return figwheel.client.file_reloading.worker_import_script;
} else {
return ((function (pred__40732,expr__40733){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__40732,expr__40733))
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__40735,callback){
var map__40736 = p__40735;
var map__40736__$1 = ((((!((map__40736 == null)))?((((map__40736.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40736.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40736):map__40736);
var file_msg = map__40736__$1;
var request_url = cljs.core.get.call(null,map__40736__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return (function (){var or__34247__auto__ = goog.object.get(goog.global,"FIGWHEEL_IMPORT_SCRIPT");
if(cljs.core.truth_(or__34247__auto__)){
return or__34247__auto__;
} else {
return figwheel.client.file_reloading.reload_file_STAR_;
}
})().call(null,request_url,((function (map__40736,map__40736__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__40736,map__40736__$1,file_msg,request_url))
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
figwheel.client.file_reloading.reloader_loop = (function (){var c__37476__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37476__auto__){
return (function (){
var f__37477__auto__ = (function (){var switch__37388__auto__ = ((function (c__37476__auto__){
return (function (state_40776){
var state_val_40777 = (state_40776[(1)]);
if((state_val_40777 === (7))){
var inst_40772 = (state_40776[(2)]);
var state_40776__$1 = state_40776;
var statearr_40778_40805 = state_40776__$1;
(statearr_40778_40805[(2)] = inst_40772);

(statearr_40778_40805[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40777 === (1))){
var state_40776__$1 = state_40776;
var statearr_40779_40806 = state_40776__$1;
(statearr_40779_40806[(2)] = null);

(statearr_40779_40806[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40777 === (4))){
var inst_40740 = (state_40776[(7)]);
var inst_40740__$1 = (state_40776[(2)]);
var state_40776__$1 = (function (){var statearr_40780 = state_40776;
(statearr_40780[(7)] = inst_40740__$1);

return statearr_40780;
})();
if(cljs.core.truth_(inst_40740__$1)){
var statearr_40781_40807 = state_40776__$1;
(statearr_40781_40807[(1)] = (5));

} else {
var statearr_40782_40808 = state_40776__$1;
(statearr_40782_40808[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40777 === (15))){
var inst_40757 = (state_40776[(8)]);
var inst_40754 = (state_40776[(9)]);
var inst_40759 = inst_40757.call(null,inst_40754);
var state_40776__$1 = state_40776;
var statearr_40783_40809 = state_40776__$1;
(statearr_40783_40809[(2)] = inst_40759);

(statearr_40783_40809[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40777 === (13))){
var inst_40766 = (state_40776[(2)]);
var state_40776__$1 = state_40776;
var statearr_40784_40810 = state_40776__$1;
(statearr_40784_40810[(2)] = inst_40766);

(statearr_40784_40810[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40777 === (6))){
var state_40776__$1 = state_40776;
var statearr_40785_40811 = state_40776__$1;
(statearr_40785_40811[(2)] = null);

(statearr_40785_40811[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40777 === (17))){
var inst_40763 = (state_40776[(2)]);
var state_40776__$1 = state_40776;
var statearr_40786_40812 = state_40776__$1;
(statearr_40786_40812[(2)] = inst_40763);

(statearr_40786_40812[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40777 === (3))){
var inst_40774 = (state_40776[(2)]);
var state_40776__$1 = state_40776;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40776__$1,inst_40774);
} else {
if((state_val_40777 === (12))){
var state_40776__$1 = state_40776;
var statearr_40787_40813 = state_40776__$1;
(statearr_40787_40813[(2)] = null);

(statearr_40787_40813[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40777 === (2))){
var state_40776__$1 = state_40776;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40776__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_40777 === (11))){
var inst_40745 = (state_40776[(10)]);
var inst_40752 = figwheel.client.file_reloading.blocking_load.call(null,inst_40745);
var state_40776__$1 = state_40776;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40776__$1,(14),inst_40752);
} else {
if((state_val_40777 === (9))){
var inst_40745 = (state_40776[(10)]);
var state_40776__$1 = state_40776;
if(cljs.core.truth_(inst_40745)){
var statearr_40788_40814 = state_40776__$1;
(statearr_40788_40814[(1)] = (11));

} else {
var statearr_40789_40815 = state_40776__$1;
(statearr_40789_40815[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40777 === (5))){
var inst_40740 = (state_40776[(7)]);
var inst_40746 = (state_40776[(11)]);
var inst_40745 = cljs.core.nth.call(null,inst_40740,(0),null);
var inst_40746__$1 = cljs.core.nth.call(null,inst_40740,(1),null);
var state_40776__$1 = (function (){var statearr_40790 = state_40776;
(statearr_40790[(10)] = inst_40745);

(statearr_40790[(11)] = inst_40746__$1);

return statearr_40790;
})();
if(cljs.core.truth_(inst_40746__$1)){
var statearr_40791_40816 = state_40776__$1;
(statearr_40791_40816[(1)] = (8));

} else {
var statearr_40792_40817 = state_40776__$1;
(statearr_40792_40817[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40777 === (14))){
var inst_40745 = (state_40776[(10)]);
var inst_40757 = (state_40776[(8)]);
var inst_40754 = (state_40776[(2)]);
var inst_40755 = console.log("Loading!",inst_40745);
var inst_40756 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_40757__$1 = cljs.core.get.call(null,inst_40756,inst_40745);
var state_40776__$1 = (function (){var statearr_40793 = state_40776;
(statearr_40793[(8)] = inst_40757__$1);

(statearr_40793[(12)] = inst_40755);

(statearr_40793[(9)] = inst_40754);

return statearr_40793;
})();
if(cljs.core.truth_(inst_40757__$1)){
var statearr_40794_40818 = state_40776__$1;
(statearr_40794_40818[(1)] = (15));

} else {
var statearr_40795_40819 = state_40776__$1;
(statearr_40795_40819[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40777 === (16))){
var inst_40754 = (state_40776[(9)]);
var inst_40761 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_40754);
var state_40776__$1 = state_40776;
var statearr_40796_40820 = state_40776__$1;
(statearr_40796_40820[(2)] = inst_40761);

(statearr_40796_40820[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40777 === (10))){
var inst_40768 = (state_40776[(2)]);
var state_40776__$1 = (function (){var statearr_40797 = state_40776;
(statearr_40797[(13)] = inst_40768);

return statearr_40797;
})();
var statearr_40798_40821 = state_40776__$1;
(statearr_40798_40821[(2)] = null);

(statearr_40798_40821[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40777 === (8))){
var inst_40746 = (state_40776[(11)]);
var inst_40748 = console.log("Evaling!",inst_40746);
var inst_40749 = eval(inst_40746);
var state_40776__$1 = (function (){var statearr_40799 = state_40776;
(statearr_40799[(14)] = inst_40748);

return statearr_40799;
})();
var statearr_40800_40822 = state_40776__$1;
(statearr_40800_40822[(2)] = inst_40749);

(statearr_40800_40822[(1)] = (10));


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
});})(c__37476__auto__))
;
return ((function (switch__37388__auto__,c__37476__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__37389__auto__ = null;
var figwheel$client$file_reloading$state_machine__37389__auto____0 = (function (){
var statearr_40801 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40801[(0)] = figwheel$client$file_reloading$state_machine__37389__auto__);

(statearr_40801[(1)] = (1));

return statearr_40801;
});
var figwheel$client$file_reloading$state_machine__37389__auto____1 = (function (state_40776){
while(true){
var ret_value__37390__auto__ = (function (){try{while(true){
var result__37391__auto__ = switch__37388__auto__.call(null,state_40776);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37391__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37391__auto__;
}
break;
}
}catch (e40802){if((e40802 instanceof Object)){
var ex__37392__auto__ = e40802;
var statearr_40803_40823 = state_40776;
(statearr_40803_40823[(5)] = ex__37392__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40776);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40802;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37390__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40824 = state_40776;
state_40776 = G__40824;
continue;
} else {
return ret_value__37390__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__37389__auto__ = function(state_40776){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__37389__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__37389__auto____1.call(this,state_40776);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$state_machine__37389__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__37389__auto____0;
figwheel$client$file_reloading$state_machine__37389__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__37389__auto____1;
return figwheel$client$file_reloading$state_machine__37389__auto__;
})()
;})(switch__37388__auto__,c__37476__auto__))
})();
var state__37478__auto__ = (function (){var statearr_40804 = f__37477__auto__.call(null);
(statearr_40804[(6)] = c__37476__auto__);

return statearr_40804;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37478__auto__);
});})(c__37476__auto__))
);

return c__37476__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(var_args){
var G__40826 = arguments.length;
switch (G__40826) {
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

figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__40828,callback){
var map__40829 = p__40828;
var map__40829__$1 = ((((!((map__40829 == null)))?((((map__40829.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40829.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40829):map__40829);
var file_msg = map__40829__$1;
var namespace = cljs.core.get.call(null,map__40829__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__40829,map__40829__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__40829,map__40829__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__40831){
var map__40832 = p__40831;
var map__40832__$1 = ((((!((map__40832 == null)))?((((map__40832.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40832.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40832):map__40832);
var file_msg = map__40832__$1;
var namespace = cljs.core.get.call(null,map__40832__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__40834){
var map__40835 = p__40834;
var map__40835__$1 = ((((!((map__40835 == null)))?((((map__40835.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40835.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40835):map__40835);
var file_msg = map__40835__$1;
var namespace = cljs.core.get.call(null,map__40835__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__34235__auto__ = cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,file_msg));
if(and__34235__auto__){
var or__34247__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__34247__auto__)){
return or__34247__auto__;
} else {
var or__34247__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__34247__auto____$1)){
return or__34247__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__34235__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__40837,callback){
var map__40838 = p__40837;
var map__40838__$1 = ((((!((map__40838 == null)))?((((map__40838.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40838.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40838):map__40838);
var file_msg = map__40838__$1;
var request_url = cljs.core.get.call(null,map__40838__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__40838__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__37476__auto___40888 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37476__auto___40888,out){
return (function (){
var f__37477__auto__ = (function (){var switch__37388__auto__ = ((function (c__37476__auto___40888,out){
return (function (state_40873){
var state_val_40874 = (state_40873[(1)]);
if((state_val_40874 === (1))){
var inst_40847 = cljs.core.seq.call(null,files);
var inst_40848 = cljs.core.first.call(null,inst_40847);
var inst_40849 = cljs.core.next.call(null,inst_40847);
var inst_40850 = files;
var state_40873__$1 = (function (){var statearr_40875 = state_40873;
(statearr_40875[(7)] = inst_40849);

(statearr_40875[(8)] = inst_40848);

(statearr_40875[(9)] = inst_40850);

return statearr_40875;
})();
var statearr_40876_40889 = state_40873__$1;
(statearr_40876_40889[(2)] = null);

(statearr_40876_40889[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40874 === (2))){
var inst_40850 = (state_40873[(9)]);
var inst_40856 = (state_40873[(10)]);
var inst_40855 = cljs.core.seq.call(null,inst_40850);
var inst_40856__$1 = cljs.core.first.call(null,inst_40855);
var inst_40857 = cljs.core.next.call(null,inst_40855);
var inst_40858 = (inst_40856__$1 == null);
var inst_40859 = cljs.core.not.call(null,inst_40858);
var state_40873__$1 = (function (){var statearr_40877 = state_40873;
(statearr_40877[(11)] = inst_40857);

(statearr_40877[(10)] = inst_40856__$1);

return statearr_40877;
})();
if(inst_40859){
var statearr_40878_40890 = state_40873__$1;
(statearr_40878_40890[(1)] = (4));

} else {
var statearr_40879_40891 = state_40873__$1;
(statearr_40879_40891[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40874 === (3))){
var inst_40871 = (state_40873[(2)]);
var state_40873__$1 = state_40873;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40873__$1,inst_40871);
} else {
if((state_val_40874 === (4))){
var inst_40856 = (state_40873[(10)]);
var inst_40861 = figwheel.client.file_reloading.reload_js_file.call(null,inst_40856);
var state_40873__$1 = state_40873;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40873__$1,(7),inst_40861);
} else {
if((state_val_40874 === (5))){
var inst_40867 = cljs.core.async.close_BANG_.call(null,out);
var state_40873__$1 = state_40873;
var statearr_40880_40892 = state_40873__$1;
(statearr_40880_40892[(2)] = inst_40867);

(statearr_40880_40892[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40874 === (6))){
var inst_40869 = (state_40873[(2)]);
var state_40873__$1 = state_40873;
var statearr_40881_40893 = state_40873__$1;
(statearr_40881_40893[(2)] = inst_40869);

(statearr_40881_40893[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40874 === (7))){
var inst_40857 = (state_40873[(11)]);
var inst_40863 = (state_40873[(2)]);
var inst_40864 = cljs.core.async.put_BANG_.call(null,out,inst_40863);
var inst_40850 = inst_40857;
var state_40873__$1 = (function (){var statearr_40882 = state_40873;
(statearr_40882[(12)] = inst_40864);

(statearr_40882[(9)] = inst_40850);

return statearr_40882;
})();
var statearr_40883_40894 = state_40873__$1;
(statearr_40883_40894[(2)] = null);

(statearr_40883_40894[(1)] = (2));


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
});})(c__37476__auto___40888,out))
;
return ((function (switch__37388__auto__,c__37476__auto___40888,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__37389__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__37389__auto____0 = (function (){
var statearr_40884 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40884[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__37389__auto__);

(statearr_40884[(1)] = (1));

return statearr_40884;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__37389__auto____1 = (function (state_40873){
while(true){
var ret_value__37390__auto__ = (function (){try{while(true){
var result__37391__auto__ = switch__37388__auto__.call(null,state_40873);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37391__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37391__auto__;
}
break;
}
}catch (e40885){if((e40885 instanceof Object)){
var ex__37392__auto__ = e40885;
var statearr_40886_40895 = state_40873;
(statearr_40886_40895[(5)] = ex__37392__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40873);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40885;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37390__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40896 = state_40873;
state_40873 = G__40896;
continue;
} else {
return ret_value__37390__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__37389__auto__ = function(state_40873){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__37389__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__37389__auto____1.call(this,state_40873);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__37389__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__37389__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__37389__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__37389__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__37389__auto__;
})()
;})(switch__37388__auto__,c__37476__auto___40888,out))
})();
var state__37478__auto__ = (function (){var statearr_40887 = f__37477__auto__.call(null);
(statearr_40887[(6)] = c__37476__auto___40888);

return statearr_40887;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37478__auto__);
});})(c__37476__auto___40888,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__40897,opts){
var map__40898 = p__40897;
var map__40898__$1 = ((((!((map__40898 == null)))?((((map__40898.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40898.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40898):map__40898);
var eval_body = cljs.core.get.call(null,map__40898__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__40898__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__34235__auto__ = eval_body;
if(cljs.core.truth_(and__34235__auto__)){
return typeof eval_body === 'string';
} else {
return and__34235__auto__;
}
})())){
var code = eval_body;
try{figwheel.client.utils.debug_prn.call(null,["Evaling file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e40900){var e = e40900;
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
return (function (p1__40901_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__40901_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__40902){
var vec__40903 = p__40902;
var k = cljs.core.nth.call(null,vec__40903,(0),null);
var v = cljs.core.nth.call(null,vec__40903,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__40906){
var vec__40907 = p__40906;
var k = cljs.core.nth.call(null,vec__40907,(0),null);
var v = cljs.core.nth.call(null,vec__40907,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__40913,p__40914){
var map__40915 = p__40913;
var map__40915__$1 = ((((!((map__40915 == null)))?((((map__40915.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40915.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40915):map__40915);
var opts = map__40915__$1;
var before_jsload = cljs.core.get.call(null,map__40915__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__40915__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__40915__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__40916 = p__40914;
var map__40916__$1 = ((((!((map__40916 == null)))?((((map__40916.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40916.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40916):map__40916);
var msg = map__40916__$1;
var files = cljs.core.get.call(null,map__40916__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__40916__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__40916__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__37476__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37476__auto__,map__40915,map__40915__$1,opts,before_jsload,on_jsload,reload_dependents,map__40916,map__40916__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__37477__auto__ = (function (){var switch__37388__auto__ = ((function (c__37476__auto__,map__40915,map__40915__$1,opts,before_jsload,on_jsload,reload_dependents,map__40916,map__40916__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_41070){
var state_val_41071 = (state_41070[(1)]);
if((state_val_41071 === (7))){
var inst_40933 = (state_41070[(7)]);
var inst_40932 = (state_41070[(8)]);
var inst_40931 = (state_41070[(9)]);
var inst_40930 = (state_41070[(10)]);
var inst_40938 = cljs.core._nth.call(null,inst_40931,inst_40933);
var inst_40939 = figwheel.client.file_reloading.eval_body.call(null,inst_40938,opts);
var inst_40940 = (inst_40933 + (1));
var tmp41072 = inst_40932;
var tmp41073 = inst_40931;
var tmp41074 = inst_40930;
var inst_40930__$1 = tmp41074;
var inst_40931__$1 = tmp41073;
var inst_40932__$1 = tmp41072;
var inst_40933__$1 = inst_40940;
var state_41070__$1 = (function (){var statearr_41075 = state_41070;
(statearr_41075[(7)] = inst_40933__$1);

(statearr_41075[(8)] = inst_40932__$1);

(statearr_41075[(9)] = inst_40931__$1);

(statearr_41075[(11)] = inst_40939);

(statearr_41075[(10)] = inst_40930__$1);

return statearr_41075;
})();
var statearr_41076_41159 = state_41070__$1;
(statearr_41076_41159[(2)] = null);

(statearr_41076_41159[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41071 === (20))){
var inst_40973 = (state_41070[(12)]);
var inst_40981 = figwheel.client.file_reloading.sort_files.call(null,inst_40973);
var state_41070__$1 = state_41070;
var statearr_41077_41160 = state_41070__$1;
(statearr_41077_41160[(2)] = inst_40981);

(statearr_41077_41160[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41071 === (27))){
var state_41070__$1 = state_41070;
var statearr_41078_41161 = state_41070__$1;
(statearr_41078_41161[(2)] = null);

(statearr_41078_41161[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41071 === (1))){
var inst_40922 = (state_41070[(13)]);
var inst_40919 = before_jsload.call(null,files);
var inst_40920 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_40921 = (function (){return ((function (inst_40922,inst_40919,inst_40920,state_val_41071,c__37476__auto__,map__40915,map__40915__$1,opts,before_jsload,on_jsload,reload_dependents,map__40916,map__40916__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__40910_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__40910_SHARP_);
});
;})(inst_40922,inst_40919,inst_40920,state_val_41071,c__37476__auto__,map__40915,map__40915__$1,opts,before_jsload,on_jsload,reload_dependents,map__40916,map__40916__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_40922__$1 = cljs.core.filter.call(null,inst_40921,files);
var inst_40923 = cljs.core.not_empty.call(null,inst_40922__$1);
var state_41070__$1 = (function (){var statearr_41079 = state_41070;
(statearr_41079[(13)] = inst_40922__$1);

(statearr_41079[(14)] = inst_40919);

(statearr_41079[(15)] = inst_40920);

return statearr_41079;
})();
if(cljs.core.truth_(inst_40923)){
var statearr_41080_41162 = state_41070__$1;
(statearr_41080_41162[(1)] = (2));

} else {
var statearr_41081_41163 = state_41070__$1;
(statearr_41081_41163[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41071 === (24))){
var state_41070__$1 = state_41070;
var statearr_41082_41164 = state_41070__$1;
(statearr_41082_41164[(2)] = null);

(statearr_41082_41164[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41071 === (39))){
var inst_41023 = (state_41070[(16)]);
var state_41070__$1 = state_41070;
var statearr_41083_41165 = state_41070__$1;
(statearr_41083_41165[(2)] = inst_41023);

(statearr_41083_41165[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41071 === (46))){
var inst_41065 = (state_41070[(2)]);
var state_41070__$1 = state_41070;
var statearr_41084_41166 = state_41070__$1;
(statearr_41084_41166[(2)] = inst_41065);

(statearr_41084_41166[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41071 === (4))){
var inst_40967 = (state_41070[(2)]);
var inst_40968 = cljs.core.List.EMPTY;
var inst_40969 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_40968);
var inst_40970 = (function (){return ((function (inst_40967,inst_40968,inst_40969,state_val_41071,c__37476__auto__,map__40915,map__40915__$1,opts,before_jsload,on_jsload,reload_dependents,map__40916,map__40916__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__40911_SHARP_){
var and__34235__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__40911_SHARP_);
if(cljs.core.truth_(and__34235__auto__)){
return (cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__40911_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__40911_SHARP_)));
} else {
return and__34235__auto__;
}
});
;})(inst_40967,inst_40968,inst_40969,state_val_41071,c__37476__auto__,map__40915,map__40915__$1,opts,before_jsload,on_jsload,reload_dependents,map__40916,map__40916__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_40971 = cljs.core.filter.call(null,inst_40970,files);
var inst_40972 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_40973 = cljs.core.concat.call(null,inst_40971,inst_40972);
var state_41070__$1 = (function (){var statearr_41085 = state_41070;
(statearr_41085[(17)] = inst_40969);

(statearr_41085[(18)] = inst_40967);

(statearr_41085[(12)] = inst_40973);

return statearr_41085;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_41086_41167 = state_41070__$1;
(statearr_41086_41167[(1)] = (16));

} else {
var statearr_41087_41168 = state_41070__$1;
(statearr_41087_41168[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41071 === (15))){
var inst_40957 = (state_41070[(2)]);
var state_41070__$1 = state_41070;
var statearr_41088_41169 = state_41070__$1;
(statearr_41088_41169[(2)] = inst_40957);

(statearr_41088_41169[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41071 === (21))){
var inst_40983 = (state_41070[(19)]);
var inst_40983__$1 = (state_41070[(2)]);
var inst_40984 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_40983__$1);
var state_41070__$1 = (function (){var statearr_41089 = state_41070;
(statearr_41089[(19)] = inst_40983__$1);

return statearr_41089;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41070__$1,(22),inst_40984);
} else {
if((state_val_41071 === (31))){
var inst_41068 = (state_41070[(2)]);
var state_41070__$1 = state_41070;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41070__$1,inst_41068);
} else {
if((state_val_41071 === (32))){
var inst_41023 = (state_41070[(16)]);
var inst_41028 = inst_41023.cljs$lang$protocol_mask$partition0$;
var inst_41029 = (inst_41028 & (64));
var inst_41030 = inst_41023.cljs$core$ISeq$;
var inst_41031 = (cljs.core.PROTOCOL_SENTINEL === inst_41030);
var inst_41032 = (inst_41029) || (inst_41031);
var state_41070__$1 = state_41070;
if(cljs.core.truth_(inst_41032)){
var statearr_41090_41170 = state_41070__$1;
(statearr_41090_41170[(1)] = (35));

} else {
var statearr_41091_41171 = state_41070__$1;
(statearr_41091_41171[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41071 === (40))){
var inst_41045 = (state_41070[(20)]);
var inst_41044 = (state_41070[(2)]);
var inst_41045__$1 = cljs.core.get.call(null,inst_41044,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_41046 = cljs.core.get.call(null,inst_41044,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_41047 = cljs.core.not_empty.call(null,inst_41045__$1);
var state_41070__$1 = (function (){var statearr_41092 = state_41070;
(statearr_41092[(21)] = inst_41046);

(statearr_41092[(20)] = inst_41045__$1);

return statearr_41092;
})();
if(cljs.core.truth_(inst_41047)){
var statearr_41093_41172 = state_41070__$1;
(statearr_41093_41172[(1)] = (41));

} else {
var statearr_41094_41173 = state_41070__$1;
(statearr_41094_41173[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41071 === (33))){
var state_41070__$1 = state_41070;
var statearr_41095_41174 = state_41070__$1;
(statearr_41095_41174[(2)] = false);

(statearr_41095_41174[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41071 === (13))){
var inst_40943 = (state_41070[(22)]);
var inst_40947 = cljs.core.chunk_first.call(null,inst_40943);
var inst_40948 = cljs.core.chunk_rest.call(null,inst_40943);
var inst_40949 = cljs.core.count.call(null,inst_40947);
var inst_40930 = inst_40948;
var inst_40931 = inst_40947;
var inst_40932 = inst_40949;
var inst_40933 = (0);
var state_41070__$1 = (function (){var statearr_41096 = state_41070;
(statearr_41096[(7)] = inst_40933);

(statearr_41096[(8)] = inst_40932);

(statearr_41096[(9)] = inst_40931);

(statearr_41096[(10)] = inst_40930);

return statearr_41096;
})();
var statearr_41097_41175 = state_41070__$1;
(statearr_41097_41175[(2)] = null);

(statearr_41097_41175[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41071 === (22))){
var inst_40986 = (state_41070[(23)]);
var inst_40983 = (state_41070[(19)]);
var inst_40991 = (state_41070[(24)]);
var inst_40987 = (state_41070[(25)]);
var inst_40986__$1 = (state_41070[(2)]);
var inst_40987__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_40986__$1);
var inst_40988 = (function (){var all_files = inst_40983;
var res_SINGLEQUOTE_ = inst_40986__$1;
var res = inst_40987__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_40986,inst_40983,inst_40991,inst_40987,inst_40986__$1,inst_40987__$1,state_val_41071,c__37476__auto__,map__40915,map__40915__$1,opts,before_jsload,on_jsload,reload_dependents,map__40916,map__40916__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__40912_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__40912_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_40986,inst_40983,inst_40991,inst_40987,inst_40986__$1,inst_40987__$1,state_val_41071,c__37476__auto__,map__40915,map__40915__$1,opts,before_jsload,on_jsload,reload_dependents,map__40916,map__40916__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_40989 = cljs.core.filter.call(null,inst_40988,inst_40986__$1);
var inst_40990 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_40991__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_40990);
var inst_40992 = cljs.core.not_empty.call(null,inst_40991__$1);
var state_41070__$1 = (function (){var statearr_41098 = state_41070;
(statearr_41098[(23)] = inst_40986__$1);

(statearr_41098[(26)] = inst_40989);

(statearr_41098[(24)] = inst_40991__$1);

(statearr_41098[(25)] = inst_40987__$1);

return statearr_41098;
})();
if(cljs.core.truth_(inst_40992)){
var statearr_41099_41176 = state_41070__$1;
(statearr_41099_41176[(1)] = (23));

} else {
var statearr_41100_41177 = state_41070__$1;
(statearr_41100_41177[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41071 === (36))){
var state_41070__$1 = state_41070;
var statearr_41101_41178 = state_41070__$1;
(statearr_41101_41178[(2)] = false);

(statearr_41101_41178[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41071 === (41))){
var inst_41045 = (state_41070[(20)]);
var inst_41049 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_41050 = cljs.core.map.call(null,inst_41049,inst_41045);
var inst_41051 = cljs.core.pr_str.call(null,inst_41050);
var inst_41052 = ["figwheel-no-load meta-data: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_41051)].join('');
var inst_41053 = figwheel.client.utils.log.call(null,inst_41052);
var state_41070__$1 = state_41070;
var statearr_41102_41179 = state_41070__$1;
(statearr_41102_41179[(2)] = inst_41053);

(statearr_41102_41179[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41071 === (43))){
var inst_41046 = (state_41070[(21)]);
var inst_41056 = (state_41070[(2)]);
var inst_41057 = cljs.core.not_empty.call(null,inst_41046);
var state_41070__$1 = (function (){var statearr_41103 = state_41070;
(statearr_41103[(27)] = inst_41056);

return statearr_41103;
})();
if(cljs.core.truth_(inst_41057)){
var statearr_41104_41180 = state_41070__$1;
(statearr_41104_41180[(1)] = (44));

} else {
var statearr_41105_41181 = state_41070__$1;
(statearr_41105_41181[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41071 === (29))){
var inst_40986 = (state_41070[(23)]);
var inst_40983 = (state_41070[(19)]);
var inst_40989 = (state_41070[(26)]);
var inst_40991 = (state_41070[(24)]);
var inst_40987 = (state_41070[(25)]);
var inst_41023 = (state_41070[(16)]);
var inst_41019 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_41022 = (function (){var all_files = inst_40983;
var res_SINGLEQUOTE_ = inst_40986;
var res = inst_40987;
var files_not_loaded = inst_40989;
var dependencies_that_loaded = inst_40991;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_40986,inst_40983,inst_40989,inst_40991,inst_40987,inst_41023,inst_41019,state_val_41071,c__37476__auto__,map__40915,map__40915__$1,opts,before_jsload,on_jsload,reload_dependents,map__40916,map__40916__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__41021){
var map__41106 = p__41021;
var map__41106__$1 = ((((!((map__41106 == null)))?((((map__41106.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41106.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41106):map__41106);
var namespace = cljs.core.get.call(null,map__41106__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_40986,inst_40983,inst_40989,inst_40991,inst_40987,inst_41023,inst_41019,state_val_41071,c__37476__auto__,map__40915,map__40915__$1,opts,before_jsload,on_jsload,reload_dependents,map__40916,map__40916__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_41023__$1 = cljs.core.group_by.call(null,inst_41022,inst_40989);
var inst_41025 = (inst_41023__$1 == null);
var inst_41026 = cljs.core.not.call(null,inst_41025);
var state_41070__$1 = (function (){var statearr_41108 = state_41070;
(statearr_41108[(28)] = inst_41019);

(statearr_41108[(16)] = inst_41023__$1);

return statearr_41108;
})();
if(inst_41026){
var statearr_41109_41182 = state_41070__$1;
(statearr_41109_41182[(1)] = (32));

} else {
var statearr_41110_41183 = state_41070__$1;
(statearr_41110_41183[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41071 === (44))){
var inst_41046 = (state_41070[(21)]);
var inst_41059 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_41046);
var inst_41060 = cljs.core.pr_str.call(null,inst_41059);
var inst_41061 = ["not required: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_41060)].join('');
var inst_41062 = figwheel.client.utils.log.call(null,inst_41061);
var state_41070__$1 = state_41070;
var statearr_41111_41184 = state_41070__$1;
(statearr_41111_41184[(2)] = inst_41062);

(statearr_41111_41184[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41071 === (6))){
var inst_40964 = (state_41070[(2)]);
var state_41070__$1 = state_41070;
var statearr_41112_41185 = state_41070__$1;
(statearr_41112_41185[(2)] = inst_40964);

(statearr_41112_41185[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41071 === (28))){
var inst_40989 = (state_41070[(26)]);
var inst_41016 = (state_41070[(2)]);
var inst_41017 = cljs.core.not_empty.call(null,inst_40989);
var state_41070__$1 = (function (){var statearr_41113 = state_41070;
(statearr_41113[(29)] = inst_41016);

return statearr_41113;
})();
if(cljs.core.truth_(inst_41017)){
var statearr_41114_41186 = state_41070__$1;
(statearr_41114_41186[(1)] = (29));

} else {
var statearr_41115_41187 = state_41070__$1;
(statearr_41115_41187[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41071 === (25))){
var inst_40987 = (state_41070[(25)]);
var inst_41003 = (state_41070[(2)]);
var inst_41004 = cljs.core.not_empty.call(null,inst_40987);
var state_41070__$1 = (function (){var statearr_41116 = state_41070;
(statearr_41116[(30)] = inst_41003);

return statearr_41116;
})();
if(cljs.core.truth_(inst_41004)){
var statearr_41117_41188 = state_41070__$1;
(statearr_41117_41188[(1)] = (26));

} else {
var statearr_41118_41189 = state_41070__$1;
(statearr_41118_41189[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41071 === (34))){
var inst_41039 = (state_41070[(2)]);
var state_41070__$1 = state_41070;
if(cljs.core.truth_(inst_41039)){
var statearr_41119_41190 = state_41070__$1;
(statearr_41119_41190[(1)] = (38));

} else {
var statearr_41120_41191 = state_41070__$1;
(statearr_41120_41191[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41071 === (17))){
var state_41070__$1 = state_41070;
var statearr_41121_41192 = state_41070__$1;
(statearr_41121_41192[(2)] = recompile_dependents);

(statearr_41121_41192[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41071 === (3))){
var state_41070__$1 = state_41070;
var statearr_41122_41193 = state_41070__$1;
(statearr_41122_41193[(2)] = null);

(statearr_41122_41193[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41071 === (12))){
var inst_40960 = (state_41070[(2)]);
var state_41070__$1 = state_41070;
var statearr_41123_41194 = state_41070__$1;
(statearr_41123_41194[(2)] = inst_40960);

(statearr_41123_41194[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41071 === (2))){
var inst_40922 = (state_41070[(13)]);
var inst_40929 = cljs.core.seq.call(null,inst_40922);
var inst_40930 = inst_40929;
var inst_40931 = null;
var inst_40932 = (0);
var inst_40933 = (0);
var state_41070__$1 = (function (){var statearr_41124 = state_41070;
(statearr_41124[(7)] = inst_40933);

(statearr_41124[(8)] = inst_40932);

(statearr_41124[(9)] = inst_40931);

(statearr_41124[(10)] = inst_40930);

return statearr_41124;
})();
var statearr_41125_41195 = state_41070__$1;
(statearr_41125_41195[(2)] = null);

(statearr_41125_41195[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41071 === (23))){
var inst_40986 = (state_41070[(23)]);
var inst_40983 = (state_41070[(19)]);
var inst_40989 = (state_41070[(26)]);
var inst_40991 = (state_41070[(24)]);
var inst_40987 = (state_41070[(25)]);
var inst_40994 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_40996 = (function (){var all_files = inst_40983;
var res_SINGLEQUOTE_ = inst_40986;
var res = inst_40987;
var files_not_loaded = inst_40989;
var dependencies_that_loaded = inst_40991;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_40986,inst_40983,inst_40989,inst_40991,inst_40987,inst_40994,state_val_41071,c__37476__auto__,map__40915,map__40915__$1,opts,before_jsload,on_jsload,reload_dependents,map__40916,map__40916__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__40995){
var map__41126 = p__40995;
var map__41126__$1 = ((((!((map__41126 == null)))?((((map__41126.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41126.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41126):map__41126);
var request_url = cljs.core.get.call(null,map__41126__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_40986,inst_40983,inst_40989,inst_40991,inst_40987,inst_40994,state_val_41071,c__37476__auto__,map__40915,map__40915__$1,opts,before_jsload,on_jsload,reload_dependents,map__40916,map__40916__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_40997 = cljs.core.reverse.call(null,inst_40991);
var inst_40998 = cljs.core.map.call(null,inst_40996,inst_40997);
var inst_40999 = cljs.core.pr_str.call(null,inst_40998);
var inst_41000 = figwheel.client.utils.log.call(null,inst_40999);
var state_41070__$1 = (function (){var statearr_41128 = state_41070;
(statearr_41128[(31)] = inst_40994);

return statearr_41128;
})();
var statearr_41129_41196 = state_41070__$1;
(statearr_41129_41196[(2)] = inst_41000);

(statearr_41129_41196[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41071 === (35))){
var state_41070__$1 = state_41070;
var statearr_41130_41197 = state_41070__$1;
(statearr_41130_41197[(2)] = true);

(statearr_41130_41197[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41071 === (19))){
var inst_40973 = (state_41070[(12)]);
var inst_40979 = figwheel.client.file_reloading.expand_files.call(null,inst_40973);
var state_41070__$1 = state_41070;
var statearr_41131_41198 = state_41070__$1;
(statearr_41131_41198[(2)] = inst_40979);

(statearr_41131_41198[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41071 === (11))){
var state_41070__$1 = state_41070;
var statearr_41132_41199 = state_41070__$1;
(statearr_41132_41199[(2)] = null);

(statearr_41132_41199[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41071 === (9))){
var inst_40962 = (state_41070[(2)]);
var state_41070__$1 = state_41070;
var statearr_41133_41200 = state_41070__$1;
(statearr_41133_41200[(2)] = inst_40962);

(statearr_41133_41200[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41071 === (5))){
var inst_40933 = (state_41070[(7)]);
var inst_40932 = (state_41070[(8)]);
var inst_40935 = (inst_40933 < inst_40932);
var inst_40936 = inst_40935;
var state_41070__$1 = state_41070;
if(cljs.core.truth_(inst_40936)){
var statearr_41134_41201 = state_41070__$1;
(statearr_41134_41201[(1)] = (7));

} else {
var statearr_41135_41202 = state_41070__$1;
(statearr_41135_41202[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41071 === (14))){
var inst_40943 = (state_41070[(22)]);
var inst_40952 = cljs.core.first.call(null,inst_40943);
var inst_40953 = figwheel.client.file_reloading.eval_body.call(null,inst_40952,opts);
var inst_40954 = cljs.core.next.call(null,inst_40943);
var inst_40930 = inst_40954;
var inst_40931 = null;
var inst_40932 = (0);
var inst_40933 = (0);
var state_41070__$1 = (function (){var statearr_41136 = state_41070;
(statearr_41136[(7)] = inst_40933);

(statearr_41136[(8)] = inst_40932);

(statearr_41136[(9)] = inst_40931);

(statearr_41136[(32)] = inst_40953);

(statearr_41136[(10)] = inst_40930);

return statearr_41136;
})();
var statearr_41137_41203 = state_41070__$1;
(statearr_41137_41203[(2)] = null);

(statearr_41137_41203[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41071 === (45))){
var state_41070__$1 = state_41070;
var statearr_41138_41204 = state_41070__$1;
(statearr_41138_41204[(2)] = null);

(statearr_41138_41204[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41071 === (26))){
var inst_40986 = (state_41070[(23)]);
var inst_40983 = (state_41070[(19)]);
var inst_40989 = (state_41070[(26)]);
var inst_40991 = (state_41070[(24)]);
var inst_40987 = (state_41070[(25)]);
var inst_41006 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_41008 = (function (){var all_files = inst_40983;
var res_SINGLEQUOTE_ = inst_40986;
var res = inst_40987;
var files_not_loaded = inst_40989;
var dependencies_that_loaded = inst_40991;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_40986,inst_40983,inst_40989,inst_40991,inst_40987,inst_41006,state_val_41071,c__37476__auto__,map__40915,map__40915__$1,opts,before_jsload,on_jsload,reload_dependents,map__40916,map__40916__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__41007){
var map__41139 = p__41007;
var map__41139__$1 = ((((!((map__41139 == null)))?((((map__41139.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41139.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41139):map__41139);
var namespace = cljs.core.get.call(null,map__41139__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__41139__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_40986,inst_40983,inst_40989,inst_40991,inst_40987,inst_41006,state_val_41071,c__37476__auto__,map__40915,map__40915__$1,opts,before_jsload,on_jsload,reload_dependents,map__40916,map__40916__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_41009 = cljs.core.map.call(null,inst_41008,inst_40987);
var inst_41010 = cljs.core.pr_str.call(null,inst_41009);
var inst_41011 = figwheel.client.utils.log.call(null,inst_41010);
var inst_41012 = (function (){var all_files = inst_40983;
var res_SINGLEQUOTE_ = inst_40986;
var res = inst_40987;
var files_not_loaded = inst_40989;
var dependencies_that_loaded = inst_40991;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_40986,inst_40983,inst_40989,inst_40991,inst_40987,inst_41006,inst_41008,inst_41009,inst_41010,inst_41011,state_val_41071,c__37476__auto__,map__40915,map__40915__$1,opts,before_jsload,on_jsload,reload_dependents,map__40916,map__40916__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_40986,inst_40983,inst_40989,inst_40991,inst_40987,inst_41006,inst_41008,inst_41009,inst_41010,inst_41011,state_val_41071,c__37476__auto__,map__40915,map__40915__$1,opts,before_jsload,on_jsload,reload_dependents,map__40916,map__40916__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_41013 = setTimeout(inst_41012,(10));
var state_41070__$1 = (function (){var statearr_41141 = state_41070;
(statearr_41141[(33)] = inst_41006);

(statearr_41141[(34)] = inst_41011);

return statearr_41141;
})();
var statearr_41142_41205 = state_41070__$1;
(statearr_41142_41205[(2)] = inst_41013);

(statearr_41142_41205[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41071 === (16))){
var state_41070__$1 = state_41070;
var statearr_41143_41206 = state_41070__$1;
(statearr_41143_41206[(2)] = reload_dependents);

(statearr_41143_41206[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41071 === (38))){
var inst_41023 = (state_41070[(16)]);
var inst_41041 = cljs.core.apply.call(null,cljs.core.hash_map,inst_41023);
var state_41070__$1 = state_41070;
var statearr_41144_41207 = state_41070__$1;
(statearr_41144_41207[(2)] = inst_41041);

(statearr_41144_41207[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41071 === (30))){
var state_41070__$1 = state_41070;
var statearr_41145_41208 = state_41070__$1;
(statearr_41145_41208[(2)] = null);

(statearr_41145_41208[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41071 === (10))){
var inst_40943 = (state_41070[(22)]);
var inst_40945 = cljs.core.chunked_seq_QMARK_.call(null,inst_40943);
var state_41070__$1 = state_41070;
if(inst_40945){
var statearr_41146_41209 = state_41070__$1;
(statearr_41146_41209[(1)] = (13));

} else {
var statearr_41147_41210 = state_41070__$1;
(statearr_41147_41210[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41071 === (18))){
var inst_40977 = (state_41070[(2)]);
var state_41070__$1 = state_41070;
if(cljs.core.truth_(inst_40977)){
var statearr_41148_41211 = state_41070__$1;
(statearr_41148_41211[(1)] = (19));

} else {
var statearr_41149_41212 = state_41070__$1;
(statearr_41149_41212[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41071 === (42))){
var state_41070__$1 = state_41070;
var statearr_41150_41213 = state_41070__$1;
(statearr_41150_41213[(2)] = null);

(statearr_41150_41213[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41071 === (37))){
var inst_41036 = (state_41070[(2)]);
var state_41070__$1 = state_41070;
var statearr_41151_41214 = state_41070__$1;
(statearr_41151_41214[(2)] = inst_41036);

(statearr_41151_41214[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41071 === (8))){
var inst_40943 = (state_41070[(22)]);
var inst_40930 = (state_41070[(10)]);
var inst_40943__$1 = cljs.core.seq.call(null,inst_40930);
var state_41070__$1 = (function (){var statearr_41152 = state_41070;
(statearr_41152[(22)] = inst_40943__$1);

return statearr_41152;
})();
if(inst_40943__$1){
var statearr_41153_41215 = state_41070__$1;
(statearr_41153_41215[(1)] = (10));

} else {
var statearr_41154_41216 = state_41070__$1;
(statearr_41154_41216[(1)] = (11));

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
});})(c__37476__auto__,map__40915,map__40915__$1,opts,before_jsload,on_jsload,reload_dependents,map__40916,map__40916__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__37388__auto__,c__37476__auto__,map__40915,map__40915__$1,opts,before_jsload,on_jsload,reload_dependents,map__40916,map__40916__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__37389__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__37389__auto____0 = (function (){
var statearr_41155 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_41155[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__37389__auto__);

(statearr_41155[(1)] = (1));

return statearr_41155;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__37389__auto____1 = (function (state_41070){
while(true){
var ret_value__37390__auto__ = (function (){try{while(true){
var result__37391__auto__ = switch__37388__auto__.call(null,state_41070);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37391__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37391__auto__;
}
break;
}
}catch (e41156){if((e41156 instanceof Object)){
var ex__37392__auto__ = e41156;
var statearr_41157_41217 = state_41070;
(statearr_41157_41217[(5)] = ex__37392__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41070);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41156;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37390__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41218 = state_41070;
state_41070 = G__41218;
continue;
} else {
return ret_value__37390__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__37389__auto__ = function(state_41070){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__37389__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__37389__auto____1.call(this,state_41070);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__37389__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__37389__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__37389__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__37389__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__37389__auto__;
})()
;})(switch__37388__auto__,c__37476__auto__,map__40915,map__40915__$1,opts,before_jsload,on_jsload,reload_dependents,map__40916,map__40916__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__37478__auto__ = (function (){var statearr_41158 = f__37477__auto__.call(null);
(statearr_41158[(6)] = c__37476__auto__);

return statearr_41158;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37478__auto__);
});})(c__37476__auto__,map__40915,map__40915__$1,opts,before_jsload,on_jsload,reload_dependents,map__40916,map__40916__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__37476__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__41221,link){
var map__41222 = p__41221;
var map__41222__$1 = ((((!((map__41222 == null)))?((((map__41222.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41222.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41222):map__41222);
var file = cljs.core.get.call(null,map__41222__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__41222,map__41222__$1,file){
return (function (p1__41219_SHARP_,p2__41220_SHARP_){
if(cljs.core._EQ_.call(null,p1__41219_SHARP_,p2__41220_SHARP_)){
return p1__41219_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__41222,map__41222__$1,file))
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
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__41225){
var map__41226 = p__41225;
var map__41226__$1 = ((((!((map__41226 == null)))?((((map__41226.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41226.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41226):map__41226);
var match_length = cljs.core.get.call(null,map__41226__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__41226__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__41224_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__41224_SHARP_);
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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__41228_SHARP_,p2__41229_SHARP_){
return cljs.core.assoc.call(null,p1__41228_SHARP_,cljs.core.get.call(null,p2__41229_SHARP_,key),p2__41229_SHARP_);
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
var loaded_f_datas_41230 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_41230);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_41230);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__41231,p__41232){
var map__41233 = p__41231;
var map__41233__$1 = ((((!((map__41233 == null)))?((((map__41233.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41233.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41233):map__41233);
var on_cssload = cljs.core.get.call(null,map__41233__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__41234 = p__41232;
var map__41234__$1 = ((((!((map__41234 == null)))?((((map__41234.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41234.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41234):map__41234);
var files_msg = map__41234__$1;
var files = cljs.core.get.call(null,map__41234__$1,new cljs.core.Keyword(null,"files","files",-472457450));
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

//# sourceMappingURL=file_reloading.js.map?rel=1530402586942
