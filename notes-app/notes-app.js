// Query and remove
// const p = document.querySelector('p')
// p.remove()

// Query all and remove

const ps = document.querySelectorAll('p')

ps.forEach(function (item) {
    item.textContent = '*****'
    // console.log(item.textContent);
    // item.remove()
})