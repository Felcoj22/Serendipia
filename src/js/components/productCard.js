class productCard extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' })
    }

    getTemplate() {
        let name = 'Felipeco'
        const template = document.createElement('card')
        template.innerHTML = `<div>${name}</div>`
        return template
    }

    render() {
        this.shadowRoot.appendChild(this.getTemplate().content.cloneNode(true))
    }

    connectedCallback() {
        this.render();
    }

}
customElements.define("product-card", productCard)