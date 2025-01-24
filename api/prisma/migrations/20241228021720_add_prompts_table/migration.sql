-- CreateTable
CREATE TABLE "prompts" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "prompt" JSONB,
    "created_at" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP
);

-- CreateIndex
CREATE UNIQUE INDEX "prompts_id_key" ON "prompts"("id");
