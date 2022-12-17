import { faker } from "@faker-js/faker";

const users = [...Array(3)].map((_) => ({
  id: faker.datatype.uuid(),
  firstName: faker.name.firstName(),
  lastName: faker.name.lastName(),
}));

export default users;

