/**
 * TractsController
 *
 * @module      :: Controller
 * @description	:: A set of functions called `actions`.
 *
 *                 Actions contain code telling Sails how to respond to a certain type of request.
 *                 (i.e. do stuff, then send some JSON, show an HTML page, or redirect to another URL)
 *
 *                 You can configure the blueprint URLs which trigger these actions (`config/controllers.js`)
 *                 and/or override them with custom routes (`config/routes.js`)
 *
 *                 NOTE: The code you write here supports both HTTP and Socket.io automatically.
 *
 * @docs        :: http://sailsjs.org/#!documentation/controllers
 */

module.exports = {
    
  singleTract:function(req,res){
  	var sql = "select * from CTPP_34.A302103_tracts where from_tract = '"+req.param("tractId")+"'" ;
	Tracts.query(sql,{},function(err,trips_data){
		if (err) { res.send('{status:"error",message:"'+err+'"}',500); return console.log(err);}
		console.log(trips_data);
		res.send(trips_data);
	});
  	// res.send("singleTract" + req.param("tractId"));



  },

  toTract:function(params){



  }.

  /**
   * Overrides for the settings in `config/controllers.js`
   * (specific to TractsController)
   */
  _config: {}

  
};
