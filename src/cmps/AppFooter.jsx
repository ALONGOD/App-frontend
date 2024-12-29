import { useSelector } from 'react-redux'

export function AppFooter() {
	const count = useSelector(storeState => storeState.userModule.count)

	return (
		<footer className="app-footer">
			<p> &copy; Copyright 2024 by Alon Goddard</p>
		</footer>


	)
}