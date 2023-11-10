import { Categoria } from "../interfaces/categoria";

export const CATEGORIAS: Categoria[] = [
    {
        nombre: 'Hambuguesas',
        id: 1,
        fotoUrl: "https://www.shutterstock.com/image-photo/beef-burgers-on-wooden-plate-260nw-1668890842.jpg",
        productos: [{
          nombre:"Hamburguesa con queso",
          precio: 1000,
          descripcion: "",
          imagen: "https://media.istockphoto.com/id/1319396810/es/foto/deliciosa-hamburguesa-a-la-parrilla-aislada-sobre-fondo-blanco-hamburguesa-de-comida-r%C3%A1pida.jpg?s=612x612&w=0&k=20&c=8QCeu3jhj6Dfz-qfTpKoUq1hlaMo_uRGL38PNfdooVY="
        },
        {
          nombre:"Hamburguesa especial",
          precio: 1500,
          descripcion: "",
          imagen: "https://www.jycdelicias.co/wp-content/uploads/2018/02/hamburguesa-especial.jpg"
        },
        {
          nombre:"Hamburguesa vegana",
          precio: 1300,
          descripcion: "",
          imagen: "https://www.conasi.eu/blog/wp-content/uploads/2022/05/hamburguesa-vegana-1.jpg"
        },
        {
          nombre:"Hamburguesa celíaca",
          precio: 1250,
          descripcion: "",
          imagen: "https://unareceta.com/wp-content/uploads/2017/09/receta-de-hamburguesa-vegana.jpg"
        },
        {
          nombre:"Hamburguesa americana",
          precio: 3500,
          descripcion: "",
          imagen: "https://okdiario.com/img/2020/01/17/receta-de-hamburguesa-americana-de-ternera.jpg"
        },
        {
          nombre:"Medallón platero",
          precio: 2000,
          descripcion: "",
          imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMwVfjqU49AojFQQdN4LDskagO_tDvUsR2FmE9V2gzWP7Q8JNSiKX5Oc92zPjsXH_Adm8&usqp=CAU"
        }]
    },
    {
        nombre: 'Pizzas',
        id: 2,
        fotoUrl: "https://img-global.cpcdn.com/recipes/5422e9144d489156/1200x630cq70/photo.jpg",
        productos: [
          {
            nombre: 'Pizza común',
            precio: 1000,
            descripcion: "Pizza.",
            imagen:
              'https://i0.wp.com/cremigal.com/wp-content/uploads/2022/04/CREMIGAL-10-scaled.jpg?fit=2560%2C1707&ssl=1',
          },
          {
            nombre: 'Pizza especial',
            precio: 1200,
            descripcion: "Típica pizza estilo porteño, con muchos morrones.",
            imagen:
              'https://images-gmi-pmc.edge-generalmills.com/fce31bdd-1931-4f30-adef-a5bac0864676.jpg',
          },
          {
            nombre: 'Pizza 3 quesos',
            precio: 1300,
            descripcion: "Pizza que combina los mejores quesos: provolone, muzarella y roquefort.",
            imagen:
              'https://assets.delirec.com/images%2FTEraLXukRvSC6KZhK84YbeBgprI3%2Frecipe%2F185e4fd8-b788-490e-a96f-f83a532c16ed-Pizza-3-queijos-com-Mel-Org%C3%A2nico-%F0%9F%A7%80%F0%9F%8D%AF-gallery-0',
          },
        ]
    },
    {
        nombre: 'Postres',
        id: 3,
        fotoUrl: "data:image/jpeg;base64,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",
        productos: [
          {
            nombre: 'Tiramisú',
            precio: 800,
            descripcion: "Clasico tiramisú al estilo italiano.",
            imagen: 'https://www.gourmet.cl/wp-content/uploads/2011/04/tiramisu1.jpg',
          },
          {
            nombre: 'Chocotorta',
            precio: 800,
            descripcion: "Porción de chocotorta.",
            imagen:
              'https://www.cronica.com.ar/__export/1653520801548/sites/cronica/img/2021/06/17/chocotorta_2_crop1623944104124.jpg_792575817.jpg',
          },
          {
            nombre: 'Turrón de Quaker',
            precio: 800,
            descripcion: "Turrón con avena, chocolate y manteca",
            imagen:
              'https://i.ytimg.com/vi/gv6CUHSc8oQ/maxresdefault.jpg',
          },
        ]
    },
    {
        nombre: 'Bebidas',
        id: 4,
        fotoUrl: "https://i.blogs.es/7fc543/alcohol/1366_2000.jpg",
        productos: [{
          nombre: 'Agua',
          precio: 100,
          descripcion: "Agua mineral 500cc",
          imagen:
            'https://statics.dinoonline.com.ar/imagenes/full_600x600_ma/3040033_f.jpg',
        },
        {
          nombre: 'Agua Saborizada Naranja',
          precio: 100,
          descripcion: "Agua saborizada marca X 500cc sabor naranja",
          imagen:
            'https://statics.dinoonline.com.ar/imagenes/full_600x600_ma/3040735_f.jpg',
        },
        {
          nombre: 'Fanta Uva',
          precio: 100,
          descripcion: "Fanta 500cc",
          imagen:
            'https://tusuper.com.ar/image/cache/catalog/P2020/Bebidas/FANTA-NARANJA-1.5lts-800x800.png',
        },]
    }
]
