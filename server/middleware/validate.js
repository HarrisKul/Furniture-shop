import Joi from 'joi'

const validate = (schema, req, res, next) => {
    const options = {
        abortEarly: true,
        stripUnknown: true
    }
    const {error, value} = schema.validate(req.body, options)
    
    let message = ''
    
    if(error) {
       switch(error.details[0].path[0]) {
        case 'first_name':
          message = 'Invalid first name'
          break
        case 'last_name':
          message = 'Invalid last name'
          break
        case 'email':
          message = 'Invalid email'
          break
        case 'password':
          message = 'Invalid password'
          break
        case 'title':
          message = 'Invalid title'
           break
        default:
          message = 'Invalid data provided'
          break
        }
        return res.status(500).send(message)
    }

    req.body = value
    next()
}

export const postValidator = (req, res, next) => {
    const schema = Joi.object({
        name: Joi.string().min(5).max(255).required(),
        description: Joi.string().allow(''),
        photo: Joi.string(),
        price: Joi.number().required()
    })
 
    validate(schema, req, res, next)
}

export const registerValidator = (req, res, next) => {
  const schema = Joi.object({
      first_name: Joi.string().min(2).max(50).required(),
      last_name: Joi.string().min(2).max(50).required(),
      email: Joi.string().required().email(),
      password: Joi.string().min(6).max(12).required()
  })

  validate(schema, req, res, next)
}

export const loginValidator = (req, res, next) => {
  const schema = Joi.object({
      email: Joi.string().required().email(),
      password: Joi.string().min(6).max(12).required()
  })

  validate(schema, req, res, next)
}

export const commentsValidator = (req, res, next) => {
  const schema = Joi.object({
      comment: Joi.string().min(5).required(),
      postId: Joi.integer().required()
      
  })

  validate(schema, req, res, next)
}

export const ordersValidator = (req, res, next) => {
  const schema = Joi.object({
      order_date: Joi.date().required(),
      status: Joi.number().integer(),
      postId: Joi.number().integer().required()
  })

  validate(schema, req, res, next)
}
 
export default validate