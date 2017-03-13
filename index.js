// left a bunch of stuff in here in case I need to come back to see what didn't work

function getFirstSelector(selector) {
  var elementToReturn = document.querySelector(selector)
  return elementToReturn
}

function nestedTarget() {
  //var elementToReturn = document.querySelector('div#nested.target')
  //var elementToReturn = document.querySelector('#nested.target')
  //document.querySelector('#nested.target')
  //document.querySelector('#nested .target')
  //document.querySelector('div#nested .target')
  //document.querySelector('.target')
  //nested.querySelector('.target')
  var nesty = document.querySelector('#nested .target')
  //var pully = nesty.querySelectorAll('.target')
  // return pully
  return nesty

  }

  function increaseRankBy(n) {
    //const lis = document.getElementById('app').querySelectorAll('ul.ranked-list li')
    //var start = 1
    //var lis = document.querySelectorAll('ul.ranked-list li')
    var lis = document.querySelectorAll('ul.ranked-list')
    for (let i = 0, l = lis.length; i < l; i++) {
      lis[i].innerHTML = (i + 1 + n).toString()
}
  }

function deepestChild() {
  //var lis = grand-node.querySelectorAll()
  //var lisLenth = lis.length/2
  //var returnable = lis[LisLength].toString
  //console.log(returnable)
  var lis = document.querySelectorAll('#grand-node div')
  // var retunrable = lis[lis.length-1].innerHTML
  var returnable = lis[lis.length-1]
  return returnable
  //var returnableActual = returnable.innerHTML
  //console.log(returnableActual)
}
