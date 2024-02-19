export interface Menu{
    sectionName: string;
    icon: string;
    url: string | null;
    items: ItemMenu[] | null;
}

export interface ItemMenu{
    name: string;
    url: string;
    icon: string;
}

export const sidebarMenu: Menu[] = [
    {
        sectionName: "Administración",
        icon: "",
        url: "",
        items: [
            {
                name: "Alumnos",
                url: "#",
                icon: "alumnosIcon"
            },
            {
                name: "Clases",
                url: "#",
                icon: "pencilIcon"
            },
            {
                name: "Horarios",
                url: "#",
                icon: "calendarIcon"
            },
            {
                name: "Inventario",
                url: "#",
                icon: "inventoryIcon"
            },
            {
                name: "Ingresos",
                url: "#",
                icon: "incomeIcon"
            },
            {
                name: "Egresos",
                url: "#",
                icon: "outflowIcon"
            }
        ]
    }, 
    {
        sectionName: "Punto de Venta",
        url: "#",
        icon: "usersvg",
        items: [
            {
                name: "Mostrador",
                url: "#",
                icon: "receiptIcon"
            },
            {
                name: "Especializada",
                url: "#",
                icon: "walletIcon"
            }
        ]
    }
]