const images = document.querySelectorAll(`.img`);

images.forEach((img, i) => {
    img.addEventListener(`click`, () => {
        const nextImage = i + 1 < images.length ? images[i + 1] : images[0];
        nextImage.scrollIntoView({ behavior: 'smooth', block: 'center' });
    });
});