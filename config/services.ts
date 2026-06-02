// data/services.ts

export type Service = {
    title: string;
    desc: string;
    image: string;
};

export const services: Service[] = [
    {
        title: "Диагностика",
        desc: "Компьютерная и визуальная диагностика всех систем",
        image: "/services/diagnostics.jpg"
    },
    {
        title: "Техническое обслуживание",
        desc: "ТО-1, ТО-2, замена масла, фильтров, тормозов",
        image: "/services/maintenance.jpg"
    },
    {
        title: "Ремонт двигателя",
        desc: "Капитальный ремонт, ГРМ, турбины, охлаждение",
        image: "/services/engine.jpg"
    },
    {
        title: "Ходовая часть",
        desc: "Подвеска, рулевое управление, ступицы, ШРУСы",
        image: "/services/suspension.jpg"
    },
    {
        title: "Электроника",
        desc: "ЭБУ, датчики, аккумуляторы, генераторы",
        image: "/services/electronics.jpg"
    },
    {
        title: "Кузовной ремонт",
        desc: "Покраска, рихтовка, полировка, антикоррозия",
        image: "/services/body.jpg"
    },
];