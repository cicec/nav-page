const keys = [
    ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
    ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
    ['Z', 'X', 'C', 'V', 'B', 'N', 'M']
]

const websites = {
    q: 'qq.com',
    w: 'w3c.com',
    e: 'ele.me',
    r: '',
    t: 'taobao.com',
    y: ''
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
        edit.textContent = '编辑'
        key.appendChild(edit)
        row.appendChild(key)
    }
}

document.onkeypress = (event) => {
    window.open(`http://${websites[event.key]}`)
}