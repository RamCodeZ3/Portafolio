function WorkingHours() {
  return (
    <>
      <div className="flex flex-col gap-2 w-auto p-5 bg-black/10 backdrop-blur-2xl rounded-lg border-1 border-[#035f78]">
        <span className="text-xl font-semibold">Horarios de atención</span>

        <div className="flex justify-between ">
          <span className="text-[#2e5964]">Lunes-Viernes</span>
          <b>9:00 - 18:00 UTC</b>
        </div>

        <div className="flex justify-between">
          <span className="text-[#2e5964]">Sábado</span>
          <b>10:00 - 16:00 UTC</b>
        </div>

        <div className="flex justify-between">
          <span className="text-[#2e5964]">Domingo</span>
          <span>Cerrado</span>
        </div>
      </div>
    </>
  )
}

export default WorkingHours
