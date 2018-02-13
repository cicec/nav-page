const keys = [
    ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
    ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'],
    ['z', 'x', 'c', 'v', 'b', 'n', 'm']
]

let websites = {
    q: 'qq.com',
    w: 'w3c.com',
    e: 'ele.me',
    r: '',
    t: 'taobao.com',
    y: 'yy.com',
    u: 'uplay.com'
}

const websitesInLocal = JSON.parse(localStorage.getItem('websites'))

if (websitesInLocal) {
    websites = websitesInLocal
}

for (let i = 0; i < keys.length; i++) {
    const row = document.createElement('div')
    row.className = 'row'
    keyboard.appendChild(row)
    for (let j = 0; j < keys[i].length; j++) {
        const key = document.createElement('kbd')
        key.className = 'key'
        key.textContent = keys[i][j]
        const edit = document.createElement('button')
        edit.className = 'edit'
        edit.id = keys[i][j]
        edit.textContent = '编辑'
        edit.onclick = (event) => {
            const site = prompt('请输入要设置为导航的地址')
            websites[event.target.id] = site
            localStorage.setItem('websites', JSON.stringify(websites))
        }
        key.appendChild(edit)
        row.appendChild(key)
    }
}

document.onkeypress = (event) => {
    window.open(`http://${websites[event.key]}`)
}