exports.get = (req, res, next, model, options) => {

  let q = (options && options.find) ? options.find : {},
      populate = (options && options.populate) ? options.populate : null

  const query = req.params.id ? 
    model.findById(req.params.id) 
    : model.find(q)
  
  query.exec()

  if(populate) {
    populate.forEach(item => {
      query.populate(item);
    })
  }

  query.then((resource) => {

    if (!resource) {
      return next('Resource not found')
    }

    return res.json(resource)
  })
    .catch((err) => {
      // send the error to the error handler
      return next(err)
    })
}

exports.create = (req, res, next, model) => {
  const obj = model.create(new model(req.body))
  obj.then((resource) => {
    return res.json(resource)
  })
    .catch((err) => {
      // send the error to the error handler
      return next(err)
    })
}

exports.update = (req, res, next, model, options) => {

  let populate = (options && options.populate) ? options.populate : undefined

  const query =  model.findByIdAndUpdate(req.body._id, { $set: req.body }, { new: true })

  query.exec()

  if(populate) {
    populate.forEach(item => {
      query.populate(item);
    })
  }

  query.then((resource) => {

    if (!resource) {
      return next('Resource not found')
    }

    return res.json(resource)
  })
    .catch((err) => {
      // send the error to the error handler
      return next(err)
    })
}

exports.delete = (req, res, next, model) => {
  const obj = model.findById(req.params.id)
  obj.then((resource) => {

    // resource not found, let's throw an error
    if (!resource) {
      return next('Resource not found')
    }

    return resource.remove()
  })
    .then(() => res.json({ 'success': true }))
    .catch((err) => {
      // send the error to the error handler
      return next(err)
    })
}