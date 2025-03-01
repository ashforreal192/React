// This code is an attempt to create a custom React-like rendering function that manually renders a React-like object
// (a JavaScript object representing an HTML element) into a specified container in the DOM.



function customRender(reactElement, container){
    // Below code is just for demonstration.
    // const domElement = document.createElement(reactElement.type)
    // domElement.innerHTML = reactElement.children
    // domElement.setAttribute('href', reactElement.props.href)
    // domElement.setAttribute('targer', reactElement.props.target)


    const domElement2 = document.createElement(reactElement.type)
    domElement2.innerHTML = reactElement.children
    for (const prop in reactElement.props) {
        if (prop === 'children') continue;
        domElement2.setAttribute(prop, reactElement.props[prop])
    }
    container.appendChild(domElement2)
}

const reactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'click me to visit google'
}


const mainContainer = document.querySelector("#root")
customRender(reactElement, mainContainer)