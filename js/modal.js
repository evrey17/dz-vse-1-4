const modalTriger = document.querySelector('#btn-get')
const modal = document.querySelector('.modal')
const modalCloseTriger = document.querySelector('.modal_close')


const openModal = () => {
    modal.style.display = 'block'
    document.body.style.overflow = 'hidden'
}
const closeModal = () => {
    modal.style.display = 'none'
    document.body.style.overflow = ''


}
modalTriger.onclick = () => openModal()
modalCloseTriger.onclick = () => closeModal()

modal.onclick  =(e) => {
    if(e.target === modal){
        closeModal()
    }
}
let swither = true
window.onscroll = () => {
    const scrollPostion = window.scrollY  + window.innerHeight
    const scrollHeight = document.body.scrollHeight
   if(scrollPostion >= scrollHeight && swither === true){
    openModal()
    swither =false
   }
    
}







setTimeout(() => {openModal()},10000) 