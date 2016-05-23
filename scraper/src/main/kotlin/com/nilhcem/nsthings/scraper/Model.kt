package com.nilhcem.nsthings.scraper

data class ThingUrl(val id: Int, val title: String, val author: String, val url: String)
data class Thing(val id: Int, val title: String, val from: String, val desc: String)
