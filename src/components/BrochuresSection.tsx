import { useState, useEffect } from 'react';
import { db, auth } from '../lib/firebase';
import { collection, onSnapshot, addDoc, serverTimestamp, query, orderBy, deleteDoc, doc } from 'firebase/firestore';
import { signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged, User } from 'firebase/auth';
import { FileText, Download, Plus, X, Trash2, LogOut, Settings } from 'lucide-react';

interface Brochure {
  id: string;
  title: string;
  description: string;
  downloadUrl: string;
  category: string;
  createdAt: any;
}

export const BrochuresSection = () => {
  const [brochures, setBrochures] = useState<Brochure[]>([]);
  const [showAdmin, setShowAdmin] = useState(false);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<User | null>(null);

  // Form state
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [downloadUrl, setDownloadUrl] = useState('');
  const [category, setCategory] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const unsubscribeAuth = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      if (!currentUser) setShowAdmin(false);
    });

    const q = query(collection(db, 'brochures'), orderBy('createdAt', 'desc'));
    const unsubscribeDb = onSnapshot(q, (snapshot) => {
      const docs = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })) as Brochure[];
      setBrochures(docs);
      setLoading(false);
    }, (error) => {
      console.error("Error fetching brochures:", error);
      setLoading(false);
    });

    return () => {
      unsubscribeAuth();
      unsubscribeDb();
    };
  }, []);

  const handleAdminToggle = async () => {
    if (!user) {
      try {
        const provider = new GoogleAuthProvider();
        const result = await signInWithPopup(auth, provider);
        if (result.user.email !== 'harshhhparmar007@gmail.com') {
          alert('Unauthorized. Only the administrator can manage documents.');
          await signOut(auth);
          return;
        }
        setShowAdmin(true);
      } catch (error) {
        console.error("Login failed:", error);
        alert("Failed to login to admin portal.");
      }
    } else {
      if (user.email !== 'harshhhparmar007@gmail.com') {
        alert('Unauthorized. Only the administrator can manage documents.');
        return;
      }
      setShowAdmin(!showAdmin);
    }
  };

  const handleLogout = async () => {
    await signOut(auth);
    setShowAdmin(false);
  };

  const handleAddBrochure = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !downloadUrl) return;
    
    if (!user) {
      alert("You must be logged in to add documents.");
      return;
    }

    setIsSubmitting(true);
    try {
      await addDoc(collection(db, 'brochures'), {
        title,
        description,
        downloadUrl,
        category: category || 'General',
        createdAt: serverTimestamp()
      });
      setTitle('');
      setDescription('');
      setDownloadUrl('');
      setCategory('');
      setShowAdmin(false);
    } catch (error: any) {
      console.error("Error adding brochure: ", error);
      alert(`Failed to add brochure. ${error.message || "You might not have permission."}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (window.confirm("Are you sure you want to delete this document?")) {
      try {
        await deleteDoc(doc(db, 'brochures', id));
      } catch (error) {
        console.error("Error deleting: ", error);
        alert("Failed to delete.");
      }
    }
  };

  return (
    <section id="brochures" className="py-20 bg-indigo-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16 relative">
          <h2 className="text-sm font-bold tracking-widest text-emerald-600 uppercase mb-2">Downloads</h2>
          <h3 className="text-3xl md:text-5xl font-extrabold text-indigo-950 mb-4">Brochures & Forms</h3>
          <p className="text-lg text-slate-600 font-medium max-w-2xl mx-auto mb-6">
            Download our service brochures, application forms, and essential document lists.
          </p>
          
          <div className="absolute right-0 top-0 flex flex-col items-end gap-2">
            <button 
              onClick={handleAdminToggle}
              className="text-xs text-slate-400 hover:text-indigo-600 transition-colors flex items-center gap-1 font-medium bg-white px-3 py-1.5 rounded-full shadow-sm"
              title="Admin access"
            >
              <Settings size={14} /> Manage
            </button>
            {user && (
              <button 
                onClick={handleLogout}
                className="text-xs text-red-500 hover:text-red-700 transition-colors flex items-center gap-1 font-medium bg-white px-3 py-1.5 rounded-full shadow-sm mt-1"
                title="Logout"
              >
                <LogOut size={14} /> Logout
              </button>
            )}
          </div>
        </div>

        {showAdmin && (
          <div className="mb-16 bg-white p-8 rounded-3xl shadow-xl shadow-indigo-100 max-w-3xl mx-auto border border-indigo-50">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-bold text-indigo-900 border-l-4 border-emerald-500 pl-3">Add New Document</h3>
              <button onClick={() => setShowAdmin(false)} className="p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-full transition-colors">
                <X size={20} />
              </button>
            </div>
            
            <form onSubmit={handleAddBrochure} className="space-y-5">
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-1.5">Document Title *</label>
                <input 
                  type="text" 
                  required 
                  value={title} 
                  onChange={e => setTitle(e.target.value)}
                  className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all font-medium bg-slate-50 focus:bg-white"
                  placeholder="e.g., Ration Card Document List"
                />
              </div>
              
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-1.5">Description</label>
                <input 
                  type="text" 
                  value={description} 
                  onChange={e => setDescription(e.target.value)}
                  className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all font-medium bg-slate-50 focus:bg-white"
                  placeholder="e.g., Detailed list of documents required."
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-1.5">Category</label>
                  <input 
                    type="text" 
                    value={category} 
                    onChange={e => setCategory(e.target.value)}
                    className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all font-medium bg-slate-50 focus:bg-white"
                    placeholder="e.g., Services, Forms"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-1.5">PDF Link (URL) *</label>
                  <input 
                    type="url" 
                    required 
                    value={downloadUrl} 
                    onChange={e => setDownloadUrl(e.target.value)}
                    className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all font-medium bg-slate-50 focus:bg-white"
                    placeholder="https://drive.google.com/..."
                  />
                </div>
              </div>
              
              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3.5 px-6 rounded-xl transition-colors mt-6 flex justify-center items-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed shadow-md shadow-indigo-200 text-lg"
              >
                {isSubmitting ? 'Adding Document...' : <><Plus size={20} /> Add to Downloads</>}
              </button>
            </form>
          </div>
        )}

        {loading ? (
          <div className="flex justify-center items-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-b-4 border-indigo-600"></div>
          </div>
        ) : brochures.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-3xl border-2 border-dashed border-slate-200 mx-auto max-w-3xl shadow-sm">
            <div className="bg-slate-50 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6">
              <FileText className="w-12 h-12 text-slate-300" />
            </div>
            <h3 className="text-xl font-bold text-slate-800 mb-2">No documents available</h3>
            <p className="text-slate-500 font-medium">Check back later for downloadable brochures and forms.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto">
            {brochures.map((brochure) => (
              <div key={brochure.id} className="bg-white rounded-3xl p-6 shadow-md border border-slate-100 hover:shadow-xl hover:-translate-y-1 hover:border-indigo-100 transition-all duration-300 relative group flex flex-col h-full">
                {showAdmin && (
                  <button 
                    onClick={() => handleDelete(brochure.id)}
                    className="absolute -top-3 -right-3 p-2.5 bg-white border border-red-100 text-red-500 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-all hover:bg-red-50 hover:scale-110 z-10"
                    title="Delete document"
                  >
                    <Trash2 size={16} />
                  </button>
                )}
                
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-2xl flex items-center justify-center shrink-0 shadow-sm border border-indigo-100/50">
                    <FileText size={24} />
                  </div>
                  <div className="pt-1">
                    <h3 className="text-lg font-bold text-slate-800 leading-tight group-hover:text-indigo-700 transition-colors">{brochure.title}</h3>
                    <span className="inline-block px-2.5 py-1 bg-emerald-50 text-emerald-600 text-xs font-bold rounded-lg mt-2 border border-emerald-100">
                      {brochure.category || 'General'}
                    </span>
                  </div>
                </div>
                
                {brochure.description && (
                  <p className="text-sm text-slate-600 mb-6 flex-grow line-clamp-3 leading-relaxed font-medium">{brochure.description}</p>
                )}
                
                <div className="mt-auto pt-5 border-t border-slate-100">
                  <a 
                    href={brochure.downloadUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex w-full justify-center items-center gap-2 bg-slate-900 hover:bg-indigo-600 text-white py-3 rounded-xl text-sm font-bold transition-all shadow-md hover:shadow-lg hover:shadow-indigo-600/20"
                  >
                    <Download size={18} /> Download PDF
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
