const API_URL = "https://api.github.com/users/";

export const fetchProfile = async function (username) {
  const response = await fetch(`${API_URL}${username}`);
  const data = await response.json();
  if (response.ok) return data;
  else throw new Error("Could not find user!");
};
