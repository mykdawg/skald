export declare function listLLMs(): Promise<{
    id: number;
    name: string;
    created_at: Date | null;
    updated_at: Date | null;
}[]>;
