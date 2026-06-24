-- Notify the lead-created Edge Function whenever a row is inserted into
-- public.leads. The function posts a message to Slack.
--
-- Optional hardening: store a shared secret in Vault so the function can
-- reject unauthenticated calls:
--   select vault.create_secret('<random-value>', 'lead_webhook_secret');
-- and set the same value as the function's WEBHOOK_SECRET env var.

create extension if not exists pg_net;

create or replace function public.notify_lead_created()
returns trigger
language plpgsql
security definer
set search_path = public, extensions, net, vault
as $$
declare
  v_url text := 'https://ccdadmcqyoxexmjkslql.supabase.co/functions/v1/lead-created';
  v_secret text;
  v_headers jsonb := jsonb_build_object('Content-Type', 'application/json');
begin
  begin
    select decrypted_secret into v_secret
    from vault.decrypted_secrets
    where name = 'lead_webhook_secret'
    limit 1;
  exception when others then
    v_secret := null;
  end;

  if v_secret is not null then
    v_headers := v_headers || jsonb_build_object('x-webhook-secret', v_secret);
  end if;

  perform net.http_post(
    url := v_url,
    headers := v_headers,
    body := jsonb_build_object(
      'type', tg_op,
      'table', tg_table_name,
      'schema', tg_table_schema,
      'record', to_jsonb(new)
    )
  );

  return new;
end;
$$;

drop trigger if exists on_lead_created on public.leads;

create trigger on_lead_created
after insert on public.leads
for each row
execute function public.notify_lead_created();
