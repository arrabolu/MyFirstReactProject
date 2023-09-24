
const htmlElement = {
    type : 'a' ,
    props :  { href : 'http://example.com', target: '_blank' },
    
    children : 'Click here to navigate to example.com'
}

const divEle = document.getElementById('root')

function CreateElement(divEle, htmlElement) {
        const a = document.createElement(htmlElement.type)
        a.innerHTML = htmlElement.children
        a.setAttribute("href",htmlElement.props.href)
        a.setAttribute("target",htmlElement.props.target)
        divEle.appendChild(a)
}   

CreateElement(divEle,htmlElement)