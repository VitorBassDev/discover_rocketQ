export default function Modal(){

    const modalWrapper = document.querySelector('.modal-wrapper')
    const cancelButton = document.querySelector('.button.cancel')

    cancelButton.addEventListener("click", close)

    function open(){
        //funcionalidade de atribuir a classe ACTIVE(DO DOCUMENTO HTML) para a modal
        modalWrapper.classList.add("active")
    }
    function close(){
        //funcionalidade de remover a classe ACTIVE(DO DOCUMENTO HTML)  da modal
        modalWrapper.classList.remove("active")
    }

    return{
        open,
        close
    }
}