import { nprogress } from '@mantine/nprogress'
import { useEffect } from 'react'

const Loading = () => {
	useEffect(() => {
		nprogress.reset()
		nprogress.start()

		return () => nprogress.complete()
	}, [])

	return <div>Loading...</div>
}

export default Loading
