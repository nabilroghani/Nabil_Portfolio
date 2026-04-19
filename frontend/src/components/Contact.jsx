import { useState } from 'react';
import API from '../api/axios';
import toast from 'react-hot-toast';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const tid = toast.loading("Sending...");
    try {
      await API.post('/messages', formData);
      toast.success("Message sent successfully!", { id: tid });
      setFormData({ name: '', email: '', message: '' });
    } catch (err) {
      toast.error("Failed to send.", { id: tid });
    }
  };

  return (
    <section id="contact" className="py-32 flex flex-col items-center">
      <div className="flex items-center gap-4 mb-4">
        <span className="text-[#64ffda] font-mono text-sm">03. What's Next?</span>
      </div>
      <h2 className="text-[#e6f1ff] text-5xl font-bold mb-6 text-center">Get In Touch</h2>
      <p className="text-[#8892b0] max-w-lg text-center mb-12">
        Mera inbox hamesha open hai. Agar aapka koi sawal hai ya aap project discuss karna chahte hain, toh zaroor message bhejien!
      </p>

      <form onSubmit={handleSubmit} className="w-full max-w-xl space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <input 
            className="w-full bg-[#112240] border border-[#233554] p-4 rounded text-[#e6f1ff] focus:border-[#64ffda] outline-none transition-all"
            type="text" placeholder="Your Name" required
            value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})}
          />
          <input 
            className="w-full bg-[#112240] border border-[#233554] p-4 rounded text-[#e6f1ff] focus:border-[#64ffda] outline-none transition-all"
            type="email" placeholder="Your Email" required
            value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})}
          />
        </div>
        <textarea 
          className="w-full bg-[#112240] border border-[#233554] p-4 rounded text-[#e6f1ff] focus:border-[#64ffda] outline-none transition-all h-40"
          placeholder="Your Message..." required
          value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})}
        ></textarea>
        <div className="flex justify-center">
          <button className="px-12 py-4 border-2 border-[#64ffda] text-[#64ffda] rounded-lg font-mono hover:bg-[#64ffda]/10 transition-all text-lg">
            Say Hello!
          </button>
        </div>
      </form>
    </section>
  );
};

export default Contact;