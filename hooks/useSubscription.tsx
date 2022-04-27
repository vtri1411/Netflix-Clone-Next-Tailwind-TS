import {
	onCurrentUserSubscriptionUpdate,
	Subscription,
} from '@stripe/firestore-stripe-payments'
import { User } from 'firebase/auth'
import React, { useEffect, useState } from 'react'
import payments from '../lib/stripe'

function useSubscription(user: User | null) {
	const [subscription, setSubscription] = useState<Subscription | null>(null)

	useEffect(() => {
		if (!user) return
		onCurrentUserSubscriptionUpdate(payments, (snapshot) => {
			setSubscription(
				snapshot.subscriptions.find(
					(item) => item.status === 'active' || item.status === 'trialing'
				) || null
			)
		})
	}, [user])

	return subscription
}

export default useSubscription
