import httpService from "./httpServices";

export function createUser(user) {
  return httpService.post("/users", user);
}

const usersService = {
  createUser,
};

export default usersService;
