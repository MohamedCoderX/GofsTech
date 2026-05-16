
import { Check } from 'lucide-react';
import { Button } from '../components/Button';
import { Card } from '../components/Card';

export const Pricing = () => {
  const plans = [
    {
      name: 'Starter',
      price: '$99',
      description: 'Perfect for small teams and startups looking to build their foundation.',
      features: ['Up to 5 Users', 'Basic AI Models', 'Cloud Hosting', 'Email Support', '10GB Storage'],
      highlight: false
    },
    {
      name: 'Enterprise',
      price: '$499',
      description: 'Advanced solutions for growing companies with high-performance needs.',
      features: ['Unlimited Users', 'Custom AI Integration', 'Dedicated Servers', '24/7 Priority Support', '500GB Storage', 'Advanced Security'],
      highlight: true
    },
    {
      name: 'Custom',
      price: 'Contact',
      description: 'Tailored enterprise-grade solutions for global scale organizations.',
      features: ['White-label Solutions', 'On-premise Deployment', 'Custom SLA', 'Dedicated Manager', 'Unlimited Storage'],
      highlight: false
    }
  ];

  return (
    <section id="pricing" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="mb-4">Flexible <span className="text-gradient">Pricing</span> For Every Scale</h2>
          <p className="max-w-2xl mx-auto">
            Choose the plan that fits your business needs and start scaling today.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {plans.map((plan, i) => (
            <Card 
              key={i} 
              className={plan.highlight ? "border-primary/50 bg-primary/5 scale-105" : ""}
              glow={plan.highlight}
            >
              {plan.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-black text-xs font-bold rounded-full uppercase tracking-wider">
                  Most Popular
                </div>
              )}
              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  {plan.price !== 'Contact' && <span className="text-gray-900/40">/month</span>}
                </div>
              </div>
              
              <p className="text-gray-900/60 mb-8 text-sm leading-relaxed">
                {plan.description}
              </p>

              <div className="space-y-4 mb-8">
                {plan.features.map((feature, j) => (
                  <div key={j} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center text-primary shrink-0">
                      <Check className="w-3 h-3" />
                    </div>
                    <span className="text-sm text-gray-900/80">{feature}</span>
                  </div>
                ))}
              </div>

              <Button 
                variant={plan.highlight ? 'primary' : 'outline'} 
                className="w-full justify-center"
              >
                {plan.price === 'Contact' ? 'Talk to Sales' : 'Get Started Now'}
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
