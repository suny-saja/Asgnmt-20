import React, { useState } from 'react';
import Button from '../Buttons/Button';
import DialogBox from '../Dialog/Dialog';
import styles from './Home.module.scss';

const Home: React.FC = () => {
  const [dialogType, setDialogType] = useState<
    'success' | 'info' | 'danger' | null
  >(null);

  return (
    <>
      <h1 className={styles.header}>D I A L O G</h1>
      <section className={styles.box}>
        Assignment 20 - <span>by MUHSIN SM WPH-38</span>
      </section>
      <div className={styles.container}>
        <Button
          label='Show Success Dialog'
          variant='secondary'
          onClick={() => setDialogType('success')}
        />
        <Button
          label='Show Info Dialog'
          variant='primary'
          onClick={() => setDialogType('info')}
        />
        <Button
          label='Show Danger Dialog'
          variant='danger'
          onClick={() => setDialogType('danger')}
        />

        {/* DialogBox Component */}
        {dialogType && (
          <DialogBox
            type={dialogType}
            isOpen={!!dialogType}
            onClose={() => setDialogType(null)}
            onConfirm={() => {
              alert(`${dialogType.toUpperCase()} Confirmed!`);
              setDialogType(null);
            }}
          />
        )}
      </div>
    </>
  );
};

export default Home;
