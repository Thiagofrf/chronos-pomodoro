import { SaveIcon } from 'lucide-react';
import { DefaultButton } from '../../components/DefaultButton/DefaultButton';
import { Heading } from '../../components/Heading/Heading';
import { Input } from '../../components/Input/Input';
import { MainTemplate } from '../../templates/MainTemplate/MainTemplate';

import styles from './Settings.module.css';

export function Settings() {
  return (
    <MainTemplate>
      <Heading>Configurações</Heading>
      <p className={styles.settingsHelper}>
        Modifique as configurações para tempo de foco, descanso curto e descanso
        longo
      </p>

      <form action='' className={styles.settingsForm}>
        <Input id='workTime' labelText='Foco (min):' />
        <Input id='shortBreakTime' labelText='Descanso curto (min):' />
        <Input id='longBreakTime' labelText='Descanso longo (min):' />

        <DefaultButton
          aria-label='Salvar configurações'
          title='Salvar configurações'
        >
          <SaveIcon size={32} />
        </DefaultButton>
      </form>
    </MainTemplate>
  );
}
