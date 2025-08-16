import React, {useState} from 'react' 

function Main() {
    const [keyword, setKeyword] = useState('')
    const [time, setTime] = useState()


    const timeOptions = {
        "1m": 60,
        "2m": 120,
        "5m": 300,
        "10m": 600,
        "20m": 1200,
        "30m": 1800,
        "45m": 2700,
        "1h": 3600,
        "2h": 7200,
        "3h": 10800,
        "4h": 14400,
        "5h": 18000,
        "6h": 21600,
        "8h": 28800,
        "10h": 36000,
        "12h": 43200,
        "15h": 54000,
        "20h": 72000,
        "24h": 86400,
    }

    const baseUrl = "https://www.linkedin.com/jobs/search-results/"
    const searchUrl = `${baseUrl}?f_TPR=r${time}&keywords=${encodeURIComponent(keyword)}&origin=SEMANTIC_SEARCH_HISTORY`


  return (
    <div className='flex flex-col justify-center items-center h-full p-4 space-y-6'>
        <h6 className='mb-24 w-full text-center'>Find the freshest LinkedIn jobs by keyword and posting time <br /> tailored to your search.</h6>
            <input type="text" 
                value={keyword} 
                onChange={(e) => setKeyword(e.target.value)} 
                placeholder='search keyword' 
                className='outline-0 border rounded-xl p-2 text-center w-9/10'/>

            <div className='flex flex-wrap justify-center gap-2 w-9/10'>
                {Object.entries(timeOptions).map(([label,seconds]) => (
                    <button 
                        key={label} 
                        onClick={()=> setTime(seconds)}
                        className={`px-2 py-1 border rounded-xl cursor-pointer active:bg-zinc-200 ${time === seconds ? "bg-zinc-300" : ""
            }`}>           
                        {label} 
                        </button>
                ))}

            </div>
            <h1>{keyword ? 
                `${keyword} jobs posted in the last ${Object.keys(timeOptions).find((label)=> timeOptions[label]=== time)}` 
                : "Search for jobs by keyword and time"}</h1>

            <a href={searchUrl}
                target='_blank'
                className="ml-2 p-2 border rounded-xl cursor-pointer bg-zinc-200 hover:bg-zinc-300"
                >Search</a>
    </div>
  )
}

export default Main


//https://www.linkedin.com/jobs/search-results/?f_TPR=r86400&keywords=intern&origin=SEMANTIC_SEARCH_HISTORY