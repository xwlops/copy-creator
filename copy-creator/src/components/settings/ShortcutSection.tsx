import { useTranslation } from "react-i18next";

interface ShortcutSectionProps {
  localShortcutKey: string;
  setLocalShortcutKey: (key: string) => void;
  recording: boolean;
  startRecording: () => void;
  stopRecording: () => void;
  localRadialMenuEnabled: boolean;
  setLocalRadialMenuEnabled: (enabled: boolean) => void;
  localRadialKeyboardShortcut: string;
  setLocalRadialKeyboardShortcut: (key: string) => void;
  radialKbRecording: boolean;
  startRadialKbRecording: () => void;
  stopRadialKbRecording: () => void;
  localTranslateShortcutKey: string;
  setLocalTranslateShortcutKey: (key: string) => void;
  translateRecording: boolean;
  startTranslateRecording: () => void;
  stopTranslateRecording: () => void;
}

export function ShortcutSection({
  localShortcutKey,
  recording,
  startRecording,
  stopRecording,
  localRadialMenuEnabled,
  setLocalRadialMenuEnabled,
  localRadialKeyboardShortcut,
  radialKbRecording,
  startRadialKbRecording,
  stopRadialKbRecording,
  localTranslateShortcutKey,
  translateRecording,
  startTranslateRecording,
  stopTranslateRecording,
}: ShortcutSectionProps) {
  const { t } = useTranslation();

  return (
    <div className="settings-section">
      <div className="settings-section-title">{t("settings.shortcut")}</div>
      <div className="settings-card">
        <div className="settings-row">
          <div className="settings-row-label">{t("settings.windowShortcut")}</div>
          <div className="shortcut-setting">
            <div className="shortcut-keyboard-row">
              <span className={`shortcut-display${recording ? " recording" : ""}`}>
                {recording ? t("settings.recording") : (localShortcutKey || t("settings.shortcutPlaceholder"))}
              </span>
              <button
                className="shortcut-record-btn"
                onClick={recording ? stopRecording : startRecording}
              >
                {recording ? t("settings.stopRecord") : t("settings.recordShortcut")}
              </button>
            </div>
            <span className="shortcut-hint">{t("settings.keyboardOnlyHint")}</span>
          </div>
        </div>
        <div className="settings-row">
          <div className="settings-row-label">{t("settings.radialShortcut")}</div>
          <div className="radial-shortcut-right">
            <span className="radial-shortcut-key">{t("settings.radialShortcutDesc")}</span>
            <button
              className={`toggle-switch ${localRadialMenuEnabled ? "on" : "off"}`}
              onClick={() => setLocalRadialMenuEnabled(!localRadialMenuEnabled)}
              title={localRadialMenuEnabled ? t("common.on") : t("common.off")}
            >
              <span className="toggle-thumb" />
            </button>
          </div>
        </div>
        <div className="settings-row">
          <div className="settings-row-label">{t("settings.radialKeyboardShortcut")}</div>
          <div className="shortcut-setting">
            <div className="shortcut-keyboard-row">
              <span className={`shortcut-display${radialKbRecording ? " recording" : ""}`}>
                {radialKbRecording ? t("settings.recording") : (localRadialKeyboardShortcut || t("settings.radialKeyboardShortcutPlaceholder"))}
              </span>
              <button
                className="shortcut-record-btn"
                onClick={radialKbRecording ? stopRadialKbRecording : startRadialKbRecording}
              >
                {radialKbRecording ? t("settings.stopRecord") : t("settings.recordShortcut")}
              </button>
            </div>
            <span className="shortcut-hint">{t("settings.keyboardOnlyHint")}</span>
          </div>
        </div>
        <div className="settings-row">
          <div className="settings-row-label">{t("settings.translateShortcut")}</div>
          <div className="shortcut-setting">
            <div className="shortcut-keyboard-row">
              <span className={`shortcut-display${translateRecording ? " recording" : ""}`}>
                {translateRecording ? t("settings.recording") : (localTranslateShortcutKey || t("settings.translateShortcutPlaceholder"))}
              </span>
              <button
                className="shortcut-record-btn"
                onClick={translateRecording ? stopTranslateRecording : startTranslateRecording}
              >
                {translateRecording ? t("settings.stopRecord") : t("settings.recordShortcut")}
              </button>
            </div>
            <span className="shortcut-hint">{t("settings.keyboardOnlyHint")}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
