import { useState, useEffect } from 'react';
import { membersApi, eventsApi, projectsApi } from '../lib/supabase';
import { Person, Event, Project } from '../types';

// ─── Members ─────────────────────────────────────────────────────────────────

export function useMembers() {
  const [members, setMembers] = useState<Person[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    membersApi.getAll()
      .then(setMembers)
      .catch((err) => setError(err.message ?? 'Failed to load members'))
      .finally(() => setLoading(false));
  }, []);

  return { members, loading, error };
}

// ─── Events ──────────────────────────────────────────────────────────────────

export function useEvents() {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    eventsApi.getAll()
      .then(setEvents)
      .catch((err) => setError(err.message ?? 'Failed to load events'))
      .finally(() => setLoading(false));
  }, []);

  return { events, loading, error };
}

// ─── Projects ─────────────────────────────────────────────────────────────────

export function useProjects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    projectsApi.getAll()
      .then(setProjects)
      .catch((err) => setError(err.message ?? 'Failed to load projects'))
      .finally(() => setLoading(false));
  }, []);

  return { projects, loading, error };
}
