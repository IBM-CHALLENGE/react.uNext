import React, { useEffect } from 'react';
import { useState } from 'react';
import Header from '../../components/Header/Header';
import TabMenu from '../../components/TabMenu/TabMenu';
import Grafico from '../../components/Grafico/Grafico';
import './Estatisticas.css'

function Estatisticas() {



    const [dados, setDados] = useState({
        meses: {
            labels: [],
            valores: [],
            total: 0
        },
        status: {
            labels: [],
            valores: [],
            total: 0
        },
        matchLevel: {
            labels: [],
            valores: [],
            total: 0
        }
    })

    useEffect(() => {
        let loadDados = {
            meses: {
                descricao: `Quantidade de candidaturas realizadas por mês (${new Date().getFullYear()})`,
                labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
                valores: [0,0,0,0,0,0,2,1,3,0,0,0],
                total: 0.4
            },
            status: {
                descricao: 'Quantidade de candidaturas por status',
                labels: ['Aprovado', 'Reprovado', 'Em Andamento'],
                valores: [1, 1, 2],
                total: 4
            },
            matchLevel: {
                descricao: 'Porcentagem média de Match Level por status',
                labels: ['Aprovado', 'Reprovado', 'Em Andamento'],
                valores: [80, 40, 55],
                total: 58.33
            },
        }

        setDados(loadDados)
    }, [])

    return (
        <>
            <Header />

            <main className="container">
                <div className="estatisticas">

                    <Grafico tipo='line' labels={dados.meses.labels} valores={dados.meses.valores} descricao={dados.meses.descricao}>
                        <h1>Candidaturas</h1>
                        <h3>Média por Mês: {dados.meses.total}</h3>
                    </Grafico>

                    <Grafico tipo='pie' labels={dados.status.labels} valores={dados.status.valores} descricao={dados.status.descricao}>
                        <h1>Candidaturas</h1>
                        <h3>Quantidade Total: {dados.status.total}</h3>
                    </Grafico>

                    <Grafico tipo='bar' labels={dados.matchLevel.labels} valores={dados.matchLevel.valores} descricao={dados.matchLevel.descricao}>
                        <h1>Match Level</h1>
                        <h3>Média Total: {dados.matchLevel.total}%</h3>
                    </Grafico>

                </div>
            </main>

            <TabMenu tab='estatisticas' />
        </>
    )
}

export default Estatisticas;