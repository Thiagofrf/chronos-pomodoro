import { useRef } from 'react';
import { SaveIcon } from 'lucide-react';
import { DefaultButton } from '../../components/DefaultButton/DefaultButton';
import { Heading } from '../../components/Heading/Heading';
import { Input } from '../../components/Input/Input';
import { MainTemplate } from '../../templates/MainTemplate/MainTemplate';

import styles from './Settings.module.css';
import { useTaskContext } from '../../contexts/TaskContext/useTaskContext';
import { showMessage } from '../../adapters/showMessage';

export function Settings() {
  const { state } = useTaskContext();
  const workTimeInputRef = useRef<HTMLInputElement>(null);
  const shortBreakTimeInputRef = useRef<HTMLInputElement>(null);
  const longBreakTimeInputRef = useRef<HTMLInputElement>(null);

  function handleSendSettings(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const workTime = Number(workTimeInputRef.current?.value);
    const shortBreakTime = Number(shortBreakTimeInputRef.current?.value);
    const longBreakTime = Number(longBreakTimeInputRef.current?.value);

    if (isNaN(workTime) || isNaN(shortBreakTime) || isNaN(longBreakTime)) {
      showMessage.dissmiss();
      showMessage.error('Use apenas números para os campos de configuração.');
    }

    if (workTime < 1 || workTime > 99) {
      showMessage.dissmiss();
      showMessage.error('O tempo de foco deve ser entre 1 e 99 minutos.');
    }

    if (shortBreakTime < 1 || shortBreakTime > 30) {
      showMessage.dissmiss();
      showMessage.error(
        'O tempo de descanso curto deve ser entre 1 e 30 minutos.',
      );
    }

    if (longBreakTime < 1 || longBreakTime > 60) {
      showMessage.dissmiss();
      showMessage.error(
        'O tempo de descanso longo deve ser entre 1 e 60 minutos.',
      );
    }
  }

  return (
    <MainTemplate>
      <Heading>Configurações</Heading>
      <p className={styles.settingsHelper}>
        Modifique as configurações para tempo de foco, descanso curto e descanso
        longo
      </p>

      <form
        action=''
        onSubmit={handleSendSettings}
        className={styles.settingsForm}
      >
        <Input
          id='workTime'
          labelText='Foco (min):'
          ref={workTimeInputRef}
          defaultValue={state.config.workTime}
          type='number'
        />

        <Input
          id='shortBreakTime'
          labelText='Descanso curto (min):'
          ref={shortBreakTimeInputRef}
          defaultValue={state.config.shortBreakTime}
          type='number'
        />
        <Input
          id='longBreakTime'
          labelText='Descanso longo (min):'
          ref={longBreakTimeInputRef}
          defaultValue={state.config.longBreakTime}
          type='number'
        />

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
