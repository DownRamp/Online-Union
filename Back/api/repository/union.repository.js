const db = require('../db/db');
const helper = require('../db/helper');
const config = require('../db/config');

function arrayBody(body){
  var result = [];
  for(var i in body){
    result.push(body[i]);
  }
  return result;
}
async function getAll(page) {
  const offset = helper.getOffset(page, config.listPerPage);
  const rows = await db.query(
    getAllSQL, 
    [offset, config.listPerPage]
  );
  const data = helper.emptyOrRows(rows);
  const meta = {page};

  return {
    data,
    meta
  }
}

async function getJobAreaWithId(page, id) {
  const offset = helper.getOffset(page, config.listPerPage);
  const rows = await db.query(
    getJobAreaWithIdSQL, 
    [id, offset, config.listPerPage]
  );
  const data = helper.emptyOrRows(rows);
  const meta = {page};

  return {
    data,
    meta
  }
}

async function getAreasOfJob(page, id) {
  const offset = helper.getOffset(page, config.listPerPage);
  const rows = await db.query(
    getAreasOfJobSQL, 
    [id, offset, config.listPerPage]
  );
  const data = helper.emptyOrRows(rows);
  const meta = {page};

  return {
    data,
    meta
  }
}

async function getVotes(page, id, area) {
  const offset = helper.getOffset(page, config.listPerPage);
  const rows = await db.query(
    getVotesSQL, 
    [id, area, offset, config.listPerPage]
  );
  const data = helper.emptyOrRows(rows);
  const meta = {page};

  return {
    data,
    meta
  }
}

async function getComplaintsWithId(page, id, area) {
  const offset = helper.getOffset(page, config.listPerPage);
  const rows = await db.query(
    getComplaintsWithIdSQL, 
    [id, area, offset, config.listPerPage]
  );
  const data = helper.emptyOrRows(rows);
  const meta = {page};

  return {
    data,
    meta
  }
}

async function getStrikesWithId(page, id, area) {
  const offset = helper.getOffset(page, config.listPerPage);
  const rows = await db.query(
    getStrikesWithIdSQL, 
    [id, area, offset, config.listPerPage]
  );
  const data = helper.emptyOrRows(rows);
  const meta = {page};

  return {
    data,
    meta
  }
}

async function getStrikes(page) {
  const offset = helper.getOffset(page, config.listPerPage);
  const rows = await db.query(
    getStrikesSQL, 
    [offset, config.listPerPage]
  );
  const data = helper.emptyOrRows(rows);
  const meta = {page};

  return {
    data,
    meta
  }
}

async function createJob(body) {
  
  const result = await db.query(
    createJobSQL,
    [body.name, body.description]
  );
  let message = 'Error in creating job';

  if (result.length) {
    message = 'Job created successfully';
  }

  console.log(result);
  const result2 = await db.query(
    createAreaSQL,
    ["Universal", result[0].id]
  );

  message = 'Error in creating area';
  if (result2.length) {
    message = 'Job created successfully';
  }
  return {message};
}

async function createComplaint(body) {
  let array = arrayBody(body);
  const result = await db.query(
    createComplaintSQL,
    array
  );
  let message = 'Error in creating complaint';

  if (result.length) {
    message = 'Complaint created successfully';
  }

  return {message};
}

async function createDemand(body) {
  let array = arrayBody(body);

  const result = await db.query(
    createDemandSQL,
    array
  );
  let message = 'Error in creating demand';

  if (result.length) {
    message = 'Demand created successfully';
  }

  return {message};
}

async function createStrike(body) {
  let array = arrayBody(body);

  array.push([]);
  const result = await db.query(
    createStrikeSQL,
    array
  );
  let message = 'Error in creating strike';

  if (result.length) {
    message = 'Strike created successfully';
  }

  return {message};
}

async function createArea(body) {
  let array = arrayBody(body);

  const result = await db.query(
    createAreaSQL,
    array
  );
  let message = 'Error in creating area';

  if (result.length) {
    message = 'Area created successfully';
  }

  return {message};
}

async function createVote(body) {
  let array = arrayBody(body);

  const result = await db.query(
    createVoteSQL,
    array
  );
  let message = 'Error in voting';

  if (result.length) {
    message = 'Vote counted successfully';
  }

  return {message};
}

async function createMember(body) {
  let array = arrayBody(body);

  const result = await db.query(
    createMemberSQL,
    array
  );
  let message = 'Error in creating member';

  if (result.length) {
    message = 'Member created successfully';
  }

  return {message};
}
async function login(body) {
  let array = arrayBody(body);

  const result = await db.query(
    loginSQL,
    array
  );
  let message = 'Error in login';

  if (result.length) {
    message = 'Logged in successfully';
  }

  return {message};
}

async function createStrikeJoin(body) {
  let array = arrayBody(body);
  
  const result = await db.query(
    createStrikeJoinSQL,
    array);
  let message = 'Error in creating strike join';

  if (result.length) {
    message = 'Joined successfully';
  }

  return {message};
}

const getAllSQL = 'SELECT * FROM job OFFSET $1 LIMIT $2';
const getJobAreaWithIdSQL = 'SELECT * FROM job j INNER JOIN area a ON a.job_id = j.id and a.area_id = $1 OFFSET $2 LIMIT $3' ;
const getAreasOfJobSQL ='SELECT * from area where job_id = $1 OFFSET $2 LIMIT $3';
const getVotesSQL = 'SELECT * from demand where job_id = $1 and area_id = $2 OFFSET $3 LIMIT $4';
const getComplaintsWithIdSQL = 'SELECT * from complaint where job_id = $1 and area_id = $2 OFFSET $3 LIMIT $4';
const getStrikesWithIdSQL = 'SELECT * from strike where job_id = $1 and area_id = $2 OFFSET $3 LIMIT $4';
const getStrikesSQL = 'SELECT * from strike OFFSET $1 LIMIT $2';

const createJobSQL = 'INSERT INTO job(name, description) VALUES ($1, $2) RETURNING *';
const createAreaSQL = 'INSERT INTO area(location, job_id) VALUES ($1, $2) RETURNING *';
const createComplaintSQL = 'INSERT INTO complaint(dislike, area_id, job_id) VALUES ($1, $2, $3) RETURNING *';
const createDemandSQL = 'INSERT INTO demand(area_id, title, reason, votes, job_id) VALUES ($1, $2, $3, 1, $4) RETURNING *';
const createStrikeSQL = 'INSERT INTO strike(title, description, area_id, job_id, attendants_array) VALUES ($1, $2, $3, $4, $5) RETURNING *';
const createVoteSQL = 'UPDATE demand SET votes = votes + 1 WHERE id = $1 RETURNING *';
const createMemberSQL = 'INSERT INTO union_member(status, name, area_id, job_id) VALUES ($1, $2, $3, $4) RETURNING *'
const loginSQL = 'INSERT INTO quote(quote, author) VALUES ($1, $2) RETURNING *';
const createStrikeJoinSQL = 'UPDATE strike SET attendants_array = array_append(attendants_array, $1)';

module.exports = {
    getAll,
    getJobAreaWithId,
    getAreasOfJob,
    getVotes,
    getComplaintsWithId,
    getStrikesWithId,
    getStrikes,
    createJob,
    createArea,
    createComplaint,
    createDemand,
    createStrike,
    createVote,
    createMember,
    login,
    createStrikeJoin
  }