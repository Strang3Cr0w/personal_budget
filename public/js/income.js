const submit = document.getElementById('submit')

submit.addEventListener("click", () => {
    const numberToMonth = {1:"January", 2:"February", 3:"March", 4:"April", 5:"May", 6:"June", 7:"July", 8:"August", 9:"September", 10:"October", 11:"November", 12:"December"}
    const date = document.getElementById('date').value;
    const d = new Date(date);
    const month = numberToMonth[d.getMonth()+1];
    const day = d.getDate()+1;
    const income = document.getElementById('income').value;
    fetch(`/income?date=${date}&month=${month}&day=${day}&income=${income}`, {
        method: 'POST'
    })
})