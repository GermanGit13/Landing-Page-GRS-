document.querySelector('.js-round-hover').addEventListener('mouseenter',function(event){
    var distSrc = this.getAttribute('data-hover');
    var imgSrc = this.getAttribute('src');
    this.setAttribute('data-hover', imgSrc);
    this.setAttribute('src', distSrc);
  });

document.querySelector('.js-round-hover').addEventListener('mouseout',function(event){
    var distSrc = this.getAttribute('data-hover');
    var imgSrc = this.getAttribute('src');
    this.setAttribute('data-hover', imgSrc);
    this.setAttribute('src', distSrc);
});