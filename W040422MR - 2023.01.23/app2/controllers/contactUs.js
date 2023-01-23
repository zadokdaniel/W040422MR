const joi = require("joi");

const contacted = [];

const addContactInfo = (contactInformation) => {
  const errors = validateFormInputs(contactInformation);

  if (errors) {
    throw errors;
  }

  contacted.push(contactInformation);
};

const getAll = () => {
  return contacted;
};

const validateFormInputs = (contactInformation) => {
  const { error } = joi
    .object({
      name: joi.string().min(2).max(40).required(),
      email: joi.string().email().required(),
      phone: joi
        .string()
        .regex(/^0[2-9]\d{7,8}$/)
        .required(),
      notes: joi.string().min(2).max(1000).required(),
    })
    .validate(contactInformation, { abortEarly: false });

  if (!error) {
    return null;
  }

  return error.details.map((d) => d.message);
};

module.exports = {
  addContactInfo,
  getAll,
};
