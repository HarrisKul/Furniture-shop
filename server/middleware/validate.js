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
          message = 'Neteisingas vardas'
          break
        case 'last_name':
          message = 'Neteisingai nurodyta pavardė'
          break
        case 'email':
          message = 'Neteisingai nurodytas el. paštas'
          break
        case 'password':
          message = 'Neteisingai nurodytas slaptažodis'
          break
        case 'title':
          message = 'Neteisingai uzpildytas pavadinimas'
           break
        default:
          message = 'Neteisingai uzpildyti laukeliai'
          break
        }
        return res.status(500).send(message)
    }

    req.body = value
    next()
}

export const postValidator = (req, res, next) => {
    const schema = Joi.object({
        title: Joi.string().min(5).max(255).required(),
        city: Joi.string().min(5).max(255).required(),
        photo: Joi.string(),
        description: Joi.string().allow(''),
        sum: Joi.number().required()
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
 
export default validate