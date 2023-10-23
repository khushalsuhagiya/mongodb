//  $eq  --equl
db.student.find({ year : {$eq : 1958}})

//  $ne  --not equl
db.student.find({ year : {$ne : 1958}})

//  $gt  --greater than
db.student.find({ year : {$gt : 1958}})

//  $gte --greater than equl
db.student.find({ year : {$gte : 1958}})

//  $lt  --less than
db.student.find({ year : {$lt : 1958}})

//  $lte --less than equl
db.student.find({ year : {$lte : 1958}})

//  $in  --in an arrya
db.student.find({ year : {$in : [1958 , 1832, 1842]}})

//  $nin --in an arrya
db.student.find({ year : {$nin : [1958 , 1832, 1842]}})