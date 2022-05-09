const { default: mongoose } = require('mongoose');
const Place = require('../model/Place');

class PlaceController {
    async create(place) {
        const newPlace=await Place.create(place);
        return newPlace;
    }

    async getAll() {
       const places=await Place.find().lean();  
       return places;
    }

    async getById(id) {
        const place = await Place.findById(id);
        return place;
    }

    async update(id,place) {
        const newinformation = { $set: {title: place.title, image:place.image,description: place.description } };
        const updatePlaces = await Place.findOneAndUpdate({_id:id}, newinformation, {new: true});
        return updatePlaces;
    }

    async delete(id) {
    const deletePlace = await Place.findByIdAndDelete(id);
    return deletePlace;
    }
}

module.exports=PlaceController;