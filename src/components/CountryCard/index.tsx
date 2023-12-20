import { countries } from '../../api/countries'
import { ICountry } from '../../api/types/types'
import CountryItem from '../CountryItem'
import styles from './index.module.css'

const CountryCards = () => {
	return (
		<div className={styles.countries}>
			{countries.length ? (
				countries.map((country: ICountry) => (
					< CountryItem key={country.id} {...country} />
				))
			) : (
				<p>No countries available</p>
			)}
		</div>
	)
}

export default CountryCards