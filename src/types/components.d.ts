export interface DonateListItem {
    title: string;
    value: string;
    info?: {
        address?: string;
        holder?: string;
        special?: string;
    }
}