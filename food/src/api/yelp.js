import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization:
      'Bearer MtVhkWrEh2WKTcmedO5EEErx4JtKWZuXrGnfhn3JzgmLp46RLNsZA5IjNqZ1tzTRm_dI5Hb3k8GM_e5E5rhGL32CMgUvbWhZ8JLLgOLUcheLRs7iR9N3oGt_DgYpYnYx'
  }
});
