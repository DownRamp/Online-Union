const { validationResult } = require("express-validator");
const UnionRepository = require('../repository/union.repository');

async function getAll(req, res, next) {
    try {
        res.json(await UnionRepository.getAll(req.query.page));
      } catch (err) {
        console.error(`Error while getting jobs `, err.message);
        next(err);
      }
}

async function getJobAreaWithId(req, res, next) {
    try {
        res.json(await UnionRepository.getJobAreaWithId(req.query.page, req.params.id));
      } catch (err) {
        console.error(`Error while getting jobs in area `, err.message);
        next(err);
      }
}

async function getAreasOfJob(req, res, next) {
    try {
        res.json(await UnionRepository.getAreasOfJob(req.query.page, req.params.id));
      } catch (err) {
        console.error(`Error while getting areas for a job `, err.message);
        next(err);
      }
}

async function getVotes(req, res, next) {
    try {
        res.json(await UnionRepository.getVotes(req.query.page, req.params.id, req.params.area));
      } catch (err) {
        console.error(`Error while getting votes by id `, err.message);
        next(err);
      }
}

async function getComplaintsWithId(req, res, next) {
    try {
        res.json(await UnionRepository.getComplaintsWithId(req.query.page, req.params.id, req.params.area));
      } catch (err) {
        console.error(`Error while getting complaints `, err.message);
        next(err);
      }
}

async function getStrikesWithId(req, res, next) {
    try {
        res.json(await UnionRepository.getStrikesWithId(req.query.page, req.params.id, req.params.area));
      } catch (err) {
        console.error(`Error while getting strikes by id `, err.message);
        next(err);
      }
}

async function getStrikes(req, res, next) {
    try {
        res.json(await UnionRepository.getStrikes(req.query.page));
      } catch (err) {
        console.error(`Error while getting union `, err.message);
        next(err);
      }
}

async function createJob(req, res, next) {
    try {
        const errors = validationResult(req);
        // if there is error then return Error
        if (!errors.isEmpty()) {
            return res.status(400).json({
                success: false,
                errors: errors.array(),
            });
        }
        res.json(await UnionRepository.createJob(req.body));
    } catch (err) {
        console.error(`Error while posting job `, err.message);
        next(err);
    }}

async function createComplaint(req, res, next) {
    try {
        const errors = validationResult(req);

        // if there is error then return Error
        if (!errors.isEmpty()) {
            return res.status(400).json({
                success: false,
                errors: errors.array(),
            });
        }
        res.json(await UnionRepository.createComplaint(req.body));
    } catch (err) {
        console.error(`Error while posting complaint `, err.message);
        next(err);
    }
}

async function createDemand(req, res, next) {
    try {
        const errors = validationResult(req);

        // if there is error then return Error
        if (!errors.isEmpty()) {
            return res.status(400).json({
                success: false,
                errors: errors.array(),
            });
        }
        res.json(await UnionRepository.createDemand(req.body));
    } catch (err) {
        console.error(`Error while posting demand `, err.message);
        next(err);
    }
}

async function createStrike(req, res, next) {
    try {
        const errors = validationResult(req);

        // if there is error then return Error
        if (!errors.isEmpty()) {
            return res.status(400).json({
                success: false,
                errors: errors.array(),
            });
        }
        res.json(await UnionRepository.createStrike(req.body));
    } catch (err) {
        console.error(`Error while posting strike `, err.message);
        next(err);
    }
}

async function createArea(req, res, next) {
    try {
        const errors = validationResult(req);

        // if there is error then return Error
        if (!errors.isEmpty()) {
            return res.status(400).json({
                success: false,
                errors: errors.array(),
            });
        }
        res.json(await UnionRepository.createArea(req.body));
    } catch (err) {
        console.error(`Error while posting area `, err.message);
        next(err);
    }
}

async function createVote(req, res, next) {
    try {
        const errors = validationResult(req);

        // if there is error then return Error
        if (!errors.isEmpty()) {
            return res.status(400).json({
                success: false,
                errors: errors.array(),
            });
        }
        res.json(await UnionRepository.createVote(req.body));
    } catch (err) {
        console.error(`Error while posting vote `, err.message);
        next(err);
    }}

async function createMember(req, res, next) {
    try {
        const errors = validationResult(req);

        // if there is error then return Error
        if (!errors.isEmpty()) {
            return res.status(400).json({
                success: false,
                errors: errors.array(),
            });
        }
        res.json(await UnionRepository.createMember(req.body));
    } catch (err) {
        console.error(`Error while posting signup `, err.message);
        next(err);
    }}

async function login(req, res, next) {
    try {
        const errors = validationResult(req);

        // if there is error then return Error
        if (!errors.isEmpty()) {
            return res.status(400).json({
                success: false,
                errors: errors.array(),
            });
        }
        res.json(await UnionRepository.login(req.body));
    } catch (err) {
        console.error(`Error while posting login `, err.message);
        next(err);
    }
}

async function createStrikeJoin(req, res, next) {
    try {
        const errors = validationResult(req);

        // if there is error then return Error
        if (!errors.isEmpty()) {
            return res.status(400).json({
                success: false,
                errors: errors.array(),
            });
        }
        res.json(await UnionRepository.createStrikeJoin(req.body));
    } catch (err) {
        console.error(`Error while posting join to strike `, err.message);
        next(err);
    }
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