"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function NativePcPortBanner() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <motion.button
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        onClick={() => setIsOpen(true)}
        className="game-pc-port-banner"
        style={{
          width: "100%",
          padding: "1.2rem",
          marginTop: "1.5rem",
          backgroundColor: "rgba(0, 0, 0, 0.4)",
          backdropFilter: "blur(12px)",
          border: "1px solid rgba(255, 255, 255, 0.2)",
          borderRadius: "12px",
          color: "white",
          textAlign: "right",
          cursor: "pointer",
          boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3), inset 0 0 20px rgba(255,255,255,0.05)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Subtle glow effect */}
        <div 
          style={{
            position: "absolute",
            top: "-50%",
            left: "-50%",
            width: "200%",
            height: "200%",
            background: "radial-gradient(circle at center, rgba(255,215,0,0.08) 0%, transparent 60%)",
            pointerEvents: "none"
          }}
        />
        <h3 style={{ fontSize: "1.2rem", marginBottom: "0.5rem", color: "#e3c878", fontWeight: "bold" }}>
          ✨ النسخة الأصلية بلمسة ساحرة للـ (PC)
        </h3>
        <p style={{ fontSize: "0.95rem", lineHeight: "1.6", opacity: 0.9 }}>
          شخصياً، <strong>أنصح جداً بلعب النسخة المحسنة الـ (3D)</strong> الموجودة في الأعلى لأنها الأفضل بصرياً وأسهل في التحكم. ولكن للذين يفضلون الحنين ويرغبون بتجربة اللعبة الأصلية (نسخة الـ N64)، فإن مجتمع اللعبة قام بتطوير أداة (Native PC) منفصلة تفوق قوة المحاكيات، تمكنك من لعبها بسلاسة عالية جداً وإطارات غير محدودة. <strong>اضغط هنا للتفاصيل</strong>.
        </p>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <div
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              zIndex: 9999,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "1rem"
            }}
          >
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              style={{
                position: "absolute",
                inset: 0,
                backgroundColor: "rgba(0, 0, 0, 0.7)",
                backdropFilter: "blur(8px)",
              }}
            />

            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              style={{
                backgroundColor: "rgba(15, 20, 30, 0.85)",
                backdropFilter: "blur(20px)",
                border: "1px solid rgba(255, 255, 255, 0.15)",
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 40px rgba(227, 200, 120, 0.15)",
                borderRadius: "16px",
                padding: "2rem",
                width: "min(600px, 100%)",
                maxHeight: "90vh",
                overflowY: "auto",
                position: "relative",
                color: "white",
                textAlign: "right",
              }}
            >
              <button
                onClick={() => setIsOpen(false)}
                style={{
                  position: "absolute",
                  top: "1rem",
                  left: "1rem",
                  background: "rgba(255,255,255,0.1)",
                  border: "none",
                  borderRadius: "50%",
                  width: "32px",
                  height: "32px",
                  color: "white",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "1.2rem",
                  transition: "background 0.2s"
                }}
                onMouseOver={(e) => e.currentTarget.style.background = "rgba(255,255,255,0.2)"}
                onMouseOut={(e) => e.currentTarget.style.background = "rgba(255,255,255,0.1)"}
              >
                ✕
              </button>

              <h2 style={{ fontSize: "1.5rem", color: "#e3c878", marginBottom: "1rem", paddingRight: "1rem", borderRight: "4px solid #e3c878" }}>
                الدليل الشامل لتشغيل نسخة الـ PC
                <br />
                <span style={{ fontSize: "1rem", color: "#aaa", fontWeight: "normal" }}>(أداة Ship of Harkinian)</span>
              </h2>

              <p style={{ fontSize: "0.95rem", lineHeight: "1.7", marginBottom: "1.5rem", opacity: 0.9 }}>
                هذه الأداة لا تحاكي اللعبة، بل تعيد بناءها لتعمل كـ لعبة حاسب شخصي أصلية (Native)، مما يتيح لك اللعب بـ 60 إطاراً في الثانية (أو أعلى)، واستخدام الكاميرا الحرة، ودعم الشاشات العريضة لتجربة غامرة. مخصصة لأنظمة الويندوز، الماك، واللينكس.
              </p>

              <div style={{ display: "flex", flexDirection: "column", gap: "1.2rem" }}>
                {/* Step 1 */}
                <div style={{ background: "rgba(255,255,255,0.03)", padding: "1.2rem", borderRadius: "8px", border: "1px solid rgba(255,255,255,0.05)" }}>
                  <h4 style={{ color: "white", marginBottom: "0.5rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
                    <span style={{ background: "#e3c878", color: "black", width: "24px", height: "24px", display: "inline-flex", alignItems: "center", justifyContent: "center", borderRadius: "50%", fontSize: "0.9rem", fontWeight: "bold" }}>1</span>
                    تجهيز اللعبة الأساسية (الروم الأصلي)
                  </h4>
                  <p style={{ fontSize: "0.9rem", opacity: 0.8, marginBottom: "1rem" }}>
                    تحتاج أولاً إلى النسخة الأصلية من اللعبة (نسخة بصيغة <code>.z64</code> وتحديداً الإصدار المدعوم Ocarina of Time 1.0). وفرناها لك عبر الرابط التالي:
                  </p>
                  <a 
                    href="https://romsfun.com/download/the-legend-of-zelda-ocarina-of-time-9581/3" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "0.5rem",
                      background: "rgba(227, 200, 120, 0.15)",
                      color: "#e3c878",
                      border: "1px solid rgba(227, 200, 120, 0.4)",
                      padding: "0.5rem 1rem",
                      borderRadius: "6px",
                      textDecoration: "none",
                      fontSize: "0.85rem",
                      fontWeight: "bold",
                      transition: "all 0.2s"
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.background = "rgba(227, 200, 120, 0.25)";
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.background = "rgba(227, 200, 120, 0.15)";
                    }}
                  >
                    ⬇️ تحميل الروم الأصلي (ROM)
                  </a>
                </div>

                {/* Step 2 */}
                <div style={{ background: "rgba(255,255,255,0.03)", padding: "1.2rem", borderRadius: "8px", border: "1px solid rgba(255,255,255,0.05)" }}>
                  <h4 style={{ color: "white", marginBottom: "0.5rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
                    <span style={{ background: "#e3c878", color: "black", width: "24px", height: "24px", display: "inline-flex", alignItems: "center", justifyContent: "center", borderRadius: "50%", fontSize: "0.9rem", fontWeight: "bold" }}>2</span>
                    تحميل أداة Ship of Harkinian
                  </h4>
                  <p style={{ fontSize: "0.9rem", opacity: 0.8, marginBottom: "1rem" }}>
                    قم بتحميل الأداة الرسمية من موقع المطورين عبر منصة GitHub (اختر النسخة المطابقة لنظامك).
                  </p>
                  <a 
                    href="https://github.com/HarbourMasters/Shipwright/releases/tag/9.1.2" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={{
                      display: "inline-block",
                      background: "rgba(227, 200, 120, 0.15)",
                      color: "#e3c878",
                      border: "1px solid rgba(227, 200, 120, 0.4)",
                      padding: "0.6rem 1.2rem",
                      borderRadius: "6px",
                      textDecoration: "none",
                      fontSize: "0.9rem",
                      fontWeight: "bold",
                      transition: "all 0.2s"
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.background = "rgba(227, 200, 120, 0.25)";
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.background = "rgba(227, 200, 120, 0.15)";
                    }}
                  >
                    🚀 تحميل أداة Ship of Harkinian
                  </a>
                </div>

                {/* Step 3 */}
                <div style={{ background: "rgba(255,255,255,0.03)", padding: "1.2rem", borderRadius: "8px", border: "1px solid rgba(255,255,255,0.05)" }}>
                  <h4 style={{ color: "white", marginBottom: "0.5rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
                    <span style={{ background: "#e3c878", color: "black", width: "24px", height: "24px", display: "inline-flex", alignItems: "center", justifyContent: "center", borderRadius: "50%", fontSize: "0.9rem", fontWeight: "bold" }}>3</span>
                    استخراج ملفات اللعبة (OTR Generation)
                  </h4>
                  <p style={{ fontSize: "0.9rem", opacity: 0.8, margin: 0 }}>
                    افتح الأداة (<code>OTRGui.exe</code>) التي قمت بتحميلها. ستطلب منك الأداة تحديد مكان ملف اللعبة الأصلي (الذي جهزته في الخطوة 1). قم باختياره، وسيقوم البرنامج باستخراج الموارد وإنشاء ملف جديد باسم <code>oot.otr</code>.
                  </p>
                </div>

                {/* Step 4 */}
                <div style={{ background: "rgba(255,255,255,0.03)", padding: "1.2rem", borderRadius: "8px", border: "1px solid rgba(255,255,255,0.05)", position: "relative", overflow: "hidden" }}>
                  <div style={{ position: "absolute", right: 0, top: 0, bottom: 0, width: "4px", background: "linear-gradient(to bottom, #4CAF50, #8BC34A)" }} />
                  <h4 style={{ color: "white", marginBottom: "0.5rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
                    <span style={{ background: "#e3c878", color: "black", width: "24px", height: "24px", display: "inline-flex", alignItems: "center", justifyContent: "center", borderRadius: "50%", fontSize: "0.9rem", fontWeight: "bold" }}>4</span>
                    الانطلاق إلى هايرول!
                  </h4>
                  <p style={{ fontSize: "0.9rem", opacity: 0.8, marginBottom: "0.8rem" }}>
                    بمجرد انتهاء الخطوة السابقة، افتح ملف <code>soh.exe</code> (أو ما يعادله في الماك واللينكس) لتشغيل اللعبة.
                  </p>
                  <div style={{ background: "rgba(255, 215, 0, 0.1)", padding: "0.8rem", borderRadius: "6px", border: "1px dashed rgba(255, 215, 0, 0.3)" }}>
                    <p style={{ margin: 0, fontSize: "0.85rem", color: "#ffd700" }}>
                      <strong>✨ نصيحة ذهبية:</strong> أول ما تشتغل اللعبة، اضغط زر <code>F1</code> لفتح القائمة السحرية! من هناك فّعل (الكاميرا الحرة Free Camera، الحفظ التلقائي Autosave، وارفع الفريمات إلى 60fps) لتعيش التجربة كما يجب.
                    </p>
                  </div>
                </div>
              </div>

              <div style={{ marginTop: "2rem", textAlign: "center" }}>
                <button
                  onClick={() => setIsOpen(false)}
                  style={{
                    background: "transparent",
                    color: "white",
                    border: "1px solid rgba(255,255,255,0.2)",
                    padding: "0.8rem 2rem",
                    borderRadius: "8px",
                    cursor: "pointer",
                    fontSize: "0.9rem",
                    transition: "all 0.2s"
                  }}
                  onMouseOver={(e) => e.currentTarget.style.background = "rgba(255,255,255,0.05)"}
                  onMouseOut={(e) => e.currentTarget.style.background = "transparent"}
                >
                  إغلاق النافذة
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
