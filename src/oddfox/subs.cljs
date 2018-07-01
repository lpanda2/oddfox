(ns oddfox.subs
  (:require [reagent.core :as r]
            [re-com.core :as re-com]
            [re-frame.core :as rf]
            [clojure.string :as str]))


(rf/reg-sub
 :filters
 (fn [db _]
   (:filters db)))
