export default class RandomColor {
  static async getRandomColor() {
    try {
      let url = `https://www.colr.org/json/colors/random/100`;
      const response = await fetch(url);
      if (!response.ok) {
        throw Error(response.statusText);
      }
      return response.json();
    } catch (error) {
      return error.message;
    }
  }
}
