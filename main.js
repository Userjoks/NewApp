const Cats = {
    'cats': [
        ['images/Cats/cat1.jpg', 'Shironeko', 'Самый счастливый и сонный кот в мире', 'images/dislike.svg', 'images/like.svg'],
        ['images/Cats/cat2.jpg', 'Garfi', 'Самый злой кот в мире','images/dislike.svg', 'images/like.svg'],
        ['images/Cats/cat3.jpg', 'Sam', 'У кота Сэма есть потрясающие брови','images/dislike.svg', 'images/like.svg'],
        ['images/Cats/cat4.jpg', 'Snoopy', 'Самый очаровательный кот','images/dislike.svg', 'images/like.svg'],
        ['images/Cats/cat5.jpg', 'Venus', 'Кошка с двумя лицами','images/dislike.svg', 'images/like.svg'],
        ['images/Cats/cat6.jpg', 'Maru', 'Повелитель коробок','images/dislike.svg', 'images/like.svg'],
        ['images/Cats/cat7.jpg', 'Lil Bub', 'Вечный кот','images/dislike.svg', 'images/like.svg'],
        ['images/Cats/cat8.jpg', 'Banye', 'Всегда удивленный кот','images/dislike.svg', 'images/like.svg'],
        ['images/Cats/cat9.jpg', 'Grumpy Cat', 'Недовольный кот','images/dislike.svg', 'images/like.svg'],
        ['images/Cats/cat10.jpg', 'Hamilton', 'Кот-хипстер','images/dislike.svg', 'images/like.svg'],
        ['images/Cats/cat11.jpg', 'Nala', 'Кошка, которая всегда в шоке','images/dislike.svg', 'images/like.svg'],
        ['images/Cats/cat12.jpg', 'Colonel Meow', 'Кот с самой длинной шерстью','images/dislike.svg', 'images/like.svg'],

    ],
}

let page = document.querySelectorAll('.page')
for (let i = 0; i < page.length; i++) {
    page[i].addEventListener('click', () => {
        const current = document.querySelector('.first')
        current.classList.remove('first')
        page[i].classList.add('first')
        if (page[0].classList.contains('first')) {
            TilePage() } else {
            TablePage()
        }
    })
}TilePage()


function TilePage() {
    document.querySelector('.wrapper').innerHTML = `<div class="content_bl"></div>`
    if (localStorage.length === 0) {
        for (key in Cats) {
            for (let i = 0; i < local[key].length; i++) {
                let div = document.createElement('div')
                let a = (div.innerHTML = `
                  <img src='${Cats.cats[i][0]}'>
                  <div class='frst_description'>
                    <p>${Cats[key][i][1]}</p>
                    <img class='take' src='${(Cats[key][i][3])}'' ></img>
                  </div>
                  `)
                document.querySelector('.content_bl').appendChild(div)
                div.classList.add('content_div')
            }
          }
        } else {
        let local = JSON.parse(localStorage.getItem('storage'))
        for (key in local) {
            for (let i = 0; i < local[key].length; i++) {
                let div = document.createElement('div')
                let a = (div.innerHTML = `
                  <img src='${Cats.cats[i][0]}'>
                  <div class='frst_description'>
                    <p>${Cats[key][i][1]}</p>
                    <img class='take' src='${(Cats[key][i][4])}''></img>
                  </div>
                  `)
                document.querySelector('.content_bl').appendChild(div)
                div.classList.add('content_div')
            }
        }
    }
}
function ButtonLike(button) {
    if (localStorage.length === 0) {
        for (key in Cats) {
            if (Cats[key][i][4] === true) {
                Cats[key][i][3] = false
                button.src = 'images/dislike.svg'
            } else {
                Cats[key][i][4] = true
                button.src = 'images/like.svg'
            }
          }
        localStorage.setItem('storage', JSON.stringify(Cats))
            } else {
        let local = JSON.parse(localStorage.getItem('storage'))
        for (key in local) {
            if (Cats[key][i][4] === true) {
                Cats[key][i][3] = false
                button.src = 'images/dislike.svg'
            } else {
                Cats[key][i][4] = true
                button.src = 'images/like.svg'
            }
        }
        localStorage.setItem('storage', JSON.stringify(local))
    }
}


function TablePage() {
    document.querySelector('.wrapper').innerHTML = `<table class='content_tb'></table>`
    if (localStorage.length === 0) {
        for (key in Cats) {
            for (let i = 0; i < local[key].length; i++) {
                let row = document.createElement('tr')
                row.innerHTML = `
                 <td class='img'><img src='${Cats.cats[i][0]}'></td>
                  <td class='content_description'>
                  <h2>${Cats[key][i][1]}</h2>
                  <p>${Cats[key][i][2]}</p>
                  </td>      
                    <td class='content_like'>
                    <img class='take" src='${(Cats[key][i][3])}">
                  </td>
                 `
                document.querySelector('.content_tb').appendChild(row)
                row.classList.add('content_row')
            }
        }} else {
        let local = JSON.parse(localStorage.getItem('storage'))
        for (key in local) {
            for (let i = 0; i < local[key].length; i++) {
                let row = document.createElement('tr')
                row.innerHTML = `
                 <td class='img'><img src='${Cats.cats[i][0]}'></td>
                  <td class='content_description'>
                  <h2>${Cats[key][i][1]}</h2>
                  <p>${Cats[key][i][2]}</p>
                  </td>      
                    <td class='content_like'>
                    <img class='take' src='${(Cats[key][i][4])}'>
                  </td>
                 `
                document.querySelector('.content_tb').appendChild(row)
                row.classList.add('content_row')
            }
        }
    }
}