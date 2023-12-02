
const BASE_URL = "https://api.themoviedb.org/3/movie/top_rated"
// GET /watch/list: ดึงข้อมูลหนังทั้งหมด
// GET /watch/list/{id}: ดึงรายละเอียดของหนังที่ดูตามรหัส
// GET /search/?q=xxxx: ค้นหารายการหนังจากชื่อ
const apiKey = process.env.API_KEY


exports.showList = async (req,res,next)=>{
    try {
      const response = await fetch(`${BASE_URL}?api_key=${apiKey}`);
      const data = await response.json();
      const {results} = data
      res.status(200).json(results)
    } catch (error) {
        console.log(error)
    }
}