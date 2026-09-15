

export function CartItem() {

    return(
        <section>
            <h1>Carrinho</h1>

            <ul>
                <li>
                    <img src="https://s3.amazonaws.com/wpfiap/wp-content/uploads/2026/05/fiap-share-img.png" alt="iamgem da fiap" />
                </li>

                <div>
                    <p>Curso de IA</p>
                    <p>R$1.000,00</p>
                </div>

                <div>
                    <button>Diminuir quantidade</button>
                    <button>Aumentar quantidade</button>
                </div>

                <button>Remover</button>
            </ul>

        </section>

    )


}