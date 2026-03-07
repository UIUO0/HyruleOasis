"use client";

import Link from "next/link";
import { useState } from "react";

export function PlatformPickerButton() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button type="button" className="cta" style={{ display: "inline-flex" }} onClick={() => setOpen(true)}>
        منصتك مو جاهزة؟ اضغط هنا
      </button>
      {open ? (
        <div className="platform-modal-backdrop" role="presentation" onClick={() => setOpen(false)}>
          <div
            className="platform-modal"
            role="dialog"
            aria-modal="true"
            aria-label="اختيار نوع الجهاز"
            onClick={(event) => event.stopPropagation()}
          >
            <p className="kicker">اختيار المنصة</p>
            <h3 className="title" style={{ marginTop: "0.35rem" }}>
              اختر جهازك
            </h3>
            <div className="platform-modal-actions">
              <Link className="cta" href="/guide/emulation/pc" onClick={() => setOpen(false)}>
                بيسي
              </Link>
              <Link className="cta" href="/guide/emulation/mobile" onClick={() => setOpen(false)}>
                جوال
              </Link>
            </div>
            <button type="button" className="platform-modal-close" onClick={() => setOpen(false)}>
              إغلاق
            </button>
          </div>
        </div>
      ) : null}
    </>
  );
}
