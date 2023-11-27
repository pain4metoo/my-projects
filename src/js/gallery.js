{
  const galleryItems = document.querySelectorAll('.gallery_img');
  const gallerySrcArr = [];

  Array.from(galleryItems).forEach((el) => gallerySrcArr.push(el.src));

  gallerySrcArr.sort((a, b) => Math.random() - 0.5);

  galleryItems.forEach((el, i) => (el.src = gallerySrcArr[i]));
}
