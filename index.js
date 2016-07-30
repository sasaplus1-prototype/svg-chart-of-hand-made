(function(){

  'use strict';

  var json = document.getElementById('json-chart-data').innerHTML,
      data = JSON.parse(json).data;

  var xAxisElements = document.querySelectorAll('.js-x-axis'),
      imageElements = document.querySelectorAll('.js-bar-image'),
      countElements = document.querySelectorAll('.js-bar-count'),
      barElements = document.querySelectorAll('.js-bar');

  var i, len, date, count, countText, y;

  for (i = 0, len = data.length; i < len; ++i) {
    date = data[i].date;
    count = data[i].count;
    countText = String(count);

    // add comma
    if (countText.length > 3) {
      countText = [
        countText.slice(0, countText.length - 3),
        countText.slice(-3)
      ].join(',');
    }

    // update labels
    xAxisElements[i].innerHTML = date;
    countElements[i].innerHTML = countText;

    // max height is 95(%)
    // value
    // max chart value is 1000000
    // min height is 15(%), and max height is 95(%), 95 - 15 = 80(%)
    y = 95 - (count / 1000000 * 80)

    imageElements[i].setAttribute('y', (y - 20) + '%');
    countElements[i].setAttribute('y', (y - 2) + '%');
    barElements[i].setAttribute('y1', y + '%');

    if (count > 700000) {
      imageElements[i].setAttribute('xlink:href', 'hoka_07_tatebou.png');
      countElements[i].classList.add('large');
      barElements[i].classList.add('large');
    } else if (count > 300000) {
      imageElements[i].setAttribute('xlink:href', 'hoka_04_exclamation.png');
      countElements[i].classList.add('middle');
      barElements[i].classList.add('middle');
    } else {
      imageElements[i].style.display = 'none';
    }
  }

}());
