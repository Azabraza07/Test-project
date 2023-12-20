import { ICountry } from '../../api/types/types'
import styles from './index.module.css'

const CountryItem: React.FC<ICountry> = (props) => {

	const { title, img, phone, mail, description } = props

	return (
		<>
			<div className={styles.country}>
				<div className={styles.titles__images}>
					<h3 className={styles.title}>{title}</h3>
					<img className={styles.image} src={img.type} alt="image" />
				</div>
				<div className={styles.info}>
					<a className={styles.phone} href={`tel:${phone}`}>{phone}</a>
					<a className={styles.mail} href={`malito:${mail}`}>{mail}</a>
				</div>
				<div className={styles.description}>
					<span className={styles.description__text}>
						{description}
					</span>
				</div>
			</div>
		</>
	)
}

export default CountryItem