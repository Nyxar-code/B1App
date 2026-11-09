export type HymnLanguage = "English" | "Yoruba" | "Bilingual";

export type HymnCopyrightStatus = "public-domain" | "licensed" | "church-original" | "restricted" | "unknown";

export type HymnPublicationState = "draft" | "published" | "archived";

export interface HymnVerse {
  order: number;
  label?: string;
  text: string;
  language?: string;
}

export interface Hymn {
  id: string;
  hymnNumber: number;
  title: string;
  language: HymnLanguage;
  license?: string;
  attribution?: string;
  lyrics?: string;
  verses?: HymnVerse[];
  englishLyrics?: string;
  yorubaLyrics?: string;
  author?: string;
  composer?: string;
  translator?: string;
  year?: number;
  source?: string;
  copyrightStatus: HymnCopyrightStatus;
  category: string;
  publicationState: HymnPublicationState;
  active: boolean;
  collection?: string;
  denomination?: string;
  tags?: string[];
  tune?: string;
  melody?: string;
  audio?: string;
  chords?: string;
  chorus?: string;
  arrangement?: string;
  notes?: string;
}

export type HymnInput = Omit<Hymn, "id">;

export interface HymnQuery {
  churchId?: string;
  publicationState?: HymnPublicationState;
  includeInactive?: boolean;
}

export interface HymnRepository {
  list(query?: HymnQuery): Promise<Hymn[]>;
  getById(id: string, query?: HymnQuery): Promise<Hymn | null>;
}

export interface HymnAdminRepository extends HymnRepository {
  create(hymn: HymnInput): Promise<Hymn>;
  update(id: string, hymn: HymnInput): Promise<Hymn>;
  delete(id: string): Promise<void>;
}
