import myAxios from './my-axios.js';

const apis = {
  getAllMenuTitles() {
    return myAxios('/api/menuList');
  },
  getAllContents() {
    return myAxios('/api/contentList');
  },
  getIntro() {
    return myAxios('/api/AboutMe');
  },
  getAllPicture() {
    return myAxios('/api/picture');
  }
}

export default apis;