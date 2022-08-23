const express = require('express');
const router = express.Router();
const { authJwt } = require("../middleware");
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

router.get('/strikes', [authJwt.verifyToken], union.getStrikes);

/* GET all jobs in area */
router.get('/:id', [authJwt.verifyToken], union.getJobAreaWithId);

/* GET all areas for a job */
router.get('/area/:id', [authJwt.verifyToken], union.getAreasOfJob);

/* GET all votes for a job */
router.get('/votes/:id/:area?', [authJwt.verifyToken], union.getVotes);

/* GET all complains for job */
router.get('/complaint/:id/:area?', [authJwt.verifyToken], union.getComplaintsWithId); 

/* GET all strikes for job */
router.get('/strike/:id/:area?', [authJwt.verifyToken], union.getStrikesWithId);

/* POST create a job */
router.post('/job', [authJwt.verifyToken, authJwt.isModeratorOrAdmin, jobDataValidate], union.createJob);

  /* POST create a area */
router.post('/area',  [authJwt.verifyToken, authJwt.isModeratorOrAdmin, areaDataValidate], union.createArea);

/* POST create a complaint */
router.post('/complaint',  [authJwt.verifyToken, complaintDataValidate], union.createComplaint);

/* POST create a demand */
router.post('/demand',  [authJwt.verifyToken, demandDataValidate], union.createDemand);

/* POST create a strike */
router.post('/strike', [authJwt.verifyToken, authJwt.isModeratorOrAdmin, strikeDataValidate], union.createStrike);

/* POST vote on a demand */
router.post('/demand/vote', [authJwt.verifyToken, voteDataValidate], union.createVote);

/* POST join a strike */
router.post('/strike/join', [authJwt.verifyToken, joinStrikeDataValidate], union.createStrikeJoin);

module.exports = router;