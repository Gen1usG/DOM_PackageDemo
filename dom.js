
window.dom = {
    create(string) {
        let container = document.createElement('template')
        container.innerHTML = string.trim()
        return container.content.childNodes[0]
    },

    after(node, afterNode) {
        node.parentNode.insertBefore(afterNode, node.nextSibling)
    },

    before(node, beforeNode) {
        node.parentNode.insertBefore(beforeNode, node)
    },

    append(parent, child) {
        parent.appendChild(child)
    },

    wrap(node, parentString) {
        let newParent = dom.create(parentString)
        dom.after(node, newParent)
        dom.append(newParent, node)
    },

    remove(node) {
        node.parentNode.removeChild(node)
        return node
    },

    empty(node) {
        let length = node.childNodes.length
        let array = []
        //  node.childNodes 会因为节点的变化而随时改变 
        while (node.childNodes.length !== 0) {
            array.push(dom.remove(node.firstChild))
        }
        return array
    },

    attr(node, attrName, value) {
        if (arguments.length === 2) {
            return node.getAttribute(attrName)
        } else if (arguments.length === 3) {
            node.setAttribute(attrName, value)
        }
    },

    text(node, textContent) {
        if (arguments.length === 1) {
            if ('innerText' in node) {
                return node.innerText
            } else {
                return node.textContent
            }
        } else if (arguments.length === 2) {
            if ('innerText' in node) {
                node.innerText = textContent
            } else {
                node.textContent = textContent
            }
        }
    },

    html(node, htmlContent) {
        if (arguments.length === 1) {
            return node.innerHTML
        } else if (arguments.length === 2) {
            node.innerHTML = htmlContent
        }
    },

    style(node, style) {
        for (key in style) {
            node.style[key] = style[key]
        }
    },

    class: {
        add(node, className) {
            node.classList.add(className)
        },
        remove(node, className) {
            node.classList.remove(className)
        }
    },

    on(node, eventType, fn) {
        node.addEventListener(eventType, fn)
    },

    off(node, eventType, fn) {
        node.removeEventListener(eventType, fn)
    },

    find(selector, scope) {
        return (scope || document).querySelectorAll(selector)
    },

    parent(node) {
        return node.parentNode
    },

    children(node) {
        return node.childNodes
    },

    siblings(node) {
        return Array.from(node.parentNode.children).filter(n => n !== node)
    },

    next(node) {
        let x = node.nextSibling
        // 确保返回的是一个元素节点
        while (x && x.nodeType === 3) {
            x = node.nextSibling
        }
        return x
    },

    previous(node) {
        let x = node.previousSibling
        // 确保返回的是一个元素节点
        while (x && x.nodeType === 3) {
            x = node.previousSibling
        }
        return x
    },

    each(node, fn) {
        fn(node)
        if (node.children.length > 0) {
            for (let i = 0; i < node.children.length; i++) {
                dom.each(node.children[i], fn)
            }
        }
    },

    index(node) {
        for (let i = 0; i < node.parentNode.children.length; i++) {
            if (node.parentNode.children[i] === node) {
                return i
            }
        }
    }
}