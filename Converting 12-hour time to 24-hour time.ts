export function to24hourtime(hour: number, minute: number, period: string): string {
  hour = period === 'pm' ? (hour%12)+12 : (hour%12)
  return String(hour).padStart(2,'0')+String(minute).padStart(2,'0')
}

