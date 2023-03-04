import {ProductComponent} from "../../components/product/index.js";
import {BackButtonComponent} from "../../components/back-button/index.js";
import {MainPage} from "../main/index.js";

export class ProductPage {
    constructor(parent, id) {
        this.parent = parent
        this.id = id
    }

    getData() {
        return {
            id: this.id,
            src: ["https://mobimg.b-cdn.net/v3/fetch/9d/9db2d4683d92f5f2045e9142fbd82633.jpeg?h=1200&r=0.5", 
            "https://mobimg.b-cdn.net/v3/fetch/af/afc2799799fc6a8525bf2b205111eb8f.jpeg?h=1200&r=0.5",
             "https://mobimg.b-cdn.net/v3/fetch/76/76aa0386ecd0681229a784b9b27776ed.jpeg?h=1200&r=0.5"],
            title: `Акция ${this.id}`,
            text: "Такой акции вы еще не видели"
        }
    }

    get pageRoot() {
        return document.getElementById('product-page')
    }

    getHTML() {
        return (
            `
                <div id="product-page"></div>
            `
        )
    }

    clickBack() {
        const mainPage = new MainPage(this.parent)
        mainPage.render()
    }
    
    render() {
        this.parent.innerHTML = ''
        const html = this.getHTML()
        this.parent.insertAdjacentHTML('beforeend', html)
    
        const backButton = new BackButtonComponent(this.pageRoot)
        backButton.render(this.clickBack.bind(this))
    
        const data = this.getData()
        const stock = new ProductComponent(this.pageRoot)
        stock.render(data)
    }
}