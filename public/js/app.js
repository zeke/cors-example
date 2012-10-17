// Generated by CoffeeScript 1.3.3
(function() {

  $(function() {
    return $('#rainbow').load(function() {
      var canvas, ctx, img,
        _this = this;
      img = new Image;
      canvas = document.createElement("canvas");
      ctx = canvas.getContext("2d");
      img.crossOrigin = "Anonymous";
      img.src = this.getAttribute('src');
      return img.onload = function() {
        var color, rgb, _i, _len, _ref, _results;
        canvas.width = img.width;
        canvas.height = img.height;
        ctx.drawImage(img, 0, 0);
        _ref = createPalette(img, 5);
        _results = [];
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
          rgb = _ref[_i];
          color = "rgb(" + (rgb.join(", ")) + ")";
          _results.push($("#colors").append("<li style='background-color:" + color + "'></li>"));
        }
        return _results;
      };
    });
  });

}).call(this);
