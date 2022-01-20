import { useState } from "react";

function TransactionList() {
    const [transactions, setTransactions] = useState([
        '-R$ 100,00 - Compra de Alimentos - 22/11/2020',
        '-R$50,00 - Gasolina - 20/12/2020',
        'R$32,00 - Investimento - 22/12/2020'
    ]);

    function handleAddTransaction() {
        setTransactions([...transactions, 'Nova Transaçao'])
        console.log('clicado')
    }

    return (
        <>
            <ul>
                {transactions.map((transaction, i) => (
                    <li key={i}>{transaction}</li>
                ))}
            </ul>
            <button onClick={handleAddTransaction}>
                Adicionar Transaçao
            </button>
        </>
    )
}

export default TransactionList