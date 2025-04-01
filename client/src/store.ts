import { writable } from 'svelte/store';

export const messages = writable<string[]>([]);
export const showOverlay = writable(false);