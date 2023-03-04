const { City } = require('../models/index');


class CityRepository {

    async createCity({ name }) {
        try {
            const city = await City.create({ name });
            return city;
        } catch (error) {
            console.log("something went wrong in repository");
        }
    }

    async deleteCity(cityId) {
        try {
            await City.destroy({
                where: {
                    id: cityId
                }
            });
            return true;
        } catch (error) {
            console.log("something went wrong in repository");
        }
    }

    async updateCity(cityId, data) {

        try {
            const city = await City.update(data, {
                where: {
                    id: cityId,
                }
            })
            return city;
        } catch (error) {
            console.log("something went wrong in repository");
        }


    }

    async getCity(cityId){
        try {
            const city= await City.findByPk(cityId);
            return city;
        } catch (error) {
            console.log("something went wrong in repository");
        }
    }

}


module.exports = CityRepository;