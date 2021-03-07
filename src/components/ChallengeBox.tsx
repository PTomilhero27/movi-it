import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengeContext';
import { CountDownContext } from '../contexts/CountDownContext';

import styles from '../styles/components/ChallengeBox.module.css'

export function ChallengeBox() {
    const { activeChallenge, resetChallenge, completeChallenge} = useContext(ChallengesContext);
    const {resetCountDown} = useContext(CountDownContext)


        function handleChallengeSucceeded() {
            completeChallenge();
            resetCountDown();
        }

        function handleChallengeFailed() {
            resetChallenge();
            resetCountDown();
        }

    return (
        <div className={styles.challengeBoxContainer}>
            {activeChallenge ? (
                <div className={styles.challengeActive}>
                    <header>
                        ganhe {activeChallenge.amount} xp
                    </header>
                    <main>
                        <img src={`icons/${activeChallenge.type}.svg`} alt="icone corpo desafios" />
                        <strong>Novo Desafio</strong>
                        <p>{activeChallenge.description}</p>
                    </main>
                    <footer>
                        <button
                            type="button"
                            className={styles.challengeFailButton}
                            onClick={handleChallengeFailed}
                        >
                            Falhei
                        </button>
                        <button
                            type="button"
                            className={styles.challengeSucceededButton}
                            onClick={handleChallengeSucceeded}
                        >
                            Completei
                        </button>
                    </footer>

                </div>
            ) : (
                    <div className={styles.challengeNotActive}>
                        <strong> Finalize um Ciclo para receber um desafios </strong>
                        <p>
                            <img src="icons/level-up.svg" alt="level up" />
                    Avance de level completando desafios.
                </p>
                    </div>
                )}
        </div>
    );
}