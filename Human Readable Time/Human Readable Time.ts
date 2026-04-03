export function humanReadable(seconds:number):string {
  const hour = Math.floor(seconds / 3600)
  seconds = seconds % 3600
  const minutes = Math.floor(seconds / 60)
  seconds = seconds%60
  return String(hour).padStart(2, '0')+":"+String(minutes).padStart(2, '0')+":"+String(seconds).padStart(2, '0')
}
