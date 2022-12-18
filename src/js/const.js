import { v4 as uuid } from "uuid";

export const posts = [
  {
    id: uuid(),
    createdAt: "2022-12-15",
    userId: "me",
    modifiedAt: "2022-25-25",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam, autem doloribus facilis amet nulla quam error quas aut, ratione tempore neque, ipsam asperiores eveniet enim in. Nemo, ab quia magni a error eum illum recusandae, modi maxime optio excepturi? Odio quod nulla ipsa excepturi! Recusandae facere id, reprehenderit, vero voluptate quos aliquam mollitia optio laborum pariatur totam aut minus voluptatem nesciunt libero provident consequatur itaque quam impedit inventore placeat maiores dignissimos? Ab explicabo iusto dignissimos iure ullam placeat cum blanditiis laborum molestiae ipsa, corporis deleniti? Qui, quasi. Minus dolores ducimus, unde a corrupti laboriosam, doloremque at magnam eaque ut commodi.",
    category: "Any category",
    title: "Any title",
    comments: [
      {
        id: uuid(),
        userId: "user_1",
        text: "any comment text",
        createdAt: "2022-12-15",
      },
      {
        id: uuid(),
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
    name: "test_name",
    surname: "test_surname",
  },
  {
    id: "user_1",
    neme: "test_name_1",
    surname: "test_surname_1",
  },
  {
    id: "user_2",
    neme: "test_name_2",
    surname: "test_surname_2",
  },
];

export const POST_DEFAULT_LENGTH = 250;
