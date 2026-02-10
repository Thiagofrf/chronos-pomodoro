import { ToastContentProps } from 'react-toastify';
import { DefaultButton } from '../DefaultButton/DefaultButton';
import { ThumbsDownIcon, ThumbsUpIcon } from 'lucide-react';

import styles from './Dialog.module.css';

export function Dialog({ closeToast, data }: ToastContentProps<string>) {
  return (
    <>
      <div className={styles.container}>
        <p>{data}</p>

        <div className={styles.buttonsContainer}>
          <DefaultButton
            onClick={() => closeToast(true)}
            aria-label='Confirmar ação e fechar'
            title='Confirmar ação e fechar'
          >
            <ThumbsUpIcon size={16} />
          </DefaultButton>
          <DefaultButton
            onClick={() => closeToast(false)}
            status='stop'
            aria-label='Confirmar ação e fechar'
            title='Confirmar ação e fechar'
          >
            <ThumbsDownIcon size={16} />
          </DefaultButton>
        </div>
      </div>
    </>
  );
}
