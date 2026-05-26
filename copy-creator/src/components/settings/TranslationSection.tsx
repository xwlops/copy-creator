import { useTranslation } from "react-i18next";
import IosSelect from "../IosSelect";

interface TranslationSectionProps {
  localEngine: string;
  setLocalEngine: (engine: string) => void;
  localApiUrl: string;
  setLocalApiUrl: (url: string) => void;
  localApiKey: string;
  setLocalApiKey: (key: string) => void;
  localModel: string;
  setLocalModel: (model: string) => void;
  localMicrosoftApiKey: string;
  setLocalMicrosoftApiKey: (key: string) => void;
  localMicrosoftRegion: string;
  setLocalMicrosoftRegion: (region: string) => void;
  localGoogleApiKey: string;
  setLocalGoogleApiKey: (key: string) => void;
  localTranslateProxy: string;
  setLocalTranslateProxy: (proxy: string) => void;
}

export function TranslationSection({
  localEngine,
  setLocalEngine,
  localApiUrl,
  setLocalApiUrl,
  localApiKey,
  setLocalApiKey,
  localModel,
  setLocalModel,
  localMicrosoftApiKey,
  setLocalMicrosoftApiKey,
  localMicrosoftRegion,
  setLocalMicrosoftRegion,
  localGoogleApiKey,
  setLocalGoogleApiKey,
  localTranslateProxy,
  setLocalTranslateProxy,
}: TranslationSectionProps) {
  const { t } = useTranslation();

  const engineOptions = [
    { value: "google", label: t("settings.googleTranslation") },
    { value: "microsoft", label: t("settings.microsoftTranslation") },
    { value: "ai", label: t("settings.aiTranslation") },
  ];

  return (
    <div className="settings-section">
      <div className="settings-section-title">{t("settings.translation")}</div>
      <div className="settings-card">
        <div className="settings-row">
          <div className="settings-row-label">{t("settings.defaultEngine")}</div>
          <IosSelect
            value={localEngine}
            options={engineOptions}
            onChange={setLocalEngine}
          />
        </div>
        <div className="settings-row vertical">
          <div className="settings-row-label">{t("settings.translateProxy")}</div>
          <input
            className="settings-input"
            value={localTranslateProxy}
            onChange={(e) => setLocalTranslateProxy(e.target.value)}
            placeholder={t("settings.translateProxyPlaceholder")}
          />
        </div>
        <div className="settings-section-title" style={{ fontSize: "12px", marginTop: "8px" }}>{t("settings.googleConfig")}</div>
        <div className="settings-row vertical">
          <div className="settings-row-label">{t("settings.googleApiKey")}</div>
          <input
            className="settings-input"
            type="password"
            value={localGoogleApiKey}
            onChange={(e) => setLocalGoogleApiKey(e.target.value)}
            placeholder={t("settings.googleNote")}
          />
        </div>
        <div className="settings-section-title" style={{ fontSize: "12px", marginTop: "8px" }}>{t("settings.microsoftConfig")}</div>
        <div className="settings-row vertical">
          <div className="settings-row-label">{t("settings.microsoftApiKey")}</div>
          <input
            className="settings-input"
            type="password"
            value={localMicrosoftApiKey}
            onChange={(e) => setLocalMicrosoftApiKey(e.target.value)}
            placeholder={t("settings.microsoftNote")}
          />
        </div>
        <div className="settings-row vertical">
          <div className="settings-row-label">{t("settings.microsoftRegion")}</div>
          <input
            className="settings-input"
            value={localMicrosoftRegion}
            onChange={(e) => setLocalMicrosoftRegion(e.target.value)}
            placeholder="eastasia"
          />
        </div>
        <div className="settings-section-title" style={{ fontSize: "12px", marginTop: "8px" }}>{t("settings.aiConfig")}</div>
        <div className="settings-row vertical">
          <div className="settings-row-label">{t("settings.apiUrl")}</div>
          <input
            className="settings-input"
            value={localApiUrl}
            onChange={(e) => setLocalApiUrl(e.target.value)}
            placeholder={t("settings.apiUrlPlaceholder")}
          />
        </div>
        <div className="settings-row vertical">
          <div className="settings-row-label">{t("settings.apiKey")}</div>
          <input
            className="settings-input"
            type="password"
            value={localApiKey}
            onChange={(e) => setLocalApiKey(e.target.value)}
            placeholder={t("settings.apiKey")}
          />
        </div>
        <div className="settings-row vertical">
          <div className="settings-row-label">{t("settings.model")}</div>
          <input
            className="settings-input"
            value={localModel}
            onChange={(e) => setLocalModel(e.target.value)}
            placeholder={t("settings.model")}
          />
        </div>
      </div>
    </div>
  );
}
