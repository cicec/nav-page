const createNode = (tag, attributes) => {
    const node = document.createElement(tag)
    Object.keys(attributes).forEach((key) => {
        node[key] = attributes[key]
    })
    return node
}

const createIcon = (website) => {
    const icon = createNode('img', { className: 'icon' })
    if (website) {
        icon.src = `http://${website}/favicon.ico`
        icon.onerror = () => {
            icon.src = '1.png'
        }
    } else {
        icon.src = '1.png'
    }
    return icon
}

const main = () => {
    const keys = [
        ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
        ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'],
        ['z', 'x', 'c', 'v', 'b', 'n', 'm']
    ]
    let websites = {
        q: 'qq.com',
        e: 'ele.me',
        t: 'taobao.com',
        y: 'yy.com',
        b: 'baidu.com',
        i: 'iqiyi.com',
        z: 'zhihu.com'
    }

    const websitesInLocal = JSON.parse(localStorage.getItem('websites'))
    if (websitesInLocal) {
        websites = websitesInLocal
    }

    for (let i = 0; i < keys.length; i++) {
        const keyboard = document.getElementById('keyboard')
        const row = createNode('div', { className: 'row' })
        keyboard.appendChild(row)
        for (let j = 0; j < keys[i].length; j++) {
            const key = createNode('kbd', { className: 'key', textContent: keys[i][j] })
            const edit = createNode('button', {
                className: 'edit',
                id: keys[i][j],
                textContent: '编辑',
                onclick: (event) => {
                    const site = prompt('请输入要设置为导航的地址')
                    websites[event.target.id] = site
                    key.appendChild(createIcon(site))
                    localStorage.setItem('websites', JSON.stringify(websites))
                }
            })
            key.appendChild(createIcon(websites[keys[i][j]]))
            key.appendChild(edit)
            row.appendChild(key)
        }
    }

    document.onkeypress = (event) => {
        window.open(`http://${websites[event.key]}`)
    }
}

window.onload = main