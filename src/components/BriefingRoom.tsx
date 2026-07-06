import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Check } from 'lucide-react';

const inputClass =
  'w-full px-5 py-4 bg-black/50 border instrument-border text-white placeholder:text-zinc-600 focus:outline-none focus:border-white transition-all duration-500';

const BriefingRoom = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  return (
    <section className="section-padding pt-32 md:pt-40">
      <div className="container-tight">
        <div className="mb-12 max-w-2xl">
          <span className="label-text mb-5 block text-zinc-500">Briefing Room</span>
          <h2 className="heading-section text-4xl md:text-5xl lg:text-[3.25rem] text-white">
            Initiate Project
          </h2>
          <p className="mt-6 text-zinc-400 max-w-md leading-relaxed">
            Let's start the conversation. Tell me about your project and what you're aiming to achieve.
          </p>
        </div>

        <div className="max-w-xl">
          {submitted ? (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="glass-panel p-10 border border-zinc-800"
            >
              <div className="w-10 h-10 bg-white flex items-center justify-center mb-6">
                <Check size={20} className="text-black" />
              </div>
              <h3 className="font-serif text-2xl text-white mb-2">Message Received</h3>
              <p className="text-zinc-400">I'll get back to you within 24 hours.</p>
            </motion.div>
          ) : (
            <motion.form
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              action="https://api.web3forms.com/submit"
              method="POST"
              onSubmit={() => setIsSubmitting(true)}
              className="glass-panel p-8 md:p-10 border border-zinc-800 space-y-6"
            >
              {/* Web3Forms Access Key */}
              <input type="hidden" name="access_key" value="6e9c45a5-84d7-499e-adc3-06121c282860" />
              <input type="hidden" name="subject" value="New Project Inquiry" />

              <div>
                <input type="text" name="name" placeholder="Full Name" required className={inputClass} />
              </div>
              <div>
                <input type="text" name="role" placeholder="Role / Title" className={inputClass} />
              </div>
              <div>
                <input type="email" name="email" placeholder="Email Address" required className={inputClass} />
              </div>
              <div>
                <textarea 
                  name="message" 
                  placeholder="Project Description" 
                  rows={4} 
                  required 
                  className={`${inputClass} resize-none`}
                />
              </div>

              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full bg-white text-black py-4 font-bold uppercase tracking-[0.2em] text-[12px] hover:bg-zinc-200 transition-colors disabled:opacity-50 flex items-center justify-center gap-2"
              >
                {isSubmitting ? 'Sending...' : <>Send Briefing <Send size={14} /></>}
              </button>
            </motion.form>
          )}
        </div>
      </div>
    </section>
  );
};

export default BriefingRoom;
