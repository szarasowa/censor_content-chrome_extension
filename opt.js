// Saves options to chrome.storage
function save_options() {
    var color = ['andrzej duda'];
    var likesColor = document.getElementById('like').checked;
    var showAlert = document.getElementById('showAlertCheckbox').checked;
    var blockImg = document.getElementById('blockImagesCheckbox').checked;
    chrome.storage.sync.set({
        favoriteColor: color,
        likesColor: likesColor,
        showAlert: showAlert,
        blockImg: blockImg
    }, function() {
        // Update status to let user know options were saved.
        var status = document.getElementById('status');
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
        favoriteColor: ['red'],
        likesColor: true,
        showAlert: false,
        blockImg: false
    }, function(items) {
        document.getElementById('color').value = items.favoriteColor;
        document.getElementById('like').checked = items.likesColor;
        document.getElementById('showAlertCheckbox').checked = items.showAlert;
        document.getElementById('blockImagesCheckbox').checked = items.blockImg;
    });
}
document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click',
    save_options);



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
function newElement() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("myInput").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === '') {
        alert("You must write something!");
    } else {
        document.getElementById("myUL").appendChild(li);
    }
    document.getElementById("myInput").value = "";

    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);

    for (i = 0; i < close.length; i++) {
        close[i].onclick = function() {
            var div = this.parentElement;
            div.style.display = "none";
        }
    }
}

document.getElementById('addButton').addEventListener('click', newElement);