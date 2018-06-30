(ns oddfox.data
  (:require [clojure.string :as str]))

(def time-frame-funcs
  ["on-trigger-thru"
   "in-look-forward"
   "within-x-days-of-trigger"
   "in-trigger-window"
   "within-x-days"
   "on-trigger-from"
   "in-look-back"])

(def filter-funcs
  ["not-inpatient"
   "is-discharge-site"
   "is-trigger"
   "is-outpatient"
   "not-trigger-provider"
   "not-snf"
   "is-inpatient-acute"
   "not-discharge-site"
   "is-trigger-provider"
   "not-outpatient"
   "is-professional"
   "is-inpatient"
   "not-professional"
   "is-snf"
   "not-trigger"])

(def reducer-funcs
  ["sum-cost"
   "epi-id"
   "claim-line-ct"
   "claim-ct-unique"
   "min-number"
   "claim-ct-flag"
   "min-date"
   "max-date"
   "value-counts"
   "mem-ct-unique"
   "max-number"
   "average"])

(def selector-funcs
  ["select-nth-row"
   "select-first-row"
   "select-last-row"
   "select-nth-claim"
   "select-rand-row"
   "select-second-row"
   "select-head-rows"])
