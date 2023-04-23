import "../assets/StyleModal.css"

const Modal = (props) => {



    return <>
        <div className="containerModal">
            <div className="containerModal_1" onClick={props.back}>
                <button className="buttonModal">
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
                        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                    </svg>
                </button>
                <div className={props.text_style}>
                    <h1 className="textModal">{props.text}</h1>
                    <p className="textModal_P">{props.textP}</p>
                </div>
            </div>
        </div>


    </>
}


export default Modal 