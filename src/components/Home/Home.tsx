import React, { useState } from 'react';
import styles from './Home.module.scss';
import Dialog from '../Dialog/Dialog';
import Button from '../Button/Button';
export const Home: React.FC = () => {
  const [dialogType, setDialogType] = useState<
    'success' | 'info' | 'danger' | 'disabledInfo' | 'disabledDanger' | null
  >(null);

  return (
    <>
      <div className={styles.wrapper}>
        <h1 className={styles.header}>D I A L O G</h1>
        <section className={styles.section}>
          <h2>Assignment 20</h2>
          <h3>by MUHSIN SM WPH-38</h3>
        </section>

        <div className={styles.container}>
          <Button
            label='Show Success Dialog'
            type='secondary'
            onClick={() => setDialogType('success')}
          />
          <Button
            label='Show Info DIalog'
            type='primary'
            onClick={() => setDialogType('info')}
          />
          <Button
            label='Show Danger Dialog'
            type='danger'
            onClick={() => setDialogType('danger')}
          />
          <Button
            label='Disabled Dialog Info'
            type='primary'
            onClick={() => setDialogType('disabledInfo')}
          />
          <Button
            label='Disabled Dialog Danger'
            type='danger'
            onClick={() => setDialogType('disabledDanger')}
          />
        </div>
        {dialogType !== 'disabledInfo' && dialogType !== 'disabledDanger' && (
          <Dialog
            variant={dialogType}
            isOpen={!!dialogType}
            onClose={() => setDialogType(null)}
            onConfirm={() => {
              alert(`$(dialogType.toUpperCase()} Confirmed`);
              setDialogType(null);
            }}
          />
        )}
        {dialogType === 'disabledInfo' && (
          <Dialog
            variant={dialogType}
            disabled={!!dialogType}
            isOpen={!!dialogType}
            onClose={() => setDialogType(null)}
            onConfirm={() => {
              alert('Disabled Info Confirmed');
              setDialogType(null);
            }}
          />
        )}
        {dialogType === 'disabledDanger' && (
          <Dialog
            variant={dialogType}
            disabled={true}
            isOpen={!!dialogType}
            onClose={() => setDialogType(null)}
            onConfirm={() => {
              alert('Disabled Danger Confirmed');
              setDialogType(null);
            }}
          />
        )}
      </div>
    </>
  );
};

export default Home;
