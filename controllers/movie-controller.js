const fs = require('fs/promises')

const BASE_URL = "https://api.themoviedb.org/3/movie/top_rated"
// GET /watch/list: ดึงข้อมูลหนังทั้งหมด
// GET /watch/list/{id}: ดึงรายละเอียดของหนังที่ดูตามรหัส
// GET /search/?q=xxxx: ค้นหารายการหนังจากชื่อ
const apiKey = process.env.API_KEY
// Example: Fetch popular movies
fetch(`${BASE_URL}?api_key=${apiKey}`)
  .then(response => response.json())
  .then(data => {
    // Handle the data here
    console.log(data);
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });


exports.showList = async (req,res,next)=>{
    try {
        
    } catch (error) {
        console.log(error)
        
    }
}