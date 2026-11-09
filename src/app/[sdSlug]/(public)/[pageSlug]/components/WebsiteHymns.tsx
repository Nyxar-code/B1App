import { HymnsPage } from "@/app/[sdSlug]/mobile/components/screens/HymnsPage";
import { HymnDetail } from "@/app/[sdSlug]/mobile/components/details/HymnDetail";
import styles from "./WebsiteHymns.module.css";

export function WebsiteHymns({ churchId, hymnId }: { churchId?: string; hymnId?: string }) {
  return (
    <div className={styles.reader}>
      {hymnId
        ? <HymnDetail key={hymnId} id={hymnId} churchId={churchId} listHref="/hymns" />
        : <HymnsPage churchId={churchId} listHref="/hymns" />}
    </div>
  );
}
