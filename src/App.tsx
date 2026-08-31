import { useState, ReactNode } from "react";

// ─── Icons ────────────────────────────────────────────────────────────────────
const IconHome = ({ active }: { active?: boolean }) => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={active ? "#2F844B" : "#8A9088"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>
  </svg>
);
const IconCalendar = ({ active }: { active?: boolean }) => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={active ? "#2F844B" : "#8A9088"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
  </svg>
);
const IconBell = ({ active }: { active?: boolean }) => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={active ? "#2F844B" : "#8A9088"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 01-3.46 0"/>
  </svg>
);
const IconUser = ({ active }: { active?: boolean }) => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={active ? "#2F844B" : "#8A9088"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/>
  </svg>
);
const IconTrash = ({ color = "#FE710D" }: { color?: string }) => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14a2 2 0 01-2 2H8a2 2 0 01-2-2L5 6"/><path d="M10 11v6"/><path d="M14 11v6"/><path d="M9 6V4a1 1 0 011-1h4a1 1 0 011 1v2"/>
  </svg>
);
const IconRecycle = ({ color = "#2F844B" }: { color?: string }) => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="1 4 1 10 7 10"/><polyline points="23 20 23 14 17 14"/>
    <path d="M20.49 9A9 9 0 005.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 013.51 15"/>
  </svg>
);
const IconMap = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2F844B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21"/>
    <line x1="9" y1="3" x2="9" y2="18"/><line x1="15" y1="6" x2="15" y2="21"/>
  </svg>
);
const IconChevronRight = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#8A9088" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="9 18 15 12 9 6"/>
  </svg>
);
const IconChevronLeft = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2F844B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="15 18 9 12 15 6"/>
  </svg>
);
const IconAlert = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#FE710D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
  </svg>
);
const IconCheck = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#2F844B" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12"/>
  </svg>
);
const IconLogout = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#FE710D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/>
  </svg>
);
const IconEdit = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#2F844B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z"/>
  </svg>
);
const IconWhatsApp = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#25D366" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"/>
  </svg>
);
const IconMail = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2F844B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22 6 12 13 2 6"/>
  </svg>
);
const IconBellSmall = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2F844B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 01-3.46 0"/>
  </svg>
);

// ─── Toggle ───────────────────────────────────────────────────────────────────
function Toggle({ checked, onChange }: { checked: boolean; onChange: (v: boolean) => void }) {
  return (
    <label className="toggle">
      <input type="checkbox" checked={checked} onChange={e => onChange(e.target.checked)} />
      <span className="toggle-slider" />
    </label>
  );
}

type Screen = "onboarding" | "cadastro" | "home" | "calendario" | "alertas" | "bairro" | "perfil";

// ─── App Shell ────────────────────────────────────────────────────────────────
function AppShell({ screen, setScreen, children }: { screen: Screen; setScreen: (s: Screen) => void; children: ReactNode }) {
  const navItems = [
    { key: "home" as Screen, label: "Início", icon: (a: boolean) => <IconHome active={a} /> },
    { key: "calendario" as Screen, label: "Calendário", icon: (a: boolean) => <IconCalendar active={a} /> },
    { key: "alertas" as Screen, label: "Alertas", icon: (a: boolean) => <IconBell active={a} /> },
    { key: "perfil" as Screen, label: "Perfil", icon: (a: boolean) => <IconUser active={a} /> },
  ];

  return (
    <div className="flex h-full w-full" style={{ background: "#FAF8F5" }}>
      {/* Sidebar — desktop */}
      <aside
        className="hidden md:flex flex-col shrink-0"
        style={{ width: 220, background: "#1D5C31", minHeight: "100vh", position: "sticky", top: 0, height: "100vh" }}
      >
        <div className="p-6 pb-4">
          <div className="flex items-center gap-3 mb-1">
            <div className="rounded-xl flex items-center justify-center" style={{ width: 40, height: 40, background: "#FE710D" }}>
              <IconRecycle color="#1D5C31" />
            </div>
            <div>
              <div className="font-black leading-none" style={{ fontFamily: "'Nunito', sans-serif", fontSize: 13, color: "#C8E8CC" }}>
                Recicla-me
              </div>
              <div style={{ fontSize: 10, color: "#7BBF82", letterSpacing: "0.08em", textTransform: "uppercase" }}>
                Se For Capaz
              </div>
            </div>
          </div>
        </div>

        <nav className="flex flex-col gap-1 px-3 flex-1 mt-2">
          {navItems.map(item => {
            const active = screen === item.key;
            return (
              <button
                key={item.key}
                onClick={() => setScreen(item.key)}
                className="flex items-center gap-3 px-4 py-3 rounded-xl text-left transition-all"
                style={{
                  background: active ? "rgba(243,206,73,0.18)" : "transparent",
                  color: active ? "#F3CE49" : "#A8CEAD",
                  fontSize: 14,
                  fontWeight: active ? 600 : 400,
                  border: "none",
                  cursor: "pointer",
                }}
              >
                <span style={{ filter: active ? "none" : "opacity(0.7)" }}>{item.icon(active)}</span>
                {item.label}
              </button>
            );
          })}
          <button
            onClick={() => setScreen("bairro")}
            className="flex items-center gap-3 px-4 py-3 rounded-xl text-left transition-all mt-1"
            style={{
              background: screen === "bairro" ? "rgba(243,206,73,0.18)" : "transparent",
              color: screen === "bairro" ? "#F3CE49" : "#A8CEAD",
              fontSize: 14,
              fontWeight: screen === "bairro" ? 600 : 400,
              border: "none",
              cursor: "pointer",
            }}
          >
            <span style={{ filter: screen === "bairro" ? "none" : "opacity(0.7)" }}><IconMap /></span>
            Meu Bairro
          </button>
        </nav>

        <div className="p-5">
          <div className="rounded-lg p-3 text-center" style={{ background: "rgba(255,255,255,0.07)", fontSize: 11, color: "#7BBF82" }}>
            📍 Canoinhas, SC
          </div>
        </div>
      </aside>

      {/* Main */}
      <div className="flex flex-col flex-1 min-w-0" style={{ maxHeight: "100vh", overflowY: "auto" }}>
        <main className="flex-1 pb-20 md:pb-6">{children}</main>
      </div>

      {/* Bottom tab bar — mobile */}
      <nav
        className="fixed bottom-0 left-0 right-0 md:hidden flex items-center justify-around"
        style={{ background: "white", borderTop: "1px solid #DDE6DF", paddingBottom: "env(safe-area-inset-bottom, 0px)", zIndex: 50, height: 60, boxShadow: "0 -2px 16px rgba(47,132,75,0.08)" }}
      >
        {navItems.map(item => {
          const active = screen === item.key;
          return (
            <button
              key={item.key}
              onClick={() => setScreen(item.key)}
              className="flex flex-col items-center gap-0.5 flex-1"
              style={{ background: "none", border: "none", cursor: "pointer", minHeight: 44, padding: "8px 0" }}
            >
              {item.icon(active)}
              <span style={{ fontSize: 10, color: active ? "#2F844B" : "#8A9088", fontWeight: active ? 600 : 400 }}>
                {item.label}
              </span>
            </button>
          );
        })}
      </nav>
    </div>
  );
}

