import axios from "axios";

const apiFilmes = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    headers: { 
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NDc1OTk1NTU0ZjlkMDBkYTU0YTcxZTBhNGYzMzRlYSIsInN1YiI6IjY0MzVlNTE0ZmQ0ZjgwMDBiNGEyZDM0NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.NGToJHCFrL4xbyYUkciWIlIyNnLuCczXc9p8aVPOTcc'
    }
})

export default apiFilmes