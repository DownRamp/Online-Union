const UnionRepository = require('../repository/union.repository');

async function getAll(page) {
    return await UnionRepository.getAll(page);
}

async function getJobAreaWithId(page, id) {
    return await UnionRepository.getJobAreaWithId(page, id);
}

async function getAreasOfJob(page, id) {
    return await UnionRepository.getAreasOfJob(page, id);
}

async function getVotes(page, id, area) {
    return await UnionRepository.getVotes(page, id, area);
}

async function getComplaintsWithId(page, id, area) {
    return await UnionRepository.getComplaintsWithId(page, id, area);
}

async function getStrikesWithId(page, id, area) {
    return await UnionRepository.getStrikesWithId(page, id, area);
}

async function getStrikes(page) {
    return await UnionRepository.getStrikes(page);
}

async function createJob(body) {
    return await UnionRepository.createJob(body);
}

async function createComplaint(body) {
    return await UnionRepository.createComplaint(body);
}

async function createDemand(body) {
    return await UnionRepository.createDemand(body);
}

async function createStrike(body) {
    return await UnionRepository.createStrike(body);
}

async function createArea(body) {
    return await UnionRepository.createArea(body);
}

async function createVote(body) {
    return await UnionRepository.createVote(body);
}

async function createMember(body) {
    return await UnionRepository.createMember(body);
}

async function login(body) {
    return await UnionRepository.login(body);
}

async function createStrikeJoin(body) {
    return await UnionRepository.createStrikeJoin(body);
}

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