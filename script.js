const track = document.getElementById('carouselTrack');
    let position = 0;
    function moveCarousel(direction) {
    const width = 300 + 16;
    position += direction * width;
    const maxScroll = track.scrollWidth - track.clientWidth;
    if (position < 0) position = 0;
    if (position > maxScroll) position = maxScroll;
    track.style.transform = `translateX(-${position}px)`;
}