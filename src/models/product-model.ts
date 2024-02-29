export interface Product{
    id: number;
    name: string;
    description: string;
    price: number;
    code: string;
}

export const productDetail: Product = {
    id: 1,
    name: 'Product',
    description: 'Product description',
    price: 55,
    code: 's2342342423'
};

export const productCatalog: Array<Product> = [
    {
        id: 1,
        name: 'Ciel 500ml',
        description: 'Agua ciel 500ml',
        price: 8,
        code: '23234234567'
    },
    {
        id: 2,
        name: 'Monster',
        description: 'Bebida energética 500ml',
        price: 45,
        code: '2342355676745'
    },
    {
        id: 3,
        name: 'Top SnakePole',
        description: 'Top branding SPF',
        price: 55,
        code: '5768376076934'
    },
    {
        id: 4,
        name: 'Gorra',
        description: 'Gorra negra branding SPF',
        price: 55,
        code: '25346089732457'
    },
    {
        id: 5,
        name: 'Gorra',
        description: 'Gorra blanca branding SPF',
        price: 55,
        code: '2534608973212'
    }
];