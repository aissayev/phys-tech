create table public.installs (
  user_id uuid not null references auth.users on delete cascade,
  expo_tokens text[] DEFAULT ARRAY[]::text[], -- array of text tokens
  primary key (user_id)
);
