package com.nilhcem.nsthings.scraper

import org.jsoup.Jsoup
import org.jsoup.nodes.Document

class Scraper {

    companion object {
        val BASE_URL = "http://programmer.97things.oreilly.com"
        val THINGS_URL = BASE_URL + "/wiki/index.php/Contributions_Appearing_in_the_Book"
    }

    fun getThings(): List<Thing> {
        println("Get 97 things")
        return jsoup(THINGS_URL).select("#bodyContent > ol > li")
                .mapIndexed { id, element ->
                    val aTags = element.select("a")
                    val title = aTags[0].text()
                    val link = "$BASE_URL${aTags[0].attr("href")}"
                    val author = aTags[1].text()
                    ThingUrl(id + 1, title, author, link)
                }
                .map {
                    println("Get thing: #${it.id} - url: ${it.url}")
                    val content = getContent(jsoup(it.url).select("#bodyContent").html())
                    Thing(it.id, it.title, it.author, content)
                }
    }

    private fun jsoup(url: String, nbRetries: Int = 3): Document {
        (0..nbRetries).forEach {
            try {
                return Jsoup.connect(url).get()
            } catch (e: Exception) {
                System.err.println("Error: ${e.message}. Retry");
                if (it == nbRetries - 1) {
                    throw e
                }
            }
        }
        throw IllegalStateException("This should not happen")
    }

    private fun getContent(html: String): String {
        val startIndex = html.indexOf("<!-- start content -->", 0, true)
        val endIndex = with(html.indexOf("<p>By <a href=\"/wiki/index.php", 0, true)) {
            if (this == -1) {
                html.indexOf("<p><br> By <a href=\"/wiki/index.php", 0, true)
            } else this
        }

        return html.substring(
                if (startIndex == -1) 0 else startIndex + 22,
                if (endIndex == -1) html.lastIndex else endIndex
        ).trim()
    }
}
