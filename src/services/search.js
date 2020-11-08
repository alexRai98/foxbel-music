const API_URL = 'https://deezerdevs-deezer.p.rapidapi.com';

export const getSounds = async (param) => {
  try {
    const response =await fetch(`${API_URL}/search?q=${param}&limit=10`, {
      // method: "GET",
      headers: {
        "x-rapidapi-key": "eb4706dba6msh6341dce36232cdap16d534jsn79a293b9d460",
        "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
        "useQueryString": true
      },
    });
    const data = await response.json();
    console.log(data);
    if (response.ok) {
      return data.data;
    } else {
      throw new Error(data.message);
    }
  } catch {
    throw new Error('bad reques');
  }
};
