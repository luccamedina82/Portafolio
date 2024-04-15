import images from "../images"

export const SKILLS = [
    {
        title:"Herramientas",
        icon: `${images[6]}`,
        skills: [
            {skill: "Git y GitHub", percentage: "60%"},
            {skill: "Visual Studio Code", percentage: "55%"}
        ]
    },
    {
        title:"Frontend",
        icon: `${images[7]}`,
        skills: [
            {skill: "HTML", percentage: "30%"},
            {skill: "CSS", percentage: "30%"},
            {skill: "JavaScript", percentage: "40%"},
            {skill: "React.js", percentage: "30%"},
            {skill: "React Native", percentage: "20%"}
        ]
    },
    {
        title:"Backend",
        icon: `${images[8]}`,
        skills: [
            {skill: "Node.js", percentage: "20%"},
            {skill: "Python", percentage: "50%"},
            {skill: "C-Sharp .NET", percentage: "55%"},
        ]
    },
    {
        title:"Servicios IT",
        icon: `${images[9]}`,
        skills: [
            {skill: "Soporte Tecnico", percentage: "80%"},
            {skill: "Mantenimiento", percentage: "70%"},
        ]
    }
]

export const WORK_EXPERIENCE = [
    {
        title: "Cordoba Acelera",
        date: "2024",
        responsabilities:[
            "Fui el encargado de proveer servicios IT",
            "Actualizar gran cantidad de paquetes de office de diferentes computadoras",
            "Asegurar el mantenimiento y funcionamiento de hardware y software de un sector de la organización",
            "brindar guías documentadas para su mantenimiento"
        ]

    },
    {
        title: "Freelance",
        date: "2023-2024",
        responsabilities:[
            "Emprendimiento personal",
            "Desarrollo de una aplicación de software en .NET Core. ",
            "Permite gestionar archivos con información ganadera.",
            "Llevando a cabo el control de versionado con Git y GitHub como herramientas."
        ]

    },
    {
        title: "Alev",
        date: "2021",
        responsabilities:[
            "Alev es una empresa que creamos en el colegio en la cual comercializábamos velas.",
            "Eran 100% hechas producidas por nosotros",
            "Yo era parte del equipo de control de calidad y producción de las mismas.",
        ]

    },
]

