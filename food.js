class Food{
    constructor(select){
        this.map = document.querySelector(select)
        this.food = document.createElement("div")
        this.food.className = "food"
        this.map.appendChild(this.food)
        this.x = 0
        this.y = 0
        this.foodPosition()
    }
    // 下面的除以20是不是多余？
    foodPosition(){
        const w_nub = this.map.clientWidth/20
        const h_nub = this.map.clientHeight/20
        let n1 = Math.floor(Math.random()*w_nub)
        let n2 = Math.floor(Math.random()*h_nub)
        this.x = n1*20
        this.y = n2*20
        this.food.style.left = this.x + "px"
        this.food.style.top = this.y + "px"
        let zhi = ['radial-gradient(#ffc000,#ff4e00)', 'radial-gradient(aqua, blue)', 'radial-gradient(orange, red)', 'radial-gradient(#a7fa64,#4f8524)', 'radial-gradient(pink, purple)']
        let ran = Math.floor(Math.random() * zhi.length)
        this.food.style.background = zhi[ran]
    }
}
