(ns oddfox.db
  (:require [reagent.core :as r]
            [re-com.core :as re-com]
            [re-frame.core :as rf]
            [clojure.string :as str]))


(def metric-model
  {:metricName nil
   :claimRelationship nil
   :metricCodes []
   :timeframes []
   :filters []
   :reducers []})
