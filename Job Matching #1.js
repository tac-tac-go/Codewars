function match(candidate, job) {
 if (candidate.minSalary === undefined || job.maxSalary === undefined)  throw "Error";
 return job.maxSalary >= candidate.minSalary*0.9 
}
