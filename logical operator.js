// $and :
db.student.find({$and : [{pages :{$eq: 209}},{author :"Virginia Woolf"}]})

// $or  :
db.student.find({$or : [{pages :{$lt: 209}},{author :"Virginia Woolf"}]})

// $nor :
db.student.find({$nor : [{pages :{$lte: 209}},{author :"Virginia Woolf"}]})

// not  :
db.student.find({pages :{$not :{$lt : 784}}})