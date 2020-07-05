var executed = false;
var hideContent = false;
const domek = document.getElementsByTagName('html')[0].innerHTML;
const brzuszek = document.getElementsByTagName('body')[0];
const height = window.innerHeight;
console.log(height);
var lol;
var db = ['youtube'];
var showAlert;

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
function restore_options() {
    // Use default value color = 'red' and likesColor = true.
    chrome.storage.sync.get({
        favoriteColor: ['red', 'bbb'],
        likesColor: true,
        showAlert: false
    }, function(items) {
        db.push(items.favoriteColor);
        console.log("Censore..: " + db);
        showAlert = items.showAlert;
        console.log("Show alert: " + items.showAlert);
        replaceText(document.body);
    });
}
restore_options();

function replaceText(element) {
    if (element.hasChildNodes()) {
        element.childNodes.forEach(replaceText)
    } else if (element.nodeType === Text.TEXT_NODE) {

        db.some(function(word) {
            var myExp = new RegExp(word, 'gi');

            if (element.textContent.match(myExp)) {
                hideContent = true;
                element.parentElement.style.color = 'black';
                element.parentElement.style.backgroundColor = 'black';
                //   const newElement = document.createElement('span')
                //   newElement.setAttribute('style', 'rainbow');
                //   newElement.innerHTML = element.textContent.replace(/(coronavirus)/gi, '<span class="rainbow">$1</span>')
                //   element.parentElement.setAttribute('style', 'rainbow');
                if (showAlert) {
                    showMeAlert();
                }
            }
        })
    }
}


function showMeAlert() {
    if (!executed) {
        setTimeout(function() {
            alert("ALERT! AHTUNG! OMG! NOOOOOOOOO! \nCensor Content application found content you want to hide:\n \n" + db);
        }, 300);
    }
    executed = true;
}