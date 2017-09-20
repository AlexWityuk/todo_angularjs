var model = require('../models/Mylist');

function getAll_list(req, res, next) {
    var all_list = {};
    model.getAll_list(req.body, function (results) {
        all_list = results;
        console.log(all_list);
        res.json(all_list);
        res.end();
    });
}
function createPost (req, res, next){
    model.createPost(req.body, function(result){
        res.send('nice');
        res.end();
    });
}
function update (req, res, next){
    var id = parseInt(req.params.id);
    model.update (id, function(result){
        res.send('nice');
        res.end();
    });
}
module.exports = {
    getAll_list: getAll_list,
    createPost: createPost,
    update: update
};