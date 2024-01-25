package garagi.mr.backend.services;

import garagi.mr.backend.model.Garage;
import garagi.mr.backend.repository.GarageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class GarageService {

    private final GarageRepository garageRepository;

    @Autowired
    public GarageService(GarageRepository garageRepository) {
        this.garageRepository = garageRepository;
    }

    // Get all garages
    public List<Garage> getAllGarages() {
        return garageRepository.findAll();
    }

    // Get a single garage by ID
    public Optional<Garage> getGarageById(Integer garageId) {
        return garageRepository.findById(garageId);
    }

    // Create a new garage
    public Garage createGarage(Garage garage) {
        return garageRepository.save(garage);
    }

    // Delete a garage
    public void deleteGarage(Integer garageId) {
        garageRepository.deleteById(garageId);
    }
}
