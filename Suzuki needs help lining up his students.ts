export function lineupStudents(students: string): string[] {
  return students.split(" ").sort((a,b) => b.length - a.length || b.localeCompare(a))
}
