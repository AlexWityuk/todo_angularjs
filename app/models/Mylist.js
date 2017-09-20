var db = require('../../routes/dbconnect');

function getAll_list(req, cb) {
    db.any('select *' +
            'from list')
        .then(function (found) {
            cb(found);
        })
        .catch(function (err) {
            cb(err);
        });
}
function  createPost (reqbody, cb){
    var title = reqbody.title;
    var deadline = reqbody.deadline;
    console.log(typeof (title));
    db.one('INSERT INTO list(title, deadline)' +
            'VALUES ($1, $2) RETURNING id AS last_id',
        [title, deadline])
        .then(function (last_id) {
            console.log(last_id);
            cb(last_id);
        })
        .catch(function (err) {
            console.log(err);
        });
}
function update (id, cd){
    db.none('UPDATE list SET ismade= 1 '+
            ' WHERE list.id = $1', [id])
        .then(function () {
            updatePersonnel_time(reqbody, userid);
            cb('nice');
        })
        .catch(function (err) {
        });
}
module.exports = {
    getAll_list: getAll_list,
    createPost: createPost,
    update: update
};
