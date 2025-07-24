import HomelanderImg from "../assets/images/Homelander.jpg"
import StarlightImg from "../assets/images/Starlight.jpg"
import BillyButcherImg from "../assets/images/BillyButcher.jpg"
import AtrainImg from "../assets/images/ATrain.jpg"
import HughieCampbellImg from "../assets/images/HughieCampbell.jpg"
export const contacts = [
    {
        id: 1,
        name: "Homelander",
        avatar: HomelanderImg,
        lastMessageTime: "10:30 AM",
        responses: [
        { trigger: "hola", response: "¡Hola, necesitas algo?" },
        { trigger: "qué tal", response: "Nunca estoy mal, ya sabes.. esto de ser un héroe me divierte" },
        { trigger: "humanos comunes", response: "Son como niños... necesitan que alguien como yo los proteja. *risa*" },
        { trigger: "cuestionar", response: "Me divierte que lo intenten. Pero no abuses de mi paciencia." },
        { trigger: "líder de los siete", response: "Sin mí, los Siete no serían nada. Yo *soy* la marca." },
        { trigger: "miedo", response: "Miedo es lo que sienten ellos. Yo solo me decepciono." },
        { trigger: "más fuerte que tú", response: "Eso no existe. ¿O quieres comprobarlo?" },
        { trigger: "vought te controla", response: "Vought me necesita. Sin mí, no son *nada*." },
        { trigger: "te admiran", response: "Como debe ser. Aunque algunos deberían esforzarse más." }
        ]
    },
    {
        id: 2,
        name: "Starlight",
        avatar: StarlightImg,
        lastMessage: "¿Vamos al cine?",
        lastMessageTime: "9:15 AM",
        responses: [
            { trigger: "cine", response: "¡Sí! Me encantaría ir al cine" },
            { trigger: "película", response: "¿Qué película quieres ver?" },
            { trigger: "hola", response: "Hola María, ¿qué tal?" }
        ]
    },
    {
        id: 3,
        name: "Billy Butcher",
        avatar: BillyButcherImg,
        lastMessage: "¿Vamos al cine?",
        lastMessageTime: "6:40 AM",
        responses: [
            { trigger: "cine", response: "¡Sí! Me encantaría ir al cine" },
            { trigger: "película", response: "¿Qué película quieres ver?" },
            { trigger: "hola", response: "Hola María, ¿qué tal?" }
        ]
    },
    {
        id: 4,
        name: "A-Train",
        avatar: AtrainImg,
        lastMessage: "¿Vamos al cine?",
        lastMessageTime: "3:15 PM",
        responses: [
            { trigger: "cine", response: "¡Sí! Me encantaría ir al cine" },
            { trigger: "película", response: "¿Qué película quieres ver?" },
            { trigger: "hola", response: "Hola María, ¿qué tal?" }
        ]
    },
    {
        id: 5,
        name: "Hughie Campbell",
        avatar: HughieCampbellImg,
        lastMessage: "¿Vamos al cine?",
        lastMessageTime: "9:17 PM",
        responses: [
            { trigger: "cine", response: "¡Sí! Me encantaría ir al cine" },
            { trigger: "película", response: "¿Qué película quieres ver?" },
            { trigger: "hola", response: "Hola María, ¿qué tal?" }
        ]
    },
];