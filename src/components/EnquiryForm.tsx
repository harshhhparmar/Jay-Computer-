import { useState, FormEvent, useEffect } from 'react';
import { services, siteConfig } from '../data';
import { Send, CheckCircle } from 'lucide-react';

export const EnquiryForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    serviceId: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const handleSelectService = (e: Event) => {
      const customEvent = e as CustomEvent;
      if (customEvent.detail) {
        setFormData(prev => ({ ...prev, serviceId: customEvent.detail }));
      }
    };
    window.addEventListener('selectService', handleSelectService);
    return () => window.removeEventListener('selectService', handleSelectService);
  }, []);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    setIsSubmitted(true);
    
    const selectedService = services.find(s => s.id === formData.serviceId);
    const serviceName = selectedService ? selectedService.titleEn : formData.serviceId || 'General Inquiry';
    
    const text = `Hello Jay Computer,\n*New Enquiry Details:*\n*Name:* ${formData.name}\n*Phone:* ${formData.phone}\n*Requirement:* ${serviceName}\n*Message:* ${formData.message}`;

    const waLink = `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(text)}`;
    
    // Open WhatsApp URL
    window.open(waLink, '_blank');
    
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', phone: '', serviceId: '', message: '' });
    }, 4000);
  };

  return (
    <section id="enquiry" className="py-12 md:py-16 bg-indigo-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden p-6 md:p-8">
          
          <div className="text-center mb-8">
            <h2 className="text-3xl font-extrabold text-indigo-950 mb-4">Service Enquiry Form</h2>
            <p className="text-slate-600 font-medium">Have a requirement? Fill out the form below and we will prepare a WhatsApp message for you to send to us. <br/> કોઈ પ્રશ્ન હોય તો ફોર્મ ભરો, અમે WhatsApp દ્વારા સંપર્ક કરીશું.</p>
          </div>

          {isSubmitted ? (
            <div className="text-center py-16 bg-green-50 rounded-2xl border border-green-100">
              <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-green-800 mb-2">Redirecting to WhatsApp!</h3>
              <p className="text-green-600">Your details are ready to be sent securely via your WhatsApp app.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-sm font-bold text-slate-700 mb-2">
                    Full Name <span className="text-slate-400 font-normal ml-1">(પૂરું નામ)</span>
                  </label>
                  <input 
                    type="text" 
                    id="name" 
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-indigo-600 focus:border-indigo-600 outline-none transition-all placeholder-slate-400"
                    placeholder="Enter your name"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label htmlFor="phone" className="block text-sm font-bold text-slate-700 mb-2">
                    Mobile Number <span className="text-slate-400 font-normal ml-1">(મોબાઇલ નંબર)</span>
                  </label>
                  <input 
                    type="tel" 
                    id="phone" 
                    required
                    maxLength={10}
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-indigo-600 focus:border-indigo-600 outline-none transition-all placeholder-slate-400"
                    placeholder="10-digit number"
                  />
                </div>
              </div>

              {/* Service Selection */}
              <div>
                <label htmlFor="service" className="block text-sm font-bold text-slate-700 mb-2">
                  Select Service <span className="text-slate-400 font-normal ml-1">(સેવા પસંદ કરો)</span>
                </label>
                <select 
                  id="service" 
                  required
                  value={formData.serviceId}
                  onChange={(e) => setFormData({...formData, serviceId: e.target.value})}
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-indigo-600 focus:border-indigo-600 outline-none transition-all bg-white"
                >
                  <option value="" disabled>Select a requirement...</option>
                  {services.map((service) => (
                    <option key={service.id} value={service.id}>
                      {service.titleEn} / {service.titleGu}
                    </option>
                  ))}
                  <option value="other">Other Inquiry (અન્ય)</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-bold text-slate-700 mb-2">
                  Additional Details / Message <span className="text-slate-400 font-normal ml-1">(વધારાની માહિતી) - Optional</span>
                </label>
                <textarea 
                  id="message" 
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-indigo-600 focus:border-indigo-600 outline-none transition-all placeholder-slate-400 resize-none"
                  placeholder="Type your query here..."
                ></textarea>
              </div>

              {/* Submit */}
              <div className="pt-2">
                <button 
                  type="submit" 
                  className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white font-bold text-lg py-4 rounded-xl shadow-lg transition-all flex items-center justify-center gap-2"
                >
                  <Send size={20} />
                  Send via WhatsApp
                </button>
              </div>

            </form>
          )}

        </div>
      </div>
    </section>
  );
};
