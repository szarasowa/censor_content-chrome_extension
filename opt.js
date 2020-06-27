var lol;

// Saves options to chrome.storage
function save_options() {
    var color = ['andrzej duda'];
    var likesColor = document.getElementById('like').checked;
    chrome.storage.sync.set({
        favoriteColor: color,
        likesColor: likesColor
    }, function () {
        // Update status to let user know options were saved.
        var status = document.getElementById('status');
        status.textContent = 'Options saved.';
        setTimeout(function () {
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
        likesColor: true
    }, function (items) {
        document.getElementById('color').value = items.favoriteColor;
        document.getElementById('like').checked = items.likesColor;
        lol = items.favoriteColor;
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
