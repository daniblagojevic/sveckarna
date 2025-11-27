import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_forms_blocks_email_width" AS ENUM('1', '2', '3', '4', '5', '6', '7', '8', '9', '10');
  ALTER TABLE "forms_blocks_email" ADD COLUMN "width" "enum_forms_blocks_email_width";
  ALTER TABLE "forms_blocks_email" DROP COLUMN "placeholder";`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "forms_blocks_email" ADD COLUMN "placeholder" varchar;
  ALTER TABLE "forms_blocks_email" DROP COLUMN "width";
  DROP TYPE "public"."enum_forms_blocks_email_width";`)
}
