function changeTime(input, delta) {
   const obj = { time: new Date(`2025-10-27T${input}:00`) };
   obj.time =  new Date(obj.time.getTime() + delta*60*1000)
   const hour = obj.time.getUTCHours()
   const minutes = obj.time.getUTCMinutes()
   return `${String(hour).padStart(2, "0")}:${String(minutes).padStart(2, "0")}`
}
