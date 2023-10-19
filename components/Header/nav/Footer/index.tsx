import styles from './style.module.scss';
import Magnetic from '../../../Magnetic'
export default function index() {
  return (
		<div className={styles.footer}>
			<Magnetic><a href="https://github.com/sbacorp">GitHub</a></Magnetic>
			<Magnetic><a href="https://kazan.hh.ru/resume/33650821ff0be1c5c00039ed1f6f3553474449">hh
			</a></Magnetic>
			<Magnetic><a href="https://t.me/frontsDev">Telegram</a></Magnetic>
		</div>
	);
}
