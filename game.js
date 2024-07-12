class Game{
    constructor(select, scoreEle, gameoverbg, btnst){
        this.btnstart = document.querySelector(btnst)
        this.gameoverimg = document.querySelector(gameoverbg)
        this.map = document.querySelector(select)
        this.scoreEle = document.querySelector(scoreEle)
        this.food = new Food(select)

        this.snake = new Snake(select)
        this.timer = 0
        this.count = 0
    }
    start(){
        this.timer = setInterval(() => {
            this.snake.move()
            if(this.snake.isEat(this.food.x, this.food.y)){
                this.snake.createHead()
                this.food.foodPosition()
                this.scoreAdd()
            }

            if(this.snake.isDie()){
                clearInterval(this.timer)
                this.gameover()
            }
        }, 100);
    }

    pause(){
        clearInterval(this.timer)
    }

    restart(){
        this.btnstart.disabled = false
        this.gameoverimg.style.display = "none"
        window.location.reload()
    }

    change(type){
        this.snake.direction = type
    }
    scoreAdd()
    {
        this.count++
        this.scoreEle.innerText = this.count
    }
    gameover(){
        this.gameoverimg.style.width = "1000px"
        this.gameoverimg.style.height = "600px"
        this.btnstart.disabled = true
    }
}
