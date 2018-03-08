(function () {
  var templates = document.querySelector("template").content;
  var cardSmall = templates.querySelector(".card_size_s");
  var cardMiddle = templates.querySelector(".card_size_m");
  var cardLarge = templates.querySelector(".card_size_l");
  var container = document.querySelector(".page__container");

  var documentContent = document.createDocumentFragment();

  function createArticle (articleData) {
    var origin;

    switch(articleData.size) {
      case "s":
        origin = cardSmall.cloneNode(true);
        if (articleData.image) {
          var description = origin.querySelector(".card__description");
          description.parentNode.removeChild(description);
        } else if (articleData.description) {
          var image = origin.querySelector(".card__image");
          image.parentNode.removeChild(image);
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
    var image = origin.querySelector(".card__image");
    var description = origin.querySelector(".card__description");

    title.innerHTML = articleData.title;
    title.style.color = articleData.titleColor;
    if (image) {
      image.setAttribute("src", articleData.image)
    };
    if (description) {
      description.innerHTML = articleData.description
    };

    return origin;
  };

  for (var i = 0; i < data.length; i++) {
    documentContent.appendChild(createArticle(data[i]));
  };

  container.appendChild(documentContent);
})();
