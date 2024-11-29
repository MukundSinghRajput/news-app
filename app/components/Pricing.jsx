import Link from 'next/link'
import styles from './Pricing.module.css'

const plans = [
  {
    name: 'Free',
    price: '₹0',
    features: ['100 requests per day', 'Basic news categories', 'Trending News', 'JSON format'],
  },
  {
    name: 'Pro',
    price: '₹3,675',
    features: ['1000 requests per day', 'All news categories', 'JSON and XML formats', 'Keyword search'],
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    features: ['Unlimited requests', 'Custom integrations', 'Dedicated support', 'SLA guarantee'],
  },
]

export default function Pricing() {
  return (
    <section className="py-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">Choose Your Plan</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div key={plan.name} className="border border-white p-8 rounded-lg">
              <h3 className="text-2xl font-semibold mb-4">{plan.name}</h3>
              <p className="text-4xl font-bold mb-6">{plan.price}</p>
              <ul className="mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="mb-2">✓ {feature}</li>
                ))}
              </ul>
              <Link
                href="https://t.me/MukundX"
                className={styles.button}
              >
                Get Started
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

