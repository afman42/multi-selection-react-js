import { useState, useEffect } from 'react'

function App() {
  const [makananHobi,setMakananHobiSelect] = useState([
    { nama: 'Nasi Goreng', selected: false },
    { nama: 'Sate Ayam', selected: false },
    { nama: 'Tom Yam', selected: false },
    { nama: 'Pecel Ayam', selected: false },
    { nama: 'Pecel Bebek', selected: false },
    { nama: 'Ayam Kalasan', selected: false },
  ])

  const [widthPhone,setWidthPhone] = useState(true)

  const [countPesan,setCountPesan] = useState(0);

  useEffect(() => {
    if(window.innerWidth > 576){
      setWidthPhone(false)
    }
  },[])
  function seleksi(index){
    let data = [...makananHobi]
    data[index].selected = !data[index].selected
    if(data[index].selected){
      setCountPesan(countPesan + 1)
    }else{
      setCountPesan(countPesan - 1)
    }
    setMakananHobiSelect(data)
  }

  function dipesan(){
    if(countPesan > 0) {
      alert(`Yang di pesan adalah ${countPesan}`) 
      let hapusPesan = makananHobi.map(item => {
        return {
          nama: item.nama,
          selected: false
        }
      }) 
      console.log(hapusPesan)
      setMakananHobiSelect(hapusPesan)
      setCountPesan(0)
    }else { 
      alert('Harap di seleksi lagi pesan nya')
    }
  }
  if(widthPhone) {
    return (
      <div className="sm:min-h-full sm:mx-5">
        { makananHobi.map((item,index) => (
          <div className={`sm:border-2  sm:w-full sm:pl-3 sm:py-2 sm:mb-5 ${item.selected ? 'sm:border-[gray] sm:bg-[black] sm:text-[white]' : 'sm:border-[black] sm:bg-[white]'}`} key={index} onClick={() => seleksi(index)}>
            {item.nama}
          </div>
        ))}
        <div className="sm:flex sm:justify-center">
          <button className="sm:bg-[blue] sm:text-[white] sm:px-5 sm:py-2 sm:rounded-lg" onClick={() => dipesan()}>Pesan {countPesan}</button>
        </div>
      </div>
    )
  }else{
    return (
      <div className="flex justify-center items-center">Especially for mobile phone</div> 
    )
  }
}

export default App
