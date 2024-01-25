package garagi.mr.backend.services;


//package garagi.mr.backend.services;

import garagi.mr.backend.model.GarageService;
import garagi.mr.backend.repository.GarageServiceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class GarageServiceService {

    private final GarageServiceRepository garageServiceRepository;

    @Autowired
    public GarageServiceService(GarageServiceRepository garageServiceRepository) {
        this.garageServiceRepository = garageServiceRepository;
    }

    // Get all garage services
    public List<GarageService> getAllGarageServices() {
        return garageServiceRepository.findAll();
    }

    // Get a single garage service by ID
    public Optional<GarageService> getGarageServiceById(Integer serviceId) {
        return garageServiceRepository.findById(serviceId);
    }

    // Create a new garage service
    public GarageService createGarageService(GarageService garageService) {
        return garageServiceRepository.save(garageService);
    }

    // Delete a garage service
    public void deleteGarageService(Integer serviceId) {
        garageServiceRepository.deleteById(serviceId);
    }
}
