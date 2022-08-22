const express = require('express');
const router = express.Router();
const union = require('../service/union.service');
const {
  jobDataValidate,
  areaDataValidate,
  complaintDataValidate,
  demandDataValidate,
  strikeDataValidate,
  voteDataValidate,
  signupDataValidate,
  loginDataValidate,
  joinStrikeDataValidate
} = require("../validation/union.validation");

/* GET all jobs */
router.get('/', union.getAll);

router.get('/strikes', union.getStrikes);

/* GET all jobs in area */
router.get('/:id', union.getJobAreaWithId);

/* GET all areas for a job */
router.get('/area/:id', union.getAreasOfJob);

/* GET all votes for a job */
router.get('/votes/:id/:area?', union.getVotes);

/* GET all complains for job */
router.get('/complaint/:id/:area?',union.getComplaintsWithId); 

/* GET all strikes for job */
router.get('/strike/:id/:area?', union.getStrikesWithId);

/* POST create a job */
router.post('/job', jobDataValidate, union.createJob);

  /* POST create a area */
router.post('/area', areaDataValidate, union.createArea);

/* POST create a complaint */
router.post('/complaint', complaintDataValidate, union.createComplaint);

/* POST create a demand */
router.post('/demand', demandDataValidate, union.createDemand);

/* POST create a strike */
router.post('/strike', strikeDataValidate, union.createStrike);

/* POST vote on a demand */
router.post('/demand/vote', voteDataValidate, union.createVote);

/* POST create a union member */
router.post('/signup', signupDataValidate, union.createMember);

  /* POST login */
router.post('/login', loginDataValidate, union.login);

/* POST join a strike */
router.post('/strike/join', joinStrikeDataValidate, union.createStrikeJoin);

module.exports = router;