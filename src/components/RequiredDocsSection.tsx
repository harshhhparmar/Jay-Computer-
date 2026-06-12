import { services } from '../data';
import { getIcon } from './Icons';

export const RequiredDocsSection = () => {
  // Select popular services to show required documents
  const featuredServices = services.filter(s => s.popular).slice(0, 6);

  return (
    <section id="documents" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold tracking-widest text-emerald-600 uppercase mb-2">Be Prepared</h2>
          <h3 className="text-3xl md:text-5xl font-extrabold text-indigo-950 mb-4">Required Documents</h3>
          <p className="text-lg text-slate-600 font-medium">જરૂરી ડોક્યુમેન્ટ્સ અને પુરાવા - Keep these ready before visiting.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredServices.map((service) => (
            <div key={`docs-${service.id}`} className="bg-slate-50 rounded-2xl border border-slate-200 overflow-hidden flex flex-col h-full">
              
              {/* Header */}
              <div className="bg-indigo-700 text-white p-5 flex items-center gap-3">
                <div className="p-2 bg-indigo-600 rounded-lg shrink-0">
                  {getIcon(service.iconName, "w-6 h-6 text-emerald-300")}
                </div>
                <div>
                  <h4 className="font-bold text-lg leading-tight">{service.titleEn}</h4>
                  <span className="text-sm text-indigo-200 font-gujarati">{service.titleGu}</span>
                </div>
              </div>

              {/* Document List */}
              <div className="p-6 flex-grow">
                <ul className="space-y-4">
                  {service.documentsEn.map((doc, index) => (
                    <li key={index} className="flex items-start gap-3">
                      {getIcon("CheckCircle2", "w-5 h-5 text-emerald-500 shrink-0 mt-0.5")}
                      <div>
                        <p className="font-semibold text-slate-800 text-sm leading-snug">{doc}</p>
                        <p className="text-slate-500 text-xs mt-1 font-gujarati">{service.documentsGu[index]}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
             <p className="inline-block bg-yellow-100 text-yellow-800 px-6 py-3 rounded-full font-semibold text-sm border border-yellow-200">
               Note: Carry original copies for scanning where applicable. (ઓરિજિનલ ડોક્યુમેન્ટ્સ સાથે લાવો.)
             </p>
        </div>

      </div>
    </section>
  );
};
