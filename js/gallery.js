---
---
{% for category in site.data.gallery_categories %}
var {{category.folder}} = [{% 
    for image in site.static_files %}{% 
        assign basePath = '/img/gallery/' | append: {{category.folder}} | append: '/large' %}{% 
        if image.path contains basePath %}{% 
            assign path = image.path %}{% 
            assign folders = path | split: "/" | reverse %}{% 
            assign sizeX = folders[1] | split: "x" | first %}{% 
            assign sizeY = folders[1] | split: "x" | last %}
    { src: '{{ path }}', w: {{sizeX}}, h: {{sizeY}} },{% 
        endif %}{% 
    endfor %}
];{% 
endfor %}

function openGallery(items) {
    var pswpElement = document.querySelectorAll('.pswp')[0];
    var options = {
        index: 0 
    };
    var gallery = new PhotoSwipe(pswpElement, PhotoSwipeUI_Default, items, options);
    gallery.init();
}