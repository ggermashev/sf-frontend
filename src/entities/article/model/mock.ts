import { tags } from "../../../shared/model/const";
import type { IArticle } from "./types";

import Article1 from '../../../assets/article-1.png'
import Article2 from '../../../assets/article-2.png'
import Article3 from '../../../assets/article-3.png'
import Article4 from '../../../assets/article-4.png'
import Article5 from '../../../assets/article-5.png'
import Article6 from '../../../assets/article-6.png'
import Article7 from '../../../assets/article-7.png'
import Article8 from '../../../assets/article-8.png'


export const articles: IArticle[] = [
  {
    id: '1',
    img: Article1,
    tags: [tags.selfEsteem, tags.self],
    title: "Эмоциональное выгорание – стадии и симптомы, методы восстановления и профилактики",
    author: 'Лиза Файнтух',
    date: '21.08.2021',
    content: "Изначально термин «эмоциональное профессиональной сфере и относился..."
  },
  {
    id: '2',
    img: Article2,
    tags: [tags.self],
    title: "Как не утонуть в тревоге и управлять своими страхами",
    author: 'Екатерина Бельтюкова',
    date: '11.08.2021',
    content: "Один из самых важных навыков, которые может дать работа с психотерапевтом - умение в разных ситуациях по-разному обходиться ..."
  },
  {
    id: '3',
    img: Article3,
    tags: [tags.selfEsteem, tags.food],
    title: "Эмоциональное выгорание – стадии и симптомы, методы восстановления и профилактики",
    author: 'Лиза Файнтух',
    date: '21.08.2021',
    content: "Изначально термин «эмоциональное профессиональной сфере и относился..."
  },
  {
    id: '4',
    img: Article4,
    tags: [tags.self],
    title: "Как не утонуть в тревоге и управлять своими страхами",
    author: 'Екатерина Бельтюкова',
    date: '11.08.2021',
    content: "Один из самых важных навыков, которые может дать работа с психотерапевтом - умение в разных ситуациях по-разному обходиться ..."
  },
  {
    id: '5',
    img: Article5,
    tags: [tags.self],
    title: "Как управлять своими эмоциями 8 шагов",
    author: 'Екатерина Бельтюкова',
    date: '07.08.2021',
    content: "Клиенты часто спрашивают, как КОНТРОЛИРОВАТЬ свои негативные эмоции. Пришло время об этом написать!"
  },
  {
    id: '6',
    img: Article6,
    tags: [tags.self],
    title: "Эмоциональное выгорание – стадии и симптомы, методы восстановления и профилактики",
    author: 'Лиза Файнтух под редакцией  Екатерины Бельтюковой',
    date: '21.08.2021',
    content: "Изначально термин «эмоциональное я..."
  },
  {
    id: '7',
    img: Article7,
    tags: [tags.self],
    title: "Как не утонуть в тревоге и управлять своими страхами",
    author: 'Екатерина Бельтюкова',
    date: '11.08.2021',
    content: "Один из самых важных навыков, которые может дать работа с психотерапевтом - умение в разных ситуациях по-разному обходиться ..."
  },
  {
    id: '8',
    img: Article8,
    tags: [tags.self],
    title: "Эмоциональное выгорание – стадии и симптомы, методы восстановления и профилактики",
    author: 'Лиза Файнтух',
    date: '21.08.2021',
    content: "Изначально термин «эмоциональное профессиональной сфере и относился..."
  },
]