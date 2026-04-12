import { useState, useEffect, useRef } from "react";
import { BookOpen, Calendar, Users, Menu, Gift, HeartHandshake, ShoppingCart, ClipboardList, Trophy, FileText, Target, FlaskConical, Gamepad2, Smartphone, Link2, Bot, ShoppingBag, Wrench, Brain, Shield, Handshake, Users2, TrendingUp, Clock, MapPin, Trash2, PlayCircle, ExternalLink, User, Info, CalendarDays, Banknote, Pencil, Check } from "lucide-react";

const ICON_MAP = { BookOpen, Calendar, Users, Menu, Gift, HeartHandshake, ShoppingCart, ClipboardList, Trophy, FileText, Target, FlaskConical, Gamepad2, Smartphone, Link2, Bot, ShoppingBag, Wrench, Brain, Shield, Handshake, Users2, TrendingUp, Clock, MapPin, Trash2, PlayCircle, ExternalLink, User, Info, CalendarDays, Banknote, Pencil, Check };
function Ic({ name, size = 18, color, style }) {
  const Icon = ICON_MAP[name];
  return Icon ? <Icon size={size} color={color} strokeWidth={1.75} style={style} /> : null;
}

const initialData = {
  programInfo: {
    title: "5069 — Millard North Robotics",
    description: "The Millard North Robotics Competition Team provides an opportunity for students to work as a team to design, build, and program electro-mechanical robots for competition. Events are available at the local, state, and national level through VEX Robotics. Competing develops critical thinking, creativity, collaboration, and teamwork — skills essential for life after high school.\n\n💰 Annual Membership Fee: $300 (NON-REFUNDABLE). This covers team registration, 5 qualifying local tournaments, and required materials.\n\n🕐 Weekly Hours (Room 1211):\nMonday – Friday: 7–8am & 3:15–6pm | Saturdays: TBD\nStudents should dedicate a minimum of 7.5+ hours per week.\n\n📲 Team Communication: All communication is done via the Remind App. Download it!",
    contact: "Jeffrey Brady | jrbrady@mpsomaha.org | Robotics Team Coach | Room 1211",
  },
  studentExpectations: {
    program: [
      "All robot design, building, programming, and strategy must be your own work — consistent with your abilities and knowledge (RECF Rule G4).",
      "Be prepared to explain, defend, and demonstrate every aspect of your robot's design and code to referees, judges, and event staff.",
      "Dedicate a minimum of 7.5 hours per week to team work across practice sessions.",
      "All team communication goes through the Remind App. Download it and stay connected.",
      "Treat every team member with professionalism and respect at all times.",
    ],
    lab: [
      "Attend a minimum of 3 full practice sessions per week (Mon–Fri 3:15–6pm, Sat TBD).",
      "Keep the lab clean, organized, and professional at all times.",
      "Treat all equipment, tools, and parts with care — report damage immediately.",
      "Check in with Mr. Brady upon arrival and follow all lab safety procedures.",
      "Students are responsible for their own workspace and robot components.",
    ],
    tournaments: [
      "Attend all local competitions with your designated team.",
      "Schedule conflicts must be communicated to Mr. Brady at least 2 weeks in advance.",
      "Competition dress code: Team Robotics Gear, Business Casual Pants, Close-Toe Shoes.",
      "Behave respectfully and professionally with all participants, volunteers, and opponents (RECF Code of Conduct).",
      "Only Drive Team members may dispute a referee's ruling — coaches and parents may not intervene on the field.",
    ],
  },
  coreValues: [
    { value: "Student Ownership", icon: "Brain",         definition: "Your robot, your code, your strategy. Every decision and build is yours — mentors guide, students do." },
    { value: "Integrity",         icon: "Shield",        definition: "Compete fairly and honestly. Do what is right even when no one is watching, on and off the field." },
    { value: "Gracious Professionalism", icon: "Handshake", definition: "Win with humility, lose with dignity. Respect every team, volunteer, and referee you encounter." },
    { value: "Teamwork",          icon: "Users2",        definition: "Share ideas, listen to others, and contribute fully. Every role on a team matters equally." },
    { value: "Growth Mindset",    icon: "TrendingUp",    definition: "Failure is part of engineering. Learn from every match, test, and setback — then build better." },
    { value: "Reliability",       icon: "Clock",         definition: "Show up, follow through, and meet your commitments. Your team depends on you." },
  ],
  tournaments: [],
  events: [
    { id: 4, name: "Lawn Mower Clean Up", date: "May 9, 2026", time: "8am–6pm", location: "TBA" },
  ],
  meetingNotes: [
    { id: 1, date: "Every Monday @ 3:30pm — Room 1211", summary: "Mandatory Monday Meetings are held weekly in the MN Engineering Lab. These structured meetings cover team progress, upcoming events, old and new business. Attendance is required." },
  ],
  seasonGame: {
    name: "VEX V5RC Season 2025–2026",
    gameName: "Push Back",
    description: "Teams score Blocks into Goals, control Zones, and earn Autonomous Bonuses and Win Points on a 12x12 field. Two alliances of two robots compete in each match.",
    rulesLink: "https://content.vexrobotics.com/docs/25-26/v5rc-push-back/docs/Push-Back-2.2.pdf",
  },
  teams: [
    { id: 1, number: "5069D", name: "Inferno", members: "", years: "", logo: "" },
    { id: 2, number: "5069E", name: "Some Assembly Required", members: "", years: "", logo: "" },
    { id: 3, number: "5069G", name: "Ziptides", members: "", years: "", logo: "" },
    { id: 4, number: "5069J", name: "Joking Hazards", members: "", years: "", logo: "" },
    { id: 5, number: "5069S", name: "Supernova", members: "", years: "", logo: "" },
    { id: 6, number: "5069W", name: "Wake Up", members: "", years: "", logo: "" },
    { id: 7, number: "5069Y", name: "Havoc", members: "", years: "", logo: "" },
  ],
  resources: [
    { id: 1, label: "VEX Robotics Official Site", url: "https://www.vexrobotics.com" },
    { id: 2, label: "RobotEvents.com", url: "https://www.robotevents.com" },
    { id: 3, label: "VEX Forum", url: "https://www.vexforum.com" },
    { id: 4, label: "Game Manual – Push Back", url: "https://content.vexrobotics.com/docs/25-26/v5rc-push-back/docs/Push-Back-2.2.pdf" },
    { id: 5, label: "RECF Resources", url: "https://www.roboticseducation.org" },
    { id: 6, label: "Engineering Notebook Rubric", url: "https://v5rc-kb.recf.org/hc/en-us/articles/9680316173719-Judging-Resource-Engineering-Notebook-Rubric", tag: "📓 Judging" },
    { id: 7, label: "Team Interview Rubric", url: "https://v5rc-kb.recf.org/hc/en-us/articles/9680418515223-Judging-Resource-Team-Interview-Rubric", tag: "🎤 Judging" },
  ],
  mobileApps: [
    { id: 1, name: "Remind", emoji: "📲", appleId: "522765714", description: "All team communication. Download and sign up — code provided after team selection.", ios: "https://apps.apple.com/us/app/remind-school-communication/id522765714", android: "https://play.google.com/store/apps/details?id=com.remind101" },
    { id: 2, name: "VEX Via", emoji: "🏆", appleId: "430086367", description: "Live competition results, team rankings, and match schedules for all VEX events.", ios: "https://apps.apple.com/us/app/vex-via/id430086367", android: "https://play.google.com/store/apps/details?id=com.dwabtech.vexvia" },
    { id: 3, name: "V5RC Hub", emoji: "🤖", appleId: "1102054601", description: "Searchable game manual, scoring tools, and competition updates.", ios: "https://apps.apple.com/us/app/v5rc-hub/id1102054601", android: "https://play.google.com/store/apps/details?id=com.dwabtech.vexhub.vrc" },
  ],
  volunteer: {
    intro: "Parents, we need volunteers throughout the season! As this robotics program demands classroom hours for building and testing robots beyond what Mr. Brady can offer, there are several ways to show your support.",
    signupLink: "https://www.signupgenius.com",
    roles: ["After School Open Classroom Hours", "Saturday Open Classroom Hours", "Fundraiser Tournament Support", "Competition Event Help", "Equipment Transport"],
  },
  wishlist: {
    vex: [
      { id: 1, label: "VEX V5 Brain (spare)", url: "https://www.vexrobotics.com/v5-brain.html" },
      { id: 2, label: "V5 Smart Motors (4-pack)", url: "https://www.vexrobotics.com/smart-motors.html" },
      { id: 3, label: "Aluminum Structure Kit", url: "https://www.vexrobotics.com/structure.html" },
      { id: 4, label: "Pneumatics Kit", url: "https://www.vexrobotics.com/pneumatics.html" },
      { id: 5, label: "V5 Controller (spare)", url: "https://www.vexrobotics.com/276-4820.html" },
    ],
    nonVex: [
      { id: 1, label: "Laptop for Programming", url: "https://www.amazon.com" },
      { id: 2, label: "USB-C Hub / Docking Station", url: "https://www.amazon.com" },
      { id: 3, label: "Label Maker", url: "https://www.amazon.com" },
    ],
    lab: [
      { id: 1, label: "Charging Station", url: "https://www.amazon.com" },
      { id: 2, label: "Storage Bins / Parts Organizers", url: "https://www.amazon.com" },
      { id: 3, label: "Workbench Mat (anti-static)", url: "https://www.amazon.com" },
      { id: 4, label: "Dry Erase Whiteboard", url: "https://www.amazon.com" },
    ],
  },
  costInfo: {
    memberFee: "$300 per student (NON-REFUNDABLE)",
    teamReg: "$200 per team (5–7 VEX teams)",
    tournamentFee: "$100–$200 per team per tournament",
    robotCost: "$3,000–$4,500 in electronics and components per robot",
    sponsorNote: "Team sponsorships are welcome! Talk to parents and family friends about supporting the program.",
  },
  store: {
    label: "Mustang Robotics Team Store",
    url: "https://millard-north-mustang-mart.square.site/",
    description: "Grab official Mustang Robotics gear — shirts, hoodies, stickers, and more.",
  },
};

