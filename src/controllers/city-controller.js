  const {CityService} =require('../services/index');
  
  const cityService=new CityService();


  const create=async (req,res)=>{
   try {
     const city= await cityService.createCity(req.body);
     return res.status(201).json({
        data:city,
        success:true,
        message:"successfully created city",
        err:{}
     })
   } catch (error) {
    return res.status(500).json({
        data:{},
        success:false,
        message:"failed to create city",
        err:error
     })
   }
  }

  const destroy=async (req,res)=>{
    try {
      const response= await cityService.deleteCity(req.params.id);
      return res.status(201).json({
         data:response,
         success:true,
         message:"successfully deleted city",
         err:{}
      })
    } catch (error) {
     return res.status(500).json({
         data:{},
         success:false,
         message:"failed to delete city",
         err:error
      })
    }
   }


   const get=async (req,res)=>{
    try {
      const city= await cityService.getCity(req.params.id);
      return res.status(201).json({
         data:city,
         success:true,
         message:"successfully fetched city",
         err:{}
      })
    } catch (error) {
     return res.status(500).json({
         data:{},
         success:false,
         message:"failed to fetch city",
         err:error
      })
    }
   }


   const update=async (req,res)=>{
    try {
      const response= await cityService.updateCity(req.params.id,req.body);
      return res.status(201).json({
         data:response,
         success:true,
         message:"successfully updated city",
         err:{}
      })
    } catch (error) {
     return res.status(500).json({
         data:{},
         success:false,
         message:"failed to update city",
         err:error
      })
    }
   }



   module.exports={
    create,
    get,
    destroy,
    update,
   }