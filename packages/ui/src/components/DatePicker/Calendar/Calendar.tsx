import React, { useState } from 'react'
import { Box } from '../../Box/Box'
import { Stack } from '../../Stack/Stack'
import { Text } from '../../Text/Text'
import { Day } from './Day'
import {
	Calendar as CalendarType,
	useContextCalendars,
} from '@rehookify/datepicker'
import { FC, ReactNode } from 'react'

import * as styles from './styles.css'

interface CalendarProps {
	prevButton: ReactNode
	nextButton: ReactNode
	calendar: CalendarType
}

export const Calendar: FC<CalendarProps> = ({
	prevButton,
	nextButton,
	calendar,
}) => {
	const { weekDays } = useContextCalendars()
	const [isHoveringOverDisabledDay, setIsHoveringOverDisabledDay] =
		useState(false)
	const { days, month, year } = calendar

	const hasSelectedRange = days.filter((day) => day.selected).length > 1

	return (
		<Box backgroundColor="white" p="10">
			<Stack direction="row" align="center">
				{prevButton}

				<Box flexGrow={1}>
					<Text userSelect="none" align="center">
						{month} {year}
					</Text>
				</Box>
				{nextButton}
			</Stack>

			<div className={styles.weekDays}>
				{weekDays.map((d) => (
					<Text align="center" key={d} userSelect="none">
						{d}
					</Text>
				))}
			</div>
			<main
				className={styles.days}
				onMouseLeave={function () {
					setIsHoveringOverDisabledDay(true)
				}}
			>
				{days.map((d) => (
					<Day
						day={{
							...d,
							range: hasSelectedRange
								? d.range
								: isHoveringOverDisabledDay
								? ''
								: d.range,
						}}
						key={d.$date.toString()}
						onMouseEnter={function () {
							setIsHoveringOverDisabledDay(d.disabled)
						}}
					>
						<Text userSelect="none" align="center">
							{d.day}
						</Text>
					</Day>
				))}
			</main>
		</Box>
	)
}

//
