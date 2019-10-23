import axios from 'axios';

//creates acious with some default parameters
export default axios.create({
	baseURL: 'https://api.unsplash.com',
	headers:{
		Authorization: 'Client-ID 43d23b8a8702e377d98dc476c6420d738a73e2b817868ee6bd6d6b8b1397c9ec'
	}
});