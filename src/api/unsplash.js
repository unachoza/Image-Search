import axios from 'axios'

export default axios.create({
    baseURL: 'https://api.unsplash.com/',
    headers: {
        Authorization: 'Client-ID 6b7198ae94debdaaa4a572ff5548c06da0c748f53dd039de22f8d80eb85188b7'
    }
})