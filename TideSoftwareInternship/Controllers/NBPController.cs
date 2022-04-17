using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using System.Collections.Generic;
using System.Net.Http;
using System.Threading.Tasks;

namespace TideSoftwareInternship.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class NBPController : Controller
    {

        string url = "https://api.nbp.pl/api/exchangerates/tables/C?format=json";
        HttpClient client = new HttpClient();

        [HttpGet]
        public async Task<IEnumerable<Rate>> Get()
        {
            string response = await client.GetStringAsync(url);
            var result = JsonConvert.DeserializeObject<NBP[]>(response);

            return result[0].rates;
        }
    }
}
