import React from "react";

const ContactInfo = () => {
    return (
        <div className="bg-white/5 backdrop-blur-2xl p-10 rounded-[3rem] shadow-2xl w-full max-w-lg border border-white/10">
             <h2 className="text-4xl font-black text-white mb-8 uppercase tracking-widest text-center">Get in Touch</h2>
             <div className="space-y-6 text-gray-300">
                <div className="flex items-center gap-6 p-4 bg-white/5 rounded-2xl hover:bg-white/10 transition-colors">
                     <span className="text-3xl">📍</span>
                     <div>
                         <p className="font-bold text-xs uppercase tracking-wider text-gray-400">Address</p>
                         <p className="text-sm font-semibold leading-tight mt-1">Plavara Puthen Veedu, Mukkooodu [P.O],<br/>Kundara Kollam, Kerala</p>
                     </div>
                </div>
                <div className="flex items-center gap-6 p-4 bg-white/5 rounded-2xl hover:bg-white/10 transition-colors">
                     <span className="text-3xl">📞</span>
                     <div>
                         <p className="font-bold text-xs uppercase tracking-wider text-gray-400">Phone</p>
                         <p className="text-lg font-black tracking-tight text-white">+91-9496349877</p>
                     </div>
                </div>
                <div className="flex items-center gap-6 p-4 bg-white/5 rounded-2xl hover:bg-white/10 transition-colors">
                     <span className="text-3xl">✉️</span>
                     <div>
                         <p className="font-bold text-xs uppercase tracking-wider text-gray-400">Email</p>
                         <a href="mailto:robypk93@gmail.com" className="text-base font-bold text-green-400 hover:text-green-300 transition-colors">robypk93@gmail.com</a>
                     </div>
                </div>
                <div className="flex items-center gap-6 p-4 bg-white/5 rounded-2xl hover:bg-white/10 transition-colors">
                     <span className="text-3xl">🔗</span>
                     <div>
                         <p className="font-bold text-xs uppercase tracking-wider text-gray-400">Social</p>
                         <a href="https://linkedin.com/in/robypk93" target="_blank" rel="noopener noreferrer" className="text-base font-bold text-blue-400 hover:text-blue-300 transition-colors">linkedin.com/in/robypk93</a>
                     </div>
                </div>
             </div>
        </div>
    );
};

export default ContactInfo;
