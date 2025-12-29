import { TopPageAdvantage } from '@/interfaces/page.interface'

import CheckIcon from './check.svg'
import styles from './Advantages.module.css'

interface AdvantagesProps {
	advantages: TopPageAdvantage[]
	className?: string
}

export function Advantages({ advantages }: AdvantagesProps) {
	return (
		<div className={styles.wrapper}>
			{advantages.map((a) => (
				<div key={a._id} className={styles.advantage}>
					<div className={styles.icon}>
						<CheckIcon />
					</div>
					<div className={styles.title}>{a.title}</div>
					<hr className={styles.vLine} />
					<div className={styles.description}>{a.description}</div>
				</div>
			))}
		</div>
	)
}
