import PropTypes from "prop-types";
import { Component } from "react/cjs/react.production.min";
import { createPortal } from "react-dom";
import s from "./Modal.module.css";

const modalRoot = document.querySelector('#modal-root');
class Modal extends Component {
    componentDidMount() {
        window.addEventListener('keydown', this.escapeCloseModal)
    }

    componentWillUnmount() {
        window.removeEventListener('keydown', this.escapeCloseModal)
    }

    escapeCloseModal = e => {
        if (e.code === 'Escape') {
            console.log('close modal')
            this.props.onClose();
        }
    }

    overlayClickCloseModal = e => {
        if (e.target === e.currentTarget) {
            this.props.onClose();
        }
    }

    render() {
        return createPortal(
            <div
                className={s.overlay}
                onClick={this.overlayClickCloseModal}
            >
                <div className={s.modal}>
                    <img src={this.props.image} alt={this.props.image} />
                </div>
            </div>,
            modalRoot,
        );
    }
    
}

Modal.propTypes = {
    image: PropTypes.string.isRequired,
    onClose: PropTypes.func.isRequired
}

export default Modal;