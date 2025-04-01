export interface CreateLLMParam {
    name: string;
}
export declare function createLLM({ name }: CreateLLMParam): Promise<{
    id: number;
    name: string;
    created_at: Date | null;
    updated_at: Date | null;
}>;
