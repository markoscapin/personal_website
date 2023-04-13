function type(mainWrapper, speed) {

    function isSingleNode(element) {
        return element.childElementCount === 0
    }

     function typeChild(element, parent) {
        const tag = document.createElement(element.tagName)
        tag.classList = element.classList
        parent.append(tag)
        var i = 0
        var timer =  setInterval(()=> {
            if (i<element.innerHTML.length +1 ) {
                    tag.innerHTML = element.innerHTML.substring(0,i)
                    i++
            } else {
                clearInterval(timer)
            }
        }, speed)
    } 

    function iterate(wrapper, parent) {
        wrapper.childNodes.forEach((element, index)=> {
            if (element.tagName === undefined) {
                return
            }
            setTimeout(()=> {
                typeChild(element, parent)
            },1000*index)
            
        }
        )
    }

    const wrapper = document.createElement("div")
    wrapper.innerHTML = mainWrapper.innerHTML
    mainWrapper.innerHTML = "";

    iterate(wrapper, mainWrapper)
}

export default type