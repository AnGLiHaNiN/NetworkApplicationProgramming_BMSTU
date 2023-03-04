// import {ButtonComponent} from "../../components/button/index.js";
import {ProductCardComponent} from "../../components/product-card/index.js";
import {ProductPage} from "../product/index.js";


export class MainPage {
    constructor(parent) {
        this.parent = parent;
    }
    
    getData() {
        return [
            {
                id: 1,
                src: "https://mobimg.b-cdn.net/v3/fetch/9d/9db2d4683d92f5f2045e9142fbd82633.jpeg?h=1200&r=0.5",
                title: "Акция",
                text: "Такой акции вы еще не видели\n Цена: 25000р"
            },
            {
                id: 2,
                src: "https://mobimg.b-cdn.net/v3/fetch/af/afc2799799fc6a8525bf2b205111eb8f.jpeg?h=1200&r=0.5",
                title: "Акция",
                text: "Такой акции вы еще не видели\n Цена: 30000р"
            },
            {
                id: 3,
                src: "https://mobimg.b-cdn.net/v3/fetch/76/76aa0386ecd0681229a784b9b27776ed.jpeg?h=1200&r=0.5",
                title: "Акция",
                text: "Такой акции вы еще не видели\n Цена: 40000р"
            },
        ]
    }

    get pageRoot() {
        return document.getElementById('main-page')
    }
        
    getHTML() {
        return (
            `
                <div id="main-page" class="d-flex flex-wrap"><div/>
            `
        )
    }
        
    render() {
        this.parent.innerHTML = ''
        const html = this.getHTML()
        this.parent.insertAdjacentHTML('beforeend', html)
        
        const data = this.getData()
        data.forEach((item) => {
            const productCard = new ProductCardComponent(this.pageRoot)
            productCard.render(item, this.clickCard.bind(this))
        })
    }

    clickCard(e) {
        const cardId = e.target.dataset.id
    
        const productPage = new ProductPage(this.parent, cardId)
        productPage.render()
    }
    
}


   
    
    


