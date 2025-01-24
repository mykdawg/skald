/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `prompts` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "prompts_name_key" ON "prompts"("name");
