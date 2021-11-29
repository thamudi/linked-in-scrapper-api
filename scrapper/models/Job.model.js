const fs = require('fs');

class Job {
  constructor(data) {
    this.query = data.query ? data.query : 'N/A';
    this.location = data.location ? data.location : 'N/A';
    this.job_id = data.jobId ? data.jobId : 'N/A';
    this.title = data.title ? data.title : 'N/A';
    this.company = data.company ? data.company : 'N/A';
    this.place = data.place ? data.place : 'N/A';
    this.date = data.date ? data.date : 'N/A';
    this.link = data.link ? data.link : 'N/A';
    this.applyLink = data.applyLink ? data.applyLink : 'N/A';
    this.senorityLevel = data.senorityLevel ? data.senorityLevel : 'N/A';
    this.jobFunction = data.jobFunction ? data.jobFunction : 'N/A';
    this.employmentType = data.employmentType ? data.employmentType : 'N/A';
    this.industries = data.industries ? data.industries : 'N/A';
    this.description = data.description ? data.description : 'N/A';
    this.descriptionHTML = data.descriptionHTML ? data.descriptionHTML : 'N/A';
    this.descriptionLength = data.description.length;
    this.descriptionHTMLLength = data.descriptionHTML.length;
  }

  write(data = null) {
    const save = data ? JSON.stringify(data) : JSON.stringify(this.getProperties());
    fs.appendFileSync(`./data/job.json`, save, err => {
      if (err) return console.error(err);
      console.log('Data saved');
    });
  }

  printData() {
    return `
    \n
    Query = ${this.query},\n
    Location = ${this.location},\n
    Job ID = ${this.job_id},\n
    Job Title = ${this.title},\n
    Company = ${this.company},\n
    Place = ${this.place},\n
    Date = ${this.date},\n
    Link = ${this.link},\n
    Apply Link = ${this.applyLink},\n
    Seniority Level = ${this.senorityLevel},\n
    Job Function = ${this.jobFunction},\n
    Employment Type = ${this.employmentType},\n
    industries = ${this.industries},\n
    Description = ${this.description},\n
    ===========================================================
    `
  }

  getProperties() {
    return {
      'query': this.query,
      'location': this.location,
      'job_id': this.job_id,
      'title': this.title,
      'company': this.company,
      'place': this.place,
      'date': this.date,
      'link': this.link,
      'applyLink': this.applyLink,
      'senorityLevel': this.senorityLevel,
      'jobFunction': this.jobFunction,
      'employmentType': this.employmentType,
      'industries': this.industries,
      'description': this.description
    }
  }
}

module.exports = Job;