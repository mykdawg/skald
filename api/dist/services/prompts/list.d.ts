export declare function listPrompts(): Promise<{
    id: number;
    name: string;
    created_at: Date | null;
    updated_at: Date | null;
    prompt: import("@prisma/client/runtime/library").JsonValue | null;
}[]>;
