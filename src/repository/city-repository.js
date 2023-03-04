const {City} =require('../models/index');


class CityRepository{

async CreateCity({name}){
   try {
    const city=await City.create({name});
    return city;
   } catch (error) {
    throw error;
   }
}

async DeleteCity(cityId){
    try {
        await City.Destroy({
            where:{
                id:cityId
            }
        });
    } catch (error) {
        
    }
}

}


module.exports=CityRepository;