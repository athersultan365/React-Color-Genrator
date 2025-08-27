import { useEffect, useState } from "react";

export default function Onecolor({ rgb, weight, hexColor }) {
  const [alert, setalert] = useState(false);

  let bcg = rgb.join(",");

  const hexValue = `#${hexColor}`;
  useEffect(() => {
    let timeout = setInterval(() => {
      setalert(false);
    }, 3000)
    return()=> clearTimeout(timeout)
  },[alert] )
  return(
<>
<div onClick={()=>{
setalert(true)
navigator.clipboard.writeText(hexValue)
}}
className="w-[12%] h-[200px]" style={{backgroundColor: `rgb(${bcg})`}}>


<p className="text-[blue] p-2"> {weight}%</p>
<p className="text-[blue] p-2"> {hexValue}</p>
{alert && <p className="text-[gray ] text-center"> COPPIED TO CLIPBORD</p>}
</div>
</>
  )

}
