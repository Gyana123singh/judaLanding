import React, { useState } from "react";
import {
    Smartphone,
    LogIn,
    LayoutDashboard,
    Radio,
    DoorOpen,
    Mic,
    Gamepad2,
    Users,
    UserPlus,
    UserCircle2,
    Sparkles,
    ArrowRight,
    MessageCircle,
    Video,
    Gift,
    PlayCircle,
    Download,
} from "lucide-react";
// import video from '../../public/juda_video.mp4'

const steps = [
    {
        id: "01",
        title: "Launch the App",
        desc: "Open the JUDA Voice Chat App on your mobile device and start your experience instantly.",
        icon: Smartphone,
        color: "from-blue-500 to-cyan-500",
        bullets: ["Quick access", "Smooth app launch", "Ready in seconds"],
    },
    {
        id: "02",
        title: "Login / Sign Up",
        desc: "Continue securely using Google or Mobile Number and unlock all features.",
        icon: LogIn,
        color: "from-green-500 to-emerald-500",
        bullets: ["Google login", "Mobile login", "Secure access"],
    },
    {
        id: "03",
        title: "Access Dashboard",
        desc: "After login, users land on the home dashboard where all key features are available.",
        icon: LayoutDashboard,
        color: "from-orange-500 to-amber-500",
        bullets: ["Home screen", "Quick actions", "Feature overview"],
    },
    {
        id: "04",
        title: "Explore Live Rooms",
        desc: "Browse discover, recommended, and trending rooms based on user interest.",
        icon: Radio,
        color: "from-violet-500 to-fuchsia-500",
        bullets: ["Discover section", "Recommended rooms", "Trending rooms"],
    },
    {
        id: "05",
        title: "Join a Room",
        desc: "Tap Join Room and enter a live session to connect with others in real time.",
        icon: DoorOpen,
        color: "from-sky-500 to-blue-600",
        bullets: ["One tap join", "Live sessions", "Instant entry"],
    },
    {
        id: "06",
        title: "Audio / Video Chat",
        desc: "Speak with your microphone, join video streaming, and interact with participants.",
        icon: Mic,
        color: "from-pink-500 to-rose-500",
        bullets: ["Audio chat", "Video streaming", "Live interaction"],
    },
    {
        id: "07",
        title: "Chat, Reactions & Gifts",
        desc: "Send messages, use emojis, react to conversations, and share gifts or coins.",
        icon: MessageCircle,
        color: "from-red-500 to-orange-500",
        bullets: ["Live chat", "Reactions", "Gifts & coins"],
    },
    {
        id: "08",
        title: "Games & Features",
        desc: "Enjoy in-room games and interactive activities for more engagement and fun.",
        icon: Gamepad2,
        color: "from-indigo-500 to-violet-600",
        bullets: ["Mini games", "Interactive features", "Entertainment"],
    },
    {
        id: "09",
        title: "Social Interaction",
        desc: "Add friends, follow users, and build stronger connections inside the app.",
        icon: UserPlus,
        color: "from-teal-500 to-cyan-500",
        bullets: ["Add friends", "Follow users", "Connect socially"],
    },
    {
        id: "10",
        title: "Profile & Store",
        desc: "Manage profile details, visit the store, access rewards, frames, and other features.",
        icon: UserCircle2,
        color: "from-purple-600 to-indigo-600",
        bullets: ["Edit profile", "Store access", "Rewards & activity"],
    },
    {
        id: "11",
        title: "Keep Exploring",
        desc: "Continue joining rooms, meeting people, and enjoying the full JUDA experience.",
        icon: Sparkles,
        color: "from-blue-600 to-indigo-500",
        bullets: ["Join more rooms", "Meet new users", "Enjoy continuously"],
    },
];

const quickFlow = [
    "Open App",
    "Login",
    "Home Dashboard",
    "Explore Rooms",
    "Join Room",
    "Audio / Video Chat",
    "Chat / Reactions / Gifts",
    "Games",
    "Friends",
    "Profile & Store",
];


