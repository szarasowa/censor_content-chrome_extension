var mList = [];

// Saves options to chrome.storage
function save_options() {
    // var color = ['andrzej duda'];
    // var likesColor = document.getElementById('like').checked;
    var showAlert = document.getElementById('showAlertCheckbox').checked;
    var blockImg = document.getElementById('blockImagesCheckbox').checked;
    var turnOn = document.getElementById('turnOnCheckbox').checked;
    chrome.storage.sync.set({
        // favoriteColor: color,
        // likesColor: likesColor,
        showAlert: showAlert,
        blockImg: blockImg,
        turnOn: turnOn,
        mList: mList
    }, function() {
        // Update status to let user know options were saved.
        var status = document.getElementById('status');
        console.log("Options Saved.")
        status.textContent = 'Options saved.';
        setTimeout(function() {
            status.textContent = '';
        }, 750);
    });
}

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
function restore_options() {
    // Use default value color = 'red' and likesColor = true.
    chrome.storage.sync.get({
        // favoriteColor: ['red'],
        // likesColor: true,
        showAlert: false,
        blockImg: false,
        turnOn: true,
        mList: []
    }, function(items) {
        // document.getElementById('color').value = items.favoriteColor;
        document.getElementById('turnOnCheckbox').checked = items.turnOn;
        // document.getElementById('like').checked = items.likesColor;
        document.getElementById('showAlertCheckbox').checked = items.showAlert;
        document.getElementById('blockImagesCheckbox').checked = items.blockImg;
        Array.from(items.mList).forEach(e => newElement(e));
    });
}
document.addEventListener('DOMContentLoaded', restore_options);
// document.getElementById('save').addEventListener('click',
//     save_options);

Array.from(document.getElementsByClassName("mCheckbox-toggle")).forEach(function(e) {
    e.addEventListener('click', save_options);
})

// setTimeout(function() {
//     Array.from(document.getElementsByClassName("close")).forEach(
//         function(e) {
//             e.addEventListener('click', save_options);
//         }
//     )
// }, 100)




// const getStorageData = key =>
//     new Promise((resolve, reject) =>
//         chrome.storage.sync.get(key, result =>
//             chrome.runtime.lastError
//                 ? reject(Error(chrome.runtime.lastError.message))
//                 : resolve(result)
//         )
//     )

// const { data } = await getStorageData('data')


// const setStorageData = data =>
//     new Promise((resolve, reject) =>
//         chrome.storage.sync.set(data, () =>
//             chrome.runtime.lastError
//                 ? reject(Error(chrome.runtime.lastError.message))
//                 : resolve()
//         )
//     )

// await setStorageData({ data: [someData] })



// *** CODE FOR html FORM ***
// Create a "close" button and append it to each list item
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    myNodelist[i].appendChild(span);
    span.addEventListener('click', save_options);
}

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
    }
}

// Add a "checked" symbol when clicking on a list item
// var list = document.querySelector('ul');
// list.addEventListener('click', function(ev) {
//     if (ev.target.tagName === 'LI') {
//         ev.target.classList.toggle('checked');
//     }
// }, false);

// Create a new list item when clicking on the "Add" button
function addByButton() {
    var inputValue = document.getElementById("myInput").value;

    setTimeout(function() {
        if (inputValue === '') {
            alert("You must write something!");
        } else {
            mList.push(String(inputValue));
            newElement(inputValue);
            save_options()
        }
    }, 300)
}

function newElement(v) {
    var li = document.createElement("li");
    var t = document.createTextNode(v);
    li.appendChild(t);

    document.getElementById("myUL").appendChild(li);
    document.getElementById("myInput").value = "";

    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.addEventListener('click', save_options);
    span.appendChild(txt);
    li.appendChild(span);

    for (i = 0; i < close.length; i++) {
        close[i].onclick = function() {
            var div = this.parentElement;
            div.style.display = "none";
        }
    }
}

document.getElementById('addButton').addEventListener('click', () => {
    addByButton();
});

document.getElementById('myInput').onkeydown = function(e) {
    if (e.keyCode == 13) {
        addByButton();
    }
};