class RandomBalls {

    state = {}

    constructor({root = null, className = 'ball', counts = 10, colors = []}){
      let {setState} = this
      setState({
          rootDom: document.querySelector(root), 
      })
    }

    render = () => {

    }

    appendDom = () => {
      let {state} = this
      let {}  
      let ballDom = document.createElement()
    }

    setState = (args = {}) => {
        if(args == {}) return
        for(let [key, value] in args){
            
        }
       
    }
}