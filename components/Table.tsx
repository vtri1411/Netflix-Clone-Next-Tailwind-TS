import { CheckIcon, XIcon } from '@heroicons/react/outline'
import { Product } from '@stripe/firestore-stripe-payments'
import React from 'react'

interface Props {
	products: Product[]
	selectedPlan: Product
}

function Table({ products, selectedPlan }: Props) {
	return (
		<table>
			<tbody className='divide-y divide-[gray]'>
				<tr className='tableRow'>
					<td className='tableDataTitle'>Monthly Price</td>
					{products.map((product) => (
						<td
							className={`tableDataFeature ${
								selectedPlan.id === product.id
									? 'text-[#e50914]'
									: 'text-[gray]'
							}`}
							key={product.id}
						>
							AED{product.prices[0].unit_amount! / 100}
						</td>
					))}
				</tr>

				<tr className='tableRow'>
					<td className='tableDataTitle'>Video quality</td>
					{products.map((product) => (
						<td
							className={`tableDataFeature ${
								selectedPlan.id === product.id
									? 'text-[#e50914]'
									: 'text-[gray]'
							}`}
							key={product.id}
						>
							{product.metadata.videoQuality}
						</td>
					))}
				</tr>

				<tr className='tableRow'>
					<td className='tableDataTitle'>Resolution</td>
					{products.map((product) => (
						<td
							className={`tableDataFeature ${
								selectedPlan?.id === product.id
									? 'text-[#E50914]'
									: 'text-[gray]'
							}`}
							key={product.id}
						>
							{product.metadata.Resolution}
						</td>
					))}
				</tr>
				<tr className='tableRow'>
					<td className='tableDataTitle'>
						Watch on your TV, computer, mobile phone and tablet
					</td>
					{products.map((product) => (
						<td
							className={`tableDataFeature ${
								selectedPlan?.id === product.id
									? 'text-[#E50914]'
									: 'text-[gray]'
							}`}
							key={product.id}
						>
							{product.metadata.portability === 'true' ? (
								<CheckIcon className='inline-block h-8 w-8' />
							) : (
								<XIcon className='inline-block h-8 w-8' />
							)}
						</td>
					))}
				</tr>
			</tbody>
		</table>
	)
}

export default Table
