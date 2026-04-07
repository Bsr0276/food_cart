import { MdErrorOutline } from "react-icons/md"

const Error = ({info}) => {
  return (
    <div className="text-center my-20 flex flex-col items-center gap-5">

      <MdErrorOutline className="text-4xl text-red-500" />
      
<h1 className="text-lg font-semibold ">Üzgünüz Bir Hata Oluştu!</h1>
<h3>{info}</h3>
    </div>
  )
}

export default Error