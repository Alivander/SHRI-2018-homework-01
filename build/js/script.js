(function () {
  var templates = document.querySelector("template").content;
  var cardSmallWithImage = templates.querySelector(".small-card.small-card_content_image");
  var cardSmallWithText = templates.querySelector(".small-card.small-card_content_text");
  var cardMiddle = templates.querySelector(".middle-card");
  var cardLarge = templates.querySelector(".large-card");
  var container = document.querySelector(".page__container");

  var documentContent = document.createDocumentFragment();

  function createArticle (articleData) {
    var origin;

    switch(articleData.size) {
      case "s":
        if (articleData.image) {
          origin = cardSmallWithImage.cloneNode(true);
        } else if (articleData.description) {
          origin = cardSmallWithText.cloneNode(true);
        };
        var title = origin.querySelector(".small-card__title");
        var image = origin.querySelector(".card__picture");
        var description = origin.querySelector(".card__description");
        var author = origin.querySelector(".card__author");
        break
      case "m":
        origin = cardMiddle.cloneNode(true);
        var title = origin.querySelector(".card__title");
        var image = origin.querySelector(".card__picture");
        var description = origin.querySelector(".card__description");
        var author = origin.querySelector(".card__author");
        break
      case "l":
        origin = cardLarge.cloneNode(true);
        var title = origin.querySelector(".card__title");
        var image = origin.querySelector(".card__picture");
        var description = origin.querySelector(".card__description");
        var author = origin.querySelector(".card__author");
        break
      default:
        console.log("DATA ERROR: unknown size for article card");
    };

    var title = origin.querySelector("[class*=\"title\"]");
    var image = origin.querySelector(".image");
    var description = origin.querySelector("[class*=\"description\"]");
    var author = origin.querySelector("[class*=\"author\"]");

    title.textContent = articleData.title;
    title.style.color = articleData.titleColor;
    if (image) {
      var src = articleData.image.slice(0, articleData.image.length - 4);
      var format = articleData.image.slice(articleData.image.length - 4);;
      image.querySelector(".image__origin_s").setAttribute("src", src + format);
      image.querySelector(".image__origin_s").setAttribute("alt", articleData.title);
      image.querySelector(".image__origin_m").setAttribute("srcset", src + "@2x" + format);
      image.querySelector(".image__origin_l").setAttribute("srcset", src + "@3x" + format);
      image.querySelector(".image__webp_s").setAttribute("srcset", src + ".webp");
      image.querySelector(".image__webp_m").setAttribute("srcset", src + "@2x.webp");
      image.querySelector(".image__webp_l").setAttribute("srcset", src + "@3x.webp");
    };
    if (description) {
      description.innerHTML = articleData.description;
    };
    if (author) {
      author.textContent = articleData.channelName;
    };

    return origin;
  };

  for (var i = 0; i < data.length; i++) {
    documentContent.appendChild(createArticle(data[i]));
  };

  container.appendChild(documentContent);
})();
