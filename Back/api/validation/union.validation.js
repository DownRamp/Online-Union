const { body } = require("express-validator");

const jobDataValidate = [
    body("name")
      .exists({ checkFalsy: true })
      .withMessage("Name is required")
      .isString()
      .withMessage("Name should be string"),
    body("description")
      .exists()
      .withMessage("Description is required")
      .isString()
      .withMessage("Description should be string")
  ];

const areaDataValidate = [
    body("location")
      .exists({ checkFalsy: true })
      .withMessage("Location is required")
      .isString()
      .withMessage("Location should be string"),
    body("job_id")
      .exists()
      .withMessage("Job_id is required")
      .isInt()
  ];

const complaintDataValidate = [
    body("dislike")
      .exists({ checkFalsy: true })
      .withMessage("Dislike is required")
      .isString()
      .withMessage("Dislike should be string"),
    body("area_id")
      .exists()
      .withMessage("area_id is required")
      .isInt()
      .withMessage("area_id should be int"),
    body("job_id")
    .exists()
    .withMessage("job_id is required")
    .isInt()
    .withMessage("job_id should be int")
  ];

const demandDataValidate = [
    body("area_id")
      .exists()
      .withMessage("area_id is required")
      .isInt()
      .withMessage("area_id should be int"),
    body("title")
        .exists()
        .withMessage("title is required")
        .isString()
        .withMessage("title should be string")
        .custom((value) => {
        if (value.length > 50) {
            return Promise.reject("Title should be 50 digits or less");
        } else {
            return true;
        }
        }),
    body("reason")
        .exists({ checkFalsy: true })
        .withMessage("Reason is required")
        .isString()
        .withMessage("Reason should be string"),
    body("job_id")
        .exists()
        .withMessage("job_id is required")
        .isInt()
        .withMessage("job_id should be int")
  ];

const strikeDataValidate = [
    body("title")
      .exists({ checkFalsy: true })
      .withMessage("Title is required")
      .isString()
      .withMessage("Title should be string"),
    body("description")
      .exists()
      .withMessage("description is required")
      .isString()
      .withMessage("description should be string"),
    body("area_id")
      .exists()
      .withMessage("area_id is required")
      .isInt()
      .withMessage("area_id should be int"),
    body("job_id")
      .exists()
      .withMessage("job_id is required")
      .isInt()
      .withMessage("job_id should be int"),
  ];

const voteDataValidate = [
    body("id")
      .exists()
      .withMessage("id is required")
      .isInt()
      .withMessage("id should be int"),
  ];

const signupDataValidate = [
    body("status")
        .exists()
        .withMessage("status is required")
        .isInt()
        .withMessage("status should be int"),
    body("name")
      .exists({ checkFalsy: true })
      .withMessage("name is required")
      .isString()
      .withMessage("name should be string"),
    body("area_id")
      .exists()
      .withMessage("area_id is required")
      .isInt()
      .withMessage("area_id should be int"),
    body("job_id")
      .exists()
      .withMessage("job_id is required")
      .isInt()
      .withMessage("job_id should be int"),
  ];

const loginDataValidate = [
    body("userName")
      .exists({ checkFalsy: true })
      .withMessage("User name is required")
      .isString()
      .withMessage("User name should be string"),
    body("password")
      .exists()
      .withMessage("Password is required")
      .isString()
      .withMessage("Password should be string")
      .isLength({ min: 5 })
      .withMessage("Password should be at least 5 characters"),
  ];

const joinStrikeDataValidate = [
    body("strike_id")
    .exists()

  ];

module.exports = {
    jobDataValidate,
    areaDataValidate,
    complaintDataValidate,
    demandDataValidate,
    strikeDataValidate,
    voteDataValidate,
    signupDataValidate,
    loginDataValidate,
    joinStrikeDataValidate
  }