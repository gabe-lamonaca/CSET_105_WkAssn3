const selectionButtons = document.querySelectorAll('[date-selction]')
const finalColumn = document.querySelector('[data-final-column')
const selections =[
    {
        name: 'rock',
        beats: 'scissors'
    },
        {
        name: 'paper',
        beats: 'rock'
    },
        {
        name: 'scissors',
        beats: 'paper'
    }
]
selectionButtons.forEach(selectionButton => {
    selectionButton.addEventListener('click', e => {
        const selectionName = selectionButton.dataset.selection
        const selection = selections.find(selection => selection.name === selectionName)
        makeSelection(selection)
    })
})

function addResult(selection, winner){
    const div = document.createElement('div')
    div.innerText = selection.emoji
    div.classList.add('resultSelection')
    if (winner) div.classList.add('winner')
finalColumn.after(div)
}

function makeSelection(selection){
const computerSelection = randomSelect()
const yourWinner = winner(selection, computerSelection)
const computerWinner = winner(computerSelection, selection)
addResult(computerSelection, computerWinner )
addResult(selection, yourWinner)
}

function randomSelect(){
    const randomIndex = Math.floor(Math.random() * selections.length)
    return selections[randomIndex]
}

function winner(selection, opponentSelection){
return selection.beats === opponentSelection.name
}