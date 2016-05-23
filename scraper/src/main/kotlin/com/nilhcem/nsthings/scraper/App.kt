package com.nilhcem.nsthings.scraper

import com.squareup.moshi.JsonAdapter
import com.squareup.moshi.Moshi
import com.squareup.moshi.Types
import java.io.File

fun main(args: Array<String>) {
    toJson(Scraper().getThings())
}

fun toJson(things: List<Thing>) {
    File("output").mkdir()
    File("output/things.json").printWriter().use { out ->
        val moshi = Moshi.Builder().build()
        val adapter: JsonAdapter<List<Thing>> = moshi.adapter(Types.newParameterizedType(List::class.java, Thing::class.java))
        out.println(adapter.toJson(things))
    }
}
