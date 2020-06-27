
const domek =  document.getElementsByTagName('html')[0].innerHTML;
const brzuszek = document.getElementsByTagName('body')[0];
const height = window.innerHeight;
console.log(height);
var lol;
var db = ['youtube', 'a'];

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
function restore_options() {
  // Use default value color = 'red' and likesColor = true.
  chrome.storage.sync.get({
      favoriteColor: ['red', 'bbb'],
      likesColor: true
  }, function (items) {
      db.push(items.favoriteColor);
      console.log("adync..: " + db);

      replaceText(document.body);
  });
}
restore_options();



console.log('Censore: '+db);



// szukaj();



function replaceText(element) {
  if (element.hasChildNodes()) {
    element.childNodes.forEach(replaceText)
  } else if (element.nodeType === Text.TEXT_NODE) {

    db.forEach(function(word) {
      var myExp = new RegExp(word, 'gi');

      if (element.textContent.match(myExp)) {
        element.parentElement.style.color = 'black';
        element.parentElement.style.backgroundColor = 'black';
      //   const newElement = document.createElement('span')
      //   newElement.setAttribute('style', 'rainbow');
      //   newElement.innerHTML = element.textContent.replace(/(coronavirus)/gi, '<span class="rainbow">$1</span>')
      //   element.parentElement.setAttribute('style', 'rainbow');
          
      }
   })
  }
}

// var db = new RegExp('youtube', 'gi'); 
// var regex = new RegExp(db.join("|"), "i");

// element.textContent.match(/google/gi) 


// function szukaj() {
//   console.log("szukam...");
//   if(domek.search("a")) {
//     console.log("YES");
//     popup();
//   }
// }


// function popup() {
//   const nWindow = document.createElement('div');
//   nWindow.style.height = height;
//   // nWindow.style.backgroundColor = 'black';
//   nWindow.setAttribute('class', 'rainbow, trans');
//   // nWindow.style.height = "'" + height.valueOf + "'";
//   // nWindow.style.height = '3323px';
//   nWindow.innerText = "awdw";
//   brzuszek.insertBefore(nWindow, brzuszek.childNodes[0]);
// }

