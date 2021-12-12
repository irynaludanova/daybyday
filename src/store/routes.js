import calendar from "../assets/images/calendar.webp"
import facts from "../assets/images/fact.webp"
import jokes from "../assets/images/joke.webp"
import quiz from "../assets/images/clever.webp"
import motivate from "../assets/images/motivate.webp"
import facedetect from "../assets/images/glasses.webp"
import Facts from "../pages/Facts"
import Calendar from "../pages/Calendar"
import Jokes from "../pages/Jokes"
import Quiz from "../pages/Quiz"
import ImageInput from "../pages/ImageInput"
import Motivation from "../pages/Motivation"

export const pageRoutes = [
  {
    id: 1,
    path: "/calendar",
    exact: true,
    element: <Calendar />,
    component: "Календарь",
    label: "Календарь",
    image: <img src={calendar} alt="calendar" style={{ width: "10rem" }} />,
    desc: "Каждый день- это праздник.\n Узнай, что можно отметить сегодня.",
  },
  {
    id: 2,
    path: "/facts",
    exact: true,
    element: <Facts />,
    component: "Интересные факты",
    label: "Факты",
    image: <img src={facts} alt="facts" style={{ width: "10rem" }} />,
    desc: "Странности, неожиданности и \n интересности из жизни вокруг.",
  },
  {
    id: 3,
    path: "/jokes",
    exact: true,
    element: <Jokes />,
    component: "Приколы",
    label: "Приколы",
    image: <img src={jokes} alt="jokes" style={{ width: "12rem" }} />,
    desc: "Просто классные шутки \n для поднятия настроения. ",
  },
  {
    id: 4,
    path: "/quiz",
    exact: true,
    element: <Quiz />,
    component: "Викторина",
    label: "Вопросы",
    image: <img src={quiz} alt="quiz" style={{ width: "8rem" }} />,
    desc: "А как насчет пораскинуть мозгами? \n Вопросы на самые разные темы.",
  },
  {
    id: 5,
    path: "/motivation",
    exact: true,
    element: <Motivation />,
    component: "Мотиваторы",
    label: "Мотиваторы",
    image: <img src={motivate} alt="motivate" style={{ width: "10rem" }} />,
    desc: "Наполняем энергией каждый день. \n Мотивируй себя к новым достижениям. ",
  },
  {
    id: 6,
    path: "/detect",
    exact: true,
    element: <ImageInput />,
    component: "Detect",
    label: "Detect",
    image: <img src={facedetect} alt="facedetect" style={{ width: "8rem" }} />,
    desc: "Есть классные фотки с друзьями?\n Загружай и анализируй в FaceDetect.",
  },
]
