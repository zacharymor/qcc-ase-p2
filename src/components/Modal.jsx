import React, { useState, useEffect } from 'react';

const Modal = (props) => {
    const [quantity, setQuantity] = useState(1);
    const [confirmed, setConfirmed] = useState(false);
    const [bought, setBought] = useState(false);

    const increaseQuantity = () => setQuantity(quantity + 1);
    const decreaseQuantity = () => quantity > 1 && setQuantity(quantity - 1);
    const handleSubmit = () => setConfirmed(true);
    const handleBought = () => setBought(true);

    const pluralize = (word, count) => {
        return count === 1 ? word : word + 's';
    };
    const formatPrice = (price) => {
        return `$${price.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`;
      };
      

    useEffect(() => {
        const handleHide = () => {
            setConfirmed(false);
            setBought(false);
            setQuantity(1); // Optionally reset quantity to 1 on modal close
        };

        const modalElement = document.getElementById(`cardModal${props.cardID}`);
        modalElement.addEventListener('hidden.bs.modal', handleHide);

        return () => {
            modalElement.removeEventListener('hidden.bs.modal', handleHide);
        };
    }, [props.cardID]);

    return (
        <div
            className="modal fade"
            id={`cardModal${props.cardID}`}
            tabIndex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
        >
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="exampleModalLabel">
                            {props.color} {props.design} {props.type}
                        </h1>
                        <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                        ></button>
                    </div>
                    <div className="modal-body d-flex flex-column">
                        {confirmed ? (
                            !bought && (
                                <h5>Are you sure you want to purchase {quantity} {props.color} {props.design} {pluralize(props.type, quantity)} for {formatPrice(props.price * quantity)}?</h5>
                            )
                        ) : (
                            bought && (
                                <h5>Thank you for purchasing {quantity} {props.color} {pluralize(props.type, quantity)}!</h5>
                            )
                        )
                        }
                        <img className='my-3' src={props.imgURL} alt={props.type} style={{ width: '340px', height: '340px', margin: '0 auto' }} />
                        {!bought && (
                            <p className='my-0'>Price: <span className='fw-bold'>{formatPrice(props.price)}</span></p>
                        )
                        }

                        {!confirmed && (
                            <div className="d-flex justify-content-center align-items-center my-3">
                                <button className="btn btn-secondary" onClick={decreaseQuantity}>-</button>
                                <input
                                    type="text"
                                    className="form-control text-center mx-2"
                                    value={quantity}
                                    readOnly
                                    style={{ width: '60px' }}
                                />
                                <button className="btn btn-secondary" onClick={increaseQuantity}>+</button>
                            </div>
                        )}
                        {!confirmed ? (
                            <>
                                <button type="button" className="btn btn-primary" onClick={handleSubmit}>
                                    Submit Order
                                </button>
                            </>
                        ) : (
                            !bought && (
                                <button type="button" style={{ backgroundColor: 'green' }} className="btn btn-primary my-3" onClick={handleBought}>
                                    Confirm Order
                                </button>
                            )
                        )}
                        {bought && (
                            <p style={{ color: 'green', fontSize: '20px' }} className='my-3' >Order confirmed for {quantity} {props.color} {props.design} {pluralize(props.type, quantity)}!</p>
                        )}
                    </div>
                    <div className="modal-footer flex-row justify-content-center">
                        <a href="https://www.facebook.com/">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                className="bi bi-facebook"
                                viewBox="0 0 16 16"
                            >
                                <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
                            </svg>
                        </a>
                        <a href="https://www.instagram.com/">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                className="bi bi-instagram"
                                viewBox="0 0 16 16"
                            >
                                <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
                            </svg>
                        </a>
                        <a href="https://x.com/?lang=en">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                className="bi bi-twitter-x"
                                viewBox="0 0 16 16"
                            >
                                <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;
