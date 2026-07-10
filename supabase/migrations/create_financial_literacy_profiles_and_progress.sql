-- Ram Ready Financial Futures — Supabase schema
-- IMPORTANT: This must run against a SEPARATE Supabase project created for
-- Financial-Literacy-Course. Do not reuse the Digital-Literacy-Course-
-- project, its URL, its keys, or its migrations. See SUPABASE-SETUP.md.
--
-- Stores bounded profile tags and simulation ranges only — never bank
-- credentials, account numbers, SSNs, or exact balances.

create extension if not exists "pgcrypto";

create table if not exists public.learner_profiles (
  user_id uuid primary key references auth.users (id) on delete cascade,
  display_name text,
  presentation_id text check (presentation_id in ('man', 'woman')),
  avatar_style text,
  values_tags text[] default '{}',
  interest_tags text[] default '{}',
  career_direction text,
  life_vision_tags text[] default '{}',
  financial_goal text,
  starting_income_range text,
  starting_savings_range text,
  starting_debt_range text,
  ai_personalization_enabled boolean not null default false,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.course_progress (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users (id) on delete cascade,
  path text not null check (path in ('foundations', 'wealth-quest')),
  current_node_id text,
  completed_node_ids text[] default '{}',
  stars jsonb default '{}'::jsonb,
  simulator_state jsonb default '{}'::jsonb,
  updated_at timestamptz not null default now(),
  unique (user_id, path)
);

create table if not exists public.story_choices (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users (id) on delete cascade,
  path text not null check (path in ('foundations', 'wealth-quest')),
  node_id text not null,
  choice_id text not null,
  chosen_at timestamptz not null default now()
);

create table if not exists public.achievements (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users (id) on delete cascade,
  achievement_id text not null,
  earned_at timestamptz not null default now(),
  unique (user_id, achievement_id)
);

create table if not exists public.completion_records (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users (id) on delete cascade,
  path text not null check (path in ('foundations', 'wealth-quest', 'full-course')),
  completed_at timestamptz not null default now(),
  unique (user_id, path)
);

alter table public.learner_profiles enable row level security;
alter table public.course_progress enable row level security;
alter table public.story_choices enable row level security;
alter table public.achievements enable row level security;
alter table public.completion_records enable row level security;

create policy "learner_profiles_owner_select" on public.learner_profiles
  for select using (auth.uid() = user_id);
create policy "learner_profiles_owner_insert" on public.learner_profiles
  for insert with check (auth.uid() = user_id);
create policy "learner_profiles_owner_update" on public.learner_profiles
  for update using (auth.uid() = user_id) with check (auth.uid() = user_id);
create policy "learner_profiles_owner_delete" on public.learner_profiles
  for delete using (auth.uid() = user_id);

create policy "course_progress_owner_select" on public.course_progress
  for select using (auth.uid() = user_id);
create policy "course_progress_owner_insert" on public.course_progress
  for insert with check (auth.uid() = user_id);
create policy "course_progress_owner_update" on public.course_progress
  for update using (auth.uid() = user_id) with check (auth.uid() = user_id);
create policy "course_progress_owner_delete" on public.course_progress
  for delete using (auth.uid() = user_id);

create policy "story_choices_owner_select" on public.story_choices
  for select using (auth.uid() = user_id);
create policy "story_choices_owner_insert" on public.story_choices
  for insert with check (auth.uid() = user_id);
create policy "story_choices_owner_delete" on public.story_choices
  for delete using (auth.uid() = user_id);

create policy "achievements_owner_select" on public.achievements
  for select using (auth.uid() = user_id);
create policy "achievements_owner_insert" on public.achievements
  for insert with check (auth.uid() = user_id);
create policy "achievements_owner_delete" on public.achievements
  for delete using (auth.uid() = user_id);

create policy "completion_records_owner_select" on public.completion_records
  for select using (auth.uid() = user_id);
create policy "completion_records_owner_insert" on public.completion_records
  for insert with check (auth.uid() = user_id);
create policy "completion_records_owner_delete" on public.completion_records
  for delete using (auth.uid() = user_id);
