import { useState, useEffect } from 'react';
import { db, auth } from '../lib/firebase';
import { collection, onSnapshot, addDoc, serverTimestamp, query, orderBy, deleteDoc, doc } from 'firebase/firestore';
import { signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged, User } from 'firebase/auth';
import { FileText, Download, Plus, X, ExternalLink, Trash2, LogOut } from 'lucide-react';

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
    <section id="brochures" className="py-20 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16 relative">
          <span className="text-emerald-500 font-bold tracking-wider uppercase text-sm mb-2 block">Downloads</span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-4">Business Brochures & forms</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-4">
            Download our service brochures, application forms, and essential document lists directly.
          </p>
          
          <div className="absolute right-0 top-0 flex flex-col items-end gap-2">
            <button 
              onClick={handleAdminToggle}
              className="text-xs text-slate-400 hover:text-indigo-600 transition-colors"
              title="Admin access"
            >
              Manage Documents
            </button>
            {user && (
              <button 
                onClick={handleLogout}
                className="text-xs text-red-400 hover:text-red-600 transition-colors flex items-center gap-1"
                title="Logout"
              >
                <LogOut size={12} /> Logout
              </button>
            )}
          </div>
        </div>

        {showAdmin && (
          <div className="mb-12 bg-white p-6 rounded-2xl shadow-lg border border-indigo-100 max-w-2xl mx-auto">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-bold text-slate-900">Add New Document</h3>
              <button onClick={() => setShowAdmin(false)} className="p-2 text-slate-400 hover:text-red-500 rounded-full hover:bg-slate-100 transition-colors">
                <X size={20} />
              </button>
            </div>
            
            <form onSubmit={handleAddBrochure} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Document Title *</label>
                <input 
                  type="text" 
                  required 
                  value={title} 
                  onChange={e => setTitle(e.target.value)}
                  className="w-full px-4 py-2 border border-slate-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none"
                  placeholder="e.g., Ration Card Document List"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Description</label>
                <input 
                  type="text" 
                  value={description} 
                  onChange={e => setDescription(e.target.value)}
                  className="w-full px-4 py-2 border border-slate-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none"
                  placeholder="e.g., Detailed list of documents required."
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Category</label>
                  <input 
                    type="text" 
                    value={category} 
                    onChange={e => setCategory(e.target.value)}
                    className="w-full px-4 py-2 border border-slate-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none"
                    placeholder="e.g., Services, Forms"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">PDF Link (URL) *</label>
                  <input 
                    type="url" 
                    required 
                    value={downloadUrl} 
                    onChange={e => setDownloadUrl(e.target.value)}
                    className="w-full px-4 py-2 border border-slate-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none"
                    placeholder="https://drive.google.com/..."
                  />
                </div>
              </div>
              
              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-4 rounded-xl transition-colors mt-4 flex justify-center items-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Adding...' : <><Plus size={20} /> Add Document</>}
              </button>
            </form>
          </div>
        )}

        {loading ? (
          <div className="flex justify-center items-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
          </div>
        ) : brochures.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-3xl border border-dashed border-slate-300 mx-auto max-w-3xl">
            <FileText className="w-16 h-16 text-slate-300 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-slate-700 mb-2">No documents currently available</h3>
            <p className="text-slate-500">Check back later for downloadable brochures and forms.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {brochures.map((brochure) => (
              <div key={brochure.id} className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200 hover:shadow-md transition-shadow relative group flex flex-col h-full">
                {showAdmin && (
                  <button 
                    onClick={() => handleDelete(brochure.id)}
                    className="absolute top-4 right-4 p-2 bg-red-50 text-red-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:bg-red-100"
                    title="Delete document"
                  >
                    <Trash2 size={16} />
                  </button>
                )}
                
                <div className="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center mb-4 shrink-0">
                  <FileText size={24} />
                </div>
                
                <span className="inline-block px-2.5 py-1 bg-slate-100 text-slate-600 text-xs font-semibold rounded-md mb-3 w-fit">
                  {brochure.category || 'General'}
                </span>
                
                <h3 className="text-xl font-bold text-slate-900 mb-2">{brochure.title}</h3>
                
                {brochure.description && (
                  <p className="text-slate-600 text-sm mb-6 flex-grow">{brochure.description}</p>
                )}
                
                <div className="mt-auto pt-4 border-t border-slate-100">
                  <a 
                    href={brochure.downloadUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex w-full justify-center items-center gap-2 bg-indigo-50 hover:bg-indigo-600 text-indigo-700 hover:text-white px-4 py-2.5 rounded-xl text-sm font-bold transition-colors"
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
