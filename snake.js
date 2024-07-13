class Snake{
    constructor (select){
        this.map = document.querySelector(select)
        this.direction = "right"
        //数组存蛇头和身体
        this.snakelist = []
        this.createSnake()

    }
    createHead (){
        const head = this.snakelist[0]

        const pos = {x:0, y:0}

        if(head) {
            switch (this.direction) {
                case "left":
                    pos.x = head.offsetLeft - 20
                    pos.y = head.offsetTop
                    break;
                case "right":
                    pos.x = head.offsetLeft + 20
                    pos.y = head.offsetTop
                    break;
                case "top":
                    pos.x = head.offsetLeft
                    pos.y = head.offsetTop - 20
                    break;
                case "bottom":
                    pos.x = head.offsetLeft
                    pos.y = head.offsetTop + 20
                    break;
                default :
                    break;
            }
            head.className = "body"
        }

        const div = document.createElement("div")
        div.className = "head"
        this.snakelist.unshift(div)
        div.style.left = pos.x + "px"
        div.style.top = pos.y + "px"
        this.map.appendChild(div)
    }
    createSnake(){
        for(let i = 0; i < 4; i++) {
            this.createHead()
        }
    }
    move(){
        const head = this.snakelist[0]
        const headX = head.offsetLeft
        const headY = head.offsetTop
        if (headX < 0) {
            head.style.left = '1000px'
        } else if (headY < 0) {
            head.style.top = '600px'
        } else if (headX >= this.map.clientWidth) {
            head.style.left = '0px'
        } else if (headY >= this.map.clientHeight) {
            head.style.top = '0px'
        }
        const body = this.snakelist.pop()
        body.remove()
        this.createHead()
    }

    isEat(foodX, foodY){
        const head = this.snakelist[0]
        const headX = head.offsetLeft
        const headY = head.offsetTop
        if(foodX === headX && foodY === headY){
            return true
        }
        return false
    }

    isDie(){
        const head = this.snakelist[0]
        const headX = head.offsetLeft
        const headY = head.offsetTop

        //开始
        for(let i=1; i < this.snakelist.length; i++){
            const bodd = this.snakelist[i]
            const bodyX = bodd.offsetLeft
            const bodyY = bodd.offsetTop
            if(headX === bodyX && headY === bodyY){
                return true
            }
        }

        //结束

/*         if(headX < 0 || headY < 0 || headX >= this.map.clientWidth ||headY >= this.map.clientHeight){
            return true
        } */
        return false
    }
}
