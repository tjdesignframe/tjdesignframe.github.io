var # = function(selector) {
  if (! (this instanceof #) ) {
    return new #(selector);
  }
  this.el = document.querySelectorAll(selector);
  return this;
}

#.prototype.get = function() {
  return this.el.value;
}
