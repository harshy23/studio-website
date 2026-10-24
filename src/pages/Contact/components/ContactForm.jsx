import { useState, useEffect } from 'react';
import { sendContactMessage } from '../../../api/contactApi';
import { backformImg, chaiDipFrames, formDividerImg, LogoPrimary } from '../../../logos';



export default function ContactForm() {
  const [formData, setFormData] = useState({
    email: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState('idle'); // 'idle' | 'submitting' | 'success' | 'error'
  const [responseMessage, setResponseMessage] = useState('');
  const [currentFrame, setCurrentFrame] = useState(0);

  // Loop animation for Chai Dip frames (slightly slower, approx 13-14 FPS)
  useEffect(() => {
    if (!chaiDipFrames || chaiDipFrames.length === 0) return;
    const timer = setInterval(() => {
      setCurrentFrame((prev) => (prev + 1) % chaiDipFrames.length);
    }, 75);
    return () => clearInterval(timer);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');
    setResponseMessage('');

    try {
      const res = await sendContactMessage(formData);
      if (res.success) {
        setStatus('success');
        setResponseMessage(res.message || 'Your message has been sent successfully.');
        setFormData({ email: '', subject: '', message: '' });
      } else {
        setStatus('error');
        setResponseMessage(res.message || 'Unable to send your message. Please try again.');
      }
    } catch (err) {
      setStatus('error');
      setResponseMessage(err.message || 'Unable to send your message. Please try again.');
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-6 md:py-10 flex flex-col items-center">
      {/* Page Title */}
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-black font-GochiHand text-center mb-8 md:mb-12 tracking-tight">
        Let's Connect!
      </h1>

      {/* Card Container Stack */}
      <div className="relative w-full max-w-3xl">
        {/* BACKFORM Image Card (Rotated background shape) */}
        <div
          className="absolute inset-0 w-full h-full rounded-[2rem] md:rounded-[2.5rem] overflow-hidden shadow-md shadow-black/30 border- border-black/80 transform rotate-6  -translate-x-2 translate-y-2 pointer-events-none z-0"
          aria-hidden="true"
        >
          <img
            src={backformImg}
            alt="Decorative form background"
            className="w-full h-full object-cover"
          />
        </div>

        {/* FRONT FORM Card */}
        <div className="relative z-10 w-full bg-white rounded-[2rem] shadow-sm shadow-black/80 md:rounded-[2.5rem] border-2 border-black p-5 md:p-7 pt-4 md:pt-4 flex flex-col">

          {/* Top Right Mascot Logo */}
          <div className="absolute top-3 right-4 md:top-4 md:right-6 z-20">
            <img
              src={LogoPrimary}
              alt="Studio Biskoot Mascot"
              className="w-12 h-12 md:w-14 md:h-14 object-contain select-none grayscale"
            />
          </div>
          <form onSubmit={handleSubmit} className="w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-start relative">
              {/* LEFT SECTION: Chai Dip Frame Animation */}
              <div className="relative flex items-start justify-center w-full h-[340px] md:h-[380px] -mt-4 -ml-1 overflow-visible">
                {/* Yellow Background Box - smaller than hand animation */}
                <div className="absolute top-[88px] w-[85%] h-[75%] bg-[#fff6d6] rounded-2xl md:rounded-3xl border border-amber-200/50 shadow-inner z-0" />

                {/* Hand Animation extending to top of form */}
                {chaiDipFrames && chaiDipFrames.length > 0 ? (
                  <img
                    src={chaiDipFrames[currentFrame]}
                    alt="Chai Dip animation loop"
                    className="relative z-10 w-[115%] h-[110%] object-contain object-top select-none"
                  />
                ) : (
                  <div className="relative z-10 text-amber-800 text-sm font-fredoka">Loading animation...</div>
                )}
              </div>

              {/* VERTICAL DIVIDER LINE */}
              <img
                src={formDividerImg}
                alt="Form divider"
                className="hidden md:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[102%] max-h-[400px] w-auto object-contain select-none pointer-events-none z-10 rotate-2"
              />

              {/* RIGHT SECTION: Contact Form Inputs */}
              <div className=" mt-3 pt-12 flex flex-col gap-3.5 md:gap-4 justify-center p-4">
                {/* To Row */}
                <div className="flex items-center gap-2">
                  <label className="font-fredoka font-bold text-gray-900 text-base md:text-lg min-w-[50px]">
                    To:
                  </label>
                  <div className="flex-grow bg-[#f3f3f3] rounded-xl px-3 py-1.5 flex items-center justify-between font-GochiHand text-xs md:text-sm border border-gray-200/60 ">
                    <span className="font-bold text-gray-800">Studio Biskoot</span>
                    <span className="text-xs text-gray-400 font-bold">Cc</span>
                  </div>
                </div>

                {/* From Row */}
                <div className="flex items-center gap-2">
                  <label htmlFor="email" className="font-fredoka font-bold text-gray-900 text-base md:text-lg min-w-[50px]">
                    From:
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="xyz@email.com"
                    required
                    disabled={status === 'submitting'}
                    className="flex-grow bg-[#f3f3f3] rounded-xl px-3 py-1.5 text-xs md:text-sm font-sans text-gray-800 placeholder-gray-400 border border-gray-200/60 focus:outline-none focus:ring-2 focus:ring-black/20 disabled:opacity-60 "
                  />
                </div>

                {/* Query/Subject */}
                <div>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Query/Subject"
                    required
                    disabled={status === 'submitting'}
                    className="w-full bg-[#f3f3f3] rounded-xl px-3 py-1.5 text-xs md:text-sm font-sans text-gray-800 placeholder-gray-400 border border-gray-200/60 focus:outline-none focus:ring-2 focus:ring-black/20 disabled:opacity-60 "
                  />
                </div>

                {/* Message */}
                <div>
                  <textarea
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Message"
                    required
                    disabled={status === 'submitting'}
                    className="w-full bg-[#f3f3f3] rounded-xl px-4 py-2.5 text-sm md:text-base font-sans text-gray-800 placeholder-gray-400 border border-gray-200/60 focus:outline-none focus:ring-2 focus:ring-black/20 resize-none disabled:opacity-60"
                  />
                </div>

                {/* Status Feedback */}
                {status === 'success' && (
                  <div className="p-3 bg-green-50 border border-green-200 rounded-xl text-green-800 text-sm text-center font-fredoka">
                    {responseMessage || 'Message sent successfully!'}
                  </div>
                )}
                {status === 'error' && (
                  <div className="p-2 bg-green-50 border border-green-200 rounded-xl text-green-800 text-xs text-center font-fredoka">
                    {responseMessage || 'Failed to send message.'}
                  </div>
                )}

                {/* Send Button */}
                <div className="flex justify-end pt-0.5">
                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="bg-[#ff6575] hover:bg-[#ff4d5f] active:scale-95 text-white font-fredoka font-bold text-sm md:text-base px-6 py-1.5 rounded-xl shadow-md transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {status === 'submitting' ? 'Sending...' : 'Send'}
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
