import React, { useState } from 'react';
import { Mail, Send, AlertCircle, CheckCircle } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const Contact = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
    subject: ''
  });
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const validateForm = () => {
    const newErrors: Partial<FormData> = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.subject) newErrors.subject = 'Subject is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSubmitStatus('idle'), 3000);
    } catch (error) {
      setSubmitStatus('error');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormData]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  return (
    <section id="contact" className="min-h-screen bg-black py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-amber-500 to-yellow-300 bg-clip-text text-transparent">
              Get in Touch
            </span>
          </h2>
          <p className="text-gray-300">Have a project in mind? Let's discuss how we can help.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="name" className="block text-sm font-medium text-gray-300">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`w-full px-4 py-3 bg-gray-900 border ${
                  errors.name ? 'border-red-500' : 'border-gray-700'
                } rounded-lg focus:outline-none focus:border-amber-500 text-white transition-colors`}
                placeholder="Your name"
              />
              {errors.name && (
                <p className="text-red-500 text-sm">{errors.name}</p>
              )}
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full px-4 py-3 bg-gray-900 border ${
                  errors.email ? 'border-red-500' : 'border-gray-700'
                } rounded-lg focus:outline-none focus:border-amber-500 text-white transition-colors`}
                placeholder="your@email.com"
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email}</p>
              )}
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="subject" className="block text-sm font-medium text-gray-300">
              Subject
            </label>
            <select
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className={`w-full px-4 py-3 bg-gray-900 border ${
                errors.subject ? 'border-red-500' : 'border-gray-700'
              } rounded-lg focus:outline-none focus:border-amber-500 text-white transition-colors`}
            >
              <option value="">Select a subject</option>
              <option value="general">General Inquiry</option>
              <option value="project">Project Discussion</option>
              <option value="support">Technical Support</option>
              <option value="other">Other</option>
            </select>
            {errors.subject && (
              <p className="text-red-500 text-sm">{errors.subject}</p>
            )}
          </div>

          <div className="space-y-2">
            <label htmlFor="message" className="block text-sm font-medium text-gray-300">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={6}
              className={`w-full px-4 py-3 bg-gray-900 border ${
                errors.message ? 'border-red-500' : 'border-gray-700'
              } rounded-lg focus:outline-none focus:border-amber-500 text-white transition-colors`}
              placeholder="Your message..."
            />
            {errors.message && (
              <p className="text-red-500 text-sm">{errors.message}</p>
            )}
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              disabled={submitStatus === 'success'}
              className="bg-gradient-to-r from-amber-500 to-yellow-600 text-black font-semibold px-8 py-3 rounded-lg hover:shadow-lg hover:shadow-amber-500/25 transition-all flex items-center gap-2 disabled:opacity-50"
            >
              Send Message
              <Send size={20} />
            </button>
          </div>

          {submitStatus !== 'idle' && (
            <div className={`p-4 rounded-lg flex items-center gap-2 ${
              submitStatus === 'success' ? 'bg-green-500/10 text-green-500' : 'bg-red-500/10 text-red-500'
            }`}>
              {submitStatus === 'success' ? (
                <>
                  <CheckCircle size={20} />
                  <span>Message sent successfully!</span>
                </>
              ) : (
                <>
                  <AlertCircle size={20} />
                  <span>Failed to send message. Please try again.</span>
                </>
              )}
            </div>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact;