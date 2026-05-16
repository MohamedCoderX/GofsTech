import { motion } from 'framer-motion';
import { Card } from '../components/Card';
import { Button } from '../components/Button';
import { BarChart3, TrendingUp, Users, Activity } from 'lucide-react';

const AnalyticsDashboard = () => {
  return (
    <section className="py-10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="mb-8">Real-time Analytics <br /><span className="text-primary italic">At Your Fingertips.</span></h2>
            <p className="text-gray-900/60 mb-10 max-w-lg">
              Gain deep insights into your business performance with our advanced 
              analytics dashboard. Monitor growth, track conversions, and make 
              data-driven decisions in real-time.
            </p>
            <div className="space-y-6 mb-12">
              {[
                { icon: BarChart3, text: 'Customizable report generation' },
                { icon: Activity, text: 'Live user activity monitoring' },
                { icon: TrendingUp, text: 'Predictive growth modeling' }
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                    <item.icon size={20} />
                  </div>
                  <span className="font-medium text-gray-900/80">{item.text}</span>
                </div>
              ))}
            </div>
            <Button variant="outline">Explore Dashboard</Button>
          </div>

          <div className="relative">
            <motion.div
              initial={{ rotateY: -15, rotateX: 10, opacity: 0 }}
              whileInView={{ rotateY: -5, rotateX: 5, opacity: 1 }}
              transition={{ duration: 1 }}
              className="perspective-[2000px]"
            >
              <Card className="p-0 border-primary/20 shadow-[0_0_50px_rgba(212,255,0,0.1)] aspect-video bg-[#0A0A0A] overflow-hidden" hoverGlow={false}>
                {/* Simulated Header */}
                <div className="h-12 border-b border-gray-200 flex items-center px-6 gap-3">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500/50" />
                  </div>
                  <div className="w-32 h-2 rounded-full bg-gray-50 mx-auto" />
                </div>
                
                {/* Simulated Content */}
                <div className="p-6 grid grid-cols-3 gap-4">
                  {[Users, BarChart3, TrendingUp].map((Icon, idx) => (
                    <div key={idx} className="p-4 rounded-xl bg-gray-50 border border-gray-200">
                      <Icon className="text-primary mb-2" size={16} />
                      <div className="h-2 w-12 bg-white/20 rounded mb-1" />
                      <div className="h-4 w-16 bg-gray-200 rounded" />
                    </div>
                  ))}
                  <div className="col-span-3 h-32 rounded-xl bg-gray-50 border border-gray-200 relative overflow-hidden">
                    {/* Simulated Waveform */}
                    <svg className="absolute bottom-0 w-full h-full" viewBox="0 0 400 100">
                      <path d="M0 80 Q 50 20 100 70 T 200 40 T 300 80 T 400 30" fill="none" stroke="#D4FF00" strokeWidth="2" strokeOpacity="0.5" />
                    </svg>
                  </div>
                </div>
              </Card>
            </motion.div>
            
            {/* Floating element */}
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -bottom-10 -left-10 p-6 rounded-2xl bg-white border border-primary/30 shadow-2xl z-20 hidden md:block"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                  <TrendingUp />
                </div>
                <div>
                  <p className="text-2xl font-bold">+124%</p>
                  <p className="text-xs uppercase text-gray-900/40">Growth Rate</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AnalyticsDashboard;
