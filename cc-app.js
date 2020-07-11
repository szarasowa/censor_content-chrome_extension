var executed = false;
// var hideContent = false;
var lol;
var db = [];
var showAlert;
var blockImg;
var turnOn;
var blockTxt;

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
function restore_options() {
    // Use default value color = 'red' and likesColor = true.
    chrome.storage.sync.get({
        mList: [],
        showAlert: false,
        blockImg: false,
        turnOn: false
    }, function(items) {
        db = [...items.mList];
        showAlert = items.showAlert;
        blockImg = items.blockImg;
        turnOn = items.turnOn;
        console.log("CC-APP status: " + turnOn + "\nCensore: " + db);
        console.log("Options status: \n" + "Show alert: " + items.showAlert + "\nBlock all images: " + items.blockImg);
    });
}

restore_options();

setTimeout(function() {
    turnOn ? replaceText(document.body) : console.log("CC-APP status: " + turnOn);
}, 11);

function replaceText(element) {
    if (element.hasChildNodes()) {
        element.childNodes.forEach(replaceText)
    } else if (element.nodeType === Text.TEXT_NODE) {

        db.some(function(word) {
            var myExp = new RegExp(word, 'gi');

            if (element.textContent.match(myExp)) {
                // hideContent = true;
                element.parentElement.style.color = 'black';
                element.parentElement.style.backgroundColor = 'black';
                element.parentElement.style.opacity = "0.1";

                if (blockImg) {
                    Array.from(document.images).forEach(mImg => {
                        mImg.parentElement.style.opacity = "0.0";
                    })
                }
                if (!executed) {
                    showMeAlert();
                }
            }
        })
    }
}


function showMeAlert() {
    if (showAlert) {
        setTimeout(function() {
            alert("ALERT! AHTUNG! OMG! NOOOOOOOOO! \nCensor Content application found content you want to hide:\n \n" + db);
        }, 100);
    }
    executed = true;
}