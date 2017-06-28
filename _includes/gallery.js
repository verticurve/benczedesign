function openGallery(items, index) {
    var pswpElement = document.querySelectorAll('.pswp')[0];
    var options = {
        index: index,
        history: false
    };
    // todo: sort should not be done on client side:
    var gallery = new PhotoSwipe(pswpElement, PhotoSwipeUI_Default, items.sort(compare), options);
    gallery.init();
}
function compare(a, b) {
    var aSplit = a.src.split('/');
    var aFileName = aSplit[aSplit.length - 1];
    var bSplit = b.src.split('/');
    var bFileName = bSplit[bSplit.length - 1];
    if (aFileName < bFileName)
        return -1;
    if (aFileName > bFileName)
        return 1;
    return 0;
}