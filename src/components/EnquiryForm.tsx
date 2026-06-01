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
    
    try {
      const selectedService = services.find(s => s.id === formData.serviceId);
      const serviceName = selectedService ? selectedService.titleEn : formData.serviceId;
      
      const response = await fetch('/api/enquiry', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          serviceId: serviceName,
          message: formData.message,
        }),
      });
      
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
    
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', phone: '', serviceId: '', message: '' });
    }, 4000);
  };

  return (
    <section id="enquiry" className="py-20 bg-indigo-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden p-8 md:p-12">
          
          <div className="text-center mb-10">
            <h2 className="text-3xl font-extrabold text-indigo-950 mb-4">Service Enquiry Form</h2>
            <p className="text-slate-600 font-medium">Have a requirement? Fill the form and we will contact you shortly. <br/> કોઈ પ્રશ્ન હોય તો ફોર્મ ભરો, અમે ટૂંક સમયમાં તમારો સંપર્ક કરીશું.</p>
          </div>

          {isSubmitted ? (
            <div className="text-center py-16 bg-green-50 rounded-2xl border border-green-100">
              <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-green-800 mb-2">Enquiry Submitted!</h3>
              <p className="text-green-600">Your details have been successfully received. We will get back to you soon.</p>
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
                  className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-lg py-4 rounded-xl shadow-lg transition-all flex items-center justify-center gap-2"
                >
                  <Send size={20} />
                  Submit Enquiry
                </button>
              </div>

            </form>
          )}

        </div>
      </div>
    </section>
  );
};
