import { createClient } from '@supabase/supabase-js';
import { Person, Event, Project } from '../types';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL as string;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables. Check your .env file.');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// ─── Database row types (snake_case from Supabase) ───────────────────────────

export interface MemberRow {
  id: string;
  full_name: string;
  role: string;
  committee: string;
  category: Person['category'];
  image_url: string;
  bio: string;
  display_order: number;
  is_active: boolean;
  color: string | null;
  created_at: string;
  updated_at: string;
}

export interface EventRow {
  id: string;
  title: string;
  date: string;
  time: string;
  short_description: string;
  full_description: string;
  image_url: string;
  category: string;
  location: string;
  status: Event['status'];
  is_featured: boolean;
  registration_link: string;
  display_order: number;
  color: string | null;
  created_at: string;
  updated_at: string;
}

// ─── Mappers: DB row → app type ───────────────────────────────────────────────

export function rowToPerson(row: MemberRow): Person {
  return {
    id: row.id,
    fullName: row.full_name,
    role: row.role,
    committee: row.committee,
    category: row.category,
    imageUrl: row.image_url,
    bio: row.bio,
    displayOrder: row.display_order,
    isActive: row.is_active,
    color: row.color ?? undefined,
  };
}

export function rowToEvent(row: EventRow): Event {
  return {
    id: row.id,
    title: row.title,
    date: row.date,
    time: row.time,
    shortDescription: row.short_description,
    fullDescription: row.full_description,
    imageUrl: row.image_url,
    category: row.category,
    location: row.location,
    status: row.status,
    isFeatured: row.is_featured,
    registrationLink: row.registration_link,
    displayOrder: row.display_order,
    color: row.color ?? undefined,
  };
}

// ─── Mappers: app type → DB insert/update payload ────────────────────────────

export function personToRow(p: Partial<Person>): Partial<MemberRow> {
  const row: Partial<MemberRow> = {};
  if (p.fullName       !== undefined) row.full_name     = p.fullName;
  if (p.role           !== undefined) row.role          = p.role;
  if (p.committee      !== undefined) row.committee     = p.committee;
  if (p.category       !== undefined) row.category      = p.category;
  if (p.imageUrl       !== undefined) row.image_url     = p.imageUrl;
  if (p.bio            !== undefined) row.bio           = p.bio;
  if (p.displayOrder   !== undefined) row.display_order = p.displayOrder;
  if (p.isActive       !== undefined) row.is_active     = p.isActive;
  if (p.color          !== undefined) row.color         = p.color ?? null;
  return row;
}

export function eventToRow(e: Partial<Event>): Partial<EventRow> {
  const row: Partial<EventRow> = {};
  if (e.title             !== undefined) row.title             = e.title;
  if (e.date              !== undefined) row.date              = e.date;
  if (e.time              !== undefined) row.time              = e.time;
  if (e.shortDescription  !== undefined) row.short_description = e.shortDescription;
  if (e.fullDescription   !== undefined) row.full_description  = e.fullDescription;
  if (e.imageUrl          !== undefined) row.image_url         = e.imageUrl;
  if (e.category          !== undefined) row.category          = e.category;
  if (e.location          !== undefined) row.location          = e.location;
  if (e.status            !== undefined) row.status            = e.status;
  if (e.isFeatured        !== undefined) row.is_featured       = e.isFeatured;
  if (e.registrationLink  !== undefined) row.registration_link = e.registrationLink;
  if (e.displayOrder      !== undefined) row.display_order     = e.displayOrder;
  if (e.color             !== undefined) row.color             = e.color ?? null;
  return row;
}

// ─── Members API ─────────────────────────────────────────────────────────────

export const membersApi = {
  getAll: async (): Promise<Person[]> => {
    const { data, error } = await supabase
      .from('members')
      .select('*')
      .order('display_order', { ascending: true });
    if (error) throw error;
    return (data as MemberRow[]).map(rowToPerson);
  },

  getById: async (id: string): Promise<Person> => {
    const { data, error } = await supabase
      .from('members')
      .select('*')
      .eq('id', id)
      .single();
    if (error) throw error;
    return rowToPerson(data as MemberRow);
  },

  create: async (person: Omit<Person, 'id'>): Promise<Person> => {
    const { data, error } = await supabase
      .from('members')
      .insert(personToRow(person))
      .select()
      .single();
    if (error) throw error;
    return rowToPerson(data as MemberRow);
  },

  update: async (id: string, person: Partial<Person>): Promise<Person> => {
    const { data, error } = await supabase
      .from('members')
      .update(personToRow(person))
      .eq('id', id)
      .select()
      .single();
    if (error) throw error;
    return rowToPerson(data as MemberRow);
  },

  delete: async (id: string): Promise<void> => {
    const { error } = await supabase
      .from('members')
      .delete()
      .eq('id', id);
    if (error) throw error;
  },
};

// ─── Events API ──────────────────────────────────────────────────────────────