const StepCard = ({ step }) => {
  const Icon = step.icon;

  return (
    <div className="group relative overflow-hidden rounded-3xl border border-white/20 bg-white/60 backdrop-blur-xl p-6 shadow-[0_20px_60px_rgba(0,0,0,0.08)] transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_30px_80px_rgba(0,0,0,0.12)]">

      {/* Gradient Glow Background */}
      <div className={`absolute -top-20 -right-20 h-40 w-40 rounded-full bg-gradient-to-br ${step.color} opacity-20 blur-3xl group-hover:opacity-40 transition`} />

      {/* Step Number Badge */}
      <div className="absolute top-5 right-5">
        <span className={`px-3 py-1 rounded-full text-xs font-bold text-white bg-gradient-to-r ${step.color} shadow-md`}>
          {step.id}
        </span>
      </div>

      {/* Icon */}
      <div className={`mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${step.color} text-white shadow-lg transition group-hover:scale-110`}>
        <Icon size={24} />
      </div>

      {/* Title */}
      <h3 className="text-xl font-bold text-slate-900 group-hover:text-black transition">
        {step.title}
      </h3>

      {/* Description */}
      <p className="mt-3 text-sm leading-7 text-slate-600">
        {step.desc}
      </p>

      {/* Bullets */}
      <div className="mt-5 space-y-2">
        {step.bullets.map((item, idx) => (
          <div key={idx} className="flex items-center gap-3 text-sm text-slate-700">
            <span className={`h-2 w-2 rounded-full bg-gradient-to-r ${step.color}`} />
            <span>{item}</span>
          </div>
        ))}
      </div>

      {/* Bottom Animated Line */}
      <div className="absolute bottom-0 left-0 h-[3px] w-0 bg-gradient-to-r from-pink-500 via-red-500 to-orange-500 transition-all duration-500 group-hover:w-full"></div>
    </div>
  );
};
const Home = () => {
    const [openVideo, setOpenVideo] = useState(false);
    return (
        <div>
            <section className="relative w-full h-[90vh] overflow-hidden">

                

                {/* 🔥 Dark Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/60 to-black/70" />

                {/* ✨ Content */}
                <div className="relative z-10 flex h-full items-center justify-center px-6">
                    <div className="max-w-4xl text-center text-white">

                        {/* Badges */}
                        <div className="mb-6 flex flex-wrap items-center justify-center gap-3">
                            <span className="rounded-full bg-blue-500 px-5 py-2 text-sm font-semibold shadow-lg">
                                USER JOURNEY GUIDE
                            </span>
                            <span className="rounded-full bg-purple-600 px-5 py-2 text-sm font-semibold shadow-lg">
                                STANDARD OPERATING PROCEDURE
                            </span>
                        </div>

                        {/* Main Heading */}
                        <h1 className="text-3xl font-extrabold leading-tight sm:text-4xl md:text-5xl lg:text-6xl">
                            How Users Experience the
                            <span className="block bg-gradient-to-r from-red-400 via-pink-500 to-orange-400 bg-clip-text text-transparent">
                                JUDA Voice Chat App
                            </span>
                        </h1>

                        {/* Description */}
                        <p className="mt-6 text-base text-gray-200 sm:text-lg md:text-xl leading-relaxed">
                            From launching the app to joining rooms, enjoying audio and video chats,
                            sending gifts, playing games, and building friendships — this section
                            visually explains the complete user flow.
                        </p>

                        {/* CTA Buttons */}
                        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">

                            <button 
                             onClick={() => setOpenVideo(true)}
                            className="rounded-full border border-white/40 px-7 py-3 text-sm font-semibold text-white backdrop-blur-md transition hover:bg-white/10">
                                Watch Video
                            </button>
                        </div>

                    </div>
                </div>

                {/* 🔽 Scroll Indicator */}
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2">
                    <div className="h-10 w-6 rounded-full border-2 border-white/50 flex items-start justify-center p-1">
                        <div className="h-2 w-2 rounded-full bg-white animate-bounce"></div>
                    </div>
                </div>



            </section>

            <section className="relative overflow-hidden bg-gradient-to-br from-slate-200 via-white to-blue-100 py-3 lg:py-5">
                <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-pink-200/30 blur-3xl" />
                <div className="absolute right-0 top-20 h-80 w-80 rounded-full bg-blue-200/30 blur-3xl" />
                <div className="absolute bottom-0 left-1/3 h-80 w-80 rounded-full bg-violet-200/30 blur-3xl" />

                <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-6">
                    {/* top feature strip */}
                    <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4">
                        <div className="rounded-3xl border border-white/70 bg-white/80 p-5 shadow-md backdrop-blur">
                            <Mic className="mb-3 text-pink-500" size={24} />
                            <h4 className="font-bold text-slate-900">Live Audio Chat</h4>
                            <p className="mt-1 text-sm text-slate-600">Real-time conversations with users.</p>
                        </div>
                        <div className="rounded-3xl border border-white/70 bg-white/80 p-5 shadow-md backdrop-blur">
                            <Video className="mb-3 text-blue-500" size={24} />
                            <h4 className="font-bold text-slate-900">Video Streaming</h4>
                            <p className="mt-1 text-sm text-slate-600">Interactive visual engagement.</p>
                        </div>
                        <div className="rounded-3xl border border-white/70 bg-white/80 p-5 shadow-md backdrop-blur">
                            <Gift className="mb-3 text-orange-500" size={24} />
                            <h4 className="font-bold text-slate-900">Gifts & Reactions</h4>
                            <p className="mt-1 text-sm text-slate-600">Fun engagement with coins and emojis.</p>
                        </div>
                        <div className="rounded-3xl border border-white/70 bg-white/80 p-5 shadow-md backdrop-blur">
                            <PlayCircle className="mb-3 text-violet-500" size={24} />
                            <h4 className="font-bold text-slate-900">Games & Features</h4>
                            <p className="mt-1 text-sm text-slate-600">Entertainment built inside the app.</p>
                        </div>
                    </div>

                    {/* cards */}
                    <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
                        {steps.map((step, index) => (
                            <div key={step.id} className="relative">
                                <StepCard step={step} />
                                {index !== steps.length - 1 && (
                                    <div className="pointer-events-none absolute -right-3 top-1/2 hidden -translate-y-1/2 xl:flex">
                                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-lg">
                                            <ArrowRight className="text-slate-400" size={20} />
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* quick flow + cta */}
                    <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-[1.2fr_0.8fr]">
                        <div className="rounded-[32px] bg-gradient-to-br from-slate-900 via-indigo-900 to-purple-900 p-8 text-white shadow-[0_20px_80px_rgba(15,23,42,0.25)]">
                            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
                                Quick Flow Overview
                            </p>
                            <h3 className="mt-3 text-2xl font-extrabold sm:text-3xl">
                                Everything users can do inside JUDA
                            </h3>

                            <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
                                {quickFlow.map((item, idx) => (
                                    <div
                                        key={idx}
                                        className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/10 px-4 py-3 backdrop-blur"
                                    >
                                        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-cyan-400/20 text-sm font-bold text-cyan-300">
                                            {idx + 1}
                                        </span>
                                        <span className="text-sm font-medium text-white/90">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="rounded-[32px] border border-white/60 bg-white/80 p-8 shadow-[0_20px_60px_rgba(15,23,42,0.08)] backdrop-blur">
                            <span className="inline-flex rounded-full bg-pink-100 px-4 py-2 text-sm font-bold text-pink-600">
                                Why users love it
                            </span>

                            <h3 className="mt-4 text-2xl font-extrabold text-slate-900">
                                Connect, chat, play, and build community
                            </h3>

                            <p className="mt-4 text-sm leading-7 text-slate-600">
                                JUDA combines voice chat, video interaction, room discovery, games,
                                gifting, and social engagement in one exciting platform.
                            </p>

                            <div className="mt-6 space-y-3">
                                <div className="rounded-2xl bg-slate-50 px-4 py-3 text-sm text-slate-700">Voice rooms and live social engagement</div>
                                <div className="rounded-2xl bg-slate-50 px-4 py-3 text-sm text-slate-700">Chat, reactions, games, and gifting</div>
                                <div className="rounded-2xl bg-slate-50 px-4 py-3 text-sm text-slate-700">Profile, store, rewards, and friendships</div>
                            </div>
                        </div>
                    </div>

                    {/* footer banner */}
                    <div className="mt-14 overflow-hidden rounded-[30px] bg-gradient-to-r from-red-600 via-pink-600 to-orange-500 px-6 py-5 shadow-[0_20px_60px_rgba(239,68,68,0.25)]">
                        <div className="flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
                            <h3 className="text-2xl font-extrabold tracking-wide text-white sm:text-3xl">
                                JUDA – CONNECT. CHAT. ENJOY!
                            </h3>
                            <span className="rounded-full bg-white/20 px-5 py-2 text-sm font-semibold text-white backdrop-blur">
                                Audio • Video • Games • Friends
                            </span>
                        </div>
                    </div>
                </div>
            </section>

            {/* 🚀 Floating Bouncing Download Button */}
            <a
                href="https://drive.google.com/file/d/1fQlRqDTmoNIJKCP1crW-flSiJyWE4Fs1/view?usp=sharing"  
                download // 👉 change this to your download link
                className="fixed bottom-10 right-6 z-20"
            >
                <div className="relative flex items-center justify-center">

                    {/* Glow effect */}
                    <span className="absolute h-16 w-16 rounded-full bg-red-500 opacity-30 blur-xl animate-pulse"></span>

                    {/* Ball */}
                    <div className="bounce-ball flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-r from-red-500 via-pink-500 to-orange-500 shadow-xl cursor-pointer">
                        <Download size={24} className="text-white" />
                    </div>

                </div>
                <p className="text-red-500 font-bold">Download Juda App</p>

            </a>
        </div>
    );
};

export default Home;