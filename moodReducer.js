const INITIAL_STATE = {face: '乂❤‿❤乂'}

const moodReducer = (state=INITIAL_STATE, action) => {
    switch(action.type) {
        case "HAPPY":
            return {...state, face: 'മ◡മ'}
        case "SAD":
            return {...state, face: '(Θ︹Θ)'}
        case "ANGRY": 
            return {...state, face: 'ಠ_ಠ'}
        case "CONFUSED":
            return {...state, face: '●.◉'}
        
        default: 
            return state
    }
}

const moodStore = Redux.createStore(moodReducer)