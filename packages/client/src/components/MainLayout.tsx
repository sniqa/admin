import { AppShell, Burger, Group } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { Suspense } from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'
import Loading from './Loading'

const MainLayout = () => {
	const [opened, { toggle }] = useDisclosure()

	const { pathname } = useLocation()

	const matchRoute = (path: string) => {
		return pathname.includes(path)
	}

	return (
		<AppShell
			header={{ height: 60 }}
			navbar={{
				width: 300,
				breakpoint: 'sm',
				collapsed: { desktop: true, mobile: !opened },
			}}
			padding="md"
		>
			<AppShell.Header>
				<Group h="100%" px="md">
					<Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
					<Group justify="space-between" style={{ flex: 1 }}>
						<div className=""></div>

						<Group ml="xl" gap={0} visibleFrom="sm">
							<Link
								to={'/home'}
								className={`mx-2 hover:text-sky-400 ${
									matchRoute('home') ? 'text-sky-400' : ''
								}`}
							>
								Home
							</Link>
							<Link
								to={'/monitor'}
								className={`mx-2 hover:text-sky-400 ${
									matchRoute('monitor') ? 'text-sky-400' : ''
								}`}
							>
								Monitor
							</Link>
							<Link
								to={'/assets'}
								className={`mx-2 hover:text-sky-400 ${
									matchRoute('assets') ? 'text-sky-400' : ''
								}`}
							>
								Assets
							</Link>
							<Link
								to={'/about'}
								className={`mx-2 hover:text-sky-400 ${
									matchRoute('about') ? 'text-sky-400' : ''
								}`}
							>
								About
							</Link>
						</Group>
					</Group>
				</Group>
			</AppShell.Header>

			<AppShell.Navbar py="md" px={4}>
				<Link to={'/home'}>Home</Link>
				<Link to={'/minit'}>Minit</Link>
				<Link to={'/assets'}>Assets</Link>
				<Link to={'/about'}>About</Link>
			</AppShell.Navbar>

			<AppShell.Main>
				<Suspense fallback={<Loading />}>
					<Outlet />
				</Suspense>
			</AppShell.Main>
		</AppShell>
	)
}

export default MainLayout
