import { useRef } from 'react';
import { SaveIcon } from 'lucide-react';
import { DefaultButton } from '../../components/DefaultButton/DefaultButton';
import { Heading } from '../../components/Heading/Heading';
import { Input } from '../../components/Input/Input';
import { MainTemplate } from '../../templates/MainTemplate/MainTemplate';

import styles from './Settings.module.css';
import { useTaskContext } from '../../contexts/TaskContext/useTaskContext';

export function Settings() {
  const { state } = useTaskContext();
  const workTimeInputRef = useRef<HTMLInputElement>(null);
  const shortBreakTimeInputRef = useRef<HTMLInputElement>(null);
  const longBreakTimeInputRef = useRef<HTMLInputElement>(null);

  function handleSendSettings(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const workTime = workTimeInputRef.current?.value;
    const shortBreakTime = shortBreakTimeInputRef.current?.value;
    const longBreakTime = longBreakTimeInputRef.current?.value;
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
        />

        <Input
          id='shortBreakTime'
          labelText='Descanso curto (min):'
          ref={shortBreakTimeInputRef}
          defaultValue={state.config.shortBreakTime}
        />
        <Input
          id='longBreakTime'
          labelText='Descanso longo (min):'
          ref={longBreakTimeInputRef}
          defaultValue={state.config.longBreakTime}
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
