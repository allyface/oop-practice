function Clock({ template }) {

  this._template = template;
}

Clock.prototype._render = function() {

    let date = new Date();

    let hours = date.getHours();
    if (hours < 10) hours = '0' + hours;

    let mins = date.getMinutes();
    if (mins < 10) min = '0' + mins;

    let secs = date.getSeconds();
    if (secs < 10) secs = '0' + secs;

    let output = this._template
      .replace('h', hours)
      .replace('m', mins)
      .replace('s', secs);

    console.log(output);
  };

Clock.prototype.stop = function() {
    clearInterval(this._timer);
  };

Clock.prototype.start = function() {
    this._render();
    this._timer = setInterval(() => this._render(), 1000);
  };
