var mList = [];
const refreshButton = document.getElementById('refreshButton');

// Saves options to chrome.storage
function save_options() {
    var showAlert = document.getElementById('showAlertCheckbox').checked;
    var blockImg = document.getElementById('blockImagesCheckbox').checked;
    var turnOn = document.getElementById('turnOnCheckbox').checked;
    var blockWlg = document.getElementById('blockWlgPl').checked;
    var blockWlgEn = document.getElementById('blockWlgEn').checked;
    chrome.storage.sync.set({
        showAlert: showAlert,
        blockImg: blockImg,
        turnOn: turnOn,
        mList: mList,
        blockWlg: blockWlg,
        blockWlgEn: blockWlgEn
    }, function () {
        var mSvg = document.getElementById('mSvg');
        mSvg.style.visibility = "visible";
        console.log("Options Saved.")
        turnOn ? chrome.browserAction.setIcon({ path: "images/ico_128-active.png" }) : chrome.browserAction.setIcon({ path: "images/ico_128.png" });
        refreshButton.disabled = true;
        setTimeout(function () {
            mSvg.style.visibility = "hidden";
            refreshButton.disabled = false;
        }, 550);
    });
}

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
function restore_options() {
    chrome.storage.sync.get({
        showAlert: false,
        blockImg: false,
        turnOn: true,
        mList: [],
        blockWlg: false,
        blockWlgEn: false
    },
        function (items) {
            document.getElementById('turnOnCheckbox').checked = items.turnOn;
            items.turnOn ? chrome.browserAction.setIcon({ path: "images/ico_128-active.png" }) : chrome.browserAction.setIcon({ path: "images/ico_128.png" });
            document.getElementById('showAlertCheckbox').checked = items.showAlert;
            document.getElementById('blockImagesCheckbox').checked = items.blockImg;
            document.getElementById('blockWlgPl').checked = items.blockWlg;
            document.getElementById('blockWlgEn').checked = items.blockWlgEn;
            console.log("Censore: " + items.mList);
            mList = [...items.mList];
            Array.from(items.mList).forEach(e => newElement(e));
            addRemoveButton();
            var mSvg = document.getElementById('mSvg');
            mSvg.style.visibility = "hidden";
        });
}
document.addEventListener('DOMContentLoaded', restore_options);

Array.from(document.getElementsByClassName("mCheckbox-toggle")).forEach(function (e) {
    e.addEventListener('click', save_options);
})

// Create a new list item when clicking on the "Add" button
function addByButton() {
    var inputValue = document.getElementById("myInput").value;

    setTimeout(function () {
        if (inputValue === '') {
            alert("You must write something!");
        } else {
            mList.push(String(inputValue));
            newElement(inputValue);
            save_options()
        }
    }, 300)
}

var close = document.getElementsByClassName("close");

function newElement(v) {
    console.log("adding new element to UI... " + v)

    var li = document.createElement("li");
    var t = document.createTextNode(v);
    li.appendChild(t);

    document.getElementById("myUL").appendChild(li);
    document.getElementById("myInput").value = "";

    var span = document.createElement("SPAN");
    span.className = "close";
    li.appendChild(span);
}

document.getElementById('addButton').addEventListener('click', () => {
    addByButton();
});

document.getElementById('myInput').onkeydown = function (e) {
    if (e.keyCode == 13) {
        addByButton();
    }
};

function addRemoveButton() {
    var ulList = document.getElementById("myUL");
    ulList.addEventListener('click', function (e) {
        if (e.target && e.target.matches('span.close')) {
            var deleteMe = e.target.parentElement.textContent;
            console.log("close super bleble: " + deleteMe);

            try {
                var indx = mList.indexOf(deleteMe)
                mList.splice(indx, 1);
                e.target.parentElement.style.display = "none";
                save_options();
            } catch (e) {
                console.log(e);
            }
        }
    }, false)
}

refreshButton.addEventListener('click', refreshWebsite)

function refreshWebsite() {
    chrome.tabs.reload()
}