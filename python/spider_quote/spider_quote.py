import requests
import parsel


def fetch_content(url, timeout=1):
    try:
        response = requests.get(url, timeout=timeout)
        response.raise_for_status()
    except (requests.HTTPError, requests.ReadTimeout):
        return ""
    else:
        return response.text


def extract_quotes(text):
    selector = parsel.Selector(text)
    quotes = []
    # Para cada uma das citações
    for quote in selector.css("div.quote"):
        # Recuperamos o texto contigo na tag span de classe text
        text = quote.css("span.text::text").get()
        author = quote.css("small.author::text").get()
        tags = quote.css("a.tag::text").getall()
        quotes.append({
            "text": text,
            "author": author,
            "tags": tags,
        })
    return quotes


def get_all_quotes():
    base_url = "http://quotes.toscrape.com"
    next_page = "/"
    quotes = []
    while next_page:
        content = fetch_content(base_url + next_page)
        # Extrai e adiciona as novas citações à lista
        quotes.extend(extract_quotes(content))

        next_page = (
            parsel.Selector(content).css("li.next > a::attr(href)").get()
        )
    return quotes


def extract_author(text):
    selector = parsel.Selector(text)
    return {
        "name": selector.css("h3.author-title::text").get(),
        "birth-date": selector.css("span.author-born-date::text").get(),
        "birth-location": selector.css(
            "span.author-born-location::text"
        ).get(),
        "description": selector.css("div.author-description::text").get(),
    }


def get_all_authors():
    authors = []
    base_url = "http://quotes.toscrape.com"
    next_page = "/"
    while next_page:
        content = fetch_content(base_url + next_page)
        selector = parsel.Selector(content)
        authors_url = selector.css("div.quote > span > a::attr(href)").getall()

        for url in authors_url:
            detail_content = fetch_content(base_url + url, timeout=2)
            authors.append(extract_author(detail_content))

        next_page = (
            selector.css("li.next > a::attr(href)").get()
        )

    return authors


print("conteúdo correto", fetch_content("http://quotes.toscrape.com/"))
print("vazio:", fetch_content("http://httpbin.org/status/404"))
print("quando o servidor demora mais de 1 segundo para responder", fetch_content("http://httpbin.org/delay/3"))
print("quando o servidor demora menos de 1 segundo para responder", fetch_content("http://httpbin.org/get"))
page_content = fetch_content("https://quotes.toscrape.com/")
print(extract_quotes(page_content))
print(get_all_quotes())
page_content = fetch_content("https://quotes.toscrape.com/author/Marilyn-Monroe/")
author = extract_author(page_content)
print(author)
print(get_all_authors())
