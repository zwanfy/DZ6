// MODAL
const modal = document.querySelector('.modal')
const modalTriggerButton = document.querySelector('#btn-get')
const modalCloseButton = document.querySelector('.modal_close')

const openModal = () => {
    modal.style.display = 'block'
    document.body.style.overflow = 'hidden'
}
const closeModal = () => {
    modal.style.display = 'none'
    document.body.style.overflow = 'scroll'
}
modalTriggerButton.onclick = () => openModal()
modalCloseButton.onclick = () => closeModal()
modal.onclick = (event) => {
    if (event.target === modal) {
        closeModal()
    }
}

const bottomPage = () => {
    return window.innerHeight + window.scrollY >= document.documentElement.scrollHeight
}
const scrollEnd = () => {
    if (bottomPage()) {
        openModal()
        window.removeEventListener("scroll", scrollEnd)
    }
}
window.addEventListener("scroll", scrollEnd)

setTimeout(() => openModal(), 10000)