(function () {
  var templates = document.querySelector("template").content;
  var cardSmallWithImage = templates.querySelector(".card_size_s.card_content_image");
  var cardSmallWithText = templates.querySelector(".card_size_s.card_content_text");
  var cardMiddle = templates.querySelector(".card_size_m");
  var cardLarge = templates.querySelector(".card_size_l");
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
        break
      case "m":
        origin = cardMiddle.cloneNode(true);
        break
      case "l":
        origin = cardLarge.cloneNode(true);
        break
      default:
        console.log("DATA ERROR: unknown size for article card");
    };

    var title = origin.querySelector(".card__title");
    var image = origin.querySelector(".card__picture");
    var description = origin.querySelector(".card__description");
    var author = origin.querySelector(".card__author");

    title.textContent = articleData.title;
    title.style.color = articleData.titleColor;
    if (image) {
      var src = articleData.image.slice(0, articleData.image.length - 4);
      var format = articleData.image.slice(articleData.image.length - 4);;
      image.querySelector(".card__image_origin_s").setAttribute("srcset", src + format);
      image.querySelector(".card__image_origin_m").setAttribute("srcset", src + "@2x" + format);
      image.querySelector(".card__image_origin_l").setAttribute("srcset", src + "@3x" + format);
      image.querySelector(".card__image_webp_s").setAttribute("srcset", src + ".webp");
      image.querySelector(".card__image_webp_m").setAttribute("srcset", src + "@2x.webp");
      image.querySelector(".card__image_webp_l").setAttribute("srcset", src + "@3x.webp");
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
