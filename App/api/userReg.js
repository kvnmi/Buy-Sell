import client from "./client";

const register = (userCred) => client.post("/users", userCred);

export default { register };
