
export class Product{
    id?:number;
    name:string | undefined | null;
    size:number | undefined | null;
    price:number | undefined | null;
    stockQuantity: number | undefined | null;
    description: string | undefined | null;
    isAvailable: boolean | undefined;
    createdAt: string | undefined | null;
    modifiedAt: string | undefined | null;
    category_id: number | undefined;
    supplier_id: number | undefined;
}