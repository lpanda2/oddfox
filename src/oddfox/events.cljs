(ns oddfox.events
  (:require [reagent.core :as r]
            [re-com.core :as re-com]
            [re-frame.core :as rf]
            [oddfox.db :as db]
            [clojure.string :as str]))


;; -- Domino 2 - Event Handlers -----------------------------------------------

(rf/reg-event-db
 :initialize
 (fn [_ _]
   (db/metric-model)))


(rf/reg-event-db
 :add-filter
 (fn [db [_ new-filter]]
   (update-in db [:filters] conj new-filter)))