// ─── 1. Onboarding ────────────────────────────────────────────────────────────
function ScreenOnboarding({ onNext }: { onNext: () => void }) {
  return (
    <div
      className="flex flex-col items-center justify-between min-h-screen px-6 py-12 screen-fade"
      style={{ background: "linear-gradient(160deg, #1D5C31 0%, #2F844B 60%, #69A96C 100%)" }}
    >
      <div className="flex flex-col items-center gap-6 flex-1 justify-center">
        <div
          className="rounded-3xl flex flex-col items-center justify-center gap-3"
          style={{ width: 120, height: 120, background: "rgba(255,255,255,0.12)", border: "2px solid rgba(255,255,255,0.2)" }}
        >
          <IconRecycle color="#F3CE49" />
          <IconTrash color="#C8E8CC" />
        </div>

        <div className="text-center">
          <h1 className="font-black mb-2" style={{ fontFamily: "'Nunito', sans-serif", fontSize: 28, color: "#FFFFFF", lineHeight: 1.15 }}>
            Recicla-me
            <br />
            <span style={{ color: "#F3CE49" }}>Se For Capaz</span>
          </h1>
          <p style={{ fontSize: 14, color: "#A8CEAD", lineHeight: 1.6, maxWidth: 280 }}>
            Nunca mais esqueça o dia da coleta de lixo no seu bairro em Canoinhas, SC.
          </p>
        </div>

        <div className="flex flex-col gap-3 w-full" style={{ maxWidth: 300 }}>
          {[
            { icon: "🗓️", text: "Lembretes automáticos de coleta" },
            { icon: "♻️", text: "Separe lixo comum do reciclável" },
            { icon: "📍", text: "Configurado para o seu bairro" },
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-3" style={{ background: "rgba(255,255,255,0.1)", borderRadius: 12, padding: "12px 16px" }}>
              <span style={{ fontSize: 20 }}>{item.icon}</span>
              <span style={{ fontSize: 13, color: "#E6F3E8", fontWeight: 500 }}>{item.text}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full" style={{ maxWidth: 360 }}>
        <button
          onClick={onNext}
          className="w-full rounded-2xl font-bold text-center transition-transform active:scale-95"
          style={{
            background: "#FE710D",
            color: "white",
            fontSize: 16,
            padding: "16px 0",
            border: "none",
            cursor: "pointer",
            fontFamily: "'Nunito', sans-serif",
            fontWeight: 800,
            boxShadow: "0 4px 20px rgba(254,113,13,0.45)",
          }}
        >
          Começar agora →
        </button>
        <p className="text-center mt-4" style={{ fontSize: 11, color: "rgba(168,206,173,0.7)" }}>
          Grátis para todos os moradores de Canoinhas
        </p>
      </div>
    </div>
  );
}

// ─── 2. Cadastro ──────────────────────────────────────────────────────────────
function ScreenCadastro({ onNext }: { onNext: () => void }) {
  const bairros = ["Centro", "Coloninha", "Bom Jesus", "São Luís", "Jardim Paraíso", "Santa Terezinha", "Vila Nova", "Alto Alegre", "Guarani", "Universitário"];
  const [canal, setCanal] = useState<string[]>(["push"]);

  const toggleCanal = (c: string) => {
    setCanal(prev => prev.includes(c) ? prev.filter(x => x !== c) : [...prev, c]);
  };

  return (
    <div className="min-h-screen screen-fade" style={{ background: "#FAF8F5" }}>
      {/* Header */}
      <div className="sticky top-0 z-10 px-5 py-4 flex items-center gap-3" style={{ background: "#1D5C31" }}>
        <div style={{ width: 32, height: 32, background: "#FE710D", borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <IconRecycle color="#1D5C31" />
        </div>
        <div>
          <div style={{ fontFamily: "'Nunito',sans-serif", fontWeight: 800, fontSize: 15, color: "white" }}>Criar conta</div>
          <div style={{ fontSize: 11, color: "#A8CEAD" }}>Preencha seus dados</div>
        </div>
      </div>

      <div className="px-5 py-6" style={{ maxWidth: 520, margin: "0 auto" }}>
        {/* Progress */}
        <div className="flex gap-1 mb-6">
          {[1, 2, 3].map(s => (
            <div key={s} className="flex-1 rounded-full" style={{ height: 4, background: s === 1 ? "#2F844B" : "#DDE6DF" }} />
          ))}
        </div>

        <h2 style={{ fontFamily: "'Nunito',sans-serif", fontWeight: 800, fontSize: 22, color: "#50534C", marginBottom: 6 }}>
          Dados pessoais
        </h2>
        <p style={{ fontSize: 13, color: "#8A9088", marginBottom: 24 }}>Informe seus dados para personalizarmos os lembretes.</p>

        <div className="flex flex-col gap-4">
          <div>
            <label style={{ fontSize: 12, fontWeight: 600, color: "#2F844B", display: "block", marginBottom: 6 }}>Nome completo *</label>
            <input
              type="text"
              placeholder="Ex: Maria da Silva"
              className="w-full rounded-xl px-4"
              style={{ height: 48, border: "1.5px solid #C5D5C8", background: "white", fontSize: 14, color: "#50534C", outline: "none", fontFamily: "'Outfit',sans-serif" }}
            />
          </div>

          <div>
            <label style={{ fontSize: 12, fontWeight: 600, color: "#2F844B", display: "block", marginBottom: 6 }}>Bairro *</label>
            <select
              className="w-full rounded-xl px-4"
              style={{ height: 48, border: "1.5px solid #C5D5C8", background: "white", fontSize: 14, color: "#50534C", outline: "none", fontFamily: "'Outfit',sans-serif", appearance: "none" }}
            >
              <option value="">Selecione seu bairro...</option>
              {bairros.map(b => <option key={b} value={b}>{b}</option>)}
            </select>
          </div>

          <div>
            <label style={{ fontSize: 12, fontWeight: 600, color: "#2F844B", display: "block", marginBottom: 6 }}>Rua / Endereço</label>
            <input
              type="text"
              placeholder="Ex: Rua XV de Novembro, 142"
              className="w-full rounded-xl px-4"
              style={{ height: 48, border: "1.5px solid #C5D5C8", background: "white", fontSize: 14, color: "#50534C", outline: "none", fontFamily: "'Outfit',sans-serif" }}
            />
          </div>

          <div className="grid grid-cols-1 gap-4" style={{ gridTemplateColumns: "1fr 1fr" }}>
            <div>
              <label style={{ fontSize: 12, fontWeight: 600, color: "#2F844B", display: "block", marginBottom: 6 }}>Telefone</label>
              <input
                type="tel"
                placeholder="(47) 99999-0000"
                className="w-full rounded-xl px-4"
                style={{ height: 48, border: "1.5px solid #C5D5C8", background: "white", fontSize: 14, color: "#50534C", outline: "none", fontFamily: "'Outfit',sans-serif" }}
              />
            </div>
            <div>
              <label style={{ fontSize: 12, fontWeight: 600, color: "#2F844B", display: "block", marginBottom: 6 }}>E-mail</label>
              <input
                type="email"
                placeholder="seu@email.com"
                className="w-full rounded-xl px-4"
                style={{ height: 48, border: "1.5px solid #C5D5C8", background: "white", fontSize: 14, color: "#50534C", outline: "none", fontFamily: "'Outfit',sans-serif" }}
              />
            </div>
          </div>

          <div>
            <label style={{ fontSize: 12, fontWeight: 600, color: "#2F844B", display: "block", marginBottom: 10 }}>Canal de notificação</label>
            <div className="flex gap-3 flex-wrap">
              {[
                { key: "push", label: "Push", icon: <IconBellSmall /> },
                { key: "email", label: "E-mail", icon: <IconMail /> },
                { key: "whatsapp", label: "WhatsApp", icon: <IconWhatsApp /> },
              ].map(c => {
                const selected = canal.includes(c.key);
                return (
                  <button
                    key={c.key}
                    onClick={() => toggleCanal(c.key)}
                    className="flex items-center gap-2 rounded-xl px-4"
                    style={{
                      height: 44,
                      border: selected ? "2px solid #2F844B" : "1.5px solid #C5D5C8",
                      background: selected ? "#E6F3E8" : "white",
                      color: selected ? "#1D5C31" : "#8A9088",
                      fontSize: 13,
                      fontWeight: selected ? 600 : 400,
                      cursor: "pointer",
                      fontFamily: "'Outfit',sans-serif",
                    }}
                  >
                    {c.icon}
                    {c.label}
                    {selected && <IconCheck />}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        <button
          onClick={onNext}
          className="w-full rounded-2xl font-bold mt-8"
          style={{ height: 52, background: "#FE710D", color: "white", fontSize: 15, border: "none", cursor: "pointer", fontFamily: "'Nunito',sans-serif", fontWeight: 800 }}
        >
          Salvar e continuar →
        </button>
      </div>
    </div>
  );
}

// ─── 3. Home ──────────────────────────────────────────────────────────────────
function ScreenHome({ setScreen }: { setScreen: (s: Screen) => void }) {
  const days = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"];
  const todayIdx = new Date().getDay();

  return (
    <div className="screen-fade">
      <div className="px-5 pt-6 pb-4 flex items-center justify-between">
        <div>
          <p style={{ fontSize: 12, color: "#8A9088", fontWeight: 500 }}>Bom dia, Maria! 👋</p>
          <h1 style={{ fontFamily: "'Nunito',sans-serif", fontWeight: 800, fontSize: 20, color: "#50534C", margin: 0 }}>
            Painel de Coletas
          </h1>
        </div>
        <button
          onClick={() => setScreen("perfil")}
          className="rounded-full flex items-center justify-center"
          style={{ width: 40, height: 40, background: "#E6F3E8", border: "none", cursor: "pointer" }}
        >
          <IconUser active />
        </button>
      </div>

      <div className="px-5 flex flex-col gap-4">
        {/* Próxima coleta — seletiva = verde */}
        <div
          className="rounded-2xl p-5 relative overflow-hidden"
          style={{ background: "linear-gradient(130deg, #1D5C31 0%, #2F844B 100%)", boxShadow: "0 8px 32px rgba(47,132,75,0.28)" }}
        >
          <div className="flex items-start justify-between">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <div className="rounded-lg flex items-center justify-center" style={{ width: 36, height: 36, background: "#F3CE49" }}>
                  <IconRecycle color="#1D5C31" />
                </div>
                <span style={{ fontSize: 11, fontWeight: 700, color: "#C8E8CC", textTransform: "uppercase", letterSpacing: "0.1em" }}>
                  Próxima coleta
                </span>
              </div>
              <h2 style={{ fontFamily: "'Nunito',sans-serif", fontWeight: 900, fontSize: 26, color: "white", margin: "0 0 4px 0" }}>
                Seletiva ♻️
              </h2>
              <p style={{ fontSize: 13, color: "#A8CEAD", margin: 0 }}>Quarta-feira, 21 de agosto</p>
            </div>
            {/* Contagem regressiva — amarelo */}
            <div
              className="rounded-xl text-center p-3"
              style={{ background: "#F3CE49", minWidth: 70 }}
            >
              <div style={{ fontSize: 24, fontWeight: 900, color: "#1D5C31", fontFamily: "'Nunito',sans-serif", lineHeight: 1 }}>1</div>
              <div style={{ fontSize: 10, color: "#2F844B", marginTop: 2, fontWeight: 700 }}>dia</div>
            </div>
          </div>

          <div
            className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 mt-3"
            style={{ background: "rgba(255,255,255,0.15)", border: "1px solid rgba(255,255,255,0.2)" }}
          >
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#F3CE49", display: "inline-block" }} />
            <span style={{ fontSize: 11, color: "#E6F3E8", fontWeight: 600 }}>Amanhã — Bairro Centro</span>
          </div>
        </div>

        {/* Lixo comum — laranja */}
        <div
          className="rounded-2xl p-4 flex items-center gap-4"
          style={{ background: "white", border: "1.5px solid #FFD4B0" }}
        >
          <div className="rounded-xl flex items-center justify-center shrink-0" style={{ width: 48, height: 48, background: "#FFF0E6" }}>
            <IconTrash color="#FE710D" />
          </div>
          <div className="flex-1">
            <p style={{ fontSize: 11, color: "#8A9088", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em", margin: 0 }}>Lixo comum</p>
            <p style={{ fontFamily: "'Nunito',sans-serif", fontWeight: 700, fontSize: 16, color: "#50534C", margin: "2px 0 0 0" }}>
              Sexta-feira, 23 de agosto
            </p>
          </div>
          <div className="text-right">
            <div style={{ fontSize: 20, fontWeight: 800, color: "#FE710D", fontFamily: "'Nunito',sans-serif" }}>3</div>
            <div style={{ fontSize: 10, color: "#8A9088" }}>dias</div>
          </div>
        </div>

        {/* Mini-week strip */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <span style={{ fontSize: 13, fontWeight: 600, color: "#50534C" }}>Esta semana</span>
            <button
              onClick={() => setScreen("calendario")}
              className="flex items-center gap-1"
              style={{ fontSize: 12, color: "#2F844B", fontWeight: 600, background: "none", border: "none", cursor: "pointer" }}
            >
              Ver completo <IconChevronRight />
            </button>
          </div>
          <div className="grid grid-cols-7 gap-1">
            {days.map((d, i) => {
              const isToday = i === todayIdx;
              const hasSeletivo = i === 3;
              const hasComum = i === 5;
              return (
                <div
                  key={d}
                  className="flex flex-col items-center gap-1 rounded-xl py-2"
                  style={{
                    background: isToday ? "#2F844B" : "white",
                    border: "1.5px solid",
                    borderColor: isToday ? "#2F844B" : "#DDE6DF",
                  }}
                >
                  <span style={{ fontSize: 10, fontWeight: 600, color: isToday ? "#A8CEAD" : "#8A9088" }}>{d}</span>
                  <span style={{ fontSize: 13, fontWeight: 700, color: isToday ? "white" : "#50534C" }}>
                    {20 + i}
                  </span>
                  {hasSeletivo && <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#2F844B" }} />}
                  {hasComum && <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#FE710D" }} />}
                  {!hasSeletivo && !hasComum && <div style={{ width: 6, height: 6 }} />}
                </div>
              );
            })}
          </div>
          <div className="flex gap-4 mt-2">
            <div className="flex items-center gap-1.5">
              <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#2F844B" }} />
              <span style={{ fontSize: 11, color: "#8A9088" }}>Seletivo</span>
            </div>
            <div className="flex items-center gap-1.5">
              <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#FE710D" }} />
              <span style={{ fontSize: 11, color: "#8A9088" }}>Comum</span>
            </div>
          </div>
        </div>

        {/* Quick actions */}
        <div className="grid grid-cols-2 gap-3 mb-4">
          <button
            onClick={() => setScreen("bairro")}
            className="rounded-xl p-4 flex items-center gap-3"
            style={{ background: "#E6F3E8", border: "none", cursor: "pointer", textAlign: "left" }}
          >
            <IconMap />
            <div>
              <div style={{ fontSize: 11, color: "#2F844B", fontWeight: 700 }}>Meu bairro</div>
              <div style={{ fontSize: 12, color: "#50534C", fontWeight: 500 }}>Centro</div>
            </div>
          </button>
          <button
            onClick={() => setScreen("alertas")}
            className="rounded-xl p-4 flex items-center gap-3"
            style={{ background: "#FFF0E6", border: "none", cursor: "pointer", textAlign: "left" }}
          >
            <IconBell active />
            <div>
              <div style={{ fontSize: 11, color: "#FE710D", fontWeight: 700 }}>Alertas</div>
              <div className="inline-flex items-center gap-1">
                <span style={{ fontSize: 12, color: "#50534C", fontWeight: 500 }}>3</span>
                <span
                  className="rounded-full px-1.5"
                  style={{ fontSize: 10, fontWeight: 800, background: "#F3CE49", color: "#50534C" }}
                >
                  novos
                </span>
              </div>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}

// ─── 4. Calendário ────────────────────────────────────────────────────────────
function ScreenCalendario() {
  const [view, setView] = useState<"semana" | "mes">("semana");
  const monthDays = Array.from({ length: 31 }, (_, i) => i + 1);
  const weekDays = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"];

  const isSeletivo = (d: number) => d % 7 === 3 || d % 7 === 4;
  const isComum = (d: number) => d % 7 === 5 || d % 7 === 6;

  return (
    <div className="screen-fade">
      <div className="px-5 pt-6 pb-4">
        <h1 style={{ fontFamily: "'Nunito',sans-serif", fontWeight: 800, fontSize: 22, color: "#50534C", margin: "0 0 4px 0" }}>
          Calendário de Coletas
        </h1>
        <p style={{ fontSize: 13, color: "#8A9088", margin: 0 }}>Agosto 2026 — Bairro Centro</p>
      </div>

      {/* Toggle */}
      <div className="px-5 mb-5">
        <div className="flex rounded-xl p-1" style={{ background: "#E6F3E8", width: "fit-content" }}>
          {(["semana", "mes"] as const).map(v => (
            <button
              key={v}
              onClick={() => setView(v)}
              className="rounded-lg px-5 py-2 transition-all"
              style={{
                background: view === v ? "#2F844B" : "transparent",
                color: view === v ? "white" : "#69A96C",
                fontSize: 13,
                fontWeight: view === v ? 700 : 500,
                border: "none",
                cursor: "pointer",
                fontFamily: "'Outfit',sans-serif",
              }}
            >
              {v === "semana" ? "Semana" : "Mês"}
            </button>
          ))}
        </div>
      </div>

      <div className="px-5">
        {view === "semana" ? (
          <div>
            <div className="grid grid-cols-7 gap-1 mb-2">
              {weekDays.map(d => (
                <div key={d} className="text-center" style={{ fontSize: 11, fontWeight: 600, color: "#8A9088", padding: "4px 0" }}>{d}</div>
              ))}
            </div>
            <div className="grid grid-cols-7 gap-1">
              {[18, 19, 20, 21, 22, 23, 24].map((day, i) => {
                const isToday = day === 20;
                const sel = day === 21;
                const com = day === 23;
                return (
                  <div
                    key={day}
                    className="flex flex-col items-center rounded-xl py-3 gap-1"
                    style={{
                      background: isToday ? "#2F844B" : sel ? "#E6F3E8" : com ? "#FFF0E6" : "white",
                      border: "1.5px solid",
                      borderColor: isToday ? "#2F844B" : sel ? "#69A96C" : com ? "#FE710D" : "#DDE6DF",
                      minHeight: 80,
                    }}
                  >
                    <span style={{ fontSize: 10, color: isToday ? "#A8CEAD" : "#8A9088" }}>{weekDays[i]}</span>
                    <span style={{ fontSize: 18, fontWeight: 800, color: isToday ? "white" : "#50534C", fontFamily: "'Nunito',sans-serif" }}>
                      {day}
                    </span>
                    {sel && (
                      <div className="flex flex-col items-center gap-0.5">
                        <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#2F844B" }} />
                        <span style={{ fontSize: 8, color: "#2F844B", fontWeight: 700, textAlign: "center", lineHeight: 1 }}>SEL</span>
                      </div>
                    )}
                    {com && (
                      <div className="flex flex-col items-center gap-0.5">
                        <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#FE710D" }} />
                        <span style={{ fontSize: 8, color: "#FE710D", fontWeight: 700, textAlign: "center", lineHeight: 1 }}>COM</span>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Detail cards */}
            <div className="flex flex-col gap-3 mt-5">
              {/* Seletiva — verde */}
              <div className="rounded-xl p-4 flex items-center gap-4" style={{ background: "#E6F3E8", border: "1.5px solid #69A96C" }}>
                <div className="rounded-lg flex items-center justify-center shrink-0" style={{ width: 40, height: 40, background: "#2F844B" }}>
                  <IconRecycle color="white" />
                </div>
                <div>
                  <div style={{ fontSize: 11, fontWeight: 700, color: "#2F844B", textTransform: "uppercase", letterSpacing: "0.1em" }}>Coleta Seletiva</div>
                  <div style={{ fontSize: 14, fontWeight: 600, color: "#50534C" }}>Quarta-feira, 21 de agosto</div>
                  <div style={{ fontSize: 12, color: "#8A9088" }}>A partir das 7h · Bairro Centro</div>
                </div>
              </div>
              {/* Comum — laranja */}
              <div className="rounded-xl p-4 flex items-center gap-4" style={{ background: "#FFF0E6", border: "1.5px solid #FE710D" }}>
                <div className="rounded-lg flex items-center justify-center shrink-0" style={{ width: 40, height: 40, background: "#FE710D" }}>
                  <IconTrash color="white" />
                </div>
                <div>
                  <div style={{ fontSize: 11, fontWeight: 700, color: "#FE710D", textTransform: "uppercase", letterSpacing: "0.1em" }}>Lixo Comum</div>
                  <div style={{ fontSize: 14, fontWeight: 600, color: "#50534C" }}>Sexta-feira, 23 de agosto</div>
                  <div style={{ fontSize: 12, color: "#8A9088" }}>A partir das 7h · Bairro Centro</div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div>
            <div className="flex items-center justify-between mb-4">
              <button style={{ background: "none", border: "none", cursor: "pointer" }}><IconChevronLeft /></button>
              <span style={{ fontFamily: "'Nunito',sans-serif", fontWeight: 800, fontSize: 16, color: "#50534C" }}>Agosto 2026</span>
              <button style={{ background: "none", border: "none", cursor: "pointer", transform: "rotate(180deg)" }}><IconChevronLeft /></button>
            </div>
            <div className="grid grid-cols-7 gap-1 mb-1">
              {weekDays.map(d => (
                <div key={d} className="text-center" style={{ fontSize: 10, fontWeight: 600, color: "#8A9088", padding: "4px 0" }}>{d}</div>
              ))}
            </div>
            <div className="grid grid-cols-7 gap-1">
              {[...Array(4)].map((_, i) => <div key={`e${i}`} />)}
              {monthDays.map(d => {
                const sel = isSeletivo(d);
                const com = isComum(d);
                const isToday = d === 20;
                return (
                  <div
                    key={d}
                    className="flex flex-col items-center justify-center rounded-lg"
                    style={{
                      aspectRatio: "1",
                      background: isToday ? "#2F844B" : sel ? "#E6F3E8" : com ? "#FFF0E6" : "transparent",
                      border: "1px solid",
                      borderColor: isToday ? "#2F844B" : sel ? "#A8CEAD" : com ? "#FFD4B0" : "transparent",
                    }}
                  >
                    <span style={{ fontSize: 12, fontWeight: isToday ? 800 : 500, color: isToday ? "white" : "#50534C" }}>{d}</span>
                    {(sel || com) && (
                      <div style={{ width: 5, height: 5, borderRadius: "50%", background: sel ? "#2F844B" : "#FE710D", marginTop: 1 }} />
                    )}
                  </div>
                );
              })}
            </div>
            <div className="flex gap-5 mt-4 justify-center">
              <div className="flex items-center gap-1.5">
                <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#2F844B" }} />
                <span style={{ fontSize: 12, color: "#8A9088", fontWeight: 500 }}>Seletiva</span>
              </div>
              <div className="flex items-center gap-1.5">
                <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#FE710D" }} />
                <span style={{ fontSize: 12, color: "#8A9088", fontWeight: 500 }}>Comum</span>
              </div>
              <div className="flex items-center gap-1.5">
                <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#2F844B" }} />
                <span style={{ fontSize: 12, color: "#8A9088", fontWeight: 500 }}>Hoje</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// ─── 5. Alertas ───────────────────────────────────────────────────────────────
function ScreenAlertas() {
  const [seletivo, setSeletivo] = useState(true);
  const [comum, setComum] = useState(true);
  const [antecedencia, setAntecedencia] = useState("1 dia antes");
  const [horario, setHorario] = useState("18:00");

  const notificacoes = [
    { id: 1, tipo: "seletivo", msg: "Coleta seletiva amanhã no bairro Centro", hora: "hoje, 18:00", lida: false },
    { id: 2, tipo: "comum", msg: "Lixo comum hoje às 7h — coloque o lixo para fora!", hora: "hj, 06:30", lida: false },
    { id: 3, tipo: "seletivo", msg: "Coleta seletiva amanhã no bairro Centro", hora: "seg, 18:00", lida: true },
    { id: 4, tipo: "comum", msg: "Lixo comum amanhã — não esqueça!", hora: "sex, 18:00", lida: true },
    { id: 5, tipo: "sistema", msg: "Calendário de agosto disponível para consulta", hora: "01/08", lida: true },
  ];

  return (
    <div className="screen-fade">
      <div className="px-5 pt-6 pb-4">
        <h1 style={{ fontFamily: "'Nunito',sans-serif", fontWeight: 800, fontSize: 22, color: "#50534C", margin: "0 0 4px 0" }}>
          Alertas
        </h1>
        <p style={{ fontSize: 13, color: "#8A9088", margin: 0 }}>Notificações e configurações</p>
      </div>

      {/* Config card */}
      <div className="px-5 mb-5">
        <div className="rounded-2xl p-5" style={{ background: "white", border: "1.5px solid #DDE6DF" }}>
          <h3 style={{ fontSize: 14, fontWeight: 700, color: "#50534C", margin: "0 0 14px 0" }}>⚙️ Configurar lembretes</h3>

          <div className="flex flex-col gap-4">
            {/* Seletiva — verde */}
            <div className="flex items-center justify-between">
              <div>
                <div className="flex items-center gap-2">
                  <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#2F844B" }} />
                  <span style={{ fontSize: 13, fontWeight: 600, color: "#50534C" }}>Coleta seletiva</span>
                </div>
                <span style={{ fontSize: 11, color: "#8A9088" }}>Reciclável — toda quarta</span>
              </div>
              <Toggle checked={seletivo} onChange={setSeletivo} />
            </div>

            <div style={{ height: 1, background: "#DDE6DF" }} />

            {/* Comum — laranja */}
            <div className="flex items-center justify-between">
              <div>
                <div className="flex items-center gap-2">
                  <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#FE710D" }} />
                  <span style={{ fontSize: 13, fontWeight: 600, color: "#50534C" }}>Lixo comum</span>
                </div>
                <span style={{ fontSize: 11, color: "#8A9088" }}>Orgânico — toda sexta</span>
              </div>
              <Toggle checked={comum} onChange={setComum} />
            </div>

            <div style={{ height: 1, background: "#DDE6DF" }} />

            <div className="grid gap-3" style={{ gridTemplateColumns: "1fr 1fr" }}>
              <div>
                <label style={{ fontSize: 11, fontWeight: 600, color: "#2F844B", display: "block", marginBottom: 6 }}>Antecedência</label>
                <select
                  value={antecedencia}
                  onChange={e => setAntecedencia(e.target.value)}
                  className="w-full rounded-lg px-3"
                  style={{ height: 40, border: "1.5px solid #C5D5C8", background: "#FAF8F5", fontSize: 12, color: "#50534C", outline: "none", fontFamily: "'Outfit',sans-serif" }}
                >
                  {["No dia", "1 dia antes", "2 dias antes"].map(o => <option key={o}>{o}</option>)}
                </select>
              </div>
              <div>
                <label style={{ fontSize: 11, fontWeight: 600, color: "#2F844B", display: "block", marginBottom: 6 }}>Horário</label>
                <input
                  type="time"
                  value={horario}
                  onChange={e => setHorario(e.target.value)}
                  className="w-full rounded-lg px-3"
                  style={{ height: 40, border: "1.5px solid #C5D5C8", background: "#FAF8F5", fontSize: 12, color: "#50534C", outline: "none", fontFamily: "'Outfit',sans-serif" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Notifications list */}
      <div className="px-5">
        <h3 style={{ fontSize: 14, fontWeight: 700, color: "#50534C", margin: "0 0 12px 0" }}>Histórico de notificações</h3>
        <div className="flex flex-col gap-2">
          {notificacoes.map(n => (
            <div
              key={n.id}
              className="rounded-xl p-4 flex items-start gap-3"
              style={{
                background: n.lida ? "white" : (n.tipo === "seletivo" ? "#EBF5EC" : n.tipo === "comum" ? "#FFF3EC" : "#F5F5F5"),
                border: "1.5px solid",
                borderColor: n.lida ? "#DDE6DF" : (n.tipo === "seletivo" ? "#A8CEAD" : n.tipo === "comum" ? "#FFD4B0" : "#E0E0E0"),
              }}
            >
              <div
                className="rounded-full flex items-center justify-center shrink-0 mt-0.5"
                style={{
                  width: 32, height: 32,
                  background: n.tipo === "seletivo" ? "#E6F3E8" : n.tipo === "comum" ? "#FFF0E6" : "#F0F0F0",
                }}
              >
                {n.tipo === "seletivo" && <IconRecycle color="#2F844B" />}
                {n.tipo === "comum" && <IconTrash color="#FE710D" />}
                {n.tipo === "sistema" && <IconAlert />}
              </div>
              <div className="flex-1 min-w-0">
                <p style={{ fontSize: 13, color: "#50534C", margin: "0 0 2px 0", fontWeight: n.lida ? 400 : 600, lineHeight: 1.4 }}>
                  {n.msg}
                </p>
                <span style={{ fontSize: 11, color: "#8A9088" }}>{n.hora}</span>
              </div>
              {!n.lida && (
                <div
                  className="rounded-full px-2 py-0.5 shrink-0"
                  style={{ background: "#F3CE49", fontSize: 9, fontWeight: 800, color: "#50534C" }}
                >
                  novo
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── 6. Bairro ────────────────────────────────────────────────────────────────
function ScreenBairro() {
  const [reportOpen, setReportOpen] = useState(false);

  return (
    <div className="screen-fade">
      <div className="px-5 pt-6 pb-4">
        <h1 style={{ fontFamily: "'Nunito',sans-serif", fontWeight: 800, fontSize: 22, color: "#50534C", margin: "0 0 4px 0" }}>
          Meu Bairro
        </h1>
        <p style={{ fontSize: 13, color: "#8A9088", margin: 0 }}>Detalhes de coleta configurados</p>
      </div>

      <div className="px-5 flex flex-col gap-4">
        {/* Bairro card — verde */}
        <div
          className="rounded-2xl p-5"
          style={{ background: "linear-gradient(130deg, #1D5C31, #2F844B)", color: "white" }}
        >
          <div className="flex items-center gap-3 mb-4">
            <div style={{ width: 40, height: 40, background: "#F3CE49", borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <IconMap />
            </div>
            <div>
              <div style={{ fontFamily: "'Nunito',sans-serif", fontWeight: 800, fontSize: 18 }}>Centro</div>
              <div style={{ fontSize: 12, color: "#A8CEAD" }}>Canoinhas, SC · 47 ruas</div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {/* Seletiva — verde */}
            <div style={{ background: "rgba(255,255,255,0.15)", borderRadius: 12, padding: "12px 14px" }}>
              <div className="flex items-center gap-2 mb-1">
                <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#F3CE49" }} />
                <span style={{ fontSize: 11, color: "#C8E8CC", fontWeight: 700 }}>SELETIVA</span>
              </div>
              <div style={{ fontSize: 14, fontWeight: 700 }}>Toda Quarta</div>
              <div style={{ fontSize: 11, color: "#A8CEAD" }}>a partir das 7h</div>
            </div>
            {/* Comum — laranja */}
            <div style={{ background: "rgba(254,113,13,0.2)", borderRadius: 12, padding: "12px 14px", border: "1px solid rgba(254,113,13,0.3)" }}>
              <div className="flex items-center gap-2 mb-1">
                <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#FF8C42" }} />
                <span style={{ fontSize: 11, color: "#FFD4B0", fontWeight: 700 }}>COMUM</span>
              </div>
              <div style={{ fontSize: 14, fontWeight: 700 }}>Toda Sexta</div>
              <div style={{ fontSize: 11, color: "#FFD4B0" }}>a partir das 7h</div>
            </div>
          </div>
        </div>

        {/* Map placeholder */}
        <div
          className="rounded-2xl overflow-hidden"
          style={{ height: 180, background: "#E0EDE2", border: "1.5px solid #DDE6DF", position: "relative", display: "flex", alignItems: "center", justifyContent: "center" }}
        >
          <div className="text-center" style={{ color: "#8A9088" }}>
            <div style={{ fontSize: 32, marginBottom: 8 }}>🗺️</div>
            <div style={{ fontSize: 13, fontWeight: 600 }}>Mapa do bairro Centro</div>
            <div style={{ fontSize: 11, marginTop: 4 }}>Canoinhas, SC</div>
          </div>
          <div style={{ position: "absolute", top: 40, left: "30%", width: 12, height: 12, borderRadius: "50%", background: "#2F844B", border: "2px solid white", boxShadow: "0 2px 6px rgba(0,0,0,0.3)" }} />
          <div style={{ position: "absolute", top: 90, left: "55%", width: 12, height: 12, borderRadius: "50%", background: "#FE710D", border: "2px solid white", boxShadow: "0 2px 6px rgba(0,0,0,0.3)" }} />
          <div style={{ position: "absolute", top: 60, left: "70%", width: 12, height: 12, borderRadius: "50%", background: "#2F844B", border: "2px solid white", boxShadow: "0 2px 6px rgba(0,0,0,0.3)" }} />
        </div>

        {/* Other neighborhoods */}
        <div>
          <h3 style={{ fontSize: 14, fontWeight: 700, color: "#50534C", margin: "0 0 10px 0" }}>Outros bairros próximos</h3>
          {[
            { nome: "Coloninha", seletivo: "Terça", comum: "Quinta" },
            { nome: "Bom Jesus", seletivo: "Quarta", comum: "Sexta" },
            { nome: "São Luís", seletivo: "Segunda", comum: "Quarta" },
          ].map(b => (
            <div key={b.nome} className="flex items-center justify-between py-3" style={{ borderBottom: "1px solid #DDE6DF" }}>
              <div>
                <div style={{ fontSize: 14, fontWeight: 600, color: "#50534C" }}>{b.nome}</div>
                <div style={{ fontSize: 11, color: "#8A9088" }}>
                  <span style={{ color: "#2F844B" }}>Seletiva: {b.seletivo}</span>
                  {" · "}
                  <span style={{ color: "#FE710D" }}>Comum: {b.comum}</span>
                </div>
              </div>
              <IconChevronRight />
            </div>
          ))}
        </div>

        {/* Report problem */}
        <button
          onClick={() => setReportOpen(true)}
          className="w-full rounded-xl py-3 flex items-center justify-center gap-2"
          style={{ background: "#FFF0E6", border: "1.5px solid #FFD4B0", cursor: "pointer", marginBottom: 8 }}
        >
          <IconAlert />
          <span style={{ fontSize: 13, fontWeight: 700, color: "#FE710D" }}>Reportar problema com a coleta</span>
        </button>

        {/* Report modal */}
        {reportOpen && (
          <div
            className="fixed inset-0 flex items-end md:items-center justify-center z-50"
            style={{ background: "rgba(29,92,49,0.5)" }}
            onClick={() => setReportOpen(false)}
          >
            <div
              className="w-full rounded-t-3xl md:rounded-2xl p-6"
              style={{ background: "white", maxWidth: 480 }}
              onClick={e => e.stopPropagation()}
            >
              <div style={{ width: 40, height: 4, borderRadius: 2, background: "#DDE6DF", margin: "0 auto 20px" }} className="md:hidden" />
              <h3 style={{ fontFamily: "'Nunito',sans-serif", fontWeight: 800, fontSize: 18, color: "#50534C", margin: "0 0 8px 0" }}>
                Reportar problema
              </h3>
              <p style={{ fontSize: 13, color: "#8A9088", margin: "0 0 16px 0" }}>Informe o que aconteceu com a coleta no seu bairro.</p>
              <select
                className="w-full rounded-xl px-4 mb-3"
                style={{ height: 48, border: "1.5px solid #C5D5C8", background: "#FAF8F5", fontSize: 14, color: "#50534C", outline: "none", fontFamily: "'Outfit',sans-serif" }}
              >
                <option>Coleta não passou</option>
                <option>Horário incorreto</option>
                <option>Deixaram lixo para trás</option>
                <option>Outro problema</option>
              </select>
              <textarea
                placeholder="Descreva o problema (opcional)..."
                className="w-full rounded-xl px-4 py-3"
                style={{ border: "1.5px solid #C5D5C8", background: "#FAF8F5", fontSize: 13, color: "#50534C", outline: "none", fontFamily: "'Outfit',sans-serif", resize: "none", height: 80 }}
              />
              <button
                onClick={() => setReportOpen(false)}
                className="w-full rounded-xl mt-4 font-bold"
                style={{ height: 48, background: "#FE710D", color: "white", border: "none", cursor: "pointer", fontSize: 14, fontFamily: "'Nunito',sans-serif", fontWeight: 800 }}
              >
                Enviar relatório
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// ─── 7. Perfil ────────────────────────────────────────────────────────────────
function ScreenPerfil({ setScreen }: { setScreen: (s: Screen) => void }) {
  return (
    <div className="screen-fade">
      <div className="px-5 pt-6 pb-4">
        <h1 style={{ fontFamily: "'Nunito',sans-serif", fontWeight: 800, fontSize: 22, color: "#50534C", margin: 0 }}>
          Meu Perfil
        </h1>
      </div>

      <div className="px-5 flex flex-col gap-4">
        {/* Avatar + info */}
        <div className="flex items-center gap-4 rounded-2xl p-5" style={{ background: "white", border: "1.5px solid #DDE6DF" }}>
          <div
            className="rounded-2xl flex items-center justify-center font-black shrink-0"
            style={{ width: 60, height: 60, background: "linear-gradient(135deg, #2F844B, #69A96C)", color: "white", fontSize: 22, fontFamily: "'Nunito',sans-serif" }}
          >
            M
          </div>
          <div className="flex-1">
            <div style={{ fontFamily: "'Nunito',sans-serif", fontWeight: 800, fontSize: 17, color: "#50534C" }}>Maria da Silva</div>
            <div style={{ fontSize: 12, color: "#8A9088" }}>maria@email.com</div>
            <div style={{ fontSize: 12, color: "#2F844B", fontWeight: 600, marginTop: 2 }}>📍 Centro, Canoinhas</div>
          </div>
          <button style={{ background: "none", border: "none", cursor: "pointer" }}>
            <IconEdit />
          </button>
        </div>

        {/* Info grid */}
        <div className="rounded-2xl p-5" style={{ background: "white", border: "1.5px solid #DDE6DF" }}>
          <h3 style={{ fontSize: 13, fontWeight: 700, color: "#50534C", margin: "0 0 14px 0", textTransform: "uppercase", letterSpacing: "0.08em" }}>
            Dados cadastrais
          </h3>
          {[
            { label: "Nome", value: "Maria da Silva" },
            { label: "Bairro", value: "Centro" },
            { label: "Endereço", value: "Rua XV de Novembro, 142" },
            { label: "Telefone", value: "(47) 99874-1234" },
            { label: "E-mail", value: "maria@email.com" },
          ].map(row => (
            <div key={row.label} className="flex justify-between py-2.5" style={{ borderBottom: "1px solid #EBF3EC" }}>
              <span style={{ fontSize: 12, color: "#8A9088", fontWeight: 500 }}>{row.label}</span>
              <span style={{ fontSize: 13, color: "#50534C", fontWeight: 600 }}>{row.value}</span>
            </div>
          ))}
        </div>

        {/* Notification prefs */}
        <div className="rounded-2xl p-5" style={{ background: "white", border: "1.5px solid #DDE6DF" }}>
          <h3 style={{ fontSize: 13, fontWeight: 700, color: "#50534C", margin: "0 0 14px 0", textTransform: "uppercase", letterSpacing: "0.08em" }}>
            Preferências de notificação
          </h3>
          {[
            { label: "Push (app)", icon: <IconBellSmall />, ativo: true },
            { label: "E-mail", icon: <IconMail />, ativo: true },
            { label: "WhatsApp", icon: <IconWhatsApp />, ativo: false },
          ].map(pref => (
            <div key={pref.label} className="flex items-center justify-between py-2.5" style={{ borderBottom: "1px solid #EBF3EC" }}>
              <div className="flex items-center gap-2">
                {pref.icon}
                <span style={{ fontSize: 13, color: "#50534C", fontWeight: 500 }}>{pref.label}</span>
              </div>
              <span
                className="rounded-full px-2.5 py-0.5"
                style={{ fontSize: 11, fontWeight: 700, background: pref.ativo ? "#E6F3E8" : "#F5F5F5", color: pref.ativo ? "#2F844B" : "#8A9088" }}
              >
                {pref.ativo ? "Ativo" : "Inativo"}
              </span>
            </div>
          ))}
        </div>

        {/* Quick links */}
        <div className="rounded-2xl overflow-hidden" style={{ background: "white", border: "1.5px solid #DDE6DF" }}>
          {[
            { label: "Editar dados", action: () => {} },
            { label: "Trocar bairro", action: () => {} },
            { label: "Configurar alertas", action: () => setScreen("alertas") },
          ].map((item, i) => (
            <button
              key={item.label}
              onClick={item.action}
              className="w-full flex items-center justify-between px-5 py-4"
              style={{ background: "none", border: "none", borderBottom: i < 2 ? "1px solid #EBF3EC" : "none", cursor: "pointer" }}
            >
              <span style={{ fontSize: 14, color: "#50534C", fontWeight: 500 }}>{item.label}</span>
              <IconChevronRight />
            </button>
          ))}
        </div>

        {/* Logout */}
        <button
          className="w-full rounded-xl flex items-center justify-center gap-2 mb-6"
          style={{ height: 48, background: "#FFF0E6", border: "1.5px solid #FFD4B0", cursor: "pointer" }}
        >
          <IconLogout />
          <span style={{ fontSize: 14, fontWeight: 700, color: "#FE710D" }}>Sair da conta</span>
        </button>
      </div>
    </div>
  );
}

// ─── Root ─────────────────────────────────────────────────────────────────────
export default function App() {
  const [screen, setScreen] = useState<Screen>("onboarding");

  if (screen === "onboarding") return <ScreenOnboarding onNext={() => setScreen("cadastro")} />;
  if (screen === "cadastro") return <ScreenCadastro onNext={() => setScreen("home")} />;

  return (
    <AppShell screen={screen} setScreen={setScreen}>
      {screen === "home" && <ScreenHome setScreen={setScreen} />}
      {screen === "calendario" && <ScreenCalendario />}
      {screen === "alertas" && <ScreenAlertas />}
      {screen === "bairro" && <ScreenBairro />}
      {screen === "perfil" && <ScreenPerfil setScreen={setScreen} />}
    </AppShell>
  );
}
