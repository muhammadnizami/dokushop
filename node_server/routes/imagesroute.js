var express    = require('express');        // call express
var router = express.Router();
exports.router = router;

router.route('/aksesoris/:nama_merek/:model/:nama_file').get(function(req, res, next){
	var nama_merek = req.params.nama_merek;
	var model = req.params.model;
	var nama_file = req.params.nama_file;

	res.sendfile("public/image/aksesoris/"+nama_merek+"/"+model+"/"+nama_file);
});
