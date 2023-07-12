import { ErrorButtons } from '@/app/components/error-buttons'
import { FetchTests } from '@/app/components/fetch-tests'
import { HighlightIdentify } from '@/app/components/highlight-identify'
import { HighlightButtons } from './components/highlight-buttons'
import Image from 'next/image'
import Link from 'next/link'
import { PathButtons } from '@/app/components/path-buttons'
import { TrpcQueries } from '@/app/components/trpc-queries'
import { Canvas } from '@/app/components/canvas'

export default function Home() {
	return (
		<main style={{ padding: '2rem' }}>
			<HighlightIdentify />

			<Image
				alt="Highlight logo"
				src="highlight/logo-and-text-on-dark.svg"
				width={167}
				height={33}
				priority
			/>

			<h3>H Buttons</h3>
			<HighlightButtons />

			<h3>Error Buttons</h3>
			<ErrorButtons />

			<h3>Paths</h3>
			<PathButtons />

			<h3>tRPC</h3>
			<TrpcQueries />

			<h3>Fetch</h3>
			<FetchTests />

			<Link href="/another-page">Navigation Test</Link>

			<h3>Canvas</h3>
			<Canvas />
		</main>
	)
}
