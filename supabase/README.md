## Setting up Supabase

To go through the Supabase setup, CD to the root of the directory and run `yarn setup`.

Here are some guides from the official Supabase documentation:

- [Local Development](https://supabase.com/docs/guides/getting-started/local-development)
- [Managing Environments](https://supabase.com/docs/guides/cli/managing-environments)

NOTE: This template assumes you have a public storage bucket with the name `avatars` - Make sure to create it if it doesn't exist.

After setting it up, you can use the [scripts](#scripts) to manage the common tasks related to Supabase.

## Scripts

NOTE: Scripts starting with underscore (`_`) are not meant to be used directly.

You can also run these scripts from the root by adding `supa` after yarn. So `yarn supa start` or `yarn supa g`.

#### Link Project

Links your remote Supabase project. Set `NEXT_PUBLIC_SUPABASE_PROJECT_ID` in your `.env` to your Supabase's instance before running.

```shell
yarn link-project
```

#### Generate

Generates types from your local Docker Supabase instance.

```shell
yarn generate
yarn g #alias
```

- [Reference](https://supabase.com/docs/guides/api/rest/generating-types)

#### Generate Remote

Generates types from your remote Supabase instance using your project ID specific id in the root env files.

```shell
yarn generate:remote
```

### Type Helpers

`supabase/helpers` file has additional type definition helpers as shown in Supabase's [documentation](https://www.supabase.com/docs/reference/javascript/typescript-support) that can be imported through out the project.

#### New Migration

Generates a new migration by diffing against the db.

```shell
yarn migration:diff <MIGRATION_NAME>
```

- [Reference](https://supabase.com/docs/reference/cli/supabase-db-diff)

#### Start

Start local Supabase instance.

```shell
yarn start
```

#### Stop

Stop local Supabase instance.

```shell
yarn stop
```

#### Reset

Reset local Supabase DB.

```shell
yarn reset
```

#### Lint

```shell
yarn lint
```
