export interface Product {
    id: string;
    discount: number;
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
