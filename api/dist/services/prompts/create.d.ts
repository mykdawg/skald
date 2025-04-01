export interface CreatePromptParam {
    name: string;
    prompt: string;
}
export declare function createPrompt({ name, prompt }: CreatePromptParam): Promise<{
    id: number;
    name: string;
    created_at: Date | null;
    updated_at: Date | null;
    prompt: import("@prisma/client/runtime/library").JsonValue | null;
}>;
