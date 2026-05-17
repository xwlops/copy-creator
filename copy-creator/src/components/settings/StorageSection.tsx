import { useState } from "react";
import { useTranslation } from "react-i18next";
import { invoke } from "@tauri-apps/api/core";
import { relaunch } from "@tauri-apps/plugin-process";
import IosSelect from "../IosSelect";

interface StorageSectionProps {
  storagePath: string;
  setStoragePath: (path: string) => void;
  localRetention: string;
  setLocalRetention: (retention: string) => void;
}

export function StorageSection({
  storagePath,
  setStoragePath,
  localRetention,
  setLocalRetention,
}: StorageSectionProps) {
  const { t } = useTranslation();
  const [needRestart, setNeedRestart] = useState(false);

  const retentionOptions = [
    { value: "1week", label: t("settings.retention1week") },
    { value: "1month", label: t("settings.retention1month") },
    { value: "3months", label: t("settings.retention3months") },
  ];

  return (
    <div className="settings-section">
      <div className="settings-section-title">{t("settings.storage")}</div>
      <div className="settings-card">
        <div className="settings-row vertical">
          <div className="settings-row-label">{t("settings.storagePath")}</div>
          <div className="settings-storage-row">
            <span className="settings-storage-path">{storagePath}</span>
            <button
              className="settings-storage-btn"
              onClick={async () => {
                try {
                  const folder = await invoke<string>("select_storage_folder");
                  await invoke("set_setting", { key: "storage_path", value: folder });
                  setStoragePath(folder);
                  setNeedRestart(true);
                } catch {}
              }}
            >
              {t("settings.changeFolder")}
            </button>
          </div>
          <div className="settings-storage-hint">
            {t("settings.storagePathHint")}
          </div>
          {needRestart && (
            <div className="settings-restart-hint">
              <span>{t("settings.restartHint")}</span>
              <button
                className="settings-restart-btn"
                onClick={() => relaunch()}
              >
                {t("settings.restartNow")}
              </button>
            </div>
          )}
        </div>
        <div className="settings-row">
          <div className="settings-row-label">{t("settings.fileRetention")}</div>
          <IosSelect
            value={localRetention}
            options={retentionOptions}
            onChange={setLocalRetention}
          />
        </div>
      </div>
    </div>
  );
}
