package garagi.mr.backend.services;

import garagi.mr.backend.model.Garage;
import garagi.mr.backend.model.Role;
import garagi.mr.backend.repository.GarageRepository;
import garagi.mr.backend.repository.RoleRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class GarageService {

    private static final Logger logger = LoggerFactory.getLogger(RoleService.class);
    @Autowired
    private GarageRepository garageRepository;

    public List<Garage> getGaragesByMoughataa(String moughataa) {
        return garageRepository.findByMoughataa(moughataa);
    }



    // Get all garages
//    public List<Garage> getAllGarages() {
//        return garageRepository.findAll();
//    }

    public ResponseEntity<List<Garage>> getAllGarages() {
        List<Garage> roles = garageRepository.findAll();
        logger.info("HEY ",roles);
        return ResponseEntity.ok(roles);
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
