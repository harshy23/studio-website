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
    <div className="w-full max-w-4xl mx-auto px-3 sm:px-4 py-4 md:py-10 flex flex-col items-center">
      {/* Page Title */}
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#302C2D] font-GochiHand text-center mb-5 sm:mb-8 md:mb-12 tracking-tight">
        Let's Connect!
      </h1>

      {/* Card Container Stack */}
      <div className="relative w-full max-w-3xl">
        {/* BACKFORM Image Card (Rotated background shape) */}
        <div
          className="absolute inset-0 w-full h-full rounded-[1.5rem] sm:rounded-[2rem] md:rounded-[2.5rem] overflow-hidden shadow-md shadow-black/30 border- border-black/80 transform rotate-3 sm:rotate-6 -translate-x-1 sm:-translate-x-2 translate-y-1.5 sm:translate-y-2 pointer-events-none z-0"
          aria-hidden="true"
        >
          <img
            src={backformImg}
            alt="Decorative form background"
            className="w-full h-full object-cover"
          />
        </div>

        {/* FRONT FORM Card */}
        <div className="relative z-10 w-full bg-white rounded-[1.5rem] sm:rounded-[2rem] md:rounded-[2.5rem] shadow-sm shadow-black/80 border-2 border-black p-2.5 sm:p-5 md:p-7 pt-2.5 sm:pt-4 md:pt-4 flex flex-col">

          {/* Top Right Mascot Logo */}
          <div className="absolute top-2 right-2.5 sm:top-3 sm:right-4 md:top-4 md:right-6 z-20">
            <img
              src={LogoPrimary}
              alt="Studio Biskoot Mascot"
              className="w-5 h-5 sm:w-8 sm:h-8 md:w-14 md:h-14 object-contain select-none grayscale"
            />
          </div>
          <form onSubmit={handleSubmit} className="w-full">
            <div className="grid grid-cols-2 gap-2 sm:gap-4 md:gap-8 items-center md:items-start relative">
              {/* LEFT SECTION: Chai Dip Frame Animation */}
              <div className="relative flex items-center md:items-start justify-center w-full h-[175px] sm:h-[220px] md:h-[380px] -mt-1 md:-mt-4 -ml-0.5 md:-ml-1 overflow-visible">
                {/* Yellow Background Box - smaller than hand animation */}
                <div className="absolute top-[32px] sm:top-[46px] md:top-[88px] w-[86%] sm:w-[85%] h-[76%] sm:h-[75%] bg-[#fff6d6] rounded-xl sm:rounded-2xl md:rounded-3xl border border-amber-200/50 shadow-inner z-0" />

                {/* Hand Animation extending to top of form */}
                {chaiDipFrames && chaiDipFrames.length > 0 ? (
                  <img
                    src={chaiDipFrames[currentFrame]}
                    alt="Chai Dip animation loop"
                    className="relative z-10 w-[115%] h-[112%] md:h-[110%] object-contain object-top select-none"
                  />
                ) : (
                  <div className="relative z-10 text-amber-800 text-xs sm:text-sm font-fredoka">Loading animation...</div>
                )}
              </div>

              {/* VERTICAL DIVIDER LINE */}
              <img
                src={formDividerImg}
                alt="Form divider"
                className="block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[94%] sm:h-[98%] md:h-[102%] max-h-[400px] w-auto object-contain select-none pointer-events-none z-10 rotate-2"
              />

              {/* RIGHT SECTION: Contact Form Inputs */}
              <div className="mt-0 md:mt-3 pt-3.5 sm:pt-6 md:pt-12 flex flex-col gap-1.5 sm:gap-2.5 md:gap-4 justify-center p-0.5 sm:p-2 md:p-4">
                {/* To Row */}
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <label className="font-fredoka font-bold text-gray-900 text-[10px] sm:text-xs md:text-lg min-w-[28px] sm:min-w-[36px] md:min-w-[50px]">
                    To:
                  </label>
                  <div className="flex-grow bg-[#f3f3f3] rounded-md sm:rounded-lg md:rounded-xl px-2 py-0.5 sm:py-1 md:py-1.5 flex items-center justify-between font-GochiHand text-[10px] sm:text-xs md:text-sm border border-gray-200/60 ">
                    <span className="font-bold text-gray-800">Studio Biskoot</span>
                    <span className="text-[9px] sm:text-xs text-gray-400 font-bold">Cc</span>
                  </div>
                </div>

                {/* From Row */}
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <label htmlFor="email" className="font-fredoka font-bold text-gray-900 text-[10px] sm:text-xs md:text-lg min-w-[28px] sm:min-w-[36px] md:min-w-[50px]">
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
                    className="flex-grow bg-[#f3f3f3] rounded-md sm:rounded-lg md:rounded-xl px-2 py-0.5 sm:py-1 md:py-1.5 text-[10px] sm:text-xs md:text-sm font-sans text-gray-800 placeholder-gray-400 border border-gray-200/60 focus:outline-none focus:ring-1 md:focus:ring-2 focus:ring-black/20 disabled:opacity-60 "
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
                    className="w-full bg-[#f3f3f3] rounded-md sm:rounded-lg md:rounded-xl px-2 py-0.5 sm:py-1 md:py-1.5 text-[10px] sm:text-xs md:text-sm font-sans text-gray-800 placeholder-gray-400 border border-gray-200/60 focus:outline-none focus:ring-1 md:focus:ring-2 focus:ring-black/20 disabled:opacity-60 "
                  />
                </div>

                {/* Message */}
                <div>
                  <textarea
                    name="message"
                    rows={2}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Message"
                    required
                    disabled={status === 'submitting'}
                    className="w-full bg-[#f3f3f3] rounded-md sm:rounded-lg md:rounded-xl px-2 py-1 sm:py-1.5 md:py-2.5 text-[10px] sm:text-xs md:text-base font-sans text-gray-800 placeholder-gray-400 border border-gray-200/60 focus:outline-none focus:ring-1 md:focus:ring-2 focus:ring-black/20 resize-none disabled:opacity-60 h-[44px] sm:h-[60px] md:h-auto"
                  />
                </div>

                {/* Status Feedback */}
                {status === 'success' && (
                  <div className="p-1 sm:p-2 md:p-3 bg-green-50 border border-green-200 rounded-md sm:rounded-xl text-green-800 text-[9px] sm:text-xs md:text-sm text-center font-fredoka">
                    {responseMessage || 'Message sent successfully!'}
                  </div>
                )}
                {status === 'error' && (
                  <div className="p-1 sm:p-2 bg-green-50 border border-green-200 rounded-md sm:rounded-xl text-green-800 text-[9px] sm:text-xs text-center font-fredoka">
                    {responseMessage || 'Failed to send message.'}
                  </div>
                )}

                {/* Send Button */}
                <div className="flex justify-end pt-0.5">
                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="bg-[#ff6575] hover:bg-[#ff4d5f] active:scale-95 text-white font-fredoka font-bold text-[10px] sm:text-xs md:text-base px-3 sm:px-4 md:px-6 py-0.5 sm:py-1 md:py-1.5 rounded-lg md:rounded-xl shadow-sm md:shadow-md transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
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