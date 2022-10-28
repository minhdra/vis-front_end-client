import joi from 'joi';

export const informationValidator = (data) => {
  const rule = joi
    .object({
      ...data,
      firstName: joi.string().label('First Name').required(),
      lastName: joi.string().label('Last Name').required(),
      email: joi.string().email({ tlds: { allow: false } }).label('Email').required(),
      phone: joi
        .string()
        .label('Phone')
        .pattern(
          new RegExp(
            '^(0?)(3[2-9]|5[6|8|9]|7[0|6-9]|8[0-6|8|9]|9[0-4|6-9])[0-9]{7}$'
          )
        )
        .required(),
      industry: joi.string().required(),
    })
    .messages({
      'string.empty': `Your {#label} is required`,
      'string.pattern.base': `Your {#label} is invalid`,
    });

  return rule.validate(data, { abortEarly: false });
};
