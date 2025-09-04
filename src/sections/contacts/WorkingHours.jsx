function WorkingHours() {
  return (
    <>
      <div className="card2 flex flex-col gap-2 w-auto p-5">
        <span className="text-xl font-semibold">Horarios de atención</span>

        <div className="flex justify-between ">
          <span className="">Lunes-Viernes</span>
          <b className="text-[#035f78]">9:00 - 18:00 UTC</b>
        </div>

        <div className="flex justify-between">
          <span className="">Sábado</span>
          <b className="text-[#035f78]">10:00 - 16:00 UTC</b>
        </div>

        <div className="flex justify-between">
          <span className="">Domingo</span>
          <span className="text-red-600 font-semibold">Cerrado</span>
        </div>
      </div>
    </>
  )
}

export default WorkingHours
