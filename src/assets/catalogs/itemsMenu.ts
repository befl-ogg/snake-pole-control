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
                url: "/admin/alumnos",
                icon: "alumnosIcon"
            },
            {
                name: "Clases",
                url: "/admin/clases",
                icon: "pencilIcon"
            },
            {
                name: "Horarios",
                url: "/admin/horarios",
                icon: "calendarIcon"
            },
            {
                name: "Inventario",
                url: "/admin/inventario/dashboard",
                icon: "inventoryIcon"
            },
            {
                name: "Ingresos",
                url: "/admin/ingresos",
                icon: "incomeIcon"
            },
            {
                name: "Egresos",
                url: "/admin/egresos",
                icon: "outflowIcon"
            }
        ]
    }, 
    {
        sectionName: "Punto de Venta",
        url: "",
        icon: "",
        items: [
            {
                name: "Mostrador",
                url: "/ventas/mostrador",
                icon: "receiptIcon"
            },
            {
                name: "Especializada",
                url: "/ventas/especializada",
                icon: "walletIcon"
            }
        ]
    }
]