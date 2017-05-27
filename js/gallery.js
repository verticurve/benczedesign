function openGallery(items) {
    var pswpElement = document.querySelectorAll('.pswp')[0];
    var options = {
        index: 0 
    };
    var gallery = new PhotoSwipe(pswpElement, PhotoSwipeUI_Default, items, options);
    gallery.init();
}