const C = {
  bg: "#1a1e2a",       // charcoal with blue tint
  surface: "#20253380", // slightly lighter charcoal
  card: "#222839",     // card background
  border: "#303a52",   // visible but subtle
  blue: "#0762af",     // official Millard North Viking Blue
  blueBright: "#2a92e0", // lighter interactive blue
  blueGlow: "#0762af25",
  silver: "#8a97a8",   // cool silver
  green: "#0ea070",    // used sparingly — 3 places only
  text: "#e4eaf4",     // soft off-white, easy on eyes
  muted: "#5e6e82",    // muted tertiary text
  accent: "#bcc9dc",   // silver-white accent
  navBg: "#161a26",    // slightly darker than bg for nav
};

const TEAM_COLORS = [
  "#e91e8c", // 5069D — Pink
  "#f5c518", // 5069E — Yellow
  "#e53935", // 5069G — Red
  "#ff6d00", // 5069J — Orange
  "#1a8de8", // 5069S — Blue
  "#9c27b0", // 5069W — Purple
  "#c0c8d4", // 5069Y — White/Silver
];

const BOTTOM_NAV = [
  { id: "resources", icon: "BookOpen", label: "Resources" },
  { id: "home", icon: null, label: "Home" },
  { id: "compete", icon: "Calendar", label: "Schedule" },
  { id: "teams", icon: "Users", label: "Teams" },
  { id: "more", icon: "Menu", label: "More" },
];

const MORE_ITEMS = [
  { id: "wishlist", icon: "Gift", label: "Wish List" },
  { id: "volunteer", icon: "HeartHandshake", label: "Volunteer" },
  { id: "store", icon: "ShoppingCart", label: "Team Store" },
];

const STORAGE_KEY = "mnr_hub_v2";

