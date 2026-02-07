import { TrashIcon } from 'lucide-react';
import { DefaultButton } from '../../components/DefaultButton/DefaultButton';
import { Heading } from '../../components/Heading/Heading';
import { MainTemplate } from '../../templates/MainTemplate/MainTemplate';

import styles from './History.module.css';

export function History() {
  return (
    <MainTemplate>
      <Heading>
        <span>History</span>
        <span className={styles.buttonContainer}>
          <DefaultButton
            status='stop'
            aria-label='Apagar histórico'
            title='Apagar histórico'
          >
            <TrashIcon />
          </DefaultButton>
        </span>
      </Heading>

      <div className={styles.responsiveTable}>
        <table>
          <thead>
            <tr>
              <th>Tarefa</th>
              <th>Duração</th>
              <th>Data</th>
              <th>Status</th>
              <th>Tipo</th>
            </tr>
          </thead>
          <tbody>
            {Array.from({ length: 10 }).map((_, index) => {
              return (
                <tr key={index}>
                  <td>Estudar</td>
                  <td>25min</td>
                  <td>07/02/2026 15:31</td>
                  <td>Completa</td>
                  <td>Foco</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </MainTemplate>
  );
}
