const express = require('express');
const router = express.Router();
const union = require('../service/union.service');

/* GET all jobs */
router.get('/', async function(req, res, next) {
    try {
      res.json(await union.getAll(req.query.page));
    } catch (err) {
      console.error(`Error while getting jobs `, err.message);
      next(err);
    }
  });

/* GET all jobs in area */
router.get('/:id', async function(req, res, next) {
  try {
    res.json(await union.getJobAreaWithId(req.query.page, req.params.id));
  } catch (err) {
    console.error(`Error while getting jobs in area `, err.message);
    next(err);
  }
});

/* GET all areas for a job */
router.get('/area/:id', async function(req, res, next) {
  try {
    res.json(await union.getAreasOfJob(req.query.page, req.params.id));
  } catch (err) {
    console.error(`Error while getting areas for a job `, err.message);
    next(err);
  }
});

/* GET all votes for a job */
router.get('/votes/:id', async function(req, res, next) {
  try {
    res.json(await union.getVotes(req.query.page, req.params.id));
  } catch (err) {
    console.error(`Error while getting votes by id `, err.message);
    next(err);
  }
});

/* GET all complains for job */
router.get('/complaint/:id', async function(req, res, next) {
  try {
    res.json(await union.getComplaintsWithId(req.query.page, req.params.id));
  } catch (err) {
    console.error(`Error while getting complaints `, err.message);
    next(err);
  }
});

/* GET all strikes for job */
router.get('/strike/:id', async function(req, res, next) {
  try {
    res.json(await union.getStrikesWithId(req.query.page, req.params.id));
  } catch (err) {
    console.error(`Error while getting strikes by id `, err.message);
    next(err);
  }
});

router.get('/strike', async function(req, res, next) {
  try {
    res.json(await union.getStrikes(req.query.page));
  } catch (err) {
    console.error(`Error while getting union `, err.message);
    next(err);
  }
});

/* POST create a job */
router.post('/job', async function(req, res, next) {
  try {
      res.json(await union.createJob(req.body));
  } catch (err) {
      console.error(`Error while posting job `, err.message);
      next(err);
  }
  });

  /* POST create a area */
router.post('/area', async function(req, res, next) {
  try {
      res.json(await union.createArea(req.body));
  } catch (err) {
      console.error(`Error while posting area `, err.message);
      next(err);
  }
  });

/* POST create a complaint */
router.post('/complaint', async function(req, res, next) {
  try {
      res.json(await union.createComplaint(req.body));
  } catch (err) {
      console.error(`Error while posting complaint `, err.message);
      next(err);
  }
  });
/* POST create a demand */
router.post('/demand', async function(req, res, next) {
  try {
      res.json(await union.createDemand(req.body));
  } catch (err) {
      console.error(`Error while posting demand `, err.message);
      next(err);
  }
  });
/* POST create a strike */
router.post('/strike', async function(req, res, next) {
  try {
      res.json(await union.create(req.body));
  } catch (err) {
      console.error(`Error while posting strike `, err.message);
      next(err);
  }
  });
/* POST vote on a demand */
router.post('/demand/vote', async function(req, res, next) {
  try {
      res.json(await union.create(req.body));
  } catch (err) {
      console.error(`Error while posting vote `, err.message);
      next(err);
  }
  });
/* POST create a union member */
router.post('/signup', async function(req, res, next) {
  try {
      res.json(await union.createMember(req.body));
  } catch (err) {
      console.error(`Error while posting signup `, err.message);
      next(err);
  }
  });

  /* POST login */
router.post('/login', async function(req, res, next) {
  try {
      res.json(await union.login(req.body));
  } catch (err) {
      console.error(`Error while posting login `, err.message);
      next(err);
  }
  });

/* POST join a strike */
router.post('/strike/join', async function(req, res, next) {
    try {
        res.json(await union.createStrikeJoin(req.body));
    } catch (err) {
        console.error(`Error while posting join to strike `, err.message);
        next(err);
    }
    });

module.exports = router;