// const panels = document.querySelector('.panel')
//     console.log(panels)

const panels = document.querySelectorAll('.panel')

panels.forEach((panel) => {
    panel.addEventListener('click', () => {
        remove()
        panel.classList.add('active');
    })
})
function remove(){
    panels.forEach(panel =>{
        panel.classList.remove('active')
    })
}
table()
function table(num){
    for(let i=1;i<=10;i++){
        console.log['${num}*${i}=${num*i}']
    }
}

// // panels.forEach((panel) => {
// //     panel.addEventListener ('click', () => {
// //         console.log("checkful")
// //     })
// // })