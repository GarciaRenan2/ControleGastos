import { useEffect, useState } from "react";

import Header from "../../components/Header";
import TransactionList, { Transaction } from "../../components/TransactionList";
import Cards, { Balance } from "../../components/Cards";

import { Container } from "./styles";

import api from "../../services/api";

function Home() {

    const [balance, setBalance] = useState<Balance>({
        income: 0,
        outcome: 0,
        total: 0,
    })

    const [transactions, setTransactions] = useState<Transaction[]>([])

    useEffect(() => {
        const newBalance: Balance = transactions.reduce(
            (acc, val) => {
                acc[val.type] += val.value;
                return acc;
            },
            { income: 0, outcome: 0, total: 0 }
        );
        newBalance.total = newBalance.income - newBalance.outcome;
        setBalance(newBalance)
    }, [transactions]);

    useEffect(() => {
        api.get<Transaction[]>("transactions").then(({ data }) => {
            setTransactions(data);
        });
    }, []);

    return (
        <>
            <Header title="GoFinance">
                <a href="/">Listagem</a>
                <a href="/cadastro">Cadastro</a>
            </Header>
            <Container>
                <Cards balance={balance} />
                <TransactionList transactions={transactions} />
            </Container>
        </>
    )
}

export default Home;