class Utils{
    state = new Map({})

    constructor(){

    }

    getState = ({name}) => {
        this.state.get(name)
    }

    setState = ({...args}) => {
        
       for(let [key, value] in args){

       }
    }
}