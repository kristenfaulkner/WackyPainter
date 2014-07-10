(function (spatula) {
  var P = spatula.P = (spatula.P || {});

  var Painter = P.Painter = function ($rootEl) {
    this.$el = $rootEl;
  }

  Painter.COLORS = [
    'green',
    'purple',
    'yellow',
    'blanchedalmond',
    'bisque',
    'cornflowerblue',
    'chartreuse',
    'darkgoldenrod',
    'mauve',
    'darksalmon',
    'dodgerblue',
    'lightgoldenrodyellow'
  ]

  Painter.prototype.setUpCanvas = function () {
    this.$el.html(buildString(500));
  }

  var buildString = function (num) {
    var squareString = "";
    _.times(num, function () {
      squareString += "<div class='square'></div>"
    })
    return squareString;
  }

  Painter.prototype.setUpHandlers = function () {
    var painter = this;
    //not event delegation
    // $('.square').click(this.wackyPaint);
    //event delegation
    $('#easel').on('mouseenter', '.square', painter.wackyPaint.bind(painter));
    $('#add-row').click(painter.addRow.bind(painter))
    $('#color-button').click(painter.handleColor.bind(painter))
  }

  Painter.prototype.wackyPaint = function (event) {
    var $square = $(event.target);
    $square.css('background-color', (this.color || _.sample(Painter.COLORS)))
  }

  Painter.prototype.addRow = function (event) {
    // event.preventDefault();
    //this totally works, but performance trade-offs
    // $('#easel').append(buildString(25));
    this.$el.append(buildString(25));
  }

  Painter.prototype.handleColor = function (event) {
    event.preventDefault();
    this.color = $('#color-field').val();
    console.log(this.color)
  }


})(this)
