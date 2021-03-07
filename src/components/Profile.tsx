import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengeContext';
import styles from '../styles/components/Profile.module.css';

export  function Profile() {

    const { level } = useContext(ChallengesContext)
     return (
        <div className={styles.profileContainer}>
            <img src="https://github.com/PTomilhero27.png" alt="foto perfil git hub"/>
            <div>
                <strong>Pedro Tomilhero</strong>
                <p>
                    <img src="icons/level.svg" alt="icone level"/>    
                    {level}
                </p>
            </div>
        </div>
     );
}