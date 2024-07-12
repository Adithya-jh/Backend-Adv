import Image from 'next/image';
import { Button } from '@repo/ui/button';
import styles from './page.module.css';
import Notif from '@repo/ui/notif';

export default function Home() {
  return (
    <div className={styles.page}>
      <Notif />
    </div>
  );
}