export const eventsApi = {
  getAll: async (): Promise<Event[]> => {
    const { data, error } = await supabase
      .from('events')
      .select('*')
      .order('display_order', { ascending: true });
    if (error) throw error;
    return (data as EventRow[]).map(rowToEvent);
  },

  getById: async (id: string): Promise<Event> => {
    const { data, error } = await supabase
      .from('events')
      .select('*')
      .eq('id', id)
      .single();
    if (error) throw error;
    return rowToEvent(data as EventRow);
  },

  create: async (event: Omit<Event, 'id'>): Promise<Event> => {
    const { data, error } = await supabase
      .from('events')
      .insert(eventToRow(event))
      .select()
      .single();
    if (error) throw error;
    return rowToEvent(data as EventRow);
  },

  update: async (id: string, event: Partial<Event>): Promise<Event> => {
    const { data, error } = await supabase
      .from('events')
      .update(eventToRow(event))
      .eq('id', id)
      .select()
      .single();
    if (error) throw error;
    return rowToEvent(data as EventRow);
  },

  delete: async (id: string): Promise<void> => {
    const { error } = await supabase
      .from('events')
      .delete()
      .eq('id', id);
    if (error) throw error;
  },
};

// ─── Storage / CDN helpers ───────────────────────────────────────────────────
//
//  Supabase Storage acts as a CDN automatically for public buckets.
//  Public CDN URL format:
//  https://<ref>.supabase.co/storage/v1/object/public/<bucket>/<path>

export type StorageBucket = 'members' | 'events';

/**
 * Upload a file to a Supabase Storage bucket and return its public CDN URL.
 * @param bucket  - 'members' or 'events'
 * @param file    - The File object from an <input type="file">
 * @param folder  - Optional sub-folder, e.g. the record id
 */
export async function uploadImage(
  bucket: StorageBucket,
  file: File,
  folder = ''
): Promise<string> {
  const ext = file.name.split('.').pop();
  const fileName = `${folder ? folder + '/' : ''}${Date.now()}.${ext}`;

  const { error } = await supabase.storage
    .from(bucket)
    .upload(fileName, file, { upsert: true, cacheControl: '3600' });

  if (error) throw error;

  const { data } = supabase.storage.from(bucket).getPublicUrl(fileName);
  return data.publicUrl;
}

/**
 * Delete a file from a Supabase Storage bucket by its full CDN URL.
 * Safe to call even if the URL is empty or not from this bucket.
 */
export async function deleteImage(
  bucket: StorageBucket,
  publicUrl: string
): Promise<void> {
  if (!publicUrl) return;

  // Extract the path after "/public/<bucket>/"
  const marker = `/object/public/${bucket}/`;
  const idx = publicUrl.indexOf(marker);
  if (idx === -1) return; // not our CDN URL, skip

  const filePath = publicUrl.slice(idx + marker.length);
  const { error } = await supabase.storage.from(bucket).remove([filePath]);
  if (error) throw error;
}

/**
 * Build a public CDN URL without making a network request.
 * Useful for displaying an already-stored image.
 */
export function getPublicUrl(bucket: StorageBucket, filePath: string): string {
  const { data } = supabase.storage.from(bucket).getPublicUrl(filePath);
  return data.publicUrl;
}

// ─── Project row type ────────────────────────────────────────────────────────

export interface ProjectRow {
  id: string;
  title: string;
  category: string;
  image_url: string;
  description: string;
  tags: string[];
  link: string;
  github: string;
  is_featured: boolean;
  display_order: number;
  color: string | null;
  created_at: string;
  updated_at: string;
}

export function rowToProject(row: ProjectRow): Project {
  return {
    id: row.id,
    title: row.title,
    category: row.category,
    imageUrl: row.image_url,
    description: row.description,
    tags: row.tags ?? [],
    link: row.link,
    github: row.github,
    isFeatured: row.is_featured,
    displayOrder: row.display_order,
    color: row.color ?? undefined,
  };
}

export function projectToRow(p: Partial<Project>): Partial<ProjectRow> {
  const row: Partial<ProjectRow> = {};
  if (p.title        !== undefined) row.title         = p.title;
  if (p.category     !== undefined) row.category      = p.category;
  if (p.imageUrl     !== undefined) row.image_url     = p.imageUrl;
  if (p.description  !== undefined) row.description   = p.description;
  if (p.tags         !== undefined) row.tags          = p.tags;
  if (p.link         !== undefined) row.link          = p.link;
  if (p.github       !== undefined) row.github        = p.github;
  if (p.isFeatured   !== undefined) row.is_featured   = p.isFeatured;
  if (p.displayOrder !== undefined) row.display_order = p.displayOrder;
  if (p.color        !== undefined) row.color         = p.color ?? null;
  return row;
}

// ─── Projects API ─────────────────────────────────────────────────────────────

export const projectsApi = {
  getAll: async (): Promise<Project[]> => {
    const { data, error } = await supabase
      .from('projects')
      .select('*')
      .order('display_order', { ascending: true });
    if (error) throw error;
    return (data as ProjectRow[]).map(rowToProject);
  },

  getById: async (id: string): Promise<Project> => {
    const { data, error } = await supabase
      .from('projects')
      .select('*')
      .eq('id', id)
      .single();
    if (error) throw error;
    return rowToProject(data as ProjectRow);
  },

  create: async (project: Omit<Project, 'id'>): Promise<Project> => {
    const { data, error } = await supabase
      .from('projects')
      .insert(projectToRow(project))
      .select()
      .single();
    if (error) throw error;
    return rowToProject(data as ProjectRow);
  },

  update: async (id: string, project: Partial<Project>): Promise<Project> => {
    const { data, error } = await supabase
      .from('projects')
      .update(projectToRow(project))
      .eq('id', id)
      .select()
      .single();
    if (error) throw error;
    return rowToProject(data as ProjectRow);
  },

  delete: async (id: string): Promise<void> => {
    const { error } = await supabase
      .from('projects')
      .delete()
      .eq('id', id);
    if (error) throw error;
  },
};
