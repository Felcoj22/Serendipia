class productCard extends HTMLElement {
    constructor() {
        super();
        this.shadow = this.attachShadow({ mode: 'open' })
    }

    /*getTemplate() {
        let name = 'Felipeco'
        const template = document.createElement('card')
        template.innerHTML = `<div>${name}</div>`
    }*/

    connectedCallback() {
        this.render();
    }

    render() {
        //this.shadow.appendChild(this.getTemplate().content.cloneNode(true))
        let name = 'Felipeco'
        this.shadow.innerHTML = `<div> ${name}</div>`
    }

}

customElements.define('product-card', productCard)