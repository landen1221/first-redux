const h2 = document.querySelector('h2')
h2.innerText = moodStore.getState().face

const happyBtn = document.getElementById("Happy")
const sadBtn = document.getElementById("Sad")
const angryBtn = document.getElementById("Angry")
const confusedBtn = document.getElementById("Confused")

happyBtn.addEventListener('click', function(e) {
    moodStore.dispatch({type: "HAPPY"})
    h2.innerText = moodStore.getState().face
})

sadBtn.addEventListener('click', function(e) {
    moodStore.dispatch({type: "SAD"})
    h2.innerText = moodStore.getState().face
})

angryBtn.addEventListener('click', function(e) {
    moodStore.dispatch({type: "ANGRY"})
    h2.innerText = moodStore.getState().face
})

confusedBtn.addEventListener('click', function(e) {
    moodStore.dispatch({type: "CONFUSED"})
    h2.innerText = moodStore.getState().face
})