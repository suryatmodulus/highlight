// src/app/layout.tsx
import './globals.css'

import CONSTANTS from '@/app/constants'
import { HighlightInit } from '@highlight-run/next/highlight-init'

export const metadata = {
	title: 'Highlight Next Demo',
	description: 'Check out how Highlight works with Next.js',
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<>
			<HighlightInit
				debug={{ clientInteractions: true, domRecording: true }}
				projectId={CONSTANTS.NEXT_PUBLIC_HIGHLIGHT_PROJECT_ID}
				scriptUrl={'http://localhost:8080/dist/index.js'}
				tracingOrigins
				networkRecording={{
					enabled: true,
					recordHeadersAndBody: true,
				}}
				// inlineImages={false}
                enableCanvasRecording={true}
                samplingStrategy={{
                    canvas: 1,
                    canvasMaxSnapshotDimension: 480,
                    canvasFactor: 0.5,
                }}
				backendUrl={CONSTANTS.NEXT_PUBLIC_HIGHLIGHT_BACKEND_URL}
			/>

			<html lang="en">
				<body>
					<div>{children}</div>
					<img src="https://i.travelapi.com/lodging/11000000/10140000/10130300/10130300/c9095011_z.jpg" />
				</body>
			</html>
		</>
	)
}
