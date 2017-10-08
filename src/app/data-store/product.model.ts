export interface Product {
    id: string;
    label: string;
    imageUrl: string;
    oldPrice: number;
    price: number;
    description: string;
    starRating: number;
    retailer: string;
    status: boolean
    timer?: string;
    shipping: boolean;
}
