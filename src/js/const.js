import { v4 as uid } from "uuid";

export const posts = [
  {
    id: uid(),
    userId: "me",
    title: "first post",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem, quasi.",
    category: "Any Category",
    createdAt: "2022-12-15",
    modifiedAt: null,
    comments: [
      {
        ud: uid(),
        userId: "user_1",
        text: "any comment text",
        createdAt: "2022-12-15",
      },
      {
        ud: uid(),
        userId: "user_2",
        text: "any comment text 2",
        createdAt: "2022-12-16",
      },
    ],
  },
];

export const users = [
  {
    id: "me",
    name: "George",
    surname: "Bush",
  },
  {
    id: "user_1",
    name: "John",
    surname: "Smith",
  },
  {
    id: "user_2",
    name: "Poghos",
    surname: "Poghosyan",
  },
];
