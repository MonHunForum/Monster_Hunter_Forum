var currentUser;

for (var key in localStorage) {
    if ((key != 'length')&&( key != 'key') && (key != 'getItem') && (key != 'setItem') && (key != 'clear') && (key != 'removeItem')) {
        currentUser = key
    }
}

setTimeout (() => {
    var check = localStorage.getItem(currentUser)
    console.log(check)
    document.getElementById('logger').value = check;
    document.getElementById('userNow').value = currentUser;
    setTimeout (() => {
        console.log('timing test')
        document.getElementById('checkForm').submit();
    }, 200)
}, 200)