export default function RoboticsApp() {
  const [active, setActive] = useState("home");
  const [data, setData] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved ? { ...initialData, ...JSON.parse(saved) } : initialData;
    } catch { return initialData; }
  });
  const [editMode, setEditMode] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const [resetPending, setResetPending] = useState(false);

  const update = (key, val) => {
    setData(d => {
      const next = { ...d, [key]: val };
      try { localStorage.setItem(STORAGE_KEY, JSON.stringify(next)); } catch {}
      return next;
    });
  };

  const resetData = () => {
    try { localStorage.removeItem(STORAGE_KEY); } catch {}
    setData(initialData);
  };

  const navigate = (id) => { setActive(id); setMoreOpen(false); };

  const scrollRef = useRef(null);
  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = 0;
  }, [active]);

  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif", background: C.bg, minHeight: "100vh", color: C.text, display: "flex", flexDirection: "column", maxWidth: 720, margin: "0 auto" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Raleway:wght@400;600;700;800;900&family=DM+Sans:wght@300;400;500;600;700&family=IBM+Plex+Mono:wght@400;600&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; } body, button, input, textarea { font-family: 'DM Sans', sans-serif; }
        .card { transition: border-color 0.2s; }
        .edit-input { background: #1a2030; border: 1px solid ${C.blue}; color: ${C.text}; padding: 8px 12px; border-radius: 8px; font-family: inherit; font-size: 13px; width: 100%; }
        .edit-input:focus { outline: none; border-color: ${C.blueBright}; }
        .btn { cursor: pointer; border: none; border-radius: 8px; padding: 10px 18px; font-family: inherit; font-size: 13px; font-weight: 700; letter-spacing: 0.04em; transition: all 0.15s; }
        .btn-primary { background: ${C.blue}; color: white; }
        .btn-outline { background: transparent; color: ${C.silver}; border: 1px solid ${C.border}; }
        .btn-green { background: ${C.green}; color: white; }
        .chip { display: inline-flex; align-items: center; background: #1e2d45; color: ${C.blueBright}; border: 1px solid #2a4060; padding: 4px 12px; border-radius: 20px; font-size: 11px; font-family: 'IBM Plex Mono', monospace; letter-spacing: 0.06em; }
        a { text-decoration: none; color: inherit; }
        @keyframes fadeUp { from { opacity:0; transform: translateY(10px); } to { opacity:1; transform:translateY(0); } }
        .page { animation: fadeUp 0.22s ease; }
        @keyframes slideUp { from { transform: translateY(100%); } to { transform: translateY(0); } }
        .drawer { animation: slideUp 0.25s ease; }
        @keyframes pulse { 0%,100%{opacity:1}50%{opacity:0.4} }
      `}</style>

      {/* HEADER */}
      <div style={{ background: C.navBg, borderBottom: `1px solid ${C.border}`, padding: "14px 16px", display: "flex", alignItems: "center", gap: 12, position: "sticky", top: 0, zIndex: 50 }}>
        <img src="data:image/png;base64,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" alt="Mustang Robotics" style={{ width: 40, height: 40, objectFit: "contain", flexShrink: 0 }} />
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: 13, fontWeight: 800, letterSpacing: "0.06em", lineHeight: 1.2, fontFamily: "'Raleway', sans-serif" }}>MILLARD NORTH ROBOTICS</div>
          <div style={{ fontSize: 9, color: C.green, letterSpacing: "0.14em", fontFamily: "'IBM Plex Mono', monospace", marginTop: 1 }}>BUILDING AN IMPACTFUL FUTURE</div>
        </div>
        <button className="btn btn-outline" onClick={() => setEditMode(e => !e)} style={{ padding: "6px 12px", fontSize: 11, borderColor: editMode ? C.green : C.border, color: editMode ? C.green : C.silver }}>
          {editMode ? <><Check size={13} style={{marginRight:4}}/> Done</> : <><Pencil size={13} style={{marginRight:4}}/> Edit</>}
        </button>
        {editMode && !resetPending && (
          <button onClick={() => setResetPending(true)} style={{ background: "none", border: `1px solid #c0392b`, borderRadius: 8, color: "#e74c3c", padding: "6px 10px", fontSize: 11, cursor: "pointer", fontWeight: 700 }} title="Reset to defaults">↺</button>
        )}
        {editMode && resetPending && (
          <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
            <span style={{ fontSize: 10, color: "#e74c3c", whiteSpace: "nowrap" }}>Reset?</span>
            <button onClick={() => { resetData(); setResetPending(false); setEditMode(false); }} style={{ background: "#e74c3c", border: "none", borderRadius: 6, color: "#fff", fontSize: 11, padding: "4px 8px", cursor: "pointer", fontWeight: 700 }}>Yes</button>
            <button onClick={() => setResetPending(false)} style={{ background: C.border, border: "none", borderRadius: 6, color: C.text, fontSize: 11, padding: "4px 8px", cursor: "pointer" }}>No</button>
          </div>
        )}
      </div>

      {/* SCROLL AREA */}
      <div ref={scrollRef} style={{ flex: 1, overflowY: "auto", paddingBottom: 80 }}>
        {active === "home"      && <HomePage      data={data} update={update} editMode={editMode} />}
        {active === "compete"   && <SchedulePage  data={data} update={update} editMode={editMode} />}
        {active === "teams"     && <TeamsPage     data={data} update={update} editMode={editMode} />}
        {active === "resources" && <ResourcesPage data={data} update={update} editMode={editMode} />}
        {active === "volunteer" && <VolunteerPage data={data} update={update} editMode={editMode} />}
        {active === "wishlist"  && <WishlistPage  data={data} update={update} editMode={editMode} />}
        {active === "store"     && <StorePage     data={data} update={update} editMode={editMode} />}
      </div>

      {/* MORE DRAWER */}
      {moreOpen && (
        <>
          <div onClick={() => setMoreOpen(false)} style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.65)", zIndex: 90 }} />
          <div className="drawer" style={{ position: "fixed", bottom: 64, left: "50%", transform: "translateX(-50%)", width: "100%", maxWidth: 480, background: C.navBg, borderTop: `1px solid ${C.border}`, borderRadius: "20px 20px 0 0", zIndex: 95, padding: "20px 16px 12px" }}>
            <div style={{ width: 36, height: 4, background: C.border, borderRadius: 2, margin: "0 auto 20px" }} />
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
              {MORE_ITEMS.map(item => (
                <button key={item.id} onClick={() => navigate(item.id)} className="btn" style={{ background: C.card, border: `1px solid ${active === item.id ? C.blue : C.border}`, color: C.text, padding: "18px 12px", borderRadius: 14, display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
                  <Ic name={item.icon} size={26} color={C.blue}/>
                  <span style={{ fontSize: 12, fontWeight: 600, color: C.silver }}>{item.label}</span>
                </button>
              ))}
            </div>
          </div>
        </>
      )}

      {/* BOTTOM NAV */}
      <div style={{ position: "fixed", bottom: 0, left: "50%", transform: "translateX(-50%)", width: "100%", maxWidth: 480, background: C.navBg, borderTop: `1px solid ${C.border}`, display: "flex", height: 64, zIndex: 100 }}>
        {BOTTOM_NAV.map(n => {
          const isActive = n.id === "more" ? moreOpen : (active === n.id && !moreOpen);
          return (
            <button key={n.id} onClick={() => n.id === "more" ? setMoreOpen(o => !o) : navigate(n.id)}
              style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 3, background: "none", border: "none", cursor: "pointer", position: "relative" }}>
              {isActive && <div style={{ position: "absolute", top: 0, left: "20%", right: "20%", height: 2, background: C.blue, borderRadius: "0 0 3px 3px" }} />}
              {n.icon ? <Ic name={n.icon} size={20} color={isActive ? C.blueBright : C.muted} /> : <img src="data:image/png;base64,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" alt="Home" style={{ width: 24, height: 24, objectFit: "contain" }} />}
              <span style={{ fontSize: 11, fontWeight: isActive ? 700 : 400, color: isActive ? C.blueBright : C.muted, fontFamily: "'DM Sans', sans-serif" }}>{n.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

function SectionHeader({ icon, title }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 14 }}>
      <Ic name={icon} size={18} color={C.blue} />
      <h2 style={{ fontSize: 17, fontWeight: 800, color: C.text, letterSpacing: "0.03em", fontFamily: "'Raleway', sans-serif" }}>{title}</h2>
      <div style={{ flex: 1, height: 1, background: `linear-gradient(to right, ${C.blue}88, transparent)`, marginLeft: 4 }} />
    </div>
  );
}

function SubTabs({ tabs, active, onChange }) {
  return (
    <div style={{ display: "flex", gap: 5, marginBottom: 16, background: C.card, border: `1px solid ${C.border}`, borderRadius: 12, padding: 5 }}>
      {tabs.map(t => (
        <button key={t.id} onClick={() => onChange(t.id)} className="btn"
          style={{ flex: 1, padding: "9px 4px", fontSize: 11, fontWeight: active === t.id ? 700 : 500, background: active === t.id ? C.blue : "transparent", color: active === t.id ? "white" : C.silver, borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", gap: 4 }}>
          {t.icon && <Ic name={t.icon} size={13} color={active === t.id ? "white" : C.silver} />}
          {t.label}
        </button>
      ))}
    </div>
  );
}

function HomePage({ data, update, editMode }) {
  const [expTab, setExpTab] = useState("program");

  const expCategories = {
    program:     { label: "Program",        items: data.studentExpectations.program,     color: C.blue },
    lab:         { label: "In Lab",          items: data.studentExpectations.lab,         color: "#e67e22" },
    tournaments: { label: "Tournaments",     items: data.studentExpectations.tournaments,  color: "#9b59b6" },
  };
  const current = expCategories[expTab];
  return (
    <div className="page">
      {/* Hero */}
      <div style={{ background: `linear-gradient(160deg, #1e2a42 0%, #1a2035 60%, ${C.bg} 100%)`, padding: "28px 16px 24px", borderBottom: `1px solid ${C.border}`, position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: -30, right: -30, width: 200, height: 200, borderRadius: "50%", background: `radial-gradient(circle, ${C.blueGlow} 0%, transparent 70%)`, pointerEvents: "none" }} />
        <div style={{ position: "absolute", bottom: -10, left: -10, width: 120, height: 80, borderRadius: "50%", background: `radial-gradient(circle, #25b57422 0%, transparent 70%)`, pointerEvents: "none" }} />
        <div className="chip" style={{ marginBottom: 12 }}>2025–2026 SEASON</div>
        {editMode
          ? <input className="edit-input" value={data.programInfo.title} onChange={e => update("programInfo", { ...data.programInfo, title: e.target.value })} style={{ fontSize: 16, fontWeight: 800, marginBottom: 12 }} />
          : <div style={{ fontSize: 22, fontWeight: 900, color: C.text, lineHeight: 1.2, marginBottom: 12, fontFamily: "'Raleway', sans-serif" }}>{data.programInfo.title}</div>}
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <div style={{ width: 8, height: 8, borderRadius: "50%", background: C.green, animation: "pulse 2s infinite" }} />
          <span style={{ fontSize: 11, color: C.green, fontFamily: "'IBM Plex Mono', monospace", letterSpacing: "0.08em" }}>PROGRAM ACTIVE</span>
        </div>
      </div>

      <div style={{ padding: "16px 16px 0" }}>
        <SectionHeader icon="Info" title="About the Program" />
        <div className="card" style={{ background: C.card, border: `1px solid ${C.border}`, borderRadius: 14, padding: 20, marginBottom: 16 }}>
          {editMode
            ? <textarea className="edit-input" rows={8} value={data.programInfo.description} onChange={e => update("programInfo", { ...data.programInfo, description: e.target.value })} style={{ resize: "vertical" }} />
            : data.programInfo.description.split("\n\n").map((p, i) => (
                <div key={i} style={{ color: C.silver, fontSize: 13, lineHeight: 1.75, marginBottom: 12, whiteSpace: "pre-line" }}>{p}</div>
              ))}
          {editMode
            ? <input className="edit-input" style={{ marginTop: 8 }} value={data.programInfo.contact} onChange={e => update("programInfo", { ...data.programInfo, contact: e.target.value })} placeholder="Contact info" />
            : <div style={{ marginTop: 10, paddingTop: 12, borderTop: `1px solid ${C.border}`, fontSize: 11, color: C.muted, fontFamily: "'IBM Plex Mono', monospace" }}>📬 {data.programInfo.contact}</div>}
        </div>

        <SectionHeader icon="ClipboardList" title="Student Expectations" />
        <SubTabs
          tabs={[
            { id: "program",     label: "Program", icon: "Target" },
            { id: "lab",         label: "In Lab", icon: "FlaskConical" },
            { id: "tournaments", label: "Tournaments", icon: "Trophy" },
          ]}
          active={expTab}
          onChange={setExpTab}
        />
        <div className="card" style={{ background: C.card, border: `1px solid ${current.color}44`, borderRadius: 14, padding: 20, marginBottom: 16 }}>
          {current.items.map((exp, i, arr) => (
            <div key={i} style={{ display: "flex", gap: 12, alignItems: "flex-start", paddingBottom: i < arr.length - 1 ? 12 : 0, marginBottom: i < arr.length - 1 ? 12 : 0, borderBottom: i < arr.length - 1 ? `1px solid ${C.border}` : "none" }}>
              <div style={{ width: 24, height: 24, borderRadius: 7, background: current.color, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11, fontWeight: 800, color: "white", flexShrink: 0, marginTop: 1 }}>{i + 1}</div>
              <span style={{ fontSize: 14, color: C.silver, lineHeight: 1.75 }}>{exp}</span>
            </div>
          ))}
        </div>

        <SectionHeader icon="Target" title="Core Values" />
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginBottom: 20 }}>
          {data.coreValues.map((cv, i) => (
            <div key={i} style={{ background: C.card, border: `1px solid ${C.border}`, borderRadius: 14, padding: 16 }}>
              <div style={{ marginBottom: 10, display:"flex", alignItems:"center", justifyContent:"center" }}><Ic name={cv.icon} size={26} color={C.blue} /></div>
              <div style={{ fontWeight: 800, fontSize: 13, color: C.green, marginBottom: 5 }}>{cv.value}</div>
              <div style={{ fontSize: 11, color: C.muted, lineHeight: 1.55 }}>{cv.definition}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function AddTournamentForm({ onAdd }) {
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({ name: "", date: "", location: "", notes: "" });
  const set = k => e => setForm(f => ({ ...f, [k]: e.target.value }));
  const handleAdd = () => {
    if (!form.name.trim()) return;
    onAdd(form);
    setForm({ name: "", date: "", location: "", notes: "" });
    setOpen(false);
  };
  return (
    <div>
      {!open ? (
        <button className="btn btn-outline" style={{ width: "100%", marginTop: 4 }} onClick={() => setOpen(true)}>+ Add Tournament</button>
      ) : (
        <div className="card" style={{ background: C.card, border: `1px solid ${C.blue}66`, borderRadius: 14, padding: 16, display: "flex", flexDirection: "column", gap: 8 }}>
          <div style={{ fontWeight: 700, fontSize: 13, color: C.blue, marginBottom: 2 }}>New Tournament</div>
          <input className="edit-input" placeholder="Tournament name *" value={form.name} onChange={set("name")} />
          <div style={{ display: "flex", gap: 8 }}>
            <input className="edit-input" placeholder="Date" value={form.date} onChange={set("date")} style={{ flex: 1 }} />
            <input className="edit-input" placeholder="Location" value={form.location} onChange={set("location")} style={{ flex: 1 }} />
          </div>
          <input className="edit-input" placeholder="Notes (optional)" value={form.notes} onChange={set("notes")} />
          <div style={{ display: "flex", gap: 8, marginTop: 4 }}>
            <button className="btn btn-primary" style={{ flex: 1, padding: "10px 0", fontSize: 13 }} onClick={handleAdd}>Save</button>
            <button className="btn btn-outline" style={{ flex: 1, padding: "10px 0", fontSize: 13 }} onClick={() => setOpen(false)}>Cancel</button>
          </div>
        </div>
      )}
    </div>
  );
}

function AddEventForm({ onAdd }) {
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({ name: "", date: "", time: "", location: "" });
  const set = k => e => setForm(f => ({ ...f, [k]: e.target.value }));
  const handleAdd = () => {
    if (!form.name.trim()) return;
    onAdd(form);
    setForm({ name: "", date: "", time: "", location: "" });
    setOpen(false);
  };
  return (
    <div>
      {!open ? (
        <button className="btn btn-outline" style={{ width: "100%", marginTop: 4 }} onClick={() => setOpen(true)}>+ Add Event</button>
      ) : (
        <div className="card" style={{ background: C.card, border: `1px solid ${C.blue}66`, borderRadius: 14, padding: 16, display: "flex", flexDirection: "column", gap: 8 }}>
          <div style={{ fontWeight: 700, fontSize: 13, color: C.blue, marginBottom: 2 }}>New Event</div>
          <input className="edit-input" placeholder="Event name *" value={form.name} onChange={set("name")} />
          <input className="edit-input" placeholder="Date (e.g. May 9, 2026)" value={form.date} onChange={set("date")} />
          <div style={{ display: "flex", gap: 8 }}>
            <input className="edit-input" placeholder="Time" value={form.time} onChange={set("time")} style={{ flex: 1 }} />
            <input className="edit-input" placeholder="Location" value={form.location} onChange={set("location")} style={{ flex: 1 }} />
          </div>
          <div style={{ display: "flex", gap: 8, marginTop: 4 }}>
            <button className="btn btn-primary" style={{ flex: 1, padding: "10px 0", fontSize: 13 }} onClick={handleAdd}>Save</button>
            <button className="btn btn-outline" style={{ flex: 1, padding: "10px 0", fontSize: 13 }} onClick={() => setOpen(false)}>Cancel</button>
          </div>
        </div>
      )}
    </div>
  );
}

function SchedulePage({ data, update, editMode }) {
  const [tab, setTab] = useState("tournaments");
  const [pendingDelete, setPendingDelete] = useState(null);
  return (
    <div className="page" style={{ padding: "16px 16px 0" }}>
      <SectionHeader icon="Trophy" title="Competitions & Events" />
      <SubTabs tabs={[{ id: "tournaments", label: "Tournaments" }, { id: "events", label: "Events" }, { id: "calendar", label: "Calendar" }]} active={tab} onChange={setTab} />

      {tab === "tournaments" && (
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          {data.tournaments.length === 0 && (
            <div style={{ textAlign: "center", padding: "32px 16px", color: C.muted, fontSize: 13 }}>
              <div style={{ marginBottom: 10 }}><Ic name="Trophy" size={32} color={C.muted} /></div>
              <div>No tournaments added yet.</div>
              <div style={{ fontSize: 11, marginTop: 4 }}>Tap the button below to add one.</div>
            </div>
          )}
          {data.tournaments.map((t, i) => {
            const delKey = `t-${t.id}`;
            return (
            <div key={t.id} className="card" style={{ background: C.card, border: `1px solid ${C.border}`, borderRadius: 14, overflow: "hidden" }}>
              <div style={{ background: `linear-gradient(135deg, #2a3550aa, transparent)`, padding: "10px 16px", borderBottom: `1px solid ${C.border}`, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                {editMode
                  ? <input className="edit-input" value={t.date} onChange={e => { const a = [...data.tournaments]; a[i].date = e.target.value; update("tournaments", a); }} placeholder="Date" style={{ flex: 1, marginRight: 8 }} />
                  : <span className="chip">{t.date}</span>}
                {editMode
                  ? <input className="edit-input" value={t.location} onChange={e => { const a = [...data.tournaments]; a[i].location = e.target.value; update("tournaments", a); }} placeholder="Location" style={{ flex: 1 }} />
                  : <span style={{ fontSize: 11, color: C.muted, display:"flex", alignItems:"center", gap:3 }}><Ic name="MapPin" size={11} color={C.muted}/>{t.location}</span>}
              </div>
              <div style={{ padding: "12px 16px", display: "flex", gap: 10, alignItems: "flex-start" }}>
                <div style={{ flex: 1 }}>
                  {editMode ? (
                    <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                      <input className="edit-input" value={t.name} onChange={e => { const a = [...data.tournaments]; a[i].name = e.target.value; update("tournaments", a); }} placeholder="Tournament name" />
                      <input className="edit-input" value={t.notes} onChange={e => { const a = [...data.tournaments]; a[i].notes = e.target.value; update("tournaments", a); }} placeholder="Notes (optional)" />
                    </div>
                  ) : (
                    <>
                      <div style={{ fontWeight: 700, fontSize: 15, marginBottom: 5, color: C.text, fontFamily: "'Raleway', sans-serif" }}>{t.name}</div>
                      {t.notes && <div style={{ fontSize: 12, color: C.muted, display:"flex", alignItems:"center", gap:4 }}><Ic name="Info" size={12} color={C.muted}/>{t.notes}</div>}
                    </>
                  )}
                </div>
                {editMode && (
                  pendingDelete === delKey ? (
                    <div style={{ display: "flex", gap: 6, alignItems: "center", flexShrink: 0 }}>
                      <span style={{ fontSize: 11, color: "#e05555" }}>Delete?</span>
                      <button onClick={() => { update("tournaments", data.tournaments.filter((_, j) => j !== i)); setPendingDelete(null); }}
                        style={{ background: "#e05555", border: "none", borderRadius: 6, color: "#fff", fontSize: 11, padding: "4px 8px", cursor: "pointer", fontWeight: 700 }}>Yes</button>
                      <button onClick={() => setPendingDelete(null)}
                        style={{ background: C.border, border: "none", borderRadius: 6, color: C.text, fontSize: 11, padding: "4px 8px", cursor: "pointer" }}>No</button>
                    </div>
                  ) : (
                    <button onClick={() => setPendingDelete(delKey)}
                      style={{ background: "none", border: "none", cursor: "pointer", color: "#e05555", padding: "2px 4px", flexShrink: 0, lineHeight: 1 }} title="Delete"><Trash2 size={16}/></button>
                  )
                )}
              </div>
            </div>
            );
          })}
          {editMode && <AddTournamentForm onAdd={entry => update("tournaments", [...data.tournaments, { id: Date.now(), ...entry }])} />}
        </div>
      )}

      {tab === "events" && (
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          {data.events.length === 0 && (
            <div style={{ textAlign: "center", padding: "32px 16px", color: C.muted, fontSize: 13 }}>
              <div style={{ marginBottom: 10 }}><Ic name="CalendarDays" size={32} color={C.muted} /></div>
              <div>No events added yet.</div>
              <div style={{ fontSize: 11, marginTop: 4 }}>Tap the button below to add one.</div>
            </div>
          )}
          {data.events.map((ev, i) => {
            const delKey = `e-${ev.id}`;
            return (
            <div key={ev.id} className="card" style={{ background: C.card, border: `1px solid ${C.border}`, borderRadius: 14, padding: "14px 16px", display: "flex", gap: 14, alignItems: "center" }}>
              <div style={{ width: 46, height: 46, borderRadius: 13, background: `linear-gradient(135deg, ${C.blue}, #0a3a6a)`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}><Ic name="CalendarDays" size={22} color="white"/></div>
              {editMode ? (
                <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 6 }}>
                  <input className="edit-input" value={ev.name} onChange={e => { const a = [...data.events]; a[i].name = e.target.value; update("events", a); }} placeholder="Event name" />
                  <div style={{ display: "flex", gap: 6 }}>
                    <input className="edit-input" value={ev.date} onChange={e => { const a = [...data.events]; a[i].date = e.target.value; update("events", a); }} placeholder="Date" />
                    <input className="edit-input" value={ev.time} onChange={e => { const a = [...data.events]; a[i].time = e.target.value; update("events", a); }} placeholder="Time" />
                  </div>
                  <input className="edit-input" value={ev.location} onChange={e => { const a = [...data.events]; a[i].location = e.target.value; update("events", a); }} placeholder="Location" />
                </div>
              ) : (
                <div style={{ flex: 1 }}>
                  <div style={{ fontWeight: 700, fontSize: 14, marginBottom: 4 }}>{ev.name}</div>
                  <div style={{ fontSize: 12, color: C.silver, display:"flex", alignItems:"center", gap:4 }}><Ic name="Clock" size={12} color={C.silver}/>{ev.time}&nbsp;·&nbsp;<Ic name="MapPin" size={12} color={C.silver}/>{ev.location}</div>
                  <div style={{ fontSize: 11, color: C.muted, marginTop: 2 }}>{ev.date}</div>
                </div>
              )}
              {editMode && (
                pendingDelete === delKey ? (
                  <div style={{ display: "flex", flexDirection: "column", gap: 4, alignItems: "center", flexShrink: 0 }}>
                    <span style={{ fontSize: 11, color: "#e05555", whiteSpace: "nowrap" }}>Delete?</span>
                    <div style={{ display: "flex", gap: 4 }}>
                      <button onClick={() => { update("events", data.events.filter((_, j) => j !== i)); setPendingDelete(null); }}
                        style={{ background: "#e05555", border: "none", borderRadius: 6, color: "#fff", fontSize: 11, padding: "4px 8px", cursor: "pointer", fontWeight: 700 }}>Yes</button>
                      <button onClick={() => setPendingDelete(null)}
                        style={{ background: C.border, border: "none", borderRadius: 6, color: C.text, fontSize: 11, padding: "4px 8px", cursor: "pointer" }}>No</button>
                    </div>
                  </div>
                ) : (
                  <button onClick={() => setPendingDelete(delKey)}
                    style={{ background: "none", border: "none", cursor: "pointer", color: "#e05555", padding: "2px 4px", flexShrink: 0, lineHeight: 1 }} title="Delete"><Trash2 size={16}/></button>
                )
              )}
            </div>
            );
          })}
          {editMode && <AddEventForm onAdd={entry => update("events", [...data.events, { id: Date.now(), ...entry }])} />}
        </div>
      )}

      {tab === "calendar" && (
        <div style={{ background: C.card, border: `1px solid ${C.border}`, borderRadius: 14, overflow: "hidden" }}>
          <div style={{ padding: "12px 16px", borderBottom: `1px solid ${C.border}`, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <span style={{ fontSize: 12, fontWeight: 700, color: C.silver, letterSpacing: "0.06em" }}>5069 VIRTUAL LAB</span>
            <a href="https://calendar.google.com/calendar/embed?src=c_classrooma916febd%40group.calendar.google.com&ctz=America%2FChicago" target="_blank" rel="noreferrer" style={{ fontSize: 11, color: C.blue, fontWeight: 700 }}>Open in Google Calendar ↗</a>
          </div>
          <iframe src="https://calendar.google.com/calendar/embed?src=c_classrooma916febd%40group.calendar.google.com&ctz=America%2FChicago&bgcolor=%230c1422&color=%230762af&showTitle=0&showNav=1&showPrint=0&showTabs=0&showCalendars=0"
            style={{ border: 0, display: "block", width: "100%", height: 460 }} frameBorder="0" scrolling="no" title="Mustang Robotics Calendar" />
          <div style={{ padding: "10px 16px", borderTop: `1px solid ${C.border}`, fontSize: 11, color: C.muted, textAlign: "center" }}>
            Calendar may not display in preview mode. Tap "Open in Google Calendar" above, or it will render fully on the live site.
          </div>
        </div>
      )}
    </div>
  );
}

function TeamsPage({ data, update, editMode }) {
  const [tab, setTab] = useState("teams");
  return (
    <div className="page" style={{ padding: "16px 16px 0" }}>
      <SectionHeader icon="Users" title="Teams & Notes" />
      <SubTabs tabs={[{ id: "teams", label: "Teams", icon: "Users" }, { id: "notes", label: "Notes", icon: "FileText" }]} active={tab} onChange={setTab} />

      {tab === "notes" && (
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          {data.meetingNotes.map((n, i) => (
            <div key={n.id} className="card" style={{ background: C.card, border: `1px solid ${C.border}`, borderRadius: 14, overflow: "hidden" }}>
              <div style={{ background: "#0ea07018", borderBottom: `1px solid ${C.border}`, padding: "10px 16px" }}>
                {editMode ? <input className="edit-input" value={n.date} onChange={e => { const a = [...data.meetingNotes]; a[i].date = e.target.value; update("meetingNotes", a); }} /> :
                  <span style={{ fontSize: 11, fontWeight: 700, color: C.green, fontFamily: "'IBM Plex Mono', monospace" }}>{n.date}</span>}
              </div>
              <div style={{ padding: "14px 16px" }}>
                {editMode ? <textarea className="edit-input" rows={4} value={n.summary} onChange={e => { const a = [...data.meetingNotes]; a[i].summary = e.target.value; update("meetingNotes", a); }} style={{ resize: "vertical" }} /> :
                  <div style={{ fontSize: 14, color: C.silver, lineHeight: 1.8 }}>{n.summary}</div>}
              </div>
            </div>
          ))}
          {editMode && <button className="btn btn-outline" onClick={() => update("meetingNotes", [{ id: Date.now(), date: "New Date", summary: "Summary..." }, ...data.meetingNotes])}>+ Add Notes</button>}
        </div>
      )}

      {tab === "teams" && (
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          {data.teams.map((team, i) => (
            <div key={team.id} className="card" style={{ background: C.card, border: `1px solid ${C.border}`, borderRadius: 16, overflow: "hidden" }}>
              <div style={{ background: `linear-gradient(135deg, ${TEAM_COLORS[i]}18, ${C.card})`, borderBottom: `1px solid ${C.border}`, padding: "14px 16px", display: "flex", alignItems: "center", gap: 12 }}>
                <div style={{ width: 54, height: 54, borderRadius: 13, background: team.logo ? "transparent" : `linear-gradient(135deg, ${TEAM_COLORS[i]}33, ${TEAM_COLORS[i]}11)`, border: `2px solid ${TEAM_COLORS[i]}44`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, overflow: "hidden" }}>
                  {team.logo ? <img src={team.logo} alt={team.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} /> : <Ic name="Bot" size={24} color={C.blue}/>}
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 11, color: TEAM_COLORS[i], fontWeight: 600, marginBottom: 2 }}>{team.number}</div>
                  <div style={{ fontWeight: 800, fontSize: 16, color: C.text, fontFamily: "'Raleway', sans-serif" }}>{team.name}</div>
                </div>
                {team.years && <div style={{ fontSize: 10, color: C.muted, fontFamily: "'IBM Plex Mono', monospace" }}>{team.years} YR{team.years !== "1" ? "S" : ""}</div>}
              </div>
              <div style={{ padding: "12px 16px" }}>
                {editMode ? (
                  <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                    <div style={{ display: "flex", gap: 8 }}>
                      <input className="edit-input" value={team.number} onChange={e => { const a = [...data.teams]; a[i].number = e.target.value; update("teams", a); }} placeholder="Team #" style={{ width: 90 }} />
                      <input className="edit-input" value={team.name} onChange={e => { const a = [...data.teams]; a[i].name = e.target.value; update("teams", a); }} placeholder="Team name" />
                    </div>
                    <input className="edit-input" value={team.years} onChange={e => { const a = [...data.teams]; a[i].years = e.target.value; update("teams", a); }} placeholder="Years as a team" />
                    <textarea className="edit-input" rows={2} value={team.members} onChange={e => { const a = [...data.teams]; a[i].members = e.target.value; update("teams", a); }} placeholder="Team members" style={{ resize: "vertical" }} />
                    <input className="edit-input" value={team.logo} onChange={e => { const a = [...data.teams]; a[i].logo = e.target.value; update("teams", a); }} placeholder="Logo URL" />
                  </div>
                ) : (
                  team.members
                    ? <div style={{ fontSize: 13, color: C.silver, lineHeight: 1.7, display:"flex", alignItems:"center", gap:4 }}><Ic name="User" size={13} color={C.silver}/>{team.members}</div>
                    : <div style={{ fontSize: 12, color: C.muted, fontStyle: "italic" }}>Members TBA — check back soon</div>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function AppsList({ apps }) {
  const [icons, setIcons] = useState({});

  useEffect(() => {
    const ids = apps.map(a => a.appleId).join(",");
    fetch(`https://api.allorigins.win/get?url=${encodeURIComponent(`https://itunes.apple.com/lookup?id=${ids}`)}`)
      .then(r => r.json())
      .then(data => {
        const parsed = JSON.parse(data.contents);
        const map = {};
        parsed.results.forEach(r => { map[String(r.trackId)] = r.artworkUrl100; });
        setIcons(map);
      })
      .catch(() => {});
  }, []);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
      {apps.map(app => {
        const iconUrl = icons[app.appleId];
        return (
          <div key={app.id} className="card" style={{ background: C.card, border: `1px solid ${C.border}`, borderRadius: 14, padding: 20 }}>
            <div style={{ display: "flex", gap: 14, alignItems: "center", marginBottom: 12 }}>
              <div style={{ width: 54, height: 54, borderRadius: 14, overflow: "hidden", flexShrink: 0, background: `${C.blue}22`, display: "flex", alignItems: "center", justifyContent: "center" }}>
                {iconUrl
                  ? <img src={iconUrl} alt={app.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                  : <span style={{ fontSize: 26 }}>{app.emoji}</span>}
              </div>
              <div style={{ fontWeight: 800, fontSize: 15, fontFamily: "'Raleway', sans-serif" }}>{app.name}</div>
            </div>
            <div style={{ fontSize: 13, color: C.silver, lineHeight: 1.7, marginBottom: 14 }}>{app.description}</div>
            <div style={{ display: "flex", gap: 8 }}>
              <a href={app.ios} target="_blank" rel="noreferrer" style={{ flex: 1 }}>
                <button className="btn btn-outline" style={{ width: "100%", fontSize: 12 }}>🍎 App Store</button>
              </a>
              <a href={app.android} target="_blank" rel="noreferrer" style={{ flex: 1 }}>
                <button className="btn btn-outline" style={{ width: "100%", fontSize: 12 }}><Ic name="PlayCircle" size={13} style={{marginRight:4}}/>Google Play</button>
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
}

function ResourcesPage({ data, update, editMode }) {
  const [tab, setTab] = useState("season");
  return (
    <div className="page" style={{ padding: "16px 16px 0" }}>
      <SectionHeader icon="BookOpen" title="Resources & Info" />
      <SubTabs tabs={[{ id: "season", label: "Season", icon: "Gamepad2" }, { id: "apps", label: "Apps", icon: "Smartphone" }, { id: "web", label: "Links", icon: "Link2" }]} active={tab} onChange={setTab} />

      {tab === "season" && (
        <div className="card" style={{ background: C.card, border: `1px solid ${C.border}`, borderRadius: 14, overflow: "hidden" }}>
          <div style={{ background: `linear-gradient(160deg, #0a1e3a, ${C.card})`, padding: "24px 20px", borderBottom: `1px solid ${C.border}` }}>
            <div className="chip" style={{ marginBottom: 12 }}>{data.seasonGame.name}</div>
            <div style={{ fontSize: 30, fontWeight: 900, color: C.text, fontFamily: "'Raleway', sans-serif" }}>{data.seasonGame.gameName}</div>
          </div>
          <div style={{ padding: "16px 20px" }}>
            {editMode ? (
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                <input className="edit-input" value={data.seasonGame.name} onChange={e => update("seasonGame", { ...data.seasonGame, name: e.target.value })} />
                <input className="edit-input" value={data.seasonGame.gameName} onChange={e => update("seasonGame", { ...data.seasonGame, gameName: e.target.value })} />
                <textarea className="edit-input" rows={3} value={data.seasonGame.description} onChange={e => update("seasonGame", { ...data.seasonGame, description: e.target.value })} style={{ resize: "vertical" }} />
                <input className="edit-input" value={data.seasonGame.rulesLink} onChange={e => update("seasonGame", { ...data.seasonGame, rulesLink: e.target.value })} />
              </div>
            ) : (
              <>
                <div style={{ fontSize: 14, color: C.silver, lineHeight: 1.8, letterSpacing: '0.01em', marginBottom: 20 }}>{data.seasonGame.description}</div>
                <a href={data.seasonGame.rulesLink} target="_blank" rel="noreferrer">
                  <button className="btn btn-primary" style={{ width: "100%", padding: 14 }}>📖 View Official Game Manual →</button>
                </a>
                <a href="https://www.youtube.com/watch?v=ocmONiVun9M" target="_blank" rel="noreferrer" style={{ marginTop: 10, display: "block" }}>
                  <button className="btn btn-outline" style={{ width: "100%", padding: 14, display: "flex", alignItems: "center", justifyContent: "center", gap: 8 }}>
                    <Ic name="PlayCircle" size={16} color={C.blue}/>
                    <span>Watch Push Back Game Reveal →</span>
                  </button>
                </a>
              </>
            )}
          </div>
        </div>
      )}

      {tab === "apps" && <AppsList apps={data.mobileApps} />}

      {tab === "web" && (
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          {data.resources.map((r, i) => (
            <a key={r.id} href={r.url} target="_blank" rel="noreferrer">
              <div className="card" style={{ background: C.card, border: `1px solid ${C.border}`, borderRadius: 12, padding: "14px 16px", display: "flex", alignItems: "center", gap: 12 }}>
                <div style={{ width: 38, height: 38, borderRadius: 10, background: `${C.blue}22`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}><Ic name="ExternalLink" size={16} color={C.blue}/></div>
                {editMode ? (
                  <div style={{ display: "flex", gap: 8, flex: 1 }} onClick={e => e.preventDefault()}>
                    <input className="edit-input" value={r.label} onChange={e => { const a = [...data.resources]; a[i].label = e.target.value; update("resources", a); }} style={{ flex: 1 }} />
                    <input className="edit-input" value={r.url} onChange={e => { const a = [...data.resources]; a[i].url = e.target.value; update("resources", a); }} style={{ flex: 2 }} />
                  </div>
                ) : (
                  <>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontWeight: 600, fontSize: 13, color: C.text }}>{r.label}</div>
                      <div style={{ fontSize: 10, color: C.muted, marginTop: 2, fontFamily: "'IBM Plex Mono', monospace" }}>{r.url.replace("https://", "").split("/")[0]}</div>
                    </div>
                    {r.tag && <span className="chip" style={{ fontSize: 10, padding: "2px 8px", flexShrink: 0 }}>{r.tag}</span>}
                    <span style={{ color: C.blue, fontSize: 16 }}>↗</span>
                  </>
                )}
              </div>
            </a>
          ))}
          {editMode && <button className="btn btn-outline" onClick={() => update("resources", [...data.resources, { id: Date.now(), label: "New Link", url: "https://" }])}>+ Add Link</button>}
        </div>
      )}
    </div>
  );
}

function NotesPage({ data, update, editMode }) {
  return (
    <div className="page" style={{ padding: "16px 16px 0" }}>
      <SectionHeader icon="FileText" title="Meeting Notes" />
      <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        {data.meetingNotes.map((n, i) => (
          <div key={n.id} className="card" style={{ background: C.card, border: `1px solid ${C.border}`, borderRadius: 14, overflow: "hidden" }}>
            <div style={{ background: "#0ea07018", borderBottom: `1px solid ${C.border}`, padding: "10px 16px" }}>
              {editMode ? <input className="edit-input" value={n.date} onChange={e => { const a = [...data.meetingNotes]; a[i].date = e.target.value; update("meetingNotes", a); }} /> :
                <span style={{ fontSize: 11, fontWeight: 700, color: C.green, fontFamily: "'IBM Plex Mono', monospace" }}>{n.date}</span>}
            </div>
            <div style={{ padding: "14px 16px" }}>
              {editMode ? <textarea className="edit-input" rows={4} value={n.summary} onChange={e => { const a = [...data.meetingNotes]; a[i].summary = e.target.value; update("meetingNotes", a); }} style={{ resize: "vertical" }} /> :
                <div style={{ fontSize: 14, color: C.silver, lineHeight: 1.8, letterSpacing: '0.01em' }}>{n.summary}</div>}
            </div>
          </div>
        ))}
        {editMode && <button className="btn btn-outline" onClick={() => update("meetingNotes", [{ id: Date.now(), date: "New Date", summary: "Summary..." }, ...data.meetingNotes])}>+ Add Notes</button>}
      </div>
    </div>
  );
}

function VolunteerPage({ data, update, editMode }) {
  return (
    <div className="page" style={{ padding: "16px 16px 0" }}>
      <SectionHeader icon="HeartHandshake" title="Volunteer" />
      <div className="card" style={{ background: C.card, border: `1px solid ${C.border}`, borderRadius: 14, padding: 20 }}>
        {editMode ? (
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            <textarea className="edit-input" rows={4} value={data.volunteer.intro} onChange={e => update("volunteer", { ...data.volunteer, intro: e.target.value })} style={{ resize: "vertical" }} />
            <input className="edit-input" value={data.volunteer.signupLink} onChange={e => update("volunteer", { ...data.volunteer, signupLink: e.target.value })} placeholder="Sign-up link" />
            <textarea className="edit-input" rows={5} value={data.volunteer.roles.join("\n")} onChange={e => update("volunteer", { ...data.volunteer, roles: e.target.value.split("\n") })} style={{ resize: "vertical" }} />
          </div>
        ) : (
          <>
            <div style={{ fontSize: 14, color: C.silver, lineHeight: 1.8, letterSpacing: '0.01em', marginBottom: 20 }}>{data.volunteer.intro}</div>
            <div style={{ fontSize: 11, fontWeight: 700, color: C.accent, letterSpacing: "0.08em", marginBottom: 12 }}>VOLUNTEER OPPORTUNITIES</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 8, marginBottom: 22 }}>
              {data.volunteer.roles.map((r, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: 10, padding: "10px 14px", background: "#0ea07015", border: `1px solid #25b57430`, borderRadius: 10 }}>
                  <span style={{ color: C.green }}>✓</span>
                  <span style={{ fontSize: 14, color: C.silver }}>{r}</span>
                </div>
              ))}
            </div>
            <a href={data.volunteer.signupLink} target="_blank" rel="noreferrer">
              <button className="btn btn-green" style={{ width: "100%", padding: 14 }}><Ic name="HeartHandshake" size={15} style={{marginRight:6}}/>Sign Up to Volunteer →</button>
            </a>
          </>
        )}
      </div>
    </div>
  );
}

function WishlistPage({ data, update, editMode }) {
  const [tab, setTab] = useState("vex");
  const categories = {
    vex:    { label: "VEX Products",   icon: "Bot", key: "vex",    color: C.blue },
    nonVex: { label: "Non-VEX",        icon: "ShoppingBag", key: "nonVex", color: "#9b59b6" },
    lab:    { label: "Lab Items",      icon: "Wrench", key: "lab",    color: "#e67e22" },
  };
  const items = data.wishlist[tab] || [];

  const updateItems = (key, newItems) => update("wishlist", { ...data.wishlist, [key]: newItems });

  return (
    <div className="page" style={{ padding: "16px 16px 0" }}>
      <SectionHeader icon="Gift" title="Wish List & Donations" />

      {/* Cost breakdown */}
      <div className="card" style={{ background: C.card, border: `1px solid ${C.border}`, borderRadius: 14, padding: 20, marginBottom: 14 }}>
        <div style={{ fontSize: 11, fontWeight: 700, color: C.silver, letterSpacing: "0.08em", marginBottom: 14, display:"flex", alignItems:"center", gap:5 }}><Ic name="Banknote" size={14} color={C.silver}/>PROGRAM COST BREAKDOWN</div>
        {[
          { label: "Student Membership Fee", value: data.costInfo.memberFee },
          { label: "Team Registration", value: data.costInfo.teamReg },
          { label: "Tournament Entry Fee", value: data.costInfo.tournamentFee },
          { label: "Robot Electronics & Components", value: data.costInfo.robotCost },
        ].map((c, i, arr) => (
          <div key={i} style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 10, padding: "10px 0", borderBottom: i < arr.length - 1 ? `1px solid ${C.border}` : "none" }}>
            <span style={{ fontSize: 12, color: C.silver }}>{c.label}</span>
            <span style={{ fontSize: 12, fontWeight: 700, color: C.text, fontFamily: "'IBM Plex Mono', monospace", textAlign: "right" }}>{c.value}</span>
          </div>
        ))}
        <div style={{ marginTop: 14, padding: 12, background: "#0ea07015", border: `1px solid #25b57430`, borderRadius: 10, fontSize: 12, color: C.green, display:"flex", alignItems:"center", gap:6 }}><Ic name="Handshake" size={14} color={C.green}/>{data.costInfo.sponsorNote}</div>
      </div>

      <div style={{ fontSize: 13, color: C.silver, marginBottom: 14, lineHeight: 1.6 }}>Help support the Mustang Robotics Program! Tap any item to view or purchase it for the team.</div>

      {/* Category sub-tabs */}
      <SubTabs
        tabs={[
          { id: "vex",    label: "VEX Products", icon: "Bot" },
          { id: "nonVex", label: "Non-VEX", icon: "ShoppingBag" },
          { id: "lab",    label: "Lab Items", icon: "Wrench" },
        ]}
        active={tab}
        onChange={setTab}
      />

      {/* Items list */}
      <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        {items.map((item, i) => (
          <div key={item.id} className="card" style={{ background: C.card, border: `1px solid ${C.border}`, borderRadius: 12, padding: "14px 16px", display: "flex", alignItems: "center", gap: 12 }}>
            {editMode ? (
              <div style={{ display: "flex", gap: 8, flex: 1 }}>
                <input className="edit-input" value={item.label} onChange={e => { const a = [...items]; a[i].label = e.target.value; updateItems(tab, a); }} style={{ flex: 1 }} />
                <input className="edit-input" value={item.url} onChange={e => { const a = [...items]; a[i].url = e.target.value; updateItems(tab, a); }} style={{ flex: 2 }} />
              </div>
            ) : (
              <>
                <div style={{ width: 38, height: 38, borderRadius: 10, background: `${categories[tab].color}22`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}><Ic name={categories[tab].icon} size={18} color={categories[tab].color}/></div>
                <a href={item.url} target="_blank" rel="noreferrer" style={{ flex: 1, fontSize: 13, fontWeight: 600, color: C.text }}>{item.label}</a>
                <a href={item.url} target="_blank" rel="noreferrer">
                  <button className="btn btn-primary" style={{ padding: "7px 14px", fontSize: 12 }}>View →</button>
                </a>
              </>
            )}
          </div>
        ))}
        {editMode && (
          <button className="btn btn-outline" onClick={() => updateItems(tab, [...items, { id: Date.now(), label: "New Item", url: "https://" }])}>
            + Add Item
          </button>
        )}
      </div>
    </div>
  );
}

function StorePage({ data, update, editMode }) {
  return (
    <div className="page" style={{ padding: "16px 16px 0" }}>
      <SectionHeader icon="ShoppingCart" title="Team Store" />
      <div className="card" style={{ background: C.card, border: `1px solid ${C.border}`, borderRadius: 16, overflow: "hidden" }}>
        <div style={{ background: `linear-gradient(160deg, #0a1e3a, ${C.card})`, padding: "44px 24px", textAlign: "center" }}>
          <div style={{ marginBottom: 18 }}><Ic name="ShoppingCart" size={56} color={C.blue}/></div>
          {editMode ? (
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              <input className="edit-input" value={data.store.label} onChange={e => update("store", { ...data.store, label: e.target.value })} />
              <textarea className="edit-input" rows={2} value={data.store.description} onChange={e => update("store", { ...data.store, description: e.target.value })} style={{ resize: "vertical" }} />
              <input className="edit-input" value={data.store.url} onChange={e => update("store", { ...data.store, url: e.target.value })} />
            </div>
          ) : (
            <>
              <div style={{ fontSize: 20, fontWeight: 800, color: C.text, marginBottom: 10, fontFamily: "'Raleway', sans-serif" }}>{data.store.label}</div>
              <div style={{ fontSize: 13, color: C.silver, marginBottom: 28, lineHeight: 1.6, maxWidth: 300, margin: "0 auto 28px" }}>{data.store.description}</div>
              <a href={data.store.url} target="_blank" rel="noreferrer">
                <button className="btn btn-primary" style={{ padding: "14px 32px", fontSize: 14 }}><Ic name="ShoppingCart" size={15} style={{marginRight:6}}/>Visit Team Store →</button>
              </a>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
