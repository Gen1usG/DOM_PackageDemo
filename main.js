// test create
{
    // let div1 = dom.create('<div><span>haha</span></div>')
    // console.log(div1)
}

// test after before
{
    // let div2 = dom.create('<div><span>div2</span></div>')
    // let div3 = dom.create('<div><span>div3</span></div>')
    // dom.after(test3, div2)
    // dom.before(test3, div3)
    // console.log(test1)
}

// test append
{
    // dom.append(test1, dom.create('<div>div2</div>'))
}

// test wrap
{
    // dom.wrap(test3, '<div style="border:1px solid red"></div>')
    // console.log(test1)
}

// test remove
{
    // dom.remove(test2)
}

// test empty
{
    // console.log(dom.empty(test1))
}

// test attr
{
    // dom.attr(test2, 'love', 'peach')
    // console.log(dom.attr(test2, 'love'))
}

// test text 
{
    // dom.text(test2, 'love')
    // console.log(test3)
}

// test style
{
    dom.style(test3, { 'color': 'red', 'fontSize': '20px' })
    console.log(dom.style(test3, 'color'))
    dom.style(test2, 'border', '1px solid green')
}

//test class add remove
{
    // dom.class.add(test2, 'red')
    // dom.class.add(test3, 'blue')
    // dom.class.remove(test3, 'blue')
}

// test on of
{
    // dom.on(test2, 'click', () => {
    //     console.log(test2)
    // })
}

// test siblings next
{
    // console.log(dom.siblings(test3))
    // console.log(dom.next(test3, true))
    // console.log(dom.next(test3))
}

// test each
{
    // dom.each(test1, (a) => { console.log(a) })
}

// test index
{
    // console.log(dom.index(test4))
}
